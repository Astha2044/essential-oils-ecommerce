import "./globals.css";
import FloatingActions from "../components/FloatingActions";

export const metadata = {
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