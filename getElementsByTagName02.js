// Select all <a> elements on the page and add the attribute target="_blank" to open them in a new tab/window in a single line of JavaScript code using getElementsByTagName

anchors = [...document.getElementsByTagName('a')]
anchors.forEach(x => x.setAttribute('target', '_blank'))
