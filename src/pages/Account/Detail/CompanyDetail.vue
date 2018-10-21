<template>
  <div id="company-detail">
    <div class="title">
      <h2>企业注册</h2>
      <div class="description">详细注册信息填写</div>
    </div>

    <md-divider/>

    <div class="detail-form">
      <InputGroup label-for="cp-name" text="企业名" class="detail-item">
        <AccountInput id="cp-name" name="cpName" place-holder="请输入完整正确的企业全称（非缩写）"/>
      </InputGroup>
      <InputGroup label-for="cp-code" text="统一社会信用代码" class="detail-item">
        <AccountInput id="cp-code" name="cpCode"/>
      </InputGroup>
      <InputGroup label-for="cp-type" text="企业类型" class="detail-item">
        <AccountSelect v-model="cpType" :list="cpTypeList"></AccountSelect>
      </InputGroup>
    </div>
  </div>
</template>

<script>
  import AccountInput from 'src/components/Account/AccountInput'
  import InputGroup from 'src/components/Account/AccountInputGroup'
  import AccountSelect from 'src/components/Account/AccountSelect'

  export default {
    name: 'CompanyDetail',
    components: {
      InputGroup,
      AccountInput,
      AccountSelect
    },
    data() {
      return {
        cpType: 0,
        cpTypeList: [
          {
            value: 1,
            label: 'test1'
          },
          {
            value: 2,
            label: 'test2'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import "../../../assets/stylus/font-common.styl"

  #company-detail {
    width 55vw
    min-height: 80vh
    border-radius 20px
    display inline-block
    position absolute
    left 50%
    margin-left -27.5vw
    margin-top 100px
    overflow hidden
    box-shadow 0 15px 70px -15px #888
    background #fff
    padding 20px 45px

    .title {
      margin-bottom 30px

      h2 {
        title(2.25em)
        text-align center
      }

      .description {
        tip-font(1.3em)
        text-align center
      }
    }

    .detail-form {
      width 100%
      margin-top 30px

      .detail-item:nth-child(n) {
        padding 0 10px 0 0
      }

      .detail-item:nth-child(2n) {
        padding 0 0 0 10px
      }
    }
  }
</style>
