<template>
  <div v-if="loading" class="loading-page">
    <div class="centered">
      <!-- <video autoplay loop muted inline>
        <source src="~/assets/images/Logomark-animated.mp4" width="100%" alt="" />
      </video> -->
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
.loading-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 10001;
}
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>