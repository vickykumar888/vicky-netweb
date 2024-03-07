let data = [
  {
    id: "1",
    image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    heading: "Best of Paris in 7 Days Tour",
    sub_heading:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best",
    price: "$1,995",
  },
  {
    id: "2",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    heading: "Best of Ireland in 14 Days Tour",
    sub_heading:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale",
    price: "$3,995",
  },
  {
    id: "3",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    heading: "Best of Salzburg & Vienna in 8 Days Tour",
    sub_heading:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring",
    price: "$2,695",
  },
  {
    id: "4",
    image: "https://www.course-api.com/images/tours/tour-4.jpeg",
    heading: "Best of Rome in 7 Days Tour",
    sub_heading:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient",
    price: "$2,095",
  },
  {
    id: "5",
    image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    heading: "Best of Poland in 10 Days Tour",
    sub_heading:
      "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side  ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side  ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side",
    price: "$2,595",
  },
];

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerHTML = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  #hover:hover{
    background:#10b981 !important;
    color:white !important;
  }
`;
document.head.appendChild(styleSheet);

const container = document.getElementById("container");
const tour_text = document.getElementById("tours");
const remove_line = document.getElementById("line");

function renderData() {
  container.innerHTML = "";

  if (data.length <= 0) {
    const refreshButton = document.createElement("button");
    refreshButton.innerHTML = "Refresh";
    refreshButton.id = "refresh_btn";
    refreshButton.style.color = "#fff";
    refreshButton.style.background = "#10b981";
    refreshButton.style.cursor = "pointer";
    refreshButton.style.border = "none";
    refreshButton.style.borderRadius = "5px";
    refreshButton.style.padding = "0.575rem 1.75rem";
    refreshButton.style.width = "100%";
    container.style.justifyContent = "center";
    tour_text.innerHTML = "No Tours Left";
    refreshButton.addEventListener("click", refreshData);
    container.appendChild(refreshButton);
  } else {
    data.forEach((value) => {
      const personContainer = document.createElement("div");
      personContainer.style.boxShadow = "0px 8px 24px rgba(149, 157, 165, 0.2)";
      personContainer.style.background = "rgba(0, 0, 0, 0.35) 0px 5px 12px";
      personContainer.style.margin = "auto";
      personContainer.style.marginTop = "20px";

      //Price
      let imageContainer = document.createElement("div");
      imageContainer.style.position = "relative";
      personContainer.appendChild(imageContainer);

      let priceTag = document.createElement("div");
      priceTag.innerHTML = value.price;
      priceTag.style.position = "absolute";
      priceTag.style.color="#fff"
      priceTag.style.top = "0";
      priceTag.style.right = "0";
      priceTag.style.background = "#ffffff";
      priceTag.style.padding = "8px";
      priceTag.style.background = "#10b981";
      imageContainer.appendChild(priceTag);

      //Image
      let image_ele = document.createElement("img");
      image_ele.src = value.image;
      personContainer.appendChild(image_ele);
      image_ele.style.width = "352px";

      //Heading
      let heading = document.createElement("h5");
      heading.innerHTML = value.heading;
      heading.style.fontSize = "1.25rem";
      heading.style.maxWidth = "240px";
      heading.style.margin = "25px 25px";
      heading.style.fontWeight = "500";
      personContainer.appendChild(heading);

      //Sub-heading
      let sub_heading = document.createElement("p");
      sub_heading.innerHTML = value.sub_heading.substring(0, 100);
      personContainer.appendChild(sub_heading);
      sub_heading.style.color = "#64748b";
      sub_heading.style.maxWidth = "300px";
      sub_heading.style.margin = "auto";
      // sub_heading.style.margin="0px"

      //more/less Text
      const seeMoreSpan = document.createElement("span");
      seeMoreSpan.innerHTML = "....See More";
      seeMoreSpan.style.color = "#10b981";
      seeMoreSpan.style.cursor = "pointer";
      sub_heading.appendChild(seeMoreSpan);

      seeMoreSpan.addEventListener("click", () => {
        if (seeMoreSpan.innerHTML === "......See less") {
          seeMoreSpan.innerHTML = "......See more";
          sub_heading.innerHTML = value.sub_heading.substring(0, 100);
          sub_heading.appendChild(seeMoreSpan);
        } else {
          console.log("See More");
          seeMoreSpan.innerHTML = "......See less";
          sub_heading.innerHTML = value.sub_heading;
          sub_heading.appendChild(seeMoreSpan);
        }
      });

      container.appendChild(personContainer);

      //Not Interested Button
      const button = document.createElement("button");
      button.innerHTML = "Not Intersted";
      button.style.color = "#10b981";
      button.style.cursor = "pointer";
      button.style.border = "1px solid";
      button.style.backgroundColor = "white";
      button.style.borderColor = "#10b981";
      button.id = "hover";
      button.style.borderRadius = "5px";
      button.style.padding = "0.375rem 0.75rem";
      button.style.width = "88%";
      button.style.margin = "15px 0px";
      button.style.padding = "10px";
      button.style.marginLeft = "15px";
      button.addEventListener("click", () => {
        let idToRemove = value.id;
        data = data.filter((item) => item.id !== idToRemove);
        console.log(`data remove with id ${idToRemove}`);

        renderData();
      });
      personContainer.appendChild(button);
    });
  }
}
renderData();
function refreshData() {
  const Loader = document.createElement("div");
  Loader.style.border = "16px solid #f3f3f3";
  Loader.style.borderRadius = "50%";
  Loader.style.width = "120px";
  Loader.style.height = "120px";
  Loader.style.animation = "spin 2s linear infinite";
  Loader.style.borderTop = "16px solid #3498db";
  container.appendChild(Loader);
  const refresh_text = document.getElementById("refresh_btn");
  if (refresh_text) {
    container.removeChild(refresh_text);
  }

  setTimeout(() => {
    container.style.justifyContent = "normal";
    tour_text.innerHTML = "Our Tours";
    data = [
      {
        id: "1",
        image: "https://www.course-api.com/images/tours/tour-1.jpeg",
        heading: "Best of Paris in 7 Days Tour",
        sub_heading:
          "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
        price: "$1,995",
      },
      {
        id: "2",
        image: "https://www.course-api.com/images/tours/tour-2.jpeg",
        heading: "Best of Ireland in 14 Days Tour",
        sub_heading:
          "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
        price: "$3,995",
      },
      {
        id: "3",
        image: "https://www.course-api.com/images/tours/tour-2.jpeg",
        heading: "Best of Salzburg & Vienna in 8 Days Tour",
        sub_heading:
          "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
        price: "$2,695",
      },
      {
        id: "4",
        image: "https://www.course-api.com/images/tours/tour-4.jpeg",
        heading: "Best of Rome in 7 Days Tour",
        sub_heading:
          "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
        price: "$2,095",
      },
      {
        id: "5",
        image: "https://www.course-api.com/images/tours/tour-2.jpeg",
        heading: "Best of Poland in 10 Days Tour",
        sub_heading:
          "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...",
        price: "$2,595",
      },
    ];
    renderData();
  }, 2000);
}
