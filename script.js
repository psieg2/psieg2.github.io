function search_start() {
    let input = document.getElementById('startSearchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('destination');

    for(i = 0; i < x.length; i++) {
        // Result not found
        if(!x[i].innterHTML.toLowerCase.includes(input)) {
            x[i].style.display = "none";
        }
        // Result found
        else {
            x[i].style.display = "list-item";
        }
    }
}