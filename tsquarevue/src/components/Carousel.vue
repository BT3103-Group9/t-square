<template>
  <div>
    <VueSlickCarousel :arrows="true" :dots="true">
      <div>
          <img class="mx-auto rounded-circle" src="../assets/HomePage/1.jpg" alt="..." />
						<h4>Parveen Anand</h4>
						<p class="text-muted">"This platform is fantastic! No commission fees, no charges at all."</p>
      </div>
      <div><img class="mx-auto rounded-circle" src="../assets/HomePage/2.jpg" alt="..." />
						<h4>Diana Petersen</h4>
						<p class="text-muted">"I have always needed such an app and you guys have created the opportunity for me and so many other tutors!"</p></div>
      <!-- <div>3</div>
      <div>4</div> -->
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'Carousel',
    components: { VueSlickCarousel },
  }
</script>