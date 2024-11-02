import { ColorSchemeScript, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import "./globals.css";

export const metadata = {
  title: 'Google Login',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}