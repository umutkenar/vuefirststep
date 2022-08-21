<template>
  <div
    @click="hide_settings"
    v-if="visible"
    class="absolute z-20 flex items-center justify-center top-0 left-0 bg-gray-500 bg-opacity-30 w-full h-screen"
  >
    <div class="w-[600px] h-[600px] bg-black">
      <a class="w-[32] h-[32] cursor-pointer" @click="hide_settings">
        <img src="../assets/images/sign_in/button.png" alt="close_btn" />
      </a>
      <!-- vue tip tap bak -->
      <h1>Settings screen</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },

  methods: {
    show_settings() {
      this.visible = true;
    },
    hide_settings() {
      this.visible = false;
    },
  },
};
</script>

<style></style>
