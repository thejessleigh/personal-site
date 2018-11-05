function filterByTags(tags) {
    allTags = ['doodle', 'project', 'writing', 'talk', 'python', 'js', 'html', 'css'];
    var showTags = [];
    if (tags.length > 0) {
        showTags = allTags.filter(val => tags.includes(val));
    }
    return showTags;
}

function hideElements(showTags) {
    if (showTags.length > 0) {
        filterableElements = document.getElementsByClassName('filterable');
        var hiddenElements = [];

        Array.from(filterableElements).forEach(function (element) {
            matches = Array.from(element.classList).filter(val => showTags.includes(val));
            if (matches.length === 0) {
                hiddenElements.push(element)
            }
        });
        hiddenElements.forEach(function (element) {
            element.classList.add('hide');
        });
    }
}

function getUrlVars() {
    href = window.location.href;
    return href.substring(href.indexOf('tags=') + 5).split(',');
}

showTags = filterByTags(getUrlVars());


hideElements(showTags);
