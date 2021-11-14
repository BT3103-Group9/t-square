<template>

<div class="container">
      <Carousel :itemsToShow="3.95" :wrapAround="true">
    <Slide :key="slide">
        <div class="carousel__item">
            <img class="mx-auto rounded-circle" src="@/assets/HomePage/1.jpg" alt="">
            <h4>Parveen Anand</h4>
            <p class="text-muted px-4">"This platform is fantastic! No commission fees, no charges at all."</p>
        
        </div>
    </Slide>

    <Slide :key="slide">
        <div class="carousel__item">
            <img src="@/assets/HomePage/2.jpg" alt="">
            <h4>Diana Petersen</h4>
            <p class="text-muted px-4">"I have always needed such an app and you guys have created the opportunity for me and so many other tutors!"</p>
        </div>
    </Slide>

    <Slide :key="slide">
        <div class="carousel__item">
            <img src="@/assets/HomePage/3.jpg" alt="">
            <h4>Larry Parker</h4>
            <p class="text-muted px-4">"Revolutionary App! This should be the way how tutors and tutees should connect from now on!"</p>
        </div>
    </Slide>
    <Slide :key="slide">
        <div class="carousel__item">
          <!-- Change img src, remove comment once done -->
            <img class="mb-3" src="@/assets/HomePage/4.webp" alt="">
            <h4>Insert Name</h4>
            <p class="text-muted px-4">Insert Feedback</p>
        </div>
    </Slide>

    <Slide :key="slide">
        <div class="carousel__item">
          <!-- Change img src, remove comment once done -->
            <img class="mb-3" src="@/assets/HomePage/5.webp" alt="">
            <h4>Insert Name</h4>
            <p class="text-muted px-4">Insert Feedback</p>
        </div>
    </Slide>


    <template #addons>
        <Navigation />
        <Pagination />
    </template>
  </Carousel>

</div>


</template>

<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { configureCompat } from 'vue';

configureCompat({ 
  COMPONENT_ASYNC: false,
  WATCH_ARRAY: false
})




export default {
  components: {
    NavBar,
    Footer,
    Carousel,
    Slide,
    Pagination,
    Navigation,

  }
}
</script>




<style scoped>
@import "../components/css/carousel.css";

Footer {
	position:fixed;
	bottom:0;
	/* left:0; */
	width:100%;
	/* height:300px; */
}

.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}

.carousel__pagination-button{
  background-color: black !important;
}

.carousel__slide{
  margin: 10px;
  border-radius: 50px; 
  width: 400px;
  height: 450px;
}

img {
  border-radius: 50%;
  margin-bottom: 30px;
  width: 60%
}


</style>
