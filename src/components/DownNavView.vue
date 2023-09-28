<template>
  <div>
    <ul
      v-if="!large"
      class="nav nav-pills fixed-bottom bg-body-tertiary d-flex justify-content-around"
    >
      <li class="nav-item">
        <a class="nav-link wishlist p-relative" aria-current="page" href="#">
          <div class="wishlist-counter">{{ infosGenerales.wishlistCount }}</div>
          <i
            class="fa-regular fa-heart"
            v-if="infosGenerales.wishlistCount === 0"
          ></i>
          <i
            class="fa-solid fa-heart"
            v-if="infosGenerales.wishlistCount !== 0"
          ></i
        ></a>
      </li>
      <li class="nav-item" v-if="shouldShowEqualize" @click="toggleSidebar">
        <div>
          <a class="nav-link" href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
            >
              <path
                d="M13.125 2.75V2.28125C13.124 1.90859 12.9755 1.55148 12.712 1.28797C12.4485 1.02447 12.0914 0.87599 11.7188 0.875H7.03125C6.65859 0.87599 6.30148 1.02447 6.03797 1.28797C5.77447 1.55148 5.62599 1.90859 5.625 2.28125V2.75H0V6.5H5.625V6.96875C5.625 7.74125 6.25688 8.375 7.03125 8.375H11.7188C12.4913 8.375 13.125 7.74125 13.125 6.96875V6.5H30V2.75H13.125ZM7.5 6.5V2.75H11.25V6.5H7.5ZM24.375 11.6562C24.3735 11.2837 24.2249 10.9269 23.9615 10.6635C23.6981 10.4001 23.3413 10.2515 22.9688 10.25H18.2812C17.9087 10.2515 17.5519 10.4001 17.2885 10.6635C17.0251 10.9269 16.8765 11.2837 16.875 11.6562V12.125H0V15.875H16.875V16.3438C16.875 17.1162 17.5088 17.75 18.2812 17.75H22.9688C23.7412 17.75 24.375 17.1162 24.375 16.3438V15.875H30V12.125H24.375V11.6562ZM18.75 15.875V12.125H22.5V15.875H18.75ZM13.125 21.0312C13.1235 20.6587 12.9749 20.3019 12.7115 20.0385C12.4481 19.7751 12.0913 19.6265 11.7188 19.625H7.03125C6.65859 19.626 6.30148 19.7745 6.03797 20.038C5.77447 20.3015 5.62599 20.6586 5.625 21.0312V21.5H0V25.25H5.625V25.7188C5.625 26.4912 6.25688 27.125 7.03125 27.125H11.7188C12.4913 27.125 13.125 26.4912 13.125 25.7188V25.25H30V21.5H13.125V21.0312ZM7.5 25.25V21.5H11.25V25.25H7.5Z"
                fill="black"
              /></svg
          ></a>
        </div>
      </li>
      <li class="nav-item">
        <div>
          <a class="nav-link" href="#"><i class="fa-regular fa-user"></i></a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link p-relative shop" href="#"
          ><div class="p-absolute shop-counter">
            {{ infosGenerales.cartCount }}
          </div>
          <i class="fa-solid fa-cart-shopping"></i
        ></a>
      </li>
    </ul>
  </div>
</template>
<script>
// import { eventBus } from "@/event-bus.js";
import { eventBus } from "@/event-bus.js";
const routesWithEqualizeAllowed = ["/Acceuil/arrissala/LivresHistoires"];
import { infosGenerales } from "@/Js/CartWishlist";
export default {
  data() {
    return {
      large: "true",
      infosGenerales,
      sideBarClicked: true,
      receivedData: "lalala",
    };
  },
  methods: {
    showTab() {
      let screenWidth = window.innerWidth;
      /* eslint-disable */console.log(...oo_oo(`2141143104_0`,screenWidth, "this is screen width"));
      if (screenWidth < 991) {
        this.large = false;
      } else {
        this.large = true;
      }
    },
    toggleSidebar() {
         this.sideBarClicked = !this.sideBarClicked;
     // Emit an event with the data you want to transfer
    //   eventBus.$emit('data-to-transfer', receivedData ); // Replace someData with your actual data
      eventBus.value.dataToTransfer=this.sideBarClicked;
    }
  },
  computed: {
    shouldShowEqualize() {
      return routesWithEqualizeAllowed.includes(this.$route.path);
    },
  },
  mounted() {
    this.showTab();
    window.addEventListener("resize", this.showTab);
  },
  beforeUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("resize", this.showTab);
  },
};
</script>
<style lang="scss" scoped>
ul {
  z-index: 999999999;
  li {
    font-size: 24px;
    .fa-user {
      color: #333333;
    }
    .shop {
      position: relative;
      color: var(--brand-color);
      .shop-counter {
        background-color: var(--brand-color);
      }
    }
    .wishlist {
      color: var(--heart-color);
      .wishlist-counter {
        background-color: var(--heart-color);
      }
    }
    .wishlist-counter,
    .shop-counter {
      font-size: 17px;
      position: absolute;
      top: 5px;
      right: 5px;
      color: inherit;
      /* top: -5px; */
      /* right: -5px; */
      border-radius: 50%;
      height: 20px;
      width: 20px;
      justify-content: center;
      align-items: center;
      display: flex;
      color: white;
    }
  }
}
    
</style>