import { useData } from "vitepress";
import { SiteConfig, ThemeConfig } from "../types";

export function useThemeConfig(): ThemeConfig {
  return useData().theme.value;
}

export function useSiteConfig():SiteConfig {
  return useData().site.value as unknown as SiteConfig;
}
