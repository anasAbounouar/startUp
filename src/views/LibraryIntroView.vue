<template>
  <div>
    <section id="bienvenue" class="p-relative">
      <div class="p-absolute overlay"></div>
      <div
        class="container h-full align-items-center justify-content-center d-flex"
      >
        <div class="row">
          <div class="col-12">
            <h3 class="c-white p-relative">
              Bienvenue dans votre librairie
              <h3 class="library-name">{{ libraryData.libraryName }} !</h3>
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section id="classification">
      <h4 class="mb-5">Veuillez choisir une classe de fournitures</h4>
      <div class="container">
        <div class="row g-4">
          <div
            v-for="box in libraryData.boxes"
            :key="box.id"
            class="col-sm-md-12 col-4 p-3 mt-3"
          >
            <div @click.prevent="goToPage(box.pageSrc)">
              <div class="box">
                <div class="d-flex align-items-center justify-content-center">
                  <img :src="box.imgSrc" alt="lol" class="p-3" />
                </div>
                <h5
                  class="mt-3"
                  :class="{
                    'ecriture-color': box.name == 'Écriture',
                    'papeterie-color': box.name == 'Papeterie',
                    'organisation-color': box.name == 'Organisation',
                  }"
                >
                  {{ box.name }}
                </h5>
                <p class="mt-3 px-2">
                  {{ box.description }}
                </p>
                <div @click.prevent="goToPage(box.pageSrc)">
                  <h5
                    class="btn btn-primary"
                    :class="{
                      'ecriture-bg': box.name == 'Écriture',
                      'papeterie-bg': box.name == 'Papeterie',
                      'organisation-bg': box.name == 'Organisation',
                    }"
                  >
                    {{ box.btn }}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { libraryDatas } from "@/Js/homePageData/libraryDatas.js";
// import { libraryDataa } from "@/Js/homePageData/TopBleu.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "library-intro",
  data() {
    return {
      libraryDatas, // Assuming you have `libraryDatas` defined elsewhere
      libraryData: {},
      nom: this.$route.params.nom,
    };
  },
  methods: {
    goToPage(pageSrc) {
      this.$router.push({
        name: "livres-page",
        params: { name: this.name, type: pageSrc },
      });
    },
  },
  mounted() {
    this.libraryData = this.libraryDatas.find((ele) => {
      return ele.libraryName === this.$route.params.nom; // Assuming `libraryId` is the correct property to match
    });
  },
};
</script>
<style lang="scss">
#bienvenue {
  background-image: url("@/img/library-home/image-1.png");
  background-position: center;
  background-size: cover;
  height: calc(100vh - 66px);
  .row {
    .library-name {
      color: var(--arrissala-color);
    }
  }
}
#classification {
  .box {
    position: relative;
    height: 100%;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset,
      0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    transition: 0.5s;
    h5 {
      transition: 0.5s;
    }
    &:hover {
      transform: translateY(-10px);
      a {
        transform: translateY(-10px) translateX(-50%);
      }
    }
    p {
      margin-bottom: 70px;
      color: #2c4e50;
    }
    // border: 1px solid black;
    a {
      transition: 0.5s;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
    }
    .papeterie-color {
      color: #bd324a;
    }
    .papeterie-bg {
      background-color: #bd324a;
    }
    .ecriture-color {
      color: #22c55e;
    }
    .ecriture-bg {
      background-color: #22c55e;
    }
    .organisation-color {
      color: #ffa500;
    }
    .organisation-bg {
      background-color: #ffa500;
    }
    h5 {
      border: none;
    }
  }
}
@media (max-width: 991px) {
  .col-sm-md-12 {
    flex: 0 0 auto !important;
    width: 100% !important;
  }
}
</style>
