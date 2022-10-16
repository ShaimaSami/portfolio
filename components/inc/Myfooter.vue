<template>
    <footer id="contact" class="bg-dark text-dark pt-5 pb-4 text-white dark" >
      <div class="container text-center text-md-left">
        <div class="row text-start text-md-left">
          <div class="col-md-6 col-lg-6 mx-auto mt-3">
            <h5 class="text-uppercase mb-4 fw-bold">
             <span>{{$t('name')}}</span>
            </h5>
            <p>
              {{$t('text')}}
            </p>
          </div>

          <div class="col-lg-4 col-md-4 mb-md-0 mb-3">
            <h5><span> {{$t('contactme')}} </span></h5>
            <ul class="list-unstyled" :dir="this.$dir()">
              <li><a style="text-decoration: none; color: aliceblue;" href="mailto:shaimaldossari@gmail.com">Shaimaldossari@gmail.com</a></li>
              <li><a style="text-decoration: none; color: aliceblue;" href="tel:+966583020022">+966 5 8302 0022</a></li>
            </ul>
          </div>
        </div>

        <hr class="mb-4">

        <div class="row align-items-center">
          <div class="col-md-6 col-lg-12">
            <p>&copy; Copyright 2022, <span> Portfolio</span></p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'Myfooter'
}
</script>

