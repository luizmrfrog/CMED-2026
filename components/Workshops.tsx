
import React from 'react';

export const Workshops: React.FC = () => {
  const links = [
    { label: "📅 VER GRADE DE HORÁRIOS E SALAS", url: "#" },
    { label: "📄 BAIXAR EDITAL DE PRÁTICAS MÉDICAS", url: "#" },
    { label: "🚀 LI O EDITAL E QUERO SUBMETER PROPOSTA", url: "#" },
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            DA TEORIA À PRÁTICA: <span className="text-primary">DOMINE A TÉCNICA</span>
          </h2>
          <p className="text-white/70 text-lg mb-12 font-light">
            A medicina se aprende fazendo. Participe de atividades práticas e domine procedimentos essenciais antes mesmo da residência.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {links.map((l, i) => (
              <a 
                key={i} 
                href={l.url}
                className="p-6 rounded-2xl border border-white/10 hover:border-accent hover:bg-white/5 transition-all text-sm font-bold text-white/80 flex items-center justify-center text-center"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
