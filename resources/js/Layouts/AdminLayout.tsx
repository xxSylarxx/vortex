import { useState, PropsWithChildren, ReactNode } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  Settings,
  Bell,
  Search,
  ExternalLink,
  LogOut,
  Menu,
  X,
  FileText,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/Components/ui/badge";

interface AdminLayoutProps {
  header?: ReactNode;
}

export default function AdminLayout({
  header,
  children,
}: PropsWithChildren<AdminLayoutProps>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = usePage().props.auth.user;
  const currentUrl = usePage().url;

  const navItems = [
    {
      group: "Principal",
      items: [
        {
          label: "Dashboard",
          href: route("dashboard"),
          icon: LayoutDashboard,
          active: currentUrl.startsWith("/dashboard"),
        },
        {
          label: "Admisión & Leads",
          href: "#",
          icon: GraduationCap,
          active: currentUrl.startsWith("/admin/admision"),
          badge: "Nuevo",
        },
        {
          label: "Postulantes",
          href: "#",
          icon: FileText,
          active: currentUrl.startsWith("/admin/postulantes"),
        },
      ],
    },
    {
      group: "Académico e Institucional",
      items: [
        {
          label: "Niveles Escolares",
          href: "#",
          icon: BookOpen,
          active: currentUrl.startsWith("/admin/niveles"),
        },
        {
          label: "Autoridades & Docentes",
          href: "#",
          icon: Users,
          active: currentUrl.startsWith("/admin/autoridades"),
        },
      ],
    },
    {
      group: "Sistema",
      items: [
        {
          label: "Mi Perfil",
          href: route("profile.edit"),
          icon: Settings,
          active: currentUrl.startsWith("/profile"),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* SIDEBAR MÓVIL (Overlay) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR PRINCIPAL */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header del Sidebar con Escudo STA */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0d59b2] text-white flex items-center justify-center font-black shadow-md shadow-blue-500/20 text-xs">
              STA
            </div>
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 leading-tight">
                Santo Tomás
              </h2>
              <p className="text-[11px] font-semibold text-slate-400">
                Panel Administrativo
              </p>
            </div>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navegación */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-6">
          {navItems.map((group) => (
            <div key={group.group} className="space-y-1">
              <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                {group.group}
              </p>
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      item.active
                        ? "bg-[#0d59b2] text-white shadow-sm shadow-blue-500/25"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <Badge
                        variant={item.active ? "secondary" : "default"}
                        className="text-[10px] px-1.5 py-0"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer del Sidebar con Usuario y Logout */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs uppercase border border-slate-300">
                {user.name.substring(0, 2)}
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-slate-800 truncate">
                  {user.name}
                </p>
                <p className="text-[11px] text-slate-400 truncate">
                  {user.email}
                </p>
              </div>
            </div>
            <Link
              href={route("logout")}
              method="post"
              as="button"
              className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
              title="Cerrar Sesión"
            >
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL DE CONTENIDO */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Buscador Rápido */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-400 w-64 text-xs">
              <Search className="w-3.5 h-3.5" />
              <input
                type="text"
                placeholder="Buscar postulante, DNI..."
                className="bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 w-full text-xs p-0 focus:ring-0"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Ver Web Pública */}
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-[#0d59b2] hover:bg-blue-50 transition-colors"
            >
              <span>Ver Web Pública</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Notificaciones */}
            <button
              className="relative p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors"
              aria-label="Notificaciones"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>

            {/* Chip de Rol */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0d59b2]" />
              <span>Admin</span>
            </div>
          </div>
        </header>

        {/* Subheader / Breadcrumbs (Opcional) */}
        {header && (
          <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4">
            {header}
          </div>
        )}

        {/* Contenido Dinámico */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
