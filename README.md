# Hi TECH APP Store

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).

# Branching

- First Case of all create epic branch with that naming epic/issues/issue no ===> epic/issues/3
- Second Case if you need to create a task for an epic simple naming feature/issues/issue no ===> feature/issues/5
- Third Case if you need to work on any bug for bug naming should be hotfix/issues/issue no ===> hotfix/issues/4

- How we follow the merging process we have an master branch and development branch in our project. when start working on new epic it must to have create a new branch as a epic branch from develpment follow first case, After creating succusfully epic branch must to creat a feature branch that feature you have to start work. All work done in an feature branch when you create an apk and give it to QA and create a PR with epic after QA verification you have to be merge your feature with epic follow the same process when your full epic was not finish after finish all the epic tasks you have to Create an APK of epic and again give it to QA for verification and create a PR of epic with development branch. About the bug resolving you have to to create a branch if bug found in develpment simplete create branch with development follow case third when successfully fix your bug create PR with development. Bug found in Epic or Task same thing follow as mentioned with development.
