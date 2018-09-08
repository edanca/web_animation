//$('.box').on('click', function() {
//  $(this).toggleClass('is-paused')
//})

// $('html').on('click', function() {
//     $(this).find('body').append('<div class="box">Card</div>')
// })

window.onload = function() {
    document.addEventListener("click", function() {
        // alert("ok");
        var body = document.getElementsByTagName("body")[0];
        var div = document.createElement("div")
        div.setAttribute("class", "box");
        var text = document.createTextNode("Card");
        div.appendChild(text);
        body.appendChild(div);
    });
}