<template>
  <div class="avatar">
    <img
      v-for="(avatar, index) in avatars"
      :key="index"
      :src="avatar.imagesrc"
      :alt="avatar.alt"
      :class="avatar.class"
    />
    <span
      v-for="(avatar, index) in avatars"
      :key="index"
      class="avatar__notification"
    >
      {{ avatar.notification }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    avatars: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
}
</script>
