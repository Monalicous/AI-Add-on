function showAnswer(response) {
    console.log(response.data.answer);

    new Typewriter("#heading", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
        delay: 20,
    });

}

// handles the click, calls the ai api and generate the best country to display
function handleClick(event) {
    event.preventDefault();
    let apiKey = "9a9b6ao3534d1b2afb7b49dddt30a6e7"
    let context = " Be polite and provide a short answer"
    let prompt = "Whats the best country to visit"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let heading = document.querySelector("#heading");
    heading.innerHTML = "Wait loading the best country";

    console.log("Processing")
    axios.get(apiUrl).then(showAnswer);
}

// Selects the button and adds the click event
let buttonElement = document.querySelector("#button");
buttonElement.addEventListener("click", handleClick);
