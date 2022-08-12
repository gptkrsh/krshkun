export type links =
  | 'twitter'
  | 'github'
  | 'tumblr'
  | 'tiktok'
  | 'stackoverflow'
  | 'polywork'
  | 'linkedin'
  | 'codepen'
  | 'devpost'
  | 'facebook'
  | 'dribbble'
  | 'gitlab'
  | 'hackerearth'
  | 'hackerrank'
  | 'instagram'
  | 'kaggle'
  | 'leetcode'
  | 'pinterest'
  | 'reddit'

export type ConfigurationSyntax = {
  core: {
    baseUrl: string;
  };
  profile: {
    username: string;
    name: string;
    links?: {
      // eslint-disable-next-line no-unused-vars
      [key in links]?: string
    };
  };
  assets: {
    bannerUrl: string;
  };
  other: {
    sectionSeparator: string;
  };
}
