<template>
	<header dir="ltr">
		<nav class="navbar fixed-top navbar-expand-lg bg-light shadow-sm p-3 mb-5 bg-body rounded ">
			<div class="container">
				<a class="navbar-brand" href="#"><span>Portfolio</span></a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0" :dir="this.$dir()">
						<li class="nav-item">
							<a class="nav-link" href="#about">{{$t('navabout')}}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#skills">{{$t('navskills')}}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#project">{{$t('navproject')}}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-main" href="/Resume?.pdf" download="Resume" target="_blank">{{$t('navresume')}}</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#contact" >{{$t('navcontact')}}</a>
						</li>
						
					</ul>
					<div class="nav-item mb-2 mb-md-0 mx-md-2">
							<!-- <a class="btn px-2 text-white" href="" >{{$t('navlang')}}</a> -->
							<nuxt-link
								class="btn text-white "
  								v-for="locale in availableLocales"
								:key="locale.code"
								:to="switchLocalePath(locale.code)">{{$t('navlang') }}</nuxt-link>
					</div>
					
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	
	name: "Myheader",
	computed: {
		availableLocales () {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		}
	}
};
</script>
