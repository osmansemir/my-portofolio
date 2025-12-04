import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Mindvale App",
    img: "url",
    desc: "Developed a responsive blog platform with JWT authentication, role-based UI, and article workflow management. Implemented real-time search, multi-filter system, markdown editor with live preview, and admin dashboard for content moderation. Featuring dark/light theme toggle, toast notifications, and mobile-first design.",
    tech: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Axios",
    ],
    source: "https://github.com/osmansemir/Mindvale_Blog_Frontend",
    website: "https://mindvale-blog-frontend.vercel.app/",
    playbackId: "mkZ01sXvLR7Ui1mT101qj3sNaKhi00pq8m1yKT2OS6Eap4",
    video_id: "gP3A6mTMNmfw3crextjhaElJFPIZLcuoxmnxr00GXSW00",
  },
  {
    title: "Blog Platform API",
    img: "url",
    desc: "Built a secure RESTful API with JWT authentication, role-based access control (User/Author/Admin), and article workflow management (draft/review/approval system). Implemented full-text search, advanced filtering, pagination, and comprehensive security measures including rate limiting and input validation. Architected with Express.js and MongoDB, featuring robust error handling and logging.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Zod",
      "bcryptjs",
      "Winston",
      "Helmet",
    ],
    source: "https://github.com/osmansemir/Mindvale_Blog_Backend",
    playbackId: "mkZ01sXvLR7Ui1mT101qj3sNaKhi00pq8m1yKT2OS6Eap4",
    video_id: "gP3A6mTMNmfw3crextjhaElJFPIZLcuoxmnxr00GXSW00",
  },
];
