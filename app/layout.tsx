import "./globals.css";

export const metadata = {
  title: "QR4Wifi",
  description: "Get a quick image to share your wifi's passwords.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-screen" lang="en">
      <body className="flex items-center justify-center align-middle h-screen">
        {children}
      </body>
    </html>
  );
}
