export const dict = {
  pt: {
    navbar: {
      about: 'SOBRE',
      collections: 'COLEÇÕES',
      atelier: 'ATELIÊ',
      github: 'GITHUB',
      timeline: 'LINHA DO TEMPO',
      contact: 'CONTATO',
      footer: 'SISTEMAS DE SOFTWARE & ENGENHARIA FULL-STACK',
    },
    hero: {
      portfolio: 'PORTFÓLIO — 2026',
      scroll: 'ROLAR',
      est: 'DESDE 2024',
    },
    about: {
      label: '001 — SOBRE',
      title: 'Engenharia e Arquitetura de Software',
      p1: 'Minha trajetória na tecnologia começou na infraestrutura (ETEC), forjando uma base sólida em redes, hardware e servidores. Hoje, graduando em Desenvolvimento de Software Multiplataforma (FATEC), utilizo essa visão crítica para desenhar ecossistemas completos.',
      p2: 'Mais do que apenas escrever código, foco em orquestrar soluções escaláveis de ponta a ponta, da arquitetura do banco de dados e APIs em Python/Java até a interface final do usuário. Meu objetivo é sempre equilibrar precisão técnica de back-end com excelência em usabilidade.',
      roleLabel: 'ATUAÇÃO',
      roleValue: 'Engenharia de Software • Infraestrutura • Full-Stack',
      locationLabel: 'LOCALIZAÇÃO',
      locationValue: 'Praia Grande - SP, Brasil',
    },
    collections: {
      label: '003 — AS COLEÇÕES',
      title1: 'Trabalhos',
      title2: 'Selecionados',
      subtitle: 'PROJETOS SELECIONADOS DEMONSTRANDO ALCANCE TÉCNICO E VISÃO CRIATIVA',
      btnRepo: 'VER REPOSITÓRIO',
      btnPub: 'VER PUBLICAÇÃO',
      items: {
        cosmic: {
          category: 'Desenvolvimento Cognitivo de Crianças com TDAH & Sistemas Web Analytics',
          desc: 'Uma plataforma que explora o desenvolvimento cognitivo através de sistemas web interativos. Combinando lógica de programação com arquitetura de interface, Cosmic Mind traduz processos mentais complexos em experiências digitais acessíveis.',
        },
        aethesa: {
          category: 'Moda Urbana & Experiência Web Sustentável',
          desc: 'Uma experiência web sustentável para o universo da moda urbana. Aethesa combina estética contemporânea com práticas de desenvolvimento consciente, criando uma plataforma que reflete os valores de sustentabilidade no design digital.',
        },
        casa: {
          category: 'Desenvolvimento de Sistemas Embarcados & Suporte para Autistas',
          desc: 'Trabalho de Conclusão de Curso focado no desenvolvimento de firmware para microcontroladores ESP32 e prototipagem 3D. Uma intersecção entre engenharia de software e hardware, demonstrando competência em sistemas embarcados.',
        }
      }
    },
    atelier: {
      label: '002 — O ATELIÊ',
      title1: 'Stack',
      title2: 'Técnica',
      categories: [
        {
          label: 'FRONT-END & UI',
          items: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Tailwind CSS']
        },
        {
          label: 'BACK-END & APIs',
          items: ['Java (Spring Boot)', 'Python (FastAPI, Django)', 'PHP (Laravel)', 'C++', 'C#']
        },
        {
          label: 'BANCO DE DADOS',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Oracle']
        },
        {
          label: 'INFRAESTRUTURA, DEVOPS & REDES',
          items: ['Docker', 'Linux', 'Google Cloud & VPS', 'WireGuard (VPN)', 'Nginx & Gateways']
        },
        {
          label: 'HARDWARE & AUTOMAÇÃO',
          items: ['n8n (Automação)', 'Sistemas Embarcados', 'Arquitetura de Hardware', 'Git / GitHub']
        }
      ]
    },
    github: {
      label: '005 — GITHUB',
      title1: 'Código',
      title2: 'Aberto',
      desc: 'Engenharia Full-Stack & Sistemas Embarcados | FATEC & ETEC.',
      mainStack: 'Stack Principal: Next.js • Python • Java • SQL',
      btnProfile: 'Ver Perfil Completo',
      stats: {
        reposLabel: 'REPOSITÓRIOS',
        reposValue: 'PÚBLICOS',
        focusLabel: 'FOCO',
        focusValue: 'FULL-STACK',
        stackLabel: 'TECNOLOGIAS'
      }
    },
    timeline: {
      label: '004 — LINHA DO TEMPO',
      title1: 'Experiência',
      title2: '& Formação',
      types: {
        education: 'EDUCAÇÃO',
        work: 'PROFISSIONAL',
        certification: 'CERTIFICAÇÃO'
      },
      items: {
        etec: {
          subtitle: 'SUPORTE DE TI',
          desc: 'Construção de base técnica em infraestrutura, com foco em redes corporativas, hardware e sistemas embarcados.',
          detail: [
            'Domínio prático em manutenção de computadores e metodologias de suporte ao cliente.',
            'Fundamentos sólidos em Segurança Digital, Computação em Nuvem e Redes de Computadores.',
            'Introdução à Lógica de Programação, IoT (Internet das Coisas) e Desenvolvimento Web básico.'
          ],
          link: { url: '/Portfolio/images/etec-diploma.jpg', label: 'Visualizar Diploma' }
        },
        fatec: {
          subtitle: 'DESENVOLVIMENTO DE SOFTWARE',
          desc: 'Engenharia de software multiplataforma, com ênfase no desenvolvimento de Back-End e arquitetura de sistemas distribuídos.',
          detail: [
            'Desenvolvimento ponta a ponta de ecossistemas (Web e Mobile) utilizando Next.js, React, Java (Spring Boot) e Python (FastAPI).',
            'Modelagem e orquestração de bancos de dados relacionais e NoSQL (MySQL, MongoDB, Redis, Firebase).',
            'Aplicação de metodologias ágeis (Scrum/Kanban) e diretrizes de Interação Humano-Computador (IHC) para otimização da usabilidade.'
          ]
        },
        oracle: {
          subtitle: 'DATABASE FOUNDATIONS',
          desc: 'Validação técnica em fundamentos de bancos de dados relacionais e estruturação do ciclo de vida da informação no ecossistema Oracle.',
          detail: [
            'Domínio das etapas iniciais de arquitetura de dados, englobando a construção de modelagem conceitual e lógica.',
            'Compreensão e aplicação de princípios introdutórios de modelagem física, mapeando entidades e relacionamentos para garantir a integridade do banco antes da implementação final.'
          ],
          link: { url: '/Portfolio/images/oracle-diploma.jpg', label: 'Visualizar Diploma' }
        },
        suporte: {
          subtitle: 'ESTAGIÁRIO DE TI (SUPORTE E DESENVOLVIMENTO)',
          desc: 'Otimização da operação interna através da reestruturação da infraestrutura de redes e do desenvolvimento full-stack de plataformas sob demanda.',
          detail: [
            'Redes e Infraestrutura: Implementação de gateways, roteamento avançado, túneis VPN (WireGuard) e Load Balancing para garantir alta disponibilidade corporativa.',
            'Engenharia de Software: Arquitetura e desenvolvimento do zero de plataformas internas conteinerizadas (Web e Mobile) para resolução de gargalos operacionais, com deploy em ambientes VPS.',
            'DevOps & Automação: Implementação de fluxos de automação de negócios (n8n) e utilização de desenvolvimento assistido por IA para acelerar o ciclo de entrega de software.',
            'Suporte Estruturado: Resolução de chamados N1/N2 com documentação rigorosa de processos via Notion.'
          ]
        }
      }
    },
    footer: {
      label: '006 — CONTATO',
      title1: 'Vamos',
      title2: 'Conectar',
      subtitle: 'DISPONÍVEL PARA FREELANCE, COLABORAÇÕES & VAGAS EM TI',
      btn: 'ENTRAR EM CONTATO',
      copyright: 'ZEUS',
      builtWith: 'FEITO COM ASTRO & REACT'
    }
  },
  en: {
    navbar: {
      about: 'ABOUT',
      collections: 'COLLECTIONS',
      atelier: 'ATELIER',
      github: 'GITHUB',
      timeline: 'TIMELINE',
      contact: 'CONTACT',
      footer: 'SOFTWARE SYSTEMS & FULL-STACK ENGINEERING',
    },
    hero: {
      portfolio: 'PORTFOLIO — 2026',
      scroll: 'SCROLL',
      est: 'EST. 2024',
    },
    about: {
      label: '001 — ABOUT',
      title: 'Software Engineering and Architecture',
      p1: 'My journey in technology began in infrastructure (ETEC), forging a solid foundation in networks, hardware, and servers. Today, pursuing a degree in Cross-Platform Software Development (FATEC), I apply this critical vision to design complete ecosystems.',
      p2: 'More than just writing code, I focus on orchestrating end-to-end scalable solutions, from database architecture and Python/Java APIs to the final user interface. My goal is always to balance technical back-end precision with excellence in usability.',
      roleLabel: 'FOCUS',
      roleValue: 'Software Engineering • Infrastructure • Full-Stack',
      locationLabel: 'LOCATION',
      locationValue: 'Praia Grande - SP, Brazil',
    },
    collections: {
      label: '003 — THE COLLECTIONS',
      title1: 'Selected',
      title2: 'Works',
      subtitle: 'CURATED PROJECTS SHOWCASING TECHNICAL RANGE AND CREATIVE VISION',
      btnRepo: 'VIEW REPOSITORY',
      btnPub: 'VIEW PUBLICATION',
      items: {
        cosmic: {
          category: 'Cognitive Development of Children with ADHD & Web Analytics Systems',
          desc: 'A platform that explores cognitive development through interactive web systems. Combining programming logic with interface architecture, Cosmic Mind translates complex mental processes into accessible digital experiences.',
        },
        aethesa: {
          category: 'Urban Fashion & Sustainable Web Experience',
          desc: 'A sustainable web experience for the urban fashion universe. Aethesa combines contemporary aesthetics with conscious development practices, creating a platform that reflects sustainability values in digital design.',
        },
        casa: {
          category: 'Embedded Systems Development & Support For Autistic Individuals',
          desc: 'Final year project focused on firmware development for ESP32 microcontrollers and 3D prototyping. An intersection between software and hardware engineering, demonstrating competence in embedded systems.',
        }
      }
    },
    atelier: {
      label: '002 — THE ATELIER',
      title1: 'Tech',
      title2: 'Stack',
      categories: [
        {
          label: 'FRONT-END & UI',
          items: ['TypeScript', 'JavaScript', 'Next.js', 'React', 'Tailwind CSS']
        },
        {
          label: 'BACK-END & APIs',
          items: ['Java (Spring Boot)', 'Python (FastAPI, Django)', 'PHP (Laravel)', 'C++', 'C#']
        },
        {
          label: 'DATABASES',
          items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Oracle']
        },
        {
          label: 'INFRASTRUCTURE, DEVOPS & NETWORKS',
          items: ['Docker', 'Linux', 'Google Cloud & VPS', 'WireGuard (VPN)', 'Nginx & Gateways']
        },
        {
          label: 'HARDWARE & AUTOMATION',
          items: ['n8n (Automation)', 'Embedded Systems', 'Hardware Architecture', 'Git / GitHub']
        }
      ]
    },
    github: {
      label: '005 — GITHUB',
      title1: 'Open',
      title2: 'Source',
      desc: 'Full-Stack Engineering & Embedded Systems | FATEC & ETEC.',
      mainStack: 'Main Stack: Next.js • Python • Java • SQL',
      btnProfile: 'View Full Profile',
      stats: {
        reposLabel: 'REPOSITORIES',
        reposValue: 'PUBLIC',
        focusLabel: 'FOCUS',
        focusValue: 'FULL-STACK',
        stackLabel: 'STACK'
      }
    },
    timeline: {
      label: '004 — TIMELINE',
      title1: 'Experience',
      title2: '& Formation',
      types: {
        education: 'EDUCATION',
        work: 'PROFESSIONAL',
        certification: 'CERTIFICATION'
      },
      items: {
        etec: {
          subtitle: 'IT SUPPORT',
          desc: 'Building a technical foundation in infrastructure, focusing on enterprise networks, hardware, and embedded systems.',
          detail: [
            'Practical domain in computer maintenance and customer support methodologies.',
            'Solid fundamentals in Digital Security, Cloud Computing, and Computer Networks.',
            'Introduction to Programming Logic, IoT (Internet of Things), and basic Web Development.'
          ],
          link: { url: '/Portfolio/images/etec-diploma.jpg', label: 'View Diploma' }
        },
        fatec: {
          subtitle: 'SOFTWARE DEVELOPMENT',
          desc: 'Cross-platform software engineering, with an emphasis on Back-End development and distributed systems architecture.',
          detail: [
            'End-to-end development of ecosystems (Web and Mobile) using Next.js, React, Java (Spring Boot), and Python (FastAPI).',
            'Modeling and orchestration of relational and NoSQL databases (MySQL, MongoDB, Redis, Firebase).',
            'Application of agile methodologies (Scrum/Kanban) and Human-Computer Interaction (HCI) guidelines to optimize usability.'
          ]
        },
        oracle: {
          subtitle: 'DATABASE FOUNDATIONS',
          desc: 'Technical validation in relational database fundamentals and information lifecycle structuring in the Oracle ecosystem.',
          detail: [
            'Mastery of initial data architecture stages, encompassing conceptual and logical modeling construction.',
            'Understanding and application of introductory physical modeling principles, mapping entities and relationships to ensure database integrity before final implementation.'
          ],
          link: { url: '/Portfolio/images/oracle-diploma.jpg', label: 'View Diploma' }
        },
        suporte: {
          subtitle: 'IT INTERN (SUPPORT AND DEVELOPMENT)',
          desc: 'Optimization of internal operations through network infrastructure restructuring and full-stack development of on-demand platforms.',
          detail: [
            'Networks and Infrastructure: Implementation of gateways, advanced routing, VPN tunnels (WireGuard), and Load Balancing to ensure corporate high availability.',
            'Software Engineering: Architecture and zero-to-one development of containerized internal platforms (Web and Mobile) to resolve operational bottlenecks, deployed in VPS environments.',
            'DevOps & Automation: Implementation of business automation workflows (n8n) and utilization of AI-assisted development to accelerate the software delivery cycle.',
            'Structured Support: N1/N2 ticket resolution with rigorous process documentation via Notion.'
          ]
        }
      }
    },
    footer: {
      label: '006 — CONTACT',
      title1: 'Let\'s',
      title2: 'Connect',
      subtitle: 'AVAILABLE FOR FREELANCE, COLLABORATIONS & IT ROLES',
      btn: 'GET IN TOUCH',
      copyright: 'ZEUS',
      builtWith: 'BUILT WITH ASTRO & REACT'
    }
  }
};
