import "../scss/styles.scss";

const something = async () => {
  console.log("something");
};

// Not purchased interaction

const npCheckbox = document.querySelector(".np__checkbox");

const npCheckboxChecked = () => {};

npCheckbox.addEventListener("change", npCheckboxChecked, false);
