import { detailedEnglishCv, industrialAnalyticsImage, measurementPlatformImage, observabilityDashboardImage } from './embeddedAssets.js'

export const links = {
  github: 'https://github.com/jyrikes',
  linkedin: 'https://www.linkedin.com/in/jose-yrikes',
  orcid: 'https://orcid.org/0009-0001-4694-4133',
  email: 'mailto:jyrikes3@gmail.com',
  quantum: 'https://github.com/jyrikes/quantum-cq',
  quantumPypi: 'https://pypi.org/project/quantum-cq/',
  quantumDocs: 'https://github.com/jyrikes/quantum-cq/tree/main/docs',
  notebookux: 'https://github.com/jyrikes/notebookux',
  notebookuxPypi: 'https://pypi.org/project/notebookux/',
  notebookuxDocs: 'https://jyrikes.github.io/notebookux/',
  diamonds: 'https://github.com/jyrikes/Comparacao-Experimental-de-Algoritmos-de-Classificacao-Aplicados-ao-Dataset-Diamonds',
  diamondsArticle: 'https://github.com/jyrikes/Comparacao-Experimental-de-Algoritmos-de-Classificacao-Aplicados-ao-Dataset-Diamonds/tree/main/artigo',
  itemm: 'https://github.com/jyrikes/itemm-analyzer',
  mapbus: 'https://github.com/jyrikes/MapBus-WebServer',
  mapbusLive: 'https://transporteuabj.pythonanywhere.com',
  voxar: 'https://voxarlabs.cin.ufpe.br/',
  cin: 'https://portal.cin.ufpe.br/',
  resume: detailedEnglishCv,
}

export const skills = [
  'Python', 'FastAPI', 'Flask', 'Java', 'Spring Boot', 'React', 'TypeScript',
  'PostgreSQL', 'TimescaleDB', 'MongoDB', 'Docker', 'Node-RED', 'Zabbix',
  'Computer Vision', 'Scikit-learn', 'Qiskit', 'Git',
]

export const industrialProjects = [
  {
    number: '01',
    title: 'Industrial Process Analytics',
    eyebrow: 'Data integration & optimization',
    image: industrialAnalyticsImage,
    imageAlt: 'Sanitized interface of an industrial formation-process reporting system',
    description:
      'Integrated PLC process states with equipment charging data, synchronized multiple industrial sources and delivered operational reports for battery formation analysis.',
    bullets: [
      'Reusable Node-RED acquisition flows and time-series storage',
      'FastAPI data services and Flask reporting interface',
      'Pilot expanded across multiple production sections',
    ],
    stack: ['Python', 'FastAPI', 'Flask', 'Node-RED', 'PostgreSQL', 'TimescaleDB'],
    note: 'Sanitized interface — production data and internal identifiers omitted.',
    status: 'Documented industrial case study',
  },
  {
    number: '02',
    title: 'Industrial Measurement Platform',
    eyebrow: 'Legacy modernization & device integration',
    image: measurementPlatformImage,
    imageAlt: 'Interface of an industrial measurement system',
    description:
      'Refactored and expanded a multi-device measurement platform into a modular system designed for different industrial processes and communication protocols.',
    bullets: [
      'Layered architecture, SOLID principles and domain-oriented modeling',
      'Real-time measurements, configurable cycles, historical filters and exports',
      'Serial, Ethernet and Bluetooth device integration',
    ],
    stack: ['Spring Boot', 'MongoDB', 'React', 'TypeScript', 'Electron', 'C#'],
    note: 'Sanitized system interface — proprietary source code and process details omitted.',
    status: 'Documented industrial case study',
  },
  {
    number: '03',
    title: 'Infrastructure Observability',
    eyebrow: 'Industrial, corporate & cloud monitoring',
    image: observabilityDashboardImage,
    imageAlt: 'Representative Zabbix monitoring dashboard',
    description:
      'Implemented centralized monitoring for heterogeneous environments spanning industrial devices, applications, databases, segmented networks and cloud resources.',
    bullets: [
      'Distributed Zabbix Proxy architecture for isolated networks',
      'Automated Agent and Proxy deployment with Docker',
      'Dashboards, templates, alerting and offline package delivery',
    ],
    stack: ['Zabbix', 'Docker', 'Linux', 'AWS', 'SSH', 'SCP', 'Automation'],
    note: 'Representative monitoring view — the final internal dashboard is not disclosed.',
    status: 'Documented industrial case study',
  },
]

export const evidenceProjects = [
  {
    index: '01',
    title: 'quantum-cq',
    label: 'Published Python package · v0.2.0',
    description:
      'Research-oriented toolkit for quantum data encoding, navigation encoders, circuit generation, structural metrics, experiment pipelines and multi-engine integration.',
    evidence: ['Public source code', 'Published on PyPI', 'Documentation + examples', 'Automated tests'],
    metrics: ['Python ≥ 3.10', 'Qiskit reference engine', 'Navigation encoder'],
    actions: [
      ['Source', links.quantum],
      ['PyPI', links.quantumPypi],
      ['Docs', links.quantumDocs],
    ],
  },
  {
    index: '02',
    title: 'NotebookUX',
    label: 'Published Python package · v0.1.0',
    description:
      'Reusable visual components for academic and technical notebooks, including themes, sections, cards, tables, figures and navigable multi-screen modules.',
    evidence: ['Public source code', 'Published on PyPI', 'Live documentation', 'CI workflows'],
    metrics: ['Python ≥ 3.10', 'MkDocs documentation', 'HTML-first API'],
    actions: [
      ['Source', links.notebookux],
      ['PyPI', links.notebookuxPypi],
      ['Live docs', links.notebookuxDocs],
    ],
  },
  {
    index: '03',
    title: 'Classification Benchmark',
    label: 'Models, results and scientific article',
    description:
      'Reproducible comparison of six classification algorithms on 53,940 records, using stratified 10-fold cross-validation, GridSearchCV and leakage-safe preprocessing pipelines.',
    evidence: ['Code + dataset workflow', 'Published results', 'LaTeX/SBC article', 'Methodological limitations'],
    metrics: ['6 primary models', '10-fold CV', 'Best test F1 macro: 0.7584'],
    actions: [
      ['Repository', links.diamonds],
      ['Article files', links.diamondsArticle],
    ],
  },
  {
    index: '04',
    title: 'MapBus',
    label: 'Full-stack academic system',
    description:
      'Flask-based route and timetable monitoring system designed for UFRPE/UABJ transportation, with map views, route data and HTTP endpoints.',
    evidence: ['Public repository', 'Documented endpoints', 'Deployed prototype'],
    metrics: ['Python', 'Flask', 'Maps + routes'],
    actions: [
      ['Source', links.mapbus],
      ['Live prototype', links.mapbusLive],
    ],
  },
  {
    index: '05',
    title: 'ITEMM Battery Analyzer',
    label: 'Applied data-analysis prototype',
    description:
      'Prototype developed to support researchers in exploring measurements from experimental battery prototypes and investigating performance behavior.',
    evidence: ['Public repository', 'Applied research context', 'Web + data workflow'],
    metrics: ['Flask', 'SQLite', 'Pandas'],
    actions: [['Source', links.itemm]],
  },
]

export const researchCases = [
  {
    label: 'Institutional research',
    title: 'PPE Detection and Dataset Quality at Voxar Labs / CIn-UFPE',
    description:
      'Worked with computer-vision experiments for personal protective equipment detection, including missing-label analysis, dataset organization, model evaluation and metric interpretation.',
    bullets: [
      'Python-based computer vision and object-detection workflows',
      'Investigation of missing annotations and their effect on evaluation',
      'Precision/recall-oriented analysis and reproducibility work',
    ],
    note: 'The research code and datasets are institutional artifacts and are not presented as public personal repositories.',
    actions: [
      ['Voxar Labs', links.voxar],
      ['CIn-UFPE', links.cin],
    ],
  },
  {
    label: 'Public reproducible experiment',
    title: 'Six-Model Classification Study',
    description:
      'Compared Decision Tree, KNN, Naive Bayes, Logistic Regression, Linear SVM and MLP under one experimental protocol, with an additional RBF-SVM experiment.',
    bullets: [
      'Decision Tree final macro F1: 0.7584',
      'MLP final macro F1: 0.7422',
      'RBF-SVM complementary macro F1: approximately 0.7261',
    ],
    note: 'The repository exposes methodology, results, source files and an SBC-format LaTeX article.',
    actions: [
      ['Review experiment', links.diamonds],
      ['Read article source', links.diamondsArticle],
    ],
  },
]

export const publications = [
  {
    type: 'Technical-scientific report · 2026',
    title: 'Coherent Navigation Quantum Encoding in Hierarchical Data Structures for Quantum Machine Learning',
    description:
      'A 79-page research report covering mathematical foundations, conventional QML encoders, reversible oracles, logical QRAM semantics, the quantum-cq architecture and experimental evaluation under idealized noise.',
    details: ['20 figures', '21 tables', 'NavigationEncoder validation', 'Grover over addressed memory'],
    actions: [['Related implementation', links.quantum], ['Package release', links.quantumPypi]],
    status: 'Full academic report available on request',
  },
  {
    type: 'Scientific coursework article · 2026',
    title: 'Experimental Comparison of Classification Algorithms Applied to the Diamonds Dataset',
    description:
      'SBC-format LaTeX article supported by a reproducible machine-learning pipeline, cross-validation results, model comparison and explicit methodological limitations.',
    details: ['53,940 records', '6 primary models', '10-fold CV', 'Public article source'],
    actions: [['Repository', links.diamonds], ['Article files', links.diamondsArticle]],
    status: 'Public evidence available',
  },
]
