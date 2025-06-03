



// let url = "https://restcountries.com/v3.1/all"

// fetch(url)
// .then(res => 
//     res.json()
// )
// .then(data=> console.log(data)

// )

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const container = document.getElementById("container");



function renderCountry (){
  container.innerHTML = "";
  

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // one.innerText = data[70].region
    // two.innerText = data[70].languages.rus
    // container.innerHTML = `<h1>${data[50].region}</h1>`
    console.log(data)


let counter = 0;
let fff = counter + 1




  data.forEach(element => {
    container.innerHTML += `
    <div class="item">
      <div class="imageBck">
        <img src=${element.flags.png} alt="">
      </div>
      <div class="textBck">
        <p>Name: ${element.name.common}</p>
        <p>Name: </p>
        <p>Population: ${element.population}</p>
        <p>${element.currencies[Object.keys(element.currencies)[0]].name}</p>
        <p>Symbol: ${element.currencies[Object.keys(element.currencies)[0]].symbol}</p> 
      </div>
    </div>
    `;
    // console.log(element); 
  });

  // for (i = 1; i <= 250; i++){
  //   container.innerHTML += `
  //   <div class="item">
  //     <div class="imageBck">
  //       <img src=${data[i].flags.png} alt="">
  //     </div>
  //     <div class="textBck">
  //     <p>Name: ${data[i].name.common}</p>
  //     <p>Name: ${i}</p>
  //     <p>Population: ${data[i].population}</p>
  //     <p></p>
  //     <p>Symbol:</p>
  //   </div>
  //   </div>`;
  // }
  // })

})
}

// console.log(data[i].currencies[0]);



function searchName () {
  const searchBox = document.getElementById("searchBox");
  const searchBtn = document.getElementById("searchName");
  const pTag = document.getElementById("pTag");
  const countryName = searchBox.value.trim()

  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then(res => res.json())
  .then(data => {




    const element = data[0]; 
    pTag.innerHTML = `
       <div class="item">
         <div class="imageBck">
           <img src=${element.flags.png} alt="">
         </div>
         <div class="textBck">
           <p>Name: ${element.name.common}</p>
           <p>Name: </p>
           <p>Population: ${element.population}</p>
           <p>${element.currencies[Object.keys(element.currencies)[0]].name}</p>
           <p>Symbol: ${element.currencies[Object.keys(element.currencies)[0]].symbol}</p> 
        </div>
      </div>`;
    




      container.innerHTML = "";

    console.log(country);
    

    // data.forEach(element => {
    //   container.innerHTML += `
    //   <div class="item">
    //     <div class="imageBck">
    //       <img src=${element.flags.png} alt="">
    //     </div>
    //     <div class="textBck">
    //       <p>Name: ${element.name.common}</p>
    //       <p>Name: </p>
    //       <p>Population: ${element.population}</p>
    //       <p>${element.currencies[Object.keys(element.currencies)[0]].name}</p>
    //       <p>Symbol: ${element.currencies[Object.keys(element.currencies)[0]].symbol}</p> 
    //     </div>
    //   </div>
    //   `;
    //   // console.log(element); 
    // });
  })
}

searchBtn.addEventListener("click", searchName)

renderCountry()
