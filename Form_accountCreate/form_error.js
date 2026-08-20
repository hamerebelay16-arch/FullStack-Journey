// function login(user) {
//   if (!user || !user.name) throw new Error("username required!");
//   return "logged in successfuly!";
// }
// try {
//   console.log(login());
// } catch (err) {
//   console.log(err.message);
// }

// function resgisteruser(user) {
//   if (!user.name) throw new Error("Usernamee is required!");
//   if (user.age < 18) throw new Error("Age not validated!");
//   if (!user.email) throw new Error("Email is required!");
//   console.log("Name:" + user.name);
//   console.log("Age:" + user.age);
//   console.log("email:" + user.email);
// }
// try {
//   resgisteruser({ name: "ham", age: 21, email: "amere@gmail.com" });
// } catch (err) {
//   console.log(err.message);
// }

// now build custom errors

class LoginError extends Error {
  constructor(message) {
    super(message);
    this.name = "Login Error!";
  }
}
const errmessage = document.getElementById("errmessage");

const form = document.getElementById("form");

function resgisteruser(user) {
  if (!user || !user.name) {
    throw new LoginError("Username required!");
  }

  if (user.age < 18) {
    throw new LoginError("Age not validated, Must be 18 and above!");
  }

  if (!user.email) {
    throw new LoginError("Email required!");
  }

  console.log("Account created successfuly!");
  errmessage.style.color = "green";
  errmessage.textContent = "Account created successfuly!";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value;
  const user = {
    name,
    age,
    email,
  };
  try {
    resgisteruser(user);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);

    errmessage.style.color = "red";
    errmessage.textContent = err.message;
  }
});
