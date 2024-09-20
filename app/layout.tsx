import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "@/utils/Provider";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <Provider>{children}</Provider>
        <Footer></Footer>
      </body>
    </html>
  );
}
