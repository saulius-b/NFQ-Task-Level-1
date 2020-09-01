// Specialisto puslapis

// Declaring variables
let selected = document.getElementById('selected2').value
let specialistSelection = document.getElementById('specialistSelection')
let selected4
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
let arr1 = []
let arr2 = []
let arr3 = []
let arr4 = []


// Getting each specialists keys into arrays and sorting them
function sortingKeys() {
  for (key in localStorage) {
    if (localStorage.hasOwnProperty(key) && localStorage.getItem(key) === "Banko vadybininkas") {
      arr1.push(key)
    } else if (localStorage.hasOwnProperty(key) && localStorage.getItem(key) === "Šeimos gydytojas") {
      arr2.push(key)
    } else if (localStorage.hasOwnProperty(key) && localStorage.getItem(key) === "Kirpėja") {
      arr3.push(key)
    } else if (localStorage.hasOwnProperty(key) && localStorage.getItem(key) === "Servisas") {
      arr4.push(key)
    }
  }
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  arr3.sort((a, b) => a - b)
  arr4.sort((a, b) => a - b)
}


// Checking which specialist is selected in dropdown menu
function checking2(e) {
  selected = e.target.value
  // Refreshing the div with jquerry(to not have doubled text)
  $("#doctorsSelection").load(" #doctorsSelection")
}


// Running key sorting function
sortingKeys()


// Rendering clients list
btn2.addEventListener('click', function () {
  
  document.getElementById("btn2").disabled = true;
  if (selected === "Banko vadybininkas") {
    for (key1 of arr1) {
      document.getElementById('doctorsSelection').innerHTML += `<p> Kliento numeris: ${key1} <input type='checkbox' id='${key1}' onchange='checking3(event)'></p><br>`
    }
  } else if (selected === "Šeimos gydytojas") {
    for (key1 of arr2) {
      document.getElementById('doctorsSelection').innerHTML += `<p> Kliento numeris: ${key1} <input type='checkbox' id='${key1}' onchange='checking3(event)'></p><br>`
    }
  } else if (selected === "Kirpėja") {
    for (key1 of arr3) {
      document.getElementById('doctorsSelection').innerHTML += `<p> Kliento numeris: ${key1} <input type='checkbox' id='${key1}' onchange='checking3(event)'></p><br>`
    }
  } else if (selected === "Servisas") {
    for (key1 of arr4) {
      document.getElementById('doctorsSelection').innerHTML += `<p> Kliento numeris: ${key1} <input type='checkbox' id='${key1}' onchange='checking3(event)'></p><br>`
    }
  }
 
})


// Checking which checkbox is selected (getting key for removal from local storage)
function checking3(e) {
  selected4 = e.target.id
}


// Aptarnauta button, which removes selection from localstorage
btn3.addEventListener('click', function () {
  localStorage.removeItem(selected4)
  // Bad solution, but it works. NEED TO CHANGE IT
  location.reload()  
})

