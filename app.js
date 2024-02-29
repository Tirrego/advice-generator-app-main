const url = "https://api.adviceslip.com/advice"

const btn = document.querySelector("#btn-js");
const text = document.querySelector("#text-js");
const id = document.querySelector("#id-js");


const GetData = async () => {
const res = await fetch(url);
const data = await res.json();
text.innerHTML = data.slip.advice;
id.innerHTML = data.slip.id;
}



btn.addEventListener("click", () => {
    GetData();

})