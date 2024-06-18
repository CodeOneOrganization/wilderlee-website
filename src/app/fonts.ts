import { Oranienbaum, Orbitron, Khula } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"], variable: "--font-orbitron" });
const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: ["400"], variable: "--font-khula" });
const khula = Khula({ subsets: ["latin"], weight: ["400"], variable: "--font-khula" });

export { oranienbaum, orbitron, khula }
