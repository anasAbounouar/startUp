<template>
  <div>
    <section id="bookInter">
      <div class="container bookPath">
        <span class="me-2">
          <router-link to="/Arrissala" class="c-black">{{
            livresData.library
          }}</router-link> </span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
        >
          <path
            d="M6.37822 5.44578L2.14655 9.69382C1.85407 9.98744 1.37429 9.99444 1.07652 9.70944L0.35301 9.02434C0.0520833 8.73939 0.0452562 8.27161 0.337784 7.98107L3.33729 4.96996L0.251188 2.04766C-0.049739 1.76271 -0.0565661 1.29493 0.235962 1.00439L0.939166 0.298466C1.23165 0.00485105 1.71143 -0.00215116 2.0092 0.282849L6.36304 4.40559C6.66387 4.68439 6.6707 5.15217 6.37822 5.44578Z"
            fill="black"
            fill-opacity="0.77"
          />
        </svg>
        <span class="ms-2 me-2">
          <router-link to="/LivresHistoires" class="c-black">{{
            livresData.arrow
          }}</router-link></span
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="10"
          viewBox="0 0 7 10"
          fill="none"
        >
          <path
            d="M6.37822 5.44578L2.14655 9.69382C1.85407 9.98744 1.37429 9.99444 1.07652 9.70944L0.35301 9.02434C0.0520833 8.73939 0.0452562 8.27161 0.337784 7.98107L3.33729 4.96996L0.251188 2.04766C-0.049739 1.76271 -0.0565661 1.29493 0.235962 1.00439L0.939166 0.298466C1.23165 0.00485105 1.71143 -0.00215116 2.0092 0.282849L6.36304 4.40559C6.66387 4.68439 6.6707 5.15217 6.37822 5.44578Z"
            fill="black"
            fill-opacity="0.77"
          />
        </svg>
        <span class="ms-2"> {{ book.title }}</span>
      </div>
      <div class="content container">
        <div class="row">
          <div class="col-6 pb-3">
            <div class="p-relative p-relative">
              <div @click.prevent="addToWishlist(book)" class="z-99 d-flex">
                <i
                  class="fa-regular fa-heart z-99 my-heart"
                  v-show="!book.addedToWishlist"
                ></i>
                <i
                  class="fa-solid fa-heart z-99 my-heart"
                  v-show="book.addedToWishlist"
                ></i>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-6 p-relative">
                  <div class="carousel-container">
                    <carousel
                      class="row w-full align-center justify-content-center px-4 p-relative"
                      :autoplay="false"
                      :nav="false"
                      :items="1"
                      :smartSpeed="2000"
                      :autoplayTimeout="9000"
                      :dots="false"
                    >
                      <template v-for="src in book.imgSrc" :key="src">
                        <div>
                          <img :src="src" class="mt-3" />
                          <i
                            class="fa-solid fa-magnifying-glass-plus zoom-in"
                          ></i>
                        </div>
                      </template>
                      <!-- Custom navigation arrows -->
                      <template #prev>
                        <button
                          v-show="book.imgSrc.length > 1"
                          class="carousel-arrow prev-arrow p-absolute"
                        >
                          <!-- Add your custom left arrow icon here -->
                          <i class="fa-solid fa-angles-left"></i>
                        </button>
                      </template>
                      <template #next>
                        <button
                          v-show="book.imgSrc.length > 1"
                          class="carousel-arrow next-arrow p-absolute"
                        >
                          <!-- Add your custom right arrow icon here -->
                          <i class="fa-solid fa-angles-right"></i>
                        </button> </template
                    ></carousel>
                  </div>
                </div>
                <div class="col-6 p-relative p-3">
                  <div class="d-flex flex-d-c align-items-flex-start">
                    <p class="m-0">
                      {{ book.title }}
                    </p>
                    <p class="m-0">
                      {{ book.level }}
                    </p>
                    <span class="c-text-color">Add your review</span>
                    <h5 class="c-brand">{{ book.price }} DH</h5>
                    <span v-format="13" class="SKU"> SKU: {{ book.id }}</span>
                    <span>Partager sur :</span>
                    <ul
                      class="partagerSur d-flex justify-content-between w-full px-0"
                    >
                      <li>
                        <i class="fa-brands fa-facebook"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-whatsapp"></i>
                      </li>
                      <li>
                        <i class="fa-brands fa-instagram"></i>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 39 39"
                          fill="none"
                        >
                          <circle cx="19.5" cy="19.5" r="19.5" fill="#1787E0" />
                          <path
                            d="M24.1674 15.4675L15.3268 20.9931C15.4818 21.4867 15.5329 22.007 15.4768 22.5213L23.6781 25.5963C24.202 24.8488 24.9805 24.3181 25.8677 24.1037C26.7549 23.8892 27.6898 24.0057 28.4973 24.4313C29.3048 24.8569 29.9293 25.5623 30.2538 26.4155C30.5783 27.2686 30.5805 28.2108 30.26 29.0654C29.9396 29.92 29.3184 30.6285 28.5129 31.0578C27.7075 31.4872 26.7731 31.6081 25.8849 31.3978C24.9967 31.1875 24.2156 30.6605 23.6882 29.9156C23.1608 29.1706 22.9232 28.2589 23.0199 27.3513L14.8206 24.2763C14.3812 24.903 13.7605 25.3802 13.042 25.6439C12.3235 25.9076 11.5415 25.9452 10.801 25.7515C10.0605 25.5578 9.39703 25.1421 8.89966 24.5603C8.4023 23.9786 8.09486 23.2585 8.01864 22.497C7.94242 21.7354 8.10108 20.9687 8.47329 20.2999C8.8455 19.6311 9.41345 19.0922 10.1009 18.7556C10.7883 18.419 11.5622 18.3008 12.3187 18.4169C13.0753 18.533 13.7782 18.8778 14.3331 19.405L23.1718 13.8794C22.8969 13.009 22.9489 12.0683 23.318 11.2335C23.6871 10.3988 24.348 9.72728 25.1767 9.34492C26.0055 8.96256 26.9453 8.89559 27.8199 9.15655C28.6945 9.41752 29.4439 9.98852 29.9277 10.7625C30.4114 11.5365 30.5963 12.4603 30.4476 13.3609C30.2989 14.2614 29.8269 15.0768 29.12 15.6542C28.4132 16.2316 27.52 16.5314 26.6079 16.4974C25.6958 16.4634 24.8274 16.0979 24.1656 15.4694L24.1674 15.4675Z"
                            fill="white"
                          />
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 pb-3 purchaseBox p-relative">
            <h5
              class="d-flex"
              :class="{
                'c-brand': !book.addedToCart,
                'c-text-lilac': book.addedToCart,
              }"
            >
              {{ calculateLocalPrice }} DH
            </h5>

            <button
              v-if="book.addedToCart == true"
              class="btn modifier btn-primary p-absolute"
              @click.prevent="cartButtonClicking(book, quantity)"
            >
              Modifier ?
            </button>
            <div class="container mt-4">
              <div class="row mt-3 align-items-end justify-content-between">
                <div class="col-3">
                  <p class="m-0 c-alt-green">Votre Quantité</p>
                  <form action="" class="quantity-form">
                    <i
                      class="fa-solid fa-caret-left"
                      @click="decrementQuantity(book)"
                      v-if="!book.addedToCart"
                    ></i>
                    <input
                      type="text"
                      v-model="quantity"
                      min="1"
                      max="10"
                      class="quantity-input"
                      @change="handleQuantityChange(book)"
                      :disabled="book.addedToCart"
                    />
                    <i
                      class="fa-solid fa-caret-right"
                      @click="incrementQuantity(book)"
                      v-if="!book.addedToCart"
                    ></i>
                  </form>
                </div>
                <div class="col-4">
                  <button
                    class="btn btn-primary ajouter"
                    @click.prevent="cartButtonClicking(book, quantity)"
                    :class="{
                      NotAddedToCartClass: book.addedToCart == false,
                    }"
                    :disabled="book.addedToCart"
                  >
                    <p class="p-0 m-0 fs-13">
                      {{
                        book.addedToCart == true
                          ? "Bien ajouté &#10004;"
                          : "+ Ajouter au panier"
                      }}
                    </p>
                  </button>
                </div>
                <div
                  class="col-3 d-flex align-items-center justify-content-center flex-d-c"
                >
                  <p class="m-0 c-alt-green">Quantité max</p>
                  <span class="maxQuantity">{{ book.maxQuantity }}</span>
                </div>
              </div>
            </div>
            <div class="metaData p-4 d-flex align-items-center flex-d-c">
              <div class="p-relative">
                <i class="fa-solid fa-truck-fast"></i>
                <router-link to="">
                  <span>When will me order arrive ?</span></router-link
                >
              </div>
              <div class="p-relative">
                <i class="fa-solid fa-shield-halved"></i>
                <span class="c-text-color">3D Secured Payment by Card</span>
              </div>
              <div class="p-relative">
                <i class="fa-regular fa-heart"></i>
                <router-link to="">
                  <span>Voir la liste d'envies</span></router-link
                >
              </div>
            </div>
          </div>
        </div>
        <ul class="d-flex g-4 detailsUl">
          <li class="bottomBorder">Details</li>
        </ul>
        <table class="w-full mb-4" id="detailsTable">
          <tbody>
            <tr>
              <td>Categorie</td>
              <td>Livres</td>
            </tr>
            <tr>
              <td>Niveau</td>
              <td>CP</td>
            </tr>

            <tr>
              <td>Année</td>
              <td>2022</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>Arabe</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>
                Manuel+Cahier d'exercices (vous devez prendre les 2 a la fois )
              </td>
            </tr>
          </tbody>
        </table>
        <h5 class="m-auto fw-bold my-4">Ecrire votre avis</h5>
        <span class="me-auto d-flex">Que pensez vous ?</span>
        <form action="">
          <textarea
            name="review"
            id="reviewTextarea"
            cols="30"
            rows="10"
          ></textarea>
          <button class="btn btn-primary">Soumettre</button>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
// import { livresData, addToCart, addToWishlist } from "./livres";
import { getCookie } from "@/Js/cookieUtils";
import {
  livresDataArrissala,
  addToCartLivresDataArrissala,
  addToWishlistLivresDataArrissala,
} from "@/views/ArrissalaFolder/livres.js";
import {
  livresDataAladnane,
  addToCartLivresDataAladnane,
  addToWishlistLivresDataAladnane,
} from "@/views/AladnaneFolder/livres.js";
export default {
  name: "item-page",
  data() {
    return {
      myPath: this.$route.path,
      itemId: this.$route.params.itemId,
      book: {},
      livresDataArrissala,
      livresDataAladnane,
      quantity: 1,
    };
  },
  mounted() {
    // Find the book in the books array based on the ID
    this.book = this.livresData.books.find((book) => {
      console.log(book.id, +this.itemId, book.id === this.itemId);
      return book.id === +this.itemId;
    });
    console.log("this is the book chosen", this.book);
    console.log("this is the this.itemId from path ", this.itemId);
    // Retrieve the value from the cookie
    const addedToCartCookie = getCookie(`addedToCart_${this.itemId}`);
    // Update the addedToCart property of the book
    this.book.addedToCart = addedToCartCookie === "true";
    const addedToWishlistCookie = getCookie(`addedToWishlist_${this.itemId}`);
    // Update the addedToCart property of the book
    this.book.addedToWishlist = addedToWishlistCookie === "true";
  },
  methods: {
    addToCart(item) {
      if (this.islivresDataArrissala) {
        addToCartLivresDataArrissala(item);
      } else if (this.islivresDataAladnane) {
        addToCartLivresDataAladnane(item);
      }
    },
    addToWishlist(item) {
      if (this.islivresDataArrissala) {
        addToWishlistLivresDataArrissala(item);
      } else if (this.islivresDataAladnane) {
        addToWishlistLivresDataAladnane(item);
      }
    },
    incrementQuantity(book) {
      if (this.quantity < book.maxQuantity)
        this.quantity = parseInt(this.quantity) + 1;
      else {
        return null;
      }
    },
    decrementQuantity() {
      if (parseInt(this.quantity) > 1) {
        this.quantity = parseInt(this.quantity) - 1;
      } else {
        return null;
      }
    },
    handleQuantityChange(book) {
      const enteredValue = parseInt(this.quantity);
      if (isNaN(enteredValue) || enteredValue < 1) {
        this.quantity = 1;
      } else if (enteredValue > book.maxQuantity) {
        this.quantity = book.maxQuantity;
      }
    },
    cartButtonClicking(book, quantity) {
      this.addToCart(book, quantity);
      this.addedToCart = !this.addedToCart;
    },
  },
  computed: {
    calculateLocalPrice() {
      return (this.book.price * this.quantity).toFixed(2);
    },
    islivresDataArrissala() {
      //   console.log(
      //     " real path is : ",
      //     this.$route.path,
      //     "and the expected is ",
      //     `Acceuil/arrissala/LivresHistoires/${this.itemId}`,
      //     "equality is ",
      //     this.$route.path === `/Acceuil/arrissala/LivresHistoires/${this.itemId}`
      //   );
      return (
        this.$route.path === `/Acceuil/arrissala/LivresHistoires/${this.itemId}`
      );
    },
    islivresDataAladnane() {
      return (
        this.$route.path === `/Acceuil/aladnane/LivresHistoires/${this.itemId}`
      );
    },

    livresData() {
      if (this.islivresDataArrissala) {
        console.log(livresDataArrissala);
        return livresDataArrissala;
      } else if (this.islivresDataAladnane) {
        console.log(livresDataAladnane);
        return livresDataAladnane;
      }
      return console.log("i failed findin livres data , anas");
    },
  },
  watch: {
    quantity: {
      immediate: true,
      handler() {
        this.calculateLocalPrice;
      },
    },
  },
};
</script>
