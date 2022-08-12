import { config } from './config'
import { Header } from './sections/header'

export function combine (): string {
  const sectionClasses = [new Header(config)]
  const sections: string[] = []

  sectionClasses.forEach(section => {
    sections.push(section.compile())
  })

  return sections.join(config.other.sectionSeparator)
}
