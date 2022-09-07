import { createRouter, createWebHistory } from "vue-router";
import LogIn from "../components/LogIn.vue";
import MainScreen from "../components/MainScreen.vue";
import MailFrame from "../components/MainFrames/MailFrame.vue";
import InboxList from "../components/MailMenuList/InboxList.vue";
import SentList from "../components/MailMenuList/SentList.vue";
import Starred from "../components/MailMenuList/Starred.vue";
import Trash from "../components/MailMenuList/Trash.vue";
import Archive from "../components/MailMenuList/Archive.vue";
import Draft from "../components/MailMenuList/Draft.vue";
import Spam from "../components/MailMenuList/Spam.vue";
import AllMail from "../components/MailMenuList/AllMail.vue";
import SideBar from "../components/SideBar.vue";
import DummyFrame from "../components/DummyFrame.vue";

const routes = [
  {
    path: "/",
    name: "Sign In",
    component: LogIn,
  },
  {
    path: "/sidebar",
    name: "Side Bar",
    component: SideBar,
  },

  {
    path: "/mainscreen",
    name: "Main Screen",
    component: MainScreen,
    children: [
      {
        path: "",
        name: "Mail Frame",
        component: MailFrame,
        children: [
          {
            path: "",
            name: "Inbox List",
            component: InboxList,
          },
          {
            path: "/sentlist",
            name: "Sent List",
            component: SentList,
          },
          {
            path: "/starred",
            name: "Starred",
            component: Starred,
          },
          {
            path: "/trash",
            name: "Trash",
            component: Trash,
          },
          {
            path: "/archive",
            name: "Archive",
            component: Archive,
          },
          {
            path: "/draft",
            name: "Draft",
            component: Draft,
          },
          {
            path: "/spam",
            name: "Spam",
            component: Spam,
          },
          {
            path: "/all_mail",
            name: "All Mail",
            component: AllMail,
          },
        ],
      },
      {
        path: "/dummy",
        name: "Dummy Frame",
        component: DummyFrame,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "link_router_active_class",
});

export default router;
