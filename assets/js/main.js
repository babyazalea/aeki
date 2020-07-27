import "../scss/styles.scss";

const something = async () => {
  console.log("something");
};

// Not purchased interaction
const npHandle = () => {
  const npCheckbox = document.querySelector(".np__checkbox");
  const npRow = document.getElementsByClassName("not__purchased__row");
  const npInput = document.getElementsByClassName("not__purchased__input");
  const npAddButton = document.querySelector(".not__purchased__add");
  const npList = document.querySelector(".not__purchased__top");
  const sigularityRow = document.querySelector(".singularity__row");
  const npdeleteBtn = document.getElementsByClassName("delete__button");
  let i = 1;

  const npListAdd = () => {
    const button = document.createElement("button");
    const newRow = npList.cloneNode(true);
    const newTd = newRow.querySelector(".not__purchased__article__name");
    const deleteBtn = newTd.appendChild(button);
    newRow.id = i++;
    newRow.classList.add("added__row");
    newRow.querySelectorAll("input").forEach((element) => {
      element.setAttribute("value", "");
    });
    deleteBtn.id = newRow.id;
    deleteBtn.classList.add("delete__button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;

    npList.parentElement.insertBefore(newRow, sigularityRow);

    deleteBtn.addEventListener("click", npListDelete);
  };

  const npCheckboxChecked = () => {
    for (i = 0; i < npRow.length; i++) {
      npRow[i].classList.toggle("disabled");
    }
    for (i = 0; i < npInput.length; i++) {
      npInput[i].toggleAttribute("disabled");
    }
    npAddButton.classList.toggle("disabled");
    npAddButton.toggleAttribute("disabled");
    console.log(npdeleteBtn);
  };

  const npListDelete = (e) => {
    const targetList = e.target.parentElement.parentElement;
    targetList.remove();
  };

  npCheckbox.addEventListener("change", npCheckboxChecked);
  npAddButton.addEventListener("click", npListAdd);
};

npHandle();
