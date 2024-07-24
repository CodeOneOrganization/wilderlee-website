import { orbitron, khula } from "./fonts"

import "./index.css";
import Providers from "@/common/contexts/Providers";

export { metadata } from "./metadata"
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${orbitron.variable} ${khula.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
