console.log("javascript file");
const data = [
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: true,
    sale: "Ends in 8 days",
    img: "./images/craft1.jpeg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: true,
    sale: "Ends in 8 days",
    img: "./images/craft2.jpg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: true,
    sale: "Ends in 8 days",
    img: "./images/craft3.jpg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: false,
    sale: "Ended",
    img: "./images/craft4.jpg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: true,
    sale: "Ends in 8 days",
    img: "./images/craft5.jpg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: true,
    sale: "Ends in 8 days",
    img: "./images/craft6.jpg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: true,
    sale: "Ends in 8 days",
    img: "./images/craft7.jpg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: false,
    sale: "Ended",
    img: "./images/craft8.jpg",
  },
  {
    title: "Little Wizzards- Clay Modelling competition 2021",
    onSale: true,
    sale: "Ends in 8 days",
    img: "./images/craft9.jpg",
  },
];

const cardItem = document.querySelector(".competition-card");

for (var i = data.length - 1; i >= 0; i--) {
  var fetch = document.querySelector(".competition-card").innerHTML;
  //   if(data[i].onSale === false)

  cardItem.innerHTML =
    `
    <div class="card">
            <img src=${data[i].img} class="card-img">
            <div class=${
              data[i].onSale ? "saleTrue" : "saleFalse"
            } ><i class="fa fa-clock"></i> ${data[i].sale}</div>
            <h1 class="card-heading">${data[i].title}</h1>
            <p><i class="fa fa-user card-details" ></i><span class="card-lines"> Upto 3 member teams</span></p>
            <p><i class="fa fa-calendar card-details" ></i><span class="card-lines"> For 7-8 years old</span></p>
            <p ><i class="fa fa-trophy card-details"></i><span class="card-lines"> 19 prizes worth Rs. 2,00,000</span></p>
            <div class="underline"></div>
            <button class="enter-now">Enter Now</button>
        </div>
    
    ` + fetch;
}
