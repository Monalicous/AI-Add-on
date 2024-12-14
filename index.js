function handleClick() {
    alert("Hooray!");
    let heading = document.querySelector("h1");
    heading.classList.add("hidden") // Adds a hidden class in h1 once button is clicked
}
let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", handleClick);

/*
function showAnswer(response) {
    alert(response.data.answer);
}

let apiKey = "9a9b6ao3534d1b2afb7b49dddt30a6e7"
let context = " Be polite and provide a short answer"
let prompt = "Whats the best country to visit"
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

console.log("Processing")
axios.get(apiUrl).then(showAnswer);
*/