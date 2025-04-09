import { elContainer, elLoader } from "../html-elements.js";

export function uiRender({ data }) {
    elLoader.classList.add("hidden");
    data.forEach(element => {
        const { id, description, name, price } = element;
        elContainer.innerHTML += `
        <li>
        <div class="card bg-base-100 shadow-sm">
        <div class="card-body">
          <div class="tooltip" data-tip="${price}">
          <h2 class="card-title">${name}</h2>
    </div>
          <p class="line-clamp-3">${description}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">${price}</button>
          </div>
        </div>
      </div>
        </li>
        `
    });
    elContainer.classList.remove("hidden");
    elContainer.classList.add("grid");
}





// import { elContainer, elLoader } from "../html-elements.js";

// export function uiRender({ data }) {
//     elLoader.classList.add("hidden");
//     data.forEach(element => {
//         const { id, description, name, price } = element;
//         elContainer.innerHTML += `
//         <li>
//         <div class="card bg-base-100 shadow-sm">
//         <div class="card-body">
//           <div class="tooltip" data-tip="${price}">
//           <h2 class="card-title">${name}</h2>
//     </div>
//           <p class="line-clamp-3">${description}</p>
//         </div>
//       </div>
//         </li>
//         `
//     });
//     elContainer.classList.remove("hidden");
//     elContainer.classList.add("grid");
// }