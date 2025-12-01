// app/auth/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] p-6">
      {children} {/* aquí se renderiza auth/page.tsx */}
    </div>
  );
}
