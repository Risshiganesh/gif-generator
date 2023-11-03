const searchbar = document.querySelector("#search-bar");
const statusMsg = document.querySelector(".status-msg");
const img = document.querySelector("img");
const newImageBtn = document.querySelector(".search-button");
const api_key = "6oy9SB3U4oOfolfXWyYz2IHrnTfmmYF8";


function fetchNewImage() {
  statusMsg.textContent = "";
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${searchbar.value}`,
    { mode: "cors" }
  )
    .then(function (response) {
      const responseCopy = response.clone();
      const responseParsed = responseCopy.json();

      //   console.log(responseParsed);
      return responseParsed;
    })
    .then(function (response) {
      console.log(response.data);
      if (response.data.length === 0) {
        statusMsg.textContent = "GIF NOT FOUND!";
        img.src = "";
        console.log("GIF NOT FOUND");
        return;
      }
      img.src = response.data.images.original.url;
      console.log(response.meta.status);
    })
    .catch(function (error) {
      //   console.log(`Error: ${error}`);
      throw new Error(`Error: ${error}`);
    });
}

fetchNewImage();
newImageBtn.addEventListener("click", fetchNewImage);
