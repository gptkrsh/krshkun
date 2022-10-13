import path from 'node:path'
import GitHubProfileConfig from './types/config'

export const config: GitHubProfileConfig = {
  baseUrl: path.join(process.cwd()),
  username: 'krupalitrivedi'
}
