<template>
  <div class="home">
    <Hero :hero="hero" />
    <div>
      <User />
      <Avatar :avatars="avatars" />
      <Cart count='5' />
      <Ratings :stars="stars" />
      <SocialMedia :title="socialmedia.title" :socialmedia="socialmedia.media" />
      <SimpleCard :cards="homes" />
      <Copyright />
    </div>
  </div>
</template>

<script>
import Copyright from "../../components/Copyright.vue";
import Avatar from "../../components/Avatar.vue";
import Cart from "../../components/Cart.vue";
import Hero from "../../components/Hero.vue";
import Ratings from "../../components/Ratings.vue";
import SimpleCard from "../../components/Cards/Simple.vue";
import SocialMedia from "../../components/SocialMedia.vue";
import User from "../../components/User.vue";

export default {
  name: 'Home',
  components: {
    Copyright,
    Avatar,
    Cart,
    Hero,
    Ratings,
    SimpleCard,
    SocialMedia,
    User,
  },
  data() {
    return {
      avatars: [
        {
          image: 'http://hexsoftstudio.com/images/avatar/avatar2.png',
          alt: 'Avatar 1',
          notification: '10',
        },
        {
          image: 'http://hexsoftstudio.com/images/avatar/avatar3.png',
          alt: 'Avatar 2',
          notification: '20',
        },
        {
          image: 'http://hexsoftstudio.com/images/avatar/avatar4.png',
          alt: 'Avatar 3',
          notification: '30',
        },
      ],
      homes: [
        {
          image: 'https://hexsoftstudio.github.io/demo/img/gal-1.jpeg',
          title: 'Luxury homes 1 ',
          text: 'Lorem ipsum dolor sit amet  consectetur consectetur adipisicing elit. Adipisci, laboriosam sit. Modi fuga necessitatibus animi!Modi fuga necessitatibus animi! Modi fuga necessitatibus animi! Modi fuga necessitatibus animi!',
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
      hero: {
        img: 'https://source.unsplash.com/weekly?water',
        poster: 'https://source.unsplash.com/weekly?water',
        mp4: 'https://hexsoftstudio.github.io/demo/video/170216A_142_WomanWatchingWaterfall2_1080p.mp4',
        webm: 'https://hexsoftstudio.github.io/demo/video/video/170216A_142_WomanWatchingWaterfall2_1080p.webm',
      },
    }
  },
}
</script>
