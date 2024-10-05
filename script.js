

const idSelector = (id) => {
    return document.getElementById(id);
}

// load pet
fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => setButton(data.categories))

// load category
fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => setCategory(data.pets))

// set button
const setButton = (data) => {
    const button = data.map(btn => `
        <button class="flex gap-4 items-center text-2xl font-semibold border-2 border-[#2E3E51] px-16 py-5">
                <img src=${btn.category_icon} alt="">
                ${btn.category}
        </button>
        `)
    document.getElementById("pet-menu").innerHTML = button;
}


// set category
const setCategory = (data) => {
    const category = data?.map(cate => `
    <div class="card bg-base-100">
        <figure>
            <img src="${cate.image}" alt="${cate.title}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">
                ${cate.title}
                <div class="badge badge-secondary">${cate.badge}</div>
            </h2>
            <p>${cate.description}</p>
            <div class="card-actions justify-end">
               
            </div>
        </div>
    </div>
    `).join('');  // Join to remove commas

    document.getElementById("category-div").innerHTML = category;
}
