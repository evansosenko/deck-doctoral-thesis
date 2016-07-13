'use strict'

window.WebFontConfig = {
  google: {
    families: [
      'Lato::latin',
      'Source+Sans+Pro:400,300,600,700:latin'
    ]
  }
};

;(function (d) {
  var el = d.createElement('script')
  var s = d.scripts[0]
  el.async = 1
  el.src = 'https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.24/webfontloader.js'
  s.parentNode.insertBefore(el, s)
})(document)
