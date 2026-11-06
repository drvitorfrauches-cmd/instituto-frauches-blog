export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex-1 bg-white text-neutral-900"
      style={{ colorScheme: "light" }}
    >
      {children}
    </div>
  );
}
