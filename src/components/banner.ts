import { Component } from '../library/component'

export class BannerComponent extends Component {
  bannerUrl: string
  name: string

  constructor (bannerUrl: string, name: string, baseUrl: string) {
    super()

    this.bannerUrl = bannerUrl
    this.name = name
  }

  template (bannerUrl: string, name: string): string {
    return `<img alt="Welcome to ${name}'s github profile" src="${bannerUrl}" />`
  }

  compile (): string {
    return this.template(this.bannerUrl, this.name)
  }
}
