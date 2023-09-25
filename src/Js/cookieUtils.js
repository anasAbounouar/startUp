// Get the value of a cookie by name
export function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return "";
}

// Set the value of a cookie
export function setCookie(name, value, days) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )};expires=${expires.toUTCString()};path=/`;
  document.cookie = cookie;
}
