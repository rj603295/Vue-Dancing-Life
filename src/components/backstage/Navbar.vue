<template>
  <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0 font-logo" href="#">DANCING LIFE</a>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#" @click.prevent="signout">登出</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
      
    }
  },
  methods: {
    signout(){
      const vm = this;
      const url = `${process.env.APIPATH}/logout`;
      vm.$http.post(url).then((response) => {
        if(response.data.success){
          vm.$router.push('/login');
        }
      })
    }
  }
}
</script>