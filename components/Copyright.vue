<template>
  <div class="footer__copyright">
    <span>© {{ copytext }} {{ text }} {{ abn }}</span>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  props: {
    company: {
      type: String,
      default: '',
    },
    abn: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: 'All Rights Reserved.',
    },
  },
  data() {
    return {
      year: 2021,
      copytext: '',
    }
  },
  mounted() {
    const space = ' '
    const d = new Date()
    this.year = d.getFullYear()
    this.copytext = this.year + (this.company ? space : '') + this.company + '.'
  },
}
</script>
