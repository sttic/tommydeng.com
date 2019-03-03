import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

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
      component: loadView("Home"),
      meta: {
        title: "Tommy Deng - Home"
      }
    },
    {
      path: "/projects/:id",
      name: "project",
      component: loadView("Project"),
      props: true
    },
    {
      path: "/contact",
      name: "contact",
      component: loadView("Contact"),
      meta: {
        title: "Tommy Deng - Contact"
      }
    },
    {
      path: "/happy",
      name: "happy",
      component: loadView("AreYouHappy"),
      meta: {
        title: "Are you happy?"
      }
    },
    {
      path: "/cat",
      name: "cat",
      component: loadView("Cat"),
      meta: {
        title: "have cat meöw"
      }
    },
    {
      path: "/im-fine",
      name: "im-fine",
      component: loadView("ImFine"),
      meta: {
        title: "I'm fine."
      }
    },
    {
      path: "/imfine",
      name: "imfine",
      component: loadView("ImFine"),
      meta: {
        title: "I'm fine."
      }
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

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
