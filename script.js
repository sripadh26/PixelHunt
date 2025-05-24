const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

const API_KEY = "AIzaSyBMs5HZqyA9gwLOSQFhjeYBYtGbCfgQVLU"; // replace with your API key
const CX = "622876f2c914446af";

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const query = searchInput.value;

  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${query}&searchType=image`;

  resultsDiv.innerHTML = `<p>Searching for "${query}"...</p>`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      resultsDiv.innerHTML = data.items
        .map(
          (item) => `
          <a href="${item.image.contextLink}" target="_blank">
            <img src="${item.link}" alt="${item.title}" />
          </a>
        `
        )
        .join("");
    } else {
      resultsDiv.innerHTML = `<p>No results found.</p>`;
    }
  } catch (error) {
    console.error("Error fetching data", error);
    resultsDiv.innerHTML = `<p>Something went wrong. Please try again.</p>`;
  }
});
