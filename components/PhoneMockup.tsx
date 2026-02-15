import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Signal, Wifi, ChevronLeft, Menu, Bell, Heart, MessageCircle, Share2, MapPin } from 'lucide-react';

export type PhoneMode = 'boring' | 'processing' | 'fun';

interface PhoneMockupProps {
  mode: PhoneMode;
  notification?: string | null;
  coins?: number; // Visual feedback for points
  onInteract?: (type: 'video' | 'notification') => void;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ mode, notification, coins, onInteract }) => {
  return (
    <div className="relative w-[300px] h-[600px] bg-slate-950 rounded-[40px] border-8 border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col select-none transform transition-transform duration-500 hover:scale-[1.01]">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-50"></div>

      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1 text-xs text-white z-40 relative">
        <span>9:41</span>
        <div className="flex gap-1">
          <Signal size={12} />
          <Wifi size={12} />
          <Battery size={12} />
        </div>
      </div>

      {/* Screen Content */}
      <div className="flex-1 relative bg-white overflow-hidden">
        <AnimatePresence mode="wait">
          {mode === 'boring' && <BoringUI key="boring" />}
          {mode === 'processing' && <ProcessingUI key="processing" />}
          {mode === 'fun' && <FunUI key="fun" onInteract={onInteract} coins={coins} />}
        </AnimatePresence>

        {/* Dynamic Notification Overlay */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 20, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              className="absolute top-0 left-0 right-0 mx-4 bg-slate-800/90 backdrop-blur text-white p-3 rounded-xl shadow-xl z-50 flex items-center gap-3 border border-slate-700"
            >
              <div className="p-2 bg-purple-500 rounded-lg">
                <Bell size={16} />
              </div>
              <div className="text-xs">
                <p className="font-bold">Notificação</p>
                <p className="text-slate-300">{notification}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-500/50 rounded-full z-50"></div>
    </div>
  );
};

const BoringUI: React.FC = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="h-full bg-slate-50 flex flex-col"
  >
    <div className="bg-blue-900 p-6 pt-12 pb-8 text-white rounded-b-[2rem] shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <Menu size={24} />
        <span className="font-semibold">MinhaFidelidade</span>
        <Bell size={24} />
      </div>
      <p className="text-blue-200 text-sm">Saldo Total</p>
      <h2 className="text-4xl font-bold">12.450 <span className="text-lg font-normal">pts</span></h2>
    </div>
    
    <div className="p-6 space-y-4">
      <div className="h-20 bg-white border border-slate-200 rounded-xl flex items-center justify-between px-4 shadow-sm">
        <div className="flex flex-col">
          <span className="font-bold text-slate-700">Extrato da Conta</span>
          <span className="text-xs text-slate-400">Atualizado: Hoje</span>
        </div>
        <ChevronLeft className="rotate-180 text-slate-400" />
      </div>
      <div className="h-20 bg-white border border-slate-200 rounded-xl flex items-center justify-between px-4 shadow-sm">
        <div className="flex flex-col">
          <span className="font-bold text-slate-700">Parceiros</span>
          <span className="text-xs text-slate-400">Ver todos</span>
        </div>
        <ChevronLeft className="rotate-180 text-slate-400" />
      </div>
    </div>
  </motion.div>
);

const ProcessingUI: React.FC = () => (
  <motion.div 
    className="h-full bg-slate-900 flex flex-col items-center justify-center p-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mb-6"
    />
    <p className="text-purple-400 font-mono text-sm">Injetando Soul SDK...</p>
    <div className="w-full h-1 bg-slate-800 rounded-full mt-4 overflow-hidden">
      <motion.div 
        className="h-full bg-purple-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
      />
    </div>
  </motion.div>
);

interface FunUIProps {
  onInteract?: (type: 'video' | 'notification') => void;
  coins?: number;
}

const FunUI: React.FC<FunUIProps> = ({ onInteract, coins }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="h-full bg-black relative"
  >
    {/* Video Background Simulation */}
    <img 
      src="https://picsum.photos/300/600" 
      alt="Video Feed" 
      className="w-full h-full object-cover opacity-80"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

    {/* Floating Coins Animation */}
    <AnimatePresence>
      {coins && coins > 0 && (
        <motion.div 
          key={coins}
          initial={{ y: '50%', x: '50%', opacity: 1, scale: 0.5 }}
          animate={{ y: '20%', opacity: 0, scale: 1.5 }}
          className="absolute top-1/2 left-0 right-0 text-center z-50 pointer-events-none"
        >
          <span className="text-4xl font-bold text-yellow-400 drop-shadow-lg">+{coins}</span>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Video Interaction Zone */}
    <div 
      className="absolute inset-0 z-10 cursor-pointer" 
      onClick={() => onInteract?.('video')}
    ></div>

    {/* UI Overlays */}
    <div className="absolute top-12 left-4 right-4 z-20 flex justify-between text-white">
      <span className="font-bold drop-shadow-md">Para Você</span>
      <div className="bg-black/30 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 border border-white/20">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <span className="text-xs font-mono">{12.450 + (coins || 0)} pts</span>
      </div>
    </div>

    {/* Right Sidebar Actions */}
    <div className="absolute bottom-24 right-4 z-20 flex flex-col gap-6 items-center text-white">
      <div className="flex flex-col items-center gap-1">
        <div className="bg-slate-800/50 p-2 rounded-full backdrop-blur hover:scale-110 transition-transform cursor-pointer">
          <Heart size={24} className="text-red-500 fill-red-500" />
        </div>
        <span className="text-xs shadow-black drop-shadow-md">12k</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-slate-800/50 p-2 rounded-full backdrop-blur hover:scale-110 transition-transform cursor-pointer">
          <MessageCircle size={24} />
        </div>
        <span className="text-xs shadow-black drop-shadow-md">402</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="bg-slate-800/50 p-2 rounded-full backdrop-blur hover:scale-110 transition-transform cursor-pointer">
          <Share2 size={24} />
        </div>
        <span className="text-xs shadow-black drop-shadow-md">Share</span>
      </div>
    </div>

    {/* Bottom Info */}
    <div className="absolute bottom-24 left-4 z-20 text-white max-w-[70%]">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-xs font-bold">L</div>
        <span className="font-semibold shadow-black drop-shadow-md">Latam Airlines</span>
        <div className="bg-yellow-500 text-black text-[10px] px-1 rounded font-bold">PROMO</div>
      </div>
      <p className="text-sm shadow-black drop-shadow-md leading-tight">Visite o Chile! Use seus pontos com valor 2x neste verão. #viagem #latam</p>
    </div>

    {/* Bottom Nav */}
    <div className="absolute bottom-0 w-full h-20 bg-black text-white flex justify-around items-center pb-4 border-t border-white/10 z-30">
      <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100">
        <div className="w-6 h-6 rounded bg-slate-700" />
        <span className="text-[10px]">Início</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-purple-400">
        <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center border border-purple-500">
           <div className="w-0 h-0 border-l-[6px] border-l-purple-400 border-y-[4px] border-y-transparent ml-0.5" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100">
        <MapPin size={20} />
        <span className="text-[10px]">Perto</span>
      </div>
    </div>
  </motion.div>
);