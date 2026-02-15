import "./globals.css";

export const metadata = {
  title: "Private Jet Charter & Luxury Travel Concierge | Paradais Voyage",
  description:
    "Private jet charter, ultra-luxury travel planning and bespoke concierge services across the UK, Europe and worldwide. Discreet. Precise. Personal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
