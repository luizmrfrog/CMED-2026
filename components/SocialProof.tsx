
import React from 'react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A VOZ DE QUEM <span className="text-primary">JÁ VIVEU A EXPERIÊNCIA</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Veja o que os futuros líderes da medicina dizem sobre o impacto do congresso em suas trajetórias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((v) => (
            <div key={v} className="relative aspect-video bg-black rounded-[24px] overflow-hidden group shadow-2xl border border-white/5">
              <img 
                src={`https://picsum.photos/seed/student-med-${v}/800/450`} 
                alt="Testemunho" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all transform group-hover:scale-110 shadow-xl cursor-pointer">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4.5 3.5v13l11-6.5-11-6.5z"></path></svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${v}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold leading-none">Acadêmico(a) de Medicina {v}</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1">Depoimento CMED Edição Anterior</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
