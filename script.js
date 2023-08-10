var count = 0;

var Book = new Map();

var Summary = new Set();
Summary.set;

const form = document.getElementById("Form");

form.addEventListener("submit", (event) => {
    resetTable();

    count = 0;

    console.log("teste");
    var query = document.getElementById("searchBar").value;

    $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/recipe?query=" + query,
        headers: { "X-Api-Key": "78zVy1gJqtDgTXgmuvpZVg==NqJ2abxcxXSErORH" },
        contentType: "application/json",
        success: function (result) {
            console.log(result);

            result.forEach((element) => {
                let title = element.title;
                let ingredients = element.ingredients;
                let instructions = element.instructions;

                let row1 = document.createElement("tr");
                row1.setAttribute("id", `id${count}`);
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");

                let info1 = document.createTextNode(title);
                let info2 = document.createTextNode(ingredients);
                let info3 = document.createTextNode(instructions);
                let button1 = document.createElement("button");
                button1.setAttribute("type", "button");
                let parameterButton = "id" + count;
                button1.setAttribute(
                    "onclick",
                    'addToBook("' + parameterButton + '")'
                );
                button1.innerHTML = "Add recipe to Book";

                td1.appendChild(info1);
                td2.appendChild(info2);
                td3.appendChild(info3);
                td4.appendChild(button1);

                row1.appendChild(td1);
                row1.appendChild(td2);
                row1.appendChild(td3);
                row1.appendChild(td4);

                document.querySelector("table").appendChild(row1);

                count++;
                // table.appendChild(row1);
            });
        },
        error: function ajaxError(jqXHR) {
            console.error("Error: ", jqXHR.responseText);
        },
    });
    event.preventDefault(); // prevent the form from submitting
    form.reset();
});

function resetTable() {
    document.querySelector("table").innerHTML = "";
    let headerTr = document.createElement("tr");
    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let h1Txt = document.createTextNode("Recipe");
    th1.appendChild(h1Txt);
    let h2Txt = document.createTextNode("Ingredients");
    th2.appendChild(h2Txt);
    let h3Txt = document.createTextNode("Instructions");
    th3.appendChild(h3Txt);

    headerTr.appendChild(th1);
    headerTr.appendChild(th2);
    headerTr.appendChild(th3);

    document.querySelector("table").appendChild(headerTr);
}

function addToBook(id) {
    console.log(id);

    let row1 = document.getElementById(id);

    // row1.childNodes.forEach((element) => {
    //     console.log(element.innerHTML);
    // });

    Summary.add(row1.childNodes[0].innerHTML);
    Book.set(row1.childNodes[0].innerHTML, {
        ingredients: row1.childNodes[1].innerHTML,
        instructions: row1.childNodes[2].innerHTML,
    });

    console.log("Item in the Summary: ");
    Summary.forEach((item) => {
        console.log(item);

        console.log("Recipe: ");
        console.log("Ingredients: ");

        console.log(Book.get(item).ingredients);
        console.log("Instructions: ");
        console.log(Book.get(item).instructions);
    });

    // Book.forEach((element) => {
    //     console.log(element);
    // });
}
