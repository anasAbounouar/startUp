<template>
  <div id="bigFilter" class="p-relative">
    <button
      class="hamburger"
      @click.prevent="toggleSidebar"
      :style="hamburgerStyle"
    >
      <span>
        <i class="fa-solid fa-bars"></i>
      </span>
    </button>
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
      if (this.sideBarClicked === true) {
        document.getElementById("bigFilter").style.width = "62px";
        document.getElementById("langue").style.display = "none";
        document.getElementById("niveau").style.display = "none";
        document.querySelector(".hamburger").style.margin = "auto!important";
      } else if (this.sideBarClicked === false) {
        const screen = window.innerWidth;
        if (screen < 767) {
          document.getElementById("bigFilter").style.width = "100%";
        } else {
          document.getElementById("bigFilter").style.width =
            "var(--bigFilter-width)";
        }

        document.getElementById("langue").style.display = "block";
        document.getElementById("niveau").style.display = "block";
      }
      this.receivedData = this.sideBarClicked;
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
  //   mounted() {
  //     // Emit an event with the initial selected language and level values when the component is mounted
  //     this.$emit("update:selectedLanguage", this.selectedLanguage);
  //     this.$emit("update:selectedBebe", this.selectedBebe);
  //     this.$emit("update:selectedPrimaire", this.selectedPrimaire);
  //     this.$emit("update:selectedCollege", this.selectedCollege);
  //     this.$emit("update:selectedLycee", this.selectedLycee);
  //     // ... Emit other initial values for props ...
  //   },
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
    receivedData() {
      console.log(eventBus.value.dataToTransfer, "event buuuus");
      // Access the data from the event bus
      return eventBus.value.dataToTransfer;
    },
  },
  watch: {
    sideBarClicked() {
      this.receivedData = this.sideBarClicked;
    },
    receivedData() {
      this.sideBarClicked = this.receivedData;
    },
  },
};
</script>
