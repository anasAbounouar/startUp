import { ecrituresDataArrissala } from "@/ArrissalaFolder/ecriture.js";
import { livresDataArrissala } from "@/ArrissalaFolder/livres.js";
import { livresDataAladnane } from "@/AladnaneFolder/livres.js";
import { ecrituresDataAladnane } from "@/AladnaneFolder/livres.js";
export const UserCart = {
  arrissala: {
    ecriture: {
      cartCount: ecrituresDataArrissala.cartCount,
      WishlistCount: ecrituresDataArrissala.WishlistCount,
      totalPrice: ecrituresDataArrissala.totalPrice,
      wishlistBooks: ecrituresDataArrissala.wishlistBooks,
    },
    livres: {
      cartCount: livresDataArrissala.cartCount,
      WishlistCount: livresDataArrissala.WishlistCount,
      totalPrice: livresDataArrissala.totalPrice,
      wishlistBooks: livresDataArrissala.wishlistBooks,
    },
  },
  aladnane: {
    ecriture: {
      cartCount: ecrituresDataAladnane.cartCount,
      WishlistCount: ecrituresDataAladnane.WishlistCount,
      totalPrice: ecrituresDataAladnane.totalPrice,
      wishlistBooks: ecrituresDataAladnane.wishlistBooks,
    },
    livres: {
      cartCount: livresDataAladnane.cartCount,
      WishlistCount: livresDataAladnane.WishlistCount,
      totalPrice: livresDataAladnane.totalPrice,
      wishlistBooks: livresDataAladnane.wishlistBooks,
    },
  },
};
