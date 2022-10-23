<template>
  <!-- hero section start -->
  <section id="hero" class="hero py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 gap-4 col-md-6 d-flex flex-column justify-content-center align-items-start">
          
          <h1>{{$t('Hi')}} <span class="text-main"> {{$t('Shaima')}}</span></h1>
          <h6>
            {{$t('text')}}
          </h6>
          <a href="#about" class="mt-2 btn btn-lg text-white" role="button">
            {{$t('read')}}
          </a>
        </div>
        <div class="col-lg-7">
            <img src="~/assets/images/hero.png" alt="" />
        </div>
      </div>
    </div>
  </section>
  <!-- hero section End -->
</template>

<script>
export default {};
</script>
