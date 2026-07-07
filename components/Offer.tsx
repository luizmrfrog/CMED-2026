
import React from 'react';

export const Offer: React.FC = () => {
  const benefits = [
    "Full Pass: Acesso aos 3 dias de imersão presencial.",
    "Certificado de Ouro: Validação de horas para a Residência Médica.",
    "Networking: Conexão direta com grandes nomes nacionais.",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-[#07051A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            SEU PASSAPORTE PARA A <span className="text-primary">ELITE MÉDICA</span>
          </h2>
          <p className="text-accent font-bold text-lg">Lote Promocional de Abertura. Vagas limitadas.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[40px] blur-lg opacity-30 animate-pulse"></div>
          
          <div className="relative glass-card rounded-[40px] p-8 md:p-16 border border-white/10 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">O que você recebe:</h3>
                <ul className="space-y-6">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                      </div>
                      <span className="text-white/80 font-light">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 p-6 bg-primary/10 border border-primary/20 rounded-2xl">
                  <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">🎁 BÔNUS EXCLUSIVO DE LOTE</p>
                  <p className="text-white font-medium">Quem garante a vaga agora recebe o <strong>Kit CMED Premium</strong>. Item de colecionador, exclusivo desta edição.</p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right">
                <span className="text-white/40 line-through text-2xl mb-2">De R$ 497,00</span>
                <span className="text-white/60 text-lg">Por apenas:</span>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-white text-3xl font-light">R$</span>
                  <span className="text-white text-7xl font-extrabold tracking-tighter">179<span className="text-3xl">,00</span></span>
                </div>
                <p className="text-white/40 text-sm mb-8 italic">(À vista no Pix, Boleto ou Cartão)</p>
                
                <button className="w-full bg-accent hover:bg-white text-darkBlue font-black py-6 px-12 rounded-2xl text-xl shadow-[0_15px_40px_rgba(118,213,209,0.4)] transition-all transform hover:-translate-y-2 animate-pulse-custom">
                  QUERO MEU KIT E MEU INGRESSO AGORA
                </button>
                
                <div className="mt-6 flex items-center gap-2 text-white/40 text-xs">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                  Pagamento 100% Seguro. Ambiente criptografado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
