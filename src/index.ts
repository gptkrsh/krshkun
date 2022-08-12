import fs from 'fs'
import path from 'path'
import { combine } from './combiner'
import { config } from './config'
import prettify from 'html-prettify'

fs.writeFileSync(path.join(__dirname, config.core.baseUrl, 'README.MD'), prettify(combine()) + '\n')

console.log('Written README.MD')
