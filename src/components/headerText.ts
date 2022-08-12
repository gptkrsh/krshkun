import { Component } from '../library/component'

export class HeaderTextComponent extends Component {
  private headline: string
  private bio: string

  constructor (headline: string, bio: string) {
    super()

    this.headline = headline
    this.bio = bio
  }

  private template (headline: string, bio: string): string {
    return `<h1 style="margin: 0;">${headline}</h1>\n<p>${bio}</p>`
  }

  compile (): string {
    return this.template(this.headline, this.bio)
  }
}
