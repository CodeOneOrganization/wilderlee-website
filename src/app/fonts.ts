import { Oranienbaum, Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"], variable: "--font-orbitron" });
const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: ["400"], variable: "--font-oranienbaum" });

export { oranienbaum, orbitron }
