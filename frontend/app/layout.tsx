import "./globals.css";
import RootShell from "./components/RootShell";

export const metadata = {
  title: "ZLOT Parking",
  description: "Parking reservation system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
