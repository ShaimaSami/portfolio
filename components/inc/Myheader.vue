<template>
	<header>
		<nav class="navbar fixed-top navbar-expand-lg bg-light shadow-sm p-3 mb-5 bg-body rounded">
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
					<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link" href="#about">About</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#skills">Skills</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#project">Project</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-main" href="#">Resume</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
export default {
	name: "Myheader",
};
</script>
