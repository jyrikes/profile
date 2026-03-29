
import React, { useState } from 'react';
import { Skill, Language } from './types';
import { SKILLS, EXPERIENCES, TECHNICAL_PROJECT_DETAILS, ProjectDetail } from './constants';
import SnakeGame from './components/SnakeGame';
import { ActivityVisualizer } from './components/ActivityVisualizer';
import { UI_STRINGS } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [unlockedSkills, setUnlockedSkills] = useState<Skill[]>([]);
  const [selectedDetail, setSelectedDetail] = useState<{title: string, detail: ProjectDetail | Skill, animationType: string} | null>(null);
  
  const unlockedSkillIds = unlockedSkills.map(s => s.id);

  const t = (key: string) => UI_STRINGS[key]?.[lang] || key;

  const handleSkillUnlock = (skill: Skill) => {
    if (!unlockedSkillIds.includes(skill.id)) {
      setUnlockedSkills(prev => [...prev, skill]);
    }
  };

  const handleUnlockAll = () => {
    setUnlockedSkills(SKILLS);
  };

  const toggleLang = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  const closeDetail = () => setSelectedDetail(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Modal de Detalhes com Links de Código */}
      {selectedDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-xl bg-slate-950/60 animate-in fade-in duration-300">
          <div className="absolute inset-0 cursor-pointer" onClick={closeDetail}></div>
          <div className="relative bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-[3rem] max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-300">
            <button onClick={closeDetail} className="absolute top-8 right-8 text-slate-500 hover:text-white transition-colors text-2xl" aria-label="Fechar">✕</button>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{'icon' in selectedDetail.detail ? selectedDetail.detail.icon : '🚀'}</span>
                <div>
                  <h4 className="text-sm font-black text-blue-500 uppercase tracking-widest">{selectedDetail.title}</h4>
                  <h3 className="text-3xl font-black text-white">
                    {typeof selectedDetail.detail.name === 'string' 
                      ? selectedDetail.detail.name 
                      : (selectedDetail.detail.name as any)[lang]}
                  </h3>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Live Activity Simulation</h5>
                <ActivityVisualizer type={selectedDetail.animationType} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-950/50 rounded-2xl border border-slate-800">
                  <h5 className="text-[10px] font-black text-slate-500 uppercase mb-2 tracking-widest">Stack / Contexto</h5>
                  <div className="text-slate-300 leading-relaxed text-sm font-medium">
                    {'description' in selectedDetail.detail 
                      ? (typeof selectedDetail.detail.description === 'string' ? selectedDetail.detail.description : (selectedDetail.detail.description as any)[lang])
                      : (selectedDetail.detail as ProjectDetail).tech}
                  </div>
                </div>

                <div className="p-6 bg-blue-600/5 rounded-2xl border border-blue-500/20">
                  <h5 className="text-[10px] font-black text-blue-400 uppercase mb-2 tracking-widest">{t('realProject')}</h5>
                  <p className="text-white font-medium italic leading-relaxed text-sm">
                    "{typeof selectedDetail.detail.example === 'string' 
                      ? selectedDetail.detail.example 
                      : (selectedDetail.detail.example as any)[lang]}"
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                 {'link' in selectedDetail.detail && (
                    <a 
                      href={(selectedDetail.detail as any).link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all text-center flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20"
                    >
                      <span>💻</span> {t('viewCode')}
                    </a>
                 )}
                 <button 
                  onClick={closeDetail}
                  className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-black rounded-2xl transition-all"
                >
                  VOLTAR AO PORTFÓLIO
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar - Navegação Funcional */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">JY</div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-sm">José Yrikes</h1>
              <p className="text-[10px] text-slate-400 font-mono">Data & AI • English C2</p>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex items-center gap-6">
              <a href="#about" className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">{t('navAbout')}</a>
              <a href="#quest" className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">{t('navQuest')}</a>
              <a href="#career" className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">{t('navCareer')}</a>
              <a href="#projects" className="text-xs font-bold hover:text-blue-400 transition-colors uppercase tracking-widest">{t('navProjects')}</a>
            </div>
            <a 
              href="https://www.linkedin.com/in/josé-yrikes-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white text-xs font-black rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 scale-100 hover:scale-105"
            >
               {t('downloadCV')}
            </a>
            <button onClick={toggleLang} className="text-xs font-black text-blue-400 border border-blue-500/30 px-2 py-1 rounded-md hover:bg-blue-400/10 transition-colors">
              {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-40">
        {/* Hero Section */}
        <section id="about" className="grid md:grid-cols-2 gap-16 items-center pt-10">
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <div className="inline-block w-fit px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-[10px] font-black tracking-widest uppercase">
                {t('heroBadge')}
              </div>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{t('location')}</p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
              {lang === 'pt' ? (
                <>IA que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Pensa</span>, Dados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Decidem</span>.</>
              ) : (
                <>AI that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Thinks</span>, Data that <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Decides</span>.</>
              )}
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium">
              {t('heroSubtitle')}
              <span className="block mt-4 text-blue-400 border-l-2 border-blue-500 pl-4">{t('intlExperience')}</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.linkedin.com/in/josé-yrikes-dev" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-blue-600 text-white rounded-2xl hover:bg-blue-500 flex items-center gap-3 font-black transition-all shadow-2xl shadow-blue-600/30 scale-100 hover:scale-105 active:scale-95"
              >
                 <span className="text-xl">🔗</span> {t('downloadCV')}
              </a>
              <a href="https://github.com/jyrikes" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-slate-900 rounded-2xl hover:bg-slate-800 border border-slate-800 flex items-center gap-3 font-bold transition-all shadow-lg">
                 GitHub / Labs
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-slate-900 rounded-[3rem] p-3 border border-slate-800 shadow-2xl overflow-hidden group">
               <img 
                 src="perfil.jpg" 
                 alt="José Yrikes" 
                 className="rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 w-full aspect-[4/5] object-cover object-top"
               />
               <div className="absolute bottom-6 right-6 bg-slate-950 p-4 rounded-2xl border border-slate-800 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🇨🇦</span>
                    <span className="text-[9px] font-black text-blue-400 tracking-widest uppercase">C2 English Level</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Quest Section */}
        <section id="quest" className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">{t('questTitle')}</h2>
              <p className="text-slate-400 max-w-xl text-lg font-medium">{t('questSubtitle')}</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={handleUnlockAll}
                className="px-8 py-4 bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 text-xs font-black rounded-xl border-2 border-blue-500/40 transition-all shadow-lg shadow-blue-500/5"
              >
                {t('skipGame')}
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start bg-slate-900/40 p-10 rounded-[4rem] border border-slate-800/50 shadow-2xl relative overflow-hidden">
            <SnakeGame lang={lang} onSkillUnlocked={handleSkillUnlock} onUnlockAll={handleUnlockAll} unlockedSkillIds={unlockedSkillIds} />
            
            <div className="space-y-6 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-black">{t('skillsUnlocked')}</h3>
                <span className="px-3 py-1 bg-blue-600/10 text-blue-400 rounded-lg font-mono text-xs font-bold border border-blue-500/20">{unlockedSkills.length}/{SKILLS.length}</span>
              </div>
              
              <div className="grid gap-4">
                {unlockedSkills.map((skill) => (
                  <div 
                    key={skill.id} 
                    onClick={() => setSelectedDetail({title: 'Core Skill', detail: skill, animationType: skill.animationType})}
                    className="p-6 bg-slate-900/80 border border-slate-800 rounded-[2rem] hover:border-blue-500/50 transition-all group cursor-pointer animate-in fade-in slide-in-from-right-10"
                  >
                    <div className="flex items-center gap-5">
                      <div className="text-3xl p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">{skill.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-black text-lg text-white">{skill.name[lang]}</h4>
                        <p className="text-slate-400 text-xs mt-1 line-clamp-1">{skill.description[lang]}</p>
                      </div>
                      <span className="text-blue-500 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Preview ➜</span>
                    </div>
                  </div>
                ))}
                {unlockedSkills.length === 0 && (
                  <div className="p-16 text-center border-2 border-dashed border-slate-800 rounded-[2rem] text-slate-500">
                    <p className="text-sm font-medium">{t('gameInstruction')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="space-y-20">
           <div className="text-center space-y-4">
             <h2 className="text-5xl font-black tracking-tighter">{t('careerTitle')}</h2>
             <p className="text-slate-500 text-lg font-medium">{t('careerSubtitle')}</p>
           </div>

           <div className="space-y-12">
             {EXPERIENCES.map((exp, idx) => (
               <div key={idx} className="group relative grid md:grid-cols-[1fr_2fr] gap-10 p-10 bg-slate-900/30 border border-slate-800 rounded-[3.5rem] hover:border-blue-500/20 transition-all">
                 <div className="space-y-4">
                    <time className="inline-block px-4 py-1.5 bg-slate-950 rounded-xl font-mono text-[10px] text-blue-500 font-black border border-blue-500/10">
                       {exp.period}
                    </time>
                    <h3 className="text-3xl font-black text-white leading-tight">{exp.company}</h3>
                    <p className="text-blue-400 font-bold text-sm uppercase tracking-widest">{exp.role[lang]}</p>
                 </div>
                 <div className="space-y-8">
                   <p className="text-slate-400 text-lg leading-relaxed">{exp.description[lang]}</p>
                   
                   <div className="p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/5 rounded-3xl border border-blue-500/30 relative overflow-hidden shadow-inner">
                     <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:rotate-12 transition-transform">📊</div>
                     <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">{t('businessImpact')}</p>
                     <p className="text-white font-bold text-xl leading-snug tracking-tight">{exp.metrics[lang]}</p>
                   </div>

                   <div className="flex flex-wrap gap-2">
                     {exp.skills.map(s => (
                       <span key={s} className="px-3 py-1.5 bg-slate-950 rounded-xl text-[9px] text-slate-500 font-mono border border-slate-800 uppercase font-black">
                         {s}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* Technical Projects */}
        <section id="projects" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black tracking-tight">{t('navProjects')}</h2>
            <p className="text-slate-400 text-lg font-medium">Projetos reais com código fonte aberto e métricas de performance.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(TECHNICAL_PROJECT_DETAILS).map(([cat, projects]) => (
              <div key={cat} className="space-y-6">
                <h4 className="font-black uppercase text-[10px] tracking-widest border-b border-slate-800 pb-3 flex items-center gap-2 text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                  {t(`projectCat${cat.charAt(0).toUpperCase() + cat.slice(1)}`)}
                </h4>
                <div className="space-y-4">
                  {projects.map(p => (
                    <div 
                      key={p.name} 
                      onClick={() => setSelectedDetail({title: t(`projectCat${cat.charAt(0).toUpperCase() + cat.slice(1)}`), detail: p as any, animationType: cat})}
                      className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition-all cursor-pointer group active:scale-95"
                    >
                      <h5 className="text-sm font-black text-white group-hover:text-blue-400">{p.name}</h5>
                      <p className="text-[10px] text-slate-600 font-mono mt-1">{p.tech}</p>
                      <div className="mt-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-[9px] font-black text-blue-500 uppercase tracking-tighter">View Source</span>
                         <span className="text-xs">➔</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum Section - Continuous Page Content */}
        <section id="curriculum" className="space-y-20 pt-20 border-t border-slate-800/50">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black tracking-tighter">{t('curriculumTitle')}</h2>
            <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">{t('curriculumSubtitle')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Habilidades Técnicas */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <span className="text-3xl">🧠</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t('techSkills')}</h3>
              </div>
              
              <div className="grid gap-8">
                {[
                  { title: 'Linguagens', skills: ['Python (Avançado)', 'JavaScript (React Native)', 'SQL', 'C/C++', 'Java', 'Shell Script'] },
                  { title: 'Backend & APIs', skills: ['Flask (REST)', 'FastAPI', 'Sistemas Web', 'Integração DB', 'HTTP Requests'] },
                  { title: 'Banco de Dados', skills: ['PostgreSQL', 'MySQL / MariaDB', 'SQLite (Singleton)', 'SQL Avançado', 'Pandas/SQLAlchemy'] },
                  { title: 'IA & Visão Computacional', skills: ['YOLO (v8/v10)', 'Datasets/Treinamento', 'Detecção EPIs', 'Doenças em Plantas', 'TensorFlow'] },
                  { title: 'Dados & ML', skills: ['Pandas', 'Regressão Linear', 'XGBoost', 'Limpeza de Dados', 'Avaliação de Modelos'] },
                  { title: 'Infra & DevOps', skills: ['Linux (Ubuntu/RPi)', 'Docker', 'SSH/ARM', 'Deploy Containers', 'Redes Industriais'] }
                ].map((group, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(s => (
                        <span key={s} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-medium text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Perfil */}
            <div className="space-y-10">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                <span className="text-3xl">🧩</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{t('softSkills')}</h3>
              </div>

              <div className="grid gap-8">
                {[
                  { title: 'Pensamento & Aprendizado', skills: ['Capacidade Analítica', 'Autodidata Rápido', 'Novas Tecnologias', 'Base Teórica Sólida'] },
                  { title: 'Resolução de Problemas', skills: ['Debugging Avançado', 'Diagnóstico Sistemas', 'Problemas Complexos'] },
                  { title: 'Execução & Prática', skills: ['Mão na Massa', 'Ambiente Industrial', 'Teoria em Aplicação'] },
                  { title: 'Comunicação', skills: ['Organização Projetos', 'Sistemas Estruturados', 'Explicação Técnica'] }
                ].map((group, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">{group.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map(s => (
                        <span key={s} className="px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-medium text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mt-10 p-8 bg-blue-600/5 border border-blue-500/20 rounded-[2.5rem] space-y-4">
                  <h4 className="text-white font-black text-xl tracking-tight">Resumo Profissional</h4>
                  <p className="text-slate-400 leading-relaxed italic">
                    "Desenvolvedor com experiência em backend, dados e inteligência artificial, atuando com Python, APIs (Flask/FastAPI), bancos de dados SQL e projetos de visão computacional com YOLO. Possui vivência em ambiente industrial com redes, CLPs e automação, além de experiência em análise de dados e machine learning. Perfil analítico, autodidata e orientado à resolução de problemas."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-10">
            <a 
              href="https://www.linkedin.com/in/josé-yrikes-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-12 py-6 bg-blue-600 text-white font-black rounded-3xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/40 flex items-center gap-4 scale-100 hover:scale-105 active:scale-95"
            >
              <span className="text-2xl">📄</span> {t('downloadCVButton')}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 py-32 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
           <div className="space-y-8">
             <h2 className="text-5xl font-black tracking-tighter">{t('footerTitle')}</h2>
             <p className="text-slate-400 text-xl font-medium leading-relaxed">{t('footerSubtitle')}</p>
             <div className="flex flex-col gap-4 font-black text-lg">
               <a href="mailto:jyrikes3@gmail.com" className="text-blue-400 hover:text-white flex items-center gap-3 w-fit transition-transform hover:translate-x-2">
                 <span className="p-3 bg-blue-600/10 rounded-xl">📧</span> jyrikes3@gmail.com
               </a>
               <a href="https://www.linkedin.com/in/josé-yrikes-dev" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 flex items-center gap-3 w-fit transition-transform hover:translate-x-2">
                 <span className="p-3 bg-slate-800 rounded-xl">🔗</span> LinkedIn Professional
               </a>
             </div>
           </div>
           <div className="bg-slate-900 p-10 rounded-[3rem] border border-slate-800 space-y-8 shadow-2xl">
              <h4 className="text-white font-black uppercase text-xs tracking-widest opacity-50 text-center">Recruiter Actions</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/in/josé-yrikes-dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl text-center shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all scale-100 hover:scale-[1.02]"
                >
                  VER LINKEDIN / CURRÍCULO
                </a>
                <a 
                  href="https://github.com/jyrikes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-slate-800 text-white font-black rounded-2xl text-center hover:bg-slate-700 transition-all scale-100 hover:scale-[1.02]"
                >
                  EXPLORAR REPOSITÓRIOS
                </a>
              </div>
           </div>
        </div>
        <div className="mt-20 text-center text-[10px] font-mono text-slate-700 font-black tracking-[0.5em] uppercase px-6">
           {t('designedBy')} • 2024 • DATA-DRIVEN PORTFOLIO
        </div>
      </footer>
    </div>
  );
};

export default App;
