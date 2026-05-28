import React from 'react';
import { Monitor, ShieldCheck, Server, Brain } from 'lucide-react';

export default function HeroGrid() {
  return (
    <div className="bg-[#0b0f19] text-gray-100 min-h-screen p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card Principal - Saudação */}
        <div className="md:col-span-2 bg-[#131b2e] border border-gray-800 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
          <div>
            <span className="text-blue-400 text-sm font-mono tracking-wider">Olá, eu sou</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Aloana Neto
            </h1>
            <p className="text-gray-400 mt-4 text-lg max-w-xl">
              Desenvolvedora de Software & Analista de Sistemas. Focada em construir arquiteturas robustas, segurança de dados e aplicações escaláveis.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors">
              Ver Projetos
            </button>
            <button className="border border-gray-700 hover:border-gray-500 text-gray-300 font-medium py-2.5 px-6 rounded-lg transition-colors">
              Contato
            </button>
          </div>
        </div>

        {/* Card Lateral - Status Atual */}
        <div className="bg-[#131b2e] border border-gray-800 rounded-2xl p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-gray-500">STATUS</span>
          </div>
          <div className="mt-6">
            <h3 className="text-gray-400 text-sm font-mono">FOCADA EM</h3>
            <p className="text-xl font-semibold mt-1">Sistemas Web & Engenharia de Dados</p>
          </div>
          <div className="mt-6 border-t border-gray-800 pt-4">
            <p className="text-xs text-gray-500">Disponível para colaborações globais.</p>
          </div>
        </div>

        {/* Bento Cards menores - Pilares de Conhecimento */}
        <div className="bg-[#131b2e] border border-gray-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
            <Server size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Backend Core</h3>
            <p className="text-gray-400 text-sm mt-1">Construção de APIs escaláveis, ecossistemas estruturados e manipulação de banco de dados.</p>
          </div>
        </div>

        <div className="bg-[#131b2e] border border-gray-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Ética & Privacidade</h3>
            <p className="text-gray-400 text-sm mt-1">Conhecimento aplicado em proteção de dados (LGPD) e governança em inteligência artificial.</p>
          </div>
        </div>

        <div className="bg-[#131b2e] border border-gray-800 rounded-2xl p-6 flex items-start gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
            <Brain size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-lg">Qualidade & Testes</h3>
            <p className="text-gray-400 text-sm mt-1">Garantia de software por meio de validação de requisitos e testes automatizados de API.</p>
          </div>
        </div>

      </div>
    </div>
  );
}