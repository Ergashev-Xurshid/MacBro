let raM = document.querySelector(".raM")
let memorY = document.querySelector(".memorY")
let coloR = document.querySelector(".coloR")

// RAM 

let ram = document.querySelector(".ram");

ram.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttons = ram.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    event.target.classList.add("active");

    if (event.target.textContent == "8GB") {
      let i = 8
      raM.textContent = `${i}GB`
    }
    if (event.target.textContent == "16GB") {
      let i = 16
      raM.textContent = `${i}GB`
    }
  }

});

// Memore 
let memory = document.querySelector(".memory");
memory.addEventListener("click", (event) => {
  let btn_8 = document.querySelector(".btn_8")

  if (event.target.tagName === "BUTTON") {
    const buttons = memory.querySelectorAll("button");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    event.target.classList.add("active");

    if (event.target.textContent == "256GB") {
      btn_8.style.display = 'inline-block'
      let i = 256
      memorY.textContent = `${i}GB`
    }
    if (event.target.textContent == "512GB") {
      btn_8.style.display = 'none'
      let i = 512
      memorY.textContent = `${i}GB`
    }
    if (event.target.textContent == "1TB") {
      btn_8.style.display = 'none'
      let i = 1
      memorY.textContent = `${i}TB`
    }

  }

});


// num

let num_one = document.querySelector(".num_one")
let total = document.querySelector(".total")

let x = 1;
let total_item = 17250000
num_one.innerHTML = x

function numAdd() {
  x++
  num_one.innerHTML = x
  total.textContent = `${(x * total_item).toLocaleString()} so'm`
}
function numRemove() {
  if (x > 1) {
    x--
    num_one.innerHTML = x
    total.textContent = `${(x * total_item).toLocaleString()} so'm`
  }
}




let ImageGray = [
  {
    imgUrl: "../img/gray_1.jpeg"
  },
  {
    imgUrl: "../img/gray_2.jpeg"
  },
  {
    imgUrl: "../img/gray_3.jpeg"
  },
  {
    imgUrl: "../img/gray_4.jpeg"
  },
  //

]

let ImageSilver = [
  {
    imgUrl: "../img/silver_1.jpeg"
  },
  {
    imgUrl: "../img/silver_2.jpeg"
  },
  {
    imgUrl: "../img/silver_3.jpeg"
  },
  {
    imgUrl: "../img/silver_4.jpeg"
  }
]
let ImageGold = [
  {
    imgUrl: "../img/gold_1.jpeg"
  },
  {
    imgUrl: "../img/gold_2.jpeg"
  },
  {
    imgUrl: "../img/gold_3.jpeg"
  },
  {
    imgUrl: "../img/gold_4.jpeg"
  }
]
// Image
let bigImg = document.querySelector(".big_img")
let Bimg = bigImg.querySelector("img")

let imgList = document.querySelector(".img_list")

let color = document.querySelector(".color");

color.addEventListener("click", (event) => {
  if (event.target.closest(".color_btn")) {
    const buttons = color.querySelectorAll(".color_btn");

    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    let clickedButton = event.target.closest(".color_btn");
    clickedButton.classList.add("active");

    if (event.target.textContent == "Gold") {

      coloR.textContent = `Gold`
      imgList.innerHTML = "";

      ImageGold.forEach((item) => {
        imgList.innerHTML += `
            <li class="img_list_item">
              <img src="${item.imgUrl}" alt="">
            </li>
          `;
      });
      

      const firstImageItem = imgList.querySelector(".img_list_item");
      if (firstImageItem) {
        firstImageItem.classList.add("imgActive");
      }

    }
    if (event.target.textContent == "Silver") {
      coloR.textContent = `Silver`

      imgList.innerHTML = "";

      ImageSilver.forEach((item) => {
        imgList.innerHTML += `
            <li class="img_list_item">
              <img src="${item.imgUrl}" alt="">
            </li>
          `;
      });

      const firstImageItem = imgList.querySelector(".img_list_item");
      if (firstImageItem) {
        firstImageItem.classList.add("imgActive");
      }

    }
    if (event.target.textContent == "Space Gray") {
      coloR.textContent = `Space Gray`

      imgList.innerHTML = "";

      ImageGray.forEach((item) => {
        imgList.innerHTML += `
            <li class="img_list_item">
              <img src="${item.imgUrl}" alt="">
            </li>
          `;
      });

      const firstImageItem = imgList.querySelector(".img_list_item");
      if (firstImageItem) {
        firstImageItem.classList.add("imgActive");        
      }
    
    }

  }
})


imgList.addEventListener("click", (event) => {
  if (event.target.closest(".img_list_item")) {
    const imgItems = imgList.querySelectorAll(".img_list_item");

    imgItems.forEach((imgItem) => {
      imgItem.classList.remove("imgActive");
    });

    let clickedImg = event.target.closest(".img_list_item");
    clickedImg.classList.add("imgActive");

    const imgElement = clickedImg.querySelector('img');
    const imgSrc = imgElement.getAttribute('src');
    Bimg.setAttribute("src", imgSrc); 
  }
});