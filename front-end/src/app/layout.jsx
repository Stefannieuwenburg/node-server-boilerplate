import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div>
        <body>{children}</body>
      </div>
    </html>
  );
}
