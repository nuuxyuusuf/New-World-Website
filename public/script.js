document.getElementById("learnMoreBtn").addEventListener("click", () => {
  const section = document.getElementById("content");
  section.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.querySelector(".search-box input").value;
  if (query.trim() !== "") {
    alert(`Searching for: ${query}`);
  } else {
    alert("Please enter a search term.");
  }
});
