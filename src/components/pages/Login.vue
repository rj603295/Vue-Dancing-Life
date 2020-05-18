<template>
  <div style="font-family:'微軟正黑體'">
    <loading :active.sync="isLoading"></loading>
      <h1 class="text-center pt-5">Dancing Life<br>後台管理</h1>
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
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
      isLoading: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    signin(){
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
    console.log(process.env.APIPATH, process.env.CUSTOMPATH)
    vm.isLoading = true;
    this.$http.post(api, vm.user)
      .then((response) => {
        console.log(response.data)
        vm.isLoading = false;
        if(response.data.success){
          vm.$router.push('/admin/products');
        }
      });
    },
  }
}
</script>
<style scoped>
  html,
body {
  height: 100%;
}

template {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: black;
  font-family: "微軟正黑體";
  
}
h1{
  font-family: "微軟正黑體";
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-color{
background: #bda579;
color: white;
}
.btn-color:hover{
    background: #97825b;
    color: white;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

