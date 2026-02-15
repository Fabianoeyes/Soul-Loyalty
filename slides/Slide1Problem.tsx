import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, UserX, Clock, ArrowRight } from 'lucide-react';
import { PhoneMockup } from '../components/PhoneMockup';
import { Button, GradientText } from '../components/ui';

export const Slide1Problem: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null);

  const simulateSession = () => {
    setNotification("Sessão do Usuário Iniciada...");
    setTimeout(() => setNotification("Verificando Saldo..."), 1500);
    setTimeout(() => setNotification("Usuário Saiu (Duração: 8s)"), 3000);
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-semibold">
          <AlertCircle size={16} />
          <span>O Problema</span>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
          A Fidelidade <span className="text-slate-500">Silenciosa</span> <br />
          <GradientText>Crise de Engajamento</GradientText>
        </h1>
        
        <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
          Seus usuários têm utilidade, não conexão. Eles abrem o app, conferem o saldo e saem.
          <span className="text-white font-semibold"> O Churn Invisível</span> está consumindo seu orçamento de retenção.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <UserX className="text-red-500 mb-2" />
            <div className="text-2xl font-bold">12s</div>
            <div className="text-sm text-slate-500">Tempo Médio Sessão</div>
          </div>
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
            <Clock className="text-red-500 mb-2" />
            <div className="text-2xl font-bold">1.2x</div>
            <div className="text-sm text-slate-500">Visitas Mensais</div>
          </div>
        </div>

        <div className="pt-4">
          <Button onClick={simulateSession} icon={ArrowRight}>
            Simular Sessão
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center items-center relative"
      >
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
        
        <PhoneMockup mode="boring" notification={notification} />
      </motion.div>
    </div>
  );
};