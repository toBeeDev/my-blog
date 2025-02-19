import type { Metadata } from "next";
import "@/style/globals.css";
import Layout from "@/shared/components/layout/Layout";
import Providers from "./provider";
import { Work_Sans } from "next/font/google";

const work_Sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B.log",
  description: "BEE의 블로그",
  openGraph: {
    title: `B.log`,
    description: "BEE의 블로그",
    type: "website",
    siteName: `모두의주차장`,
    locale: "ko_KR",
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/dark.svg`,
  },
};
console.log(process.env.NEXT_PUBLIC_BASE_URL);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(work_Sans.className, `bg-white  dark:bg-zinc-900`)}>
        <Providers>
          <div className="flex w-full h-[100dvh] overflow-x-hidden">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
