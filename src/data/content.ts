export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  stats?: string;
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
  icon: 'Zap' | 'Code' | 'ShieldCheck' | 'Database';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Content {
  nav: {
    home: string;
    resume: string;
    langToggle: string;
  };
  hero: {
    badge: string;
    title: string;
    role: string;
    location: string;
    description: string[];
    ctaCollaborate: string;
    ctaResume: string;
  };
  projects: {
    title: string;
    subtitle: string;
    items: Project[];
  };
  engineeringPrinciples: {
    title: string;
    subtitle: string;
    items: EngineeringPrinciple[];
  };
  resumePage: {
    title: string;
    subtitle: string;
    downloadText: string;
    pdfName: string;
    placeholderNotice: string;
    skillsTitle: string;
    skills: SkillGroup[];
    experienceTitle: string;
    experiences: Experience[];
    educationTitle: string;
    education: { degree: string; institution: string; year: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    email: string;
    github: string;
    linkedin: string;
    youtube: string;
    copyright: string;
  };
}

export const contentData: Record<'en' | 'pt', Content> = {
  en: {
    nav: {
      home: "Home",
      resume: "For HRs / Resume",
      langToggle: "PT-BR",
    },
    hero: {
      badge: "⚡ Senior / Staff Backend Engineer (15+ Years)",
      title: "Hey, I'm Danimar Ribeiro",
      role: "Senior Backend Engineer specializing in Python, Cloud Architecture (AWS), and Enterprise Systems.",
      location: "📍 Based in Florianópolis, Brazil — Available for Global Remote Roles (US/EU).",
      description: [
        "With over 15 years of software engineering experience, I specialize in architecting distributed backend systems, automating mission-critical business workflows, and solving extreme performance bottlenecks.",
        "At AdRoll, I redesigned core email marketing delivery services in Python, boosting throughput from 5 to 300 emails per second. Prior to that, I left my Physics degree to Co-Found Trustcode, serving as CTO to scale the company to 50+ enterprise clients and leading the architectural development of Odoo ERP localization for Brazil. Currently, I am open to new opportunities while actively researching and building database internals in Rust and Zig."
      ],
      ctaCollaborate: "Get in Touch",
      ctaResume: "View Complete CV & Skills",
    },
    projects: {
      title: "Featured Engineering",
      subtitle: "Enterprise open-source architectures and current personal system explorations.",
      items: [
        {
          title: "Odoo Brasil & Trust-Code Ecosystem",
          subtitle: "Enterprise Brazilian Fiscal & Financial Modules",
          description: "Co-Founder and CTO leading the architectural development of core Brazilian localization modules in Odoo ERP (NF-e, NFS-e, CT-e, SPED, banking automation, and PyTrustNFe). Powering compliance for thousands of organizations.",
          tags: ["Python", "Odoo ERP", "Distributed Architecture", "PostgreSQL", "Docker"],
          githubUrl: "https://github.com/Trust-Code",
          demoUrl: "https://github.com/danimaribeiro/PyTrustNFe",
          stats: "Enterprise Scale • 1000+ PRs"
        },
        {
          title: "Droid",
          subtitle: "Database Internals Multi-Language Playground",
          description: "A current personal exploration and educational side-project modeling a relational database engine from scratch to deepen my understanding of low-level systems (C, C++, Rust, Zig).",
          tags: ["Rust", "Zig", "C++", "C", "Database Internals", "B-Tree Storage"],
          githubUrl: "https://github.com/danimaribeiro/droid",
          stats: "Current R&D Focus"
        },
        {
          title: "Willy Finance",
          subtitle: "AI-Powered Personal Finance & Investment Tracker",
          description: "A comprehensive SaaS platform built to track personal finances. Features an integrated AI Agent built with LangGraph and MCP (Model Context Protocol), alongside LLM-powered background jobs for automated bank statement categorization.",
          tags: ["SaaS", "AI/LLM", "LangGraph", "MCP", "FinTech", "Full-Stack"],
          demoUrl: "https://www.willyfinance.com",
          stats: "Live Platform"
        },
        {
          title: "Monge Docs",
          subtitle: "AI-Powered Chrome Extension",
          description: "An AI-powered browser extension published on the Chrome Web Store, designed to automate and streamline documentation workflows for developers.",
          tags: ["AI/LLM", "Browser Extension", "TypeScript", "Productivity"],
          demoUrl: "https://chromewebstore.google.com/detail/monge-docs-ai-documentati/ncolfoambfnfgiopbmfophmjejaaalom",
          stats: "Published Extension"
        }
      ]
    },
    engineeringPrinciples: {
      title: "Engineering Philosophy",
      subtitle: "Core principles that guide my architectural decisions and system designs.",
      items: [
        {
          title: "Data-Driven Performance",
          description: "I believe in measuring first. Bottlenecks should be solved by profiling and understanding data flow, not by blindly scaling up infrastructure.",
          icon: "Zap"
        },
        {
          title: "Database-First Architecture",
          description: "Data outlives code. I specialize in leveraging the full power of PostgreSQL—from complex query optimization to transaction isolation—to build solid foundations before writing application logic.",
          icon: "Database"
        },
        {
          title: "Resilient by Design",
          description: "Systems will fail. Designing for graceful degradation, automated recovery, and robust monitoring is non-negotiable for enterprise software.",
          icon: "ShieldCheck"
        }
      ]
    },
    resumePage: {
      title: "Danimar Ribeiro",
      subtitle: "Senior Backend Engineer | Python • AWS Cloud • Distributed Systems & ERP Architecture",
      downloadText: "Download Resume (.PDF)",
      pdfName: "resume-en.pdf",
      placeholderNotice: "Executive Profile: 15+ years in backend software engineering across global cloud environments (AWS ECS, Postgres) and highly concurrent data processing. Former CTO & Co-Founder scaling enterprise ERP systems to 50+ B2B clients. Strong foundation in analytical problem-solving with 3 years of academic Physics.",
      skillsTitle: "Core Competency Matrix",
      skills: [
        {
          category: "Languages",
          items: ["Python", "Go (GoLang)", "C#", "Rust & Zig (Systems Interest)", "SQL"]
        },
        {
          category: "Cloud, DevOps & Infrastructure",
          items: ["AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis)", "Terraform", "Docker", "Ansible", "CI/CD & Service Lifecycle Ownership"]
        },
        {
          category: "Backend Frameworks & Architectures",
          items: ["Flask & FastMCP", "Odoo ERP Architecture", "ASP.NET MVC / Winforms / WPF", "RESTful APIs", "High-Throughput Background Processing", "Microservices"]
        },
        {
          category: "Databases & Data Processing",
          items: ["PostgreSQL", "Oracle & MySQL", "DynamoDB"]
        }
      ],
      experienceTitle: "Professional Work Experience",
      experiences: [
        {
          role: "Senior Software Engineer (Backend)",
          company: "AdRoll (BairesDev / Remote)",
          period: "Sep 2019 — Jun 2026",
          location: "Remote",
          highlights: [
            "Spearheaded backend Python development focused on enterprise email marketing automation, deliverability, and system performance.",
            "Engineered architectural optimizations in email dispatch infrastructure, achieving a 60x throughput increase (from 5 emails/second to ~300 emails/second).",
            "Developed a high-performance background module in Go over a 10-month period to handle massive data scheduling, while maintaining a strong core focus on Python backend engineering.",
            "Owned the full service lifecycle within a DevOps culture, architecting, deploying, and monitoring resilient cloud-native environments using AWS (ECS, EC2, Postgres) and Terraform."
          ]
        },
        {
          role: "Co-Founder & CTO",
          company: "Trustcode",
          period: "Aug 2015 — Sep 2019",
          location: "Brazil",
          highlights: [
            "Co-founded the company and scaled operations to 50+ enterprise B2B clients, managing an engineering team of 8 developers within a 12-person organization.",
            "Directed the architectural localization of Odoo ERP in Brazil, adapting the software for complex national compliance and custom client implementations.",
            "Architected complex tax calculation engines (ICMS, IPI, PIS, COFINS) and implemented SPED fiscal reporting modules.",
            "Created 'PyTrustNFe', a standalone Python package for automated XML generation, signing, and transmission of electronic fiscal documents (NF-e, NFS-e, CT-e, MDF-e).",
            "Developed banking integration modules supporting CNAB 240/400 standards across multiple banks for automated reconciliation and payments."
          ]
        },
        {
          role: "Software Engineer",
          company: "Infoger",
          period: "Nov 2013 — Jul 2015",
          location: "Brazil",
          highlights: [
            "Developed and maintained the company's ERP software, systematically removing legacy technical complexity and fixing critical bugs.",
            "Engineered complex system modifications to guarantee compliance with evolving corporate regulatory laws.",
            "Created a new customer portal website leveraging ASP.NET MVC and PostgreSQL."
          ]
        },
        {
          role: "Software Engineer",
          company: "Bravi Software",
          period: "Jan 2013 — Nov 2013",
          location: "Brazil",
          highlights: [
            "Collaborated with cross-border engineering teams distributed across two countries on C# enterprise platforms.",
            "Built RESTful services for querying complex datasets including student enrollments, course catalogs, and academic timetables.",
            "Utilized C#, Webforms, Winforms, Windows Presentation Foundation (WPF), and Oracle databases."
          ]
        },
        {
          role: "Software Engineer",
          company: "Interfoc",
          period: "Jan 2011 — Dec 2012",
          location: "Brazil",
          highlights: [
            "Participated from foundational inception in the full-stack architecture of a comprehensive commercial ERP software suite.",
            "Owned the backend logic for accounting, accounts payable/receivable, and automated tax calculations using VB.Net, C#, Webforms, and PostgreSQL."
          ]
        },
        {
          role: "Software Engineer",
          company: "Zyoncore",
          period: "Jan 2008 — May 2010",
          location: "Brazil",
          highlights: [
            "Developed desktop and server applications in VB.Net and C# for image uploading, resizing, and directory organization."
          ]
        }
      ],
      educationTitle: "Education",
      education: [
        {
          degree: "Postgraduate's Degree in Databases",
          institution: "Federal University",
          year: "2011"
        },
        {
          degree: "Bachelor's Degree in Information Systems",
          institution: "Federal University",
          year: "2010"
        },
        {
          degree: "Physics Studies (3 years completed)",
          institution: "Federal University",
          year: "Left to found and scale Trustcode"
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Open to discussing Senior/Staff Backend roles, system architectures, and cloud scaling opportunities.",
      email: "danimaribeiro@gmail.com",
      github: "https://github.com/danimaribeiro",
      linkedin: "https://www.linkedin.com/in/danimar-ribeiro-7bb75030/?locale=en-US",
      youtube: "https://www.youtube.com/@danimaribeiro",
      copyright: "© Danimar Ribeiro. Engineered with Tailwind v4, React & zero overhead."
    }
  },
  pt: {
    nav: {
      home: "Início",
      resume: "Currículo / Experiência",
      langToggle: "EN",
    },
    hero: {
      badge: "⚡ Senior / Staff Backend Engineer (+15 Anos)",
      title: "Olá, sou Danimar Ribeiro",
      role: "Engenheiro Sênior de Backend com especialidade em Python, Arquitetura Cloud (AWS) e Sistemas Corporativos.",
      location: "📍 Baseado em Florianópolis, Brasil — Disponível para vagas remotas globais (EUA/Europa).",
      description: [
        "Com mais de 15 anos de experiência em engenharia de software, sou especialista em arquitetar sistemas distribuídos, automatizar fluxos críticos e resolver gargalos extremos de performance.",
        "Na AdRoll, reconstruí os serviços core de entrega de e-mail em Python, elevando o throughput de 5 para 300 envios por segundo. Antes disso, deixei a graduação em Física para Co-Fundar a Trustcode, atuando como CTO escalando a empresa para mais de 50 clientes corporativos e desenhando a arquitetura de localização do Odoo ERP no Brasil. Atualmente estou aberto a novas oportunidades enquanto construo e pesquiso arquiteturas de Bancos de Dados em Rust e Zig."
      ],
      ctaCollaborate: "Entrar em Contato",
      ctaResume: "Ver Experiência & CV",
    },
    projects: {
      title: "Projetos em Destaque",
      subtitle: "Ecossistemas open-source corporativos e explorações educacionais em baixo nível.",
      items: [
        {
          title: "Odoo Brasil & Ecossistema Trust-Code",
          subtitle: "Módulos Corporativos para Automação Fiscal & Financeira",
          description: "Co-Fundador e CTO responsável por liderar o desenvolvimento dos principais módulos open-source da localização Odoo no Brasil (NF-e, NFS-e, CT-e, SPED, integração bancária e PyTrustNFe).",
          tags: ["Python", "Odoo ERP", "Distributed Architecture", "PostgreSQL", "Docker"],
          githubUrl: "https://github.com/Trust-Code",
          demoUrl: "https://github.com/danimaribeiro/PyTrustNFe",
          stats: "Escala Empresarial • +1000 PRs"
        },
        {
          title: "Droid",
          subtitle: "Playground Educacional de Bancos de Dados",
          description: "Projeto de pesquisa pessoal recente para estudo profundo de sistemas de baixo nível, modelando uma engine relacional (B-Trees, Lexers) do zero em C, C++, Rust e Zig.",
          tags: ["Rust", "Zig", "C++", "C", "Database Internals"],
          githubUrl: "https://github.com/danimaribeiro/droid",
          stats: "Pesquisa & Estudo Atual"
        },
        {
          title: "Willy Finance",
          subtitle: "Plataforma de Finanças & Investimentos com IA",
          description: "SaaS de controle financeiro inteligente. Conta com um Agente de IA integrado construído usando LangGraph e MCP (Model Context Protocol), além de background jobs com LLMs para categorização automática de extratos bancários.",
          tags: ["SaaS", "AI/LLM", "LangGraph", "MCP", "FinTech", "Full-Stack"],
          demoUrl: "https://www.willyfinance.com/pt/",
          stats: "Em Produção"
        },
        {
          title: "Monge Docs",
          subtitle: "Extensão do Chrome com IA",
          description: "Extensão para o Google Chrome com Inteligência Artificial integrada e publicada na Web Store, focada em automatizar e otimizar fluxos de documentação para desenvolvedores.",
          tags: ["AI/LLM", "Chrome Extension", "TypeScript", "Produtividade"],
          demoUrl: "https://chromewebstore.google.com/detail/monge-docs-ai-documentati/ncolfoambfnfgiopbmfophmjejaaalom",
          stats: "Publicada na Store"
        }
      ]
    },
    engineeringPrinciples: {
      title: "Filosofia de Engenharia",
      subtitle: "Princípios fundamentais que guiam minhas decisões de arquitetura e design de sistemas.",
      items: [
        {
          title: "Performance Guiada por Dados",
          description: "Acredito em medir antes de otimizar. Gargalos devem ser resolvidos perfilando o fluxo de dados, e não apenas escalando infraestrutura às cegas.",
          icon: "Zap"
        },
        {
          title: "Arquitetura Database-First",
          description: "Os dados sobrevivem ao código. Sou especialista em extrair o máximo do PostgreSQL — de otimizações de queries a isolamento de transações — criando bases sólidas antes mesmo de escrever regras de negócio.",
          icon: "Database"
        },
        {
          title: "Resiliência por Design",
          description: "Sistemas falham. Projetar para degradação graciosa, recuperação automatizada e monitoramento robusto é inegociável em software corporativo.",
          icon: "ShieldCheck"
        }
      ]
    },
    resumePage: {
      title: "Danimar Ribeiro",
      subtitle: "Engenheiro Sênior de Backend | Python • Nuvem AWS • Sistemas Corporativos & ERP",
      downloadText: "Baixar Currículo (.PDF)",
      pdfName: "resume-pt.pdf",
      placeholderNotice: "Perfil Executivo: +15 anos em engenharia de backend voltada para ambientes cloud globais (AWS ECS, Postgres) e alta escalabilidade. Ex-CTO e Co-Fundador que escalou ERPs para +50 clientes corporativos. Forte base analítica forjada por 3 anos de graduação em Física.",
      skillsTitle: "Matriz de Competências",
      skills: [
        {
          category: "Linguagens",
          items: ["Python", "Go (GoLang)", "C#", "Rust & Zig (Interesse em Sistemas)", "SQL"]
        },
        {
          category: "Nuvem, Infraestrutura & DevOps",
          items: ["AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis)", "Terraform", "Docker", "Ansible", "DevOps Lifecycle"]
        },
        {
          category: "Frameworks Backend & Arquiteturas",
          items: ["Flask & FastMCP", "Arquitetura Odoo", "ASP.NET MVC / Winforms / WPF", "APIs RESTful", "Processamento Assíncrono em Massa", "Microsserviços"]
        },
        {
          category: "Bancos de Dados & Dados",
          items: ["PostgreSQL", "Oracle & MySQL", "DynamoDB"]
        }
      ],
      experienceTitle: "Experiência Profissional",
      experiences: [
        {
          role: "Engenheiro Sênior de Software (Backend)",
          company: "AdRoll (BairesDev / Remoto)",
          period: "Set 2019 — Jun 2026",
          location: "Remoto",
          highlights: [
            "Liderança no desenvolvimento backend em Python focado na automação de e-mails corporativos, entregabilidade e performance extrema do sistema.",
            "Redesenho da infraestrutura de disparo, elevando o throughput de envio em 60x — saltando de 5 e-mails/segundo para ~300 e-mails/segundo.",
            "Desenvolvi um módulo de alta performance em Go durante 10 meses para otimizar agendamentos massivos em background, mantendo o foco central na engenharia backend em Python.",
            "Atuação ponta-a-ponta no ciclo de vida do serviço (cultura DevOps), sendo responsável pela arquitetura, deploy e monitoramento de ambientes cloud na AWS (ECS, EC2, Postgres) utilizando Terraform."
          ]
        },
        {
          role: "Co-Fundador & CTO",
          company: "Trustcode",
          period: "Ago 2015 — Set 2019",
          location: "Brasil",
          highlights: [
            "Co-fundei a empresa e escalei a operação técnica e comercial para mais de 50 clientes corporativos B2B, gerenciando uma equipe de 12 funcionários (sendo 8 desenvolvedores).",
            "Direcionei a arquitetura oficial de localização do Odoo ERP no Brasil, adaptando o software para as exigências fiscais e customizações complexas de clientes.",
            "Arquitetei motores complexos de cálculo de impostos brasileiros (ICMS, IPI, PIS, COFINS) e relatórios fiscais do SPED (EFD, ECD).",
            "Criei o 'PyTrustNFe', um pacote Python open-source focado na assinatura e transmissão automatizada de documentos fiscais eletrônicos (NF-e, NFS-e, CT-e, MDF-e).",
            "Desenvolvi módulos avançados de integração bancária (padrão CNAB 240/400) para múltiplos bancos, automatizando conciliações e pagamentos."
          ]
        },
        {
          role: "Engenheiro de Software",
          company: "Infoger",
          period: "Nov 2013 — Jul 2015",
          location: "Brasil",
          highlights: [
            "Desenvolvimento e evolução do software ERP da empresa, reduzindo complexidade acidental e solucionando bugs críticos.",
            "Implementação de modificações arquiteturais complexas para adequação às evoluções nas leis contábeis vigentes.",
            "Criação de portal web para atendimento a clientes utilizando ASP.NET MVC e PostgreSQL."
          ]
        },
        {
          role: "Engenheiro de Software",
          company: "Bravi Software",
          period: "Jan 2013 — Nov 2013",
          location: "Equipe Distribuída (Brasil/Exterior)",
          highlights: [
            "Desenvolvimento C# integrado com equipes distribuídas por dois países em plataformas corporativas.",
            "Construção de serviços RESTful para consulta de bases de dados complexas, incluindo matrículas, cursos e grades curriculares.",
            "Utilização de C#, Webforms, Winforms, WPF e bancos de dados Oracle."
          ]
        },
        {
          role: "Engenheiro de Software (Full-Stack ERP)",
          company: "Interfoc",
          period: "Jan 2011 — Dez 2012",
          location: "Brasil",
          highlights: [
            "Participação desde a fundação no desenvolvimento de uma suíte ERP comercial completa.",
            "Responsável pela lógica de backend da área contábil, contas a pagar/receber e motor de cálculos tributários utilizando VB.Net, C#, Webforms e PostgreSQL."
          ]
        },
        {
          role: "Engenheiro de Software",
          company: "Zyoncore",
          period: "Jan 2008 — Mai 2010",
          location: "Brasil",
          highlights: [
            "Desenvolvimento desktop e servidor em VB.Net e C# para upload em massa, redimensionamento de imagens e automação de organização de diretórios."
          ]
        }
      ],
      educationTitle: "Educação",
      education: [
        {
          degree: "Pós-Graduação em Bancos de Dados",
          institution: "Universidade Federal",
          year: "2011"
        },
        {
          degree: "Bacharelado em Sistemas de Informação",
          institution: "Universidade Federal",
          year: "2010"
        },
        {
          degree: "Estudos em Física (3 anos concluídos)",
          institution: "Universidade Federal",
          year: "Transferido para fundar a Trustcode"
        }
      ]
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Aberto para discutir vagas de Senior/Staff Backend, arquitetura de sistemas globais e escalabilidade.",
      email: "danimaribeiro@gmail.com",
      github: "https://github.com/danimaribeiro",
      linkedin: "https://www.linkedin.com/in/danimar-ribeiro-7bb75030/",
      youtube: "https://www.youtube.com/@danimaribeiro",
      copyright: "© Danimar Ribeiro. Desenvolvido com Tailwind CSS v4, React e zero overhead."
    }
  }
};
