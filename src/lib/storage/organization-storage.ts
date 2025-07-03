import { OrganizationDto } from "../../types";

const STORAGE_KEY = "midaz_current_organization";

/**
 * Salva a organização atual no localStorage
 */
export const saveOrganizationToStorage = (
  organization: OrganizationDto
): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(organization));
  } catch (error) {
    console.warn("Failed to save organization to localStorage:", error);
  }
};

/**
 * Carrega a organização do localStorage
 */
export const loadOrganizationFromStorage = (): OrganizationDto | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored);

    // Validação básica da estrutura
    if (parsed && typeof parsed === "object" && parsed.id) {
      return parsed as OrganizationDto;
    }

    return null;
  } catch (error) {
    console.warn("Failed to load organization from localStorage:", error);
    return null;
  }
};

/**
 * Remove a organização do localStorage
 */
export const clearOrganizationFromStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Failed to clear organization from localStorage:", error);
  }
};
