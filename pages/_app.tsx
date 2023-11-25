import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { useRouter } from "next/router";
import { IntlProvider, MessageFormatElement } from "react-intl";
import ar from "../lang/ar.json";
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import nl_NL from "../lang/nl-NL.json";
import { ThemeProvider, useTheme } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const messages = {
  ar,
  en,
  fr,
  "nl-NL": nl_NL,
};

function getDirection(locale: string) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { locale } = router;
  const messagesForLocale = messages[locale as keyof typeof messages];

  if (!messagesForLocale) {
    console.error(`No messages found for locale: ${locale}`);
    // Handle the case where there's no matching locale
    // Example: locale = "en";
  }

  const { resolvedTheme } = useTheme();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" forcedTheme={resolvedTheme || undefined}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <IntlProvider
            locale={String(locale)}
            messages={
              messagesForLocale as
                | Record<string, string>
                | Record<string, MessageFormatElement[]>
                | undefined
            }>
            <Component {...pageProps} dir={getDirection(String(locale))} />
          </IntlProvider>
        </MantineProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
