import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ['300','400','500','600','700','800'],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
  weight: ['300','400','500','600','700','800'],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
