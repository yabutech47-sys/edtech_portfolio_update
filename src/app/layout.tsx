import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EdTech Hub ET | Transforming Education Through Digital Innovation",
  description:
    "A pioneering social enterprise established in 2021 empowering educators, institutions, and learners with scalable digital education solutions across Ethiopia. Technology in the hands of good teacher transforms education!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="light">
      <body className="font-sans bg-[var(--bg-page)] text-[var(--text-main)] antialiased transition-colors duration-200 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
