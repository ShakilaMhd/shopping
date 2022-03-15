const products = [
    {
        id: 1,
        name: "card1",
        price: "45$",
        image: "./images/card1.png"
    },
    {
        id: 2,
        name: "card2",
        price: "45$",
        image: "./images/card2.png"
    },
    {
        id: 3,
        name: "card3",
        price: "45$",
        image: "./images/card3.png"
    },
    {
        id: 4,
        name: "card4",
        price: "45$",
        image: "./images/card7.png"
    },
    {
        id: 5,
        name: "card5",
        price: "45$",
        image: "./images/card5.png"
    },
    {
        id: 6,
        name: "card6",
        price: "45$",
        image: "./images/card6.png"
    },
    {
        id: 7,
        name: "card7",
        price: "45$",
        image: "./images/card7.png"
    },
    {
        id: 8,
        name: "card8",
        price: "45$",
        image: "./images/card2.png"
    },
    {
        id: 9,
        name: "card9",
        price: "45$",
        image: "./images/card9.png"
    },
    {
        id: 10,
        name: "card10",
        price: "45$",
        image: "./images/card10.png"
    },
    {
        id: 11,
        name: "card11",
        price: "45$",
        image: "./images/card11.png"
    },
    {
        id: 12,
        name: "card12",
        price: "45$",
        image: "./images/card11.png"
    }
]


const productWrapper_1 = document.querySelector(".products-1");
const productWrapper_2 = document.querySelector(".products-2");
const productWrapper_3 = document.querySelector(".products-3");

// strt = start
// fnsh = finish

function Wrapper (wrapp, strt, fnsh) {

if (wrapp) {

    let template = ``;

    for (const product of products) {
     
        let idd = product.id;

        if( idd>=strt && idd<=fnsh){
               template += `
                   <div class="card">
                     <img src="${product.image}" alt="">
                     <h2>${product.name}</h2>
                     <p><small>${product.price}</small></p>
                     <div class="btn">
                        <button>Add to Cart</button>
                    </div>
                   </div>
            `
            idd++;
}

        
    }
    wrapp.innerHTML = template;
}
}

Wrapper(productWrapper_1, 1, 4);
Wrapper(productWrapper_2, 5, 8);
Wrapper(productWrapper_3, 9, 12);
