import moment from 'moment'

const dateFormat = 'MMM YYYY'

const pdf = 'http://bit.ly/michael-minor-resume-githubio'

const email = 'me@pixelbacon.com'

const employmentHistory = [
  {
    'title': 'Cofounder & Creative Technologist',
    'company': 'Phood',
    'companyUrl': 'http://orderPhood.com?ref=michael.minor',
    'dateStart': moment('20180801'),
    'dateEnd': moment(),
    'summary': 'Aiming at sustainable industry practices while incorporating start-up frequency changes. Applying creative and technical skills for low effort high reward during the founding days. Add value to platform that makes the company unique in culture, ethics, without slowing down growth or funding.'
  },
  {
    'title': 'Chief Technology Officer',
    'company': 'Players Health',
    'companyUrl': 'http://playershealth.com',
    'dateStart': moment('20171001'),
    'dateEnd': moment('20180319'),
    'summary': 'Sherpa from prototype/1st time startup into production mode for measurable value for customer, investor, and employees. Using all the skills in the toolset to guide through cadence, valued users vs value to users, industry standards. Currently going through TechStars 2018 in Boulder, CO. After years of wanting a mission to give the platform away, finally achieved.'
  },
  {
    'title': 'Senior Creative Technologist',
    'company': 'We Are Unlimited/Critical Mass',
    'companyUrl': 'http://bit.ly/michael-minor-we-are-unlimited',
    'dateStart': moment('20170101'),
    'dateEnd': moment('20170801'),
    'summary': 'Style guides for coding and asset production, introducing new frameworks and build tools, Creative Director on games and responsive designs, tech stack for social strategy, modernizing 7 year old stacks, being on the governance for Omnicomm for how we spend big bucks with Amazon... Every hat.'
  },
  {
    'title': 'Interim CTO/Chief Creative Technologist',
    'company': 'Player\'s Health',
    'companyUrl': 'http://bit.ly/michael-minor-players-health',
    'dateRange': 'Nov 2014 - Apr 2015 & Oct 2015 - Feb 2016',
    'summary': 'A company truly doing good. Attempting to digitize every child athlete\'s health record. Interviewed for developer, hired as CTO and helped refactor data structures and split the front end from the backend. They went on to win Google\'s international Demo Day Award.'
  },
  {
    'title': 'Senior Creative Technologist',
    'company': 'Doejo',
    'companyUrl': 'http://bit.ly/michael-minor-doejo',
    'dateStart': moment('20130401'),
    'dateEnd': moment('20141001'),
    'summary': 'Co-founded by Darren Marshall who I previously mentored, Doejo needed mending in process and fewer cooks. With thick stripes, I was able to help reposition relations with clients to a better standing, mentor developers and project managers from junior to senior.'
  },
  {
    'title': 'Creative Technologist',
    'company': 'Leo Burnett/Arc World Wide',
    'companyUrl': 'http://bit.ly/michael-minor-leo-burnett',
    // 'dateRange': 'Nov 2009 - Apr 2013 (3 yrs 6 mos)',
    'dateStart': moment('20091101'),
    'dateEnd': moment('20130401'),
    'summary': 'Lead front end engineer turned mad scientist through a proper Creative Technology department. Alternative interfaces, interactive installations, etc... it was lovely and chaotic.'
  },
  {
    'title': 'Contract CT/Designer/Strategist/Ops',
    'company': 'Self-Employed',
    // 'dateRange': '2000 - Present (17+ yrs)',
    'dateStart': moment('19981001'),
    'dateEnd': moment(),
    'summary': 'Interactive development utilizing branding requirements with inherent goal to expand. Information architecture with a visual and promising form. Art Direction suited to brand guideline and audience. Cut throat visual agenda promising brand confidence before hands on experience. Serving large/medium/small agencies and companies, startups, \'mom-n-pop\', and individuals alike.'
  }
]

const linkedIn = 'https://bit.ly/michael-minor-linkedin-resume'

const linkedInLiteral = 'linkedin.com/in/WhyDoYouWork'

const myProcess = [
  'Think',
  'Sketch/Prototype',
  'Viability',
  'Play a video game or another zero consequence brain game',
  'Build/Test',
  'Launch (Perfect for now)',
  'Double Captain & Coke, in a tall, w/ lime'
]

const references = [
  {
    'name': 'Nathaniel Zola',
    'linkedIn': 'https://www.linkedin.com/in/nattyzola/',
    'title': 'Partner at Matchstick Ventures, Managing Director at Techstars',
    'company': 'Matchstick Ventures',
    'companyLink': 'https://www.matchstickventures.com/?ref=Michael.Minor'
  },
  {
    'name': 'Crystal Williams',
    'linkedIn': 'https://www.linkedin.com/in/crystalwilliams/',
    'title': 'Sr. Staff Web Architect',
    'company': 'Tesla Motors',
    'companyLink': 'https://www.tesla.com/?ref=Michael.Minor'
  },
  {
    'name': 'Julie Penner',
    'linkedIn': 'https://www.linkedin.com/in/juliepenner/',
    'title': 'Director',
    'company': 'Techstars',
    'companyLink': 'https://www.techstars.com?ref=Michael.Mino'
  },
  {
    'name': 'Michael Jacobs',
    'linkedIn': 'https://www.linkedin.com/in/michael-jacobs-91584547/?ref=Michael.Minor',
    'title': 'Cofounder and COO',
    'company': 'Ordermark',
    'companyLink': 'https://www.ordermark.com/?ref=Michael.Minor'
  },
  // {
  //   'name': 'Tyrre Burks',
  //   'linkedIn': 'https://www.linkedin.com/in/tyrre-burks-12a59237/',
  //   'title': 'CEO/Founder',
  //   'company': 'Players Health',
  //   'companyLink': 'http://www.playershealth.com?ref=michael.minor'
  // },
  // {
  //   'name': 'Michael Lanyon',
  //   'linkedIn': 'https://www.linkedin.com/in/lanyonm/',
  //   'title': 'VP of Engineering',
  //   'company': 'Critical Mass',
  //   'companyLink': 'http://www.criticalmass.com?ref=michael.minor'
  // },
  {
    'name': 'Miles Green',
    'linkedIn': 'https://www.linkedin.com/in/milesgreen/',
    'title': 'Head of Creative Technology',
    'company': 'Haygarth',
    'companyLink': 'http://www.haygarth.co.uk/?ref=michael.minor'
  },
  {
    'name': 'Omari Miller',
    'linkedIn': 'http://www.linkedin.com/in/ojmiller/',
    'title': 'VP Creative Director',
    'company': 'Momentum Wordlwide',
    'companyLink': 'http://www.momentumww.com/?ref=michael.minor'
  },
  {
    'name': 'Darren Marshall',
    'linkedIn': 'https://www.linkedin.com/in/darrenmarshall/',
    'title': 'Managing Partner',
    'company': 'Doejo',
    'companyLink': 'http://www.doejo.com?ref=michael.minor'
  },
  {
    'name': 'Brandon Lee Cox',
    'linkedIn': 'https://www.linkedin.com/in/imheretomakeyoufamous/',
    'title': 'SVP, Executive Creative Director',
    'company': 'Leo Burnett',
    'companyLink': 'http://www.leoburnett.com/?ref=michael.minor'
  }
  // {
  //   'name': 'Chad Mirshak',
  //   'linkedIn': 'https://www.linkedin.com/in/chadmirshak/',
  //   'title': 'Creative Director, Game Developer',
  //   'company': 'SapientRazorfish',
  //   'companyLink': 'http://www.sapientrazorfish.com/?ref=michael.minor'
  // }
]

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
  'Node, Express, GraphQL, Waterline, Etc',
  'Strategy, Viability, Sustainability',
  'UX Design, Analytics, Direction',
  'Legos... Seriously'
]

const todos = [
  [false, 'Go back to TechStars: Boulder with my own company'],
  [false, 'Play a major role in a successful company that will affect my grand children, and every one elses for that matter'],
  [false, 'Obtain said Grandchildren'],
  [false, 'Purchase BMW motor cyle from the 70\'s'],
  [false, 'Skydive... in my birthday suit']
]

export default {
  dateFormat,
  email,
  employmentHistory,
  linkedIn,
  linkedInLiteral,
  pdf,
  myProcess,
  references,
  technicalities,
  todos
}
