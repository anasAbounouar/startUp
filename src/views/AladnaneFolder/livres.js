import { addToCartGeneral, addToWishlistGeneral } from "@/Js/CartWishlist";
import { setCookie } from "@/Js/cookieUtils";
import { reactive } from "vue";
import { userCart } from "@/Js/User";
export const livresDataAladnane = reactive({
  library: "aladnane",
  name: "livres",
  arrow: "Livres & Histoires",
  //how many livres are chosen from this library
  cartCount: 0,
  //how many wishlist from livres in this library
  WishlistCount: 0,
  //total price of livres in this library
  totalPrice: 0,
  wishlistBooks: [],
  books: [
    {
      id: 990,
      title: "Miftah al qirâ’a 1",
      level: "1 Bac",
      langue: "fr",
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
      id: 1000,
      title: "mousaeid",
      level: "Moyenne",
      langue: "en",
      imgSrc: [
        require("@/img/ArrissalaPhotos/2.png"),
        require("@/img/ArrissalaPhotos/0.png"),
      ],
      price: "100",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1010,
      title: "Prepa",
      level: "CM2",
      langue: "ar",
      imgSrc: [require("@/img/ArrissalaPhotos/0.png")],
      price: "1028",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1020,
      title: "Miftah al qirâ’a 1",
      level: "CM1",
      langue: "es",
      imgSrc: [require("@/img/ArrissalaPhotos/2.png")],
      price: "589.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1030,
      title: "Plan comptable",
      level: "CP",
      langue: "fr",
      imgSrc: [require("@/img/ArrissalaPhotos/1.png")],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1040,
      title: "Antigone",
      level: "1 année",
      langue: "fr",
      imgSrc: [require("@/img/ArrissalaPhotos/0.png")],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1050,
      title: "Prepa",
      level: "CM2",
      langue: "fr",
      imgSrc: [require("@/img/ArrissalaPhotos/2.png")],
      price: "230.00",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1060,
      title: "mousaeid",
      level: "Moyenne",
      langue: "fr",
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
      id: 1070,
      title: "Plan comptable",
      level: "CP",
      langue: "fr",
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
      id: 1080,
      title: "Miftah al qirâ’a 1",
      level: "Petite",
      langue: "fr",
      imgSrc: [
        require("@/img/ArrissalaPhotos/1.png"),
        require("@/img/ArrissalaPhotos/0.png"),
        require("@/img/ArrissalaPhotos/1.png"),
      ],
      price: "230",
      addedToCart: false,
      addedToWishlist: false,
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1090,
      title: "mousaeid",
      level: "Moyenne",
      langue: "en",
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
      id: 1100,
      title: "je sais pas",
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
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1110,
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
      littleBooksCount: 2,
      maxQuantity: 3,
    },
    {
      id: 1120,
      title: "mousaeid",
      level: "Moyenne",
      langue: "en",
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
      id: 1130,
      title: "Prepa",
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
      id: 1140,
      title: "Prepa",
      level: "CM1",
      langue: "fr",
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
      id: 1150,
      title: "mousaeid",
      level: "CE2",
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
      id: 1160,
      title: "Plan comptable",
      level: "CP",
      langue: "fr",
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
      id: 1170,
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
      id: 1180,
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
      id: 1190,
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
      id: 2000,
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
      id: 2010,
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
      id: 2020,
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
      id: 2030,
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
      id: 2040,
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
      id: 2050,
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
      id: 2060,
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
      id: 2070,
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
// Function to add or remove a book to/from the cart with optional quantity
export function addToCartLivresDataAladnane(book, quantity) {
  // quantity null means unprovided means 1
  const realQuantity = quantity === null ? 1 : quantity;
  console.log("realQuantity", realQuantity);
  livresDataAladnane.totalPrice += book.addedToCart
    ? -parseFloat(book.price) * realQuantity
    : parseFloat(book.price) * realQuantity;
  livresDataAladnane.cartCount += book.addedToCart ? -1 : 1;
  setCookie(`addedToCart_${book.id}`, !book.addedToCart, 2);
  addToCartGeneral(book, quantity);
  // Toggle whether the book is added to the cart
  book.addedToCart = !book.addedToCart;
  userCart.aladnane.livres = livresDataAladnane; //usercart online shit
}
export async function addToWishlistLivresDataAladnane(book) {
  if (!book.addedToWishlist) {
    livresDataAladnane.WishlistCount++;
    console.log(livresDataAladnane.WishlistCount, "livresData.WishlistCount++");
    livresDataAladnane.wishlistBooks.push(book);
    setCookie(`addedToWishlist_${book.id}`, "true", 7);
  } else {
    livresDataAladnane.WishlistCount--;
    const index = livresDataAladnane.wishlistBooks.findIndex(
      (item) => item.id == book.id
    );
    if (index !== -1) {
      livresDataAladnane.wishlistBooks.splice(index, 1);
    }
    setCookie(`addedToWishlist_${book.id}`, "false", 7);
  }
  // Toggle whether the book is added to the wishlist
  book.addedToWishlist = !book.addedToWishlist; // Move this line inside the if-else block
  addToWishlistGeneral(book);
  userCart.aladnane.livres = livresDataAladnane; //usercart online shit
}
