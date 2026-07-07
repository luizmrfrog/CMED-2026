
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const target = new Date('2026-08-21T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Logo Placeholder */}
        <div className="mb-12 inline-block">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl md:text-9xl font-extrabold text-white tracking-tighter mb-0 leading-none">
              CMED<span className="text-primary italic">2026</span>
            </h1>
            <p className="text-sm md:text-lg text-white/60 tracking-[0.3em] font-light mt-2">MINAS GERAIS EDITION</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-6xl font-bold max-w-5xl mx-auto leading-tight mb-8">
          A MEDICINA DO FUTURO TEM UM <br className="hidden md:block"/>
          <span className="text-primary">NOVO ENDEREÇO</span> EM BELO HORIZONTE.
        </h2>

        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          Enquanto o ensino tradicional forma para o passado, o CMED 2026 prepara você para liderar a vanguarda. 
          A ciência, a inovação e a elite acadêmica reunidas no local mais sofisticado da capital mineira.
        </p>

        {/* Countdown */}
        <div className="mb-12 flex flex-col items-center">
          <p className="text-accent uppercase tracking-widest text-xs font-bold mb-4">Virada de lote em:</p>
          <div className="flex gap-4 md:gap-8 items-center text-white">
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold">{timeLeft.days}</span>
              <span className="text-[10px] md:text-xs text-white/40 uppercase">Dias</span>
            </div>
            <span className="text-2xl text-white/20">:</span>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold">{timeLeft.hours}</span>
              <span className="text-[10px] md:text-xs text-white/40 uppercase">Horas</span>
            </div>
            <span className="text-2xl text-white/20">:</span>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold">{timeLeft.minutes}</span>
              <span className="text-[10px] md:text-xs text-white/40 uppercase">Minutos</span>
            </div>
            <span className="text-2xl text-white/20">:</span>
            <div className="flex flex-col">
              <span className="text-3xl md:text-5xl font-extrabold">{timeLeft.seconds}</span>
              <span className="text-[10px] md:text-xs text-white/40 uppercase">Segundos</span>
            </div>
          </div>
        </div>

        <a 
          href="#offer"
          className="inline-block bg-accent hover:bg-white text-darkBlue font-extrabold text-lg md:text-xl px-10 py-5 rounded-2xl shadow-[0_0_30px_rgba(118,213,209,0.3)] transition-all transform hover:-translate-y-1 active:scale-95"
        >
          GARANTIR ACESSO AO LOTE EXCLUSIVO
        </a>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
