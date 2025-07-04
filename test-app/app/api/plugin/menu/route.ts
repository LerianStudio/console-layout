import { NextRequest, NextResponse } from "next/server";

export interface PluginManifestDto {
  name: string;
  title: string;
  icon: string;
  route: string;
  enabled: boolean;
}

// Mock plugin data
const pluginMenus: PluginManifestDto[] = [
  {
    name: "analytics",
    title: "Analytics",
    icon: "BarChart3",
    route: "/analytics",
    enabled: true,
  },
  {
    name: "reports",
    title: "Reports",
    icon: "FileText",
    route: "/reports",
    enabled: true,
  },
  {
    name: "integrations",
    title: "Integrations",
    icon: "Plug",
    route: "/integrations",
    enabled: true,
  },
  {
    name: "webhooks",
    title: "Webhooks",
    icon: "Webhook",
    route: "/webhooks",
    enabled: false,
  },
  {
    name: "api-docs",
    title: "API Documentation",
    icon: "Book",
    route: "/api-docs",
    enabled: true,
  },
  {
    name: "audit-logs",
    title: "Audit Logs",
    icon: "Shield",
    route: "/audit",
    enabled: true,
  },
];

export async function GET(request: NextRequest) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 150));

  // Return only enabled plugins by default
  const searchParams = request.nextUrl.searchParams;
  const includeDisabled = searchParams.get("includeDisabled") === "true";

  const filteredMenus = includeDisabled
    ? pluginMenus
    : pluginMenus.filter((menu) => menu.enabled);

  return NextResponse.json(filteredMenus);
}
