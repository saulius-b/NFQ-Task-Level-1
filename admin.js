// Administrating page

// Declaring variables
const btn = document.getElementById('btn')
const output = document.getElementById('output')
let selected = document.getElementById('selected').value
let counter = localStorage.length
let arr = []


// Local storage to an array (for JSON)
function toArr() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    arr.unshift(key, value)
  }
}


// Checking which specialist is selected in the options(dropdown):
function checking(e) {
  selected = e.target.value
  // Refreshing the text in the output div, to avoid having doubled text
  $("#output").load(" #output")
}


// Main function on button click
btn.addEventListener('click', function () {
  // Counting the clicks to get the person number and adding the number and the selected specialist to local storage
  counter++
  localStorage.setItem(counter, selected)
  output.innerHTML = `<h5> Jūsų numeris yra: ${counter}, pas specialistą:  ${selected}</br>`


  // Local storage to an array (for JSON)  
  toArr()


  // Array to JSON format
  let myJSON = JSON.stringify(arr)


  // Update JSONBIN
  let req = new XMLHttpRequest()
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      console.log(req.responseText)
    }
  };
  req.open("PUT", "https://api.jsonbin.io/b/5f3d5b96af209d1016beeeb4", true)
  req.setRequestHeader("Content-Type", "application/json")
  req.setRequestHeader("secret-key", "$2b$10$5MKQTaYS1uji3NCprsQROe0jUunv3Q9bwAaRVJLhPWaLZcCmDsR3S")
  req.setRequestHeader("versioning", "false")
  req.send(myJSON)
})


// Create new JSON bin - run only once
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("POST", "https://api.jsonbin.io/b", true);
// req.setRequestHeader("Content-Type", "application/json");
// req.setRequestHeader("secret-key", "$2b$10$5MKQTaYS1uji3NCprsQROe0jUunv3Q9bwAaRVJLhPWaLZcCmDsR3S");
// req.send(myJSON);