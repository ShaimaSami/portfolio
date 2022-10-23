<template>
  <!-- Project section start -->
  <section id="project" class="projects py-5">
    <div class="container">
      <div class="row">
        <div class="section-title mb-2">
            <h1 class="mt-5 text-center">{{$t('project')}}</h1>
            <p class="mt-1 text-center">
              {{$t('projectext')}}
            </p>
        </div>
        <div class="col-lg-12">
          <div class="card mb-3 shadow p-3 mb-5 bg-body rounded-4">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="~assets/images/reci.png" class="img-fluid" />
              </div>
              <div class="col-md-8">
                <div class="card-body cdby">
                  <h2 class="card-title ms-2">{{$t('projectitle')}}</h2>
                  <p class="card-text ms-2 mt-4">
                    {{$t('projectitletext')}}
                  </p>
                  <a href="#" class="btn btn-lg ms-2 text-white">{{$t('more')}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Project section End -->
</template>

<script>
export default {};
</script>
