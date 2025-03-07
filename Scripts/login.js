const allowedFirstNames = [
  "ahmed",
  "mohamed",
  "adham",
  "ehap",
  "ali",
  "amgad",
  "khaled",
  "Mahmoud",
  "Mahmoud",
  "MOHAMED",
  "ahmed",
  "Ibrahim",
  "Mohab",
];

const allowedLastNames = [
  "hassan",
  "eldeeb",
  "hany",
  "fathy",
  "mohamed",
  "hossam",
  "elmoataz",
  "Elmasry",
  "Safwat",
  "WALEED",
  "mohamed",
  "Mohsen",
  "mohamed",
];

const loginForm = document.getElementById("loginForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

// تحقق مما إذا كان المستخدم قد سجل الدخول مسبقًا
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

// إذا كان المستخدم قد سجل الدخول مسبقًا، قم بتوجيهه إلى صفحة النجاح
if (loggedInUser) {
  window.location.href = "home.html";
}

// عند تقديم النموذج
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = firstNameInput.value.trim().toLowerCase();
  const lastName = lastNameInput.value.trim().toLowerCase();

  const fullName = `${firstName} ${lastName}`;

  const firstNameIndex = allowedFirstNames.indexOf(firstName);
  const lastNameIndex = allowedLastNames.indexOf(lastName);

  // تحقق من صحة الاسم الأول والأخير
  if (
    firstNameIndex !== -1 &&
    lastNameIndex !== -1 &&
    firstNameIndex === lastNameIndex
  ) {
    // تحقق مما إذا كان المستخدم قد سجل الدخول من قبل
    if (loggedInUser && loggedInUser.fullName === fullName) {
      alert("You are already logged in. Redirecting...");
      window.location.href = "home.html";
    } else {
      // حفظ معلومات المستخدم في localStorage
      const user = { fullName, firstName, lastName };
      localStorage.setItem("loggedInUser", JSON.stringify(user));

      // رسالة ترحيبية حسب الاسم
      if (firstNameIndex == 0 && lastNameIndex == 0) {
        alert("Login Successful! Welcome Ahmed Hassan!");
      } else if (firstNameIndex == 1 && lastNameIndex == 1) {
        alert("Login Successful! Welcome Mohamed Eldeeb!");
      } else {
        alert("Login Successful!");
      }

      // توجيه المستخدم إلى صفحة النجاح
      window.location.href = "home.html";
    }
  } else {
    alert(
      "Invalid Name. Please ensure the first name and last name are correct."
    );
  }
});


// this start of code can't user open the inspect

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("Right-click is disabled.");
});

document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.shiftKey && e.key === "÷") ||
    (e.ctrlKey && e.shiftKey && e.key === "ـ") ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
    console.log("This action is disabled.");
  }
});

(function () {
  const devtools = function () {};
  devtools.toString = function () {
    console.log("DevTools is not allowed.");
    return "";
  };
  console.log("%c ", devtools);
  devtools.toString = function () {
    return "";
  };
  console.log("%c ", devtools);
})();

// this end of code can't user open the inspect
