<template>
  <div id="account-page">
    <div class="wrapper">
      <div class="left">
        <div class="logo" ref="logo" @click="returnToIndex">
          <img src="../../../assets/img/logo-white.png" alt="logo"/>
          <md-tooltip md-direction="top">返回首页</md-tooltip>
        </div>
        <div class="logo-mini" ref="logoMini" @click="returnToIndex">
          <img src="../../../assets/img/logo-white-mini.png" alt="logo-mini"/>
          <md-tooltip md-direction="right">返回首页</md-tooltip>
        </div>
      </div>
      <div class="right" ref="right">
        <router-view @register-button-click="changeToRegister" @login-button-click="changeToLogin" :class="{opacity: isOpacity}" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BasicInfo",
    data() {
      return {
        isOpacity: false
      }
    },
    methods: {
      toRegisterAnimation() {
        // 先执行页面切换动画，再切换界面
        // 隐藏right内容
        this.isOpacity = true;
        // logo 隐藏
        this.$refs.logo.style.opacity = '0';
        // 白色部分向左扩大
        this.$refs.right.style.width = 'calc(100% - 85px)';
        // logo-mini 显现
        this.$refs.logoMini.style.opacity = '1';
        // 延迟执行right显示动画
        setTimeout(() => {
          this.isOpacity = false;
        }, 360);
      },
      toLoginAnimation() {
        // 先执行页面切换动画，再切换界面。逻辑与register相反
        this.isOpacity = true;
        this.$refs.logoMini.style.opacity = '0';
        this.$refs.right.style.width = '50%';
        this.$refs.logo.style.opacity = '1';
        // 延迟执行right显示动画
        setTimeout(() => {
          this.isOpacity = false;
        }, 360);
      },
      changeToRegister() {
        // 执行动画
        this.toRegisterAnimation();
        // 切换路由
        this.$router.push('/register');
      },
      changeToLogin() {
        // 隐藏right内容
        this.isOpacity = true;
        this.toLoginAnimation();
        this.$router.push('/login');
        setTimeout(() => {
          this.isOpacity = false;
        }, 360);
      },
      defaultStatus(to = null) {
        // account页面默认状态（这里状态是指页面样式处于何种状态）
        // 先检查当前路由，确定account页面样式正确
        let route;

        // 确定是否是watch调用的函数，如果是，route元信息可以直接通过传入的参数获取
        if (to === null) {
          route = this.$route.name;
        } else {
          route = to.name
        }

        // 判断$route.name的值，决定当前将页面切换到何种状态
        if (route === 'Login') {
          this.toLoginAnimation()
        } else if (route === 'Register') {
          this.toRegisterAnimation()
        }
      },
      returnToIndex() {
        this.$router.replace('/dashboard')
      }
    },
    mounted() {
      this.defaultStatus()
    },
    watch: {
      '$route': function (to) { // 监听路由变化，mounted只会在account页面加载时执行一次，后续仍需实时监听
        this.defaultStatus(to);
      }
    }
  }
</script>

<style scoped lang="stylus">
  #account-page {
    width 55vw
    height: 500px
    border-radius 20px
    display inline-block
    position absolute
    top 50%
    left 50%
    margin-top -250px
    margin-left -27.5vw
    overflow hidden
    box-shadow 0 15px 70px -15px #888
    background #fff

    .wrapper {
      width 100%
      height 100%

      .left {
        background-image url("../../../assets/img/login-bg.gif")
        background-position center
        background-size cover
        width 50%
        height: 100%
        display inline-block
        position relative
        top 0
        left 0

        &::after {
          content: ''
          position absolute
          top 0
          left 0
          width 100%
          height 100%
          background #282828
          opacity .8
          z-index 0
        }

        .logo, .logo-mini {
          position absolute
          z-index 1
          cursor pointer
          transition opacity .35s ease-in-out
        }

        .logo {
          top 50%
          left 50%
          width 250px
          overflow hidden
          transform translate(-50%, -50%)

          img {
            width 250px
          }
        }

        .logo-mini {
          width 45px
          position absolute
          top 20px
          left 20px
          overflow hidden
          opacity 0

          img {
            width 45px
          }
        }
      }

      .right {
        width 50%
        height: 100%
        float right
        display inline-block
        box-sizing border-box
        position absolute
        top 0
        right 0
        z-index 5
        transition all .35s ease-in-out
      }
    }
  }
</style>
