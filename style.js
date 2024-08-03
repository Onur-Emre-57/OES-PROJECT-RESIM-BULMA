const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchinput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector(".searchButton");
const clearButton = document.querySelector(".clearButton");
const imgListWrapper = document.querySelector(".imgListWrapper");
runEvenListener();
function runEvenListener() {
  form.addEventListener("submit", search);
  clearButton.addEventListener("click", clear);
}
function clear() {
  searchinput.value = "";
  //   Array.from(imgListWrapper.children).forEach((child) => child.remove());
  imgListWrapper.innerHTML = "";
}

function search(e) {
  const value = searchinput.value.trim();
  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    metod: "GET",
    headers: {
      Authorization: "Client-ID dSv4gtjbBtZPLeSFUAGld6BtltD-1uAOTw4DLOGRZM4",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      Array.from(data.results).forEach((image) => {
        // console.log(image.urls.small);
        addimageToUI(image.urls.small);
      });
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}

function addimageToUI(url) {
  const div = document.createElement("div");
  div.className = "card";
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.height = "400";
  img.width = "400";
  div.append(img);
  imgListWrapper.append(div);
}
