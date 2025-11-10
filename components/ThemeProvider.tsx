// components/ThemeProvider.tsx
"use client";

// 1. Impor 'ThemeProviderProps' langsung dari "next-themes"
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

// 2. Baris import yang error (dari dist/types) sudah dihapus

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
