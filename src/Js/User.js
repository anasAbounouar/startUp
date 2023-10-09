import { reactive } from "vue";
export let userCart = reactive({
  arrissala: {
    ecritures: {
      cartCount: 0,
      WishlistCount: 0,
      totalPrice: 0,
      wishlistBooks: 0,
      purchasedBooks: [],
    },
    livres: {
      cartCount: 0,
      WishlistCount: 0,
      totalPrice: 0,
      wishlistBooks: 0,
      purchasedBooks: [],
    },
  },
  aladnane: {
    livres: {
      cartCount: 0,
      WishlistCount: 0,
      totalPrice: 0,
      wishlistBooks: 0,
      purchasedBooks: [],
    },
  },
});
export let onlineUser = {};
