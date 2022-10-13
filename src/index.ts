import { config } from './config'
import { GitHubProfile } from './lib/profile'

new GitHubProfile(config).write()
