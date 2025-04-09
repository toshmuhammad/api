import { elContainer } from "../html-elements.js";
import { uiRender } from "./ui-render.js";
let tab1 = document.querySelector('.tab1')
let tab2 = document.querySelector('.tab2')
let tab3 = document.querySelector('.tab3')
let tab4 = document.querySelector('.tab4')
let container=document.getElementById('container')
// let wrapper=document.querySelector('.wrapper')

// function data(e) {
//     return`
//     <li>
//       <div class="card bg-base-100 shadow-sm">
//         <div class="card-body">
//           <div class="tooltip" data-tip="${e.price}">
//             <h2 class="card-title">${e.name}</h2>
//           </div>
//           <p class="line-clamp-3">${e.description}</p>
//           <div class="card-actions justify-end">
//             <button class="btn btn-primary">${e.price}</button>
//           </div>
//         </div>
//       </div>
//     </li>
//     `
// }
document.addEventListener('DOMContentLoaded',function() {
    fetch("https://json-api.uz/api/project/fn37/students")
        .then((oquvchi) => {
            return oquvchi.json();
        })
        .then((oquvchi) => {
            uiRender(oquvchi);
        })
        .catch((error) => { })
        .finally(() => { });
})
tab1.addEventListener('click', function () {
    fetch("https://json-api.uz/api/project/fn37/products")
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            uiRender(res);
            let dat=data(res)
            wrapper.innerHTML+=data
            console.log(res)
        })
        .catch((error) => { })
        .finally(() => { })
})





tab2.addEventListener('click', function () {
    container.classList.remove('grid')
    fetch("https://json-api.uz/api/project/fn37/students")
        .then((oquvchi) => {
            return oquvchi.json();
        })
        .then((oquvchi) => {
            uiRender(oquvchi);
        })
        .catch((error) => { })
        .finally(() => { });
})


tab3.addEventListener('click', function () {
    fetch("https://json-api.uz/api/project/fn37/animals")
        .then((hayvon) => {
            return hayvon.json();
        })
        .then((hayvon) => {
            uiRender(hayvon);
        })
        .catch((error) => { })
        .finally(() => { });
})



tab4.addEventListener('click', function () {
    fetch("https://json-api.uz/api/project/fn37/cars")
        .then((mashina) => {
            return mashina.json();
        })
        .then((mashina) => {
            uiRender(mashina);
        })
        .catch((error) => { })
        .finally(() => { });
})