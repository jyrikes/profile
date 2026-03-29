
import React, { useEffect, useState } from 'react';

interface VisualizerProps {
  type: string;
}

export const ActivityVisualizer: React.FC<VisualizerProps> = ({ type }) => {
  const [dots, setDots] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    if (type === 'neural') {
      const newDots = Array.from({ length: 15 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2
      }));
      setDots(newDots);
    }
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case 'python':
      case 'core':
        return (
          <div className="w-full h-full bg-slate-950 p-4 font-mono text-[10px] text-blue-400/60 overflow-hidden relative">
            <div className="animate-[scroll_10s_linear_infinite]">
              <p>import pandas as pd</p>
              <p>import numpy as np</p>
              <p>df = pd.read_sql("SELECT * FROM production_logs")</p>
              <p>df['rolling_avg'] = df['current'].rolling(window=10).mean()</p>
              <p># Detecting anomalies in battery cycle...</p>
              <p>anomalies = df[df['current'] &gt; threshold]</p>
              {/* Escape curly braces in pseudo-code to prevent JSX evaluation */}
              <p>{'print(f"Alert: {len(anomalies)} anomalies detected")'}</p>
              <p className="text-blue-200">Processing batch ID: 0x9482...</p>
              <p>Optimizing feature weights...</p>
              <p>Model training in progress: 84% [■■■■■■■□]</p>
              <p>Latency: 14ms | Accuracy: 0.982</p>
              <p>---------------------------------</p>
              <p># Real-time Traceability Stream</p>
              <p>Scanner ID: KEYENCE_04 | Status: OK</p>
              <p>Tag Read: MOURA_240501_A92</p>
              <p>Database sync complete.</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none" />
          </div>
        );
      case 'neural':
      case 'ai':
        return (
          <div className="w-full h-full bg-slate-950 relative overflow-hidden flex items-center justify-center">
            <svg className="w-full h-full opacity-40">
              {dots.map((dot, i) => (
                <React.Fragment key={i}>
                  {dots.slice(i + 1, i + 4).map((other, j) => (
                    <line
                      key={j}
                      x1={`${dot.x}%`}
                      y1={`${dot.y}%`}
                      x2={`${other.x}%`}
                      y2={`${other.y}%`}
                      stroke="rgba(96, 165, 250, 0.2)"
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                  ))}
                  <circle
                    cx={`${dot.x}%`}
                    cy={`${dot.y}%`}
                    r={dot.size}
                    fill="white"
                    className="animate-pulse"
                  />
                </React.Fragment>
              ))}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-32 h-32 border-4 border-blue-500/30 rounded-full animate-ping" />
               <div className="absolute w-20 h-20 border-2 border-indigo-500/50 rounded-lg animate-spin" />
            </div>
            <div className="absolute bottom-4 left-4 text-[9px] font-mono text-blue-500">
               OBJECT_DETECTION: YOLO_V10_ACTIVE<br/>
               CONFIDENCE: 0.94 | FPS: 62
            </div>
          </div>
        );
      case 'database':
      case 'industry':
        return (
          <div className="w-full h-full bg-slate-950 flex items-center justify-center gap-2 p-8 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="flex-1 bg-blue-500/20 rounded-t-lg border-t border-x border-blue-400/30 relative"
                style={{ height: `${Math.random() * 60 + 20}%`, animation: `h-pulse ${Math.random() * 2 + 1}s infinite alternate` }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              </div>
            ))}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <div className="w-full h-px bg-blue-400/20 animate-[scan_3s_infinite]" />
               <span className="text-[10px] font-mono text-blue-400/40 mt-2">KEYENCE_TELEMETRY_STREAM</span>
            </div>
          </div>
        );
      case 'fastapi':
      case 'backend':
        return (
          <div className="w-full h-full bg-slate-950 flex flex-col p-6 gap-4 font-mono text-[9px]">
            <div className="flex items-center gap-2 text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>SERVER_READY: ASYNC_MODE_ON</span>
            </div>
            <div className="space-y-2 opacity-60">
              <p className="text-white">GET /api/v1/predictions/latest?farm_id=001</p>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-[65%] animate-[progress_2s_infinite]" />
              </div>
              <p className="text-blue-400">Response: 200 OK (12ms)</p>
              
              <p className="text-white mt-4">POST /api/v1/traceability/keyence/log</p>
              <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 w-[90%] animate-[progress_1.5s_infinite]" />
              </div>
              <p className="text-blue-400">Response: 201 Created (8ms)</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-full h-full bg-slate-950 flex items-center justify-center">
            <div className="text-4xl animate-bounce">⚡</div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-48 bg-slate-950 rounded-3xl overflow-hidden border border-slate-800 shadow-inner group-hover:border-blue-500/50 transition-colors">
      {renderContent()}
      <style>{`
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes h-pulse {
          from { opacity: 0.3; }
          to { opacity: 0.8; }
        }
        @keyframes scan {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(100px); }
        }
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};
