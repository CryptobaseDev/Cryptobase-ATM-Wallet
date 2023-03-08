import { ENV } from '../env'
import { AppConfig } from '../types/types'
import { edgeConfig } from './edgeConfig'
import { testConfig } from './testConfig'
import { cbatmConfig } from './cbatmConfig'

const configs = [edgeConfig, testConfig, cbatmConfig]
console.log(`ENV.APP_CONFIG:${ENV.APP_CONFIG}`)
const configName = ENV.APP_CONFIG ?? 'cryptobase'
let exportConfig: AppConfig = cbatmConfig

for (const c of configs) {
  if (c.configName === configName) {
    exportConfig = c
    break
  }
}
console.log(`config: ${exportConfig.appName} ${exportConfig.configName}`)
export const config = exportConfig
