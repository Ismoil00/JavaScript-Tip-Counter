//*************** Tip Calculator per Person ***************//

const bill = document.getElementById("billInput");
const tip = document.getElementById("tipInput");
const totalMoney = document.getElementById("total");
const clearBtn = document.getElementById("clearBtn");
let peopleNumber = document.getElementById("peopleNumber");
let perPerson = document.getElementById("persons");

let peopleNum = 1;

calculateBill();

function calculateBill() {
  let billValue = Number(bill.value);
  let tipPercent = Number(tip.value);

  totalPerPerson = ((tipPercent / 100) * billValue + billValue) / peopleNum;
  totalMoney.innerText = totalPerPerson.toFixed(2);
}

function increase() {
  peopleNum += 1;
  peopleNumber.innerText = peopleNum;
  perPersons();
  calculateBill();
}

function decrease() {
  if (peopleNum > 1) {
    peopleNum -= 1;
    peopleNumber.innerText = peopleNum;
    perPerson.innerText = peopleNum + " People";
  }
  perPersons();
  calculateBill();
}

function perPersons() {
  if (peopleNum === 1) {
    perPerson.innerText = "Person";
  } else if (peopleNum > 1) {
    perPerson.innerText = peopleNum + " People";
  }
}

clearBtn.addEventListener("click", () => {
  let zero = 0;
  peopleNum = 1;
  bill.value = "";
  tip.value = "";
  totalMoney.innerText = zero.toFixed(2);
  peopleNumber.innerText = peopleNum;
  perPerson.innerText = "Person";
})