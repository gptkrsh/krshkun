export interface ConfigurationSyntax {
  core: {
    baseUrl: string
  }
  profile: {
    username: string
    name: string
  }
  assets: {
    bannerUrl: string
  }
  other: {
    sectionSeparator: string
  }
}
