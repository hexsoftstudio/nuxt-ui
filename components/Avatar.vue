<template>
  <div class="avatar-container">
    <div
      v-for="(avatar, index) in avatars"
      :key="index"
      class="avatar"
      :class="{ 'avatar--squeeze-right': isSqueeze }"
    >
      <img
        :src="avatar.image"
        :alt="avatar.alt"
        class="avatar__photo"
        :class="{
          'avatar__photo--border': isBorder,
        }"
      />
      <span v-if="avatar.notification" class="avatar__notification">
        {{ avatar.notification }}
      </span>
    </div>
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
    isSqueeze: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBorder: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
