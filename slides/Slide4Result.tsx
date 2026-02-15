import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, CalendarCheck } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Button, Card, GradientText } from '../components/ui';

const timeData = [
  { name: 'Jan', value: 2 },
  { name: 'Fev', value: 3 },
  { name: 'Mar', value: 2 },
  { name: 'Abr', value: 15 }, // Launch
  { name: 'Mai', value: 35 },
  { name: 'Jun', value: 45 },
];

const revenueData = [
  { name: 'Jan', value: 1000 },
  { name: 'Fev', value: 1200 },
  { name: 'Mar', value: 1100 },
  { name: 'Abr', value: 2400 },
  { name: 'Mai', value: 3800 },
  { name: 'Jun', value: 5200 },
];

export const Slide4Result: React.FC = () => {
  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto px-6 py-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-4">
          <TrendingUp size={16} />
          <span>O ROI</span>
        </div>
        <h2 className="text-4xl font-bold">A <GradientText>Visão do Diretor</GradientText></h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card title="Tempo Médio no App" className="h-full">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-white">45m</span>
              <span className="text-green-400 text-sm font-semibold">▲ 2200%</span>
            </div>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={timeData}>
                   <defs>
                    <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Bar dataKey="value" fill="url(#colorBar)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">Antes: 2 min/mês → Depois: 45 min/mês</p>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
           <Card title="Custo de Retenção (CAC)" className="h-full">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-white">-40%</span>
              <span className="text-green-400 text-sm font-semibold">▼ Economia</span>
            </div>
             <div className="h-32 w-full flex items-center justify-center">
               <div className="relative w-32 h-32">
                 <svg className="w-full h-full" viewBox="0 0 36 36">
                   <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#1e293b"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="3"
                      strokeDasharray="60, 100"
                    />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center flex-col">
                   <span className="text-2xl font-bold text-white">$12</span>
                   <span className="text-[10px] text-slate-500">por usuário</span>
                 </div>
               </div>
            </div>
             <p className="text-xs text-slate-500 mt-2 text-center">Menor dependência de anúncios de retargeting.</p>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
           <Card title="Nova Receita de Ads" className="h-full">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl font-bold text-white">$4.2M</span>
              <span className="text-green-400 text-sm font-semibold">▲ Novo Fluxo</span>
            </div>
            <div className="h-32 w-full">
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="value" stroke="#10b981" fill="url(#colorRevenue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2">Monetizando o novo feed de engajamento.</p>
          </Card>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.5 }}
        className="flex justify-center mt-auto"
      >
        <div className="text-center space-y-6 bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-2xl border border-purple-500/20 shadow-2xl max-w-2xl w-full">
          <h3 className="text-2xl font-bold text-white">Pronto para transformar seu programa de fidelidade?</h3>
          <Button variant="primary" fullWidth icon={CalendarCheck} className="text-lg py-4">
            Agendar POC / Integração
          </Button>
          <p className="text-xs text-slate-500">Inclui teste grátis de 30 dias do SoulPlay SDK Enterprise.</p>
        </div>
      </motion.div>
    </div>
  );
};