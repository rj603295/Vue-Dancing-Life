<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="login-bg bg-cover position-relative">
      <div class="bg-lighter bg-position">
        <h1 class="text-center pt-5 font-logo font-weight-bold">DANCING LIFE</h1>
        <h2 class="text-center font-weight-bold">後台管理</h2>
        <form class="form-signin" @submit.prevent="signin" @keyup.enter="signin">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.username" required autofocus>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-block btn-color" type="submit">登入</button>
            <p class="mt-5 mb-3 text-muted">&copy; Jess Chiu</p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
    }
  },
  methods: {
    signin(){
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.post(api, vm.user).then((response) => {
        vm.isLoading = false;
        if(response.data.success){
          vm.$router.push('/admin/products');
        }
      });
    },
  }
}
</script>
<style lang="scss" scoped>
  .login-bg{
    height: 100vh;
    background-image: url(~@/assets/img/loginbg.jpg)
  }
  .bg-position{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

