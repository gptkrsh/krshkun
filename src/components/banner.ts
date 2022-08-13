import { Component } from '../library/component'

export class BannerComponent extends Component {
  private banner : { path: string, href: string }
  private name: string

  constructor (banner : { path: string, href: string }, name: string) {
    super()

    this.banner = banner
    this.name = name
  }

  private template (banner : { path: string, href: string }, name: string): string {
    return `<p><a href="${banner.href}"><img alt="Welcome to ${name}'s github profile" src="${banner.path}" height="60%" /></a></p>`
  }

  compile (): string {
    return this.template(this.banner, this.name)
  }
}
