const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const container = document.getElementById("container");


function renderCountry() {
  container.innerHTML = "loading...";
  container.style.background = "green";
  container.style.opacity = "0.5";
  container.style.pointerEvents = "none";
  console.log(container.style);

  fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,currencies')
    .then(response => response.json())
    .then(data => {
      console.log(data);
  container.innerHTML = "";


      data.forEach(element => {
        let aaa = element.currencies[Object.keys(element.currencies)[0]]
        // let bbb = element.currencies[Object.keys(element.currencies)[0]]


        console.log(aaa);
        
        if(aaa == undefined){


          console.log("N/A");
          return aaa = 'N/A'
        }
        // if (bbb == undefined){
        //  console.log("N/A");
        // }
        container.innerHTML += `
      <div class="item">
        <div class="imageBck">
          <img src=${element.flags.png} alt="">
        </div>
        <div class="textBck">
          <p>Name: ${element.name.common}</p>
          <p>Population: ${element.population}</p>
          <h3>Currency</h3>
          <p>${aaa.name}</p>
          <p>Symbol: ${aaa.symbol}</p> 
        </div>
      </div>
      `;
      });
    })
    .finally(() => {
      container.style.opacity = "1";
      container.style.pointerEvents = "auto";
      container.style.background = "white";
      console.log(container.style);
    });
}


//  <p>${element.currencies[Object.keys(element.currencies)[0]].name}</p>
//             <p>Symbol: ${element.currencies[Object.keys(element.currencies)[0]].symbol}</p> 
//   <p>${element.currencies[Object.keys(element.currencies)[0]].name}</p>
// <p>${element.currencies[Object.keys(element.currencies)[0]].symbol}</p> 


// function searchName () {
//   const searchBox = document.getElementById("searchBox");
//   const searchBtn = document.getElementById("searchName");
//   const pTag = document.getElementById("pTag");


//   let countryName = searchBox.value.trim()
//   countryName.split(' ')


//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//   .then(res => res.json())
//   .then(data => {

// console.log(countryName);



//     const element = data[0]; 
//     pTag.innerHTML = `
//       <div class="item">
//         <div class="imageBck">
//           <img src=${element.flags.png} alt="">
//         </div>
//         <div class="textBck">
//           <p>Name: ${element.name.common}</p>
//           <p>Name: </p>
//           <p>Population: ${element.population}</p>
//           <p>${element.currencies[Object.keys(element.currencies)[0]].name}</p>
//           <p>Symbol: ${element.currencies[Object.keys(element.currencies)[0]].symbol}</p> 
//       </div>
//     </div>`;
//       container.innerHTML = "";
//   })
// }

// searchBtn.addEventListener("click", searchName)

const searchBox = document.getElementById("searchBox");
const pTag = document.getElementById("pTag");








searchBox.addEventListener('input', () => {
  let countryName = searchBox.value.trim()
  console.log(countryName);


  if (countryName.length > 1) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(res => res.json())
      .then(data => {

        console.log(data);
        container.innerHTML = "";

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
      </div>`;
        })
      })
  } else if (countryName == '') {
    renderCountry()
  }


  console.log('search working');


})



renderCountry()
