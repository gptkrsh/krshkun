import { ConfigurationSyntax } from './config'
import { Component } from './component'

export class Section {
  config: ConfigurationSyntax
  components: Component[]
  container: (content: string) => string

  constructor (config: ConfigurationSyntax) {
    this.config = config
    this.components = []
    this.container = (content) => `<div>\n${content}\n</div>`
  }

  compile (): string {
    const components: string[] = []

    this.components.forEach((component) => {
      components.push(component.compile())
    })

    return this.container(components.join('\n'))
  }
}
