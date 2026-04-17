'use client';

export default function Servicios() {
  return (
    <section className="px-10 py-[60px] min-h-[50vh] text-[#e3e3e3]">
      <h1 className="text-[40px] font-bold mb-8 text-[#b9d7d9]">
        Nuestros Servicios
      </h1>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <div className="bg-[#7b3b3b] p-6 rounded-[10px]">
          <h3 className="text-xl font-bold mb-3 text-neutral-800">Plumas de Estacionamiento</h3>
          <p className="text-neutral-800 mb-4">Control de acceso vehicular automatizado con tecnología de última generación.</p>
          <ul className="list-disc list-inside text-neutral-800 text-sm">
            <li>Apertura rápida</li>
            <li>Integración con sistemas de pago</li>
            <li>Control remoto</li>
          </ul>
        </div>

        <div className="bg-[#7b3b3b] p-6 rounded-[10px]">
          <h3 className="text-xl font-bold mb-3 text-neutral-800">Bolardos Automáticos</h3>
          <p className="text-neutral-800 mb-4">Protección física contra vehículos para espacios peatonales y zonas restringidas.</p>
          <ul className="list-disc list-inside text-neutral-800 text-sm">
            <li>Resistencia certificada</li>
            <li>Operación hidráulica o neumática</li>
            <li>Integración con control de accesos</li>
          </ul>
        </div>

        <div className="bg-[#7b3b3b] p-6 rounded-[10px]">
          <h3 className="text-xl font-bold mb-3 text-neutral-800">Ponchallantas</h3>
          <p className="text-neutral-800 mb-4">Control direccional de tráfico para accesos de un solo sentido.</p>
          <ul className="list-disc list-inside text-neutral-800 text-sm">
            <li>Operación silenciosa</li>
            <li>Resistencia al vandalismo</li>
            <li>Bajo mantenimiento</li>
          </ul>
        </div>

        <div className="bg-[#7b3b3b] p-6 rounded-[10px]">
          <h3 className="text-xl font-bold mb-3 text-neutral-800">Rayos X</h3>
          <p className="text-neutral-800 mb-4">Inspección de seguridad avanzada para vehículos y carga.</p>
          <ul className="list-disc list-inside text-neutral-800 text-sm">
            <li>Alta resolución de imagen</li>
            <li>Detección automática de amenazas</li>
            <li>Cumplimiento normativo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}