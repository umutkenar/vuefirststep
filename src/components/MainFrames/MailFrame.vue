<template>
  <div class="w-full h-screen relative">
    <!--submain frame-->
    <div
      class="bg-white border-b-[1px] w-full h-14 flex items-center justify-between"
    >
      <div class="flex">
        <div class="flex items-center">
          <a
            class="flex w-[32px] h-[32px] items-center justify-center ml-1 mr-1"
            @click="isCollapsed = !isCollapsed"
            ><img
              class="object-contain"
              src="../../assets/images/top_bar/Collapse.png"
              alt="collapse"
          /></a>
          <h4 class="text-[20px] font-extrabold leading-[28px] text-[#394C66]">
            Mail
          </h4>
        </div>
        <div
          class="flex py-1 ml-4 md:ml-12 lg:ml-32 w-[26vw] px-2 rounded items-center"
        >
          <img src="../../assets/images/top_bar/search.png" alt="search-icon" />
          <input
            class="ml-4 h-full w-full leading-[20px] focus:border-b-[1px] focus:outline-none text-[14px] font-semibold"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Search for anything"
            v-model="searchController"
          />
        </div>
      </div>

      <div class="flex items-center float-right">
        <a href="#" class="mr-5"
          ><img
            src="../../assets/images/top_bar/button.png"
            alt="notifications"
        /></a>
        <div
          class="w-[270px] h-[56px] border-l-[1px] flex items-center justify-center px-[10px]"
        >
          <div class="h-full w-full flex items-center justify-start relative">
            <div
              class="pp_alani w-[36px] h-[36px] rounded-3xl bg-red-400"
            ></div>
            <div class="isim alani relative">
              <a
                class="flex items-center justify-center px-2 cursor-pointer"
                @click="showUserDetail"
              >
                <div
                  class="text-[#394C66] w-full mr-3 text-xs font-extrabold flex items-start justify-center flex-col"
                >
                  Umut KENAR<span class="block text-[#BAC1CB] font-semibold"
                    >umut.kenar@bilmem.ne</span
                  >
                </div>
                <img src="../../assets/images/mail_frame/down.svg" class="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-[calc(100% - 56px)] mt-14 absolute top-0 left-0 z-40 flex justify-center"
      :class="searchController != '' ? 'flex' : 'hidden'"
    >
      <div class="relative w-64 h-48 bg-black mt-20"></div>
    </div>
    <user-detail
      ref="user_detail_screen"
      v-click-outside="hideUserDetail"
    ></user-detail>
    <!--end top bar-->
    <div class="w-full h-[calc(100vh-56px)] flex">
      <!--3 section frame-->
      <div
        class="bg-[#F8FAFD] border-r-[1px] min-w-[216px] h-full flex-col justify-between items-center transition ease-out delay-650 duration-500"
        :class="isCollapsed ? 'hidden' : 'flex'"
      >
        <!--section 1 area-->
        <div class="w-full flex items-center justify-center flex-col">
          <a class="new_mail_button" @click="showNewMail"
            ><img
              src="../../assets/images/mail_frame/upload.svg"
              alt="new_mail"
              class="mr-[4px]"
            />New E-Mail</a
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'Inbox List' }"
            ><img
              src="../../assets/images/mail_frame/inbox.svg"
            />Inbox</router-link
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'Sent List' }"
            ><img
              src="../../assets/images/mail_frame/mail-send.svg"
            />Sent</router-link
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'Starred' }"
            ><img
              src="../../assets/images/mail_frame/star.svg"
            />Starred</router-link
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'Trash' }"
            ><img
              src="../../assets/images/mail_frame/trash.svg"
            />Trash</router-link
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'Archive' }"
            ><img
              src="../../assets/images/mail_frame/archive.svg"
            />Archive</router-link
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'Draft' }"
            ><img
              src="../../assets/images/mail_frame/draft.svg"
            />Draft</router-link
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'Spam' }"
            ><img
              src="../../assets/images/mail_frame/spam.svg"
            />Spam</router-link
          >
          <router-link class="mail_menu_buttons" :to="{ name: 'All Mail' }"
            ><img src="../../assets/images/mail_frame/mail-collection.svg" />All
            Mail</router-link
          >
          <div class="w-full h-12 mb-4">
            <a
              class="text-xs leading-4 flex items-center text-[#9AA1B4] cursor-pointer font-semibold"
              ><img
                src="../../assets/images/mail_frame/down.svg"
                alt="new_mail"
                class="mr-[4px]"
              />FOLDER</a
            >
            <a
              class="w-[168px] text-sm leading-5 flex justify-between items-center text-[#3663F2] cursor-pointer font-semibold mt-[10px] ml-5"
              >New Folder<span class="text-[24px] font-light">+</span></a
            >
          </div>
          <div class="w-full h-[1px] bg-[#E5EBF5]"></div>
          <a class="mail_menu_buttons" @click="showSettings"
            ><img
              src="../../assets/images/mail_frame/cog-setting-alt.svg"
              alt="new_mail"
              class="mr-[4px]"
            />Settings</a
          >
        </div>
        <div
          class="h-[211px] w-full border-t-[1px] border-[#E5EBF5] p-[20px] flex flex-col justify-between"
        >
          <h3 class="text-[#394C66] text-sm font-extrabold">E-Mail Storage</h3>
          <div class="w-full h-20 bg-gray-200 bg-opacity-25"></div>
          <a
            class="w-full h-9 bg-white text-sm flex items-center rounded-md justify-center border-[1px] border-[#E5EBF5] text-[#3663F2] cursor-pointer font-medium"
            >Upgrade Storage</a
          >
        </div>
      </div>
      <!--end section 1 area-->
      <div class="bg-white min-w-[40vw] lg:min-w-[33vw] h-[calc(100vh-56px)]">
        <!--section 2 area-->
        <router-view></router-view>
        <!--section 2 list-->
      </div>
      <!--end section 2 area-->
      <div
        class="bg-[#F8FAFD] border-l-[1px] w-full h-[calc(100vh-56px)] relative"
      >
        <div
          class="flex w-full h-full absolute z-10 items-center justify-center"
        >
          <div class="w-80 h-60 flex flex-col justify-center items-center">
            <img
              src="../../assets/images/mail_frame/no_mail_selected.svg"
              alt="no_mail_selected"
            />
            <h4 class="text-xl font-extrabold leading-7 text-[#394C66]">
              No mail selected
            </h4>
            <h5 class="text-base leading-6 text-[#394C66] font-normal">
              Select one of the email and see the details
            </h5>
          </div>
        </div>
        <div class="flex w-full h-full">
          <new-mail-vue ref="new_mail" />
        </div>
      </div>

      <!--section 3 area-->
    </div>
    <!--end 3 section frame-->
    <SettingsScreen ref="settings" />
  </div>
  <!--end submain frame-->
</template>
<style scoped>
.router-link-exact-active {
  background: rgba(54, 99, 242, 0.12);
  color: #3663f2;
  -webkit-box-shadow: inset 4px 0px 0px 0px rgba(54, 99, 242, 1);
  -moz-box-shadow: inset 4px 0px 0px 0px rgba(54, 99, 242, 1);
  box-shadow: inset 4px 0px 0px 0px rgba(54, 99, 242, 1);
}

.router-link-exact-active svg {
  fill: #3663f2 !important;
}
</style>
<script>
import NewMailVue from "../NewMail.vue";
import SettingsScreen from "../Settings.vue";
import UserDetail from "../UserDetail.vue";
import vClickOutside from "click-outside-vue3";

export default {
  data() {
    return {
      isCollapsed: false,
      searchController: "",
    };
  },
  components: {
    NewMailVue,
    SettingsScreen,
    UserDetail,
  },
  methods: {
    showNewMail() {
      this.$refs.new_mail.show_new_email();
    },
    showSettings() {
      this.$refs.settings.show_settings();
    },
    showUserDetail() {
      this.$refs.user_detail_screen.show_user_detail();
    },
    hideUserDetail() {
      this.$refs.user_detail_screen.hide_user_detail();
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>
