<template>
  <div class="home">
    <nav></nav>
    <header>
    </header>
    <Hero :hero="hero" />
    <main>
      <SimpleCard :cards="homes" />
      <ClassicCard :cards="homes" />
    </main>
    <section
      style="display: flex; justifyContent: center; alignContent:center; margin: .5rem;">
      <div style="width: 30rem; textAlign: center">
        <ProgressBar
          :ltext="progressbar.ltext"
          :barwidth="progressbar.barwidth"
          :rtext="progressbar.rtext" />
        <Ratings :ratings='5' />
      </div>
    </section>
    <section>
      <User />
      <Cart count='10' />
      <Avatar :avatars="avatars" />
    </section>
    <section
      style="display: flex; justifyContent: center; alignContent:center; margin: .5rem;">
      <SocialMedia :title="socialmedia.title" :socialmedia="socialmedia.media" />
    </section>
    <footer>
      <Copyright />
    </footer>
  </div>
</template>

<script>
import Copyright from "../../components/Copyright.vue";
import Avatar from "../../components/Avatar.vue";
import Cart from "../../components/Cart.vue";
import Hero from "../../components/Hero.vue";
import ProgressBar from "../../components/ProgressBar.vue";
import Ratings from "../../components/Ratings.vue";
import SimpleCard from "../../components/Cards/Simple.vue";
import ClassicCard from "../../components/Cards/Classic.vue";
import SocialMedia from "../../components/SocialMedia.vue";
import User from "../../components/User.vue";

export default {
  name: 'Home',
  components: {
    Copyright,
    Avatar,
    Cart,
    Hero,
    ProgressBar,
    Ratings,
    ClassicCard,
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
          image: 'https://hexsoftstudio.github.io/demo/img/gal-2.jpeg',
          title: 'Luxury homes 1 ',
          text: 'Lorem ipsum dolor sit amet  consectetur consectetur adipisicing elit. Adipisci, laboriosam sit. Modi fuga necessitatibus animi!Modi fuga necessitatibus animi! Modi fuga necessitatibus animi! Modi fuga necessitatibus animi!',
        },
        {
          image: 'https://hexsoftstudio.github.io/demo/img/gal-3.jpeg',
          title: 'Luxury homes 2 ',
          text: 'Lorem ipsum dolor sit amet  consectetur consectetur adipisicing elit. Adipisci, laboriosam sit. Modi fuga necessitatibus animi!Modi fuga necessitatibus animi! Modi fuga necessitatibus animi! Modi fuga necessitatibus animi!',
        },
        {
          image: 'https://hexsoftstudio.github.io/demo/img/gal-2.jpeg',
          title: 'Luxury homes 3 ',
          text: 'Lorem ipsum dolor sit amet  consectetur consectetur adipisicing elit. Adipisci, laboriosam sit. Modi fuga necessitatibus animi!Modi fuga necessitatibus animi! Modi fuga necessitatibus animi! Modi fuga necessitatibus animi!',
        },
      ],
      progressbar: {
        ltext: 'score',
        barwidth: '90%',
        rtext: '100',
      },
      socialmedia: {
        title: 'Follow Us On',
        media: [ 'facebook', 'google', 'instagram', 'linkedin', 'pinterest', 'twitter', 'vimeo', 'youtube'],
      },
      hero: {
        img: 'https://source.unsplash.com/weekly?water',
        poster: 'https://source.unsplash.com/weekly?water',
        mp4: 'https://hexsoftstudio.github.io/demo/video/170216A_142_WomanWatchingWaterfall2_1080p.mp4',
        webm: 'https://hexsoftstudio.github.io/demo/video/170216A_142_WomanWatchingWaterfall2_1080p.webm',
        detail: {
          title: 'Waterfall',
          kicker: {
            link: 'https://www.videvo.net/video/panning-around-woman-watching-waterfall/5919/',
            text: 'Original video by kiril-videvo',
          },
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sed a optio expedita vero labore?',
          button: {
            text: 'Read More',
          },
        },
      },
    }
  },
}
</script>
