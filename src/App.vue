<template>
  <div id="app">
    <navbar />
    <router-view />
    <FooterView />
  </div>
</template>
<script>
import navbar from "@/components/global/NavbarView.vue";
import FooterView from "@/components/global/FooterView.vue";
export default {
  components: {
    navbar,
    FooterView,
  },
  mounted() {
    const swiper = document.querySelector(".swiper-button-next");
    console.log(swiper, "this is the button ");
    if (swiper) {
      swiper.style.transform = "translateY(-50%)";
      swiper.addEventListener("click", () => {
        // Add your custom behavior here
        alert("Next button clicked!");
      });
    }
  },
  directives: {
    font: {
      bind(el, binding) {
        el.style.fontSize = binding.value + "px";
      },
    },
    height: {
      bind(el, binding) {
        el.style.height = binding.value + "px";
      },
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.swiper-button-next {
  background-color: #ff6600; /* Change the background color */
  color: #fff; /* Change the text color */
  font-size: 20px; /* Change the font size */
  /* Add any other styling you want */
}
</style>
