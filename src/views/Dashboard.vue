<template>
  <div>
    <Navbar/>
    <Alert></Alert>
    <div class="container-fluid">
      <div class="row">
        <Sidebar></Sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/backstage/Sidebar';
import Navbar from '@/components/backstage/Navbar';
import Alert from '@/components/backstage/AlertMessage';
import Pagination from '@/components/backstage/Pagination';
export default {
  components:{
    Sidebar,
    Navbar,
    Alert,
    Pagination,
  },
  data() {
    return {
      
    }
  },
}
</script>