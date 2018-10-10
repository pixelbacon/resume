import moment from 'moment';

import pkg from './../package.json';

import theme from './theme.json';

const dateFormat = 'MMM YYYY';

// const pdf = 'http://bit.ly/michael-minor-resume-githubio';
const pdf = 'http://bit.ly/michael-minor-resume';

const email = 'mikeminor.creativetechnologist@gmail.com';

const employmentTags = {
  agency: 'agency',
  analytics: 'analytics',
  animation: 'animation',
  backend: 'backend development',
  bizOps: 'business operations',
  college: 'college',
  delivery: 'delivery',
  design: 'design',
  devOps: 'development operations',
  enterprise: 'enterprise',
  highCollaboration: 'high collaboration',
  food: 'food',
  frontend: 'frontend development',
  fullstack: 'full stack development',
  gaming: 'gaming',
  installations: 'installations',
  insurance: 'insurance',
  mentoring: 'mentoring',
  partner: 'partner',
  photography: 'photography',
  product: 'product',
  rd: 'research & development',
  selfDiscipline: 'self-discipline',
  selfTaught: 'self taught',
  singleClient: 'single client centric',
  social: 'social',
  sports: 'sports',
  startup: 'startup',
  tenacity: 'tenacity',
  youth: 'youth',
  ux: 'ui/ux',
};

const employmentHistory = [
  {
    title: 'Creative Technologist/Designer/Strategist/Ops',
    company: 'Self-Employed',
    // dateRange: '2000 - Present (17+ yrs)',
    dateStart: moment('19981001'),
    dateEnd: moment(),
    summary: 'Interactive development utilizing branding requirements with inherent goal to expand. Information architecture with a visual and promising form. Art Direction suited to brand guideline and audience. Cut throat visual agenda promising brand confidence before hands on experience. Serving large/medium/small agencies and companies, startups, \'mom-n-pop\', and individuals alike.',
    tags: [employmentTags.analytics, employmentTags.selfTaught, employmentTags.design, employmentTags.animation, employmentTags.photography, employmentTags.product, employmentTags.frontend, employmentTags.backend, employmentTags.devOps, employmentTags.bizOps, employmentTags.mentoring, employmentTags.ux, employmentTags.installations, employmentTags.highCollaboration, employmentTags.selfDiscipline, employmentTags.tenacity, employmentTags.fullstack],
  },
  {
    title: 'Technical Advisor',
    company: 'Waves',
    companyUrl: 'http://bit.ly/michael-minor-waves',
    // dateRange: '2000 - Present (17+ yrs)',
    dateStart: moment('20180801'),
    dateEnd: moment(),
    summary: 'Waves plans on decentralizing the benefits of 10,000 hours, both for the knowledge holder and those who want to learn. Founded by Cam Bartzen, I serve as an advisor/mentor during the critical early stage of a startup where finding co-founders, understanding their product, and finding a rhythm are the utmost important.',
    tags: [employmentTags.product, employmentTags.bizOps, employmentTags.mentoring, employmentTags.highCollaboration, employmentTags.selfDiscipline, employmentTags.tenacity],
  },
  {
    title: 'Cofounder & Creative Technologist',
    company: 'Phood',
    companyUrl: 'http://bit.ly/michael-minor-phood',
    dateStart: moment('20180801'),
    dateEnd: moment(),
    summary: 'Aiming at sustainable industry practices while incorporating start-up frequency changes. Applying creative and technical skills for low effort high reward during the founding days. Add value to platform that makes the company unique in culture, ethics, without slowing down growth or funding.',
    tags: [employmentTags.analytics, employmentTags.startup, employmentTags.food, employmentTags.delivery, employmentTags.college, employmentTags.partner, employmentTags.product, employmentTags.social, employmentTags.frontend, employmentTags.backend, employmentTags.rd, employmentTags.bizOps, employmentTags.fullstack],
  },
  {
    title: 'Chief Technology Officer',
    company: 'Players Health',
    companyUrl: 'http://bit.ly/michael-minor-players-health',
    dateStart: moment('20171001'),
    dateEnd: moment('20180319'),
    summary: 'Sherpa from prototype/1st time startup into production mode for measurable value for customer, investor, and employees. Using all the skills in the toolset to guide through cadence, valued users vs value to users, industry standards. Currently going through TechStars 2018 in Boulder, CO. After years of wanting a mission to give the platform away, finally achieved.',
    leaving: 'Leadship created toxicity that never got resolved; egos inflated and in that void individual self doubt crippled abilities to succeed in their respective lane. Startups are hard, it\'s a common breakpoint.',
    tags: [employmentTags.startup, employmentTags.youth, employmentTags.sports, employmentTags.college, employmentTags.partner, employmentTags.insurance, employmentTags.product, employmentTags.fullstack, employmentTags.rd, employmentTags.analytics, employmentTags.bizOps, employmentTags.ux, employmentTags.design, employmentTags.animation],
  },
  {
    title: 'Senior Creative Technologist',
    company: 'We Are Unlimited/Critical Mass',
    companyUrl: 'http://bit.ly/michael-minor-we-are-unlimited',
    dateStart: moment('20170101'),
    dateEnd: moment('20170801'),
    summary: 'Style guides for coding and asset production, introducing new frameworks and build tools, Creative Director on games and responsive designs, tech stack for social strategy, modernizing 7 year old stacks, being on the governance for Omnicomm for how we spend big bucks with Amazon... Every hat.',
    leaving: 'The former Digital Officer showed a lack of transparency when it came to his knowledgebase of digital. Ironic, I know. But when it came to the implications it put deadlines at risk, and was akin to working with one hand tied behind your back. A great opportunity for many people, spoiled by one.',
    tags: [employmentTags.startup, employmentTags.social, employmentTags.agency, employmentTags.design, employmentTags.gaming, employmentTags.rd, employmentTags.devOps, employmentTags.highCollaboration, employmentTags.mentoring, employmentTags.ux, employmentTags.enterprise, employmentTags.singleClient, employmentTags.fullstack, employmentTags.selfDiscipline],
  },
  {
    title: 'Chief Creative Technologist',
    company: 'Player\'s Health',
    companyUrl: 'http://bit.ly/michael-minor-players-health',
    dateRange: 'Nov 2014 - Apr 2015 & Oct 2015 - Feb 2016',
    summary: 'A company truly doing good. Attempting to digitize every child athlete\'s health record. Interviewed for developer, hired as CTO and helped refactor data structures and split the front end from the backend. We went on to win Google\'s international Demo Day Award.',
    leaving: 'Sadly, out of necessity. Players Health is a startup so when it came to runway it was known that I would have to find another source of income at the end of it. It was bittersweet to have to leave but eventually came back when funds were secured.',
    tags: [employmentTags.startup, employmentTags.rd, employmentTags.ux, employmentTags.design, employmentTags.startup, employmentTags.youth, employmentTags.sports, employmentTags.college, employmentTags.partner, employmentTags.insurance, employmentTags.product, employmentTags.mentoring],
  },
  {
    title: 'Senior Creative Technologist',
    company: 'Doejo',
    companyUrl: 'http://bit.ly/michael-minor-doejo',
    dateStart: moment('20130401'),
    dateEnd: moment('20141001'),
    summary: 'Co-founded by Darren Marshall who I previously mentored, Doejo needed mending in process and fewer cooks. With thick stripes, I was able to help reposition relations with clients to a better standing, mentor developers and project managers from junior to senior.',
    leaving: 'Doejo had some of the best employees around, who went on to do wonderful things, become strong leaders. The environment however at the time was still being developed and the work/life balance had yet to find a realistic, sustainable balance.',
    tags: [employmentTags.agency, employmentTags.analytics, employmentTags.animation, employmentTags.backend, employmentTags.design, employmentTags.enterprise, employmentTags.frontend, employmentTags.fullstack, employmentTags.gaming, employmentTags.highCollaboration, employmentTags.installations, employmentTags.mentoring, employmentTags.rd, employmentTags.selfDiscipline, employmentTags.social, employmentTags.tenacity, employmentTags.ux],
  },
  {
    title: 'Creative Technologist',
    company: 'Leo Burnett/Arc World Wide',
    companyUrl: 'http://bit.ly/michael-minor-leo-burnett',
    // dateRange: 'Nov 2009 - Apr 2013 (3 yrs 6 mos)',
    dateStart: moment('20091101'),
    dateEnd: moment('20130401'),
    summary: 'Lead front end engineer turned mad scientist through a proper Creative Technology department. Alternative interfaces, interactive installations, etc... it was lovely and chaotic.',
    leaving: 'Large scale agencies commonly lay off X percent of the work for every few years. After moving into almost entirely R&D work, it meant it was rare that I was tied directly to paid projects. This was good since the benefits of the work trickled down to many, many client projects; but it was bad since it meant 6 figure salary in a somewhat hidden lab. Wonderful experience though and still very grateful for it.',
    tags: [employmentTags.agency, employmentTags.analytics, employmentTags.animation, employmentTags.backend, employmentTags.design, employmentTags.enterprise, employmentTags.frontend, employmentTags.fullstack, employmentTags.gaming, employmentTags.highCollaboration, employmentTags.installations, employmentTags.rd, employmentTags.selfDiscipline, employmentTags.social, employmentTags.tenacity, employmentTags.ux],
  },
];

const linkedIn = 'https://bit.ly/michael-minor-linkedin-resume';

const linkedInLiteral = 'linkedin.com/in/WhyDoYouWork';

const process = [
  'Think',
  'Sketch/Prototype',
  'Viability',
  'Play a video game or another zero consequence brain game',
  'Build/Test',
  'Launch (Perfect for now)',
  'Double Captain & Coke, in a tall, w/ lime',
  'Postmortem: What was a win, what was a lose'
];

const linkRef = '?ref=Michael.Minor';

const references = [
  {
    name: 'Nathaniel Zola',
    linkedIn: 'http://bit.ly/michael-minor-natty-zola',
    title: 'Partner at Matchstick Ventures, Managing Director at Techstars',
    company: 'Matchstick Ventures',
    companyLink: `http://bit.ly/michael-minor-matchstick`,
    affiliation: 'I met Natty through TechStars while working for Players Health. He was a strong instrument in re-solidifying confidence in my broad and abstract skill set.',
  },
  {
    name: 'Krissa Watry',
    linkedIn: 'https://www.linkedin.com/in/krissa/',
    title: 'Inventor - Engineer - CEO',
    company: 'Dynepic',
    companyLink: `http://bit.ly/michael-minor-playportal`,
    affiliation: 'Colleague turned friend turned colleague through TechStars. Post TechStars became a client, a VERY happy client.',
  },
  {
    name: 'Crystal Williams',
    linkedIn: 'https://www.linkedin.com/in/crystalwilliams/',
    title: 'Sr. Staff Web Architect',
    company: 'Tesla Motors',
    companyLink: `http://bit.ly/michael-minor-tesla`,
    affiliation: 'A former client while working at Warner Brothers and continued after moving to greener pastures. Strong mind and soul, we remain in contact.',
  },
  {
    name: 'Michael Jacobs',
    linkedIn: `https://www.linkedin.com/in/michael-jacobs-91584547/${linkRef}`,
    title: 'Cofounder and COO',
    company: 'Ordermark',
    companyLink: `http://bit.ly/michael-minor-ordermark`,
    affiliation: 'Colleague and friend through TechStars; a genuinely good person always willing to help good people make good things. Amazing observational and processing skills lead to natural sympatico.',
  },
  {
    name: 'Julie Penner',
    linkedIn: 'https://www.linkedin.com/in/juliepenner/',
    title: 'Director',
    company: 'Techstars',
    companyLink: `https://www.techstars.com${linkRef}`,
    affiliation: 'A Managing Director at TechStars:Boulder, she was kind to the affects of my Aspergers and got to know me and my weird brain faily well in a short time. Tender as she is wickedly smart.',
  },
  {
    name: 'Miles Green',
    linkedIn: 'https://www.linkedin.com/in/milesgreen/',
    title: 'Head of Creative Technology',
    company: 'Haygarth',
    companyLink: `http://www.haygarth.co.uk/${linkRef}`,
    affiliation: 'By a long shot, the best boss I ever had. His honest candor and support pushed myself and the department into the No Mans Land of creating lovely and intriguing projects.',
  },
  {
    name: 'Omari Miller',
    linkedIn: 'http://www.linkedin.com/in/ojmiller/',
    title: 'VP Creative Director',
    company: 'Momentum Wordlwide',
    companyLink: `http://www.momentumww.com/${linkRef}`,
    affiliation: 'A true creative at heart with a love for the expressive world, we both worked at Leo Burnett. He stood out as someone that disregarded "limits" to push clients into better spaces.',
  },
  {
    name: 'Darren Marshall',
    linkedIn: 'https://www.linkedin.com/in/darrenmarshall/',
    title: 'Managing Partner',
    company: 'Doejo',
    companyLink: `http://www.doejo.com${linkRef}`,
    affiliation: 'Pupil turned employee turned employer when he co-founded Doejo. Since before his college years we were on a forum of designers, developers, and creative technologists.',
  },
  {
    name: 'Brandon Lee Cox',
    linkedIn: 'https://www.linkedin.com/in/imheretomakeyoufamous/',
    title: 'SVP, Executive Creative Director',
    company: 'Leo Burnett',
    companyLink: `http://www.leoburnett.com/${linkRef}`,
    affiliation: 'A creative technologist that dove into the designing/brand development side. We worked together as the creative/front end leads on Copenhagen while at Leo Burnett and with mututal backgrounds challenged and supported each other via hive mind.',
  },
  // {
  //   name: 'Chad Mirshak',
  //   linkedIn: 'https://www.linkedin.com/in/chadmirshak/',
  //   title: 'Creative Director, Game Developer',
  //   company: 'SapientRazorfish',
  //   companyLink: 'http://www.sapientrazorfish.com/${linkRef}'
  // }
];

const skills = {
  backend: [
    'Elastic Search', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'GraghQL', 'REST',
  ].sort(),
  css: [
    'CSS2/3', 'Sass', 'Stylus', 'Less', 'Print', 'Screen', 'Responsive',
  ].sort(),
  design: [
    'Direction & Execution', 'UX/UI', 'Photoshop/Illustrator', 'Sketch', 'Invision', 'Pipeline Creation', 'Photography', 'Motion Graphics', 'Animation',
  ].sort(),
  languages: [
    'CSS', 'HTML', 'JavaScript', 'JSON', 'PHP (rusty)', '.Net (rusty)', 'ActionScript (rusty)', 'Bash (rusty)', 'Ruby (rusty)', 'Unity (rusty)', 'Python (rusty)', 'XML',
  ].sort(),
  javascript: [
    'ES5/ES6', 'Angular', 'React', 'Vue/Nuxt', 'GSAP', 'Phaser', 'TypeScript', 'Cordova/PhoneGap', 'SocketIO', 'Node/Express/Sails', 'Ember/Knockout', 'Pug/Jade',
  ].sort(),
  operations: [
    'Google Cloud Platform', 'AWS', 'Heroku', 'Digital Ocean', 'Docker', 'Kubernetes', 'Ansible', 'KPI/Cadence', 'IBM Cloud', 'Vagrant'
  ].sort(),
  projectManagement: [
    'Asana', 'Trello', 'Monday.com', 'Jira', 'Confluence', 'Pivotal Tracker', 'KanBan', 'Scrum/Standups',
  ].sort(),
  miscellaneous: [
    'TechStars: Boulder 2018 Alumni', 'Information Architecture', 'Startup Culture & Process', 'Curiosity vs Rigidity vs Scalability', 'HIPAA Compliance', 'MVC, Object Oriented', 'Mentoring/Coaching',
  ].sort(),
};

const technicalities = [
  'TechStars: Boulder 2018 Alumni',
  'Angular, React, Vue, Phaser',
  'Art Direction, Design, Process',
  'Authentic Cultural Building',
  'Curiosity vs Rigidity vs Scalability',
  'CSS, Stylus, SCSS, PreCSS',
  'Devops, Technical Structure and Support',
  'Information Architecture and Flow',
  'Javascript in bounds',
  'HIPAA Compliance',
  'MongoDB, MySQL, Redis, SocketIO, Etc',
  'Node, Express, GraphQL, ORMs, Etc',
  'Strategy, Viability, Sustainability',
  'UX Design, Analytics, Direction',
  'Legos... Seriously',
].sort();

const todos = [
  [false, 'Play a major role in a company that will affect my grand children, and every one elses for that matter.'],
  [false, 'Rent a scooter in Vietnam and ride along the Ho Chi Minh Trail ala Top Gear.'],
  [false, 'Be involved with TechStars:Boulder to help good people make good things.'],
  [false, 'Obtain said Grandchildren.'],
  [false, 'Restore a BMW motorcycle from the 70\'s.'],
  [false, 'Sail from New York City to Anchorage, Alaska.'],
  [false, 'Retire onto a ranch off the grid, self sustained, with a bunch of fainting goats.'],
];

export default {
  dateFormat,
  email,
  employmentHistory,
  employmentTags,
  linkedIn,
  linkedInLiteral,
  pdf,
  process,
  references,
  skills,
  technicalities,
  theme,
  todos,
  version: pkg.version,
};
