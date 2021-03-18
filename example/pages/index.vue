<template>
  <div>
    <Copyright />
    <Avatar :avatars="avatars" />
    <Cart count='5' />
    <Ratings :stars="stars" />
    <SocialMedia :title="socialmedia.title" :socialmedia="socialmedia.media" />
    <User />
  </div>
</template>

<script>
import Copyright from "../../components/Copyright.vue";
import Avatar from "../../components/Avatar.vue";
import Cart from "../../components/Cart.vue";
import Ratings from "../../components/Ratings.vue";
import SocialMedia from "../../components/SocialMedia.vue";
import User from "../../components/User.vue";

export default {
  name: 'Home',
  components: {
    Copyright,
    Avatar,
    Cart,
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
