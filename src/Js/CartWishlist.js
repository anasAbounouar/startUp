import Cookies from "js-cookie";
export function addToCartGeneral(itemData, quantity) {
  if (!itemData.addedToCart) {
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

export function addToWishlistGeneral(itemData) {
  console.log("addToWishlist method called");
  if (!itemData.addedToWishlist) {
    infosGenerales.wishlistCount++;
    infosGenerales.wishlistItems.push(itemData);
  } else {
    infosGenerales.wishlistCount--;
    const index = infosGenerales.wishlistItems.findIndex(
      (item) => item.id == itemData.id
    );
    infosGenerales.wishlistItems.splice(index, 1);
  }
  // Store the updated infosGenerales object as a cookie
  Cookies.set("infosGenerales", JSON.stringify(infosGenerales));
}
export const infosGenerales = Cookies.get("infosGenerales")
  ? JSON.parse(Cookies.get("infosGenerales"))
  : {
      totalPrice: 0,
      cartCount: 0,
      wishlistCount: 0,
      wishlistItems: [],
      panierItems: [],
    };
