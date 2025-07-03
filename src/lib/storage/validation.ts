import { OrganizationDto, LedgerDto } from "../../types";

/**
 * Verifica se a organização do localStorage ainda existe na lista da API
 */
export const isOrganizationValid = (
  storedOrganization: OrganizationDto | null,
  apiOrganizations: OrganizationDto[]
): boolean => {
  if (!storedOrganization || !apiOrganizations?.length) return false;

  return apiOrganizations.some((org) => org.id === storedOrganization.id);
};

/**
 * Verifica se o ledger do localStorage ainda existe na lista da API e pertence à organização atual
 */
export const isLedgerValid = (
  storedLedger: LedgerDto | null,
  apiLedgers: LedgerDto[],
  currentOrganizationId: string
): boolean => {
  if (!storedLedger || !apiLedgers?.length || !currentOrganizationId)
    return false;

  return apiLedgers.some(
    (ledger) =>
      ledger.id === storedLedger.id &&
      ledger.organizationId === currentOrganizationId
  );
};

/**
 * Encontra uma organização válida do localStorage ou retorna a primeira da API
 */
export const getValidOrganization = (
  storedOrganization: OrganizationDto | null,
  apiOrganizations: OrganizationDto[]
): OrganizationDto | null => {
  if (!apiOrganizations?.length) return null;

  if (isOrganizationValid(storedOrganization, apiOrganizations)) {
    // Retorna a versão atualizada da API, não a do localStorage
    return (
      apiOrganizations.find((org) => org.id === storedOrganization!.id) ||
      apiOrganizations[0]
    );
  }

  return apiOrganizations[0];
};

/**
 * Encontra um ledger válido do localStorage ou retorna o primeiro da API
 */
export const getValidLedger = (
  storedLedger: LedgerDto | null,
  apiLedgers: LedgerDto[],
  currentOrganizationId: string
): LedgerDto | null => {
  if (!apiLedgers?.length || !currentOrganizationId) return null;

  if (isLedgerValid(storedLedger, apiLedgers, currentOrganizationId)) {
    // Retorna a versão atualizada da API, não a do localStorage
    return (
      apiLedgers.find((ledger) => ledger.id === storedLedger!.id) ||
      apiLedgers[0]
    );
  }

  return apiLedgers[0];
};
