import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

Vue.use(Router);
Vue.use(Meta);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView("Home")
    },
    {
      path: "/projects/:id/",
      name: "projects",
      component: loadView("Project"),
      props: true
    },
    {
      path: "/contact/",
      name: "contact",
      component: loadView("Contact")
    },
    {
      path: "/happy/",
      name: "happy",
      component: loadView("AreYouHappy")
    },
    {
      path: "/cat/",
      name: "cat",
      component: loadView("Cat")
    },
    {
      path: "/im-fine/",
      name: "im-fine",
      component: loadView("ImFine")
    },
    {
      path: "*",
      redirect: "/"
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
