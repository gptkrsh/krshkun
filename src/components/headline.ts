import { Component } from '../library/component'

export class HeadlineComponent extends Component {
  name: string

  constructor (name: string) {
    super()

    this.name = name
  }

  template (name: string): string {
    return `<h1>${name}</h1>`
  }

  compile (): string {
    return this.template(this.name)
  }
}
