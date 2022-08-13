import { Component } from '../library/component'

export class BulletComponent extends Component {
  private bullets: string[]

  constructor (bullets: string[]) {
    super()

    this.bullets = bullets
  }

  private template (bullets: string[]): string {
    return `<tr> <td> <ul align="left" width="40%">\n<li>${bullets.join('</li>\n<li>')}</li>\n</ul> </td> </tr>`
  }

  compile (): string {
    return this.template(this.bullets)
  }
}
