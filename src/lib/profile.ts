import path from 'node:path'
import fs from 'node:fs/promises'
import GitHubProfileConfig from '../types/config'
import { Alpaca } from 'alpaca-logger'
import GitHubPlugin from '../plugins/github'
import GitHubProfilePlugin from './plugin'

export class GitHubProfile {
  config: GitHubProfileConfig
  private logger: Alpaca
  plugins: GitHubProfilePlugin[]

  constructor (config: GitHubProfileConfig) {
    this.config = config
    this.logger = new Alpaca({})
    this.plugins = [new GitHubPlugin(this)]
  }

  private async run (): Promise<string> {
    const buffer = await fs.readFile(path.join(this.config.baseUrl, 'TEMPLATE.README.MD'))

    const template = buffer.toString()

    const output = await this.overwriteTemplate(template)

    return output
  }

  private async overwriteTemplate (template: string) {
    let output = template

    for await (const plugin of this.plugins) {
      const constants = await plugin.getConstants()

      for await (const constant of constants) {
        output = output.replace(`@${constant[0]}`, `${constant[1]}`)

        this.logger.log('debug', `doing variable: @${constant[0]}`)
      }
    }

    return output
  }

  public async write () {
    await fs.writeFile(
      path.join(this.config.baseUrl, 'README.MD'),
      await this.run()
    )

    this.logger.log('success', 'written readme')
  }
}
