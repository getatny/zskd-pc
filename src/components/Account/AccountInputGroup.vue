<template>
  <div id="input-group">
    <label :for="labelFor">{{ text }}</label>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'AccountInputGroup',
    props: {
      labelFor: '',
      text: ''
    }
  }
</script>

<style scoped lang="stylus">
  #input-group {
    width 50%
    float left
    box-sizing border-box

    label {
      display block
      margin-bottom 10px
      font-size 15px
      padding-left 30px
    }
  }
</style>
