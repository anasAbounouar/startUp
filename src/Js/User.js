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
export let onlineUser = reactive({
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
export function addToCart(libraryName, type, book, quantity) {
  let addedToCart = null;
  if (
    onlineUser[libraryName][type].purchasedBooks.find((el) => {
      return el.id === book.id;
    }) === undefined
  ) {
    addedToCart = false;
    console.log("this item is not added to cart");
  } else {
    addedToCart = true;
    console.log("this item isss added to cart");
  }
  const totalPriceChange = parseFloat(
    parseFloat(book.price) * parseFloat(quantity)
  );
  onlineUser[libraryName][type].totalPrice += addedToCart
    ? -totalPriceChange
    : totalPriceChange;
  onlineUser[libraryName][type].cartCount += addedToCart ? -1 : 1;
  if (!addedToCart) {
    return onlineUser[libraryName][type].purchasedBooks.push({
      book,
      quantity: quantity,
    });
  } else {
    const bookIndex = onlineUser[libraryName][type].purchasedBooks.findIndex(
      (item) => item.book.id === book.id
    );
    if (bookIndex !== 1) {
      onlineUser[libraryName][type].purchasedBooks.splice(bookIndex, 1);
    } else {
      console.log("there is an error in books added or not ");
    }
  }
}
