const allTags = ['doodle', 'project', 'writing', 'talk', 'python', 'js', 'html', 'css', 'community', 'open-source'];
const buttons = document.querySelectorAll('button');

function filterByTags(tags) {
    var showTags = [];
    if (tags.length > 0) {
        showTags = allTags.filter(val => tags.includes(val));
    }
    console.log(showTags);
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
            element.classList.toggle('hide');
        });
    } else {
        filterableElements = document.getElementsByClassName('filterable');
        Array.from(filterableElements).forEach(function (element) {
            element.classList.remove('hide');
        });
    }
}

function getUrlVars() {
    href = window.location.href;
    if(href.includes('tags')){
        return href.substring(href.indexOf('tags=') + 5).split(',');
    }
    return []
}

function toggleButton(button) {
    button.classList.toggle('pushed');
    pushed = document.getElementsByClassName('pushed');

    console.log(pushed);
    activeTags = [];
    Array.from(pushed).forEach(function(element){
        activeTags.push(element.id);
    });
    console.log(activeTags);
    showTags = filterByTags(activeTags);
    hideElements(activeTags);
}

tags = getUrlVars();
pushedButtons = [];
tags.forEach(function(tag){
    document.getElementById(tag).classList.add('pushed')
});

showTags = filterByTags(tags);
hideElements(showTags);

Array.from(buttons).forEach(function(button){
   button.addEventListener("click", function(){toggleButton(button)})
});