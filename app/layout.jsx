import "./globals.css";

export const metadata = {
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}