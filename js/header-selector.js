var header = document.querySelector("header");

var selector = header.getElementsByClassName("selector")[0];

function select(e) {
    selector.style.width = e.offsetWidth + "px";

    var rect = e.getBoundingClientRect();
    var parentRect = e.parentNode.getBoundingClientRect();

    selector.style.marginLeft = (rect.left - parentRect.left) + "px";
}