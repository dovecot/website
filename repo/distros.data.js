import fs from 'fs'
import YAML from 'yaml'

export default {
  load() {
    const data = fs.readFileSync('./data/distros.yaml', 'utf8')
    return YAML.parse(data)
  }
}
