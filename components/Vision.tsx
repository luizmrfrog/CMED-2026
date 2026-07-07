
import React from 'react';

export const Vision: React.FC = () => {
  return (
    <section className="py-24 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              O MAIOR CONGRESSO PARA ESTUDANTES DE MEDICINA DE MINAS GERAIS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              NÃO É APENAS UM CONGRESSO.<br/>
              É A SUA <span className="text-primary">VANTAGEM COMPETITIVA.</span>
            </h2>
            <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
              <p>
                O mercado médico está inflado, mas o topo da pirâmide continua vazio. 
                A revolução da medicina está acontecendo agora, e a janela para estar na linha de frente é estreita.
              </p>
              <p>
                O CMED 2026 é o ponto de encontro da inteligência médica. Desenhamos uma imersão para o estudante que recusa a mediocridade das faculdades comuns.
              </p>
              <p>
                Trouxemos palestrantes de todo o Brasil para Belo Horizonte com uma única missão: entregar a visão estratégica e científica que falta nas salas de aula. 
                Você sairá daqui não apenas com um certificado, mas com a mentalidade de quem vai ditar as regras da residência médica.
              </p>
              <p className="font-semibold text-white">Esteja onde a inovação acontece.</p>
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent opacity-20 group-hover:opacity-40 transition-opacity rounded-3xl blur-xl"></div>
            <img 
              src="https://picsum.photos/seed/doctor-futuristic/800/1000" 
              alt="Médico Visionário" 
              className="relative rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
