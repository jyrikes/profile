
import { Skill, Experience, LocalizedString } from './types';

export const SKILLS: Skill[] = [
  // LINGUAGENS
  {
    id: 'python-adv',
    name: { pt: 'Python Avançado', en: 'Advanced Python' },
    category: 'core',
    icon: '🐍',
    animationType: 'python',
    description: { pt: 'Desenvolvimento robusto, automação e análise de dados.', en: 'Robust development, automation, and data analysis.' },
    example: { pt: 'Scripts de automação e processamento de dados em larga escala.', en: 'Automation scripts and large-scale data processing.' }
  },
  {
    id: 'js-react-native',
    name: { pt: 'JavaScript (React Native)', en: 'JavaScript (React Native)' },
    category: 'mobile',
    icon: '📜',
    animationType: 'mobile',
    description: { pt: 'Desenvolvimento de interfaces mobile modernas e fluidas.', en: 'Development of modern and fluid mobile interfaces.' },
    example: { pt: 'Criação de componentes reutilizáveis e lógica de estado.', en: 'Creation of reusable components and state logic.' }
  },
  {
    id: 'sql-core',
    name: { pt: 'SQL', en: 'SQL' },
    category: 'db',
    icon: '🗄️',
    animationType: 'database',
    description: { pt: 'Consultas, filtros e otimização de bancos de dados.', en: 'Queries, filters, and database optimization.' },
    example: { pt: 'Modelagem de dados e queries complexas.', en: 'Data modeling and complex queries.' }
  },
  {
    id: 'cpp-core',
    name: { pt: 'C/C++', en: 'C/C++' },
    category: 'core',
    icon: '⚙️',
    animationType: 'rocket',
    description: { pt: 'Base acadêmica sólida e lógica de programação de baixo nível.', en: 'Solid academic foundation and low-level programming logic.' },
    example: { pt: 'Implementação de algoritmos e estruturas de dados.', en: 'Implementation of algorithms and data structures.' }
  },
  {
    id: 'csharp-core',
    name: { pt: 'C#', en: 'C#' },
    category: 'core',
    icon: '🎯',
    animationType: 'rocket',
    description: { pt: 'Desenvolvimento de ferramentas de simulação e emuladores.', en: 'Development of simulation tools and emulators.' },
    example: { pt: 'Criação de emulador MCARGA para validação serial.', en: 'Creation of MCARGA emulator for serial validation.' }
  },
  {
    id: 'java-core',
    name: { pt: 'Java', en: 'Java' },
    category: 'core',
    icon: '☕',
    animationType: 'rocket',
    description: { pt: 'Conhecimento em Programação Orientada a Objetos.', en: 'Knowledge in Object-Oriented Programming.' },
    example: { pt: 'Desenvolvimento de aplicações baseadas em classes.', en: 'Development of class-based applications.' }
  },
  {
    id: 'shell-script',
    name: { pt: 'Shell Script (Linux)', en: 'Shell Script (Linux)' },
    category: 'tools',
    icon: '🐚',
    animationType: 'python',
    description: { pt: 'Automação de tarefas no terminal Linux.', en: 'Automation of tasks in the Linux terminal.' },
    example: { pt: 'Scripts de backup e gerenciamento de processos.', en: 'Backup and process management scripts.' }
  },
  // BACKEND
  {
    id: 'flask-api',
    name: { pt: 'Flask (APIs REST)', en: 'Flask (REST APIs)' },
    category: 'backend',
    icon: '🧪',
    animationType: 'fastapi',
    description: { pt: 'Criação de APIs leves e eficientes.', en: 'Creation of lightweight and efficient APIs.' },
    example: { pt: 'Desenvolvimento de microserviços rápidos.', en: 'Development of fast microservices.' }
  },
  {
    id: 'fastapi-api',
    name: { pt: 'FastAPI', en: 'FastAPI' },
    category: 'backend',
    icon: '⚡',
    animationType: 'fastapi',
    description: { pt: 'Endpoints assíncronos de alta performance.', en: 'High-performance asynchronous endpoints.' },
    example: { pt: 'Integração de modelos de IA em tempo real.', en: 'Real-time AI model integration.' }
  },
  {
    id: 'springboot-api',
    name: { pt: 'Spring Boot', en: 'Spring Boot' },
    category: 'backend',
    icon: '🍃',
    animationType: 'fastapi',
    description: { pt: 'Desenvolvimento de backends robustos e escaláveis.', en: 'Development of robust and scalable backends.' },
    example: { pt: 'Arquitetura modular e orientada a domínio (DDD).', en: 'Modular and Domain-Driven Design (DDD) architecture.' }
  },
  // MOBILE
  {
    id: 'react-native-mobile',
    name: { pt: 'React Native', en: 'React Native' },
    category: 'mobile',
    icon: '📱',
    animationType: 'mobile',
    description: { pt: 'Apps modernos com Tab Navigator e vector-icons.', en: 'Modern apps with Tab Navigator and vector-icons.' },
    example: { pt: 'Interface de usuário intuitiva para controle IoT.', en: 'Intuitive user interface for IoT control.' }
  },
  {
    id: 'electron-desktop',
    name: { pt: 'Electron', en: 'Electron' },
    category: 'tools',
    icon: '⚛️',
    animationType: 'mobile',
    description: { pt: 'Desenvolvimento de aplicações desktop cross-platform.', en: 'Development of cross-platform desktop applications.' },
    example: { pt: 'Interface do SMM empacotada para Windows/Linux.', en: 'SMM interface packaged for Windows/Linux.' }
  },
  // BANCO DE DADOS
  {
    id: 'postgres-db',
    name: { pt: 'PostgreSQL', en: 'PostgreSQL' },
    category: 'db',
    icon: '🐘',
    animationType: 'database',
    description: { pt: 'Banco de dados relacional robusto para produção.', en: 'Robust relational database for production.' },
    example: { pt: 'Gerenciamento de grandes volumes de dados.', en: 'Management of large data volumes.' }
  },
  {
    id: 'mongodb-db',
    name: { pt: 'MongoDB', en: 'MongoDB' },
    category: 'db',
    icon: '🍃',
    animationType: 'database',
    description: { pt: 'Banco de dados NoSQL orientado a documentos.', en: 'Document-oriented NoSQL database.' },
    example: { pt: 'Persistência flexível para medições industriais.', en: 'Flexible persistence for industrial measurements.' }
  },
  {
    id: 'mysql-db',
    name: { pt: 'MySQL / MariaDB', en: 'MySQL / MariaDB' },
    category: 'db',
    icon: '🐬',
    animationType: 'database',
    description: { pt: 'Administração e otimização de bancos SQL.', en: 'Administration and optimization of SQL databases.' },
    example: { pt: 'Sistemas de inventário e logs industriais.', en: 'Inventory systems and industrial logs.' }
  },
  {
    id: 'sqlite-db',
    name: { pt: 'SQLite (Singleton)', en: 'SQLite (Singleton)' },
    category: 'db',
    icon: '📦',
    animationType: 'database',
    description: { pt: 'Bancos locais eficientes com padrão Singleton.', en: 'Efficient local databases with Singleton pattern.' },
    example: { pt: 'Armazenamento offline para apps mobile.', en: 'Offline storage for mobile apps.' }
  },
  // IA & VISÃO
  {
    id: 'yolo-ai',
    name: { pt: 'YOLO (v8/v10)', en: 'YOLO (v8/v10)' },
    category: 'ai',
    icon: '👁️',
    animationType: 'neural',
    description: { pt: 'Detecção de objetos em tempo real com alta precisão.', en: 'Real-time object detection with high precision.' },
    example: { pt: 'Detecção de EPIs em ambientes fabris.', en: 'PPE detection in factory environments.' }
  },
  {
    id: 'tensorflow-ai',
    name: { pt: 'TensorFlow / Keras', en: 'TensorFlow / Keras' },
    category: 'ai',
    icon: '🧠',
    animationType: 'neural',
    description: { pt: 'Treinamento de redes neurais profundas.', en: 'Training of deep neural networks.' },
    example: { pt: 'Classificação de imagens e séries temporais.', en: 'Image classification and time series.' }
  },
  {
    id: 'opencv-ai',
    name: { pt: 'OpenCV', en: 'OpenCV' },
    category: 'ai',
    icon: '📸',
    animationType: 'neural',
    description: { pt: 'Processamento de imagem e visão computacional.', en: 'Image processing and computer vision.' },
    example: { pt: 'Filtros e transformações em streams de vídeo.', en: 'Filters and transformations on video streams.' }
  },
  {
    id: 'ds-tools',
    name: { pt: 'Pandas / NumPy / Scikit-Learn', en: 'Pandas / NumPy / Scikit-Learn' },
    category: 'ai',
    icon: '📊',
    animationType: 'chart',
    description: { pt: 'Análise de dados e Machine Learning clássico.', en: 'Data analysis and classic Machine Learning.' },
    example: { pt: 'Predição de performance e limpeza de dados.', en: 'Performance prediction and data cleaning.' }
  },
  // FERRAMENTAS
  {
    id: 'docker-devops',
    name: { pt: 'Docker', en: 'Docker' },
    category: 'tools',
    icon: '🐳',
    animationType: 'rocket',
    description: { pt: 'Containerização de aplicações para deploy.', en: 'Containerization of applications for deployment.' },
    example: { pt: 'Ambientes de desenvolvimento isolados e escaláveis.', en: 'Isolated and scalable development environments.' }
  },
  {
    id: 'git-tools',
    name: { pt: 'Git / GitHub', en: 'Git / GitHub' },
    category: 'tools',
    icon: '🍴',
    animationType: 'rocket',
    description: { pt: 'Controle de versão e colaboração em código.', en: 'Version control and code collaboration.' },
    example: { pt: 'Gerenciamento de repositórios e branches.', en: 'Repository and branch management.' }
  },
  {
    id: 'linux-os',
    name: { pt: 'Linux (Ubuntu/Debian)', en: 'Linux (Ubuntu/Debian)' },
    category: 'tools',
    icon: '🐧',
    animationType: 'python',
    description: { pt: 'Administração de servidores e ambientes Linux.', en: 'Administration of servers and Linux environments.' },
    example: { pt: 'Configuração de servidores web e segurança.', en: 'Web server configuration and security.' }
  },
  {
    id: 'zabbix-tools',
    name: { pt: 'Zabbix', en: 'Zabbix' },
    category: 'tools',
    icon: '📊',
    animationType: 'chart',
    description: { pt: 'Monitoramento de infraestrutura e redes.', en: 'Infrastructure and network monitoring.' },
    example: { pt: 'Dashboards de saúde de sistemas em tempo real.', en: 'Real-time system health dashboards.' }
  },
  {
    id: 'aws-cloud',
    name: { pt: 'AWS', en: 'AWS' },
    category: 'tools',
    icon: '☁️',
    animationType: 'rocket',
    description: { pt: 'Serviços de computação em nuvem.', en: 'Cloud computing services.' },
    example: { pt: 'Hospedagem de recursos e bancos de dados.', en: 'Resource and database hosting.' }
  },
  // INDÚSTRIA
  {
    id: 'nodered-ind',
    name: { pt: 'Node-RED', en: 'Node-RED' },
    category: 'industrial',
    icon: '🔗',
    animationType: 'database',
    description: { pt: 'Fluxos de automação e integração IoT.', en: 'Automation flows and IoT integration.' },
    example: { pt: 'Dashboard de monitoramento em tempo real.', en: 'Real-time monitoring dashboard.' }
  },
  {
    id: 'mqtt-ind',
    name: { pt: 'MQTT', en: 'MQTT' },
    category: 'industrial',
    icon: '📡',
    animationType: 'fastapi',
    description: { pt: 'Protocolo de comunicação leve para IoT.', en: 'Lightweight communication protocol for IoT.' },
    example: { pt: 'Troca de mensagens entre sensores e brokers.', en: 'Message exchange between sensors and brokers.' }
  },
  {
    id: 'keyence-ind',
    name: { pt: 'Sensores Keyence', en: 'Keyence Sensors' },
    category: 'industrial',
    icon: '🔍',
    animationType: 'database',
    description: { pt: 'Integração de sensores industriais de alta precisão.', en: 'Integration of high-precision industrial sensors.' },
    example: { pt: 'Rastreabilidade total em linhas de produção.', en: 'Full traceability in production lines.' }
  },
  // SOFT SKILLS
  {
    id: 'soft-analytical',
    name: { pt: 'Pensamento Analítico', en: 'Analytical Thinking' },
    category: 'soft',
    icon: '🧠',
    animationType: 'soft',
    description: { pt: 'Capacidade de decompor problemas complexos.', en: 'Ability to break down complex problems.' },
    example: { pt: 'Análise de falhas em sistemas críticos.', en: 'Failure analysis in critical systems.' }
  },
  {
    id: 'soft-learning',
    name: { pt: 'Aprendizado Ativo', en: 'Active Learning' },
    category: 'soft',
    icon: '📚',
    animationType: 'soft',
    description: { pt: 'Busca constante por novos conhecimentos.', en: 'Constant search for new knowledge.' },
    example: { pt: 'Domínio rápido de novas tecnologias.', en: 'Fast mastery of new technologies.' }
  },
  {
    id: 'soft-problem-solving',
    name: { pt: 'Resolução de Problemas', en: 'Problem Solving' },
    category: 'soft',
    icon: '🛠️',
    animationType: 'soft',
    description: { pt: 'Foco em encontrar soluções práticas e eficazes.', en: 'Focus on finding practical and effective solutions.' },
    example: { pt: 'Superação de desafios técnicos imprevistos.', en: 'Overcoming unforeseen technical challenges.' }
  },
  {
    id: 'soft-critical-thinking',
    name: { pt: 'Pensamento Crítico', en: 'Critical Thinking' },
    category: 'soft',
    icon: '⚖️',
    animationType: 'soft',
    description: { pt: 'Avaliação objetiva de situações e dados.', en: 'Objective evaluation of situations and data.' },
    example: { pt: 'Tomada de decisão baseada em evidências.', en: 'Evidence-based decision making.' }
  },
  {
    id: 'soft-creativity',
    name: { pt: 'Criatividade', en: 'Creativity' },
    category: 'soft',
    icon: '🎨',
    animationType: 'soft',
    description: { pt: 'Abordagem inovadora para desafios técnicos.', en: 'Innovative approach to technical challenges.' },
    example: { pt: 'Desenvolvimento de soluções fora da caixa.', en: 'Development of out-of-the-box solutions.' }
  },
  {
    id: 'soft-communication',
    name: { pt: 'Comunicação Técnica', en: 'Technical Communication' },
    category: 'soft',
    icon: '🗣️',
    animationType: 'soft',
    description: { pt: 'Explicação clara de conceitos complexos.', en: 'Clear explanation of complex concepts.' },
    example: { pt: 'Documentação e apresentações para stakeholders.', en: 'Documentation and presentations for stakeholders.' }
  },
  {
    id: 'soft-collaboration',
    name: { pt: 'Colaboração', en: 'Collaboration' },
    category: 'soft',
    icon: '🤝',
    animationType: 'soft',
    description: { pt: 'Trabalho em equipe harmonioso e produtivo.', en: 'Harmonious and productive teamwork.' },
    example: { pt: 'Sucesso em projetos multidisciplinares.', en: 'Success in multidisciplinary projects.' }
  },
  {
    id: 'soft-leadership',
    name: { pt: 'Liderança', en: 'Leadership' },
    category: 'soft',
    icon: '👑',
    animationType: 'soft',
    description: { pt: 'Capacidade de guiar e inspirar outros.', en: 'Ability to guide and inspire others.' },
    example: { pt: 'Gestão de iniciativas técnicas e mentoria.', en: 'Management of technical initiatives and mentoring.' }
  },
  {
    id: 'solid-principles',
    name: { pt: 'Princípios SOLID', en: 'SOLID Principles' },
    category: 'soft',
    icon: '🧱',
    animationType: 'soft',
    description: { pt: 'Práticas de design de software para código limpo.', en: 'Software design practices for clean code.' },
    example: { pt: 'Refatoração do SMM para alta manutenibilidade.', en: 'SMM refactoring for high maintainability.' }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2024 - Atual',
    company: 'Startup Agrainov',
    role: { 
      pt: 'Cofundador & Lead AI Developer', 
      en: 'Co-founder & Lead AI Developer' 
    },
    description: { 
      pt: 'Liderança técnica no desenvolvimento de soluções de IA para o pequeno produtor rural.', 
      en: 'Technical leadership in developing AI solutions for small rural farmers.' 
    },
    metrics: {
      pt: 'MVP entregue em 4 meses com integração total de Hardware IoT e Cloud Analytics, resultando em 15% de melhoria na previsibilidade de safra.',
      en: 'MVP delivered in 4 months with full IoT Hardware and Cloud Analytics integration, resulting in 15% improved crop predictability.'
    },
    skills: ['AI', 'IoT', 'Sustainable Ag', 'Python', 'Leadership']
  },
  {
    period: '2022 - Atual',
    company: 'Grupo Moura',
    role: { 
      pt: 'Estagiário em Eng. de Dados & Automação (Indústria 4.0)', 
      en: 'Data Eng. & Automation Intern (Industry 4.0)' 
    },
    description: { 
      pt: 'Desenvolvimento e refatoração de sistemas industriais (SMM), integração de sensores Keyence e implantação de monitoramento centralizado com Zabbix. Foco na tratativa de dados de formação de baterias (Calota).', 
      en: 'Development and refactoring of industrial systems (SMM), Keyence sensor integration, and implementation of centralized monitoring with Zabbix. Focused on battery formation data processing (Calota).' 
    },
    metrics: {
      pt: 'Principal entrega: Tratativa dos dados de formação da bateria (Calota), resultando em uma redução de 5% no tempo médio de formação de uma bateria.',
      en: 'Main delivery: Battery formation data processing (Calota), resulting in a 5% reduction in average battery formation time.'
    },
    skills: ['Spring Boot', 'React', 'Zabbix', 'Python', 'Node-RED', 'SQL', 'SOLID']
  },
  {
    period: '2022 - 2023',
    company: 'Voxar Labs | CIN',
    role: { 
      pt: 'Pesquisador em Visão Computacional', 
      en: 'Computer Vision Researcher' 
    },
    description: { 
      pt: 'Pesquisa e treinamento de redes neurais para detecção de objetos em ambiente industrial.', 
      en: 'Research and training of neural networks for object detection in industrial environments.' 
    },
    metrics: {
      pt: 'Curadoria de dataset com +10.000 instâncias e treinamento de modelos YOLOv8 com mAP superior a 0.9 e tempo de resposta de 18ms.',
      en: 'Dataset curation with +10,000 instances and YOLOv8 training with mAP above 0.9 and 18ms response time.'
    },
    skills: ['YOLO', 'TensorFlow', 'Deep Learning']
  }
];

export interface ProjectDetail {
  name: string;
  tech: string;
  description: LocalizedString;
  example: LocalizedString;
  link?: string;
}

export const TECHNICAL_PROJECT_DETAILS: Record<string, ProjectDetail[]> = {
  ai: [
    { 
      name: 'Relatório de Formação (IA Agrainov)', 
      tech: 'Python, Pandas, FastAPI, PostgreSQL', 
      description: { 
        pt: 'Sistema de análise e predição para otimização do processo de formação de baterias.', 
        en: 'Analysis and prediction system for optimizing the battery formation process.' 
      },
      example: { 
        pt: 'Integração de dados de CLP e Mcarga para redução do tempo de ciclo e base para modelos de IA.', 
        en: 'PLC and Mcarga data integration for cycle time reduction and AI model foundation.' 
      }
    },
    { 
      name: 'XGBoost Battery Regression', 
      tech: 'XGBoost, Python, Pandas', 
      description: { pt: 'Modelo preditivo para estimativa de carga residual.', en: 'Predictive model for residual charge estimation.' },
      example: { pt: 'Redução de 12% no erro de predição de performance de baterias.', en: '12% reduction in battery performance prediction error.' },
      link: 'https://github.com/jyrikes'
    },
    { 
      name: 'Real-time YOLO Detection', 
      tech: 'YOLO v10, CUDA, Python', 
      description: { pt: 'Pipeline de visão computacional para segurança fabril.', en: 'Computer vision pipeline for factory safety.' },
      example: { pt: 'Inspecção automática de EPIs em <20ms por frame.', en: 'Automatic PPE inspection in <20ms per frame.' },
      link: 'https://github.com/jyrikes'
    }
  ],
  industry: [
    { 
      name: 'Sistema Moura de Medições (SMM)', 
      tech: 'Spring Boot, React, Electron, MongoDB', 
      description: { 
        pt: 'Plataforma modular para medições industriais (Placas, Grades e Laminação).', 
        en: 'Modular platform for industrial measurements (Plates, Grids, and Lamination).' 
      },
      example: { 
        pt: 'Refatoração SOLID e suporte a protocolos Serial, Ethernet e Bluetooth.', 
        en: 'SOLID refactoring and support for Serial, Ethernet, and Bluetooth protocols.' 
      }
    },
    { 
      name: 'Monitoramento Zabbix Industrial', 
      tech: 'Zabbix, Docker, Node-RED, AWS', 
      description: { 
        pt: 'Implantação de monitoramento centralizado para infraestrutura e dispositivos IoT.', 
        en: 'Implementation of centralized monitoring for infrastructure and IoT devices.' 
      },
      example: { 
        pt: 'Visibilidade unificada de ativos on-premises e cloud com alertas automatizados.', 
        en: 'Unified visibility of on-premises and cloud assets with automated alerts.' 
      }
    },
    { 
      name: 'Emulador MCARGA', 
      tech: 'C#', 
      description: { 
        pt: 'Ferramenta de simulação para validação de comunicação serial entre sistemas.', 
        en: 'Simulation tool for validating serial communication between systems.' 
      },
      example: { 
        pt: 'Emulação de fluxo de dados de equipamentos para testes de integração sem hardware físico.', 
        en: 'Equipment data flow emulation for integration testing without physical hardware.' 
      }
    },
    { 
      name: 'Keyence Traceability Hub', 
      tech: 'Node-RED, SQL Server, Python', 
      description: { pt: 'Middleware de integração de sensores de chão de fábrica.', en: 'Factory floor sensor integration middleware.' },
      example: { pt: 'Sincronização de +2.000 registros/hora sem perda de pacotes.', en: 'Syncing +2,000 records/hour with zero packet loss.' },
      link: 'https://github.com/jyrikes'
    }
  ],
  backend: [
    { 
      name: 'FastAPI Microservices', 
      tech: 'FastAPI, PostgreSQL', 
      description: { pt: 'Arquitetura escalável para servir predições de IA.', en: 'Scalable architecture for serving AI predictions.' },
      example: { pt: 'Tempo de resposta médio de 12ms para inferência distribuída.', en: 'Average response time of 12ms for distributed inference.' },
      link: 'https://github.com/jyrikes'
    }
  ]
};
