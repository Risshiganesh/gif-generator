const searchbar = document.querySelector("#search-bar");
const statusMsg = document.querySelector(".status-msg");
const img = document.querySelector("img");
const newImageBtn = document.querySelector(".search-button");
const api_key = "6oy9SB3U4oOfolfXWyYz2IHrnTfmmYF8";

async function fetchNewImage() {
  try {
    statusMsg.classList.remove("status-active");
    statusMsg.textContent = "";
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${api_key}&s=${searchbar.value}`,
      { mode: "cors" }
    );
    // const responseCopy = response.clone();
    const gifData = await response.json();
    console.log(gifData);
    if (gifData.data.length === 0) {
      statusMsg.classList.add("status-active");
      statusMsg.textContent = "GIF NOT FOUND!";
      img.src = "";
      return;
    }
    img.src = gifData.data.images.original.url;
    console.log(gifData.meta.status);
  } catch (error) {
    throw new Error(`ERROR: ${error}`);
  }
}

fetchNewImage();
newImageBtn.addEventListener("click", fetchNewImage);
