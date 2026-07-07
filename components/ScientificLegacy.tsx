
import React from 'react';

export const ScientificLegacy: React.FC = () => {
  const steps = [
    { title: "Prepare-se", desc: "Leia o edital atentamente." },
    { title: "Submeta", desc: "Garanta sua aprovação." },
    { title: "Apresente", desc: "Baixe o Template, salve seu e-poster e brilhe no sábado." },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              PRODUÇÃO CIENTÍFICA:<br/>
              <span className="text-primary">CONSTRUA SEU LEGADO</span>
            </h2>
            <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
              A Comissão Científica do CMED 2026 convida você a contribuir com o avanço da ciência. 
              Apresentar um trabalho aqui é uma chancela de autoridade para o seu currículo de residência.
            </p>
            <div className="inline-block p-4 bg-accent/20 border border-accent/30 rounded-xl mb-12">
              <p className="text-accent font-bold">Taxa de submissão: R$ 45,00</p>
              <p className="text-white/60 text-sm">(Investimento na sua pontuação curricular).</p>
            </div>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-3 text-accent hover:underline font-bold">
                🔗 Link 01: Edital nº 1 – Abertura
              </a>
              <a href="#" className="flex items-center gap-3 text-accent hover:underline font-bold">
                🔗 Link 02: Modelo de Template Oficial
              </a>
              <a href="#" className="flex items-center gap-3 text-accent hover:underline font-bold">
                🔗 Link 03: Escala de Apresentação
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-8 items-start glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-7xl font-black text-white/5 group-hover:text-primary/10 transition-colors">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white flex-shrink-0 z-10">
                  {i + 1}
                </div>
                <div className="z-10">
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-white/60 font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
