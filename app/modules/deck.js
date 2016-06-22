import bespoke from 'bespoke'
import classes from 'bespoke-classes'
import hash from 'bespoke-hash'
import keys from 'bespoke-keys'
import touch from 'bespoke-touch'

const plugins = [
  classes(),
  hash(),
  keys(),
  touch()
]

export default (element) => {
  bespoke.from(element, plugins)
}
