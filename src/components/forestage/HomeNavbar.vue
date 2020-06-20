<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light font-weight-bold">
			<div class="container-fluid">
				<a class="text-decoration-none mr-3 font-logo" href="#/dist"><h1 class="font-weight-bold">DANCING LIFE</h1></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon">
						<i class="fas fa-bars text-white font-28"></i>
					</span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav mr-auto a-font-size">
						<li class="nav-item">
								<a href="#/dist" class="nav-link text-white font-weight-bold">首頁</a>
						</li>
						<li class="nav-item">
								<a href="#/set/shopping" class="nav-link text-white font-weight-bold">購物商城</a>
						</li>
						<li class="nav-item">
								<a href="#/competition" class="nav-link text-white font-weight-bold">比賽資訊</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
  .a-font-size a{
    font-size: 1rem;
  }
  nav a{
    color: white;
	}
	.font-28{
		font-size: 28px;
	}
</style>
