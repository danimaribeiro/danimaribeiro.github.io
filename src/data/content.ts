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
      badge: "⚡ Systems & Business Software Architect",
      title: "Hey, I'm Danimar Ribeiro",
      role: "Database Internals nerd, Systems Engineer (Rust, Zig, C++), and seasoned Python/Odoo Enterprise Architect.",
      location: "📍 Based in Florianópolis, Brazil — working globally.",
      description: [
        "I thrive at the intersection of low-level system performance and complex distributed business software. By night, I build database engines, SQL interpreters, and machine learning models from scratch. By day, I architect enterprise fiscal and accounting integrations that handle millions of transactions across Brazil.",
        "Whether it's writing memory-efficient B-Tree storage layers in Zig and Rust, or orchestrating Python microservices and Odoo architectures at massive scale, I build open, fast, and resilient software."
      ],
      ctaCollaborate: "Let's Collaborate",
      ctaResume: "View Tech Skills & CV",
    },
    projects: {
      title: "Featured Engineering",
      subtitle: "High-performance systems, compilers, database playgrounds, and production ERP modules.",
      items: [
        {
          title: "Droid",
          subtitle: "Database Internals Multi-Language Playground",
          description: "A complete step-by-step tutorial pipeline implementing database internals from scratch (REPL, SQL Lexer & Parser, Row Serialization, Pager & Buffer Pool, B-Tree nodes, and query execution) simultaneously in C, C++, Rust, and Zig.",
          tags: ["Rust", "Zig", "C++", "C", "Database Internals", "Compilers"],
          githubUrl: "https://github.com/danimaribeiro/droid",
          stats: "Open Source Tutorial & Playground"
        },
        {
          title: "Zqlite",
          subtitle: "SQLite Re-imagined with Zig",
          description: "An experimental, zero-overhead relational database engine modeled after SQLite, written entirely in modern Zig. Explores custom memory allocators, fast B-Tree indexing, and lexical query evaluation.",
          tags: ["Zig", "Database Engine", "Systems", "SQL"],
          githubUrl: "https://github.com/danimaribeiro/zqlite",
          stats: "High Performance Storage"
        },
        {
          title: "NeetCode-GPT",
          subtitle: "Generative Pre-trained Transformer from Scratch",
          description: "A functional decoder-only Transformers neural network built entirely from scratch in Python, implementing self-attention mechanisms, multi-head parallel processing, and token embeddings.",
          tags: ["Python", "Machine Learning", "Transformers", "Neural Networks"],
          githubUrl: "https://github.com/danimaribeiro/neetcode-gpt",
          stats: "Deep Learning Internals"
        },
        {
          title: "Odoo Brasil & Trust-Code Ecosystem",
          subtitle: "Brazilian Fiscal & Enterprise Architecture",
          description: "Core contributor and architect for leading open-source Odoo modules in Brazil (NF-e, NFS-e, CT-e, SPED, CNAB240 banking automation, PyTrustNFe, and real-time bank APIs). Powering accounting compliance for thousands of companies.",
          tags: ["Python", "Odoo ERP", "Distributed Systems", "Financial APIs", "PostgreSQL"],
          githubUrl: "https://github.com/Trust-Code",
          demoUrl: "https://github.com/danimaribeiro/PyTrustNFe",
          stats: "Enterprise Scale • 1000+ PRs"
        }
      ]
    },
    talksAndVideos: {
      title: "Talks & Community Content",
      subtitle: "Sharing knowledge on software development, Odoo architectures, and Python mastery.",
      channelLinkText: "Explore all videos on YouTube ➔",
      channelUrl: "https://www.youtube.com/@DanimarRibeiro",
      items: [
        {
          title: "Workshop: Advanced Odoo Development & Architecture",
          event: "Odoo Brasil Community Workshop",
          date: "Open Educational Resource",
          url: "https://github.com/danimaribeiro/workshop-odoo-development",
          type: "workshop"
        },
        {
          title: "Building Brazilian Electronic Document Engines in Python",
          event: "Python & ERP Open Sessions",
          date: "Technical Walkthrough",
          url: "https://github.com/danimaribeiro/odoo-brazil-eletronic-documents",
          type: "video"
        }
      ]
    },
    resumePage: {
      title: "Danimar Ribeiro",
      subtitle: "Systems Engineer & Senior Business Software Architect | Python • Rust • Zig • Odoo",
      downloadText: "Download Resume (.PDF)",
      pdfName: "resume-en.pdf",
      placeholderNotice: "📌 Notice: This section contains well-structured architectural placeholders ready to be tailored with detailed specific responsibilities from your finalized PDF CV.",
      skillsTitle: "Technical Skills Matrix",
      skills: [
        {
          category: "Systems Engineering & Low-Level",
          items: ["Rust", "Zig", "C++", "C", "Go", "Database Internals", "B-Tree Trees", "Memory Management", "Parsers & Lexers", "Linux Drivers"]
        },
        {
          category: "Backend & Distributed Software",
          items: ["Python", "PostgreSQL Internals & Performance", "REST APIs", "FastAPI", "Django", "AsyncIO", "Microservices Architecture"]
        },
        {
          category: "Enterprise ERP & Fiscal Ecosystem",
          items: ["Odoo Architecture (v8 to v17+)", "Brazilian Tax Compliance (NF-e, NFS-e, CT-e, SPED)", "Financial Bank APIs (Inter, Iugu, Stripe)", "CNAB240 / Boleto Automation", "PyTrustNFe", "Jasper Reports"]
        },
        {
          category: "DevOps, Tooling & Workflow",
          items: ["Neovim & Customized Dotfiles", "Docker & Containerization", "Git & GitHub Actions", "Vim / Tmux / Zsh", "CI/CD Pipelines", "Playwright & Automated Testing"]
        }
      ],
      experienceTitle: "Professional Experience (Structured Placeholders)",
      experiences: [
        {
          role: "Senior Enterprise Software Architect & Open Source Leader",
          company: "Trust-Code & Odoo Brasil Ecosystem",
          period: "2015 — Present",
          location: "Florianópolis, Brazil / Hybrid",
          highlights: [
            "[Placeholder] Led the architectural design and open-source development of standard Brazilian electronic fiscal modules (NF-e, NFS-e, SPED) for Odoo ERP.",
            "[Placeholder] Designed high-throughput integrations for banking automation, payment gateways (Iugu, Inter Bank), and real-time electronic tax validation.",
            "[Placeholder] Mentored teams and produced community technical workshops on robust Odoo and Python engineering practices."
          ]
        },
        {
          role: "Senior Backend & Systems Consultant",
          company: "Enterprise Projects & Open Source Initiatives",
          period: "2018 — Present",
          location: "Global & US Markets (Remote)",
          highlights: [
            "[Placeholder] Engineered scalable Python & PostgreSQL backends capable of processing complex financial rules and accounting ledger updates in real time.",
            "[Placeholder] Developed database engineering playgrounds and experimental engines (Droid in Rust/Zig/C++, Zqlite) exploring modern storage formats and B-Tree indexing.",
            "[Placeholder] Collaborated on international tech projects optimizing query execution, data pipelines (Baker), and API integrations."
          ]
        }
      ],
      educationTitle: "Education & Specializations",
      education: [
        {
          degree: "Computer Science & Computational Systems (Specialization & Research)",
          institution: "University / Educational Placeholder",
          year: "Ongoing Continuous Professional & Systems Mastery"
        }
      ]
    },
    contact: {
      title: "Drop Me a Note",
      subtitle: "Interested in collaboration, systems engineering discussions, or consulting? Reach out directly!",
      email: "danimaribeiro@gmail.com",
      github: "https://github.com/danimaribeiro",
      linkedin: "https://www.linkedin.com/in/danimaribeiro",
      youtube: "https://www.youtube.com/@DanimarRibeiro",
      copyright: "© Danimar Ribeiro. Designed with modern visual excellence & zero overhead."
    }
  },
  pt: {
    nav: {
      home: "Início",
      resume: "Currículo / Para HRs",
      langToggle: "EN",
    },
    hero: {
      badge: "⚡ Engenheiro de Sistemas & Arquiteto de Software Empresarial",
      title: "Olá, sou Danimar Ribeiro",
      role: "Especialista em Internals de Bancos de Dados, Engenharia de Sistemas (Rust, Zig, C++) e Arquiteto Sênior de Ecossistemas Python e Odoo ERP.",
      location: "📍 Baseado em Florianópolis, Brasil — atuando globalmente.",
      description: [
        "Atingo minha melhor performance no ponto de convergência entre programação de sistemas de baixo nível e arquitetura complexa de regras de negócio empresariais. À noite, construo motores de banco de dados, analisadores léxicos SQL e modelos de IA do zero. De dia, projeto integrações fiscais, contábeis e financeiras de larga escala que lidam com milhões de transações diárias no Brasil.",
        "Seja otimizando estruturas de árvores B e gerenciamento de memória em Zig e Rust, ou liderando ecossistemas open-source no Odoo com Python em ambientes produtivos críticos, meu foco é sempre software veloz, confiável e aberto."
      ],
      ctaCollaborate: "Vamos Colaborar",
      ctaResume: "Ver Competências & CV",
    },
    projects: {
      title: "Engenharia & Projetos em Destaque",
      subtitle: "Sistemas de alta performance, compiladores, motores experimentais de banco de dados e arquiteturas corporativas ERP.",
      items: [
        {
          title: "Droid",
          subtitle: "Playground Multi-linguagem de Internals de Banco de Dados",
          description: "Tutorial passo-a-passo implementando o pipeline completo de um banco de dados relacional do zero (REPL, Lexer SQL, Parser AST, Serialização de Linhas, Pager & Buffer Pool, B-Trees e execução) simultaneamente em C, C++, Rust e Zig.",
          tags: ["Rust", "Zig", "C++", "C", "Database Internals", "Compilers"],
          githubUrl: "https://github.com/danimaribeiro/droid",
          stats: "Open Source Tutorial & Playground"
        },
        {
          title: "Zqlite",
          subtitle: "Motor SQLite Reconstruído em Zig",
          description: "Motor de banco de dados relacional experimental, desenhado sob inspiração do SQLite, desenvolvido totalmente na linguagem moderna Zig. Explora alocadores manuais de memória, busca binária em árvores B e avaliação léxica ultrarrápida.",
          tags: ["Zig", "Database Engine", "Systems", "SQL"],
          githubUrl: "https://github.com/danimaribeiro/zqlite",
          stats: "High Performance Storage"
        },
        {
          title: "NeetCode-GPT",
          subtitle: "Modelo GPT (Transformer) Implementado do Zero",
          description: "Rede neural Transformer funcional elaborada a partir do zero em Python nativo, implementando mecanismos de self-attention, processamento paralelo multi-head, decoders e token embeddings sem frameworks obscuros.",
          tags: ["Python", "Machine Learning", "Transformers", "Neural Networks"],
          githubUrl: "https://github.com/danimaribeiro/neetcode-gpt",
          stats: "Deep Learning Internals"
        },
        {
          title: "Odoo Brasil & Ecossistema Trust-Code",
          subtitle: "Liderança em Arquitetura ERP Fiscal & Financeira",
          description: "Arquiteto e principal contribuidor dos maiores módulos de automação tributária e fiscal para Odoo no Brasil (NF-e, NFS-e, CT-e, SPED, CNAB240 para automação bancária, PyTrustNFe e APIs em tempo real com bancos como Inter e Iugu).",
          tags: ["Python", "Odoo ERP", "Distributed Systems", "Financial APIs", "PostgreSQL"],
          githubUrl: "https://github.com/Trust-Code",
          demoUrl: "https://github.com/danimaribeiro/PyTrustNFe",
          stats: "Escala Empresarial • +1000 PRs"
        }
      ]
    },
    talksAndVideos: {
      title: "Palestras & Conteúdo da Comunidade",
      subtitle: "Compartilhando experiências, melhores práticas em Python e desenvolvimento de arquiteturas modernas no Odoo.",
      channelLinkText: "Explorar vídeos e tutoriais no YouTube ➔",
      channelUrl: "https://www.youtube.com/@DanimarRibeiro",
      items: [
        {
          title: "Workshop: Desenvolvimento Avançado e Arquitetura no Odoo",
          event: "Odoo Brasil Community Workshop",
          date: "Material Aberto / Capacitação",
          url: "https://github.com/danimaribeiro/workshop-odoo-development",
          type: "workshop"
        },
        {
          title: "Construindo Motores para Documentos Fiscais Eletrônicos em Python",
          event: "Sessões Técnicas Python & ERP",
          date: "Apresentação Técnica",
          url: "https://github.com/danimaribeiro/odoo-brazil-eletronic-documents",
          type: "video"
        }
      ]
    },
    resumePage: {
      title: "Danimar Ribeiro",
      subtitle: "Engenheiro de Sistemas & Arquiteto Sênior de Software | Python • Rust • Zig • Odoo",
      downloadText: "Baixar Currículo (.PDF)",
      pdfName: "resume-pt.pdf",
      placeholderNotice: "📌 Nota: Esta seção apresenta blocos de placeholders técnicos bem estruturados, prontos para receber e pontuar os detalhes do seu currículo em PDF no momento oportuno.",
      skillsTitle: "Matriz de Competências Técnicas",
      skills: [
        {
          category: "Engenharia de Sistemas & Baixo Nível",
          items: ["Rust", "Zig", "C++", "C", "Go", "Internals de Bancos de Dados", "Árvores B (B-Trees)", "Gerenciamento de Memória", "Analisadores Léxicos (Lexers) & Parsers", "Drivers Linux"]
        },
        {
          category: "Backend & Sistemas Distribuídos",
          items: ["Python Sênior", "PostgreSQL Internals & Otimização de Performance", "APIs RESTful", "FastAPI", "Django", "AsyncIO", "Arquitetura de Microsserviços e Monolitos Modulares"]
        },
        {
          category: "Ecossistema ERP Corporativo & Fiscal",
          items: ["Arquitetura Odoo (v8 ao v17+)", "Legislação & Conformidade Tributária Brasileira (NF-e, NFS-e, CT-e, SPED)", "APIs Bancárias e Financeiras (Inter, Iugu, Stripe)", "Automação CNAB240 / Boletos", "PyTrustNFe", "Relatórios Jasper"]
        },
        {
          category: "DevOps, Ferramentas & Produtividade",
          items: ["Neovim & Ambiente Dotfiles customizado", "Docker & Containers", "Git & GitHub Actions", "Vim / Tmux / Zsh", "Pipelines de CI/CD", "Playwright & Testes Automatizados"]
        }
      ],
      experienceTitle: "Trajetória Profissional (Estrutura de Placeholders)",
      experiences: [
        {
          role: "Arquiteto Sênior de Software & Liderança Open Source",
          company: "Trust-Code & Ecossistema Odoo Brasil",
          period: "2015 — Presente",
          location: "Florianópolis, SC / Híbrido",
          highlights: [
            "[Placeholder] Liderança arquitetural e desenvolvimento do ecossistema oficial de módulos fiscais e tributários para o ERP Odoo no Brasil (NF-e, NFS-e, SPED e conciliação bancária).",
            "[Placeholder] Projeto de integrações financeiras em tempo real via webservices e APIs para transações financeiras bancárias em conformidade com as normas estatais (Sefaz/Bancos).",
            "[Placeholder] Condução de mentorias técnicas, revisão estruturada de código e workshops comunitários para capacitação de engenheiros em boas práticas de Python e Odoo."
          ]
        },
        {
          role: "Consultor Sênior de Engenharia Backend & Sistemas",
          company: "Projetos de Alta Performance & Pesquisa Independente",
          period: "2018 — Presente",
          location: "Mercados Internacionis & Atuação Global (Remoto)",
          highlights: [
            "[Placeholder] Desenho de backends corporativos e rotinas assíncronas em Python e PostgreSQL para alta volumetria de processamento de dados e pipelines de negócio.",
            "[Placeholder] Pesquisa e implementação em engenharia de sistemas de baixo nível, desenvolvendo engines experimentais e tutoriais paritários de banco de dados (Droid e Zqlite em Rust/Zig/C++).",
            "[Placeholder] Otimização de consultas SQL, estruturação de pipelines processadas (Baker) e automação de rotinas de testes de software."
          ]
        }
      ],
      educationTitle: "Formação & Especializações",
      education: [
        {
          degree: "Ciência da Computação & Sistemas Computacionais (Especialização & Contínuo Aprendizado)",
          institution: "Instituição de Referência (Placeholder)",
          year: "Evolução contínua em arquitetura e engenharia de software de ponta"
        }
      ]
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Interessado em colaboração técnica, consultoria em Odoo/Python ou papo sobre engenharias de sistemas e bancos de dados? Escreva diretamente!",
      email: "danimaribeiro@gmail.com",
      github: "https://github.com/danimaribeiro",
      linkedin: "https://www.linkedin.com/in/danimaribeiro",
      youtube: "https://www.youtube.com/@DanimarRibeiro",
      copyright: "© Danimar Ribeiro. Construído com estética moderna, performance nativa e zero overhead."
    }
  }
};
