<template>
  <div id="register-page">
    <div class="change-register-method" @click="changeRegisterMethod">
      当前账户类型为 {{ registerBtn }}，点击切换
    </div>

    <div id="register-form">
      <div class="tip">
        已有账户？请
        <div class="login-btn" @click="loginButtonClick">注册</div>
      </div>

      <div class="groups">
        <div class="input-group">
          <label for="username">用户名</label>
          <AccountInput id="username" name="username"/>
        </div>
        <div class="input-group">
          <label for="email">电子邮箱</label>
          <AccountInput id="email" type="email" name="email"/>
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <AccountInput id="password" type="password" name="password"/>
        </div>
        <div class="input-group">
          <label for="re-password">确认密码</label>
          <AccountInput id="re-password" type="password" name="rePassword"/>
        </div>
      </div>

      <div class="btns">
        <button type="button" class="register-btn">
          {{ registerBtn }}
          <md-icon class="register-icon">arrow_right_alt</md-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import AccountInput from '../../components/Account/AccountInput'

  export default {
    name: "RegisterPage",
    methods: {
      loginButtonClick() {
        this.$emit('login-button-click');
      },
      changeRegisterMethod() {
        this.registerType = this.registerType === 0 ? 1 : 0
        this.$Message.success({
          content: '注册类型切换成功',
          duration: 2.5
        });
      }
    },
    data() {
      return {
        registerType: 0
      }
    },
    components: {
      AccountInput
    },
    computed: {
      registerBtn() {
        if (this.registerType === 0) {
          return '学生注册'
        } else {
          return '企业注册'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .opacity #register-form {
    opacity 0
  }

  #register-page {
    width 100%
    background #fff
    height 100%
    position relative

    .change-register-method {
      position absolute
      top 0
      left 50%
      transform translateX(-50%)
      padding 10px 20px
      background #1257b5
      color #fff
      font-size 16px
      border-bottom-left-radius 20px
      border-bottom-right-radius 20px
      cursor pointer
    }

    #register-form {
      width 65%
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      transition opacity .35s ease-in-out

      .tip {
        font-size 15px
        color #c6c6c6
        margin-bottom 30px

        .login-btn {
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

      .input-group {
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

      .input-group:nth-child(n) {
        padding 0 10px 0 0
      }

      .input-group:nth-child(2n) {
        padding 0 0 0 10px
      }

      .groups {
        overflow auto
        margin-bottom 30px
      }

      .btns {

        .register-btn {
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

          .register-icon {
            font-size 15px
            margin-left 5px
            color: #fff
            transition margin-left .3s ease, color .3s ease
          }

          &:hover {
            background #fff
            color #1257b5
            box-shadow 0 10px 25px -10px #1257b5

            .register-icon {
              margin-left 10px
              color #1257b5
            }
          }
        }
      }
    }
  }
</style>
