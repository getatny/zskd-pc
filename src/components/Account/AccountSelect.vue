<template>
  <div class="select">
    <Select @on-change="changeData" v-model="selectItem">
      <Option v-for="item in list" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>

<script>
  export default {
    name: 'AccountSelect',
    props: {
      list: Array,
      value: Number
    },
    data() {
      return {
        selectItem: -1
      }
    },
    methods: {
      changeData() {
        this.$emit('input', this.selectItem)
      }
    },
    mounted() {
      this.selectItem = this.value
    }
  }
</script>

<style lang="stylus">
  .ivu-select-selection {
    border-radius 22.5px
    height 45px!important
    padding 8px 13px
    letter-spacing 2px
    box-sizing border-box
    color #5a5c5b
    margin-bottom 15px
    box-shadow 0 5px 25px -10px #aaa
    border 1px solid #ccc

    .ivu-select-placeholder {
      font-size 15px!important
    }
  }
</style>
