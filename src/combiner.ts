import { config } from './config'
import { Header } from './sections/header'
import { Hero } from './sections/hero'

export function combine (): string {
  const sectionClasses = [new Header(config), new Hero(config)]
  const sections: string[] = []

  sectionClasses.forEach(section => {
    sections.push(section.compile())
  })

  return sections.join(config.other.sectionSeparator)
}
