const userData = async () => {
  const data = await fetch("http://127.0.0.1:5500/userData.json");
  let amk = await data.json();
  return amk;
};

const isUser = async (nameInput, pswInput) => {
  const { username, password } = await userData();

  nameInput === username && pswInput === password
    ? sessionStorage.setItem(
        "isLogged",
        true
      )((window.location.href = "index.html"))
    : sessionStorage.setItem("isLogged", false);
};

const submitBtn = document.getElementById("sub");

submitBtn.addEventListener("keypress", function (e) {
  const user = document.getElementById("username").value;
  const psw = document.getElementById("pwd").value;
  if (e.key === "Enter") {
    isUser(user, psw);
  }
});
