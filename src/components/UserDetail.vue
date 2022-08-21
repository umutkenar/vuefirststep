<template>
    <div  v-if="visible" class=" absolute z-20 flex bg-black items-center justify-center top-20 right-8 bg-opacity-30 w-[317px] h-[225px]">
        <div class="">
        <h1>User Detail screen</h1>
         <router-link to="/">Log Out</router-link>
        </div>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            visible: false,
        
        }
    },
    
    methods: {
        show_user_detail() {
            this.visible = true;
        },
        hide_user_detail() {
            console.log("deneeee")
            this.visible = false;
        },
        
    },
}


</script>

<style>
</style>