import Vue from "vue";
import Router from "vue-router";
import Posts from "./components/Posts";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
        path: "/",
        name: "Posts",
        component: Posts
    },
    {
        path: "/page1",
        name: "Posts",
        component: Posts
    },
    {
      path: "/page2",
      name: "Users",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./components/Users")
    }
  ]
});
