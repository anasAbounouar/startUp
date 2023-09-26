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
    <ul
      v-if="!large"
      class="nav nav-pills fixed-bottom bg-body-tertiary d-flex justify-content-around"
    >
      <li class="nav-item">
        <a class="nav-link wishlist p-relative" aria-current="page" href="#">
          <div class="wishlist-counter">0</div>
          <i class="fa-regular fa-heart"></i
        ></a>
      </li>
      <li class="nav-item">
        <div>
          <a class="nav-link" href="#"><i class="fa-regular fa-user"></i></a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link p-relative shop" href="#"
          ><div class="p-absolute shop-counter">0</div>
          <i class="fa-solid fa-cart-shopping"></i
        ></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "footer",
  data() {
    return {
      large: "true",
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
