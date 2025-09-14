import "./globals.css";

export const metadata = {
  title: "Paradais Voyage",
  description: "Luxury Concierge Travel Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
