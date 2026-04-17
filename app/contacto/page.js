'use client';

import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    console.log('Formulario enviado:', formData);
    alert('Gracias por contactarnos. Te responderemos pronto.');
  };

  return (
    <section className="px-10 py-[60px] min-h-[50vh] text-[#e3e3e3]">
      <h1 className="text-[40px] font-bold mb-8 text-[#b9d7d9]">
        Contacto
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        {/* Formulario */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full bg-[#1a1a1a] border border-black/15 rounded px-2 py-1.5 text-xs text-[#e3e3e3] placeholder-[#7a8e97] focus:border-black/35 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-[#1a1a1a] border border-black/15 rounded px-2 py-1.5 text-xs text-[#e3e3e3] placeholder-[#7a8e97] focus:border-black/35 outline-none"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-black/15 rounded px-2 py-1.5 text-xs text-[#e3e3e3] placeholder-[#7a8e97] focus:border-black/35 outline-none"
            />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="w-full bg-[#1a1a1a] border border-black/15 rounded px-2 py-1.5 text-xs text-[#e3e3e3] placeholder-[#7a8e97] focus:border-black/35 outline-none"
            />
          </div>

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="w-full bg-[#1a1a1a] border border-black/15 rounded px-2 py-1.5 text-xs text-[#e3e3e3] placeholder-[#7a8e97] focus:border-black/35 outline-none resize-none"
          />

          <button
            type="submit"
            className="bg-[#1a1a1a] text-[#dbdbdb] border-none px-4 py-1.5 rounded text-xs font-medium cursor-pointer whitespace-nowrap transition-opacity hover:opacity-85 w-fit"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Información de contacto */}
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2 text-[#b9d7d9]">Visítanos</h4>
            <p className="text-[#556b78] text-sm leading-relaxed">
              Monte Elbruz 132 Piso 3 / 301-302<br />
              Polanco V Secc, Miguel Hidalgo<br />
              11560 CDMX
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-[#b9d7d9]">Llámanos</h4>
            <a href="tel:+525559519070" className="text-[#556b78] text-sm hover:text-[#e3e3e3] transition-colors">
              +52 55 5951 9070
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-[#b9d7d9]">WhatsApp</h4>
            <a 
              href="https://wa.me/525559519070" 
              target="_blank"
              className="text-[#556b78] text-sm hover:text-[#e3e3e3] transition-colors"
            >
              Enviar mensaje
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2 text-[#b9d7d9]">Horario</h4>
            <p className="text-[#556b78] text-sm">
              Lunes a Viernes: 9:00 - 18:00<br />
              Sábado: 10:00 - 14:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}