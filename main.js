function initClass() {
  var h = document.getElementById("buttonsPercentual");
  var buttons = h.getElementsByClassName("btn");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    })
  }
}

initClass();

let bill = document.querySelector("#txtbill");
let people = document.querySelector("#txtpeople");
let gorjeta = document.querySelector("#gorjeta");
let divisaoPessoas = document.querySelector("#divisaoPessoas");

function contar5() {
  if ( bill.value.length === 0 || people.value.length === 0) {
    divisaoPessoas.innerHTML = `$0.00`;
    gorjeta.innerHTML = `$0.00`;
  } else {
    let dp = Number(bill.value) / Number(people.value);
    divisaoPessoas.innerHTML = `$${dp}`;

    let p =
      (5 / 100) * Number(bill.value) + Number(bill.value) / Number(people.value);
    gorjeta.innerHTML = `$${p}`;
  }
}

function contar10() {
  if (bill.value.length == 0 || people.value.length == 0) {
    divisaoPessoas.innerHTML = `$0.00`;
    gorjeta.innerHTML = `$0.00`;
  } else {
    let dp = Number(bill.value) / Number(people.value);
    divisaoPessoas.innerHTML = `$${dp}`;

    let p =
      (10 / 100) * Number(bill.value) + Number(bill.value) / Number(people.value);
    gorjeta.innerHTML = `$${p}`;
  }
}

function contar15() {
  if (bill.value.length == 0 || people.value.length == 0) {
    divisaoPessoas.innerHTML = `$0.00`;
    gorjeta.innerHTML = `$0.00`;
  } else {
    let dp = Number(bill.value) / Number(people.value);
    divisaoPessoas.innerHTML = `$${dp}`;

    let p =
      (15 / 100) * Number(bill.value) + Number(bill.value) / Number(people.value);
    gorjeta.innerHTML = `$${p}`;
  }
}

function contar25() {
  if (bill.value.length == 0 || people.value.length == 0) {
    divisaoPessoas.innerHTML = `$0.00`;
    gorjeta.innerHTML = `$0.00`;
  } else {
    let dp = Number(bill.value) / Number(people.value);
    divisaoPessoas.innerHTML = `$${dp}`;

    let p =
      (25 / 100) * Number(bill.value) + Number(bill.value) / Number(people.value);
    gorjeta.innerHTML = `$${p}`;
  }
}

function contar50() {
  if (bill.value.length == 0 || people.value.length == 0) {
    divisaoPessoas.innerHTML = `$0.00`;
    gorjeta.innerHTML = `$0.00`;
  } else {
    let dp = Number(bill.value) / Number(people.value);
    divisaoPessoas.innerHTML = `$${dp}`;

    let p =
      (50 / 100) * Number(bill.value) + Number(bill.value) / Number(people.value);
    gorjeta.innerHTML = `$${p}`;
  }
}

function contarCustom() {
  if (bill.value.length == 0 || people.value.length == 0) {
    divisaoPessoas.innerHTML = `$0.00`
    gorjeta.innerHTML = `$0.00`
  } else {
    let dp = Number(bill.value) / Number(people.value)
    divisaoPessoas.innerHTML = `$${dp}`
    let custom = document.querySelector("#custom")

    let p =
      (Number(custom.value) / 100) * Number(bill.value) +
      Number(bill.value) / Number(people.value)
    gorjeta.innerHTML = `$${p}`
  }
}

function reset() {
  location.reload()
}