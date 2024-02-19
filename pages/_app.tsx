import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider as CustomThemeProvider } from "../components/ui/theme-provider";
import { ModeToggle } from "../components/ui/ModeToggle";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>

    <CustomThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
      <ModeToggle />
      <Component {...pageProps} />
    </CustomThemeProvider>
    </div>
  );
}

export default MyApp;