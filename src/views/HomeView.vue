<template>
  <div>
    <section id="mosque" class="p-relative">
      <div class="overlay"></div>
      <div class="container p-relative">
        <div class="row align-center justify-content-center">
          <div class="col-md-8 mb-3">
            <h3 class="c-white p-relative">
              Acheter votre stock en un seul click !
            </h3>
          </div>
          <div class="col-md-8">
            <form>
              <select
                v-model="SelectedOption"
                name="choisir"
                @change="navigateToPage"
              >
                <option value="" selected disabled hidden>
                  --Choisir votre fournisseur--
                </option>
                <option
                  v-for="option in options"
                  :key="option.id"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section id="promote" class="pb-3">
      <div class="d-flex justify-content-center">
        <h2 class="relative logoText">شري بالرباح ونت مرتاح</h2>
      </div>
      <div class="row justify-content-center mt-5 w-full">
        <p class="col-md-9 speech">
          dipotDirect vous permet de mettre fin aux longues files d'attente, aux
          déplacements coûteux et à la fatigue.
        </p>
      </div>
      <div class="container pb-4">
        <div class="row mt-5 mb-4 g-4">
          <div class="col-lg-4 col-md-12 mt-3 g-4">
            <div class="box d-flex row">
              <div class="d-flex col-4 align-center justify-content-center">
                <img src="../assets/cercle.svg" alt="" class="p-absolute" />
                <img
                  src="../assets/ci-list-checklist.svg"
                  alt=""
                  class="p-absolute"
                />
              </div>
              <div class="box-text col-8 align-center-flex-start flex-d-c">
                <span>1.Choisir</span>
                <p class="m-0 text-left">
                  Choisir les fournitures d'une librairie
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 g-4">
            <div class="box d-flex row">
              <div class="d-flex col-4 align-center justify-content-center">
                <img src="../assets/cercle.svg" alt="" class="p-absolute" />
                <img src="../assets/truck.svg" alt="" class="p-absolute" />
              </div>
              <div class="box-text col-8 align-center-flex-start flex-d-c">
                <span>2.Suivi transport</span>
                <p class="m-0 text-left">
                  Suivez votre marchandise / la récupérer sur place.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 g-4">
            <div class="box d-flex row">
              <div class="d-flex col-4 align-center justify-content-center">
                <img src="../assets/cercle.svg" alt="" class="p-absolute" />
                <img src="../assets/happy.svg" alt="" class="p-absolute" />
              </div>
              <div class="box-text col-8 align-center-flex-start flex-d-c">
                <span>3.Recevoir</span>
                <p class="m-0 text-left">
                  Recevez votre marchandise en toute securité
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex mt-5 align-center justify-content-center bg-brand">
        <p class="m-0 p-10 c-white">
          Simple
          <i class="fa-solid fa-handshake-simple"></i> rapide
          <i class="fa-solid fa-gauge-high"></i>
          et sans frais supplementaires
          <i class="fa-solid fa-face-smile-beam"></i>
        </p>
      </div>
    </section>
    <section id="about">
      <div class="container">
        <div class="row">
          <!-- place for images  -->
          <div class="col-lg-6 me-3 d-none d-lg-block">
            <div class="row">
              <div class="col-6">
                <img src="../assets/architecture.svg" alt="img" class="" />
              </div>
              <div class="col-6">
                <img src="../assets/play.svg" alt="img" class="mt-5" />
              </div>
            </div>
          </div>
          <!-- place for about us  -->
          <div class="about-content col-lg-5 mt-5 text-left">
            <p class="mb-2">Qui somme nous ___</p>
            <h3 class="my-2">FOURNITURES POUR LIBRAIRIES</h3>
            <h5 class="mb-2">Lien librairie-fournisseur</h5>
            <span
              >Chez dipoDirect, nous nous engageons à révolutionner le processus
              d'approvisionnement des librairies en leur offrant une plateforme
              en ligne pratique et efficace pour l'achat de fournitures de leurs
              fournisseurs préferés. Notre objectif est de simplifier et de
              rationaliser ce processus, permettant ainsi aux librairies de se
              concentrer sur leur activité principale.</span
            >
            <!-- <router-link to="/">
              <button type="button" class="d-block mt-3 btn btn-primary">
                Read More
              </button>
            </router-link> -->
          </div>
        </div>
      </div>
    </section>
    <section id="avis">
      <div class="avis-head d-flex align-center justify-content-center mb-5">
        <h2 class="">Avis</h2>
      </div>

      <swiper-container
        class="row w-full align-center justify-content-center ps-4"
        :slides-per-view="slidesPerView"
        :space-between="50"
        navigation="true"
        pagination="true"
        css-mode="true"
      >
        <swiper-slide
          v-for="avi in avis"
          :key="avi.id"
          class="box col-10 text-center"
        >
          <span>
            <h5>{{ avi.name }}</h5>
            <small>
              {{ avi.date }}
              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
            </small>
          </span>

          <div class="comment">
            <div class="quote-left">
              <i class="fa fa-quote-left" aria-hidden="true"></i>
            </div>
            <div class="text p-3">
              {{ avi.text }}
            </div>
            <div class="quote-right">
              <i class="fa fa-quote-right" aria-hidden="true"></i>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </section>
    <section id="contactUs">
      <div class="d-flex justify-content-around flex-wrap">
        <div class="left">
          <h4 class="c-contact">Contactez-nous</h4>
          <p class="px-3 c-contact">
            Nous sommes là pour vous ! Comment pouvons-nous vous aider ?
          </p>
          <form action="" class="d-flex flex-d-c">
            <div class="p-3 d-flex flex-d-c">
              <label for="" class="d-flex">Nom</label>
              <input type="text" />
            </div>
            <div class="p-3 d-flex flex-d-c">
              <label for="" class="d-flex">Email</label>
              <input type="text" />
            </div>
            <div class="p-3 d-flex flex-d-c">
              <label for="" class="d-flex">Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <!-- <button type="submit mx-3">Submit</button> -->
            <div class="p-3 d-flex flex-d-c">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div class="right">
          <img class="img-fluid" src="@/assets/contactus.png" alt="img" />
          <!-- <ul class="d-flex justify-content-center flex-d-c">
            <li>Casablanca Prince</li>
            <li>067508371</li>
            <li>dipoDirect@gmail.com</li>
          </ul> -->
          <div class="d-flex justify-content-center">
            <div class="info d-block">
              <div class="d-flex align-center">
                <i class="fa-solid fa-location-dot mr-10"></i>
                <p class="m-0 p-2">Casablanca Prince</p>
              </div>
              <div class="d-flex align-center">
                <i class="fa-solid fa-phone mr-10"></i>
                <p class="m-0 p-2">067508371</p>
              </div>
              <div class="d-flex align-center">
                <i class="fa-regular fa-envelope mr-10"></i>

                <p class="m-0 p-2">dipoDirect@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions } from "vuex"; // Assuming you are using Vuex for managing state
import "../scss/helpers/_mixin.scss";
import { register } from "swiper/element/bundle";
import { libraryDatas } from "@/Js/homePageData/libraryDatas.js";
// register Swiper custom elements
register();
export default {
  data() {
    return {
      libraryDatas,
      slidesPerView: 3, // Default number of slides per view
      SelectedOption: "",
      options: [
        { label: "Arrissala", value: "arrissala", nom: "arrissala" },
        { label: "Aladnane", value: "aladnane", nom: "aladnane" },
        { label: "Top bleu", value: "topbleu", nom: "topbleu" },
        { label: "Achourok", value: "achourok", nom: "" },
      ],
      avis: [
        {
          id: 0,
          name: "y.malika",
          text: "خدمة ما بعد البيع ممتازة،اتمنى لكم الاستمرارية و التوفيق ان شاءالله",
          date: "06 janvier 2024",
        },
        {
          id: 1,
          name: "J.Youssef",
          text: "Excellent service . Pas probleme d'embouteillage ou fatique non necessaire",
          date: "06 janvier 2024",
        },
        {
          id: 2,
          name: "J.balan",
          text: "Servizio eccellente. Nessun ingorgo o fatica inutile.",
          date: "06 janvier 2024",
        },
        {
          id: 3,
          name: "K.Amin",
          text: "Le service est excellent, et il n'y a ni problème d'embouteillage ni fatigue inutile",
          date: "06 janvier 2024",
        },
        {
          id: 4,
          name: "M.Moad",
          text: "C'est un service de grande qualité, sans souci de circulation ni fatigue superflue.",
          date: "06 janvier 2024",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["navigateToRoute"]), // Assuming you have a Vuex action to handle navigation

    navigateToPage() {
      if (this.SelectedOption) {
        const SelectedOption = this.options.find(
          (option) => option.value === this.SelectedOption
        );
        if (SelectedOption) {
          this.$router.push({
            name: "library-intro",
            params: { nom: SelectedOption.nom },
          });
        }
      }
    },

    updateSlidesPerView() {
      // Determine the screen width
      let screenWidth = window.innerWidth;
      console.log(screenWidth, "this is screen width");

      // Adjust the number of slides per view based on screen width
      if (screenWidth > 768 && screenWidth < 991) {
        // For phones (adjust this breakpoint as needed)
        this.slidesPerView = 2;
      } else if (screenWidth <= 768) {
        this.slidesPerView = 1; // Default for larger screens
      }
    },
    // onSwiper(swiper) {
    //   console.log(swiper);
    // },
    // onSlideChange() {
    //   console.log("slide change");
    // },
  },
  mounted() {
    // Detect the screen size when the component is mounted
    this.updateSlidesPerView();
    // Listen for window resize events
    window.addEventListener("resize", this.updateSlidesPerView);
  },
  beforeUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener("resize", this.updateSlidesPerView);
  },
};
</script>

<style lang="scss" scoped>
#mosque {
  background-image: url("@/assets/mosque2.svg");
  height: calc(100vh - 66px);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 0px;
  // background-color: rgba(255, 0, 184, 0.31);
  position: relative;
  form {
    display: inline-block;
    width: 100%;
    margin-top: 20px;
  }
  select:focus {
    outline: none;
  }
  select {
    height: 40px;
    font-size: 16px;
    padding: 3px 10px;
    border: 2px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    width: 70%;
    margin-left: 15px;
    option {
      border-top: 1px solid #ebebeb;
      font-weight: 40px;
      color: #5f6467;
    }
  }
}
#promote {
  .logoText {
    color: var(--brand-color);
    text-align: center;
    font-size: 34px;
    font-family: JejuHallasan;
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    margin: 0;
    letter-spacing: -0.36px;
  }
  .speech {
    color: #000;
    text-align: center;
    font-size: 17px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: 1.4;
  }
  .box {
    padding: 20px;
    .box-text {
      padding: 0px 0px 0px 10px;
    }
    span {
      color: var(--brand-color);
      text-align: center;
      font-size: 20px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: -0.2px;
    }
  }
  .fa-handshake-simple,
  .fa-gauge-high,
  .fa-face-smile-beam {
    font-size: 24px;
    vertical-align: middle;
  }
  .fa-handshake-simple {
    color: #333;
  }
  .fa-gauge-high {
    color: #ffa500;
  }
  .fa-face-smile-beam {
    color: #ffd700;
  }
}
#about {
  .about-content {
    button {
      background-color: white;
      border-radius: 0px;
      color: var(--dark-color);
      border: 2px solid var(--dark-color);
      outline: none;
      display: inline-flex;
      padding: 10.653px 20.684px;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: var(--brand-color);
        border-color: var(--brand-color);
        color: white;
      }
    }
    h3 {
      color: var(--brand-color, #2196f3);
      font-size: 29.96px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    h5 {
      color: var(--secondary-green-alt);
      font-size: 20.48px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    span {
      color: var(--text-color, #727272);
      font-size: 18.204px;
      font-family: Roboto;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
#avis {
  position: relative;
  padding-top: 10px;
  .avis-head {
    position: relative;
    color: var(--brand-color);
    font-size: 30px;
    font-weight: 100;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      width: 100px;
      background-color: var(--brand-color);
    }
  }
  .box {
    padding: 30px;
    background-color: var(--brand-color-weak);
    border-radius: 6px;
    margin-bottom: 80px;
    small {
      font-size: 80%;
    }
    > span {
      text-align: center;
      display: block;
      span {
        display: block;
        padding: 10px;
        i {
          color: var(--secondary-color-lilac);
        }
      }
    }
    .comment {
      color: #000;
      font-family: "Hind Vadodara";
      font-style: italic;
      line-height: 25px;
      min-height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 5px var(--secondary-color-green);
      position: relative;
      background-color: var(--secondary-color-green);
      .quote-right {
        position: absolute;
        right: 0px;
        bottom: -13px;
        font-size: 30px;
      }
      .quote-left {
        position: absolute;
        left: 0px;
        top: -13px;
        font-size: 30px;
      }
    }
  }
}
#contactUs {
  background-color: var(--contact-background);
  input,
  textarea {
    border-radius: 6px;
    border: 1px solid var(--contact-color);
    &:focus {
      outline: none;
      box-shadow: 1px 1px 1px 1px var(--contact-color);
    }
  }
  .left {
    flex: 1;
    textarea {
      height: 180px;
    }
    div:last-child {
      button {
        padding: 2px 110px;
        background: var(--contact-color);
        border: none;
        color: white;
        border-radius: 6px;
        box-shadow: 1px 1px 1px var(--contact-color);
        transition: 0.4s;
        outline: none;
        &:hover {
          transform: translateY(-1px);
          background: var(--brand-color);
          color: white;
        }
      }
    }
  }
  .right {
    flex: 1;
    img {
      max-height: 367px;
    }
    i {
      font-size: 30px;
      color: var(--contact-color);
    }
  }
}
@media (max-width: 767px) {
  #contactUs {
    .right {
      order: -1;
      margin-bottom: 20px;
    }
  }
}
</style>
