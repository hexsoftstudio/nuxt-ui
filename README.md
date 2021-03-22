# nuxt-ui

[![npm (scoped)](https://img.shields.io/npm/v/@hexsoftstudio/nuxt-ui.svg)](https://github.com/hexsoftstudio/nuxt-ui)

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

### Samples

```html
<template>
  <div>
    <User />
    <Avatar :avatars="avatars" />
    <Cart count='5' />
    <Ratings :stars="stars" />
    <SocialMedia :title="socialmedia.title" :socialmedia="socialmedia.media" />
    <Copyright />
  </div>
</template>

<script>
import Avatar from '@hexsoftstudio/nuxt-ui/components/Avatar.vue'
import Cart from '@hexsoftstudio/nuxt-ui/components/Cart.vue'
import Copyright from '@hexsoftstudio/nuxt-ui/components/Copyright.vue'
import Ratings from '@hexsoftstudio/nuxt-ui/components/Ratings.vue'
import SocialMedia from '@hexsoftstudio/nuxt-ui/components/SocialMedia.vue'
import User from '@hexsoftstudio/nuxt-ui/components/User.vue'

export default {
  name: 'Home',
  components: {
    Avatar,
    Cart,
    Copyright,
    Ratings,
    SocialMedia,
    User,
  },
  data() {
    return {
      avatars: [
        {
          imagesrc: 'http://hexsoftstudio.com/images/avatar/avatar2.png',
          alt: 'Avatar 1',
          notification: '10',
        },
        {
          imagesrc: 'http://hexsoftstudio.com/images/avatar/avatar3.png',
          alt: 'Avatar 2',
          notification: '20',
        },
        {
          imagesrc: 'http://hexsoftstudio.com/images/avatar/avatar4.png',
          alt: 'Avatar 3',
          notification: '30',
        },
      ],
      stars: [
        {img: './icons/sprite.svg#icon-star'},
        {img: './icons/sprite.svg#icon-star'},
        {img: './icons/sprite.svg#icon-star'},
        {img: './icons/sprite.svg#icon-star'},
        {img: './icons/sprite.svg#icon-star'},
      ],
      socialmedia: {
        title: 'Follow Us On',
        media: [ 'facebook', 'google', 'instagram', 'linkedin', 'pinterest', 'twitter', 'vimeo', 'youtube'],
      },
    }
  },
}
</script>
```

For examples see [https://hexsoftstudio.github.io/nuxt-ui/](https://hexsoftstudio.github.io/nuxt-ui/)
