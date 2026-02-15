import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Hand, MapPin, MousePointerClick } from 'lucide-react';
import { PhoneMockup } from '../components/PhoneMockup';
import { Button, GradientText } from '../components/ui';

export const Slide3Experience: React.FC = () => {
  const [coins, setCoins] = useState(0);
  const [notif, setNotif] = useState<string | null>(null);

  const handleInteract = (type: 'video' | 'notification') => {
    if (type === 'video') {
      setCoins(prev => prev + 50);
      setNotif("+50 Pontos Ganhos!");
      setTimeout(() => setNotif(null), 2000);
    }
  };

  const triggerPush = () => {
    setNotif("📍 Perto da Starbucks! Ganhe 2x Pontos agora.");
    setTimeout(() => setNotif(null), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto px-6">
      <div className="order-2 lg:order-1 flex justify-center relative">
        <motion.div
           animate={{ scale: [1, 1.05, 1] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="absolute inset-0 bg-purple-600/10 blur-[60px] rounded-full"
        />
        <div className="relative">
          <PhoneMockup mode="fun" onInteract={handleInteract} coins={coins} notification={notif} />
          
          {/* Interaction Pointer Hint */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], x: [20, 0, 20], y: [20, 0, 20] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 pointer-events-none z-50 text-white drop-shadow-lg"
          >
            <MousePointerClick size={40} className="fill-white/50" />
          </motion.div>
        </div>
      </div>

      <div className="order-1 lg:order-2 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-semibold">
          <Hand size={16} />
          <span>A Experiência</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold">
          Micro-Momentos <br />
          <GradientText>Hiper-Engajadores</GradientText>
        </h2>

        <p className="text-xl text-slate-400">
          Usuários não apenas "checam" o app. Eles <span className="text-white">jogam</span>, 
          eles <span className="text-white">assistem</span>, e eles <span className="text-white">ganham</span> em tempo real.
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors flex items-center gap-4 cursor-pointer" onClick={() => handleInteract('video')}>
            <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
              <MousePointerClick />
            </div>
            <div>
              <h4 className="font-bold text-white">Toque para Ganhar</h4>
              <p className="text-sm text-slate-400">Clique no vídeo para simular gratificação instantânea.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors flex items-center gap-4 cursor-pointer" onClick={triggerPush}>
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
              <MapPin />
            </div>
            <div>
              <h4 className="font-bold text-white">Geo-Gatilho</h4>
              <p className="text-sm text-slate-400">Clique para simular passar por uma loja parceira.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};