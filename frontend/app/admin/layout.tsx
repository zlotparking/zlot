export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-zlot-dark text-white px-6 py-4 font-bold">
        ZLOT Admin
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
