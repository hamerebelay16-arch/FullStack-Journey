const $ = (id) => document.getElementById(id);

const title = $("title");
const year = $("year");
const genre = $("genre");
const rating = $("imdbrating");
const actors = $("actors");
const poster = $("poster");
const spinner = $("spinner");
const infoPanel = $("movie-info");
const errormessage = $("errormessage");

const search = $("search");
const searchbtn = $("searchbtn");

const API_KEY = "55475f81";

function startloading() {
  spinner.hidden = false;
  searchbtn.disabled = true;
}
function stoploading() {
  spinner.hidden = true;
  searchbtn.disabled = false;
}
function showerror(text) {
  errormessage.hidden = false;
  errormessage.textContent = text;
}
function hideerror() {
  errormessage.hidden = true;
}

function setInfo(element, label, value) {
  element.textContent = `${label}: ${value || "N/A"}`;
  // The N/A is if there is no Title attribute. It becomes N/A instead of undefined.
}

async function fetchMovies(movie) {
  const movieName = movie;
  startloading();
  hideerror();

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    setInfo(title, "Title", data.Title);
    setInfo(year, "Year", data.Year);
    setInfo(genre, "Genre", data.Genre);
    setInfo(rating, "Rating", data.imdbRating);
    setInfo(actors, "Actors", data.Actors);
    poster.src =
      data.Poster !== "N/A"
        ? data.Poster
        : "https://via.placeholder.com/250x375?text=No+Poster";

    infoPanel.hidden = false;
  } catch (err) {
    infoPanel.hidden = true;
    if (err.message === "Movie not found!") {
      showerror("Movie not found 😔");
    }
    console.error(err.message);
  } finally {
    stoploading();
  }
}
searchbtn.addEventListener("click", () => {
  if (search.value.trim() === "") {
    showerror("Please Enter movie name");
    return;
  }
  fetchMovies(search.value);
});
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (search.value.trim() === "") {
      showerror("Please Enter movie name");
      return;
    }
    fetchMovies(search.value);
  }
});
