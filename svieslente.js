// ŠVIESLENTĖ

// Declaring variables
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


// Refreshing page if localstorage is updated(to update table info when data is updated)
window.addEventListener('storage', () => {
  location.reload()  
})


// Running key sorting function
sortingKeys()


// Displaying sorted customer id's
for (key1 of arr1) {
  document.getElementById('output1').innerHTML += `<p> Kliento numeris: ${key1}</p><br>`
}
for (key1 of arr2) {
  document.getElementById('output2').innerHTML += `<p> Kliento numeris: ${key1}</p><br>`
}
for (key1 of arr3) {
  document.getElementById('output3').innerHTML += `<p> Kliento numeris: ${key1}</p><br>`
}
for (key1 of arr4) {
  document.getElementById('output4').innerHTML += `<p> Kliento numeris: ${key1}</p><br>`
}