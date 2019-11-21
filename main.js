function toggleAside() {
  var navToggle = document.getElementsByClassName("nav-toggle")[0];
  console.log(navToggle);
  var aside = document.getElementById("aside");
  // Make aside element slide in or out
  if (aside.className != "active") {
    aside.className = "active";
  } else {
    aside.className = "";
  }
  // Change toggle icon
  if (!navToggle.className.includes("active")) {
    navToggle.className += " active";
  } else {
    navToggle.className = navToggle.className.substring(
      0,
      navToggle.className.indexOf(" active")
    );
  }
}
