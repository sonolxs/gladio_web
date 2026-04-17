'use client';

export default function Casos() {
  return (
    <section className="px-10 py-[60px] min-h-[50vh] text-[#e3e3e3]">
      <h1 className="text-[40px] font-bold mb-8 text-[#b9d7d9]">
        Casos de Éxito
      </h1>
      
      <div className="space-y-8">
        <div className="bg-[#2c0505] p-6 rounded-[10px] border border-black/15">
          <h3 className="text-xl font-bold mb-2 text-[#b9d7d9]">Corporativo Polanco</h3>
          <p className="text-[#9aaf00] text-sm mb-3">Instalación completa • 2024</p>
          <p className="text-[#e3e3e3]">
            Implementación de sistema integral de control de accesos vehiculares con plumas automáticas 
            y bolardos de seguridad. Reducción del 90% en incidentes de acceso no autorizado.
          </p>
        </div>

        <div className="bg-[#2c0505] p-6 rounded-[10px] border border-black/15">
          <h3 className="text-xl font-bold mb-2 text-[#b9d7d9]">Centro Comercial Santa Fe</h3>
          <p className="text-[#9aaf00] text-sm mb-3">Renovación de sistemas • 2023</p>
          <p className="text-[#e3e3e3]">
            Modernización de 12 accesos vehiculares con tecnología de ponchallantas y sistema 
            de pago integrado. Incremento del 40% en eficiencia de flujo vehicular.
          </p>
        </div>

        <div className="bg-[#2c0505] p-6 rounded-[10px] border border-black/15">
          <h3 className="text-xl font-bold mb-2 text-[#b9d7d9]">Aduana de Lázaro Cárdenas</h3>
          <p className="text-[#9aaf00] text-sm mb-3">Seguridad perimetral • 2023</p>
          <p className="text-[#e3e3e3]">
            Instalación de sistema de inspección por rayos X para revisión de contenedores. 
            Capacidad de procesamiento de 200 unidades diarias con detección automatizada.
          </p>
        </div>
      </div>
    </section>
  );
}