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

async function fetchMovies(movie) {
  const movieName = movie;
  spinner.hidden = false;
  searchbtn.disabled = true;
  errormessage.hidden = true;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`,
    );
    const data = await response.json();

    // if (!response.ok) throw new Error("Fetch failed!");
    if (data.Response === "False") {
      throw new Error(data.Error);
    }

    title.textContent = "Title: " + (data.Title || "N/A"); // The N/A is if there is no Title attribute. It becomes N/A instead of undefined.
    year.textContent = "Year: " + (data.Year || "N/A");
    poster.src =
      data.Poster !== "N/A"
        ? data.Poster
        : "https://via.placeholder.com/250x375?text=No+Poster";
    rating.textContent = "Rating: " + (data.imdbRating || "N/A");
    actors.textContent = "Actors: " + (data.Actors || "N/A");
    genre.textContent = "Genre: " + (data.Genre || "N/A");
    infoPanel.hidden = false;
  } catch (err) {
    infoPanel.hidden = true;
    console.error(err.message);
  } finally {
    spinner.hidden = true;
    searchbtn.disabled = false;
  }
}
searchbtn.addEventListener("click", () => {
  if (search.value.trim() === "") {
    errormessage.hidden = false;
    errormessage.textContent = "Please Enter movie name";
    return;
  }
  fetchMovies(search.value);
});
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (search.value.trim() === "") {
      errormessage.hidden = false;
      errormessage.textContent = "Please Enter movie name";
      return;
    }
    fetchMovies(search.value);
  }
});
