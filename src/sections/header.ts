import { BannerComponent } from '../components/banner'
import { HeadlineComponent } from '../components/headline'
import { ConfigurationSyntax } from '../library/config'
import { Section } from '../library/section'

export class Header extends Section {
  constructor (config: ConfigurationSyntax) {
    super(config)

    this.container = (content) => `<div align="center">\n${content}\n</div align="center">`

    this.components = [
      new BannerComponent(config.assets.bannerUrl, config.profile.name, config.core.baseUrl),
      new HeadlineComponent(config.profile.name)
    ]
  }
}
