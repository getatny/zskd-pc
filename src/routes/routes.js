import DashboardLayout from 'src/pages/Layout/DashboardLayout.vue'

import Dashboard from 'src/pages/Dashboard.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import UpgradeToPRO from 'src/pages/UpgradeToPRO.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          title: 'Dashboard'
        }
      },
      {
        path: 'user',
        name: 'User Profile',
        component: UserProfile,
        meta: {
          title: 'User Profile'
        }
      },
      {
        path: 'table',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'maps',
        name: 'Maps',
        meta: {
          hideFooter: true
        },
        component: Maps

      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: UpgradeToPRO
      }
    ]
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('src/pages/Account/AccountPage.vue'),
    redirect: '/Account/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('src/pages/Account/LoginPage.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('src/pages/Account/RegisterPage.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('src/pages/Layout/DashboardLayout.vue')
  }
]

export default routes
