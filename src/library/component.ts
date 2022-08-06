export interface ComponentConfig {
  baseUrl: string
}

export class Component {
  config: ComponentConfig;

  constructor(config: ComponentConfig) {
    this.config = config
  }

  compile(): string {
    return ''
  }
}
