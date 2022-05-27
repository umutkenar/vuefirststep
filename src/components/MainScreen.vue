

<script>
  export default {
    data(){
      return {
        formControlAccount:"",
        formControlPass:"",
        showPass: false,
        useracc:"umutkenar",
        pass:"123",
      }
    },
    methods: {
    	printValue () {        
      	if(this.formControlAccount == this.useracc && this.formControlPass == this.pass){
          alert("giris basarili");
        }
      }
    }
  }
   
</script>
<template>
  <div class="flexiblecontainer font-body">
    <!--content wrapper-->
    <div class=" w-screen h-screen flexiblecontainer">
      <!--main frame-->
      <div class=" bg-white border-r-[1px] w-[56px] h-screen flex items-center flex-col"><!--main menu-->
        <a class="w-[56px] h-[56px]"><img class=" object-contain" src="../assets/images/main_menu/logo.png" alt="yartu_logo"></a>
        <ul class="mt-[16px]">
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/home.png" alt="home"></a></li>
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/drive.png" alt="drive"></a></li>
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/email.png" alt="email"></a></li>
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/contact.png" alt="contact"></a></li>
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/notes.png" alt="notes"></a></li>
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/project.png" alt="project"></a></li>
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/calendar.png" alt="calendar"></a></li>
          <li><a class="main-menu-button" href="#"><img src="../assets/images/main_menu/conference.png" alt="conference"></a></li>
        </ul>
      </div><!--end main menu-->
      <div class=" w-full h-screen"><!--submain frame-->
        <div class=" bg-white border-b-[1px] w-full h-14 flex items-center justify-between"><!--top bar-->
          <div class="flex items-center"> 
            <a class="flex w-[32px] h-[32px] items-center justify-center ml-1 mr-1" href="#"><img class=" object-contain" src="../assets/images/top_bar/Collapse.png" alt="collapse"></a>
          <h4 class=" text-[20px] font-extrabold leading-[28px] text-[#394C66]">Mail</h4>
          </div>
          <div class="flex ml-[-15vw]  py-1 w-[30vw] px-2 rounded items-center">
            <img src="../assets/images/top_bar/search.png" alt="search-icon">
            <input class=" ml-4 h-full w-full leading-[20px] focus:border-b-[1px] focus:outline-none text-[14px] font-semibold" type="text" name="searchbar" id="searchbar" placeholder="Search for anything">
          </div>
          <div class="flex items-center float-right">
            <a href="#"><img src="../assets/images/top_bar/button.png" alt="notifications"></a>
            <div class="w-[200px] h-[56px] ml-2 border-l-[1px]"></div>
          </div>
        </div><!--end top bar-->
        <div class=" w-full h-[calc(100vh-56px)] flex"><!--3 section frame-->
          <div class=" bg-white border-r-[1px] w-[40vw] h-full"></div><!--section 1 area-->
          <div class="  w-[55vw] h-[calc(100vh-108px)]"><!--section 2 area-->
            <div class=" bg-white border-b-[1px] w-full h-[52px]"></div><!--section 2 bar-->
            <div class=" bg-white w-full h-full"></div><!--section 2 list-->
          </div><!--end section 2 area-->
          <div class=" bg-white border-l-[1px] w-full h-[calc(100vh-56px)]"></div><!--section 3 area-->
        </div><!--end 3 section frame-->
      </div><!--end submain frame-->
    </div>
    <!--end main frame-->
  </div>
  <!--end content wrapper-->
</template>


<style>
</style>
