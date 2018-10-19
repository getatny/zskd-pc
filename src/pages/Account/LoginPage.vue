<template>
  <div id="login-page">
    <div id="login-form">
      <div class="tip1">{{ $t('message.login.tip1') }}</div>
      <div class="tip2">
        {{ $t('message.login.tip2') }}
        <div class="register-btn" @click="registerButtonClick">{{ $t("message.register.text") }}</div>
      </div>
      <div class="username">
        <input type="text" name="username" placeholder="USERNAME"/>
        <div class="identify">
          教
          <md-tooltip md-direction="top">当前账户身份：教</md-tooltip>
        </div>
      </div>
      <input type="password" name="password" placeholder="PASSWORD"/>
      <div class="btns">
        <button type="button" class="login-btn">{{ $t("message.login.text") }}
          <md-icon class="login-icon">arrow_right_alt</md-icon>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LoginPage",
    methods: {
      registerButtonClick() {
        this.$emit('register-button-click')
      }
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
