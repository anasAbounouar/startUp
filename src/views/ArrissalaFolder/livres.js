import { addToCartGeneral, addToWishlistGeneral } from "@/Js/CartWishlist";
import { setCookie } from "@/Js/cookieUtils";
export const livresData = {
  library: "Arrissala",
  name: "livres",
  arrow: "Livres & Histoires",
  cartCount: 0,
  WishlistCount: 0,
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
};
export function addToCart(book, quantity) {
  if (quantity === null) {
    if (!book.addedToCart) {
      livresData.totalPrice =
        parseFloat(book.price) + parseFloat(livresData.totalPrice);
      livresData.cartCount++;
      // Additional logic or actions when a book is added to the cart
      setCookie(`addedToCart_${book.id}`, "true", 2);
    } else {
      livresData.totalPrice =
        parseFloat(livresData.totalPrice) - parseFloat(book.price);
      livresData.cartCount--;
      // Additional logic or actions when a book is removed from the cart
      setCookie(`addedToCart_${book.id}`, "false", 2);
    }

    addToCartGeneral(book, null);
  } else {
    if (!book.addedToCart) {
      livresData.totalPrice =
        parseFloat(book.price) * quantity + parseFloat(livresData.totalPrice);
      livresData.cartCount++;
      // Additional logic or actions when a book is added to the cart
      setCookie(`addedToCart_${book.id}`, "true", 2);
    } else {
      livresData.totalPrice =
        parseFloat(livresData.totalPrice) - parseFloat(book.price) * quantity;
      livresData.cartCount--;
      // Additional logic or actions when a book is removed from the cart
      setCookie(`addedToCart_${book.id}`, "false", 2);
    }
    addToCartGeneral(book, quantity);
  }

  book.addedToCart = !book.addedToCart;
}
export function addToWishlist(book) {
  if (!book.addedToWishlist) {
    livresData.WishlistCount++;
    livresData.wishlistBooks.push(book);
    setCookie(`addedToWishlist_${book.id}`, "true", 7);
  } else {
    livresData.WishlistCount--;
    const index = livresData.wishlistBooks.findIndex(
      (item) => item.id == book.id
    );
    livresData.wishlistBooks.splice(index, 1);
    setCookie(`addedToWishlist_${book.id}`, "false", 7);
  }

  addToWishlistGeneral(book);
  book.addedToWishlist = !book.addedToWishlist;
}
