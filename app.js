document.getElementById("form").addEventListener("submit", calculateResult);

function calculateResult(e) {
  // const cTemp = document.getElementById('centigrade');
  const temp = document.getElementById("temperature");
  const submit = document.getElementById("submit");
  const result = document.getElementById("result");
  const select = document.getElementById("select");
  const clear = document.getElementById("clear");

  // for input and output (FROM AND TO)
  const inputTemp = temp.value;
  const from = document.getElementById("from");
  const to = document.getElementById("to");

  // functions
  from.addEventListener("change", calculateResult);
  to.addEventListener("change", calculateResult);
  clear.addEventListener("click", clearStorage);
  submit.addEventListener('click' , calculate);

  // input-From &  output-To values
  let inputValue = from.value;
  let outputValue = to.value;

  // if the input valu is empty or 0
  function emptyInput() {
    if (inputTemp === "" || inputTemp == 0) {
      result.value = 0;
    }
  }

  function calculate(){
    //  from celsius to fahrenheit and viceVersa
  if (inputValue === "celsius" && outputValue === "fahrenheit") {
    result.value = inputTemp * (9 / 5) + 32;
    
  } else if (inputValue === "fahrenheit" && outputValue === "celsius") {
    result.value = ((5 / 9) * (inputTemp - 32)).toFixed(2);
    
  }
  // from kelvin to celsius and viceVersa
  else if (inputValue === "kelvin" && outputValue === "celsius") {
    result.value = inputTemp - 273.15;
  
  } else if (inputValue === "celsius" && outputValue === "kelvin") {
    result.value = +inputTemp + 273.15;
    
  }
  // from fahrenheit to kelvin and viceVersa
  else if (inputValue === "fahrenheit" && outputValue === "kelvin") {
    result.value = (inputTemp - 32) * (5 / 9) + 273.15;
    
  } else if (inputValue === "kelvin" && outputValue === "fahrenheit") {
    result.value = (inputTemp - 273.15) * (9 / 5) + 32;
    
  }
  // if input and output are same //
  else if (
    (inputValue === "kelvin" && outputValue === "kelvin") ||
    (inputValue === "fahrenheit" && outputValue === "fahrenheit") ||
    (inputValue === "celsius" && outputValue === "celsius")
  ) {
    result.value = inputTemp;
  } else {
    result.value = "";
  }

  emptyInput();
  
  }

  //store in local storage
  storeResultInLocalStorage(result.value);

  e.preventDefault();
}

function storeResultInLocalStorage(data) {
  let datas;
  if (localStorage.getItem("datas") === null) {
    datas = [];
  } else {
    datas = JSON.parse(localStorage.getItem("datas"));
  }

  datas.push(data);
  localStorage.setItem("datas", JSON.stringify(datas));
}

//clear storage
function clearStorage() {
  localStorage.clear();
  result.value = "";
}
