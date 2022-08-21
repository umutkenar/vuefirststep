<template>
    <div class="w-[56px] h-screen">
        <!--main menu-->
        <a class="w-[56px] h-[56px]"><img class=" object-contain" src="../assets/images/main_menu/logo.png"
                alt="yartu_logo"></a>
        <router-link class="main-menu-button" class-active="active" to="/"><img
                src="../assets/images/main_menu/home.png" alt="home"></router-link>
        <router-link class="main-menu-button" class-active="active" to="/"><img
                src="../assets/images/main_menu/drive.png" alt="home"></router-link>
        <router-link class="main-menu-button" class-active="active" :to="{ name: 'Mail Frame' }"><img
                src="../assets/images/main_menu/email.png" alt="email"></router-link>
        <router-link class="main-menu-button" class-active="active" to="/"><img
                src="../assets/images/main_menu/contact.png" alt="contact"></router-link>
        <router-link class="main-menu-button" class-active="active" to="/"><img
                src="../assets/images/main_menu/notes.png" alt="notes"></router-link>
        <router-link class="main-menu-button" class-active="active" to="/"><img
                src="../assets/images/main_menu/project.png" alt="project"></router-link>
        <router-link class="main-menu-button" class-active="active" to="/"><img
                src="../assets/images/main_menu/calendar.png" alt="calendar"></router-link>
        <router-link class="main-menu-button" class-active="active" to="/"><img
                src="../assets/images/main_menu/conference.png" alt="conference"></router-link>
        <!--<ul class="mt-[16px]">
          <li><a class="main-menu-button active:bg-[#EBF0FE] active:shadow-inner-border active:border-[2px] active:border-[#3663F2]" href="#"></a></li>
        </ul>-->
    </div>
    <!--end main menu-->

</template>