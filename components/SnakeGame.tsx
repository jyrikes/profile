
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, Skill, Language } from '../types';
import { SKILLS } from '../constants';
import { UI_STRINGS } from '../translations';

const GRID_SIZE = 15;
const INITIAL_SNAKE = [{ x: 7, y: 7 }];
const INITIAL_DIRECTION = { x: 0, y: -1 };

interface SnakeGameProps {
  onSkillUnlocked: (skill: Skill) => void;
  onUnlockAll: () => void;
  unlockedSkillIds: string[];
  lang: Language;
}

const TechAnimation: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'python':
      return (
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-12 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      );
    case 'neural':
      return (
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-blue-400 rounded-full animate-ping opacity-20" />
          <div className="absolute inset-2 border-2 border-indigo-400 rounded-full animate-spin duration-[3s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
        </div>
      );
    case 'database':
      return (
        <div className="flex flex-col gap-1.5 items-center">
          <div className="w-16 h-4 bg-blue-600 rounded-lg animate-pulse shadow-lg" />
          <div className="w-16 h-4 bg-blue-400 rounded-lg animate-pulse delay-75 shadow-lg" />
          <div className="w-16 h-4 bg-blue-300 rounded-lg animate-pulse delay-150 shadow-lg" />
        </div>
      );
    case 'rocket':
      return (
        <div className="text-6xl animate-[bounce_0.5s_infinite_alternate] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">🚀</div>
      );
    case 'chart':
      return (
        <div className="flex items-end gap-1.5 h-16">
          <div className="w-3 h-6 bg-indigo-500 rounded-t-sm animate-[h-grow_1s_infinite_alternate]" />
          <div className="w-3 h-14 bg-indigo-400 rounded-t-sm animate-[h-grow_1.2s_infinite_alternate]" />
          <div className="w-3 h-8 bg-indigo-600 rounded-t-sm animate-[h-grow_0.8s_infinite_alternate]" />
        </div>
      );
    case 'fastapi':
      return (
        <div className="relative flex items-center justify-center">
          <div className="text-6xl animate-pulse">⚡</div>
          <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 animate-pulse" />
        </div>
      );
    case 'mobile':
      return (
        <div className="relative w-16 h-24 bg-slate-800 border-2 border-slate-700 rounded-xl overflow-hidden shadow-2xl animate-bounce">
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-slate-700 rounded-full" />
          <div className="absolute inset-2 bg-blue-500/20 rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping" />
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-700 rounded-full" />
        </div>
      );
    case 'tools':
      return (
        <div className="flex gap-2 items-center">
          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center animate-spin duration-[4s]">
            <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full" />
          </div>
          <div className="w-12 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 animate-[w-grow_2s_infinite]" />
          </div>
        </div>
      );
    case 'soft':
      return (
        <div className="relative">
          <div className="text-6xl animate-[pulse_2s_infinite]">✨</div>
          <div className="absolute -top-2 -right-2 text-2xl animate-bounce delay-100">⭐</div>
          <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce delay-300">🌟</div>
        </div>
      );
    default:
      return <div className="w-6 h-6 bg-white rounded-full animate-ping" />;
  }
};

const SnakeGame: React.FC<SnakeGameProps> = ({ onSkillUnlocked, onUnlockAll, unlockedSkillIds, lang }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameState, setGameState] = useState<GameState>('idle');
  const [score, setScore] = useState(0);
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);
  const [eatingEffect, setEatingEffect] = useState<string | null>(null);
  const gameLoopRef = useRef<number | null>(null);

  const t = (key: string) => UI_STRINGS[key]?.[lang] || key;

  const generateFood = useCallback(() => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      const isOnSnake = snake.some(part => part.x === newFood!.x && part.y === newFood!.y);
      if (!isOnSnake) break;
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood({ x: 5, y: 5 });
    setGameState('playing');
    setScore(0);
    setEatingEffect(null);
  };

  const nextDiscovery = () => {
    setEatingEffect(null);
    if (unlockedSkillIds.length >= SKILLS.length) {
      setGameState('idle');
    } else {
      setGameState('playing');
    }
  };

  const skipChallenge = () => {
    onUnlockAll();
    setGameState('idle');
    setScore(SKILLS.length);
  };

  const moveSnake = useCallback(() => {
    if (gameState !== 'playing') return;

    setSnake(prevSnake => {
      const newHead = {
        x: (prevSnake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
        y: (prevSnake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
      };

      if (prevSnake.some(part => part.x === newHead.x && part.y === newHead.y)) {
        setGameState('gameover');
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => s + 1);
        const nextSkillIndex = unlockedSkillIds.length;
        if (nextSkillIndex < SKILLS.length) {
          const unlocked = SKILLS[nextSkillIndex];
          setEatingEffect(unlocked.name[lang]);
          
          setTimeout(() => {
            setCurrentSkill(unlocked);
            setGameState('discovery');
            onSkillUnlocked(unlocked);
          }, 600);
        }
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameState, generateFood, onSkillUnlocked, unlockedSkillIds.length, lang]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      switch (e.key) {
        case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
        case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
        case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
        case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, gameState]);

  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current = window.setInterval(moveSnake, 130);
    } else {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    }
    return () => { if (gameLoopRef.current) clearInterval(gameLoopRef.current); };
  }, [gameState, moveSnake]);

  return (
    <div className="flex flex-col items-center bg-slate-900 p-8 rounded-[3rem] shadow-2xl border border-blue-500/20 relative">
      <div className="flex justify-between w-full mb-6 px-4">
        <span className="text-blue-400 font-mono font-black tracking-widest uppercase text-xs">{t('gameScore')}: {score}</span>
        <span className="text-indigo-400 font-mono font-black tracking-widest uppercase text-xs">{t('gameLevel')}: {unlockedSkillIds.length}</span>
      </div>

      <div 
        className="relative bg-slate-950 border-4 border-slate-800 rounded-[2rem] overflow-hidden shadow-inner flex items-center justify-center"
        style={{ width: '320px', height: '320px' }}
      >
        {(gameState === 'idle' || unlockedSkillIds.length === SKILLS.length) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 z-20 p-6 text-center backdrop-blur-md">
            <div className="text-5xl mb-6 animate-pulse">🧬</div>
            <h3 className="text-2xl font-black text-blue-400 mb-3 tracking-tighter">{t('gameChallenge')}</h3>
            <p className="text-sm text-slate-400 mb-8 font-medium leading-relaxed">{t('gameOrbInstruction')}</p>
            <div className="flex flex-col gap-3 w-full">
              <button 
                onClick={resetGame}
                className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/30 scale-100 hover:scale-105 active:scale-95"
              >
                {t('gameStart')}
              </button>
              {unlockedSkillIds.length < SKILLS.length && (
                <button 
                  onClick={skipChallenge}
                  className="px-10 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-2xl transition-all text-xs"
                >
                  {t('skipGame')}
                </button>
              )}
            </div>
          </div>
        )}

        {gameState === 'discovery' && currentSkill && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 z-40 p-10 text-center animate-in zoom-in-110 duration-500">
            <div className="mb-10 p-8 bg-blue-500/10 rounded-full border border-blue-400/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <TechAnimation type={currentSkill.animationType} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2 animate-pulse uppercase tracking-tighter leading-tight">
              {currentSkill.name[lang]}
            </h3>
            <p className="text-[10px] text-blue-400 mb-10 font-mono font-black tracking-[0.3em] uppercase opacity-70">System_Integrity_Check: OK</p>
            <button 
              onClick={nextDiscovery}
              className="px-12 py-4 bg-white text-blue-950 font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
            >
              CONTINUAR
            </button>
          </div>
        )}

        {eatingEffect && (
           <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
             <span className="text-xl font-black text-blue-400 bg-slate-950/80 px-4 py-2 rounded-xl border border-blue-500/30 animate-out fade-out slide-out-to-top-12 duration-500 fill-mode-forwards uppercase tracking-tighter">
                + {eatingEffect}
             </span>
           </div>
        )}

        {gameState === 'gameover' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-950/90 z-20 text-center backdrop-blur-md p-8">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-2xl font-black text-white mb-3">{t('gameOver')}</h3>
            <p className="text-sm text-white/70 mb-8 font-medium italic">Loss detected in training. Optimize and retry?</p>
            <button 
              onClick={resetGame}
              className="px-10 py-4 bg-white text-red-900 font-black rounded-2xl transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              {t('tryAgain')}
            </button>
          </div>
        )}

        {/* Snake rendering */}
        {snake.map((part, i) => (
          <div
            key={i}
            className={`absolute rounded-sm shadow-sm ${i === 0 ? 'bg-blue-400 z-10 scale-110' : 'bg-indigo-600'}`}
            style={{
              left: `${(part.x / GRID_SIZE) * 100}%`,
              top: `${(part.y / GRID_SIZE) * 100}%`,
              width: `${100 / GRID_SIZE}%`,
              height: `${100 / GRID_SIZE}%`,
              opacity: 1 - (i * 0.04)
            }}
          />
        ))}

        {/* Knowledge Orb */}
        <div
          className="absolute bg-white rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.8)] z-0"
          style={{
            left: `${(food.x / GRID_SIZE) * 100}%`,
            top: `${(food.y / GRID_SIZE) * 100}%`,
            width: `${100 / GRID_SIZE}%`,
            height: `${100 / GRID_SIZE}%`,
            transform: 'scale(0.75)'
          }}
        />
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="grid grid-cols-3 gap-3 md:hidden">
          <div />
          <button onClick={() => setDirection({ x: 0, y: -1 })} className="p-5 bg-slate-800 rounded-[1.5rem] active:bg-blue-600 transition-colors shadow-lg">↑</button>
          <div />
          <button onClick={() => setDirection({ x: -1, y: 0 })} className="p-5 bg-slate-800 rounded-[1.5rem] active:bg-blue-600 transition-colors shadow-lg">←</button>
          <button onClick={() => setDirection({ x: 0, y: 1 })} className="p-5 bg-slate-800 rounded-[1.5rem] active:bg-blue-600 transition-colors shadow-lg">↓</button>
          <button onClick={() => setDirection({ x: 1, y: 0 })} className="p-5 bg-slate-800 rounded-[1.5rem] active:bg-blue-600 transition-colors shadow-lg">→</button>
        </div>
        <p className="text-[11px] font-black text-slate-500 text-center tracking-[0.2em] uppercase opacity-60">{t('keyboardInstruction')}</p>
      </div>
    </div>
  );
};

export default SnakeGame;
