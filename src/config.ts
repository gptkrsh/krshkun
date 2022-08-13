import { ConfigurationSyntax } from './library/config'

export const config: ConfigurationSyntax = {
  core: {
    baseUrl: '../'
  },
  profile: {
    username: 'krshkodes',
    name: 'Krish Gupta',
    // Twitter should be a username, while everything else a URL
    links: {
      twitter: 'krshkodes',
      linkedin: 'https://www.linkedin.com/in/krshkodes'
    }
  },
  headline: "Do you think CSS is hard? I'm here to help 🙋🏻‍♂️",
  bio: 'My hobby is making CSS easier through small pieces of content on Twitter 🐦 CSS is easy and it seems hard to people, why? Because it is not taught from the bottom up. I am looking forward to make CSS easier by bringing up resources that teach core concepts',
  bullets: [
    '🎓 High School Freshmen',
    '👨🏻‍💻 Program Managar, Community Lead and Lead Ambassador at <a href="https://semasoftware.com/">Sema</a> & DevREL Intern at <a href="https://eduhubcommunity.tech/">EduHub</a>',
    '💖 In love with CSS and all things around CSS!',
    '💭 Ask me about CSS, Open Source, Community Building and JavaScript'
  ],
  assets: {
    banner: {
      path: 'assets/Banner.png',
      href: 'https://twitter.com/krshkodes'
    },
    hero: {
      path: 'assets/Hero.png',
      href: 'https://twitter.com/krshkodes/status/1546146271089422336',
      alt: 'Twitter Thread on resources to Learn and Master CSS from its core'
    }
  },
  other: {
    sectionSeparator: '\n'
  }
}
