let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        title,
        link,
        description
    } = result;

    let resultItemE1 = document.createElement("div");
    searchInputE1.classList.add("result-item");

    let titleE1 = document.createElement("a");
    titleE1.href = link;
    titleE1.target = "_self";
    titleE1.classList.add("result-title");
    titleE1.textContent = title;
    resultItemE1.appendChild(titleE1);

    let titleBreakE1 = document.createElement("br");
    resultItemE1.appendChild(titleBreakE1);

    let urlE1 = document.createElement("a");
    urlE1.href = link;
    urlE1.textContent = link;
    urlE1.target = "_self";
    urlE1.classList.add("result-url");
    resultItemE1.appendChild(urlE1);

    let titleBreakE2 = document.createElement("br");
    resultItemE1.appendChild(titleBreakE2);

    let description1 = document.createElement("p");
    description1.textContent = description;
    description1.classList.add("link-description");
    resultItemE1.appendChild(description1);

    searchResultsE1.appendChild(resultItemE1);

}

function displayResults(searchResults) {
    for (let result of searchResults) {
        spinnerE1.classList.add("d-none");
        createAndAppendSearchResult(result);
    }
}

function searchwikipedia(Event) {
    if (Event.key === "Enter") {
        spinnerE1.classList.remove("d-none");
        searchResultsE1.textContent = "";

        let searchInput = searchInputE1.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;
                displayResults(search_results);
            });

    }
}


searchInputE1.addEventListener("keydown", searchwikipedia);