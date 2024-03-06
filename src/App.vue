<template>
<div>
  <div>
   <myNavbar/>
  </div>
  <div>
    <homeSlider/>
  </div>
  <div>
    <homeSection/>
  </div>
  <div>
    <homeGallery/>
    </div>
  </div>
</template>

<script>
import myNavbar from './components/Navbar.vue'
import homeSlider from './components/Home-slider.vue'
import homeSection from './components/home-section.vue'
import homeGallery from './components/home-gallery.vue'

export default {
  name: 'App',
  components: {
    myNavbar,
    homeSlider,
    homeSection,
    homeGallery,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
