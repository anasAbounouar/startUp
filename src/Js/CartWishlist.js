import Cookies from "js-cookie";
import { reactive } from "vue";
// Create a reactive data object for infosGenerales !!!!!!
const infosGenerales = reactive({
  totalPrice: 0,
  cartCount: 0,
  wishlistCount: 0,
  wishlistItems: [],
  panierItems: [],
});
// This function is used to add or remove an item from the cart with optional
export function addToCartGeneral(itemData, quantity) {
  // Check if the item is not already in the cart
  if (!itemData.addedToCart) {
    // Calculate the new total price by adding the item's price times quantity
    // to the existing total price, and round it to 2 decimal places
    infosGenerales.totalPrice = (
      parseFloat(itemData.price) * quantity +
      parseFloat(infosGenerales.totalPrice)
    ).toFixed(2); // Round to 2 decimal places
    infosGenerales.cartCount++;
    infosGenerales.panierItems.push(itemData);
  } else {
    infosGenerales.totalPrice = (
      parseFloat(infosGenerales.totalPrice) -
      parseFloat(itemData.price) * quantity
    ).toFixed(2); // Round to 2 decimal places
    infosGenerales.cartCount--;
    const index = infosGenerales.panierItems.findIndex(
      (item) => item.id == itemData.id
    );
    infosGenerales.panierItems.splice(index, 1);
  }

  Cookies.set("infosGenerales", JSON.stringify(infosGenerales));
}
// This function is used to add or remove an item from the wishlist
export async function addToWishlistGeneral(itemData) {
  console.log("addToWishlist method called", itemData);
  // Check if the item is not already in the wishlist
  // kolchi m9lob
  if (itemData.addedToWishlist) {
    infosGenerales.wishlistCount++;
    // Add the item to the wishlist (wishlistItems)
    infosGenerales.wishlistItems.push(itemData);
    console.log("(infosGenerales.wishlistCount", infosGenerales.wishlistCount);
  } else {
    infosGenerales.wishlistCount--;
    // Find the index of the item in the wishlist and remove it
    const index = infosGenerales.wishlistItems.findIndex(
      (item) => item.id == itemData.id
    );
    infosGenerales.wishlistItems.splice(index, 1);
  }
  // Store the updated infosGenerales object as a cookie
  Cookies.set("infosGenerales", JSON.stringify(infosGenerales));
}
// Initialize infosGenerales with cookie data or default values
// export const infosGenerales = Cookies.get("infosGenerales")
//   ? JSON.parse(Cookies.get("infosGenerales"))
//   : ref({
//       totalPrice: 0,
//       cartCount: 0,
//       wishlistCount: 0,
//       wishlistItems: [],
//       panierItems: [],
//     });
// Initialize infosGenerales with cookie data or default values
if (Cookies.get("infosGenerales")) {
  const cookieData = JSON.parse(Cookies.get("infosGenerales"));
  Object.keys(cookieData).forEach((key) => {
    infosGenerales[key] = cookieData[key];
  });
}

export { infosGenerales };
