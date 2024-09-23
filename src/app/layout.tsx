import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ToastProvider } from "@/provider/toast-provider";
import Image from "next/image";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata: Metadata = {
  title: "FOODIED",
  description: "Have food and Share love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("bg-background antialiased", urbanist.variable)}>
          <ToastProvider />
          <Image
            src="/hero.svg"
            alt="Main Page Image"
            className="absolute right-0 top-0 -z-10 w-full md:w-3/5"
            width={800}
            height={600}
          />
          <Header userId={userId} />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
