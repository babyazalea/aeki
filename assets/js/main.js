import "../scss/styles.scss";

const something = async () => {
  console.log("something");
};

// cmw interaction

const cmwHandle = () => {
  const cmwCheckBox = document.querySelector(".cmw__check");

  const cmwChecked = () => {
    const cmwRow = document.getElementsByClassName("cmw__row");
    const cmwInput = document.getElementsByClassName("cmw__input");
    const cmwValue = cmwCheckBox.getAttribute("value");

    cmwCheckBox.nodeValue = !cmwValue;

    for (let i = 0; i < cmwRow.length; i++) {
      cmwRow[i].classList.toggle("disabled");
    }
    for (let i = 0; i < cmwInput.length; i++) {
      cmwInput[i].toggleAttribute("disabled");
    }
  };
  if (cmwCheckBox) {
    cmwCheckBox.addEventListener("change", cmwChecked);
  } else {
  }
};

// Not purchased interaction
const npHandle = () => {
  const npCheckbox = document.querySelector(".np__checkbox");
  const npRow = document.getElementsByClassName("not__purchased__row");
  const npInput = document.getElementsByClassName("not__purchased__input");
  const npAddButton = document.querySelector(".not__purchased__add");
  const sigularityRow = document.querySelector(".singularity__row");
  const deleteBtn = document.getElementsByClassName("delete__button");
  let i = 1;

  const npListAdd = () => {
    const button = document.createElement("button");
    const newRow = document.createElement("tr");
    const newName = document.createElement("td");
    const newNumber = document.createElement("td");
    const newInput1 = document.createElement("input");
    const newInput2 = document.createElement("input");

    newNumber.classList.add("not__purchased__article__number");
    newName.classList.add("not__purchased__article__name");
    newRow.classList.add("not__purchased__row");
    newRow.append(newNumber);
    newRow.append(newName);

    // new article number
    newRow
      .getElementsByClassName("not__purchased__article__number")
      .item(0)
      .append(newInput2);
    newRow
      .getElementsByClassName("not__purchased__article__number")
      .item(0)
      .getElementsByTagName("input")
      .item(0)
      .setAttribute("type", "text");
    newRow
      .getElementsByClassName("not__purchased__article__number")
      .item(0)
      .getElementsByTagName("input")
      .item(0)
      .setAttribute("name", "articleNumber");
    newRow
      .getElementsByClassName("not__purchased__article__number")
      .item(0)
      .getElementsByTagName("input")
      .item(0)
      .classList.add("not__purchased__input");

    // new article name
    newRow
      .getElementsByClassName("not__purchased__article__name")
      .item(0)
      .setAttribute("colspan", "4");
    newRow
      .getElementsByClassName("not__purchased__article__name")
      .item(0)
      .append(newInput1);
    newRow
      .getElementsByClassName("not__purchased__article__name")
      .item(0)
      .getElementsByTagName("input")
      .item(0)
      .setAttribute("type", "number");
    newRow
      .getElementsByClassName("not__purchased__article__name")
      .item(0)
      .getElementsByTagName("input")
      .item(0)
      .setAttribute("name", "articleName");
    newRow
      .getElementsByClassName("not__purchased__article__name")
      .item(0)
      .getElementsByTagName("input")
      .item(0)
      .classList.add("not__purchased__input");

    // delete button
    const deleteBtn = newRow
      .getElementsByClassName("not__purchased__article__name")
      .item(0)
      .appendChild(button);

    deleteBtn.classList.add("delete__button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;

    // declaration

    sigularityRow.parentElement.insertBefore(newRow, sigularityRow);

    newRow.classList.add("added__row");

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
  };

  const npListDelete = (e) => {
    const targetList = e.target.parentElement.parentElement;
    targetList.remove();
  };

  if (npCheckbox) {
    npCheckbox.addEventListener("change", npCheckboxChecked);
  }
  if (npAddButton) {
    npAddButton.addEventListener("click", npListAdd);
  }
  for (i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", npListDelete);
  }
};

cmwHandle();
npHandle();
