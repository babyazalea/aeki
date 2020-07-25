import "../scss/styles.scss";

const something = async () => {
  console.log("something");
};

// Not purchased interaction
const npHandle = () => {
  const npCheckbox = document.querySelector(".np__checkbox");
  const npRow = document.querySelectorAll(".not__purchased__row");
  const npInput = document.querySelectorAll(".not__purchased__input");
  const npAddButton = document.querySelector(".not__purchased__add");
  const npList = document.querySelector(".not__purchased__top");
  const sigularityRow = document.querySelector(".singularity__row");

  const npCheckboxChecked = () => {
    npRow.forEach((element) => {
      element.classList.toggle("disabled");
    });
    npInput.forEach((element) => {
      element.toggleAttribute("disabled");
    });
    npAddButton.classList.toggle("disabled");
    npAddButton.toggleAttribute("disabled");
  };

  const npListAdd = () => {
    const btn = document.createElement("button");
    const newRow = npList.cloneNode(true);
    const newTd = newRow
      .querySelector(".not__purchased__article__name")
      .appendChild(btn);
    newTd.classList.add("delete__button");
    const newList = newTd.parentElement.parentElement;
    npList.parentElement.insertBefore(newList, sigularityRow);
    console.log(newList);
  };

  npCheckbox.addEventListener("change", npCheckboxChecked);
  npAddButton.addEventListener("click", npListAdd);
};

npHandle();
