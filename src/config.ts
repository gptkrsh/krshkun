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
  assets: {
    bannerUrl: 'assets/Banner.png'
  },
  other: {
    sectionSeparator: '\n'
  }
}
