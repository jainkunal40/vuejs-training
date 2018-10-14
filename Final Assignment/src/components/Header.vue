<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container">
			<router-link :to="{name: 'Home'}" exact tag="a" class="navbar-brand">Stock Trader
			</router-link>
			<button class="navbar-toggler" type="button" @click="openMobileMenu = !openMobileMenu">
					                     <span class="navbar-toggler-icon"/>
					                   </button>
	
			<div :class="{'show': openMobileMenu}" class="collapse navbar-collapse">
				<ul class="navbar-nav mr-auto">
	
					<router-link :to="{path: 'portfolio'}" exact tag="li" class="nav-item">
						<a class="nav-link">Portfolio</a>
					</router-link>
					<router-link :to="{path: 'stocks'}" exact tag="li" class="nav-item">
						<a class="nav-link">Stocks</a>
					</router-link>
				</ul>
	
				<div class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-toggle="dropdown" @click="isDropdownOpen = !isDropdownOpen">
					                 Save & Load
					               </a>
					<div :class="{'show': isDropdownOpen}" class="dropdown-menu">
						<a class="dropdown-item" @click="save">Save Data</a>
						<a class="dropdown-item" @click="load">Load Data</a>
					</div>
				</div>
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<a class="nav-link" @click="dayEnd">End Day <span class="sr-only">(current)</span></a>
					</li>
				</ul>
				<strong class="navbar-text navbar-right">Funds: ${{funds}}</strong>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
</template>

<script>
	import {
		mapActions,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				isDropdownOpen: false,
				openMobileMenu: false
			};
		},
		computed: {
			...mapGetters([
				'funds'
			])
		},
		methods: {
			...mapActions([
				'dayEnd',
				'save',
				'load'
			]),
		}
	};
</script>
<style>
	.card-header {
		background-color: lightgreen
	}
</style>
