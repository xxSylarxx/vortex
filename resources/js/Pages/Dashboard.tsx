import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import {
  Users,
  GraduationCap,
  Calendar,
  TrendingUp,
  Download,
  Plus,
  Phone,
  Mail,
  MoreVertical,
  CheckCircle2,
  Clock,
  MessageCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

export default function Dashboard() {
  // Datos simulados de postulantes/leads
  const postulantes = [
    {
      id: "POST-001",
      padre: "Carlos Mendoza R.",
      alumno: "Mateo Mendoza V.",
      grado: "1° Primaria",
      telefono: "987 654 321",
      fecha: "Hoy, 10:45 am",
      estado: "Pendiente",
      estadoVariant: "warning" as const,
    },
    {
      id: "POST-002",
      padre: "Lucía Paredes G.",
      alumno: "Sofía Paredes G.",
      grado: "Inicial 4 años",
      telefono: "912 345 678",
      fecha: "Hoy, 09:20 am",
      estado: "En Contacto",
      estadoVariant: "default" as const,
    },
    {
      id: "POST-003",
      padre: "Jorge Huamán T.",
      alumno: "Sebastián Huamán M.",
      grado: "1° Secundaria",
      telefono: "998 877 665",
      fecha: "Ayer, 04:15 pm",
      estado: "Matriculado",
      estadoVariant: "success" as const,
    },
    {
      id: "POST-004",
      padre: "Rosa María Benítez",
      alumno: "Valentina Benítez B.",
      grado: "3° Primaria",
      telefono: "955 443 322",
      fecha: "14/09/2026",
      estado: "Pendiente",
      estadoVariant: "warning" as const,
    },
  ];

  return (
    <AdminLayout
      header={
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Panel de Control
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Resumen general del proceso de Admisión 2026 y gestión institucional.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold shadow-sm transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Exportar</span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0d59b2] hover:bg-[#094182] text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition-all active:scale-95">
              <Plus className="w-3.5 h-3.5" />
              <span>Nuevo Postulante</span>
            </button>
          </div>
        </div>
      }
    >
      <Head title="Dashboard Admin | Colegio Santo Tomás de Aquino" />

      <div className="space-y-8">
        {/* KPI CARDS (SHADCN) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1 */}
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Solicitudes
              </CardTitle>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0d59b2] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-slate-900">128</div>
              <p className="text-[11px] text-emerald-600 font-bold flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+14% vs mes anterior</span>
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Por Contactar
              </CardTitle>
              <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-slate-900">18</div>
              <p className="text-[11px] text-amber-600 font-bold mt-1">
                Requieren llamada de asesor
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Matriculados 2026
              </CardTitle>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-slate-900">74</div>
              <p className="text-[11px] text-slate-400 font-medium mt-1">
                De 110 vacantes totales
              </p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Vacantes Disponibles
              </CardTitle>
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-slate-900">36</div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-[#0d59b2] h-1.5 rounded-full w-[67%]" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* TABLA DE POSTULANTES RECIENTES (SHADCN TABLE) */}
        <Card className="shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4">
            <div>
              <CardTitle className="text-base font-bold text-slate-900">
                Últimas Solicitudes de Admisión
              </CardTitle>
              <CardDescription className="text-xs text-slate-500">
                Leads recibidos en tiempo real desde la web y landings.
              </CardDescription>
            </div>
            <Badge variant="outline" className="text-xs font-bold">
              4 Nuevos hoy
            </Badge>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Postulante / Alumno</TableHead>
                  <TableHead>Grado de Interés</TableHead>
                  <TableHead>Padre de Familia</TableHead>
                  <TableHead>Teléfono</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {postulantes.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-bold text-slate-900">
                      <div>
                        <span>{item.alumno}</span>
                        <span className="block text-[11px] font-normal text-slate-400">
                          {item.id}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-xs text-slate-700">
                        {item.grado}
                      </span>
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {item.padre}
                    </TableCell>
                    <TableCell>
                      <a
                        href={`https://wa.me/51${item.telefono.replace(/\s+/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-600 hover:text-emerald-700 font-bold"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{item.telefono}</span>
                      </a>
                    </TableCell>
                    <TableCell className="text-xs text-slate-500">
                      {item.fecha}
                    </TableCell>
                    <TableCell>
                      <Badge variant={item.estadoVariant}>{item.estado}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <a
                          href={`tel:${item.telefono.replace(/\s+/g, "")}`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                          title="Llamar"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <button
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                          title="Opciones"
                        >
                          <MoreVertical className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
