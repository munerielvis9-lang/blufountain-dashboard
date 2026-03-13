import "./globals.css";

export const metadata = {
  title: "Blufountain Admin Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full antialiased bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}