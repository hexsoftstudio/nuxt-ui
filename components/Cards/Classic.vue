<template>
  <section class="card-container">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card-classic">
      <h4>{{ card.title }}</h4>
      <img
        :src="card.image"
        :alt="card.alt"
        class="card-classic__image"
      />
      <p>{{ card.text }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ClassicCard',
  props: {
    cards: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
