import Navbar from "./components/navbar";
import "./globals.css";
import Footer from "./components/footer";

export const metadata = {
  title: "4NIS - Online Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
