<template>
  <section class="card-container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card-simple">
      <img
        :src="card.image"
        :alt="card.alt"
        class="card-simple__image"
      />
      <div class="card-simple__text">
      <h4>{{ card.title }}</h4>
      <p>{{ card.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SimpleCard',
  props: {
    cards: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
