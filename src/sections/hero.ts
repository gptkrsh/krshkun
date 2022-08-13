import { ConfigurationSyntax } from '../library/config'
import { Section } from '../library/section'
import { BulletComponent } from '../components/bullets'
import { HeroImageComponent } from '../components/heroImage'

export class Hero extends Section {
  constructor (config: ConfigurationSyntax) {
    super(config)

    this.container = (content) => `<table align="center">\n${content}\n</table>`

    this.components = [
      new BulletComponent(config.bullets),
      new HeroImageComponent(config.assets.hero)
    ]
  }
}
