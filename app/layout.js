import { Inter } from "next/font/google";
import "./styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Food Farm",
  description: "Food Farm",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
  );
}
