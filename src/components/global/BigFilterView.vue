<template>
  <div
    id="bigFilter"
    class="p-relative"
    @mouseover="sidebarHover(fase)"
    @mouseleave="sidebarHover(true)"
    :class="{ expanded: sideBarClicked, notExpanded: !sideBarClicked }"
  >
    <button class="sidebarArrow">
      <!-- <i :style="sidebarArrowRotation"
        ><svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23" cy="23" r="23" fill="white" />
          <path
            d="M15.5931 21.9266L24.2055 13.5297C24.8008 12.9493 25.7634 12.9493 26.3523 13.5297L27.7835 14.9251C28.3788 15.5054 28.3788 16.4439 27.7835 17.0181L21.6788 22.97L27.7835 28.9219C28.3788 29.5023 28.3788 30.4408 27.7835 31.015L26.3523 32.4103C25.7571 32.9907 24.7945 32.9907 24.2055 32.4103L15.5931 24.0134C14.9978 23.4454 14.9978 22.5069 15.5931 21.9266Z"
            fill="#2F2F2F"
          />
        </svg>
      </i> -->
      <i class="fa-solid fa-angles-right" :style="sidebarArrowRotation"></i>
    </button>
    <!-- <button
      class="hamburger"
      @click.prevent="toggleSidebar"
      :style="hamburgerStyle"
    >
      <span>
        <i class="fa-solid fa-bars"></i>
      </span>
    </button> -->
    <div id="langue">
      <h4>Langue</h4>
      <form class="d-flex flex-d-c langue">
        <div>
          <input
            type="radio"
            id="tout"
            name="language"
            value="0"
            checked
            v-model="selectedLanguage"
            @change="updateSelectedLanguage"
          />
          <label for="tout">Tout</label>
        </div>
        <div>
          <input
            type="radio"
            id="fr"
            name="language"
            value="fr"
            v-model="selectedLanguage"
            @change="updateSelectedLanguage"
          />
          <label for="fr">Francais</label>
        </div>
        <div>
          <input
            type="radio"
            id="en"
            name="language"
            value="en"
            v-model="selectedLanguage"
            @change="updateSelectedLanguage"
          />
          <label for="en">Anglais</label>
        </div>
        <div>
          <input
            type="radio"
            id="es"
            name="language"
            value="es"
            v-model="selectedLanguage"
            @change="updateSelectedLanguage"
          />
          <label for="es">Espanol</label>
        </div>
        <div>
          <input
            type="radio"
            id="ar"
            name="language"
            value="ar"
            v-model="selectedLanguage"
            @change="updateSelectedLanguage"
          />
          <label for="ar">Arabe</label>
        </div>
      </form>
    </div>
    <div id="niveau">
      <h4>Niveau</h4>
      <select v-model="selectedBebe" @change="updateSelectedBebe">
        <option value="" disabled hidden>__ P/M/G Section</option>
        <option v-for="level in levelsBebe" :value="level" :key="level">
          {{ level }}
        </option>
      </select>
      <select
        v-model="selectedPrimaire"
        class="mt-3"
        @change="updateSelectedPrimaire"
      >
        <option value="" disabled hidden>__Primaire</option>
        <option v-for="level in levelsPrimaire" :value="level" :key="level">
          {{ level }}
        </option>
      </select>
      <select
        v-model="selectedCollege"
        class="mt-3"
        @change="updateSelectedCollege"
      >
        <option value="" disabled hidden>__College</option>
        <option v-for="level in levelsCollege" :value="level" :key="level">
          {{ level }}
        </option>
      </select>
      <select
        v-model="selectedLycee"
        class="mt-3"
        @change="updateSelectedLycee"
      >
        <option value="" disabled hidden>__Lycee</option>
        <option v-for="level in levelsLycee" :value="level" :key="level">
          {{ level }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { eventBus } from "@/event-bus.js";
export default {
  data() {
    return {
      levelsBebe: ["Tout", "Petite", "Moyenne", "Grande"],
      levelsPrimaire: ["Tout", "CP", "CE1", "CE2", "CM1", "CM2"],
      levelsCollege: ["Tout", "1ère année", "2ème année", "3ème année"],
      levelsLycee: ["Tout", "Tranc Commun", "1 Bac", "2 Bac"],
      selectedLanguage: "0",
      selectedBebe: "",
      selectedPrimaire: "",
      selectedCollege: "",
      selectedLycee: "",
      sideBarClicked: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sideBarClicked = !this.sideBarClicked;
      this.$emit("update:sideBarClicked", this.sideBarClicked);
      this.receivedData = this.sideBarClicked;
      // if (this.sideBarClicked === true) {
      //   const screen = window.innerWidth;
      //   if (screen < 767) {
      //     document.getElementById("bigFilter").style.zIndex = "-1";
      //     document.getElementById("bigFilter").style.width = "0px";
      //   } else {
      //     document.getElementById("bigFilter").style.width = "62px";
      //   }

      //   document.getElementById("langue").style.display = "none";
      //   document.getElementById("niveau").style.display = "none";
      //   // document.querySelector(".hamburger").style.margin = "auto!important";
      // } else if (this.sideBarClicked === false) {
      //   const screen = window.innerWidth;
      //   if (screen < 767) {
      //     document.getElementById("bigFilter").style.zIndex = "109";
      //     document.getElementById("bigFilter").style.width = "100%";
      //     document.getElementById("bigFilter").style.display = "block";
      //   } else {
      //     document.getElementById("bigFilter").style.width =
      //       "var(--bigFilter-width)";
      //   }

      //   document.getElementById("langue").style.display = "block";
      //   document.getElementById("niveau").style.display = "block";
      // }
    },
    sidebarHover(bool) {
      this.sideBarClicked = bool;
      this.$emit("update:sideBarClicked", this.sideBarClicked);
      this.receivedData = this.sideBarClicked;
      // if (this.sideBarClicked === true) {
      //   const screen = window.innerWidth;
      //   if (screen < 767) {
      //     document.getElementById("bigFilter").style.zIndex = "-1";
      //     document.getElementById("bigFilter").style.width = "0px";
      //   } else {
      //     document.getElementById("bigFilter").style.width = "62px";
      //   }

      //   document.getElementById("langue").style.display = "none";
      //   document.getElementById("niveau").style.display = "none";
      //   // document.querySelector(".hamburger").style.margin = "auto!important";
      // } else if (this.sideBarClicked === false) {
      //   const screen = window.innerWidth;
      //   if (screen < 767) {
      //     document.getElementById("bigFilter").style.zIndex = "109";
      //     document.getElementById("bigFilter").style.width = "100%";
      //     document.getElementById("bigFilter").style.display = "block";
      //   } else {
      //     document.getElementById("bigFilter").style.width =
      //       "var(--bigFilter-width)";
      //   }

      //   document.getElementById("langue").style.display = "block";
      //   document.getElementById("niveau").style.display = "block";
      // }
    },
    // Emit events when selectedLanguage or selectedBebe change
    updateSelectedLanguage() {
      this.$emit("update:selectedLanguage", this.selectedLanguage);
    },
    updateSelectedBebe() {
      this.$emit("update:selectedBebe", this.selectedBebe);
    },
    updateSelectedPrimaire() {
      this.$emit("update:selectedPrimaire", this.selectedPrimaire);
    },
    updateSelectedCollege() {
      this.$emit("update:selectedCollege", this.selectedCollege);
    },
    updateSelectedLycee() {
      this.$emit("update:selectedLycee", this.selectedLycee);
    },
  },
  computed: {
    hamburgerStyle() {
      if (this.sideBarClicked) {
        return {
          margin: "auto !important",
        };
      } else {
        return {}; // Empty style object when sideBarClicked is false
      }
    },
    sidebarArrowRotation() {
      if (this.sideBarClicked) {
        return { transform: "Rotate(0deg)" };
      } else {
        // Empty style object when sideBarClicked is false
        return {
          transform: "Rotate(-180deg)",
        };
      }
    },
    receivedData() {
      console.log(eventBus.value.dataToTransfer, "event buuuus");
      // Access the data from the event bus
      return eventBus.value.dataToTransfer;
    },
  },
  watch: {
    receivedData() {
      this.toggleSidebar();
    },
  },
  mounted() {
    if (this.sideBarClicked === true) {
      const screen = window.innerWidth;
      if (screen < 767) {
        document.getElementById("bigFilter").style.zIndex = "-1";
        document.getElementById("bigFilter").style.width = "0px";
      } else {
        document.getElementById("bigFilter").style.width = "62px";
      }

      document.getElementById("langue").style.display = "none";
      document.getElementById("niveau").style.display = "none";
      // document.querySelector(".hamburger").style.margin = "auto!important";
    } else if (this.sideBarClicked === false) {
      const screen = window.innerWidth;
      if (screen < 767) {
        document.getElementById("bigFilter").style.zIndex = "109";
        document.getElementById("bigFilter").style.width = "100%";
        document.getElementById("bigFilter").style.display = "block";
      } else {
        document.getElementById("bigFilter").style.width =
          "var(--bigFilter-width)";
      }

      document.getElementById("langue").style.display = "block";
      document.getElementById("niveau").style.display = "block";
    }
  },
};
</script>
<style lang="scss" scoped>
@media (max-width: 991px) {
  .hamburger,
  .sidebarArrow {
    display: none !important;
  }
}
#bigFilter {
  &.expanded {
    @media (max-width: 767px) {
      z-index: -1 !important;
      width: 0px !important;
    }
    @media (min-width: 768px) {
      width: 62px !important;
    }
    #langue,
    #niveau {
      display: none !important;
    }
  }
  &.notExpanded {
    @media (max-width: 767px) {
      z-index: 109 !important;
      width: 100% !important;
      display: block !important;
    }
    @media (min-width: 768px) {
      width: var(--bigFilter-width) !important;
    }
    #langue,
    #niveau {
      display: block !important;
    }
  }
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
.sidebarArrow {
  border: none;
  transition: 0.3s;
  z-index: 99;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  content: "<";
  height: 40px;
  width: 40px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 6px;
  i {
    transition: 0.3s;
  }
}
</style>
