// let results = generate();
let results = ["Teri","Julie","Gina","Christy","Ann","Paula"];

write(results);


function write(results) {
    console.error(results);


    let length = results.length;
    let words = results.map((curr, index) => {
        return "<b>" + curr + "</b> is the secret santa for: <b>" + results[(index + 1) % length] + "</b>";
    });


    let container = document.getElementById("content");
    words.forEach(elem => {
        let resultNODE = document.createElement("div");
        resultNODE.setAttribute("class", "result");
        resultNODE.innerHTML = "<p>" + elem + "</p>"

        container.appendChild(resultNODE);
    });
}