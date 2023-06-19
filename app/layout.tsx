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
    <html lang="en">
      <body>
        <div className="flex items-center justify-center align-middle h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
