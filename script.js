fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(res =>print(res))

function print(countries){
    const root = document.getElementById('root');
    let htmlcode = '';

    countries.forEach(country =>{
        htmlcode += makeHTML(country)
       
    })
root.innerHTML = htmlcode;
}


function makeHTML(country){
    const {name, flags,capital} = country;
    

    const html =`
      <div>
         <img src='${flags.png}'/>
         <h3>${name.common}</h3>
        
         <p>${capital}</p>

      </div >
      `;
      return html; 
}    

const form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const test = e.target.searchBox.value;
    const boxvalue = test.toLowerCase();
    
  
    fetch('https://restcountries.com/v3.1/name/${boxvalue}')
    .then(res =>res.json())
    .then(res=> console.log(res))    
});