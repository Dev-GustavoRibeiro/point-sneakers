window.onhashchange = function() {
    this.Navigate(location.hash);
}

function Navigate(hash) {
    if (!hash)
        return;
    const destiny = $('[destiny-link]');
    const url = hash.substring(1);
    fetch(url)
        .then(response => response.text())
        .then(html => {
            destiny.html(html);
        });
}

function InitialPage() {
    if (location.hash === '#' || location.hash === '') {
        Navigate('#pages/home.html');
    } else {
        Navigate(location.hash);
    }
}

InitialPage();