<template>
  <div>
    <div>
      <div class="container">
        <h5 class="m-auto">Fournisseur : Arrissala</h5>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <h6>Ton Panier</h6>
              <p>
                Vous n'êtes pas prêt à passer à la caisse ? Poursuivez vos
                achats.
              </p>
              <!-- <div v-for="arrissalaLivres"> </div> -->
              <div>{{ purchasedItems }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { userCart } from "@/Js/User.js";
export default {
  name: "cart-page",
  data() {
    return {
      userCart,
    };
  },
  computed: {
    arrissalaLivres() {
      return userCart.arrissala.livres;
    },
    isArrissalaPurchased() {
      return userCart.arrissala.livres.totalPrice !== 0;
    },
    purchasedItems() {
      return userCart.arrissala.livres.filter((item) => {
        return item.addedToCart;
      });
    },
  },
};
</script>
