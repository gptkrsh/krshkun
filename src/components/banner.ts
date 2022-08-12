import { Component } from '../library/component'

export class BannerComponent extends Component {
  private bannerUrl: string
  private name: string

  constructor (bannerUrl: string, name: string, baseUrl: string) {
    super()

    this.bannerUrl = bannerUrl
    this.name = name
  }

  private template (bannerUrl: string, name: string): string {
    return `<img alt="Welcome to ${name}'s github profile" src="${bannerUrl}" height="60%" />`
  }

  compile (): string {
    return this.template(this.bannerUrl, this.name)
  }
}
