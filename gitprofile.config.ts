// gitprofile.config.ts
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiAntdesign,
  SiTailwindcss,
} from 'react-icons/si';

const CONFIG = {
  github: {
    username: 'Anshulranjan845', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['Anshulranjan845/Progrmma', 'Anshulranjan845/DevConnectt'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Programma',
          description:
            'A LeetCode-inspired competitive programming platform where users can solve coding challenges, submit solutions, and track their progress. Built with Node.js backend featuring real-time code execution and problem management.',
          imageUrl:
            'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&auto=format&fit=crop',
          link: 'https://github.com/Anshulranjan845/programma',
          status: 'In Progress',
        },
        {
          title: 'DevConnectt',
          description:
            'A developer networking platform that enables developers to create profiles, share posts, and connect with peers. Features include authentication, follow system, and a developer-focused feed built with Node.js and REST APIs.',
          imageUrl:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop',
          link: 'https://github.com/Anshulranjan845/DevConnectt',
          status: 'In Progress',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Anshul Ranjan', description: '', imageURL: '' },
  social: {
    linkedin: 'anshul-ranjan-9a3094169',
    x: 'anshulmanual',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'anshulranjan',
    dev: 'anshulranjan',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.anshulranjan.com',
    phone: '',
    email: 'anshulgulati177@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1KMVjVXsepcWilU94LpbNv0zZ_XrOJCj2/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },

  skills: [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Antd', icon: SiAntdesign, color: '#0170FE' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Nginx for Beginners',
      body: 'Nginx for Beginners',
      year: 'March 2026',
      link: 'https://learn.kodekloud.com/certificate/3d6808c2-599d-4b17-91d8-7a22c2a2d633',
    },
    {
      name: 'Namaste Node.js',
      body: 'Namaste Node.js building scalable , secure backend system',
      year: 'January 2026',
      link: 'https://namastedev.com/anshulgulati177/certificates/namaste-node',
    },
  ],
  educations: [
    {
      institution: 'BIT Mesra',
      degree: 'BCA',
      from: '2013',
      to: '2016',
    },
    {
      institution:
        'LN Mishra institute of economic development and social change',
      degree: 'MCA',
      from: '2016',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Attention Is All You Need',
      conferenceName: 'Neural Information Processing Systems (NeurIPS 2017)',
      journalName: '',
      authors:
        'Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin',
      link: 'https://arxiv.org/abs/1706.03762',
      description:
        'This paper introduced the Transformer architecture, a novel neural network design based entirely on attention mechanisms, dispensing with recurrence and convolutions. It became the foundation for virtually every modern large language model including BERT, GPT, and T5, and is one of the most cited papers in the history of machine learning.',
    },
    {
      title: 'Deep Residual Learning for Image Recognition',
      conferenceName:
        'IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2016)',
      journalName: '',
      authors: 'Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun',
      link: 'https://arxiv.org/abs/1512.03385',
      description:
        'This paper introduced residual networks (ResNets), proposing skip connections that allow gradients to flow through extremely deep neural networks without vanishing. It won the ILSVRC 2015 competition by a significant margin and fundamentally changed how deep learning architectures are designed, enabling networks with hundreds of layers to be trained effectively.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'Anshulranjan845', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Anshulranjan845/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
