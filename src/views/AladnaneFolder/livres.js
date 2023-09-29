import { addToCartGeneral, addToWishlistGeneral } from "@/Js/CartWishlist";
import { setCookie } from "@/Js/cookieUtils";
export const livresDataAladnane = {
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
      id: 99,
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
      id: 100,
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
      id: 101,
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
      id: 102,
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
      id: 103,
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
      id: 104,
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
      id: 105,
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
      id: 106,
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
      id: 107,
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
      id: 108,
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
      id: 109,
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
      id: 110,
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
      id: 111,
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
      id: 112,
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
      id: 113,
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
      id: 114,
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
      id: 115,
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
      id: 116,
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
      id: 117,
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
      id: 118,
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
      id: 119,
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
      id: 200,
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
      id: 201,
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
      id: 202,
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
      id: 203,
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
      id: 204,
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
      id: 205,
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
      id: 206,
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
      id: 207,
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
};
// Function to add or remove a book to/from the cart with optional quantity
export function addToCartLivresDataAladnane(book, quantity) {
  // quantity null means unprovided means 1
  const realQuantity = quantity === null ? 1 : quantity;
  livresDataAladnane.totalPrice += book.addedToCart
    ? -parseFloat(book.price) * realQuantity
    : parseFloat(book.price) * realQuantity;
  livresDataAladnane.cartCount += book.addedToCart ? -1 : 1;
  setCookie(`addedToCart_${book.id}`, !book.addedToCart, 2);
  addToCartGeneral(book, quantity);
  // Toggle whether the book is added to the cart
  book.addedToCart = !book.addedToCart;
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
}
