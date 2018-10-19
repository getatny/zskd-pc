<template>
  <input :type="type" :name="name" :placeholder="placeHolder"/>
</template>

<script>
  export default {
    name: 'RegisterInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: ''
      },
      placeHolder: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped lang="stylus">
  input {
    width: 100%
    height: 45px
    box-sizing border-box
    padding 10px 20px /*10px 40px*/
    border 1px solid #ccc
    box-shadow 0 5px 25px -10px #aaa
    border-radius 22.5px
    margin-bottom 15px
    font-size 15px
    letter-spacing 2px
    color #5a5c5b

    &::-webkit-input-placeholder {
      color: #c9c9c9
    }

    &:focus {
      border 1px solid #b6b7b2
    }
  }
</style>
