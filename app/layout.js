'use client';

import { useEffect } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="es">
      <body className="pt-[130px] font-sans bg-black text-neutral-800">
        {/* HEADER */}
        <header className="fixed top-0 w-full z-50 bg-[#7b3b3b] px-10 py-5 flex justify-between items-center transition-all duration-200 ease-[ease]">
          <a href="/">
            <img src="/LOGO-GLADIO.png" alt="GLADIO" className="h-20 transition-all duration-200" />
          </a>
          
          <nav className="flex items-center flex-grow">
            <div className="flex gap-10 mx-auto">
              <a href="/soluciones" className="no-underline text-neutral-800 text-[1.2rem] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#b9d7d9]">
                Soluciones
              </a>
              <a href="/clientes" className="no-underline text-neutral-800 text-[1.2rem] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#b9d7d9]">
                Nuestros Clientes
              </a>
              <a href="/contacto" className="no-underline text-neutral-800 text-[1.2rem] font-semibold uppercase tracking-wide transition-all duration-300 hover:text-[#b9d7d9]">
                Contacto
              </a>
            </div>

            {/* <a 
              target="_blank" 
              href="https://wa.me/525559519070?text=Hola, quiero visitar su showroom" 
              className="px-7 py-3 text-base border-2 border-white bg-transparent text-white rounded-full transition-all duration-300 hover:bg-white hover:text-[#7b3b3b] hover:shadow-lg"
            >
              Visitar showroom
            </a> */}
          </nav>
        </header>

        {/* CONTENIDO DE CADA PÁGINA */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="bg-[#2c0505] text-[#e3e3e3] px-8 py-7">
          <div className="flex justify-between px-[20%]">
            <div>
              <div className="text-[11px] font-medium tracking-wide leading-relaxed">
                EXPERTOS EN SEGURIDAD
              </div>
              <div className="text-[11px] font-medium tracking-wide leading-relaxed mt-0.5">
                CALIDAD | SERVICIO | EFICIENCIA
              </div>
              <div className="text-[11px] text-[#556b78] leading-relaxed mt-2">
                <a 
                  href="https://maps.app.goo.gl/Dep9gbhAG2pJLL9z6" 
                  target="_blank" 
                  className="underline underline-offset-2 text-[#556b78]"
                >
                  Monte Elbruz 132 Piso 3 / 301-302,<br />
                  Polanco V Secc, Miguel Hidalgo,<br />
                  11560 CDMX
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-medium uppercase tracking-widest mb-2.5">
                Síguenos
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/rseguridad/" target="_blank" className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-black/15 text-[#3d5a6b] transition-all duration-150 hover:bg-black/5 hover:text-[#e3e3e3]">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.48 8.5h4V23h-4V8.5zm6.32 0h3.84v2h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.78 2.66 4.78 6.12V23h-4v-7.6c0-1.82-.03-4.15-2.53-4.15-2.54 0-2.93 1.98-2.93 4.02V23h-4V8.5z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/RSeguridad" target="_blank" className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-black/15 text-[#3d5a6b] transition-all duration-150 hover:bg-black/5 hover:text-[#e3e3e3]">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.097 2.794.141v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.592 1.323-1.324V1.324C24 .593 23.408 0 22.676 0" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@RSeguridad_MX" target="_blank" className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-black/15 text-[#3d5a6b] transition-all duration-150 hover:bg-black/5 hover:text-[#e3e3e3]">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/525559519070" target="_blank" className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-black/15 text-[#3d5a6b] transition-all duration-150 hover:bg-black/5 hover:text-[#e3e3e3]">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </a>
                {/* Teléfono */}
                <a href="tel:+525559519070" className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-black/15 text-[#3d5a6b] transition-all duration-150 hover:bg-black/5 hover:text-[#e3e3e3]">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}