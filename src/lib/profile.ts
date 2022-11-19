import path from 'node:path'
import fs from 'node:fs/promises'
import GitHubProfileConfig from '../types/config'
import GitHubPlugin from '../plugins/github'
import GitHubProfilePlugin from './plugin'
import { render } from 'mustache'

import { Alpaca } from 'alpaca-logger'

export class GitHubProfile {
  config: GitHubProfileConfig
  private logger: Alpaca
  plugins: GitHubProfilePlugin[]

  constructor (config: GitHubProfileConfig) {
    this.config = config
    this.logger = new Alpaca({})
    this.plugins = [new GitHubPlugin(this)]
  }

  async write (): Promise<void> {
    const buffer = await fs.readFile(path.join(this.config.baseUrl, 'README.mustache'))

    const template = buffer.toString()

    await fs.writeFile(
      path.join(this.config.baseUrl, 'README.MD'),
      render(template, await this.getConstants())
    )

    this.logger.log('success', 'Written README.md')
  }

  private async getConstants () {
    const views: { [x: string]: any } = {}

    for await (const plugin of this.plugins) {
      const constants = await plugin.getConstants()

      for await (const constant of constants) {
        views[constant[0]] = constant[1]
      }
    }

    return views
  }
}
