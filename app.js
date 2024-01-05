document.addEventListener("DOMContentLoaded", function () {


  const data = [

    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "NEWEST",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },



    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "DISCOUNTS",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },

    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250.90 TL",
      secondPrice: "215.90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/tarator.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos1.png`,

    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/pizza.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos2.png`,
    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor",
      discount: null,
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/et.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos3.png`,
      soldOut: true

    },
    {
      category: "OUTLET",
      name: "Marka Adı",
      description: "Ürün adı bu alanda yer alıyor ve iki satır olarak uzunlukta gelebilir",
      discount: 20,
      firstPrice: "250,90 TL",
      secondPrice: "215,90 TL",
      foodImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/makarna.png`,
      sauceImg: `https://raw.githubusercontent.com/ahmetsuat67/ideasoft-case/main/assets/images/sos4.png`,
      bookMark: true
    },
  ];


  const productTabs = ["NEWEST", "DISCOUNTS", "OUTLET"];
  const tabs = document.querySelectorAll(".product-tab");
  tabs.forEach((el, index) => {
    el.addEventListener("click", () => { // tıklanan tabın indexini alıyoruz


      let dataSlider = data.filter((item) => item.category.toLowerCase() === productTabs[index].toLowerCase())

      tabs.forEach((i) => i.classList.remove("selected"));

      el.classList.add("selected");

      startSlider(false);

      createSlider(dataSlider);
    });
  });

  function cardCreate(dataCard) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("col-sm-6", "col-md-4", "col-xl-3"); // bootstrap grid yapısı
    cardEl.innerHTML = `
        <div class="card">
          <a href="https://www.linkedin.com/in/ahmet-suat-pinar/" target="_blank" style="position:relative">
            <img id="firstImg" src="${dataCard.foodImg}" alt="${dataCard.name}" class="card-img-top" />
            <img id="secondImg" src="${dataCard.sauceImg}" alt="${dataCard.name}" class="card-img-top" />
            ${dataCard?.soldOut ? `<span class="soldOut">Tükendi</span>` : ""} 
          </a>
          <div class="card-body">
            <a href="https://www.linkedin.com/in/ahmet-suat-pinar/" target="_blank">
              <p class="brand-name card-title">${dataCard.name}</p>
            </a>
            <p class="description card-text">${dataCard.description}</p>
            ${dataCard.discount ? `<p class="discount card-text">%${dataCard.discount} İNDİRİM</p>` : ""}
            ${dataCard.firstPrice ? `<span class="first-price card-text">${dataCard.firstPrice}</span>` : ""}
            <p class="second-price card-text">${dataCard.secondPrice}</p>
            <div class="bookmark">
              ${dataCard.bookMark ? `<div class="bookmarkYellow">YENİ</div>
              <div class="bookmarkBlue">HEDİYELİ</div>` : ""}
            </div>
          </div>
        </div>
      `;
    return cardEl;
  }

  const createSlider = (data) => {

    const contCard = document.querySelector(".blaze-track");
    if (contCard.firstChild) contCard.innerHTML = ""; // her seferinde yeni kartları eklemek ve önceki kartları temizlemek 
    data.slice(0, 12).forEach((dataCard) => {
      const cardEl = cardCreate(dataCard);
      contCard.appendChild(cardEl);
    });
  };
  const dataSlider = data.filter((item) => item.category.toLowerCase() === productTabs[0].toLowerCase())
  createSlider(dataSlider);

  const sliderEl = document.querySelector(".blaze-slider");

  const mainSlider = new BlazeSlider(sliderEl, {
    all: {
      slidesToShow: 4, // 4 tane göster
      slidesToScroll: 4, // 4 tane kaydır
      transitionTimingFunction: "linear", // geçiş efekti
      loop: false, // döngü
    },

  });

  const startSlider = (value = true) => { // slider başlangıç değerleri false olursa yeniden başlatıyoruz
    if (!value) mainSlider.refresh();

  };
  startSlider();
});
