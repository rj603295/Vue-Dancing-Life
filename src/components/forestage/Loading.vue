<template>
    <div>
      <div class="loadingbg">
        <div class="loading">
          <img src="@/assets/img/loader.gif" alt="">
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  .loading img{
    height: 15vh;
    width: 15vw;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    background-repeat: no-repeat;
    position: absolute;
    z-index: 9999;
  }
  .loadingbg{
    background-color: white;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top:0;
    left:0; 
    z-index: 9990;
    opacity: 0.5;
  }
</style>