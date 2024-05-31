import "~/styles/globals.css";
import SideNav from "../components/SideNav";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { Providers } from "./providers";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <SessionProvider>
          <TRPCReactProvider>
            <Head>
              <title>Twitter Clone</title>
              <meta
                name="description"
                content="This is a Twitter clone by Web Dev Simplified"
              />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="sm container mx-auto flex items-start sm:pr-4">
              <SideNav />
              <div className="min-h-screen flex-grow border-x">
                <Providers>{children}</Providers>
              </div>
            </div>
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
