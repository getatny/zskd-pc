<template>
  <div id="basic-page">
    <transition name="zoom">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'FramePage'
  }
</script>

<style scoped lang="stylus">
  #basic-page {
    background: #ebece7
    position relative
    top 0
    left 0
    width 100vw
    height 100vh
    overflow hidden
  }

  .zoom-enter-active {
    animation zoom .35s reverse
  }

  .zoom-leave-active {
    animation zoom .35s
  }

  @keyframes zoom {
    70% {
      transform scale(0.8)
      opacity .3
    }

    100% {
      transform scale(0)
      opacity 0
    }
  }
</style>
