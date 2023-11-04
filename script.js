const searchbar = document.querySelector("#search-bar");
const statusMsg = document.querySelector(".status-msg");
const img = document.querySelector("img");
const newImageBtn = document.querySelector(".search-button");
const api_key = "6oy9SB3U4oOfolfXWyYz2IHrnTfmmYF8";

async function fetchNewImage() {
  statusMsg.textContent = "";
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${searchbar.value}`,
    { mode: "cors" }
  );

  const responseCopy = await response.clone();

  const responseParsed = await responseCopy.json();

  console.log(responseParsed);

  Promise.resolve(responseParsed)

    // .then(function (response) {
    //   return response.json();
    // })
    .then(function (response) {
      console.log(response);
      console.log(response);
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
