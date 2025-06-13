export interface Project {
    title: string;
    description: string;
    image: string;
    url: string;
    badge?: string;
    tags?: string[];
    contributions: string[];
    techStack?: string[];
}

export const projects: Project[] = [
    {
        title: "Digital Marketplace for African Artisans",
        description: "Oosri is a digital marketplace designed to connect skilled African artisans, starting with Nigeria, to global buyers. Our platform breaks down the traditional barriers that have long kept local craftspeople, designers, and micro-entrepreneurs from accessing international markets. Through Oosri, artisans can showcase their unique, handcrafted products directly to global customers, while we handle the logistics, payments, quality assurance, and cross-border trade complexities. ",
        image: "https://res.cloudinary.com/dj1lgzojo/image/upload/v1749662949/Oosri-website_seax8a.png",
        url: "https://orrsi.vercel.app/",
        techStack: ["React", "Next.JS", "Laravel", "React JS", "TypeScript", "Styled Components"],
        contributions: [
      "Contributed to admin dashboard that allowed internal teams to manage products, track orders, and monitor platform activities seamlessly.",
      "Translated Figma designs into pixel-perfect, responsive UI components, maintaining visual accuracy and a consistent user experience across devices and screen sizes.",
      "Refactored and restructured the frontend codebase, improving modularity, readability, and maintainability, which accelerated future development and debugging.",
      "Optimized key areas of the frontend logic, resulting in a 70% boost in performance and responsiveness, contributing to a noticeably faster and smoother admin experience.",
      "Built reusable components and hooks to make data fetching and state management more efficient and developer-friendly.",
      "Collaborated with designers and backend developers, ensuring seamless alignment between frontend behaviour, backend endpoints, and user expectations."
    ],
    },
    {
        title: "IleyaFest Event Platform",
        description: "A platform to enable people register for the IleyaFest event. They can register for the event, make a payment and generate a ticket for the event.  Prior to the implementation of this project IleyaFest was conducted by ensuring people transfer money directly into the indivdual account.",
        image: "https://res.cloudinary.com/dj1lgzojo/image/upload/v1749663293/ileyafest_cfngow.png",
        url: "#",
        techStack: ["Next JS", "Prisma", "Supabase", "Paystack API", "React Query","React Hook Form"],
        contributions:["Initiated and led the development of the IleyaFest event website, taking the project from concept to launch by outlining goals, features, and user flows for a seamless attendee experience.",
            "Designed and developed the landing page, creating an engaging, responsive interface that effectively showcased the event\'s highlights, speakers, and activities.",
            "Built a complete user registration system, with input validation, user feedback, and seamless integration into the overall site design.",
            "Integrated a secure payment system (i.e, Paystack), enabling smooth, real-time transactions for event ticket purchases."
        ],
    },
    {
        title: "Kicest E-commerce Platform",
        description: "Kicest is an all-in-one e-commerce platform designed to help businesses of all sizes build, manage, and grow their online presence. With our platform, you can launch a customizable, mobile-friendly e-commerce website in minutes and seamlessly integrate social media to reach wider audiences, receive instant payments for orders into your local bank account, automate inventory management, order tracking, and shipping logistics.",
        image: "https://res.cloudinary.com/dj1lgzojo/image/upload/v1749664113/Kicest_Vendor_zm1pcn.png",
        url: "https://web.kicest.com",
        // badge: "Web Design",
        tags: ["Web Design", "Portfolio", "Personal"],
        techStack: ["Tailwind CSS", "NodeJS", "Typescript", "Next JS", "Go"],
        contributions: [
           "Contributed to the early conceptualization of the vendor dashboard, collaborating with the product and UI/UX teams to define core functionalities and translate abstract ideas into clear, design-ready concepts",
           "Participated in key technical decision-making, helping shape the architecture, tooling, and frontend strategy for the vendor platform to ensure scalability and maintainability",
           "Collaborated with fellow software engineers to develop core dashboard features, including the implementation of the “Add Product” functionality and logic for assigning categories to products.",
           "Built an intuitive drag-and-drop image upload feature, improving the vendor experience by simplifying the product image submission process.",
           "Developed a dynamic pricing page, allowing vendors to set flexible pricing structures and update them in real-time, enhancing product listing efficiency."
        ]
    },
     {
        title: "Portfolio Website",
        description: "I redesigned my portfolio, highlighting my current career outlook. The portfolio was built by modifying an existing astro template, adding sections such as skills, technical documents. Also, I made some adjustments to the user experience by optimizing the visual elements.",
        image: "https://res.cloudinary.com/dj1lgzojo/image/upload/v1749769180/Yusuff-Ogundeji-Portfolio-Website-For-Yusuff-Ogundeji_v4lch7.png",
        url: "https://example.com/portfolio",
        // badge: "Web Design",
        tags: ["Web Design", "Portfolio", "Personal"],
        techStack: ["Astro", "Tailwind CSS", "Vanilla JavaScript", "GraphQL"],
        contributions: [
           "Redesigned and rebuilt my portfolio site to reflect my current career direction, showcasing updated projects, skills, and professional focus.",
           "Customized an existing Astro template, extending it with new sections such as Skills, Technical Documentation, My writings, and a more structured project showcase.",
           "Enhanced the user experience by optimizing visual hierarchy, spacing, and interactivity, resulting in a cleaner, more intuitive interface across devices.",
           "Improved performance and responsiveness, ensuring fast load times and smooth navigation while maintaining a modern and polished aesthetic."
        ]
    },
     {
        title: "Tasky - Open Source Task Management and Productivity Tool",
        description: "Tasky is an open-source, cross-platform task management and productivity solution designed to help individuals and teams plan, track, and complete their tasks with clarity and efficiency. Having tried so many productivity tools, no single one of those tools has all the features I require for my day-to-day work. For this reason, I'\m building Tasky to bring together important features of various productivity tools. It would be built with a strong focus on usability and data-driven decision-making.",
       image: "/post_img.webp",
        url: "https://example.com/portfolio",
        // badge: "Web Design",
        techStack: ["Vue JS", "Electron", "Tailwind CSS", "Typescript", "NodeJS", "Supabase", "Prisma"],
        contributions: [
            "Setup Frontend and Backend repository on GitHub and managed the project roadmap with GitHub Project.",
            "Prepared Architectural design document",
            "Prepared Project requirement document",
            "Prepared Technical decision document",
            "Set up the frontend and backend repository on GitHub and managed the project roadmap with GitHub Project. "
        ],
    },
    {
        title: "Pebblescore(Formerly Cobble)",
        description:"Cobblescore helps loan providers recover debt by enabling flexible repayment plans for debtors. Its mobile app supports users in boosting their credit scores through structured debt repayment and a credit booster feature.The platform partners with major Nigerian credit bureaus: Credit Registry, CRC, and FirstCentral, to report credit activity and support score recovery.",
         image: "https://res.cloudinary.com/dj1lgzojo/image/upload/v1749664585/Pebblescore_tkwagj.png",
        techStack:["React", "React Native", "NodeJS", "Express", "MongoDB", "Typescript", "Tailwind CSS"],
        contributions: [
            "Built the Frontend of the debtor's portal that allows over 1000+ debtors to pay back their debts with various lenders through a platform.",
            "Built a feature  to allow lenders to invite their debtors.",
            "Integrated Google Analytics across all our platforms.",
            "Implemented Tawk.to through which customers can engage with the company.",
            "Contributed to the development of a lender's portal (A platform through which 5 major Nigerian lenders use to manage their debtors) and debt repayment.",
            "Implemented scheduled jobs for different cases to engage users.",
            "Documented API for the Lenders and Debtors portal.",
            "Built a blog for the company for customer engagement through content."
        ],
        url: "https://web.archive.org/web/20230203214704/https://pebblescore.com/",
    },
    {
        title: "Friconn - Chegg for Africa Students.",
        description: "Friconn is an Education Technology company that helps people optimize their learning process to reach their learning goals easily by providing valuable technological tools and services that will shape and educate them to create the future of Africa. We are a learning companion for African students.",
        image: "https://res.cloudinary.com/dj1lgzojo/image/upload/v1749664407/Friconn_w8tosh.png",
        techStack: ["CodeIgniter", "MYSQL", "React", "Tailwind CSS"],
        contributions: [
            "a localized “Chegg for African students,” tailored to address academic resource gaps in African universities.",
            "Authored the Product Requirement Document (PRD) and created wireframes to communicate vision and features to the UI/UX and development teams",
            "Led a cross-functional team of 6, including 2 Frontend Engineers and 2 Backend Engineers, ensuring smooth execution from concept to launch.",
            "Led the frontend team, guiding the team to build a clean, accessible responsive, and user-friendly interface aligned with project goals."
        ],
        url: "https://friconn.netlify.app",
        // badge: "Web Design",
        tags: ["CodeIgniter", "MYSQL", "React", "Tailwind CSS"]
    },
];