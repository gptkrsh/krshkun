import { Constant } from '../types/constants'
import { GitHubProfile } from './profile'

export default class GitHubProfilePlugin {
  profile: GitHubProfile

  constructor (profile: GitHubProfile) {
    this.profile = profile
  }

  async getConstants (): Promise<Array<Constant>> {
    return []
  }
}
