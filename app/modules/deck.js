import bespoke from 'bespoke'
import keys from 'bespoke-keys'

const plugins = [
  keys()
]

export default (element) => {
  bespoke.from(element, plugins)
}
