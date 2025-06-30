export interface OrganizationDto {
  id: string;
  legalName: string;
  avatar?: string;
  metadata?: {
    onboarding?: boolean;
  };
}

export interface LedgerDto {
  id: string;
  name: string;
  organizationId: string;
}

export interface PluginManifestDto {
  name: string;
  title: string;
  icon: string;
  route: string;
  enabled: boolean;
}

export interface PaginationDto<T> {
  items: T[];
  limit: number;
  page: number;
  total?: number;
}
