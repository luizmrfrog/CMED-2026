
import React from 'react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            O AMBIENTE QUE A SUA <span className="text-primary">CARREIRA MERECE</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Esqueça os auditórios universitários desconfortáveis. O CMED 2026 eleva a experiência de aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="overflow-hidden rounded-3xl h-[400px] shadow-2xl group">
             <img 
              src="https://picsum.photos/seed/diamond-mall/1200/800" 
              alt="Diamond Mall BH" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            />
          </div>
          <div className="glass-card p-10 md:p-12 rounded-3xl flex flex-col justify-center">
            <p className="text-white/80 text-xl font-light leading-relaxed mb-10">
              Realizado no <strong>Diamond Mall</strong>, ícone de sofisticação em Belo Horizonte, você terá acesso a uma infraestrutura premium, segurança total e conforto absoluto para absorver o melhor conteúdo científico do ano.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Localização</p>
                  <p className="text-white font-medium">Diamond Mall, BH - MG</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold">Data</p>
                  <p className="text-white font-medium">21, 22 e 23 de Agosto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
