<script>
export default {
  data() {
    return {
      formControlAccount: "",
      formControlPass: "",
      showPass: false,
      useracc: "umutkenar",
      pass: "123",
      loginchecker_mail: true,
      loginchecker_pass: true,
    };
  },
  methods: {
    printValue() {
      if (
        this.formControlAccount == this.useracc &&
        this.formControlPass == this.pass
      ) {
        alert("giris basarili");
      }
    },
    logIn() {
      if (this.formControlAccount != this.useracc) {
        this.loginchecker_mail = false;
      } else if (
        this.loginchecker_mail == false &&
        this.formControlPass != this.pass
      ) {
        this.loginchecker_pass = false;
      } else {
        this.$router.push("/mainscreen");
        this.loginchecker = true;
      }
    },
  },
};
</script>
<template>
  <div class="flexiblecontainer font-body">
    <!--content wrapper-->
    <div class="w-screen sm:bg-grey-rgba bg-white h-screen flexiblecontainer">
      <!--main frame-->
      <div
        class="sm:w-[456px] sm:h-[656px] w-[356px] h-[708px] bg-white rounded-xl flexiblecontainer relative"
      >
        <!--popup frame-->
        <div>
          <!--close button-->
          <a
            href="#"
            class="w-[32] h-[32] absolute top-[16px] right-[16px] z-10 sm:block hidden"
          >
            <img src="../assets/images/sign_in/button.png" alt="close_btn" />
          </a>
        </div>
        <!--end close button-->
        <div
          class="sm:w-[400px] w-[300px] sm:h-[612px] h-[607px] absolute top-[16px] left-[28px] sign-in-flex-pattern gap-[40px]"
        >
          <!--popup frame content wrapper-->
          <div
            class="sm:w-[400px] w-[300px] sm:h-[396px] sign-in-flex-pattern gap-[24px]"
          >
            <!--sign_in top frame-->
            <div>
              <div class="w-[56px] h-[56px] hidden sm:block">
                <img src="../assets/images/sign_in/logo.png" alt="yartu_logo" />
              </div>
              <div class="sm:hidden block w-[200px] h-[43px]">
                <img
                  src="../assets/images/sign_in/yartu_logo_name.png"
                  alt="yartu_name"
                />
              </div>
            </div>
            <!--yartu logo-->
            <div class="sign-in-flex-pattern gap-[16px]">
              <!--sign_in welcome text-->
              <h1
                class="text-[24px] font-extrabold text-[#394C66] leading-[40px]"
              >
                Sign In
              </h1>
              <h4
                class="text-[16px] font-semibold text-[#9AA1B4] leading-[24px]"
              >
                Welcome back, please log in to you account.
              </h4>
            </div>
            <!--end sign_in welcome text-->
            <div class="sign-in-flex-pattern gap-[20px]">
              <div class="gap-[8px] sign-in-flex-pattern relative">
                <label class="sign-in-labels" for="useraccount"
                  >Email or Username</label
                >
                <input
                  class="sign-in-textfield"
                  type="text"
                  id="useraccount"
                  name="useraccount"
                  placeholder="Enter email or username"
                  v-model="formControlAccount"
                />
                <a
                  :class="loginchecker_mail ? 'hidden' : 'flex'"
                  class="h-[12px] sm:w-[400px] w-[300px] text-[#EB6363] text-[12px] leading-[16px] items-center absolute top-[81px]"
                  ><img
                    src="../assets/images/sign_in/warning.png"
                    class="inline-block object-none mr-1"
                    alt="warning"
                  />Please enter a valid email</a
                >
              </div>
              <div class="gap-[8px] sign-in-flex-pattern">
                <div class="sm:w-[400px] w-[300px] flex justify-between">
                  <label class="sign-in-labels" for="userpass">Password</label>
                  <a class="sign-in-labels !text-[#3663F2]" href="#"
                    >Forgot Password?</a
                  >
                </div>
                <div class="relative">
                  <input
                    class="sign-in-textfield"
                    :type="showPass ? 'text' : 'password'"
                    id="userpass"
                    name="userpass"
                    placeholder="Enter password"
                    v-model="formControlPass"
                  />
                  <a
                    :class="loginchecker_pass ? 'hidden' : 'flex'"
                    class="h-[12px] sm:w-[400px] w-[300px] text-[#EB6363] text-[12px] leading-[16px] items-center absolute top-[48px]"
                    ><img
                      src="../assets/images/sign_in/warning.png"
                      class="inline-block object-none mr-1"
                      alt="warning"
                    />Please enter a valid password</a
                  >
                  <a
                    href="#"
                    class="absolute w-[24px] h-[24px] top-[10px] right-[16px]"
                    ><img
                      src="../assets/images/sign_in/eye.png"
                      alt="showPassword"
                      @click="showPass = !showPass"
                  /></a>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-[8px] items-start leading-[24px]">
              <div class="w-[24px] h-[24px] flexiblecontainer">
                <input
                  class="w-[16px] h-[16px]"
                  type="checkbox"
                  name="keepmelogged"
                  id="keepmelogged"
                />
              </div>
              <label
                class="text-[16px] font-semibold text-[#394C66]"
                for="keepmelogged"
                >Keep me logged in</label
              >
            </div>
          </div>
          <!--end sign_in top frame-->
          <div
            class="flex flex-col justify-center items-center gap-[24px] sm:w-[400px] w-[300px]"
          >
            <!--sign_in bottom frame-->
            <a
              href="#"
              id="signinbutton"
              @click="logIn"
              class="sm:w-[400px] w-[300px] h-[40px] flexiblecontainer rounded-lg text-white text-[14px] font-semibold"
              :class="
                formControlAccount != '' && formControlPass != ''
                  ? 'bg-[#3663F2]'
                  : 'bg-[#DAE3F1]'
              "
              >Sign In</a
            >
            <div class="sm:block hidden">
              <p class="text-[14px] font-normal text-[#394C66]">
                By continuing with Google, Apple, or Email, you agree to Yartu
                <a href="#" class="font-semibold text-[#3663F2]"
                  >Terms of Service</a
                >
                and
                <a href="#" class="font-semibold text-[#3663F2]"
                  >Privacy Policy</a
                >.
              </p>
            </div>
            <div
              class="h-[1px] bg-[#E5EBF5] block sm:w-[400px] w-[300px]"
            ></div>
            <div>
              <p class="text-[16px] font-semibold text-[#394C66]">
                Don’t have an account?
                <a href="#" class="font-semibold text-[#3663F2]"
                  >Create account</a
                >
              </p>
            </div>
          </div>
          <!--end sign_in bottom frame-->
        </div>
        <!--end popup frame content wrapper-->
      </div>
      <!--end popup frame-->
    </div>
    <!--end main frame-->
  </div>
  <!--end content wrapper-->
</template>

<style></style>
