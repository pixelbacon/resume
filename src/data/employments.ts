import moment from 'moment';
import { employmentTags } from './employmentTags';
import IEmployment from '@/types/IEmployment';
import { yearsIn } from '@/data/yearsIn';
import { Persona } from '@/types/Persona';

// export const employments: Array<{ title: string, company: string, companyUrl?: string, dates: any[], leaving?: string, summary: string, tags: any[] }> = [
export const employments: IEmployment[] = [
  {
    title: 'Creative Technologist',
    company: 'Self-Employed',
    dates: [
      [moment('19981001'), moment()],
    ],
    summary: 'Interactive development utilizing branding requirements with inherent goal to expand. Information architecture with a visual and promising form. Art Direction suited to brand guideline and audience. Cut throat visual agenda promising brand confidence before hands on experience. Serving large/medium/small agencies and companies, startups, \'mom-n-pop\', and individuals alike.',
    bulletPoints: [
      `Self disciplined and educated for ${yearsIn} years`,
      'Watched the industry of interaction change from simple CSS/HTML/JS to AS3 and back to CSS/HTML/JS and beyond',
      'Incorporated all elements of my intricate brain to bring countless ideas to life',
      'Retained repeat customeers as a developer, photographer, advisor, designer, etc',
      'Never said "no" to a client asking for something outside of my skillset at any time',
      'Work remotely 50% of the time',
    ],
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    tags: [
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.bizOps,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.gaming,
      employmentTags.highCollaboration,
      employmentTags.installations,
      employmentTags.mentoring,
      employmentTags.photography,
      employmentTags.product,
      employmentTags.rd,
      employmentTags.social,
      employmentTags.startup,
      employmentTags.selfDiscipline,
      employmentTags.selfTaught,
      employmentTags.tenacity,
      employmentTags.ux,
    ],
  },
  {
    title: 'Technical Advisor',
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    company: 'Waves',
    companyUrl: 'http://bit.ly/michael-minor-waves',
    dates: [
      [moment('20180801'), moment()],
    ],
    summary: 'Waves plans on decentralizing the benefits of 10,000 hours, both for the knowledge holder and those who want to learn. Founded by Cam Bartzen, I serve as an advisor/mentor during the critical early stage of a startup where finding co-founders, understanding their product, and finding a rhythm are the utmost important.',
    bulletPoints: [
      'Teaching my theory of \'Make It Easy\', leading to a new found sense of strength in ideas and product on founder level',
      'Enabled methods for better product development',
      'Enabled improved leadership through correlating intent with product',
      'Knowledge transfer based on the importance of finding fellow founders',
    ],
    leaving: '',
    tags: [
      employmentTags.advisor,
      employmentTags.bizOps,
      employmentTags.highCollaboration,
      employmentTags.mentoring,
      employmentTags.product,
      employmentTags.selfDiscipline,
      employmentTags.tenacity,
    ],
  },
  {
    title: 'Cofounder & Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    company: 'Phood',
    companyUrl: 'http://bit.ly/michael-minor-phood',
    dates: [
      [moment('20180701'), moment('20180901')],
    ],
    summary: 'Aiming at sustainable industry practices while incorporating start-up frequency changes. Applying creative and technical skills for low effort high reward during the founding days. Add value to platform that makes the company unique in culture, ethics, without slowing down growth or funding.',
    bulletPoints: [
      'Raised the bar for all founders through transparency-based process (gut checks and checkins)',
      'Knowledge transfer of technical foundation of product development',
      'Introduced #GiveFirst mentality',
      'Added product features to protect customers via product when possible',
      'Increased company efficiency through standups and kanban style task management',
      'Setup pipeline for marketing site through git-flow and Heroku',
      'Planned product development based on startup (low resources, high risk) to production (high resources, low risk)',
      'Rebranded company, designed investor promo material, created entire design and UX for mobile app',
      'Helped close funding, improve investor deck, whilst delivering on creative and technical',
    ],
    leaving: '',
    tags: [
      employmentTags.analytics,
      employmentTags.bizOps,
      employmentTags.college,
      employmentTags.design,
      employmentTags.delivery,
      employmentTags.devFullstack,
      employmentTags.food,
      employmentTags.partner,
      employmentTags.product,
      employmentTags.social,
      employmentTags.startup,
      employmentTags.rd,
      employmentTags.ux,
    ],
  },
  {
    title: 'Chief Technology Officer',
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    company: 'Players Health',
    companyUrl: 'http://bit.ly/michael-minor-players-health',
    dates: [
      [moment('20171001'), moment('20180319')],
      [moment('20151001'), moment('20160201')],
      [moment('20141101'), moment('20150401')],
    ],
    summary: 'Sherpa from prototype/1st time startup into production mode for measurable value for customer, investor, and employees. Using all the skills in the toolset to guide through cadence, valued users vs value to users, industry standards. Currently going through TechStars 2017 in Boulder, CO. After years of wanting a mission to give the platform away, finally achieved.',
    leaving: 'Leadship created toxicity that never got resolved; egos inflated and in that void individual self doubt crippled abilities to succeed in their respective lane. Startups are hard, it\'s a common breakpoint.',
    bulletPoints: [
      'Introduced risk-aversion industry standards to code base',
      'Implemented proper documentation for process, check ins, and resources',
      'Introduced Vue, Express, and Sails through Assessment Tool',
      'Designed and implemented Assessment tool within brand guideline',
      'Added sales based analytics to Assessment to enable customer and sales team to increase ability to sell to new and existing customers',
      'Educated fellow cofounders on managing and interacting with technical based roles',
      'Went to TechStars: Boulder 2017 class',
    ],
    tags: [
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.bizOps,
      employmentTags.college,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.insurance,
      employmentTags.partner,
      employmentTags.product,
      employmentTags.sports,
      employmentTags.startup,
      employmentTags.rd,
      employmentTags.ux,
      employmentTags.youth,
    ],
  },
  {
    title: 'Senior Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Maker,
    ],
    company: 'We Are Unlimited/Critical Mass',
    companyUrl: 'http://bit.ly/michael-minor-we-are-unlimited',
    dates: [
      [moment('20160501'), moment('20170801')],
    ],
    summary: 'Style guides for coding and asset production, introducing new frameworks and build tools, Creative Director on games and responsive designs, tech stack for social strategy, modernizing 7 year old stacks, being on the governance for Omnicomm for how we spend big bucks with Amazon... Every hat.',
    leaving: 'The former Digital Officer showed a lack of transparency when it came to his knowledgebase of digital. Ironic, I know. But when it came to the implications it put deadlines at risk, and was akin to working with one hand tied behind your back. A great opportunity for many people, spoiled by one.',
    bulletPoints: [
      'Mentored junior developers on modern frameworks and tools, tracking their digestion of and catering accourdingly',
      'Introduced Sass, Gulp, Phaser, and Vue frameworks',
      'Worked with Art Directors directly to create McDonalds first web based SnapChat game',
      'Introduced game mechanics from a product and brand cogniscant perspective',
      'Planned entire tech stack through 15 pages of documentation, leading to being on the Technical Governance for company and client',
      'Initially brought in to help a Angular/Sass based career search tool, leading to full time employment',
    ],
    tags: [
      employmentTags.startup,
      employmentTags.social,
      employmentTags.agency,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.gaming,
      employmentTags.rd,
      employmentTags.devOps,
      employmentTags.highCollaboration,
      employmentTags.mentoring,
      employmentTags.ux,
      employmentTags.enterprise,
      employmentTags.singleClient,
      employmentTags.selfDiscipline,
    ],
  },
  {
    title: 'Senior Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Maker,
    ],
    company: 'DXagency',
    companyUrl: 'http://bit.ly/michael-minor-dxagency',
    dates: [
      [moment('20150401'), moment('20150801')],
    ],
    summary: 'Ben Hordell, co-founder of DXagency, was a former client of Inverted Creative. When he saw I was free on the market after my first stint at Players Health he quickly snatched me up. DXagency was doing great work, but they wanted to push their technical department a bit more. I implemented multiple industry standards and a modern tech stack.',
    leaving: 'Being based out of New Jersey made it quite difficult as the company itself was not accustomed to remote work. Processes lacked scalability beyond in person and it took a tole on morale and productivity.',
    bulletPoints: [
      'Introduced Sass & other pre-compile frameworks along side modern build tools',
      'Introduced rapid prototyping through wireframes and sketches to quicken flow from concept to production',
      'Guided designers to start with responsive-first approach',
      'Educated company as to what a Creative Technologist is capable of and how they can increase productivity 2x or more',
      'Worked almost entirely remote, with 2 weeks periods in New Jersey at HQ',
    ],
    tags: [
      employmentTags.agency,
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.highCollaboration,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.ux,
    ],
  },
  {
    title: 'Senior Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Maker,
    ],
    company: 'Doejo',
    companyUrl: 'http://bit.ly/michael-minor-doejo',
    dates: [
      [moment('20130401'), moment('20141001')],
    ],
    summary: 'Co-founded by Darren Marshall who I previously mentored, Doejo needed mending in process and fewer cooks. With thick stripes, I was able to help reposition relations with clients to a better standing, mentor developers and project managers from junior to senior.',
    leaving: 'Doejo had some of the best employees around, who went on to do wonderful things, become strong leaders. The environment however at the time was still being developed and the work/life balance had yet to find a realistic, sustainable balance.',
    bulletPoints: [
      'Worked directly with clients to ensure deadlines were me while improving on their vision',
      'Brought transparency to previously mismanaged clients, while increasing their spending by drastically improving quality of work',
      'Mentored lesser experienced developers and designers on quicker prototyping to meet client expectations',
      'Planned timelines lasting multiple months with cooldowns for documentation, unit testing, client revision windows',
      'First complex, production level Angular project w/ Laravel backend.',
    ],
    tags: [
      employmentTags.agency,
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.enterprise,
      employmentTags.gaming,
      employmentTags.highCollaboration,
      employmentTags.installations,
      employmentTags.mentoring,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.social,
      employmentTags.tenacity,
      employmentTags.ux,
    ],
  },
  {
    title: 'Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Maker,
    ],
    company: 'Leo Burnett/Arc World Wide',
    companyUrl: 'http://bit.ly/michael-minor-leo-burnett',
    dates: [
      [moment('20091101'), moment('20130401')],
    ],
    summary: 'Lead front end engineer turned mad scientist through a proper Creative Technology department. Alternative interfaces, interactive installations, etc... it was lovely and chaotic.',
    leaving: 'Large scale agencies commonly lay off X percent of the work for every few years. After moving into almost entirely R&D work, it meant it was rare that I was tied directly to paid projects. This was good since the benefits of the work trickled down to many, many client projects; but it was bad since it meant 6 figure salary in a somewhat hidden lab. Wonderful experience though and still very grateful for it.',
    bulletPoints: [
      'Front End lead for Copenhagen (freshcope.com)',
      'War-room projects for highly collaborative work',
      'Mentored interns to work within the confines of an agency while maintaining genuine grit',
      'Consistently worked on R&D projects on various languages to vet when and how they would be usuable for production',
      'Worked directly with Art Directors to ensure technical limitations never got in their way',
      'Consistently created well structured, re-usable, properly commented code for developers below or at same level',
      'Took on projects that required undocumented, open source frameworks and tools',
    ],
    tags: [
      employmentTags.agency,
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.enterprise,
      employmentTags.gaming,
      employmentTags.highCollaboration,
      employmentTags.installations,
      employmentTags.photography,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.social,
      employmentTags.tenacity,
      employmentTags.ux,
    ],
  },
  {
    title: 'Cofounder, Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    company: 'Inverted Creative',
    dates: [
      [moment('20070801'), moment('20081101')],
    ],
    summary: 'Inverted Creative is constantly wading through new technologies to find what solutions match our client needs. Part of this requirement is once a solution is found packing it up to be used by developers for future projects. Although highly technical there is still a large requirement for making sure the technologies match the brand. With the team Inverted Creative has, this is a fun, unique aspect to a usually technical position; as I can spread my creative wings often.',
    bulletPoints: [
      'Positive cash flow within 2 months',
      'Built up team of onsite and remote designers, developers, and client managers',
      'Created highly reusable MVC based code with proper documentation',
      'Coached and mentored employees on sustainable development, client relations, and iterative design',
      'Madonna was the largest client, breaking iTunes sales records for her album Hard Candy through shareable widget',
      'Very high output to input ratio based on my own fringe theories of development, client management, and sales strategy',
    ],
    leaving: '',
    tags: [
      employmentTags.agency,
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.bizOps,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.enterprise,
      employmentTags.gaming,
      employmentTags.highCollaboration,
      employmentTags.installations,
      employmentTags.photography,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.social,
      employmentTags.startup,
      employmentTags.tenacity,
      employmentTags.ux,
    ],
  },
  {
    title: 'Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Maker,
    ],
    company: 'Creative Circle',
    dates: [
      [moment('20030101'), moment('20070101')],
    ],
    summary: 'This period of time used the entirety of my skillset. From fullstack development to fullstack marketing and design I was never bored, always hired, and was able to focus on different markets with each contract. Half the work was one-time use, while the other half was to fit into enterprise level code and well established brand guidelines.',
    bulletPoints: [
      'Contract based work that spanned from design to development',
      'Continous work, one contract after another',
      'Remote 25% of the time',
      'All clients were high ranked agency with Fortune 100/500 companies with well established brand guidelines',
      'Often brought in when the current development/design staff lacked knowledge',
      'Often required and gladly participate in postmortems to make sure a knowledge transfer happened when contracts would end',
      'Documented code as it was being developed',
      'Worked directly with Art Directors in charge of multi-national brands',
    ],
    leaving: '',
    tags: [
      employmentTags.agency,
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.enterprise,
      employmentTags.gaming,
      employmentTags.highCollaboration,
      employmentTags.installations,
      employmentTags.photography,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.social,
      employmentTags.tenacity,
      employmentTags.ux,
    ],
  },
  {
    title: 'Cofounder & Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    company: 'Simple Coffee',
    dates: [
      [moment('20060501'), moment('20070801')],
    ],
    summary: 'Started Simple Coffee a trademark owned by Think Simple LLC. Think Simple was started by Joshua Gore, Steve Colletti, and myself. My second startup was filled with a new market, new requirements, yet solidified that candor and transparency is required for a good company to do good things. Branding, development, and product design were main responsibilities along with constant platform value adds.',
    bulletPoints: [
      'Focussed on #GiveFirst on behalf of unrepresented coffee farmers in other countries',
      'Paid farmers Fair Trade or higher',
      'Sponsored Chicago\'s Bike The Drive twice',
      'Branded product line based off who drank coffee, not coffee itself. This avoided natural, regional effects on specific product lines',
      'Built live inventory system linked to site and Paypal',
      'Designed logo, website, and all print',
      'Put industry titans on their toes by running on close to no resources while producing products they did not think were possible',
    ],
    leaving: '',
    tags: [
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.bizOps,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.enterprise,
      employmentTags.gaming,
      employmentTags.highCollaboration,
      employmentTags.installations,
      employmentTags.partner,
      employmentTags.photography,
      employmentTags.product,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.social,
      employmentTags.sports,
      employmentTags.startup,
      employmentTags.tenacity,
      employmentTags.ux,
    ],
  },
  {
    title: 'Cofounder & Creative Technologist',
    personas: [
      Persona.Developer,
      Persona.Founder,
      Persona.Maker,
    ],
    company: 'Off The Break',
    dates: [
      [moment('20020101'), moment('20040201')],
    ],
    summary: 'OTB started when Josh Gore observed that teenagers were spending hundreds a weekend to practive professional level paintball, and spending over a thousand dollars on "markers" to keep up with sponsored professionals. He took his engineering wit and accomponied it with my curiosity and desire to fix unbalances. From photography, product development, design, marketing, and the tech to build it all... This is where I fell in love with startups and the chance to build something new in a mostly "discovered" world.',
    bulletPoints: [
      'FIRST startup',
      'Focussed on #giveFirst for youth aspiring to become professionals',
      'Helped in product design',
      'Helped community building through forums, online gaming, open lines of communication',
      'Helped get product into most widely played paintball game on Steam',
      'Helped design and build booth for International Amatuer Open',
    ],
    leaving: '',
    tags: [
      employmentTags.analytics,
      employmentTags.animation,
      employmentTags.bizOps,
      employmentTags.college,
      employmentTags.design,
      employmentTags.devBackend,
      employmentTags.devFrontend,
      employmentTags.devFullstack,
      employmentTags.devOps,
      employmentTags.gaming,
      employmentTags.highCollaboration,
      employmentTags.installations,
      employmentTags.photography,
      employmentTags.rd,
      employmentTags.selfDiscipline,
      employmentTags.social,
      employmentTags.sports,
      employmentTags.startup,
      employmentTags.tenacity,
      employmentTags.youth,
      employmentTags.ux,
    ],
  },
];
