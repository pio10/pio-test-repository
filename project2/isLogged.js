const isLoggedIn = sessionStorage.getItem("isLogged");

if (isLoggedIn) {
} else {
  location.href = "loginPage.html";
}
