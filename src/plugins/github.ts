import { Octokit } from 'octokit'
import GitHubProfilePlugin from '../lib/plugin'
import { GitHubProfile } from '../lib/profile'
import { Constant } from '../types/constants'
import { numberFormatter } from '../util'

export default class GitHubPlugin extends GitHubProfilePlugin {
  octokit: Octokit

  constructor (profile: GitHubProfile) {
    super(profile)

    this.octokit = new Octokit()
  }

  async getConstants () {
    const { data } = await this.octokit.rest.users.getByUsername({
      username: this.profile.config.username
    })

    const constants: Constant[] = [
      ['name', `${data.name}`],
      ['github.username', `${data.login}`],
      ['github.bio', `${data.bio}`],
      ['github.website', `${data.blog}`],
      ['github.company', `${data.company}`],
      ['github.location', `${data.location}`],
      ['github.repos.number', `${numberFormatter(data.public_repos)}`],
      ['github.followers', `${numberFormatter(data.followers)}`]
    ]

    return constants
  }
}
