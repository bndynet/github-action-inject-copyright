import * as core from '@actions/core'
import {injectCopyright} from './inject-copyright'

async function run(): Promise<void> {
  try {
    const folder: string = core.getInput('dist')
    core.debug(`Your dist folder is ${folder || 'dist'}...`) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    injectCopyright(folder)

    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
