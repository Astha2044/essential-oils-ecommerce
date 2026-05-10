import "./globals.css";
import FloatingActions from "../components/FloatingActions";

export const metadata = {
  metadataBase: new URL('https://www.vsnaturalsandessentials.com'),
  title: {
    default: "VS Naturals & Essentials | Pure Essential Oils & Botanical Wellness",
    template: "%s | VS Naturals & Essentials"
  },
  description: "Discover the purity of nature with VS Naturals & Essentials. Premium quality essential oils, carrier oils, and botanical wellness products for a holistic lifestyle.",
  keywords: ["essential oils", "botanical wellness", "pure oils", "natural aromatherapy", "VS Naturals", "carrier oils", "handmade wellness"],
  authors: [{ name: "VS Naturals & Essentials" }],
  creator: "VS Naturals & Essentials",
  publisher: "VS Naturals & Essentials",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "VS Naturals & Essentials | Pure Essential Oils & Botanical Wellness",
    description: "Premium quality essential oils and botanical wellness products.",
    url: 'https://www.vsnaturalsandessentials.com',
    siteName: 'VS Naturals & Essentials',
    images: [
      {
        url: '/images/newlogo.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/newlogo.jpg',
    apple: '/images/newlogo.jpg',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}