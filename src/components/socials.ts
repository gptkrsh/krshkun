import { links } from '../library/config'
import { badger } from '../util/badges'
import { Component } from '../library/component'

export class SocialsComponent extends Component {
  private badges: string[]

  // eslint-disable-next-line no-unused-vars
  constructor (name: string, links: { [key in links]?: string } | undefined) {
    super()

    if (!links) {
      this.badges = ['']
    } else {
      const entries = Object.values(links)
      const propertyNames = Object.keys(links)
      this.badges = []

      // @ts-ignore
      entries.forEach((link: string, index: number) => {
      // @ts-ignore
        this.badges.push(badger(propertyNames[index], link, name))
      })
    }
  }

  private template (badges: string[]): string {
    return `<p>${badges.join('\n')}</p>`
  }

  compile (): string {
    return this.template(this.badges)
  }
}
