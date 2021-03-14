# nuxt-ui

[![npm (scoped)](https://img.shields.io/npm/v/@hexsoftstudio/theme-default.svg)](https://github.com/hexsoftstudio/theme-default)

Nuxt Ui components

### Install ###
```
$ yarn add @hexsoftstudio/theme-default
$ yarn add @hexsoftstudio/next-ui
```

```
in nuxt.config.js, add

css: [
    '@hexsoftstudio/theme-default/styles/bulma.css'
],

...

components: true,

...

buildModules: [
'@hexsoftstudio/nuxt-ui'
],

```

### Usage ###

## Sample template

```html
<template>
    <Copyright company="Hexsoft Studio"/>
</template>

<script>
import Copyright from '@hexsoftstudio/nuxt-ui/components/Copyright.vue'

export default {
  name: 'Home',
  components: {
    Copyright,
  },
}
</script>
```

For examples see [https://hexsoftstudio.github.io/nuxt-ui/](https://hexsoftstudio.github.io/nuxt-ui/)

