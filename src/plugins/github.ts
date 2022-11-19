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
      ['ghName', `${data.name}`],
      ['ghUsername', `${data.login}`],
      ['ghUrl', `${data.html_url}`],
      ['ghBio', `${data.bio}`],
      ['ghSite', `${data.blog}`],
      ['ghCompany', `${data.company}`],
      ['ghLocation', `${data.location}`],
      ['ghRepoNumber', `${numberFormatter(data.public_repos)}`],
      ['ghFollowerCount', `${numberFormatter(data.followers)}`]
    ]

    return constants
  }
}
