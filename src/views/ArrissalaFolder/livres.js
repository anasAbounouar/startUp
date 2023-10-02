import { addToCartGeneral, addToWishlistGeneral } from "@/Js/CartWishlist";
import { setCookie } from "@/Js/cookieUtils";
import { reactive } from "vue";
const livresDataArrissala = reactive({
  library: "Arrissala",
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
      id: 0,
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
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
// Function to add or remove a book to/from the cart with optional quantity
export function addToCartLivresDataArrissala(book, quantity) {
  // quantity null means unprovided means 1
  const realQuantity = quantity === null ? 1 : quantity;
  livresDataArrissala.totalPrice += book.addedToCart
    ? -parseFloat(book.price) * realQuantity
    : parseFloat(book.price) * realQuantity;
  livresDataArrissala.cartCount += book.addedToCart ? -1 : 1;
  setCookie(`addedToCart_${book.id}`, !book.addedToCart, 2);
  addToCartGeneral(book, quantity);
  // Toggle whether the book is added to the cart
  book.addedToCart = !book.addedToCart;
}
export async function addToWishlistLivresDataArrissala(book) {
  if (!book.addedToWishlist) {
    livresDataArrissala.WishlistCount++;
    console.log(
      livresDataArrissala.WishlistCount,
      "livresData.WishlistCount++"
    );
    livresDataArrissala.wishlistBooks.push(book);
    setCookie(`addedToWishlist_${book.id}`, "true", 7);
  } else {
    livresDataArrissala.WishlistCount--;
    const index = livresDataArrissala.wishlistBooks.findIndex(
      (item) => item.id == book.id
    );
    if (index !== -1) {
      livresDataArrissala.wishlistBooks.splice(index, 1);
    }
    setCookie(`addedToWishlist_${book.id}`, "false", 7);
  }
  // Toggle whether the book is added to the wishlist
  book.addedToWishlist = !book.addedToWishlist; // Move this line inside the if-else block
  addToWishlistGeneral(book);
}
export { livresDataArrissala };
