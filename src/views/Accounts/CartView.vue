<template>
  <div id="cart" class="p-4">
    <div>
      <div class="">
        <h5 class="m-auto">Fournisseur : Arrissala</h5>
        <!-- <p>{{ userCart }}</p> -->
        <div class="mt-5">
          <div class="row justify-content-center align-items-center">
            <div class="col-12 row text-center text-lg-start">
              <h5 class="fw-bold d-lg-flex">Ton Panier</h5>
              <p class="d-lg-flex">
                Vous n'êtes pas prêt à passer à la caisse ?
                <span
                  class="fw-bold cursor-pointer ms-1"
                  @click.prevent="this.$router.go(-1)"
                  >Poursuivez vos achats.</span
                >
              </p>
              <div
                v-for="(bookType, type) in userCart.arrissala"
                :key="type"
                class="row align-items-center justify-content-center align-items-stretch m-0"
              >
                <p class="fw-bold text-lg-left" :style="typeStyle(type)">
                  {{ transformType(bookType.totalPrice, type) }}
                </p>
                <!-- <p>{{ bookType }}</p> -->
                <div
                  v-for="item in bookType.purchasedBooks"
                  :key="item.id"
                  class="container p-0 p-lg-3 col-12 col-md-6 col-lg-4 row align-items-stretch box"
                >
                  <div class="col-12 col-md-6 p-3">
                    <swiper-container
                      class="row w-full align-center justify-content-center px-4 p-relative"
                      :slides-per-view="1"
                      :space-between="50"
                      navigation="true"
                      pagination="true"
                      css-mode="true"
                    >
                      <swiper-slide v-for="src in item.book.imgSrc" :key="src">
                        <img :src="src" class="mt-3" />
                      </swiper-slide>
                      <!-- Custom navigation arrows --></swiper-container
                    >
                  </div>
                  <div
                    class="col-10 col-lg-4 p-0 m-0 text-left d-flex flex-d-c justify-content-around mt-2 mb-2"
                  >
                    <h6 class="m-0">{{ item.book.title }}</h6>
                    <p class="m-0">SKU : {{ item.book.id }}</p>
                    <p class="m-0">Niveau :{{ item.book.level }}</p>
                    <template v-if="editMode && item.book === editingBook">
                      <input
                        v-model="item.quantity"
                        type="number"
                        min="1"
                        @blur="toggleEditMode(item)"
                      />
                    </template>
                    <p
                      v-if="!editMode || item.book !== editingBook"
                      class="m-0"
                    >
                      Quantité :{{ item.quantity }}
                    </p>
                    <p
                      v-if="!editMode || item.book !== editingBook"
                      class="m-0"
                    >
                      prix :{{ item.book.price }}
                    </p>
                    <h6 class="m-0 mt-2">
                      Sous-total :
                      {{ multiply(item.book.price, item.quantity) }} MAD
                    </h6>
                  </div>
                  <div class="col-2 d-flex flex-d-c justify-content-around">
                    <div class="modify" @click="toggleEditMode(item.book)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_464_7833)">
                          <path
                            d="M25.3086 1.4908L25.588 1.21142C25.7983 1.00127 26.0479 0.834588 26.3226 0.7209C26.5973 0.607211 26.8917 0.548741 27.189 0.548828C27.4863 0.548915 27.7807 0.607558 28.0553 0.721407C28.3299 0.835256 28.5794 1.00208 28.7896 1.21236C28.9997 1.42264 29.1664 1.67225 29.2801 1.94695C29.3938 2.22165 29.4523 2.51604 29.4522 2.81334C29.4521 3.11063 29.3935 3.40499 29.2796 3.67962C29.1658 3.95425 28.9989 4.20377 28.7886 4.41392L28.5093 4.69142C28.9872 5.22742 29.242 5.92591 29.2214 6.64373C29.2008 7.36154 28.9065 8.0443 28.3986 8.55205L9.10115 27.8514C8.98051 27.9714 8.82949 28.0563 8.66427 28.097L1.16427 29.972C1.00732 30.0111 0.842929 30.0089 0.687073 29.9657C0.531218 29.9224 0.389202 29.8396 0.274832 29.7252C0.160461 29.6109 0.0776257 29.4689 0.034378 29.313C-0.00886962 29.1571 -0.0110585 28.9927 0.0280242 28.8358L1.90302 21.3358C1.94405 21.1712 2.02894 21.0209 2.14865 20.9008L20.2274 2.82205C20.0466 2.69479 19.8266 2.63554 19.6064 2.65475C19.3861 2.67396 19.1797 2.77041 19.0236 2.92705L12.8511 9.10142C12.764 9.18859 12.6605 9.25773 12.5466 9.30491C12.4327 9.35208 12.3107 9.37636 12.1874 9.37636C12.0641 9.37636 11.9421 9.35208 11.8282 9.30491C11.7143 9.25773 11.6108 9.18859 11.5236 9.10142C11.4365 9.01426 11.3673 8.91078 11.3202 8.79689C11.273 8.68301 11.2487 8.56094 11.2487 8.43767C11.2487 8.3144 11.273 8.19234 11.3202 8.07845C11.3673 7.96457 11.4365 7.86109 11.5236 7.77392L17.6999 1.60142C18.208 1.09333 18.8913 0.798964 19.6095 0.778741C20.3278 0.758518 21.0265 1.01397 21.5624 1.49267C22.0776 1.03225 22.7442 0.777572 23.4352 0.777226C24.1261 0.776881 24.793 1.03089 25.3086 1.4908Z"
                            fill="#0871F4"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_464_7833">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div
                      class="text-decoration-underline cursor-pointer"
                      @click="deleteItem(item.book, item.quantity)"
                    >
                      retirer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 m-auto mt-5">
              <h5 class="text-center mb-3">Récapitulatif de commande</h5>
              <div class="d-flex justify-content-between align-items-center">
                <p class="p-0 m-0">Mode de Recuperation</p>
                <select name="" id="" v-model="modeR">
                  <option value="" disabled hidden selected>__Choisir</option>
                  <option
                    v-for="mode in recuperationOptions"
                    :key="mode.value"
                    :value="mode.value"
                  >
                    {{ mode.label }}
                  </option>
                </select>
              </div>
              <transition>
                <p
                  v-if="this.modeR === 'transport'"
                  class="c-grey d-flex m-0 p-0"
                >
                  La commande arrive apres 24 heures da la sortie du stock
                </p></transition
              >
              <div class="d-flex justify-content-between align-items-center">
                <p class="p-0 my-2">Total</p>
                <div class="fw-bold">MAD</div>
              </div>
              <button class="btn w-full my-2 mb-3 btn-success">
                Continuer vers le paiement
              </button>
              <div class="d-flex justify-content-between">
                <button
                  @click.prevent="this.$router.go(-1)"
                  class="btn c-black bg-white mt-3 me-2 d-flex btn-light continue-buying d-flex align-items-center"
                >
                  <i class="fa-solid fa-left-long me-2"></i>
                  <p class="m-0 p-0">Poursuivre vos achats</p>
                </button>
                <button
                  class="btn btn-warning d-flex mt-3 ms-2 cancel align-items-center"
                >
                  <i class="fa-solid fa-xmark me-2"></i>
                  <p class="p-0 m-0">Annuler votre panier</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { userCart } from "@/Js/User.js";
import { register } from "swiper/element/bundle";
import { addToCartLivresDataArrissala } from "@/views/ArrissalaFolder/livres.js";
register();
export default {
  name: "cart-page",
  data() {
    return {
      editMode: false,
      editingBook: null,
      arrissala: [],
      aladnane: [],
      userCart,
      modeR: "",
      recuperationOptions: [
        {
          label: "Surplace",
          value: "surplace",
        },
        {
          label: "Transport",
          value: "transport",
        },
      ],
    };
  },
  computed: {
    // arrissalaLivres() {
    //   return userCart.arrissala.livres;
    // },
    // isArrissalaPurchased() {
    //   return userCart.arrissala.livres.totalPrice !== 0;
    // },
    // purchasedItems() {
    //   return userCart.arrissala.livres.filter((item) => {
    //     return item.addedToCart;
    //   });
    // },
  },
  methods: {
    toggleEditMode(book) {
      this.editingBook = book;
      this.editMode = !this.editMode;
    },
    multiply(item1, item2) {
      return parseFloat(item1 * item2);
    },
    deleteItem(book, quantity) {
      // console.log("item", book, "bookType", type, arrissala);
      console.log("book:", book, "with quantity", quantity);
      addToCartLivresDataArrissala(book, quantity);
    },
    transformType(totalPrice, type) {
      if (totalPrice === 0) {
        return null;
      } else if (type === "ecritures") {
        return "Ecritures";
      } else if (type === "livres") {
        return "Livres & Histoires";
      } else if (type === "organisation") {
        return "Organisation";
      } else {
        // Handle other cases if needed
        return "Unknown Type";
      }
    },
    typeStyle(type) {
      if (type === "ecritures") {
        return { color: "var(--ecritures-color)" };
      } else if (type === "livres") {
        return { color: "var(--livres-color)" };
      } else if (type === "organisation") {
        return { color: "red" };
      } else {
        // Handle other cases if needed
        return { color: "blue" };
      }
    },
  },
};
</script>
<style lang="scss" scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
#cart {
  select {
    margin-left: 10px;
    padding: 8px;
    font-size: 14px;
    // width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    flex: 1;

    &:focus {
      outline: none;
      border-color: #4caf50;
    }
  }

  // Styles for the recuperationOptions
  option {
    font-size: 14px;
  }
  .box {
    // border-bottom: 2px solid #909090;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 90%;
      background-color: #909090;
      height: 2px;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      @media (max-width: 767px) {
        width: 100%;
      }
    }
    p {
      font-size: 13px;
    }
    swiper-container {
      max-height: 150px;
      img {
        max-height: 100px;
      }
    }
  }
  .continue-buying {
    border: 1px solid black;
    color: black;
    &:hover {
      color: white;
      background: black !important;
    }
  }
  // .cancel {
  //   &:hover {
  //     color: white;
  //     background: black !important;
  //   }
  // }
  .modify {
    svg {
      max-height: 20px;
      cursor: pointer;
    }
  }
}
</style>
