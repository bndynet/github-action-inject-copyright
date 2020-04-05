import {echo, find} from 'shelljs'
import {writeFileSync, readFileSync} from 'fs'

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'))

export function injectCopyright(distFolder?: string): void {
  if (!distFolder) {
    distFolder = 'dist'
  }
  echo(`⚑ copyright injecting in ${distFolder} directory...`)
  for (const file of find(distFolder)) {
    if (file.endsWith('.js') || file.endsWith('.css')) {
      echo(`-> ${file}...`)

      let data = readFileSync(file, 'utf8')
      const copyright = `/**!
   * ${pkg.name} v${pkg.version}
   * ${pkg.repository.url || ''}
   *
   * Copyright (c) ${new Date().getFullYear()} ${
        (typeof pkg.author === 'string' ? pkg.author : pkg.author.name) || ''
      }
   * Released under the ${pkg.license || ''} license
   */
  `
      data = `${copyright}${data}`
      writeFileSync(file, data)
    }
  }
  echo(`✔ done at ${new Date().toISOString()}`)
}
