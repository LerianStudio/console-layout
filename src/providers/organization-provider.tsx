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

  // Auto-select first organization if none selected
  useEffect(() => {
    if (organizations?.items && organizations.items.length > 0 && !current.id) {
      setCurrent(organizations.items[0]);
    }
  }, [organizations, current.id]);

  // Auto-select first ledger if none selected
  useEffect(() => {
    if (ledgers?.items && ledgers.items.length > 0 && !currentLedger.id) {
      setCurrentLedger(ledgers.items[0]);
    }
  }, [ledgers, currentLedger.id]);

  // Clear ledger when organization changes
  useEffect(() => {
    if (current.id && currentLedger.organizationId !== current.id) {
      setCurrentLedger({} as LedgerDto);
    }
  }, [current.id, currentLedger.organizationId]);

  return (
    <OrganizationContext.Provider
      value={{
        currentOrganization: current,
        setOrganization: setCurrent,
        currentLedger: currentLedger,
        setLedger: setCurrentLedger,
        isLoading: loadingOrgs || loadingLedgers,
      }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};
