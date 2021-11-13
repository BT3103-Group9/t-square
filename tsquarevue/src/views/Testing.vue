<template>
  <NavBar/>
  <Footer/>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer

  }
}
</script>

<style scoped>

Footer {
	position:fixed;
	bottom:0;
	/* left:0; */
	width:100%;
	/* height:300px; */
}

</style>