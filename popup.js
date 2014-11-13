//FIXME - How do we avoid the global namespace?
//
/**
 * Appends the week number to the document body
 *
 * @param
 * @return
 * @private
 */
function show_me_the_week_number() {
    var d =  new Date();
    var s = "#" + d.getWeek();
    var e = document.createTextNode(s);
    document.body.appendChild(e);
}

document.addEventListener('DOMContentLoaded', function () {
    show_me_the_week_number();
});