//FIXME - How do we avoid the global namespace?
//FIXME - How do we properly establish the dependency on week.js
//
/**
 * Given a photo, construct a URL using the method outlined at
 * http://www.flickr.com/services/api/misc.urlKittenl
 *
 * @param {DOMElement} A kitten.
 * @return {string} The kitten's URL.
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