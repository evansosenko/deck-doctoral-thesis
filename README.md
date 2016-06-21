# Physics Doctoral Thesis Defense

[![GitHub release](https://img.shields.io/github/release/evansosenko/deck-doctoral-thesis.svg)](https://github.com/evansosenko/deck-doctoral-thesis/releases)
[![GitHub license](https://img.shields.io/badge/license-CC--BY--SA--4.0-blue.svg)](./LICENSE.txt)
[![David](https://img.shields.io/david/evansosenko/deck-doctoral-thesis.svg)](https://david-dm.org/evansosenko/deck-doctoral-thesis)
[![David](https://img.shields.io/david/dev/evansosenko/deck-doctoral-thesis.svg)](https://david-dm.org/evansosenko/deck-doctoral-thesis#info=devDependencies)
[![Travis](https://img.shields.io/travis/evansosenko/deck-doctoral-thesis.svg)](https://travis-ci.org/evansosenko/deck-doctoral-thesis)

> Built from [makenew/deck-bespoke.js](https://github.com/makenew/deck-bespoke.js).

[![wercker status](https://app.wercker.com/status/6c9d5c4e1baa5e9460380c486f641ed5/m "wercker status")](https://app.wercker.com/project/bykey/6c9d5c4e1baa5e9460380c486f641ed5)

## Description

Spin and valley physics in two dimensional systems:
Graphene and superconducting transition metal dichalcogenides.

## Quickstart

```
$ git clone https://github.com/evansosenko/deck-doctoral-thesis.git
$ cd deck-doctoral-thesis
$ npm install
$ npm start
```

## Building and Development

### Source Code

The [deck-doctoral-thesis source] is hosted on GitHub.
Clone the project with

```
$ git clone https://github.com/evansosenko/deck-doctoral-thesis.git
```

[deck-doctoral-thesis source]: https://github.com/evansosenko/deck-doctoral-thesis

### Requirements

You will need [Node.js] with [npm].

Install the development dependencies with

```
$ npm install
```

[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/

#### Updating requirements

Requirements are version-locked to ensure consistent deploys.

To use the newest allowed Node packages,
or after updating any package versions in `package.json`,
update and stage `npm-shrinkwrap.json` with

```
$ npm update
$ npm shrinkwrap --dev
$ git add npm-shrinkwrap.json
```

### Tasks

Primary development tasks are defined under `scripts` in `package.json`
and available via `npm run-script`.
View them with

```
$ npm run
```

#### Production Build

Lint, test, generate, and optimize the production build to `public` with

```
$ npm run dist
```

#### Deploy to GitHub Pages

Build and deploy to GitHub Pages with

```
$ npm run deploy
```

The following environment variables can be set to customize the deploy:
`DEPLOY_REPO`, `DEPLOY_BRANCH`, `DEPLOY_NAME`, and `DEPLOY_EMAIL`.

##### Deploy from wrecker

Create a new wercker SSH key with the name `DEPLOY`,
add it to a new wercker deploy step,
and add it to the GitHub repository as a deploy key with write access.

#### Brunch

[Brunch] is responsible for the development cycle
and the production build.

Start a local Brunch development server with

```
$ npm start
```

If installed globally, `brunch` may be invoked directly.
View available commands with

```
$ brunch
```

#### gulp

Linting, deployment, and optimization is handled by [gulp].

In a separate window, use gulp to watch for changes
and lint HTML, JavaScript, and Sass files with

```
$ npm run watch
```

If installed globally, `gulp` may be invoked directly.
View available commands with

```
$ gulp --tasks
```

[Brunch]: http://brunch.io/
[gulp]: http://gulpjs.com/

## Tips for Deck Makers

### Bespoke.js

The [Bespoke.js GitHub page] covers how to make a deck.

Put slides in `app/partials/slides.static.hbs`, e.g.,

```html
<section>Slide 1</section>
<section>Slide 2</section>
<section>Slide 3</section>
```

[Bespoke.js GitHub page]: https://github.com/bespokejs/bespoke

### Plugins, Themes, and Libraries

- Install plugins, themes, and any other front end dependencies,
  e.g., JavaScript modules, Sass libraries, fonts, etc.,
  with `npm i --save`.
- Use JavaScript modules directly with `import`.
- Bespoke.js is configured in `app/modules/deck.js`.
- The `node_modules` directory exists in the Sass include path
  via the setting in `brunch-config.coffee`.
- Use `app/styles/main.scss` as the entry point for your styles.
- All other assets may be placed under `app/assets`.
- Wrap asset paths referenced in your markup
  with `DIGEST` for cache busting support.

### Meta Data

Meta data is defined in `app/index.static.hbs`.

- Nil values are indicated by a `~`.
  Nil fields never generate a meta tag.
  Fields which are Nil by default are generally optional.
- The `image`, `audio`, and `video` fields must be given
  as a fully qualified url.
  The recommended way to specify this value is with `DIGEST`, e.g.,
  assuming `app/assets/images/logo.png` exists,
  use `image: DIGEST(/images/logo.png)`.
- Instead of the `video` field, you may specify a `youtube` video id.
- The `twitter` fields are used for [Twitter Cards], but you must
  enable them for your domain with Twitter first.

[Twitter Cards]: https://dev.twitter.com/cards/

## Contributing

Please submit and comment on bug reports and feature requests.

To submit a patch:

1. Fork it (https://github.com/evansosenko/deck-doctoral-thesis/fork).
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Make changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin my-new-feature`).
6. Create a new Pull Request.

## License

<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
  <img alt="Creative Commons License"
       src= "https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
       style="border-width:0"></a><br>
<span>deck-bespoke.js</span> by
<a href="https://evansosenko.com" rel="cc:attributionURL">
  Evan Sosenko
</a>
is licensed under a
<a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">
  Creative Commons Attribution-ShareAlike 4.0 International License
</a>.<br>
Based on a work at
<a href="https://github.com/evansosenko/deck-doctoral-thesis"
   rel="dct:source">
   https://github.com/evansosenko/deck-doctoral-thesis
</a>.

Some content may be licensed under other terms where noted.

## Warranty

This software is provided "as is" and without any express or
implied warranties, including, without limitation, the implied
warranties of merchantibility and fitness for a particular
purpose.
