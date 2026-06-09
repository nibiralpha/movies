import "./globals.css";
import "bootstrap-4-grid/css/grid.min.css"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>{children}</body>
    </html>
  );
}
