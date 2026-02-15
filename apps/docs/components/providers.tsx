"use client";

import type { ComponentProps } from "react";
import { RootProvider } from "fumadocs-ui/provider";
import { createStore, Provider as JotaiProvider } from "jotai";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps as NextThemesProviderProps } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";

const store = createStore();

// Get props from RootProvider, excluding 'children' as we define it ourselves.
type FumadocsRootProviderProps = Omit<
  ComponentProps<typeof RootProvider>,
  "children"
>;

interface ProvidersProps extends FumadocsRootProviderProps {
  children: React.ReactNode;
  theme: NextThemesProviderProps;
  // Any other props will be passed to FumadocsRootProviderProps
}

export function Providers({
  children,
  theme,
  ...rootProviderProps
}: ProvidersProps) {
  return (
    <NextThemesProvider {...theme}>
      <RootProvider {...rootProviderProps}>
        <JotaiProvider store={store}>
          <TooltipProvider>{children}</TooltipProvider>
        </JotaiProvider>
      </RootProvider>
    </NextThemesProvider>
  );
}
