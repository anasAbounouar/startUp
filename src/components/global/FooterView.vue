<template>
  <div>
    <footer>
      <div class="container up">
        <div class="row mb-3 align-items-center">
          <div class="col-4 cartes d-flex align-center flex-d-c p-relative">
            <h5 class="c-white">Cartes acceptées</h5>
            <img
              class="mt-3"
              src="@/img/footer/footer_cc.png"
              alt=""
              decoding="async"
            />
          </div>
          <div
            class="col-4 application justify-content-center d-flex align-center flex-d-c p-relative"
          >
            <h5 class="c-white">Telecharger l'application</h5>
            <div class="d-md-flex align-items-center flex-md-column">
              <a href=""
                ><img
                  src="@/img/footer/appstore-en.png"
                  alt=""
                  decoding="async"
                  class="p-1 m-1"
              /></a>
              <a href=""
                ><img
                  src="@/img/footer/playstore-en.png"
                  alt=""
                  decoding="async"
                  class="p-1 m-1"
              /></a>
            </div>
          </div>
          <div class="col-4 reseaux d-flex align-center flex-d-c p-relative">
            <h2 class="c-white">Réseaux Sociaux</h2>
            <div class="social mt-3 d-flex align-center gap-10">
              <a href="https://www.facebook.com/anas.abounouar.5/">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/anasabounouar/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCMGKL5rgDxS5EQKM4xYnwBA"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="down row p-relative mt-5 c-white align-items-center justify-content-between"
        >
          <div class="logo-holder">
            <a class="navbar-brand" href="#"
              ><img src="@/assets/logo.png" alt="Logo" class="img-fluid"
            /></a>
          </div>
          <div
            class="copywrite col-4 d-flex align-items-center justify-content-center"
          >
            <p class="m-0">Copyright 2022 DipoDirect</p>
          </div>
          <div class="col-8 terms container">
            <div class="row">
              <div v-font="13" class="col-2 p-0 m-0">
                <router-link to="">Privacy Policy</router-link>
              </div>
              <div v-font="13" class="col-2 p-0 m-0">
                <router-link to="">Terms & Conditions</router-link>
              </div>
              <div v-font="13" class="col-2 p-0 m-0">
                <router-link to="">Cookie Policy</router-link>
              </div>
              <div v-font="13" class="col-2 p-0 m-0">
                <router-link to="/LivresHistoires">Contact</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- <ul
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
      <li class="nav-item" v-if="shouldShowEqualize">
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
    </ul> -->
  </div>
</template>
<script>
import { infosGenerales } from "@/Js/CartWishlist";
const routesWithEqualizeAllowed = ["/Acceuil/arrissala/LivresHistoires"];
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "footer",
  data() {
    return {
      large: "true",
      infosGenerales,
    };
  },
  methods: {
    showTab() {
      let screenWidth = window.innerWidth;
      console.log(screenWidth, "this is screen width");
      if (screenWidth < 991) {
        this.large = false;
      } else {
        this.large = true;
      }
    },
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
.logo-holder {
  display: none;
}
@media (min-width: 768px) and (max-width: 991px) {
  footer {
    .up {
      .cartes,
      .application {
        flex: 0 0 auto !important;
        width: 50% !important;
      }
      .reseaux {
        flex: 0 0 auto !important;
        width: 100% !important;
        margin-top: 20px !important;
      }
    }
  }
}
@media (max-width: 767px) {
  footer {
    .up {
      .cartes,
      .application,
      .reseaux {
        flex: 0 0 auto !important;
        width: 100% !important;
        margin-top: 30px;
      }
      .social {
        width: 100%;
        justify-content: space-around !important;
      }
    }
    .down {
      .copywrite,
      .terms {
        flex: 0 0 auto !important;
        width: 100% !important;
        padding: 10px;
        justify-content: flex-start !important;
        .row {
          flex-direction: column !important;
          margin-left: 5px !important;
          margin-right: 5px !important;
          > div {
            flex: 0 0 auto !important;
            justify-content: flex-start !important;
            display: flex;
            width: 100% !important;
            padding: 10px !important;
            padding-left: 5px !important;
          }
        }
      }
      .copywrite {
        padding-bottom: 0px;
        p {
          padding-left: 6px;
        }
      }
    }
    .logo-holder {
      display: flex;
      img {
        width: 150px;
        border-radius: 4px;
      }
    }
  }
}
footer {
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: var(--dark-color);
  .application {
    img {
      max-width: 110px;
    }
  }
  .social {
    a {
      padding: 10px;
      i {
        font-weight: 400;
        font-size: 30px;
        transition: 0.3s;
        &.fa-facebook-f {
          color: var(--facebook-color);
        }
        &.fa-instagram {
          color: var(--instagram-color);
        }
        &.fa-youtube {
          color: var(--youtube-color);
        }
      }
      &:hover {
        transform: translateY(-5px);
        .fa-facebook-f {
          color: blue;
        }
        .fa-instagram {
          color: magenta;
        }
        .fa-youtube {
          color: red;
        }
      }
    }
  }
  .terms {
    .row {
      justify-content: flex-end;
      a {
        color: var(--text-grey-color) !important;
      }
    }
  }
}
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
