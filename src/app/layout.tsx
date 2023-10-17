import "./globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Uploader",
  description: "Generated by Facundo Fernandez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-gray-100"
    >
      <body
        className={`h-screen flex flex-col justify-between items-center ${poppins.className}`}
      >
        {children}

        <footer className={`flex justify-center mb-3 ${montserrat.className}`}>
          <p className="text-sm text-center text-gray-400">
            Created by{" "}
            <span className="font-bold underline">Facundo Fernandez</span> -
            devChallenges.io
          </p>
        </footer>
      </body>
    </html>
  );
}
