
import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/Switch.vue";
import ButtonDemo from "./components/Button.vue";
import DialogDemo from "./components/Dialog.vue";
import TabsDemo from "./components/Tabs.vue";

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/Doc",
      component: Doc,
      children: [
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
      ],
    },
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});