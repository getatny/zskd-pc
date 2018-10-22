<template>
  <div id="company-detail">
    <div class="title">
      <h2>企业注册</h2>
      <div class="description">详细注册信息填写(以下所有信息均为必填)</div>
    </div>

    <md-divider/>

    <div class="detail-form">
      <div class="first">
        <InputGroup label-for="cp-name" text="企业名" class="detail-item">
          <AccountInput v-model="companyDetailInfo.cpName" id="cp-name" name="cpName" place-holder="请输入完整正确的企业全称（非缩写）"/>
        </InputGroup>
        <InputGroup label-for="cp-code" text="统一社会信用代码 / 组织机构代码" class="detail-item">
          <AccountInput v-model="companyDetailInfo.cpCode" id="cp-code" name="cpCode"/>
        </InputGroup>
        <InputGroup label-for="cp-type" text="企业类型" class="detail-item">
          <AccountSelect v-model="companyDetailInfo.cpType" :list="cpTypeList"></AccountSelect>
        </InputGroup>
        <InputGroup label-for="cp-money" text="注册资金" class="detail-item">
          <AccountInput v-model="companyDetailInfo.cpMoney" id="cp-money" name="cpMoney" place-holder="单位：万元"/>
        </InputGroup>
      </div>

      <Divider class="divider">营业执照上传</Divider>

      <Upload
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
          <md-icon class="md-size-3x" style="color: #1b5e20">cloud_upload</md-icon>
          <p>点击按钮选择或直接将营业执照拖到此处上传</p>
        </div>
      </Upload>
    </div>
  </div>
</template>

<script>
  import AccountInput from 'src/components/Account/AccountInput'
  import InputGroup from 'src/components/Account/AccountInputGroup'
  import AccountSelect from 'src/components/Account/AccountSelect'
  import { Divider, Upload } from 'iview'

  export default {
    name: 'CompanyDetail',
    components: {
      InputGroup,
      AccountInput,
      AccountSelect,
      Divider,
      Upload
    },
    data() {
      return {
        companyDetailInfo: {
          cpName: '',
          cpCode: '',
          cpType: 0,
          cpMoney: ''
        },
        cpTypeList: [
          {
            value: 1,
            label: '民营'
          },
          {
            value: 2,
            label: '国企'
          },
          {
            value: 3,
            label: '外资'
          },
          {
            value: 4,
            label: '合资'
          },
          {
            value: 5,
            label: '高校'
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

      .first {
        overflow auto
      }

      .divider {
        margin-top 30px
        margin-bottom 30px
      }
    }
  }
</style>
