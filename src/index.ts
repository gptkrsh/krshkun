import fs from 'fs'
import path from 'path'
import { combine } from './combiner'
import { config } from './config'

fs.writeFileSync(path.join(__dirname, config.core.baseUrl, 'README.MD'), combine())

console.log('Written README.MD')
