import { addToCartGeneral, addToWishlistGeneral } from "@/Js/CartWishlist";
import { setCookie } from "@/Js/cookieUtils";
import { reactive } from "vue";
import { userCart } from "@/Js/User";
export const ecrituresDataArrissala = reactive({
  library: "Arrissala",
  name: "Ecritures",
  arrow: "Ecritures",
  cartCount: 0,
  WishlistCount: 0,
  totalPrice: 0,
  wishlistBooks: [],
  books: [
    {
      id: 99,
      title: "Cahier 1 ecritures",
      level: "CP",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
      ],
      price: "100",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1990,
      title: "cahier 9",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/2.png"),
        require("@/img/ArrissalaPhotos/0.png"),
      ],
      price: "150",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 101,
      title: "Prepa",
      level: "Moyenne",
      imgSrc: [require("@/img/ArrissalaPhotos/0.png")],
      price: "2395.05",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 1,
      maxQuantity: 3,
    },
    {
      id: 102,
      title: "lwiynat",
      level: "Moyenne",
      imgSrc: [require("@/img/ArrissalaPhotos/2.png")],
      price: "589.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 1,
      maxQuantity: 5,
    },
    {
      id: 103,
      level: "Moyenne",
      title: "Plan comptable",
      imgSrc: [require("@/img/ArrissalaPhotos/1.png")],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 104,
      title: "Antigone",
      level: "Moyenne",
      imgSrc: [require("@/img/ArrissalaPhotos/0.png")],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 105,
      title: "Prepa",
      imgSrc: [require("@/img/ArrissalaPhotos/2.png")],
      price: "230.00",
      level: "Moyenne",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 106,
      title: "mousaeid",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 107,
      title: "Plan comptable",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 2,
    },
    {
      id: 108,
      title: "Miftah al qirâ’a 1",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 6,
    },
    {
      id: 109,
      title: "mousaeid",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 8,
    },
    {
      id: 110,
      title: "je sais pas",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 7,
    },
    {
      id: 111,
      title: "Miftah al qirâ’a 1",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      maxQuantity: 7,
    },
    {
      id: 112,
      title: "mousaeid",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      maxQuantity: 8,
    },
    {
      id: 113,
      title: "Prepa",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      maxQuantity: 9,
    },
    {
      id: 114,
      title: "Prepa",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 3,
    },
    {
      id: 115,
      title: "mousaeid",
      level: "Moyenne",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 116,
      title: "Plan comptable",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
    },
    {
      id: 18,
      title: "Miftah al qirâ’a 1",
      level: "Petite",
      langue: "fr",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 19,
      title: "mousaeid",
      level: "CM1",
      langue: "en",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 3,
    },
    {
      id: 20,
      title: "Coucou",
      level: "CE1",
      langue: "fr",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 21,
      title: "couca",
      level: "CE2",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 22,
      title: "couca",
      level: "CE1",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 23,
      title: "couca",
      level: "CE2",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 24,
      title: "couca",
      level: "CP",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 25,
      title: "couca",
      level: "CM2",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 26,
      title: "couca",
      level: "CM2",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 27,
      title: "couca",
      level: "CP",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
    {
      id: 28,
      title: "couca",
      level: "CE2",
      langue: "ar",
      imgSrc: [
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
    },
  ],
});
export function addToCartEcrituresDataArrissala(book, quantity) {
  const realQuantity = quantity === null ? 1 : quantity;
  ecrituresDataArrissala.totalPrice += book.addedToCart
    ? -parseFloat(book.price) * realQuantity
    : parseFloat(book.price) * realQuantity;
  ecrituresDataArrissala.cartCount += book.addedToCart ? -1 : 1;
  setCookie(`addedToCart_${book.id}`, !book.addedToCart, 2);
  addToCartGeneral(book, quantity);
  // Toggle whether the book is added to the cart
  book.addedToCart = !book.addedToCart;
  userCart.arrissala.ecritures = ecrituresDataArrissala; // suercart online shit
}
export function addToWishlistEcrituresDataArrissala(book) {
  if (!book.addedToWishlist) {
    ecrituresDataArrissala.WishlistCount++;
    console.log(
      ecrituresDataArrissala.WishlistCount,
      "livresData.WishlistCount++"
    );
    ecrituresDataArrissala.wishlistBooks.push(book);
    setCookie(`addedToWishlist_${book.id}`, "true", 7);
  } else {
    ecrituresDataArrissala.WishlistCount--;
    const index = ecrituresDataArrissala.wishlistBooks.findIndex(
      (item) => item.id == book.id
    );
    if (index !== -1) {
      ecrituresDataArrissala.wishlistBooks.splice(index, 1);
    }
    setCookie(`addedToWishlist_${book.id}`, "false", 7);
  }
  // Toggle whether the book is added to the wishlist
  book.addedToWishlist = !book.addedToWishlist; // Move this line inside the if-else block
  addToWishlistGeneral(book);
  userCart.arrissala.ecritures = ecrituresDataArrissala; // suercart online shit
}
