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
  assets: {
    bannerUrl: 'assets/Banner.png'
  },
  other: {
    sectionSeparator: '\n'
  }
}
