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
      badge: "⚡ Senior Software & Systems Engineer (16+ Years)",
      title: "Hey, I'm Danimar Ribeiro",
      role: "Senior Backend & Systems Engineer specializing in Python, Go, Cloud Architecture (AWS), and low-level Database Internals.",
      location: "📍 Based in Florianópolis, Brazil — operating globally.",
      description: [
        "With over 16 years in software engineering, I specialize in architecting distributed systems, automating mission-critical business workflows, and solving extreme performance bottlenecks. At AdRoll, I redesigned core email marketing delivery services in Python and Go, boosting throughput from 5 to over 300 emails per second.",
        "Equipped with a Bachelor's in Physics, a Postgraduate degree in Databases, and deep roots in ERP fiscal architecture (Odoo Brasil / Trust-Code), I build software that bridges computational depth with enterprise reliability. Outside work, I build database engines in Rust, Zig, and C++ from scratch."
      ],
      ctaCollaborate: "Get in Touch",
      ctaResume: "View Complete CV & Skills",
    },
    projects: {
      title: "Featured Systems & Engineering",
      subtitle: "Open-source database playgrounds, custom compilers, ML engines from scratch, and enterprise ERP suites.",
      items: [
        {
          title: "Droid",
          subtitle: "Database Internals Multi-Language Playground",
          description: "A complete step-by-step educational architecture modeling a database engine from scratch (REPL, SQL Lexer, Parser, Row Serialization, Pager & Buffer Pool, B-Tree nodes, and scans) developed concurrently in C, C++, Rust, and Zig.",
          tags: ["Rust", "Zig", "C++", "C", "Database Internals", "B-Tree Storage"],
          githubUrl: "https://github.com/danimaribeiro/droid",
          stats: "Multi-Language Playground"
        },
        {
          title: "Zqlite",
          subtitle: "SQLite Re-engineered with Zig",
          description: "An experimental, zero-overhead relational database engine inspired by SQLite, authored from the ground up in modern Zig. Focuses on low-latency lexical parsing and custom memory allocation.",
          tags: ["Zig", "Database Engine", "Low-Level Systems", "SQL"],
          githubUrl: "https://github.com/danimaribeiro/zqlite",
          stats: "High Performance Storage"
        },
        {
          title: "NeetCode-GPT",
          subtitle: "Generative Pre-trained Transformer from Scratch",
          description: "A functional decoder-only Transformer neural network crafted purely from scratch in Python without high-level wrappers, implementing token embeddings, self-attention, and parallel multi-head attention.",
          tags: ["Python", "Machine Learning", "Transformers", "Neural Networks"],
          githubUrl: "https://github.com/danimaribeiro/neetcode-gpt",
          stats: "Deep Learning Architecture"
        },
        {
          title: "Odoo Brasil & Trust-Code Ecosystem",
          subtitle: "Enterprise Brazilian Fiscal & Financial Modules",
          description: "Former Head of Development & lead architect for core Brazilian localization modules in Odoo ERP (NF-e, NFS-e, CT-e, SPED, banking automation, and PyTrustNFe). Powering compliance for thousands of organizations.",
          tags: ["Python", "Odoo ERP", "Distributed Architecture", "PostgreSQL", "Docker"],
          githubUrl: "https://github.com/Trust-Code",
          demoUrl: "https://github.com/danimaribeiro/PyTrustNFe",
          stats: "Enterprise Scale • 1000+ PRs"
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
      subtitle: "Senior Software Engineer | Python • Go • AWS Cloud • Distributed Systems & ERP Architecture",
      downloadText: "Download Resume (.PDF)",
      pdfName: "resume-en.pdf",
      placeholderNotice: "Executive Profile: Over 16 years in software engineering across backend systems (Python, Go, .NET), cloud environments (AWS ECS, Aurora, DynamoDB), enterprise ERP localization, and low-level database systems design.",
      skillsTitle: "Core Competency Matrix",
      skills: [
        {
          category: "Languages & Low-Level Systems",
          items: ["Python", "Go (GoLang)", "C#", "Rust", "Zig", "C++ / C", "SQL", "Database Internals (B-Trees, Pagers, Lexers)"]
        },
        {
          category: "Cloud, DevOps & Infrastructure",
          items: ["AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis)", "Terraform", "Docker & Containerization", "Ansible", "CI/CD Pipelines & Release Workflows", "Linux & Neovim"]
        },
        {
          category: "Backend Frameworks & Architectures",
          items: ["Flask & RESTful APIs", "FastMCP", "Odoo ERP Localization Architecture", "ASP.NET MVC / Winforms / WPF", "High-Throughput Background Processing", "Microservices & Distributed Scale"]
        },
        {
          category: "Databases, Data & Machine Learning",
          items: ["PostgreSQL Internals", "Oracle & MySQL", "SQLite / Zqlite Storage Engineering", "Data Transformations & Kinesis Pipelines", "Machine Learning (Transformers from scratch)"]
        }
      ],
      experienceTitle: "Professional Work Experience",
      experiences: [
        {
          role: "Senior Software Engineer",
          company: "AdRoll (BairesDev / Remote)",
          period: "Sep 2019 — Present",
          location: "Remote / USA Market",
          highlights: [
            "Spearheaded backend Python development focused on enterprise email marketing automation, deliverability, and extreme system performance.",
            "Engineered architectural optimizations in email dispatch infrastructure, increasing throughput by 60x from 5 emails/second to ~300 emails/second.",
            "Architected and deployed a new high-performance Go (GoLang) service module to streamline massive background data processing and real-time email campaign scheduling.",
            "Designed resilient, cloud-native backend environments utilizing AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis), Terraform, Postgres, and React for external ad network integrations."
          ]
        },
        {
          role: "Lead Software Engineer & Head of Development",
          company: "Trustcode / Odoo Brasil Ecosystem",
          period: "Aug 2015 — Sep 2019",
          location: "Florianópolis, Brazil",
          highlights: [
            "Led the software development engineering team responsible for the architectural localization of Odoo ERP for Brazilian tax, fiscal, and banking compliance.",
            "Developed core Python modules and packages (PyTrustNFe) for automated tax calculations, electronic invoice transmission (NF-e/NFS-e/CT-e/SPED), and bank ledger automation.",
            "Built scalable customer portal backends, implemented automated Docker/Ansible infrastructure, conducted rigorous technical reviews, and mentored engineers across community technical trainings."
          ]
        },
        {
          role: "Software Engineer",
          company: "Infoger",
          period: "Nov 2013 — Jul 2015",
          location: "Brazil",
          highlights: [
            "Developed and maintained proprietary enterprise ERP software, systematically removing legacy technical debt and architecting modern technological improvements.",
            "Engineered complex system modifications to guarantee compliance with evolving corporate regulatory and accounting tax laws.",
            "Built a customer self-service registration and management website leveraging ASP.NET MVC, C#, Webforms, and PostgreSQL."
          ]
        },
        {
          role: "Software Engineer (.NET / C#)",
          company: "Bravi Software",
          period: "Jan 2013 — Nov 2013",
          location: "Distributed International Teams",
          highlights: [
            "Collaborated with cross-border engineering teams across two countries developing C# solutions across diverse enterprise platforms.",
            "Designed and implemented high-reliability RESTful services querying complex datasets including student enrollments, course catalogs, and academic timetables.",
            "Maintained and expanded multi-tier architectures using C#, Webforms, Winforms, Windows Presentation Foundation (WPF), and Oracle databases."
          ]
        },
        {
          role: "Software Engineer (Full-Stack ERP)",
          company: "Interfoc",
          period: "Jan 2011 — Dec 2012",
          location: "Brazil",
          highlights: [
            "Participated from foundational inception in the architecture and full-stack implementation of a comprehensive commercial ERP software suite.",
            "Owned the core accounting, accounts payable/receivable, and automated tax calculation engines using C#, VB.Net, Webforms, Winforms, and PostgreSQL."
          ]
        },
        {
          role: "Software Engineer",
          company: "Zyoncore",
          period: "Jan 2008 — May 2010",
          location: "Brazil",
          highlights: [
            "Developed desktop and server applications in VB.Net and C# for high-volume automated image file uploading, attribute extraction, and bulk resizing.",
            "Created companion directory organization software automating download streaming and storage indexing."
          ]
        }
      ],
      educationTitle: "Education & Academic Credentials",
      education: [
        {
          degree: "Bachelor's Degree in Physics",
          institution: "Federal University",
          year: "2018"
        },
        {
          degree: "Postgraduate's Degree in Databases",
          institution: "Federal University",
          year: "2011"
        },
        {
          degree: "Bachelor's Degree in Information Systems",
          institution: "Federal University",
          year: "2010"
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Open to discussing backend system architectures, cloud scaling, database engine engineering, and strategic tech collaborations.",
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
      badge: "⚡ Engenheiro de Sistemas e Backend Sênior (+16 Anos)",
      title: "Olá, sou Danimar Ribeiro",
      role: "Engenheiro Sênior de Backend & Sistemas com especialidade em Python, Go, Arquitetura Cloud (AWS) e Internals de Bancos de Dados.",
      location: "📍 Baseado em Florianópolis, Brasil — atuando no mercado global.",
      description: [
        "Com mais de 16 anos de experiência no setor de TI, foco no desenho de sistemas distribuídos de alta escala, automação de fluxos críticos de negócio e eliminação de gargalos de performance. Na AdRoll, reconstruí as rotinas de disparo em massa de e-mail marketing em Python e Go, elevando o throughput em 60 vezes (de 5 para ~300 envios/segundo).",
        "Com graduação em Física, bacharelado em Sistemas de Informação e pós-graduação em Bancos de Dados — somados à liderança no ecossistema fiscal Odoo Brasil (Trust-Code) —, desenvolvo soluções que unem profundidade computacional e estabilidade empresarial. Nas horas vagas, construo motores de banco de dados do zero em Rust, Zig e C++."
      ],
      ctaCollaborate: "Entrar em Contato",
      ctaResume: "Ver Experiência & CV",
    },
    projects: {
      title: "Engenharia & Projetos em Destaque",
      subtitle: "Engines experimentais de banco de dados, IA do zero, compiladores e suítes corporativas ERP open-source.",
      items: [
        {
          title: "Droid",
          subtitle: "Playground Multi-linguagem de Internals de Banco de Dados",
          description: "Pipeline educacional implementando uma engine relacional do zero (REPL, Lexer SQL, Parser AST, Serialização de Linhas, Pager & Buffer Pool, nós de B-Tree e buscas) simultaneamente nas linguagens C, C++, Rust e Zig.",
          tags: ["Rust", "Zig", "C++", "C", "Database Internals", "B-Tree Storage"],
          githubUrl: "https://github.com/danimaribeiro/droid",
          stats: "Multi-Language Playground"
        },
        {
          title: "Zqlite",
          subtitle: "Motor SQLite Reconstruído em Zig",
          description: "Motor de banco de dados relacional experimental, desenhado sob inspiração do SQLite e programado 100% na linguagem moderna Zig. Explora alocadores manuais de memória e avaliação léxica ultrarrápida.",
          tags: ["Zig", "Database Engine", "Low-Level Systems", "SQL"],
          githubUrl: "https://github.com/danimaribeiro/zqlite",
          stats: "High Performance Storage"
        },
        {
          title: "NeetCode-GPT",
          subtitle: "Modelo GPT (Transformer) Implementado do Zero",
          description: "Rede neural Transformer funcional elaborada a partir do zero em Python nativo, implementando mecanismos de self-attention, processamento paralelo multi-head e token embeddings sem frameworks superficiais.",
          tags: ["Python", "Machine Learning", "Transformers", "Neural Networks"],
          githubUrl: "https://github.com/danimaribeiro/neetcode-gpt",
          stats: "Deep Learning Architecture"
        },
        {
          title: "Odoo Brasil & Ecossistema Trust-Code",
          subtitle: "Módulos Corporativos para Automação Fiscal & Financeira",
          description: "Ex-Head de Desenvolvimento e arquiteto dos principais módulos open-source da localização Odoo no Brasil (NF-e, NFS-e, CT-e, SPED, integração bancária CNAB240 e PyTrustNFe). Viabiliza operações de milhares de empresas.",
          tags: ["Python", "Odoo ERP", "Distributed Architecture", "PostgreSQL", "Docker"],
          githubUrl: "https://github.com/Trust-Code",
          demoUrl: "https://github.com/danimaribeiro/PyTrustNFe",
          stats: "Escala Empresarial • +1000 PRs"
        }
      ]
    },
    talksAndVideos: {
      title: "Palestras, Tutoriais & Mentorias",
      subtitle: "Capacitação da comunidade em arquiteturas Python escaláveis e melhores práticas de engenharia corporativa no Odoo.",
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
      subtitle: "Engenheiro Sênior de Software | Python • Go • Nuvem AWS • Sistemas Distribuídos & ERP",
      downloadText: "Baixar Currículo (.PDF)",
      pdfName: "resume-pt.pdf",
      placeholderNotice: "Perfil Executivo: +16 anos de experiência em engenharia de software de ponta a ponta — atuando em arquiteturas de microsserviços na nuvem (AWS/Go/Python), liderança técnica de ERPs fiscais e pesquisa de baixo nível em engines de bancos de dados.",
      skillsTitle: "Matriz de Competências",
      skills: [
        {
          category: "Linguagens & Sistemas de Baixo Nível",
          items: ["Python Sênior", "Go (GoLang)", "C#", "Rust", "Zig", "C++ / C", "SQL", "Internals de Bancos de Dados (B-Trees, Pagers, Lexers)"]
        },
        {
          category: "Nuvem, Infraestrutura & DevOps",
          items: ["AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis)", "Terraform", "Docker & Containers", "Ansible", "Pipelines de CI/CD", "Linux & Neovim Dotfiles"]
        },
        {
          category: "Frameworks Backend & Arquiteturas",
          items: ["Flask & APIs RESTful", "FastMCP", "Arquitetura Odoo e Módulos Fiscais", "ASP.NET MVC / Winforms / WPF", "Processamento Assíncrono em Massa", "Sistemas Distribuídos e Microsserviços"]
        },
        {
          category: "Bancos de Dados, Big Data & IA",
          items: ["PostgreSQL Internals & Performance", "Oracle & MySQL", "Engenharia de Engines SQLite / Zqlite", "Pipelines de Tratamento de Dados (Kinesis/Baker)", "Machine Learning (Transformers From Scratch)"]
        }
      ],
      experienceTitle: "Experiência Profissional",
      experiences: [
        {
          role: "Engenheiro Sênior de Software",
          company: "AdRoll (BairesDev / Remoto)",
          period: "Set 2019 — Presente",
          location: "Remoto / Mercado EUA",
          highlights: [
            "Desenvolvimento especializado no backend em Python focado na automação de e-mails corporativos, altíssima entregabilidade e performance extrema.",
            "Redesenhei a infraestrutura e rotinas de disparo, elevando o throughput de envio em 60x — saltando de 5 e-mails/segundo para ~300 e-mails/segundo.",
            "Projetei e desenvolvi do zero um serviço em Go (GoLang) para processamento ultra veloz de cargas de dados em background e agendamento contínuo de campanhas.",
            "Gerenciamento e arquitetura de ambientes em nuvem resilientes na AWS (ECS, EC2, Aurora RDS, DynamoDB, ElastiCache, Kinesis), IaC com Terraform e integrações com ad networks externas via React e Postgres."
          ]
        },
        {
          role: "Engenheiro Sênior de Software & Head de Desenvolvimento",
          company: "Trustcode / Ecossistema Odoo Brasil",
          period: "Ago 2015 — Set 2019",
          location: "Florianópolis, Brasil",
          highlights: [
            "Liderei o departamento de desenvolvimento da empresa, coordenando o roadmap e a arquitetura oficial para a localização do Odoo ERP (conformidade fiscal, tributária e bancária).",
            "Criei e mantive módulos estratégicos em Python (como o PyTrustNFe) para transmissão automática de documentos fiscais (NF-e, NFS-e, CT-e, SPED), conciliação bancária (CNAB240) e regras tributárias.",
            "Desenvolvimento do portal web corporativo de atendimento, implementação de infraestrutura imutável via Docker/Ansible, revisões estruturadas de código e realização de treinamentos técnicos comunitários."
          ]
        },
        {
          role: "Engenheiro de Software",
          company: "Infoger",
          period: "Nov 2013 — Jul 2015",
          location: "Brasil",
          highlights: [
            "Atuei no desenvolvimento e evolução de software ERP corporativo, responsável pela eliminação sistemática de complexidades acidentais e modernização de stack técnica.",
            "Redesenho arquitetural de submódulos para estrita adequação à evolução das leis fiscais e normas contábeis vigentes.",
            "Desenvolvimento de novo portal web em ASP.NET MVC, C#, Webforms e PostgreSQL para autosserviço e cadastro de novos clientes."
          ]
        },
        {
          role: "Engenheiro de Software (.NET / C#)",
          company: "Bravi Software",
          period: "Jan 2013 — Nov 2013",
          location: "Equipe Internacional Distribuída",
          highlights: [
            "Atuação como desenvolvedor C# em ecossistemas multiplataforma, integrando times distribuídos internacionalmente em reuniões diárias online.",
            "Concepção e implementação de APIs RESTful escaláveis para consulta instantânea de cadastros de alunos, matrículas, cronogramas e diários de curso.",
            "Manutenção preventiva e evolutiva em C#, Webforms, Winforms, WPF (Windows Presentation Foundation) e bancos de dados Oracle."
          ]
        },
        {
          role: "Engenheiro de Software (Full-Stack ERP)",
          company: "Interfoc",
          period: "Jan 2011 — Dez 2012",
          location: "Brasil",
          highlights: [
            "Participação direta desde a fundação e tomada de decisões arquiteturais na criação de suíte completa de software ERP de gestão.",
            "Desenvolvedor full-stack responsável por páginas web e pela lógica core contábil no backend, estruturando motores para cálculo automático de tributos, contas a pagar e contas a receber utilizando C#, VB.Net, Webforms, Winforms e PostgreSQL."
          ]
        },
        {
          role: "Engenheiro de Software",
          company: "Zyoncore",
          period: "Jan 2008 — Mai 2010",
          location: "Brasil",
          highlights: [
            "Desenvolvimento de soluções cliente-servidor em VB.Net e C# focadas no upload em massa de arquivos de imagem, extração de metadados e redimensionamento automático de fotos.",
            "Criação de software complementar responsável por downloads em fluxo sequencial e catalogação e ordenação em diretórios estruturados."
          ]
        }
      ],
      educationTitle: "Formação Acadêmica & Credenciais",
      education: [
        {
          degree: "Bacharelado em Física",
          institution: "Universidade Federal",
          year: "2018"
        },
        {
          degree: "Pós-Graduação em Bancos de Dados",
          institution: "Universidade Federal",
          year: "2011"
        },
        {
          degree: "Bacharelado em Sistemas de Informação",
          institution: "Universidade Federal",
          year: "2010"
        }
      ]
    },
    contact: {
      title: "Entre em Contato",
      subtitle: "Interessado em arquitetura de sistemas de alta escala, otimização de nuvem AWS, engines de banco de dados ou consultoria? Escreva diretamente!",
      email: "danimaribeiro@gmail.com",
      github: "https://github.com/danimaribeiro",
      linkedin: "https://www.linkedin.com/in/danimaribeiro",
      youtube: "https://www.youtube.com/@DanimarRibeiro",
      copyright: "© Danimar Ribeiro. Desenvolvido com Tailwind CSS v4, React e zero overhead."
    }
  }
};
