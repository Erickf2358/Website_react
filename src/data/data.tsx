export interface Series {
  id: string;
  title: string;
  videoCount: number;
  imagePath: string;
  youtubeUrl: string | null;
  description?: string;
}

export interface Category {
  id: string;
  label: string;
  series: Series[];
}

export const categories: Category[] = [
  {
    id: 'certification',
    label: 'Certification & Professional Development',
    series: [
      {
        id: 'cert-aace-evp',
        title: 'AACE EVP Certification Prep',
        videoCount: 4,
        imagePath: '/courses/cert_aace_evp.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=LI2GRVfrNZw&list=PLcIj6Cbi2no9362T1zwCM-dFn1fATREIS',
      },
      {
        id: 'cert-aace-ccp',
        title: 'AACE CCP',
        videoCount: 8,
        imagePath: '/courses/cert_aace_ccp.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=5kSG7YwR9KA&list=PLcIj6Cbi2no_8vlHNGZzNbhS4JCWeuT-L',
      },
      {
        id: 'cert-pmp',
        title: 'Project Management Certifications',
        videoCount: 4,
        imagePath: '/courses/cert_pmp.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=F0zEpnOdhOg&list=PLcIj6Cbi2no9Ku-fmypx7g5jJjpYyVKny&index=4',
      },
      {
        id: 'cert-masters',
        title: "Master's Degree in Australia",
        videoCount: 1,
        imagePath: '/courses/cert_masters.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=W5P7xkKykN4&list=PLcIj6Cbi2no8GxvO9r00EEJ4LrTfkRv2l',
      },
    ],
  },
  {
    id: 'evm',
    label: 'Earned Value Management & Project Controls',
    series: [
      {
        id: 'evm-mastery',
        title: 'Earned Value Management (EVM): Mastery',
        videoCount: 10,
        imagePath: '/courses/evm_mastery.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=1w0vHHohc2Y&list=PLcIj6Cbi2no8_e38_df8mNU5HWkzGHh_L',
      },
      {
        id: 'evm-cost-mgmt',
        title: 'Cost Management in Construction with OR',
        videoCount: 5,
        imagePath: '/courses/evm_cost_mgmt.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=-JEB0v6-bjQ&list=PLcIj6Cbi2no_AfSD-qt7HVLpInKatGucS&pp=sAgC',
      },
      {
        id: 'evm-productivity',
        title: 'Tools for Productivity Measurement',
        videoCount: 2,
        imagePath: '/courses/evm_productivity.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=JVY28n3iWEQ&list=PLcIj6Cbi2no9Z88it8xSxcErfUO34huq-',
      },
    ],
  },
  {
    id: 'planning',
    label: 'Planning and Scheduling',
    series: [
      {
        id: 'plan-p6',
        title: 'Primavera P6',
        videoCount: 3,
        imagePath: '/courses/plan_p6.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=EhSEGSyN8YY&list=PLcIj6Cbi2no8UNi9e9cIBNFixNozMDcz-',
      },
      {
        id: 'plan-lean',
        title: 'Lean Construction',
        videoCount: 0,
        imagePath: '/courses/plan_lean.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=Ha0NaBj1FaQ&list=PLcIj6Cbi2no-iUQy1d7J4nmjSA5rvYQRO',
      },
    ],
  },
  {
    id: 'technology',
    label: 'Data & Technology',
    series: [
      {
        id: 'tech-python',
        title: 'Python for Project Controls: Automate & Optimize',
        videoCount: 7,
        imagePath: '/courses/tech_python.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=lxQDILEdF80&list=PLcIj6Cbi2no-c9c_anJoIA_SdUNYiuuC5&pp=sAgC',
      },
      {
        id: 'tech-ai-coding',
        title: 'AI Coding',
        videoCount: 4,
        imagePath: '/courses/tech_ai_coding.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=TrqDY1cG0OA&list=PLcIj6Cbi2no-b1UuUS1Fzc8mJueqy0wWs',
      },
      {
        id: 'tech-powerbi',
        title: 'Data Visualization for Project Management: Power BI',
        videoCount: 9,
        imagePath: '/courses/tech_powerbi.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=-jbH7DbbZuc&list=PLcIj6Cbi2no-Dg_oqirESrxQfd57m2GfZ',
      },
    ],
  },
  {
    id: 'knowledge',
    label: 'Knowledge & Reading',
    series: [
      {
        id: 'know-software-books',
        title: 'Software Books',
        videoCount: 5,
        imagePath: '/courses/know_software_books.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=-i2HnnGsZRs&list=PLcIj6Cbi2no9GI_boX5pjTglRaX4T_cQn',
      },
      {
        id: 'know-book-club',
        title: 'Project Management Book Club: Key Takeaways',
        videoCount: 6,
        imagePath: '/courses/know_book_club.jpg',
        youtubeUrl: 'https://www.youtube.com/watch?v=u7g8insigME&list=PLcIj6Cbi2no8NoQbtoUheS9PFciWM1dOj',
      },
    ],
  },
];
