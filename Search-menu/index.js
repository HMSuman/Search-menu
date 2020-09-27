const input = document.getElementById("mySearch");
input.addEventListener("keyup", () => {
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myMenu");
    const li = ul.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});