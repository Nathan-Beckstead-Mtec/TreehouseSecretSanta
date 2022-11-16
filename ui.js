// let results = ["Teri","Julie","Gina","Christy","Ann","Paula"];

let year = (new Date).getFullYear();
let results = generate(year);
if(year == 2022){
    let ahem = document.getElementById("ahem")
    ahem.innerHTML = "<i><b style='color:#36593b;'>*AHEM*</b> &mdash; Now</i>, t";
    year = "2022[v2]  ";
}
write(results,year);



function write(results,year) {
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

    document.getElementById("year").textContent = year;
}