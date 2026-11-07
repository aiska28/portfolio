// Edit your content here. Images go in public/image/
export const profile = {
  name: 'Aiska Oca Amalia',
  role: 'UI/UX Designer & Front-End Developer',
  intro: 'I design interfaces in Figma and build them as working front-end pages. I am looking for an internship as a UI/UX Designer or Front-End Developer.',
  email: 'aiskaaoca28@gmail.com',
  phone: '+62 858-5617-0561',
  github: 'https://github.com/aiska28',
  linkedin: 'https://www.linkedin.com/in/aiska-oca-amalia-bba404330/',
  location: 'Malang, East Java',
  photo: '/image/profile.jpeg',
}

// tint: lav | blush | mint | sky | peach
export const projects = [
  { title: 'Operational Management System Website', meta: 'Semester 5 · Team project', tint: 'lav', featured: true, img: '/image/pbl5.png',
    desc: 'A web-based operational management system. I designed the UI/UX from the system requirements so each screen supports a real workflow, then built it into working front-end pages with one consistent visual style.',
    role: 'UI/UX design, front-end development', tags: ['UI/UX Design', 'Figma', 'Front-End'] },
  { title: 'Beyond Words', meta: 'Personal project', tint: 'blush', img: '/image/beyond.png',
    desc: 'A website for writing a letter to someone you will never send it to. When you press send, the letter becomes a celestial body that orbits the person it was written for.',
    role: 'Concept, UI/UX design, development', tags: ['UI/UX Design', 'Web', 'Interaction'] },
  { title: 'Mobile Application Development', meta: 'Semester 4 · Team project', tint: 'sky', img: '/image/pbl4.png',
    desc: 'A mobile app built by a team. I designed the screens and user flow in Figma, then implemented them as working screens in Flutter.',
    role: 'UI/UX design, Flutter implementation', tags: ['Figma', 'Flutter', 'UI/UX Design'] },
  { title: 'K3 Management Website', meta: 'K3 course · Semester 4', tint: 'mint', img: '/image/k3.png',
    desc: 'A website for managing occupational health and safety (K3). My first back-end work: I created roles so each type of user sees only what they need.',
    role: 'Front-end, back-end (user roles)', tags: ['Front-End', 'Back-End', 'User roles'] },
  { title: 'University Laboratory Management Website', meta: 'Semester 3 · Team project', tint: 'peach', img: '/image/pbl3.png',
    desc: 'A web-based laboratory management system for a university. I contributed to UI/UX and front-end, and handled several back-end tasks with PostgreSQL.',
    role: 'UI/UX design, front-end, some back-end', tags: ['UI/UX Design', 'Front-End', 'PostgreSQL'] },
  { title: 'Library Dashboard', meta: 'Database course · Semester 3', tint: 'lav', img: '/image/LibraryDashboard.png',
    desc: 'A dashboard for a database assignment. The user page lists the books that person has borrowed next to the full list of books in the library.',
    role: 'Dashboard and data display', tags: ['Web', 'Database', 'Dashboard'] },
  { title: 'Ghibli Store Website', meta: 'Semester 2 · Course project', tint: 'blush', img: '/image/ghibli.jpeg',
    desc: 'A website with a landing page, a product page, and a description for each product. My first step into structuring pages and navigation.',
    role: 'Page design and build', tags: ['Web', 'Landing page', 'Product pages'] },
]

export const skills = [
  { title: 'Design', tint: 'lav', items: ['Figma', 'UI Design', 'UX Design', 'Wireframing', 'Prototyping'] },
  { title: 'Front-End', tint: 'sky', items: ['HTML', 'CSS', 'PHP', 'Laravel', 'Flutter'] },
  { title: 'Database & Back-End', tint: 'mint', items: ['PostgreSQL', 'MySQL', 'Supabase'] },
  { title: 'Data & Productivity', tint: 'peach', items: ['Data Mining', 'AI Studio (RapidMiner)', 'Microsoft Excel', 'Power BI'] },
]
