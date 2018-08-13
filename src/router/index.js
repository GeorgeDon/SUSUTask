import Vue from 'vue'
import Router from 'vue-router'
import TaskHome from "../components/TaskHome"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskHome',
      component: TaskHome
    }
  ]
})
