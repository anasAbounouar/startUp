<template>
  <div>
    <div class="NavInter">
      <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary scrolled">
        <div class="container">
          <router-link to="/" exact>
            <a class="navbar-brand" href="#"
              ><img src="@/assets/logo.png" alt="" class="img-fluid logo"
            /></a>
          </router-link>
          <form class="d-flex p-relative" role="search" id="rechercheGenerale">
            <input
              class="form-control me-2"
              type="search"
              placeholder="--Recherche generale"
              aria-label="Search"
            />
            <button class="btn btn-outline-success p-absolute" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M27.1281 23.5501L21.9461 18.3689C21.7122 18.1351 21.3952 18.0052 21.0625 18.0052H20.2153C21.6498 16.1707 22.5022 13.8634 22.5022 11.3533C22.5022 5.38225 17.6633 0.544067 11.6912 0.544067C5.71912 0.544067 0.880127 5.38225 0.880127 11.3533C0.880127 17.3244 5.71912 22.1626 11.6912 22.1626C14.2016 22.1626 16.5094 21.3103 18.3441 19.876V20.7231C18.3441 21.0557 18.4741 21.3727 18.708 21.6065L23.89 26.7877C24.3786 27.2762 25.1686 27.2762 25.652 26.7877L27.1229 25.317C27.6115 24.8285 27.6115 24.0386 27.1281 23.5501ZM11.6912 18.0052C8.01647 18.0052 5.03823 15.0326 5.03823 11.3533C5.03823 7.67922 8.01127 4.70147 11.6912 4.70147C15.3659 4.70147 18.3441 7.67402 18.3441 11.3533C18.3441 15.0274 15.3711 18.0052 11.6912 18.0052Z"
                  fill="black"
                />
              </svg>
            </button>
          </form>
          <div class="duplicated-button">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link
                    to="Login"
                    class="nav-link align-items-center d-flex flex-d-c"
                    aria-current="page"
                    ><svg
                      v-if="!AccountsData.isLoggedIn"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 42 42"
                      fill="none"
                    >
                      <path
                        d="M32.3925 11.8125C32.3925 18.102 27.2895 23.205 21 23.205C14.7105 23.205 9.6075 18.102 9.6075 11.8125C9.6075 5.52297 14.7105 0.42 21 0.42C27.2895 0.42 32.3925 5.52297 32.3925 11.8125ZM21 27.9825C23.163 27.9825 25.2193 27.5071 27.0713 26.67H31.5C37.0676 26.67 41.58 31.1824 41.58 36.75V38.0625C41.58 40.0044 40.0044 41.58 38.0625 41.58H3.9375C1.99563 41.58 0.42 40.0044 0.42 38.0625V36.75C0.42 31.1824 4.93235 26.67 10.5 26.67H14.9291C16.7881 27.5069 18.8364 27.9825 21 27.9825Z"
                        fill="white"
                        stroke="black"
                        stroke-width="0.84"
                      />
                    </svg>
                    <img
                      class="avatar"
                      v-else
                      :src="AccountsData.imgSrc"
                      alt=""
                    />
                    <span v-if="!AccountsData.isLoggedIn"> Log In</span>
                    <span v-else> Profile</span></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    to=""
                    class="nav-link p-relative align-items-center d-flex flex-d-c f-relative"
                    aria-current="page"
                    ><div class="p-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="25"
                        viewBox="0 0 46 37"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.2912 3.29292C6.21511 4.25674 2.84445 7.31437 2.84445 12.6486C2.84445 19.7498 9.01405 26.6987 22.7556 33.2765C36.4971 26.6987 42.6667 19.7498 42.6667 12.6486C42.6667 7.31713 39.296 4.25674 35.2199 3.29292C31.0357 2.3014 26.3396 3.57819 23.9019 6.8103C23.7698 6.98547 23.5971 7.12791 23.398 7.22608C23.1989 7.32426 22.9788 7.37541 22.7556 7.37541C22.5324 7.37541 22.3123 7.32426 22.1131 7.22608C21.914 7.12791 21.7414 6.98547 21.6093 6.8103C19.1716 3.57819 14.4754 2.3014 10.2912 3.29292ZM22.7556 3.87453C19.3707 0.570409 14.1312 -0.468188 9.61992 0.598105C4.45156 1.82503 0 5.8631 0 12.6486C0 21.6221 7.86774 29.3548 22.1383 36.0627C22.3309 36.153 22.5418 36.1999 22.7556 36.1999C22.9693 36.1999 23.1803 36.153 23.3728 36.0627C37.6434 29.3548 45.5111 21.6248 45.5111 12.6486C45.5111 5.8631 41.0596 1.82503 35.8912 0.600874C31.3799 -0.465419 26.1433 0.575948 22.7556 3.87453Z"
                          fill="#FF0000"
                          fill-opacity="0.7392"
                        />
                      </svg>
                      <span class="p-absolute wishlist">
                        {{ infosGenerales.wishlistCount }}</span
                      >
                    </div>
                    <span> Wishlist</span></router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    to=""
                    class="nav-link p-relative d-flex f-relative"
                    aria-current="page"
                  >
                    <div class="p-relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 58 58"
                        fill="none"
                      >
                        <path
                          d="M57.4613 11.8108C57.3095 11.6286 57.1196 11.482 56.9048 11.3814C56.6901 11.2808 56.4559 11.2286 56.2188 11.2286H12.2852L10.8917 3.547C10.7338 2.67707 10.2755 1.89021 9.59666 1.32371C8.91785 0.75722 8.06168 0.447071 7.17754 0.447388H2.3125C1.8836 0.447388 1.47226 0.617769 1.16898 0.921051C0.865694 1.22433 0.695312 1.63567 0.695312 2.06457C0.695312 2.49348 0.865694 2.90482 1.16898 3.2081C1.47226 3.51138 1.8836 3.68176 2.3125 3.68176H7.16406C7.29171 3.67968 7.41595 3.72296 7.51466 3.80391C7.61338 3.88486 7.68017 3.99821 7.70313 4.12379L14.5789 41.939C14.797 43.1453 15.3847 44.2539 16.2607 45.1114C15.2029 45.9575 14.413 47.092 13.9865 48.3777C13.5601 49.6634 13.5154 51.0452 13.8578 52.3557C14.2003 53.6663 14.9153 54.8495 15.9162 55.7622C16.9171 56.6749 18.1611 57.278 19.4977 57.4984C20.8342 57.7188 22.2059 57.5471 23.4469 57.0042C24.6879 56.4612 25.745 55.5702 26.4902 54.439C27.2353 53.3078 27.6367 51.9849 27.6456 50.6304C27.6546 49.2758 27.2708 47.9477 26.5407 46.8067H40.6156C39.7775 48.1182 39.3999 49.6714 39.5423 51.2212C39.6847 52.7711 40.3389 54.2294 41.4019 55.3663C42.4649 56.5031 43.876 57.2538 45.4128 57.4998C46.9497 57.7459 48.5247 57.4734 49.8894 56.7252C51.2542 55.977 52.3311 54.7958 52.9502 53.3679C53.5693 51.94 53.6955 50.3466 53.3088 48.839C52.9221 47.3314 52.0445 45.9955 50.8145 45.0419C49.5845 44.0882 48.072 43.5712 46.5156 43.5724H20.4169C19.7857 43.5725 19.1745 43.351 18.6898 42.9466C18.2051 42.5422 17.8777 41.9805 17.7647 41.3595L16.7944 36.0255H48.6988C50.0876 36.0259 51.4323 35.5388 52.4987 34.6492C53.5651 33.7597 54.2855 32.524 54.5342 31.1578L57.809 13.1342C57.8513 12.9016 57.8421 12.6626 57.782 12.4339C57.7219 12.2053 57.6125 11.9926 57.4613 11.8108ZM24.4141 50.5802C24.4141 51.3265 24.1928 52.056 23.7781 52.6766C23.3635 53.2971 22.7742 53.7808 22.0847 54.0664C21.3952 54.352 20.6364 54.4267 19.9045 54.2811C19.1725 54.1355 18.5001 53.7761 17.9724 53.2484C17.4447 52.7207 17.0853 52.0483 16.9397 51.3163C16.7941 50.5844 16.8688 49.8256 17.1544 49.1361C17.44 48.4466 17.9237 47.8573 18.5442 47.4427C19.1648 47.028 19.8943 46.8067 20.6406 46.8067C21.6414 46.8067 22.6012 47.2043 23.3089 47.912C24.0165 48.6196 24.4141 49.5794 24.4141 50.5802ZM50.2891 50.5802C50.2891 51.3265 50.0678 52.056 49.6531 52.6766C49.2385 53.2971 48.6492 53.7808 47.9597 54.0664C47.2702 54.352 46.5115 54.4267 45.7795 54.2811C45.0475 54.1355 44.3751 53.7761 43.8474 53.2484C43.3197 52.7207 42.9603 52.0483 42.8147 51.3163C42.6691 50.5844 42.7438 49.8256 43.0294 49.1361C43.315 48.4466 43.7987 47.8573 44.4192 47.4427C45.0398 47.028 45.7693 46.8067 46.5156 46.8067C47.5164 46.8067 48.4762 47.2043 49.1839 47.912C49.8915 48.6196 50.2891 49.5794 50.2891 50.5802ZM51.351 30.5783C51.238 31.1993 50.9107 31.761 50.426 32.1654C49.9413 32.5698 49.3301 32.7912 48.6988 32.7911H16.2068L12.8754 14.463H54.2808L51.351 30.5783Z"
                          fill="#2196F3"
                        />
                      </svg>
                      <p class="p-absolute panier">
                        {{ infosGenerales.cartCount }}
                      </p>
                      <audio
                        ref="coinSound"
                        src="@/assets/coinSound.mp3"
                      ></audio>
                    </div>
                    <span class="ms-2 price">
                      {{ infosGenerales.totalPrice }} DH
                    </span></router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { infosGenerales } from "@/Js/CartWishlist";
import { AccountsData } from "@/Js/Accounts";
function debounce(func, delay) {
  let timeoutId;
  return function () {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

export default {
  watch: {
    // Watch for changes in cartCount
    "infosGenerales.cartCount": function (newCount, oldCount) {
      if (newCount > oldCount) {
        // If cartCount increases, play the sound
        this.playCartSound();
      }
    },
  },
  data() {
    return {
      infosGenerales,
      AccountsData,
    };
  },
  mounted() {
    // Replace the original event listener with the debounced version
    window.addEventListener("scroll", this.handleScrollDebounced);
  },
  beforeUnmount() {
    // Remove the debounced event listener on component destruction
    window.removeEventListener("scroll", this.handleScrollDebounced);
  },
  methods: {
    playCartSound() {
      // Play the cart sound
      this.$refs.coinSound.play();
    },
    handleScroll() {
      var nav = document.querySelector("nav");
      var navbar = document.querySelector(".NavInter");
      var RechercheGenerale = document.getElementById("rechercheGenerale");
      if (window.scrollY >= 50) {
        navbar.classList.add("navModification");
        navbar.classList.add("sticky-top");
        console.log(scrollY);
        nav.classList.add("sticky-top");
        nav.classList.add("bg-body-tertiary");
      } else {
        navbar.classList.remove("navModification");
      }
      console.log(RechercheGenerale);
    },
  },
  computed: {
    //Create a computed property that holds the debounced version of handleScroll
    handleScrollDebounced() {
      return debounce(this.handleScroll, 70);
    },
  },
};
</script>
<style lang="scss" scoped>
.NavInter {
  .duplicated-button {
    transition: $transitionChosen;
    flex: 1;
    @media (max-width: 991px) {
      display: none;
    }
  }
  .avatar {
    max-height: 44px;
    border-radius: 50%;
  }
  position: relative;
  transition: 1s;
  background-color: white;
  .navbar {
    .container {
      transition: $transitionChosen;
      flex-wrap: nowrap !important;
      gap: 4px;
    }
  }
  nav {
    transition: $transitionChosen;
    background: white;
    transition: 1s;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.08);
    ul {
      transition: $transitionChosen;
    }
  }
  .logo {
    max-height: 50.43px;
  }
  form {
    transition: $transitionChosen;
    input[type="search"] {
      border-radius: 6px;
      width: 250px;
      transition: 0.5s;
      border: 2px solid var(--secondary-color-lilac);
      &:focus {
        width: 350px;
      }
    }
    button {
      background-color: var(--lilac-color, #e1bee7);
      right: 8px;
      width: 48px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 0px 6px 6px 0px;
    }
  }

  li {
    display: flex;
    align-items: center;
  }
  li:last-child {
    margin-bottom: 10px;
  }
  a {
    align-items: center;
    > span {
      color: black;
      &:hover {
        color: var(--brand-color);
      }
    }
  }

  .wishlist,
  .panier {
    top: -5px;
    right: -5px;
    background-color: #ff000096;
    border-radius: 50%;
    height: 17px;
    width: 17px;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
  }
}

.navModification {
  nav {
    transition: $transitionChosen;
    a {
      display: none;
    }
    .duplicated-button {
      flex: 1;
    }
    form {
      flex: 1;
      input {
        width: 100% !important;
      }
    }
    ul {
      margin: auto;
    }
  }
}
</style>
