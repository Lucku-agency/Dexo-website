// ============================================================
// COMO ADICIONAR UMA VAGA MANUALMENTE
// ============================================================
//
// 1. Copie o bloco abaixo e cole dentro do array JOBS_DATA
// 2. Preencha todos os campos (EN e PT)
// 3. Defina o `postedAt` como a data de publicação (ISO string)
//    - A vaga expira automaticamente após 30 dias
//    - Para definir data de expiração específica:
//      postedAt = data_de_expiracao - 30 dias
//    - Exemplo: expirar em 2026-04-30 → postedAt: "2026-03-31T00:00:00.000Z"
// 4. O `id` deve ser único (ex: "be-dev-002", "fe-dev-002")
// 5. O `skills` são as bolhas exibidas no card (use nomes curtos)
//
// TEMPLATE DE VAGA:
// {
//   id: "TIPO-NUMERO",                    // ex: "py-dev-001"
//   title_en: "Job Title in English",
//   title_pt: "Título da Vaga em Português",
//   type: "Full-time",
//   location: "Remote",
//   postedAt: "2026-03-01T00:00:00.000Z", // Data ISO — expira 30 dias depois
//   skills: ["Python", "Node.js", "English B2+"],
//   description_en: "Description in English...",
//   description_pt: "Descrição em Português...",
//   requirements_en: [
//     "Requirement 1",
//     "Requirement 2",
//   ],
//   requirements_pt: [
//     "Requisito 1",
//     "Requisito 2",
//   ],
//   responsibilities_en: [
//     "Responsibility 1",
//   ],
//   responsibilities_pt: [
//     "Responsabilidade 1",
//   ],
//   niceToHave_en: ["Nice to have 1"],      // opcional
//   niceToHave_pt: ["Diferencial 1"],       // opcional
// },
// ============================================================

export type Job = {
  id: string;
  title_en: string;
  title_pt: string;
  type: string;
  location: string;
  postedAt: string;
  skills: string[];
  description_en: string;
  description_pt: string;
  requirements_en: string[];
  requirements_pt: string[];
  responsibilities_en: string[];
  responsibilities_pt: string[];
  niceToHave_en?: string[];
  niceToHave_pt?: string[];
};

export const JOBS_DATA: Job[] = [
  // ── BACKEND SÊNIOR — expira em 29/03/2026 (teste do sistema) ──
  {
    id: "be-senior-test",
    title_en: "Senior Backend Developer",
    title_pt: "Desenvolvedor Backend Sênior",
    type: "Full-time",
    location: "Remote",
    postedAt: "2026-02-27T00:00:00.000Z", // Expira em 29/03/2026 (2 dias a partir de hoje)
    skills: ["Node.js", "Python", "AWS", "PostgreSQL", "Docker", "English B2+"],
    description_en: "We are hiring a Senior Backend Developer for a U.S. fintech company. You will design and build scalable APIs and microservices that power financial products used by thousands of users.",
    description_pt: "Estamos contratando um Desenvolvedor Backend Sênior para uma fintech americana. Você irá projetar e construir APIs e microsserviços escaláveis que movimentam produtos financeiros utilizados por milhares de usuários.",
    requirements_en: [
      "5+ years of backend development experience",
      "Strong proficiency in Node.js or Python",
      "Experience with RESTful and GraphQL APIs",
      "Database design skills (PostgreSQL, MongoDB)",
      "Knowledge of cloud platforms (AWS, GCP, or Azure)",
      "Experience with Docker and Kubernetes",
      "Upper-intermediate English (B2+)",
    ],
    requirements_pt: [
      "5+ anos de experiência em desenvolvimento backend",
      "Forte domínio de Node.js ou Python",
      "Experiência com APIs RESTful e GraphQL",
      "Habilidades em design de banco de dados (PostgreSQL, MongoDB)",
      "Conhecimento de plataformas cloud (AWS, GCP ou Azure)",
      "Experiência com Docker e Kubernetes",
      "Inglês intermediário-avançado (B2+)",
    ],
    responsibilities_en: [
      "Design and implement scalable backend services and APIs",
      "Optimize database queries and data models for high throughput",
      "Implement security best practices in a regulated financial environment",
      "Participate in architecture decisions and technical reviews",
      "Write comprehensive technical documentation",
      "Mentor junior developers and conduct code reviews",
    ],
    responsibilities_pt: [
      "Projetar e implementar serviços backend e APIs escaláveis",
      "Otimizar queries de banco de dados e modelos de dados para alta carga",
      "Implementar melhores práticas de segurança em ambiente financeiro regulado",
      "Participar de decisões de arquitetura e revisões técnicas",
      "Escrever documentação técnica abrangente",
      "Mentorar desenvolvedores juniores e conduzir revisões de código",
    ],
    niceToHave_en: [
      "Experience with financial systems or fintech domain",
      "Knowledge of message queues (Kafka, RabbitMQ)",
      "Contributions to open source projects",
    ],
    niceToHave_pt: [
      "Experiência com sistemas financeiros ou domínio fintech",
      "Conhecimento de filas de mensagens (Kafka, RabbitMQ)",
      "Contribuições para projetos open source",
    ],
  },

  // ── SALESFORCE DEVELOPER ──
  {
    id: "sf-dev-001",
    title_en: "Senior Salesforce Developer",
    title_pt: "Desenvolvedor Salesforce Sênior",
    type: "Full-time",
    location: "Remote",
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    skills: ["Salesforce", "Apex", "LWC", "SOQL", "Git", "English B2+"],
    description_en: "We are looking for an experienced Salesforce Developer to join a U.S. enterprise client. You will design, develop, and implement Salesforce solutions that drive business outcomes.",
    description_pt: "Estamos buscando um Desenvolvedor Salesforce experiente para um cliente enterprise nos EUA. Você irá projetar, desenvolver e implementar soluções Salesforce que geram resultados de negócio.",
    requirements_en: [
      "5+ years of Salesforce development experience",
      "Strong proficiency in Apex, Visualforce, and LWC",
      "Salesforce Platform Developer I or II certification",
      "Experience with Salesforce integrations (REST/SOAP APIs)",
      "Knowledge of SOQL and SOSL",
      "Experience with CI/CD tools (Salesforce DX, Git)",
      "Upper-intermediate to advanced English (B2+)",
    ],
    requirements_pt: [
      "5+ anos de experiência em desenvolvimento Salesforce",
      "Proficiência sólida em Apex, Visualforce e LWC",
      "Certificação Salesforce Platform Developer I ou II",
      "Experiência com integrações Salesforce (REST/SOAP APIs)",
      "Conhecimento de SOQL e SOSL",
      "Experiência com ferramentas CI/CD (Salesforce DX, Git)",
      "Inglês intermediário-avançado (B2+)",
    ],
    responsibilities_en: [
      "Design and develop custom Salesforce applications and integrations",
      "Write clean, testable Apex code following best practices",
      "Collaborate with U.S. stakeholders to translate requirements into solutions",
      "Perform code reviews and maintain code quality standards",
      "Participate in Agile ceremonies (sprint planning, standups, retrospectives)",
      "Troubleshoot and resolve Salesforce platform issues",
    ],
    responsibilities_pt: [
      "Projetar e desenvolver aplicações e integrações customizadas no Salesforce",
      "Escrever código Apex limpo e testável seguindo as melhores práticas",
      "Colaborar com stakeholders americanos para traduzir requisitos em soluções",
      "Realizar revisões de código e manter padrões de qualidade",
      "Participar de cerimônias Agile (planejamento de sprint, standups, retrospectivas)",
      "Diagnosticar e resolver problemas na plataforma Salesforce",
    ],
    niceToHave_en: [
      "Experience with Salesforce CPQ or Service Cloud",
      "Knowledge of JavaScript frameworks",
      "Experience with MuleSoft or other integration platforms",
    ],
    niceToHave_pt: [
      "Experiência com Salesforce CPQ ou Service Cloud",
      "Conhecimento de frameworks JavaScript",
      "Experiência com MuleSoft ou outras plataformas de integração",
    ],
  },

  // ── FRONTEND DEVELOPER ──
  {
    id: "fe-dev-001",
    title_en: "Senior Frontend Developer",
    title_pt: "Desenvolvedor Frontend Sênior",
    type: "Full-time",
    location: "Remote",
    postedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "English B2+"],
    description_en: "Join a fast-growing U.S. tech company as a Senior Frontend Developer. You will build high-performance web applications using React and Next.js.",
    description_pt: "Junte-se a uma empresa tech americana em crescimento como Desenvolvedor Frontend Sênior. Você irá construir aplicações web de alta performance usando React e Next.js.",
    requirements_en: [
      "4+ years of frontend development experience",
      "Expert-level React.js and Next.js",
      "Strong TypeScript skills",
      "Experience with state management (Redux, Zustand, or similar)",
      "Proficiency in CSS-in-JS or Tailwind CSS",
      "Understanding of web performance optimization",
      "Upper-intermediate English (B2+)",
    ],
    requirements_pt: [
      "4+ anos de experiência em desenvolvimento frontend",
      "Nível expert em React.js e Next.js",
      "Forte domínio de TypeScript",
      "Experiência com gerenciamento de estado (Redux, Zustand ou similar)",
      "Proficiência em CSS-in-JS ou Tailwind CSS",
      "Entendimento de otimização de performance web",
      "Inglês intermediário-avançado (B2+)",
    ],
    responsibilities_en: [
      "Build and maintain responsive, accessible web applications",
      "Implement pixel-perfect UI components from design specs",
      "Optimize application performance and Core Web Vitals",
      "Write unit and integration tests",
      "Collaborate with backend teams on API integration",
    ],
    responsibilities_pt: [
      "Construir e manter aplicações web responsivas e acessíveis",
      "Implementar componentes de UI pixel-perfect a partir de specs de design",
      "Otimizar performance da aplicação e Core Web Vitals",
      "Escrever testes unitários e de integração",
      "Colaborar com times de backend na integração de APIs",
    ],
    niceToHave_en: [
      "Experience with micro-frontend architecture",
      "Contributions to open-source projects",
    ],
    niceToHave_pt: [
      "Experiência com arquitetura micro-frontend",
      "Contribuições para projetos open-source",
    ],
  },

  // ── FULLSTACK DEVELOPER ──
  {
    id: "fs-dev-001",
    title_en: "Fullstack Developer",
    title_pt: "Desenvolvedor Fullstack",
    type: "Full-time",
    location: "Remote",
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "English B2+"],
    description_en: "Join a U.S. SaaS company as a Fullstack Developer. You will own features end-to-end, from database to UI.",
    description_pt: "Junte-se a uma empresa SaaS americana como Desenvolvedor Fullstack. Você será responsável por funcionalidades de ponta a ponta, do banco de dados à interface.",
    requirements_en: [
      "3+ years of fullstack development experience",
      "Proficiency in React or Next.js (frontend)",
      "Backend experience with Node.js, Python, or similar",
      "Experience with SQL and NoSQL databases",
      "Familiarity with cloud services (AWS or similar)",
      "Intermediate to advanced English (B2+)",
    ],
    requirements_pt: [
      "3+ anos de experiência em desenvolvimento fullstack",
      "Proficiência em React ou Next.js (frontend)",
      "Experiência backend com Node.js, Python ou similar",
      "Experiência com bancos de dados SQL e NoSQL",
      "Familiaridade com serviços cloud (AWS ou similar)",
      "Inglês intermediário-avançado (B2+)",
    ],
    responsibilities_en: [
      "Develop full-featured product functionality across the stack",
      "Participate in product planning and technical discovery",
      "Write clean, maintainable code with proper test coverage",
      "Contribute to CI/CD pipeline improvements",
    ],
    responsibilities_pt: [
      "Desenvolver funcionalidades completas do produto em todo o stack",
      "Participar de planejamento de produto e discovery técnico",
      "Escrever código limpo e manutenível com cobertura de testes adequada",
      "Contribuir para melhorias no pipeline de CI/CD",
    ],
    niceToHave_en: [
      "Experience with microservices architecture",
      "Knowledge of GraphQL",
    ],
    niceToHave_pt: [
      "Experiência com arquitetura de microsserviços",
      "Conhecimento de GraphQL",
    ],
  },
];

export function getActiveJobs(): Job[] {
  const now = new Date();
  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
  return JOBS_DATA.filter((job) => {
    const postedAt = new Date(job.postedAt);
    return now.getTime() - postedAt.getTime() < THIRTY_DAYS_MS;
  });
}

export function getDaysRemaining(postedAt: string): number {
  const posted = new Date(postedAt);
  const now = new Date();
  const elapsed = now.getTime() - posted.getTime();
  const remaining = 30 - Math.floor(elapsed / (24 * 60 * 60 * 1000));
  return Math.max(0, remaining);
}
