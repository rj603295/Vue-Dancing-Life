<template>
	<div>
		<loading :active.sync="isLoading"></loading>
		<div class="sticky-top">
			<nav class="navbar navbar-expand-lg navbar-light sticky-top bg-black">
				<div class="container-fluid">
					<router-link class="text-decoration-none font-logo" to="/"><h1 class="h2 m-0 font-weight-bold text-white">DANCING LIFE</h1></router-link>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon">
                <i class="fas fa-bars text-white font-28"></i>
              </span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav py-1 list-group ml-3">
							<li class="nav-item active category-active text-center">
								<a class="nav-link text-white" href="#" :class="{'show-category': visibility == 'all'|| visibility == ''}" @click.prevent="categoryClassification('ALL'); visibility='all'">全部</a>
							</li>
							<li class="nav-item category-active text-center">
								<a class="nav-link text-white" href="#" :class="{'show-category': visibility == 'TEE'}" @click.prevent="categoryClassification('TEE'); visibility='TEE'">短TEE</a>
							</li>
							<li class="nav-item category-active text-center">
								<a class="nav-link text-white" href="#" :class="{'show-category': visibility == 'PANTS'}" @click.prevent="categoryClassification('PANTS'); visibility='PANTS'">長褲</a>
							</li>
							<li class="nav-item dropdown category-active text-center">
								<a class="nav-link dropdown-toggle text-white" href="#" :class="{'show-category': visibility == 'ACCESSORIES'|| visibility == 'HAT'|| visibility == 'OTHERS'}" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								配件
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#" @click.prevent="categoryClassification('ACCESSORIES'); visibility='ACCESSORIES'">全部</a>
									<a class="dropdown-item" href="#" @click.prevent="categoryClassification('HAT'); visibility='HAT'">帽子</a>
									<a class="dropdown-item" href="#" @click.prevent="categoryClassification('OTHERS'); visibility='OTHERS'">其他配件</a>
								</div>
							</li>
							<li class="nav-item category-active text-center">
								<a class="nav-link text-white" href="#" :class="{'show-category': visibility == 'SHOES'}" @click.prevent="categoryClassification('SHOES'); visibility='SHOES'">鞋子</a>
							</li>
							<li class="nav-item category-active text-center">
								<a class="nav-link text-white" href="#" :class="{'show-category': visibility == 'JACKET'}" @click.prevent="categoryClassification('JACKET'); visibility='JACKET'">外套</a>
							</li>
						</ul>
            <ul class="nav-item navbar-nav list-group ml-auto">
              <li class="btn-color rounded text-center">
								<a class="btn btn-sm p-2 text-dark text-center" role="button" href="#/competition">比賽資訊</a>
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
			isLoading: false,
			visibility: '',
			category: '',
		};
	},
	methods:{
		categoryClassification(visibility){
      const vm = this;
      if(vm.$route.query.type !== visibility){
        vm.$router.push({ path: '/set/shopping', query: { type: visibility } });
      }
      else if(vm.$route.query.type === visibility){
        return;
      }
		},
		getCategory(){
			const vm = this;
			vm.category = vm.$route.query.type;
		}
	},
	created(){
		this.getCategory()
	}
}
</script>
<style lang="scss">
  .navbar-toggler-icon{
    color: white;
	}
	.show-category{
		border-bottom: 1px white solid;
		display: inline-block;
		}
	.category-active{
		&:hover a{
			border-bottom: 1px white solid;
			display: inline-block;
		}
	}
	.font-28{
		font-size: 28px;
	}
	
</style>