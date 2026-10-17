/**
 * content.js — the single source of portfolio content.
 *
 * Every design renders from this object; nothing here knows about layout.
 * Edit a project once and all six designs pick it up.
 *
 * Paths are relative to index.html so the site works at a domain root and
 * under a GitHub Pages project path (/repository/).
 *
 * Rich text (experience bullets) is an array of segments: plain strings, or
 * { text, href } objects for inline links.
 */

export const content = {
    person: {
        name: 'Shamil TP',
        firstName: 'Shamil',
        lastName: 'TP',
        role: 'Full Stack Developer',
        focus: 'Backend focused',
        location: 'Kerala, India',
        status: 'Open to new opportunities',
        tagline:
            'I build server-side systems where data efficiency meets performance: APIs, crawlers, streaming pipelines and the CI/CD that ships them.',
        about: [
            'I am a developer motivated by a sincere interest in the fundamental workings of the internet. Although I can create responsive frontends, my area of expertise is the backend, where data efficiency, server architecture, and logic come together.',
            'I enjoy working with low-level details because memory and performance optimization can have a noticeable impact. I see myself as a hands-on developer who enjoys the process of improving the speed and dependability of systems.',
        ],
        // A short line lifted from `about`, used as a pull quote by some designs.
        quote: 'Memory and performance optimization can have a noticeable impact.',
        portrait: {
            alt: 'Portrait of Shamil TP',
            width: 400,
            height: 400,
            avif: 'assets/img/profile-400.avif 400w, assets/img/profile-700.avif 700w',
            webp: 'assets/img/profile-400.webp 400w, assets/img/profile-700.webp 700w',
            jpg: 'assets/img/profile-400.jpg 400w, assets/img/profile-700.jpg 700w',
            src: 'assets/img/profile-400.jpg',
        },
        resume: { href: 'Shamil_TP_Resume_ATS(1).pdf', label: 'Resume (PDF)' },
    },

    contact: {
        message:
            "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        email: 'shamiltp073@gmail.com',
        phone: { href: 'tel:+917902786927', label: '+91 79027 86927' },
        location: 'Kerala, India',
    },

    socials: [
        { id: 'github', label: 'GitHub', handle: 'shamil-tp', href: 'https://github.com/shamil-tp' },
        { id: 'linkedin', label: 'LinkedIn', handle: 'in/shamil-tp', href: 'https://www.linkedin.com/in/shamil-tp' },
        { id: 'twitter-x', label: 'X', handle: '@ShamilTp6', href: 'https://x.com/ShamilTp6' },
    ],

    caseStudiesHref: 'myProjectDetails/mycontributions.html',

    projects: [
        {
            slug: 'opspilot',
            name: 'OpsPilot',
            kicker: 'AI Agents · DevOps',
            summary:
                'An incident response copilot that investigates outages from real evidence, proposes fixes and executes them only after human approval. I built the FastAPI backend, deployment, CI/CD and GitHub webhooks.',
            stack: ['FastAPI', 'PostgreSQL', 'Gemini', 'Docker', 'GitHub Actions'],
            caseStudy: 'myProjectDetails/oopspilot.html',
            source: 'https://github.com/shamil-tp/OopsPilot',
            live: { href: 'https://opspilot.shamiltp.me', label: 'Live' },
        },
        {
            slug: 'regretmap',
            name: 'RegretMap',
            kicker: 'Maps · Community · AI',
            summary:
                'A community map of travel lessons with AI summaries and a chat grounded only in real traveller stories. I set up the foundation and built the map, data layer, auth, comments and Gemini key pool.',
            stack: ['Next.js', 'Supabase', 'Leaflet', 'Gemini', 'zod'],
            caseStudy: 'myProjectDetails/regretmap.html',
            source: 'https://github.com/shamil-tp/RegretMap',
            live: { href: 'https://regret-map.shamiltp.me/', label: 'Live' },
        },
        {
            slug: 'rewind',
            name: 'Rewind',
            kicker: 'Self-hosted · Streaming',
            summary:
                'A private, self-hosted music server: one Go binary with an embedded Svelte player and one SQLite file, streaming original audio over HTTP Range. Built and released solo.',
            stack: ['Go', 'SQLite', 'Svelte', 'systemd', 'Tailscale'],
            caseStudy: 'myProjectDetails/rewind.html',
            source: 'https://github.com/shamil-tp/rewind',
            live: { href: 'https://github.com/shamil-tp/rewind/releases', label: 'Releases' },
        },
        {
            slug: 'lume',
            name: 'LUME',
            kicker: 'Media Streaming',
            summary:
                'A media streaming platform with resumable tus uploads, FFmpeg pipelines that slice media into HLS chunks, Cloudflare R2 storage and a custom adaptive player.',
            stack: ['tus', 'FFmpeg', 'HLS', 'Cloudflare R2'],
            caseStudy: 'myProjectDetails/lume.html',
            source: 'https://github.com/shamil-tp/LUME',
            live: { href: 'https://lume-one.vercel.app/', label: 'Live' },
        },
        {
            slug: 'njin',
            name: 'N-jin',
            kicker: 'Search · Crawling',
            summary:
                'A localized search engine powered by a custom web crawler, with MongoDB aggregation-based ranking and a Redis caching layer for fast queries.',
            stack: ['Node.js', 'MongoDB', 'Redis', 'Mongoose'],
            caseStudy: 'myProjectDetails/njin.html',
            source: 'https://github.com/shamil-tp/web-crawler',
            live: { href: 'https://magnificent-recreation-production.up.railway.app/', label: 'Live' },
        },
        {
            slug: 'blogify',
            name: 'Blogify',
            kicker: 'Security · Full Stack',
            summary:
                'A blogging platform with rich editing, Google OAuth 2 with JWT access/refresh tokens, and a backend hardened along OWASP guidelines with Helmet, rate limiting and Zod.',
            stack: ['React', 'Express', 'OAuth 2', 'Zod', 'Helmet'],
            caseStudy: 'myProjectDetails/blogify.html',
            source: 'https://github.com/shamil-tp/Blogify',
            live: { href: 'https://blogify-7mdx.vercel.app/', label: 'Live' },
        },
        {
            slug: 'osmium',
            name: 'Osmium',
            kicker: 'Algorithms',
            summary:
                'A file compression and decompression app built from first principles, implementing LZ77 and Huffman coding from scratch in a Deflate-like design.',
            stack: ['Node.js', 'Express', 'EJS', 'LZ77', 'Huffman'],
            caseStudy: 'myProjectDetails/osmium.html',
            source: 'https://github.com/shamil-tp/osmium',
            live: { href: 'https://osmium-production.up.railway.app', label: 'Live' },
        },
        {
            slug: 'skylark',
            name: 'Skylark',
            kicker: 'Payments · Full Stack',
            summary:
                'A rent-a-car platform with date-based bookings, Razorpay payments and an admin portal. As lead developer I built the Vue architecture, admin panel and backend integrations.',
            stack: ['Vue 3', 'Node.js', 'Express', 'MongoDB', 'Razorpay'],
            caseStudy: 'myProjectDetails/skylark.html',
            source: 'https://github.com/sinanrahman/skylark',
            live: { href: 'https://skylark-frontend-eqdt.onrender.com', label: 'Live' },
        },
        {
            slug: 'coffeecat',
            name: 'coffeeCat',
            kicker: 'Real-time · Social',
            summary:
                'An Instagram–WhatsApp hybrid with real-time chat over Socket.io, a follow-based social graph, and image posts with likes and comments via Cloudinary.',
            stack: ['Vue', 'Express', 'Socket.io', 'Cloudinary'],
            caseStudy: 'myProjectDetails/coffeecat.html',
            source: 'https://github.com/shamil-tp/coffeeCat',
            live: { href: 'https://coffee-cat-topaz.vercel.app/login', label: 'Live' },
        },
        {
            slug: 'brl',
            name: 'blog-Rendering-Library',
            kicker: 'Library · Open Source',
            summary:
                'A zero-dependency vanilla JavaScript library that renders blog posts directly from JSON with raw DOM manipulation. Open source under the MIT license.',
            stack: ['JavaScript', 'DOM', 'Zero dependencies'],
            caseStudy: 'myProjectDetails/blog-rendering-lib.html',
            source: 'https://github.com/shamil-tp/blog-Rendering-Library',
            live: {
                href: 'https://shamil-tp.github.io/blog-Rendering-Library/?slug=messis-world-cup-glory-48qNNV&theme=tokyo_night',
                label: 'Live',
            },
        },
        {
            slug: 'tutora',
            name: 'Tutora',
            kicker: 'Client Project · Education',
            summary:
                'An education management platform built for a client, serving students, teachers, coordinators and parents with tailored views and permissions.',
            stack: ['Private client project', 'Full Stack'],
            caseStudy: 'myProjectDetails/tutora.html',
        },
        {
            slug: 'emvbazar',
            name: 'emvBazar',
            kicker: 'Client Project · Automation',
            summary:
                'A customer debt tracking system for a client, with ledgers mapped to customer profiles and scheduled WhatsApp reminders for collections.',
            stack: ['Private client project', 'Automation', 'API integration'],
            caseStudy: 'myProjectDetails/emvbazar.html',
        },
    ],

    skills: [
        { group: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'Socket.io', 'OAuth 2.0 / JWT'] },
        { group: 'Database & Caching', items: ['MongoDB', 'Redis', 'Mongoose Aggregations', 'Schema Design'] },
        {
            group: 'System Architecture',
            items: ['Distributed Systems', 'HLS Media Streaming', 'FFmpeg Pipelines', 'Cloudflare R2 / AWS', 'tus (Resumable Uploads)'],
        },
        { group: 'Recent Stack', items: ['Python / FastAPI', 'Go', 'PostgreSQL / Supabase', 'TypeScript', 'GitHub Actions'] },
        { group: 'Frontend', items: ['JavaScript (ES6+)', 'React.js', 'Vue.js', 'HTML5 / CSS3', 'Tailwind CSS'] },
        { group: 'Security & Tools', items: ['OWASP Standards', 'Helmet / Zod', 'Docker', 'Git & GitHub', 'Postman'] },
    ],

    experience: [
        {
            role: 'Freelance Full Stack Developer',
            org: 'Independent Clients',
            start: { label: 'Nov 2023', datetime: '2023-11' },
            end: { label: 'Present' },
            bullets: [
                [
                    'Architected and delivered ',
                    { text: 'Tutora', href: 'myProjectDetails/tutora.html' },
                    ', a specialized educational management platform, automating student and staff workflows to reduce administrative overhead by 35%.',
                ],
                [
                    'Engineered ',
                    { text: 'emvBazar', href: 'myProjectDetails/emvbazar.html' },
                    ', an automated customer debt tracking system integrating WhatsApp APIs, increasing collection efficiency by 40% and ensuring strict data privacy.',
                ],
                ['Designed comprehensive user management architectures and secure RBAC portals tailored to strict client specifications.'],
            ],
        },
        {
            role: 'Full Stack Development Intern',
            org: 'Fugipie Technologies',
            start: { label: 'Dec 2024', datetime: '2024-12' },
            end: { label: 'Mar 2025', datetime: '2025-03' },
            bullets: [
                ['Designed scalable RESTful APIs using Node.js and Express.js, implementing Zod schema validation to ensure 100% data input integrity.'],
                ['Engineered secure authentication systems using JWT and BcryptJS, significantly fortifying application security compliance.'],
                ['Managed MongoDB databases with Mongoose ODM, reducing complex query response times by 40% through optimized aggregation pipelines.'],
                ['Implemented strong security protocols including Helmet.js and Rate-Limiting to effectively protect against DDoS vulnerabilities.'],
            ],
        },
    ],

    education: [
        {
            title: 'Bachelor of Computer Application (BCA)',
            org: 'Safi Institute of Advanced Study',
            meta: ['Graduation: March 2025', 'CGPA: 7.76/10'],
        },
        {
            title: 'Full Stack Web Development',
            org: 'DataTribe',
            meta: ['Intensive 6-month program covering MERN stack, RESTful API design, and database management.'],
        },
    ],
};
