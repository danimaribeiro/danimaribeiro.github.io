export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  stats?: string;
}

export interface Talk {
  title: string;
  event: string;
  date: string;
  url: string;
  type: 'video' | 'conference' | 'workshop';
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
  talksAndVideos: {
    title: string;
    subtitle: string;
    channelLinkText: string;
    channelUrl: string;
    items: Talk[];
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
      badge: "⚡ Senior / Staff Backend Engineer (10+ Years)",
      title: "Hey, I'm Danimar Ribeiro",
      role: "Senior Backend Engineer specializing in Python, Go (GoLang), Cloud Architecture (AWS), and Enterprise Systems.",
      location: "📍 Based in Florianópolis, Brazil — Available for Global Remote Roles (US/EU).",
      description: [
        "With over a decade of software engineering experience, I specialize in architecting distributed systems, automating mission-critical business workflows, and solving extreme performance bottlenecks.",
        "At AdRoll, I redesigned core email marketing delivery services, leveraging GoLang's concurrency to boost throughput by 60x (from 5 to 300 emails per second). Prior to that, I left my Physics degree to lead the architectural development of Odoo ERP localization for the Brazilian market at Trust-Code, powering tax compliance for thousands of businesses."
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
          description: "Former Head of Development & lead architect for core Brazilian localization modules in Odoo ERP (NF-e, NFS-e, CT-e, SPED, banking automation, and PyTrustNFe). Powering compliance for thousands of organizations.",
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
        }
      ]
    },
    talksAndVideos: {
      title: "Talks, Tutorials & Mentorship",
      subtitle: "Empowering developers with architectural best practices in Python, Odoo development, and systems engineering.",
      channelLinkText: "Explore tutorials on YouTube ➔",
      channelUrl: "https://www.youtube.com/@DanimarRibeiro",
      items: [
        {
          title: "Workshop: Advanced Odoo Development & Architecture",
          event: "Odoo Brasil Community Workshop",
          date: "Open Technical Resource",
          url: "https://github.com/danimaribeiro/workshop-odoo-development",
          type: "workshop"
        },
        {
          title: "Building Electronic Fiscal Document Engines in Python",
          event: "Python & ERP Community Sessions",
          date: "Technical Deep-Dive",
          url: "https://github.com/danimaribeiro/odoo-brazil-eletronic-documents",
          type: "video"
        }
      ]
    },
    resumePage: {
      title: "Danimar Ribeiro",
      subtitle: "Senior Backend Engineer | Python • Go • AWS Cloud • Distributed Systems & ERP Architecture",
      downloadText: "Download Resume (.PDF)",
      pdfName: "resume-en.pdf",
      placeholderNotice: "Executive Profile: 10+ years in backend software engineering across global cloud environments (AWS ECS, Postgres) and highly concurrent data processing (Go, Python). Strong foundation in analytical problem-solving with 3 years of academic Physics.",
      skillsTitle: "Core Competency Matrix",
      skills: [
        {
          category: "Languages",
          items: ["Python", "Go (GoLang)", "C#", "JavaScript / React", "SQL"]
        },
        {
          category: "Cloud, DevOps & Infrastructure",
          items: ["AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis)", "Terraform", "Docker & Containerization", "Ansible", "CI/CD Pipelines"]
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
          role: "Software Engineer (Backend)",
          company: "AdRoll (BairesDev / Remote)",
          period: "Sep 2019 — Jun 2026",
          location: "Remote",
          highlights: [
            "Spearheaded backend Python development focused on enterprise email marketing automation, deliverability, and system performance.",
            "Engineered architectural optimizations in email dispatch infrastructure, achieving a 60x throughput increase (from 5 emails/second to ~300 emails/second).",
            "Leveraged GoLang's high concurrency and goroutines to architect a new high-performance module, streamlining massive background data processing and real-time email campaign scheduling.",
            "Designed resilient, cloud-native environments using AWS (ECS, EC2, Postgres), Terraform, and React for external ad network integrations."
          ]
        },
        {
          role: "Lead Software Engineer",
          company: "Trustcode",
          period: "Aug 2015 — Sep 2019",
          location: "Brazil",
          highlights: [
            "Led the software engineering area, developing the core Python modules for the official localization of Odoo ERP in Brazil.",
            "Architected Python packages for automated electronic invoice transmission, tax calculations, and bank ledger integrations.",
            "Built scalable customer portal backends, managed projects, reviewed code, and conducted technical training sessions for the software ecosystem."
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
          year: "Left to found and lead Trustcode"
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Open to discussing Senior/Staff Backend roles, system architectures, and cloud scaling opportunities.",
      email: "danimaribeiro@gmail.com",
      github: "https://github.com/danimaribeiro",
      linkedin: "https://www.linkedin.com/in/danimaribeiro",
      youtube: "https://www.youtube.com/@DanimarRibeiro",
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
      badge: "⚡ Senior / Staff Backend Engineer (+10 Anos)",
      title: "Olá, sou Danimar Ribeiro",
      role: "Engenheiro Sênior de Backend com especialidade em Python, Go, Arquitetura Cloud (AWS) e Sistemas Corporativos.",
      location: "📍 Baseado em Florianópolis, Brasil — Disponível para vagas remotas globais (EUA/Europa).",
      description: [
        "Com mais de uma década de experiência em engenharia de software, sou especialista em arquitetar sistemas distribuídos, automatizar fluxos críticos e resolver gargalos extremos de performance.",
        "Na AdRoll, reconstruí os serviços core de entrega de e-mail usando alta concorrência em GoLang, elevando o throughput em 60x (de 5 para 300 envios por segundo). Antes disso, deixei minha graduação em Física para liderar a arquitetura técnica da localização fiscal do Odoo ERP no Brasil pela Trust-Code, viabilizando operações de milhares de empresas."
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
          description: "Ex-Head de Desenvolvimento e arquiteto dos principais módulos open-source da localização Odoo no Brasil (NF-e, NFS-e, CT-e, SPED, integração bancária e PyTrustNFe).",
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
          stats: "Pesquisa & Estudo"
        }
      ]
    },
    talksAndVideos: {
      title: "Palestras, Tutoriais & Mentorias",
      subtitle: "Capacitação da comunidade em arquiteturas Python escaláveis e melhores práticas no Odoo.",
      channelLinkText: "Assistir vídeos no YouTube ➔",
      channelUrl: "https://www.youtube.com/@DanimarRibeiro",
      items: [
        {
          title: "Workshop: Desenvolvimento Avançado e Arquitetura no Odoo",
          event: "Odoo Brasil Community Workshop",
          date: "Capacitação Técnica",
          url: "https://github.com/danimaribeiro/workshop-odoo-development",
          type: "workshop"
        },
        {
          title: "Construindo Motores para Documentos Fiscais Eletrônicos em Python",
          event: "Sessões da Comunidade Python & ERP",
          date: "Apresentação Técnica",
          url: "https://github.com/danimaribeiro/odoo-brazil-eletronic-documents",
          type: "video"
        }
      ]
    },
    resumePage: {
      title: "Danimar Ribeiro",
      subtitle: "Engenheiro Sênior de Backend | Python • Go • Nuvem AWS • Sistemas Corporativos",
      downloadText: "Baixar Currículo (.PDF)",
      pdfName: "resume-pt.pdf",
      placeholderNotice: "Perfil Executivo: +10 anos em engenharia de backend voltada para ambientes cloud globais (AWS ECS, Postgres) e processamento massivo de dados (Go, Python). Forte base em resolução analítica forjada por 3 anos de graduação em Física.",
      skillsTitle: "Matriz de Competências",
      skills: [
        {
          category: "Linguagens",
          items: ["Python", "Go (GoLang)", "C#", "JavaScript / React", "SQL"]
        },
        {
          category: "Nuvem, Infraestrutura & DevOps",
          items: ["AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis)", "Terraform", "Docker", "Ansible", "Pipelines de CI/CD"]
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
          role: "Engenheiro de Software (Backend)",
          company: "AdRoll (BairesDev / Remoto)",
          period: "Set 2019 — Jun 2026",
          location: "Remoto",
          highlights: [
            "Liderança no desenvolvimento backend em Python focado na automação de e-mails, entregabilidade e performance extrema do sistema.",
            "Redesenho da infraestrutura de disparo, elevando o throughput de envio em 60x — saltando de 5 e-mails/segundo para ~300 e-mails/segundo.",
            "Tirei proveito da altíssima capacidade de concorrência e goroutines da linguagem Go para criar um novo módulo, otimizando o processamento em massa de dados em background e agendamento de campanhas.",
            "Gestão de ambientes cloud-native resilientes na AWS (ECS, EC2, Postgres), IaC com Terraform e interfaces via React."
          ]
        },
        {
          role: "Engenheiro Líder de Software",
          company: "Trustcode",
          period: "Ago 2015 — Set 2019",
          location: "Brasil",
          highlights: [
            "Liderei a área de desenvolvimento, desenhando os módulos Python core para a localização oficial do Odoo ERP no Brasil.",
            "Arquitetei pacotes para transmissão automatizada de documentos fiscais eletrônicos (NF-e/NFS-e), cálculo de impostos e integração de conciliações bancárias.",
            "Construção de portais de cliente, gerenciamento de projetos, revisões de código e condução de treinamentos técnicos para o ecossistema."
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
      linkedin: "https://www.linkedin.com/in/danimaribeiro",
      youtube: "https://www.youtube.com/@DanimarRibeiro",
      copyright: "© Danimar Ribeiro. Desenvolvido com Tailwind CSS v4, React e zero overhead."
    }
  }
};
