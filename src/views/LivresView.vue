<template>
  <div>
    <section id="intern" class="p-relative pb-4">
      <BigFilter
        v-model:selectedLanguage="selectedLanguage"
        v-model:selectedBebe="selectedBebe"
        v-model:selectedPrimaire="selectedPrimaire"
        v-model:selectedCollege="selectedCollege"
        v-model:selectedLycee="selectedLycee"
        v-mode:sideBarClicked="sideBarClicked"
        :sideBarClicked="sideBarClicked"
        @update:sideBarClicked="updateSideBarClicked"
      />
      <div id="library-content" :style="libraryContentStyle">
        <!-- {{ this.infosGenerales.wishlistCount }} -->
        <div class="container">
          <div class="row justify-content-space-between pt-3">
            <div
              class="col-sm-md-12 col-5 align-items-baseline d-flex my-3 justify-content-center-sm-md"
            >
              <span class="me-2">
                <router-link to="/Arrissala" class="c-black"
                  >Arrissala</router-link
                > </span
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
              <span class="ms-2">{{ arrow }}</span>
            </div>
            <div class="col-sm-md-12 col-6">
              <h6 class="fw-bold">Changer la categorie</h6>
              <form action="" class="m-auto">
                <select
                  v-model="selectedCategorie"
                  class="w-full"
                  @change="navigateToPage"
                >
                  <option value="" disabled hidden>_Livres</option>
                  <option
                    :value="categorie.label"
                    v-for="(categorie, index) in categories"
                    :key="index"
                  >
                    {{ categorie.label }}
                  </option>
                </select>
              </form>
            </div>
          </div>
          <div class="row my-3">
            <div class="col-sm-md-12 col-6 align-items-center d-lg-flex">
              <h3>{{ livresData.name }}</h3>
            </div>
            <div class="col-sm-md-12 col-5 form-search-container">
              <form class="d-flex p-relative ms-auto" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  aria-label="Search"
                  v-model="searchedLocal"
                  placeholder="Chercher votre livre ici"
                />
              </form>
            </div>
          </div>
          <p class="d-flex">
            Showing
            {{ showRemainingBooks ? "0" : displayedBooks.length }}-{{
              showRemainingBooks ? displayedBooks.length : bookCount
            }}
            of
            <span class="ms-2"> {{ bookCount }} results </span>
          </p>
          <button
            @click.prevent="toggleBooks"
            class="arrow-btn"
            v-if="this.GeneralFilter.length > 20"
          >
            <span v-if="showRemainingBooks"
              ><i class="fa-solid fa-right-long"></i
            ></span>
            <!-- Left arrow symbol -->
            <span v-else
              ><i class="fa-solid fa-right-long force-rotation"></i
            ></span>
            <!-- Right arrow symbol -->
          </button>
          <div class="row mb-3 justify-content-left" v-if="showRemainingBooks">
            <div
              class="g-4 col-of-box"
              :class="{
                'col-sidebar': sideBarClicked,
                'col-n-sidebar': !sideBarClicked,
              }"
              v-for="book in displayedBooks"
              :key="book.id"
            >
              <div id="routerBox">
                <div class="box p-relative">
                  <div class="p-relative">
                    <div
                      @click.prevent="addToWishlist(book)"
                      class="p-absolute z-99"
                    >
                      <i
                        class="fa-regular fa-heart z-99 my-heart"
                        v-show="!book.addedToWishlist"
                      ></i>
                      <i
                        class="fa-solid fa-heart z-99 my-heart"
                        v-show="book.addedToWishlist"
                      ></i>
                    </div>
                    <div
                      v-show="book.littleBooksCount > 1"
                      class="littleBooksCount"
                    >
                      <span> ({{ book.littleBooksCount }}) </span>
                    </div>
                  </div>
                  <div
                    class="carousel-container"
                    @click.prevent="goToPage(book.id)"
                  >
                    <swiper-container
                      class="row w-full align-center justify-content-center px-4 p-relative"
                      :slides-per-view="1"
                      :space-between="50"
                      navigation="true"
                      pagination="true"
                      css-mode="true"
                    >
                      <swiper-slide v-for="src in book.imgSrc" :key="src">
                        <div :key="src">
                          <img :src="src" class="mt-3" />
                        </div>
                      </swiper-slide>
                      <!-- Custom navigation arrows --></swiper-container
                    >
                  </div>
                  <div class="down-actions">
                    <div
                      class="d-flex align-items-center flex-d-c descriptionPanier"
                    >
                      <div class="level">
                        {{ book.level }}
                      </div>
                      <div class="title">
                        {{ book.title }}
                      </div>
                      <div class="nowprice">{{ book.price }} DH</div>
                    </div>
                    <div
                      class="d-flex align-center p-2 justify-content-between-flex actionPanier"
                    >
                      <button
                        class="btn btn-primary ajouter"
                        @click.prevent="addToCart(book, null)"
                        :class="{
                          addedToCartClass: book.addedToCart == true,
                        }"
                      >
                        <p class="p-0 m-0 fs-13">
                          {{
                            book.addedToCart == true
                              ? "Bien ajouté &#10004;"
                              : "+ Ajouter au panier"
                          }}
                        </p>
                      </button>
                      <button class="btn btn-primary apercu">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <path
                            d="M23.5498 21.3L31.0498 28.8L28.7998 31.05L21.2998 23.55V22.365L20.8948 21.945C19.1308 23.4658 16.8788 24.3016 14.5498 24.3C11.9639 24.3 9.48399 23.2728 7.65551 21.4443C5.82703 19.6158 4.7998 17.1358 4.7998 14.55C4.7998 11.9641 5.82703 9.48418 7.65551 7.6557C9.48399 5.82722 11.9639 4.79999 14.5498 4.79999C17.1357 4.79999 19.6156 5.82722 21.4441 7.6557C23.2726 9.48418 24.2998 11.9641 24.2998 14.55C24.2998 16.965 23.4148 19.185 21.9448 20.895L22.3648 21.3H23.5498ZM14.5498 21.3C18.2998 21.3 21.2998 18.3 21.2998 14.55C21.2998 10.8 18.2998 7.79999 14.5498 7.79999C10.7998 7.79999 7.7998 10.8 7.7998 14.55C7.7998 18.3 10.7998 21.3 14.5498 21.3ZM18.2998 15.3H15.2998V18.3H13.7998V15.3H10.7998V13.8H13.7998V10.8H15.2998V13.8H18.2998V15.3Z"
                            fill="#008000"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3" v-else>
            <div
              class="g-4 col-of-box"
              :class="{
                'col-lg-custom col-md-3': sideBarClicked,
                'col-lg-3 col-md-4': !sideBarClicked,
              }"
              v-for="book in remainingBooks"
              :key="book.id"
            >
              <div id="routerBox">
                <div class="box p-relative">
                  <div class="p-relative">
                    <div
                      @click.prevent="addToWishlist(book)"
                      class="p-absolute z-99"
                    >
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

                  <div
                    class="carousel-container"
                    @click.prevent="goToPage(book.id)"
                  >
                    <swiper-container
                      class="row w-full align-center justify-content-center px-4 p-relative"
                      :slides-per-view="1"
                      :space-between="50"
                      navigation="true"
                      pagination="true"
                      css-mode="true"
                    >
                      <swiper-slide v-for="src in book.imgSrc" :key="src">
                        <div :key="src">
                          <img :src="src" class="mt-3" />
                        </div> </swiper-slide
                    ></swiper-container>
                  </div>

                  <div class="down-actions">
                    <div
                      class="d-flex align-items-center flex-d-c descriptionPanier"
                    >
                      <div class="level">
                        {{ book.level }}
                      </div>
                      <div class="title">
                        {{ book.title }}
                      </div>
                      <div class="nowprice">{{ book.price }} DH</div>
                    </div>
                    <div
                      class="d-flex align-center p-2 justify-content-between-flex actionPanier"
                    >
                      <button
                        class="btn btn-primary ajouter"
                        @click.prevent="addToCart(book, null)"
                        :class="{
                          addedToCartClass: book.addedToCart == true,
                        }"
                      >
                        <p class="p-0 m-0 fs-13">
                          {{
                            book.addedToCart == true
                              ? "Bien ajouté &#10004;"
                              : "+ Ajouter au panier"
                          }}
                        </p>
                      </button>
                      <button class="btn btn-primary apercu">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <path
                            d="M23.5498 21.3L31.0498 28.8L28.7998 31.05L21.2998 23.55V22.365L20.8948 21.945C19.1308 23.4658 16.8788 24.3016 14.5498 24.3C11.9639 24.3 9.48399 23.2728 7.65551 21.4443C5.82703 19.6158 4.7998 17.1358 4.7998 14.55C4.7998 11.9641 5.82703 9.48418 7.65551 7.6557C9.48399 5.82722 11.9639 4.79999 14.5498 4.79999C17.1357 4.79999 19.6156 5.82722 21.4441 7.6557C23.2726 9.48418 24.2998 11.9641 24.2998 14.55C24.2998 16.965 23.4148 19.185 21.9448 20.895L22.3648 21.3H23.5498ZM14.5498 21.3C18.2998 21.3 21.2998 18.3 21.2998 14.55C21.2998 10.8 18.2998 7.79999 14.5498 7.79999C10.7998 7.79999 7.7998 10.8 7.7998 14.55C7.7998 18.3 10.7998 21.3 14.5498 21.3ZM18.2998 15.3H15.2998V18.3H13.7998V15.3H10.7998V13.8H13.7998V10.8H15.2998V13.8H18.2998V15.3Z"
                            fill="#008000"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            @click.prevent="toggleBooks"
            class="arrow-btn"
            v-if="this.GeneralFilter.length > 20"
          >
            <span v-if="showRemainingBooks"
              ><i class="fa-solid fa-right-long"></i
            ></span>
            <!-- Left arrow symbol -->
            <span v-else
              ><i class="fa-solid fa-right-long force-rotation"></i
            ></span>
            <!-- Right arrow symbol -->
          </button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { eventBus } from "@/event-bus.js";
import BigFilter from "@/components/global/BigFilterView.vue";
import { getCookie } from "@/Js/cookieUtils";
import { mapActions } from "vuex"; // Assuming you are using Vuex for managing state
import { register } from "swiper/element/bundle";
import { infosGenerales } from "@/Js/CartWishlist";
// import { eventBus } from "@/main.js";
register();
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
  name: "arrissala-books",
  components: {
    BigFilter,
  },
  data() {
    return {
      myPath: this.$route.path,
      typeOfItems: this.$route.params.type,
      livresArrissalaPath: "/Acceuil/arrissala/LivresHistoires",
      livresAladnanePath: "/Acceuil/aladnane/LivresHistoires",
      infosGenerales,
      sideBarClicked: true,
      livresDataArrissala,
      livresDataAladnane,
      searchedLocal: "",
      selectedLanguage: "0",
      selectedBebe: "",
      selectedPrimaire: "",
      selectedCollege: "",
      selectedLycee: "",
      levelsBebe: ["Tout", "Petite", "Moyenne", "Grande"],
      levelsPrimaire: ["Tout", "CP", "CE1", "CE2", "CM1", "CM2"],
      levelsCollege: ["Tout", "1ère année", "2ème année", "3ème année"],
      levelsLycee: ["Tout", "Tranc Commun", "1 Bac", "2 Bac"],
      arrow: "Livres & Hisotoires",
      selectedCategorie: "",
      categories: [
        { label: "Ecriture", value: "Ecriture", route: "/Ecritures" },
        {
          label: "Organisation",
          value: "Organisation",
          route: "/TopBleu",
        },
      ],
      showRemainingBooks: true,
      isSidebarHidden: false,
    };
  },
  methods: {
    addToCartLivresDataArrissala(item) {
      if (this.myPath === this.livresArrissalaPath) {
        addToCartLivresDataArrissala(item);
      } else if (this.myPath === this.livresAladnanePath) {
        addToCartLivresDataAladnane(item);
      }
    },
    addToWishlist(item) {
      if (this.myPath === this.livresArrissalaPath) {
        addToWishlistLivresDataArrissala(item);
      } else if (this.myPath === this.livresAladnanePath) {
        addToWishlistLivresDataAladnane(item);
      }
      // addToWishlistLivresDataArrissala(item);
      // Additional logic specific to addToWishlist function, if needed
      // ...
    },
    toggleBooks() {
      this.showRemainingBooks = !this.showRemainingBooks;
    },
    loadBookData() {
      this.livresData.books.forEach((book) => {
        const addedToWishlist = getCookie(`addedToWishlist_${book.id}`);
        if (addedToWishlist === "true") {
          book.addedToWishlist = true;
        } else {
          book.addedToWishlist = false;
        }

        const addedToCart = getCookie(`addedToCart_${book.id}`);
        if (addedToCart === "true") {
          book.addedToCart = true;
        } else {
          book.addedToCart = false;
        }
      });
    },
    ...mapActions(["navigateToRoute"]), // Assuming you have a Vuex action to handle navigation

    navigateToPage() {
      if (this.selectedCategorie) {
        const selectedCategorie = this.categories.find(
          (categorie) => categorie.value === this.selectedCategorie
        );
        if (selectedCategorie) {
          this.$router.push(selectedCategorie.route);
        }
      }
    },
    updateSideBarClicked(value) {
      this.sideBarClicked = value; // Update the parent data property
    },
    goToPage(myBookId) {
      console.log("im executing the gotopage");
      this.$router.push({
        name: "item-page",
        params: { name: "item-page", type: this.typeOfItems, itemId: myBookId },
      });
    },
  },
  created() {
    this.loadBookData();
    // eventBus.$on("equalizer-clicked", (value) => {
    //   this.sideBarClicked = value; // Update the variable
    // });
  },
  computed: {
    receivedData() {
      console.log(eventBus.value.dataToTransfer, "event buuuus");
      // Access the data from the event bus
      return eventBus.value.dataToTransfer;
    },
    languageFilter() {
      if (this.selectedLanguage === "0") {
        return this.livresData.books;
      }
      return this.livresData.books.filter((book) => {
        return book.langue === this.selectedLanguage;
      });
    },
    LevelFilter() {
      if (this.selectedBebe !== "" && this.selectedBebe !== "Tout") {
        return this.livresData.books.filter(
          (book) => book.level === this.selectedBebe
        );
      } else if (
        this.selectedPrimaire !== "" &&
        this.selectedPrimaire !== "Tout"
      ) {
        return this.livresData.books.filter(
          (book) => book.level === this.selectedPrimaire
        );
      } else if (
        this.selectedCollege !== "" &&
        this.selectedCollege !== "Tout"
      ) {
        return this.livresData.books.filter(
          (book) => book.level === this.selectedCollege
        );
      } else if (this.selectedLycee !== "" && this.selectedLycee !== "Tout") {
        return this.livresData.books.filter(
          (book) => book.level === this.selectedLycee
        );
      } else {
        return this.livresData.books;
      }
    },
    filterBySearchTerm() {
      if (this.searchedLocal !== "") {
        let filtering = new RegExp(this.searchedLocal, "i", "g");
        return this.livresData.books.filter((book) =>
          book.title.match(filtering)
        );
      }
      return this.livresData.books;
    },
    GeneralFilter() {
      return this.LevelFilter.filter((book) => {
        // Assuming book.langue is the language property of a book
        return (
          this.languageFilter.includes(book) &&
          this.filterBySearchTerm.includes(book)
        );
      });
    },
    bookCount() {
      return this.GeneralFilter.length;
    },
    displayedBooks() {
      const maxBooks = 20;
      if (this.GeneralFilter.length <= maxBooks) {
        return this.GeneralFilter;
      } else {
        return this.GeneralFilter.slice(0, maxBooks);
      }
    },
    remainingBooks() {
      const maxBooks = 20;
      if (this.GeneralFilter.length > maxBooks) {
        return this.GeneralFilter.slice(maxBooks);
      } else {
        return [];
      }
    },
    libraryContentStyle() {
      if (this.sideBarClicked) {
        if (window.innerWidth < 767) {
          return {
            marginLeft: "0px",
          };
        } else {
          return {
            marginLeft: "62px",
          };
        }
      } else {
        if (window.innerWidth < 767) {
          return {
            marginLeft: "0px",
          };
        }
        return {
          marginLeft: "var(--bigFilter-width)",
        };
      }
    },
    livresData() {
      if (this.myPath === this.livresArrissalaPath) {
        return this.livresDataArrissala;
      } else if (this.myPath === this.livresAladnanePath) {
        return this.livresDataAladnane;
      }
      return console.log("i found no livresdata for current path");
    },
  },
  watch: {
    selectedBebe(newValue) {
      if (newValue !== "") {
        this.selectedPrimaire = "";
        this.selectedCollege = "";
        // this.updateFilteredBooks();
        this.showRemainingBooks = true;
      }
    },
    selectedPrimaire(newValue) {
      if (newValue !== "") {
        this.selectedBebe = "";
        this.selectedCollege = "";
        // this.updateFilteredBooks();
        this.showRemainingBooks = true;
      }
    },
    selectedCollege(newValue) {
      if (newValue !== "") {
        this.selectedBebe = "";
        this.selectedPrimaire = "";
        // this.updateFilteredBooks();
        this.showRemainingBooks = true;
      }
    },
    selectedLycee(newValue) {
      if (newValue !== "") {
        this.selectedCollege = "";
        this.selectedPrimaire = "";

        this.showRemainingBooks = true;
      }
    },
    searchedLocal(newValue) {
      if (newValue !== "") {
        this.showRemainingBooks = true;
      }
    },
    sideBarClicked() {
      this.receivedData = this.sideBarClicked;
    },
    receivedData() {
      this.sideBarClicked = this.receivedData;
    },
  },
  mounted() {
    if (this.sideBarClicked) {
      if (window.innerWidth < 767) {
        document.getElementById("bigFilter").style.display = "0px";
        document.getElementById("bigFilter").style.zIndex = "-1";
      } else {
        document.getElementById("bigFilter").style.width = "62px";
      }
      document.getElementById("langue").style.display = "none";
      document.getElementById("niveau").style.display = "none";
      // document.querySelector(".hamburger").style.margin = "auto!important";
    } else if (!this.sideBarClicked) {
      const screen = window.innerWidth;
      if (screen < 767) {
        document.getElementById("bigFilter").style.zIndex = "199";
        document.getElementById("bigFilter").style.width = "100%";
      } else {
        document.getElementById("bigFilter").style.width =
          "var(--bigFilter-width)";
      }

      document.getElementById("langue").style.display = "block";
      document.getElementById("niveau").style.display = "block";
    }
    this.receivedData;
  },
};
</script>
<style lang="scss">
.carousel-arrow {
  border: none;
  background: none;
  top: 50%;
  transform: translateY(50%);
  position: absolute;
  &.next-arrow {
    right: 0;
  }
  &.prev-arrow {
    left: 0px;
  }
  &:hover {
    &.next-arrow,
    &.prev-arrow {
      i {
        color: var(--brand-color);
      }
    }
  }
}
.owl-stage-outer {
  .owl-item.active {
    // width: auto !important;
    display: flex;
  }
}
#intern {
  .hamburger {
    padding: 0;
    display: block;
    margin-left: auto;
    border: none;
    margin-right: 20px;
    background-color: var(--brand-color);
    right: -20px;
    transition: 0.3s;
    i {
      font-size: 25px;
      transition: 0.2s;
    }
    &:hover {
      color: white;
    }
  }
  background-color: var(--content-color);
  padding-top: 0px;
  padding-bottom: 0px;
  min-height: 200vh;
  position: relative;
  .arrow-btn {
    transition: 0.5s;
    display: block;
    margin-left: auto;
    border: none;
    margin-right: 20px;
    i {
      font-size: 25px;
    }
    &:hover {
      color: #4169e1;
      animation: rightLeft 0.5s linear alternate infinite;
    }
  }
  .force-rotation {
    transform: rotate(180deg);
  }
  #bigFilter {
    z-index: 9999;
    &:hover {
      .arrow-btn {
        color: white;
      }
    }
    padding: 10px;
    background-color: var(--brand-color) !important;
    // height: 100%;
    // width: var(--bigFilter-width);
    .arrow-btn {
      background-color: var(--brand-color);
      right: -20px;
    }
    position: absolute;
    height: 100%;
    @media (min-width: 992px) {
      position: fixed;
      top: 0px;
      left: 0px;
      bottom: 0px;
      height: auto;
      overflow-y: auto;
      padding-top: 140px;
    }
    #niveau {
      select:focus {
        outline: none;
      }
      select {
        height: 35px;
        font-size: 16px;
        padding: 3px 10px;
        border: 2px solid #ccc;
        border-radius: 4px;
        margin-right: 10px;
        width: 90%;
        margin-left: 15px;
        option {
          border-top: 1px solid #ebebeb;
          font-weight: 40px;
          color: #5f6467;
        }
      }
    }
    h4 {
      color: var(--dark-color);
      text-align: center;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 134.766%;
    }
    form.langue {
      margin-top: 10px;
      margin-left: 20%;
      align-items: start;
      position: relative;
      div {
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px;
        label {
          cursor: pointer;
          color: #fff;
          text-align: center;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 134.766%;
          &::before {
            height: 20px;
            width: 20px;
            content: "";
            position: absolute;
            background: white;
            border-radius: 100%;
            margin-right: 10px;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);
            transition: 0.3s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          &:hover {
            color: var(--secondary-color-yellow);
          }
        }
        input {
          margin-left: 10px;
          -webkit-appearance: none;
          appearance: none;
        }
        input[type="radio"]:checked + label::before {
          background-color: var(--secondary-color-yellow);
        }
      }
    }
  }
  #littleFilter {
    cursor: pointer;
    width: var(--littleFilter-width) !important;
    .vertical-text {
      color: #2f2f2f;
      text-align: center;
      font-family: Italic;
      font-size: 47.667px;
      font-style: normal;
      font-weight: 400;
      color: var(--dark-color);
      text-align: center;
      /* margin-right: auto; */
      transform: rotateZ(-94deg) rotateY(-14deg) rotateX(-17deg);
      margin-top: 130px;
    }
    background-color: var(--littleFilter-color) !important;
    .hamburger {
      color: black;
      background: none;
    }
    &:hover {
      .hamburger {
        i {
          font-size: 30px;
          color: black;
        }
      }
    }
  }
  #bigFilter {
    transition: 0.4s;
    &:hover {
      .hamburger {
        i {
          color: white;
        }
      }
    }
  }
  #library-content {
    transition: 0.4s;
    .arrow-btn {
      &:hover {
        animation: rightLeft 0.5s linear alternate infinite;
      }
    }
    .row {
      form {
        max-width: 300px;
        input[type="search"] {
          border-radius: 6px;
          width: 100%;
          transition: 0.5s;
          border: 2px solid var(--brand-color);
          &:focus {
            box-shadow: 0 0 0 3px RGB(33, 150, 243, 0.25);
          }
        }
        select:focus {
          outline: none;
        }
        select {
          height: 35px;
          font-size: 16px;
          padding: 3px 10px;
          border: 2px solid #ccc;
          border-radius: 4px;
          margin-right: 10px;
          width: 90%;
          margin-left: 15px;
          option {
            border-top: 1px solid #ebebeb;
            font-weight: 40px;
            color: #5f6467;
          }
        }
      }
    }
    .col-of-box {
      .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // height: 100%;
        // padding: 10px;
        background-color: white;
        border-radius: 6px;
        cursor: pointer;
        height: 100%;
        img {
          max-height: 150px;
        }
        i.my-heart {
          left: 0;
          top: 0;
          padding: 1px;
          font-size: 22px;
          color: #ff0000;
          z-index: 99;
          position: absolute;
          transition: 0.3s;
          &:hover {
            color: var(--brand-color);
            font-size: 25px;
          }
        }
        .level {
          color: #777;
        }
        .price {
          color: #594bea;
          text-align: center;
          font-size: 19.51px;
          font-weight: 800;
          line-height: 134.766%;
        }
        button.ajouter {
          flex: 1;
          margin-right: 6px;
          background-color: var(--secondary-color-lilac);
          border: none;
          color: var(--text-inside-lilac, #000080);
          font-weight: bold;
          &:hover {
            background-color: var(--lilac-hovered, pink);
            animation: move-it 0.5s linear;
          }
        }
        button.apercu {
          padding: 2px 6px;
          background: yellow;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          &:hover {
            &::before,
            &::after {
              opacity: 1;
            }
          }
        }
        button.apercu::before {
          content: "Apercu Rapide";
          position: absolute;
          height: 30px;
          width: 100%;
          background: var(--apercu-rapide-color);
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: 0.5s;
          font-size: 10px;
          color: white;
          border-radius: 4px;
        }
        button.apercu::after {
          content: "";
          position: absolute;
          height: 10px;

          top: -10px;
          left: 50%;
          transform: translateX(-50%) rotateX(180deg);
          opacity: 0;
          transition: 0.5s;
          font-size: 10px;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid var(--apercu-rapide-color);
        }
        .littleBooksCount {
          position: absolute;
          right: 5px;
          top: 2px;
        }
        button.ajouter {
          flex: 1;
          margin-right: 6px;
          background-color: var(--secondary-color-lilac);
          border: none;
          color: var(--text-inside-lilac, #000080);
          font-weight: bold;
          &:hover {
            background-color: var(--lilac-hovered, pink);
            animation: move-it 0.5s linear;
          }
        }
        button.addedToCartClass {
          background-color: pink !important;
        }
      }
    }
    .form-search-container {
      @media (max-width: 991px) {
        margin-top: 10px;
        form {
          margin: auto;
        }
      }
      margin-top: 0px;
    }
  }
}
@keyframes rightLeft {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(10px);
  }
}
@keyframes move-it {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
}
#routerBox {
  height: 100%;
}
</style>
