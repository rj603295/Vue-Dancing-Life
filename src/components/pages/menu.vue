<template>
  <div class="hello">
    
   
    
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/page/">卡片1</router-link>
      </li>
      <li class="nav-item">
         <router-link class="nav-link" to="/page/child2">卡片2</router-link>
      </li>
      <li class="nav-item">
         <!-- <router-link class="nav-link" to="/page/child3">卡片3</router-link> -->
         <a href="#" class="nav-link" @click.prevent="updatePath">切換到指定頁面</a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
      updatePath(){
          this.$router.push('/page/child2');
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

