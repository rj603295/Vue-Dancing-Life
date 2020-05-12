<template>
    <div>
         <loading :active.sync="isLoading"></loading>
         <div class="sticky-top">
             <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-dark">
            <div class="container-fluid">
                <router-link class="text-decoration-none" to="/"><h1 class="h2" style="color: white;">Dancing Life</h1></router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav mr-auto py-1 list-group ml-3">
                             <li class="nav-item active">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('ALL'); visibility='all'">ALL</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('TEE'); visibility='TEE'">T-SHIRT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#"  @click.prevent="typeBtn('PANTS'); visibility='PANTS'">PANTS</a>
                            </li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               ACCESSORIES
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('ACCESSORIES'); visibility='ACCESSORIES'">ALL</a>
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('NECKLACE'); visibility='NECKLACE'">NECKLACE</a>
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('BRACELET'); visibility='BRACELET'">BRACELET</a>
                                <a class="dropdown-item" href="#" @click.prevent="typeBtn('HAT'); visibility='HAT'">HAT</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('SHOES'); visibility='SHOES'">SHOES</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#" @click.prevent="typeBtn('JACKET'); visibility='JACKET'">JACKET</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
         </div>
        
    </div>
</template>
<script>
export default {
   
      data(){
        return {
            products: [],
            isLoading: false,
            product: {},
            status:{
                loadingItem: '',
            },
            cart: [],
            coupon_code: '',
            form: {
                user:{
                    name: '',
                    tel: '',
                    email: '',
                    address: '',
                },
                message:'',
            },
            visibility: '',
            pagination: [],
            count: '',
        };
    },
    methods:{
         typeBtn(visibility){
            this.$router.push({ path: '/set/shopping', query: { type: visibility } });
            console.log(this.$route.params.type)
        },
        
    },
}
</script>