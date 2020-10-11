import {writeFileSync, readFileSync} from 'fs'
import {echo, cd, ls} from 'shelljs'
const pkg = JSON.parse(readFileSync('package.json', 'utf-8'))

export function injectCopyright(distFolder?: string): void {
  echo('⚑ copyright injecting...')
  cd(distFolder || 'dist')
  for (const file of ls('*.*')) {
    if (file.endsWith('.js') || file.endsWith('.css')) {
      echo(`-> ${file}...`)

      let data = readFileSync(file, 'utf8')
      const copyright = `/**!
   * ${pkg.name} v${pkg.version}
   * ${pkg.repository.url}
   *
   * Copyright (c) ${new Date().getFullYear()} ${pkg.author.name}
   * Released under the ${pkg.license} license
   */
  `
      data = `${copyright}${data}`
      writeFileSync(file, data)
    }
  }
  cd('../')
  echo(`✔ done at ${new Date().toISOString()}`)
}
