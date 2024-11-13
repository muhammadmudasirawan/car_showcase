import { Footer, NavigationBar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Car Hub",
  description: "Discover the Best Car in the World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="relative">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

