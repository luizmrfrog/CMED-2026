
import React from 'react';

export const Logos: React.FC = () => {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-16">
          
          <div className="text-center">
            <h5 className="text-[10px] tracking-[0.3em] font-extrabold text-black/40 uppercase mb-8">REALIZAÇÃO</h5>
            <div className="flex justify-center">
               <div className="h-16 w-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-bold italic">MEDASSINA</div>
            </div>
          </div>

          <div className="text-center w-full">
            <h5 className="text-[10px] tracking-[0.3em] font-extrabold text-black/40 uppercase mb-8">PATROCÍNIO</h5>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60">
              <div className="h-12 w-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold uppercase">MEDGRUPO</div>
              <div className="h-12 w-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold uppercase">PATROCINADOR 2</div>
              <div className="h-12 w-40 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold uppercase">PATROCINADOR 3</div>
            </div>
          </div>

          <div className="text-center w-full">
            <h5 className="text-[10px] tracking-[0.3em] font-extrabold text-black/40 uppercase mb-8">PARCEIROS</h5>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40">
              <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold uppercase text-[10px]">PARCEIRO A</div>
              <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold uppercase text-[10px]">PARCEIRO B</div>
              <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold uppercase text-[10px]">PARCEIRO C</div>
              <div className="h-8 w-32 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 font-bold uppercase text-[10px]">PARCEIRO D</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
