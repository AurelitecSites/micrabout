(function() {
    'use strict';

    function shuffle() {
        // Randomize the order of all quotes, using a Fisherâ€“Yates shuffle
        // based on http://stackoverflow.com/a/11972692/220039
        var quotes = document.querySelector('.tlog-posts');
        for (var i = quotes.children.length; i >= 0; i--) {
            quotes.appendChild(quotes.children[Math.random() * i | 0]);
        }
    }

    shuffle();

})();