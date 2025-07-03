"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import { OrganizationDto, LedgerDto } from "@/types";
import { useListOrganizations } from "@/client/organizations";
import { useListLedgers } from "@/client/ledgers";
import {
  saveOrganizationToStorage,
  loadOrganizationFromStorage,
  clearOrganizationFromStorage,
} from "../lib/storage/organization-storage";
import {
  saveLedgerToStorage,
  loadLedgerFromStorage,
  clearLedgerFromStorage,
} from "../lib/storage/ledger-storage";
import {
  getValidOrganization,
  getValidLedger,
} from "../lib/storage/validation";

interface OrganizationContextProps {
  currentOrganization: OrganizationDto;
  setOrganization: (organization: OrganizationDto) => void;
  currentLedger: LedgerDto;
  setLedger: (ledger: LedgerDto) => void;
  isLoading: boolean;
}

const OrganizationContext = createContext<OrganizationContextProps>(
  {} as OrganizationContextProps
);

export const useOrganization = () => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error(
      "useOrganization must be used within an OrganizationProvider"
    );
  }
  return context;
};

export const OrganizationProvider = ({ children }: PropsWithChildren) => {
  const [current, setCurrent] = useState<OrganizationDto>(
    {} as OrganizationDto
  );
  const [currentLedger, setCurrentLedger] = useState<LedgerDto>(
    {} as LedgerDto
  );

  const { data: organizations, isLoading: loadingOrgs } = useListOrganizations({
    page: 1,
    limit: 100,
  });
  const { data: ledgers, isLoading: loadingLedgers } = useListLedgers({
    organizationId: current?.id || "",
    limit: 100,
  });

  // Função para atualizar organização (usada externamente)
  const setOrganization = (organization: OrganizationDto) => {
    saveOrganizationToStorage(organization);
    setCurrent(organization);
    // Limpar ledger quando mudar organização
    clearLedgerFromStorage();
    setCurrentLedger({} as LedgerDto);
  };

  // Função para atualizar ledger (usada externamente)
  const setLedger = (ledger: LedgerDto) => {
    saveLedgerToStorage(ledger);
    setCurrentLedger(ledger);
  };

  // Gerenciar organização: localStorage -> API -> validação -> fallback
  useEffect(() => {
    if (organizations?.items && organizations.items.length > 0 && !current.id) {
      const storedOrganization = loadOrganizationFromStorage();
      const validOrganization = getValidOrganization(
        storedOrganization,
        organizations.items
      );

      if (validOrganization) {
        // Se a organização armazenada não é válida, salvar a nova no localStorage
        if (
          !storedOrganization ||
          storedOrganization.id !== validOrganization.id
        ) {
          saveOrganizationToStorage(validOrganization);
        }
        setCurrent(validOrganization);
      }
    }
  }, [organizations, current.id]);

  // Gerenciar ledger: localStorage -> API -> validação -> fallback
  useEffect(() => {
    if (
      ledgers?.items &&
      ledgers.items.length > 0 &&
      !currentLedger.id &&
      current.id
    ) {
      const storedLedger = loadLedgerFromStorage();
      const validLedger = getValidLedger(
        storedLedger,
        ledgers.items,
        current.id
      );

      if (validLedger) {
        // Se o ledger armazenado não é válido, salvar o novo no localStorage
        if (!storedLedger || storedLedger.id !== validLedger.id) {
          saveLedgerToStorage(validLedger);
        }
        setCurrentLedger(validLedger);
      }
    }
  }, [ledgers, currentLedger.id, current.id]);

  // Limpar ledger quando organização muda (validação de consistência)
  useEffect(() => {
    if (
      current.id &&
      currentLedger.organizationId &&
      currentLedger.organizationId !== current.id
    ) {
      clearLedgerFromStorage();
      setCurrentLedger({} as LedgerDto);
    }
  }, [current.id, currentLedger.organizationId]);

  return (
    <OrganizationContext.Provider
      value={{
        currentOrganization: current,
        setOrganization,
        currentLedger: currentLedger,
        setLedger,
        isLoading: loadingOrgs || loadingLedgers,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
