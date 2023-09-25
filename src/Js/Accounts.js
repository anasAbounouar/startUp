export const AccountsData = {
  email: "anas@gmail.com",
  password: "123",
  isLoggedIn: false,
  imgSrc: require("@/assets/avatar.png"),
};

export const toggleLogin = (isLoggedIn) => {
  isLoggedIn = !isLoggedIn;
  AccountsData.isLoggedIn = isLoggedIn;
};
