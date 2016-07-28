const Handlebars = require('handlebars')

exports.config = {
  npm: {
    styles: {
      'sanitize.css': ['sanitize.css']
    }
  },

  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },

  server: {
    hostname: '0.0.0.0'
  },

  overrides: {
    production: {
      plugins: {
        postcss: {
          processors: [
            require('autoprefixer'),
            require('cssnano')
          ]
        }
      }
    }
  },

  plugins: {
    digest: {
      prependHost: {
        production: '/deck-doctoral-thesis'
      },
      referenceFiles: /\.(css|html|js)$/
    },

    postcss: {
      processors: [
        require('autoprefixer')
      ]
    },

    sass: {
      options: {
        includePaths: ['node_modules']
      }
    },

    static: {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true,
            helpers: {
              fitvals (context, block) {
                const vals = context.values[block.hash.fit]
                const vars = context.vars
                const units = context.units

                let valstrs = ''
                Object.keys(vals).forEach((k) => {
                  valstrs += `<li>
                    \\( ${vars[k]} = ${vals[k]} \\: ${units[k]} \\)
                    </li>`
                })

                return new Handlebars.SafeString(valstrs)
              },
              cite (context, block) {
                const ref = context[block.hash.id]
                const authors = Handlebars.Utils.escapeExpression(ref.authors)
                const url = Handlebars.Utils.escapeExpression(ref.url)
                const paper = Handlebars.Utils.escapeExpression(ref.paper)
                return new Handlebars.SafeString(
                  `<cite>${authors}, <a href="${url}">${paper}</a>.</cite>`
                )
              },
              join (context, block) {
                return context.join(block.hash.delimiter)
              },
              updated_time () {
                return new Date().toISOString()
              }
            }
          }
        })
      ]
    }
  }
}
