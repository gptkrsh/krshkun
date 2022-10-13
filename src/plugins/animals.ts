import GitHubProfilePlugin from '../lib/plugin'
import { Constant } from '../types/constants'

export default class GitHubPlugin extends GitHubProfilePlugin {
  async getConstants () {
    const constants: Constant[] = [
    ]

    return constants
  }
}
