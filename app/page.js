'use client';
export default function Home() {
  return (
    <>
      {/* SECCIÓN HERO */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center overflow-hidden text-[#b9d7d9]">
        {/* Video de fondo */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -z-10 -translate-x-1/2 -translate-y-1/2 object-cover brightness-[0.35]"
        >
          <source src="/src/Vahicular-casi.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>

        {/* Contenido del hero */}
        <div className="z-10 text-center">
          <h2 className="text-[40px] font-bold mb-4">
            Soluciones avanzadas en seguridad
          </h2>
          <p className="text-xl mb-6">
            Control de accesos, inspección y protección perimetral
          </p>
          <button 
            onClick={() => window.open('https://rseguridad.com/wp-content/uploads/2026/02/Catalogo-General-RS-12-febrero-2026.pdf', '_blank')}
            className="mt-5 px-5 py-3 bg-[#668284] text-black font-bold border-none cursor-pointer transition-opacity hover:opacity-80"
          >
            Ver Catálogo
          </button>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section className="px-10 py-[60px] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
        <div className="bg-[#7b3b3b] p-5 rounded-[10px]">
          <h3 className="text-neutral-800 font-bold text-lg mb-2">
            Plumas de estacionamiento
          </h3>
          <p className="text-neutral-800">
            Control de acceso vehicular automatizado
          </p>
        </div>

        <div className="bg-[#7b3b3b] p-5 rounded-[10px]">
          <h3 className="text-neutral-800 font-bold text-lg mb-2">
            Bolardos
          </h3>
          <p className="text-neutral-800">
            Protección física contra vehículos
          </p>
        </div>

        <div className="bg-[#7b3b3b] p-5 rounded-[10px]">
          <h3 className="text-neutral-800 font-bold text-lg mb-2">
            Ponchallantas
          </h3>
          <p className="text-neutral-800">
            Control direccional de tráfico
          </p>
        </div>

        <div className="bg-[#7b3b3b] p-5 rounded-[10px]">
          <h3 className="text-neutral-800 font-bold text-lg mb-2">
            Rayos X
          </h3>
          <p className="text-neutral-800">
            Inspección de seguridad avanzada
          </p>
        </div>
      </section>
    </>
  );
}