<template>
  <div>
    <User />
    <Avatar :avatars="data" />
    <Cart count='5' />
    <Ratings :stars="stars" />
    <SocialMedia :title="socialmedia.title" :socialmedia="socialmedia.media" />
    <SimpleCard :cards="data" />
    <Copyright />
  </div>
</template>

<script>
import Copyright from "../../components/Copyright.vue";
import Avatar from "../../components/Avatar.vue";
import SimpleCard from "../../components/Cards/Simple.vue";
import Cart from "../../components/Cart.vue";
import Ratings from "../../components/Ratings.vue";
import SocialMedia from "../../components/SocialMedia.vue";
import User from "../../components/User.vue";

export default {
  name: 'Home',
  components: {
    Copyright,
    Avatar,
    SimpleCard,
    Cart,
    Ratings,
    SocialMedia,
    User,
  },
  data() {
    return {
      data: [
        {
          image: 'http://hexsoftstudio.com/images/avatar/avatar2.png',
          alt: 'Avatar 1',
          notification: '10',
          title: 'Luxury homes',
          text: 'Lorem ipsum dolor sit amet  consectetur consectetur adipisicing elit. Adipisci, laboriosam sit. Modi fuga necessitatibus animi!Modi fuga necessitatibus animi! Modi fuga necessitatibus animi! Modi fuga necessitatibus animi!',
        },
        {
          image: 'http://hexsoftstudio.com/images/avatar/avatar3.png',
          alt: 'Avatar 2',
          notification: '20',
          title: 'Luxury homes',
          text: 'Lorem ipsum dolor sit amet  consectetur consectetur adipisicing elit. Adipisci, laboriosam sit. Modi fuga necessitatibus animi!Modi fuga necessitatibus animi! Modi fuga necessitatibus animi! Modi fuga necessitatibus animi!',
        },
        {
          image: 'http://hexsoftstudio.com/images/avatar/avatar4.png',
          alt: 'Avatar 3',
          notification: '30',
          title: 'Luxury homes',
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
    }
  },
}
</script>
