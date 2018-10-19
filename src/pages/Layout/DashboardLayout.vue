<template>
  <div class="wrapper" :class="{'nav-open': $sidebar.showSidebar}">
    <notifications />

    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link v-for="(menu, index) in menus" :to='menu.path' :key="index" :class="{'active-pro': menu.bottom}">
        <md-icon>{{ menu.icon }}</md-icon>
        <p>{{ menu.title }}</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar />
      <dashboard-content />
      <content-footer v-if="!$route.meta.hideFooter" />
    </div>
  </div>
</template>

<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from 'src/pages/Layout/MobileMenu.vue'

  export default {
    components: {
      TopNavbar,
      DashboardContent,
      ContentFooter,
      MobileMenu
    },
    data() {
      return {
        menus: [
          {
            title: 'Dashboard',
            path: '/dashboard',
            icon: 'dashboard',
            bottom: false
          },
          {
            title: 'test',
            path: '/user',
            icon: 'user',
            bottom: false
          },
          {
            title: '关于我们',
            path: '/admin/about',
            icon: 'favorite',
            bottom: true
          }
        ]
      }
    }
  }
</script>
