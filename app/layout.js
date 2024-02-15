import "./styles/index.scss";

export const metadata = {
  title: "Food Farm",
  description: "Food Farm",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/hack-font@3/build/web/hack.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
        {children}
        </body>
      </html>
  );
}
