<template>
  <!-- About section start -->
  <section id="about" class="about py-5">
    <div class="container">
      <div class="row">
        <div class="section-title mb-4">
            <h1 class="text-center">{{$t('aboutme')}}</h1>
        </div>
        <div class="col-lg-6 col-md-6 p-3">
            <img
            src="~/assets/images/about.png"
            class=""
            alt=""
            />
        </div>
        <div class="col-lg-6 col-md-6 bg-dark text-white dark p-4 rounded-5 d-flex flex-column justify-content-center align-items-start">
          <h1 class="ms-3">{{$t('name')}}</h1>
          <p class="mt-3 ms-3">
            {{$t('aboutext')}}
          </p>
          <a href="~/assets/Resume?.pdf" download="" class="mt-2 ms-3 mb-4 btn btn-lg text-white" role="button"
            >{{$t('resume')}}</a
          >
        </div>
        <!-- About section End -->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

