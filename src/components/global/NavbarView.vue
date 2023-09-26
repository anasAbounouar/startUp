<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link to="/" exact>
          <a class="navbar-brand" href="#"
            ><img src="@/assets/logo.png" alt="Logo" class="img-fluid logo"
          /></a>
        </router-link>
        <div>
          <a href=""
            ><img
              src="@/assets/wtsp.svg"
              alt="Wtsp"
              class="ms-1 d-lg-none l-md-none"
          /></a>
          <button
            class="navbar-toggler ms-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <router-link class="nav-link" aria-current="page" to="/"
              >Acceuil</router-link
            >
            <a class="nav-link" href="#about">A propos</a>
            <!-- <a class="nav-link" href="#">Login</a> -->
            <a class="nav-link" href="#contactUs">Contact</a>
          </div>
          <router-link
            v-if="!AccountsData.isLoggedIn"
            to="/Login"
            class="nav-link"
          >
            S'identifier
          </router-link>
          <a v-else class="nav-link avatar" href="#">
            <img :src="AccountsData.imgSrc" alt="" />
          </a>
          <a class="nav-link d-lg-flex align-items-center wtsp-hide" href="#">
            <img src="@/assets/wtsp.svg" alt="Wtsp" class="ms-1"
          /></a>
        </div>
      </div>
    </nav>
    <!-- <span>{{ AccountsData.password }}</span> -->
  </div>
</template>
<script>
import { AccountsData } from "@/Js/Accounts.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "navbar",
  data() {
    return {
      AccountsData: AccountsData,
    };
  },
};
</script>
<style lang="scss">
.router-link-active {
  color: var(--brand-color) !important;
}
.navbar {
  background-color: white;
  box-shadow: 0px 4.014204502105713px 4.014204502105713px 0px
    rgba(0, 0, 0, 0.25);
  .logo {
    max-height: 50.43px;
  }
  .nav-link {
    margin-left: 5px;
    margin-right: 5px;
    &.active,
    &:hover {
      color: var(--brand-color) !important;
    }
  }
  .avatar img {
    border-radius: 49%;
    max-height: 30px;
  }
}
@media (max-width: 991px) {
  .wtsp-hide {
    display: none !important;
  }
  .navbar-nav {
    margin-top: 10px;
    a {
      display: flex;
    }
  }
}
</style>
