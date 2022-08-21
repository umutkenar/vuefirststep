

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}

</script>
<template>
  <div class="flexiblecontainer font-body">
    <!--content wrapper-->
    <div class=" w-screen h-screen flexiblecontainer">
      <!--main frame-->

      <div class="bg-white border-r-[1px] w-[56px] h-screen flex items-center flex-col">
        <!--main menu-->
        <a class="w-[56px] h-[56px]"><img class=" object-contain" src="../assets/images/main_menu/logo.png"
            alt="yartu_logo"></a>
        <router-link class="main-menu-button" to="/dummy"><img src="../assets/images/main_menu/home.png" alt="home">
        </router-link>
        <router-link class="main-menu-button" to="/dummy"><img src="../assets/images/main_menu/drive.png" alt="home">
        </router-link>
        <router-link class="main-menu-button " :to="{ name: 'Mail Frame' }"><img
            src="../assets/images/main_menu/email.png" alt="email"></router-link>
        <router-link class="main-menu-button" to="/dummy"><img src="../assets/images/main_menu/contact.png"
            alt="contact">
        </router-link>
        <router-link class="main-menu-button" to="/dummy"><img src="../assets/images/main_menu/notes.png" alt="notes">
        </router-link>
        <router-link class="main-menu-button" to="/dummy"><img src="../assets/images/main_menu/project.png"
            alt="project">
        </router-link>
        <router-link class="main-menu-button" to="/dummy"><img src="../assets/images/main_menu/calendar.png"
            alt="calendar">
        </router-link>
        <router-link class="main-menu-button" to="/dummy"><img src="../assets/images/main_menu/conference.png"
            alt="conference"></router-link>

      </div>
      <!--end main menu-->
      <div class=" w-main_screen h-screen">
        <router-view />
      </div>

    </div>
    <!--end main frame-->
  </div>
  <!--end content wrapper-->
</template>


<style scoped>
.link_router_active_class {
  background: #EBF0FE;
  /* Blue 01 */

  border: 2px solid #3663F2;
  box-shadow: 0px 0px 0px 2px rgba(35, 86, 246, 0.4);
  border-radius: 8px;
}
</style>
