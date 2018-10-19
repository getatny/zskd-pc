<template>
  <div id="register-page">
    <div id="register-form">
      <div class="tip">
        {{ $t("message.register.tip") }}
        <div class="login-btn" @click="loginButtonClick">{{ $t("message.login.text") }}</div>
      </div>

      <div class="groups">
        <div class="input-group">
          <label for="username">{{ $t("message.register.username") }}</label>
          <input type="text" id="username" name="username"/>
        </div>
        <div class="input-group">
          <label for="email">{{ $t("message.register.email") }}</label>
          <input type="email" id="email" name="email"/>
        </div>
        <div class="input-group">
          <label for="password">{{ $t("message.register.password") }}</label>
          <input type="password" id="password" name="password"/>
        </div>
        <div class="input-group">
          <label for="re-password">{{ $t("message.register.rePassword") }}</label>
          <input type="text" id="re-password" name="rePassword"/>
        </div>
      </div>

      <div class="btns">
        <button type="button" class="register-btn">{{ $t("message.register.text") }}
          <md-icon class="register-icon">arrow_right_alt</md-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RegisterPage",
    methods: {
      loginButtonClick() {
        this.$emit('login-button-click');
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
