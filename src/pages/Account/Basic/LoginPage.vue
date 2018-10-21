<template>
  <div id="login-page">
    <div id="login-form">
      <div class="tip1">请输入您的用户名和密码进行登录。</div>
      <div class="tip2">
        如果您没有任何账号的话，请
        <div class="register-btn" @click="registerButtonClick">注册</div>
      </div>
      <div class="username">
        <AccountInput name="username" place-holder="USERNAME"/>
        <div class="identify">
          教
          <md-tooltip md-direction="top">当前账户身份：教</md-tooltip>
        </div>
      </div>
      <AccountInput type="password" name="password" place-holder="PASSWORD"/>
      <div class="btns">
        <button type="button" class="login-btn">
          登录
          <md-icon class="login-icon">arrow_right_alt</md-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountInput from '../../../components/Account/AccountInput'

  export default {
    name: "LoginPage",
    methods: {
      registerButtonClick() {
        this.$emit('register-button-click')
      }
    },
    components: {
      AccountInput
    }
  }
</script>

<style scoped lang="stylus">
  #login-page {
    width 100%
    height 100%
    background #fff
    position relative
  }

  .opacity #login-form{
    opacity 0
  }

  #login-form {
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    box-sizing border-box
    width 65%
    transition opacity .35s ease-in-out

    .tip1, .tip2 {
      font-size 15px
      color #c6c6c6
      margin-bottom 5px
    }

    .tip2 {
      margin-bottom 30px

      .register-btn {
        display inline-block
        padding-bottom 3px
        border-bottom 1px solid
        cursor pointer
        transition all .3s ease-in-out

        &:hover {
          color #1257b5
          border-color #1257b5
        }
      }
    }

    .username {
      position relative

      .identify {
        width 25px
        height 25px
        line-height 25px
        text-align center
        font-size 12px
        border 1px solid #c9c9c9
        color #c9c9c9
        border-radius 50%
        position absolute
        top 10px
        right 10px
      }
    }

    .btns {
      margin-top 15px

      .login-btn {
        border 1px solid #1257b5
        font-size 15px
        letter-spacing 2px
        color #fff
        background #1257b5
        display inline-block
        padding 10px 30px
        border-radius 40px
        cursor pointer
        font-weight bold
        transition all .35s ease-in-out
        box-shadow 0 10px 20px -10px #1257b5

        .login-icon {
          font-size 15px
          margin-left 5px
          transition margin-left .3s ease, color .3s ease
          color #fff
        }

        &:hover {
          background #fff
          color #1257b5
          box-shadow 0 10px 25px -10px #1257b5

          .login-icon {
            margin-left 10px
            color #1257b5
          }
        }
      }
    }
  }
</style>
