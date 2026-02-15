import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2, Map, Smartphone } from 'lucide-react';
import { PhoneMockup } from '../components/PhoneMockup';
import { Button, GradientText } from '../components/ui';

export const Slide2Solution: React.FC = () => {
  const [activated, setActivated] = useState(false);

  return (
    <div className="flex flex-col items-center h-full max-w-6xl mx-auto px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6">
          <Zap size={16} />
          <span>A Solução</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Injetar <GradientText>Soul Ecosystem</GradientText>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Transforme seu app utilitário em um destino de entretenimento com apenas algumas linhas de código.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-center">
        {/* Left: Controls */}
        <div className="space-y-6 flex flex-col items-end lg:text-right">
          <div className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 w-full hover:border-purple-500/50 transition-colors">
            <Code2 className="text-purple-400 lg:ml-auto mb-2" size={32} />
            <h3 className="text-xl font-bold mb-2">SoulPlay SDK</h3>
            <p className="text-sm text-slate-400 mb-4">Incorpore um feed de vídeos estilo TikTok diretamente no seu app de fidelidade.</p>
            <Button 
              variant={activated ? 'secondary' : 'primary'} 
              size="sm" 
              onClick={() => setActivated(true)}
              className="w-full lg:w-auto"
            >
              {activated ? 'Ativo' : 'Ativar SDK'}
            </Button>
          </div>

           <div className={`bg-slate-900/80 p-6 rounded-xl border border-slate-800 w-full transition-all duration-500 ${activated ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-10'}`}>
            <Map className="text-blue-400 lg:ml-auto mb-2" size={32} />
            <h3 className="text-xl font-bold mb-2">Motor Geo-Perks</h3>
            <p className="text-sm text-slate-400">Ofertas baseadas em localização que disparam quando usuários estão perto de parceiros.</p>
          </div>
        </div>

        {/* Center: Transformation Zone */}
        <div className="flex justify-center relative">
          {/* Energy Particles Animation when activated */}
          {activated && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -100, y: 0, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: 0, delay: i * 0.1 }}
                  className="absolute top-1/2 left-0 w-2 h-2 bg-purple-500 rounded-full blur-[2px]"
                />
              ))}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"
                />
            </>
          )}

          <PhoneMockup mode={activated ? 'fun' : 'boring'} />
        </div>

        {/* Right: Technical Specs */}
        <div className="space-y-6">
           <div className="bg-slate-950 p-4 rounded-lg font-mono text-xs text-slate-300 border-l-4 border-purple-500 shadow-lg">
             <div className="flex gap-2 mb-2 border-b border-slate-800 pb-2">
               <div className="w-3 h-3 rounded-full bg-red-500"/>
               <div className="w-3 h-3 rounded-full bg-yellow-500"/>
               <div className="w-3 h-3 rounded-full bg-green-500"/>
             </div>
             <p className="text-slate-500"># config.json</p>
             <p><span className="text-purple-400">"sdk_mode"</span>: <span className="text-green-400">{activated ? '"immersive"' : '"utility"'}</span>,</p>
             <p><span className="text-purple-400">"feed_source"</span>: "partner_network",</p>
             <p><span className="text-purple-400">"gamification"</span>: <span className="text-blue-400">true</span></p>
           </div>
        </div>
      </div>
    </div>
  );
};