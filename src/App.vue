

<script>
export default {
  data() {
    return {
      formControlAccount: "",
      formControlPass: "",
      showPass: false,
      useracc: "umutkenar",
      pass: "123",
    }
  },
  methods: {
    printValue() {
      if (this.formControlAccount == this.useracc && this.formControlPass == this.pass) {
        alert("giris basarili");
      }
    },
    logIn(){
      this.$router.push('/mainscreen')
    }
  }
}

</script>
<template>
  <router-view/>
</template>


<style>
</style>
