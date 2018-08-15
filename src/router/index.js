import Vue from 'vue'
import Router from 'vue-router'
import TaskHome from "../components/home/TaskHome"
import MessageBoard from "../components/message/MessageBoard"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TaskHome',
      component: TaskHome
    },
    {
      path: '/message',
      name: 'MessageBoard',
      component: MessageBoard
    }
  ]
})
