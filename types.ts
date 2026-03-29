
export interface LocalizedString {
  pt: string;
  en: string;
}

export interface Skill {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  category: 'core' | 'industrial' | 'rare' | 'ai' | 'backend' | 'mobile' | 'db' | 'tools' | 'soft';
  icon: string;
  example: LocalizedString;
  animationType: 'python' | 'neural' | 'database' | 'chart' | 'rocket' | 'fastapi' | 'mobile' | 'tools' | 'soft';
}

export interface Experience {
  period: string;
  company: string;
  role: LocalizedString;
  description: LocalizedString;
  metrics: LocalizedString; // Campo obrigatório para KPIs
  skills: string[];
}

export type Language = 'pt' | 'en';
export type GameState = 'idle' | 'playing' | 'discovery' | 'gameover';
