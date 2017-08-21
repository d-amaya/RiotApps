riot.tag2('giphy', '<a href="{opts.download}" target="_blank" download> <img riot-src="{opts.image_url}" alt="Click to download"> </a>', 'giphy,[data-is="giphy"]{ margin-bottom: 1rem !important; } giphy img,[data-is="giphy"] img{ width: 100px; height: 100px; object-fit: cover; } giphy img:hover,[data-is="giphy"] img:hover{ opacity: 0.75; }', 'class="column column-10"', function(opts) {
});
riot.tag2('search-result', '<spinner if="{isSearching}">Searching ...</spinner> <div if="{hasResults}" class="row row-wrap"> <giphy each="{results}" image_url="{images.preview_gif.url}" download="{images.original.url}"></giphy> </div>', '', '', function(opts) {
        let searchResultTag = this;

        searchResultTag.isSearching = false;
        searchResultTag.hasResults = false;
        searchResultTag.results = [];

        searchResultTag.giphyObservable.on("start", function() {
            searchResultTag.results = [];
            searchResultTag.isSearching = true;
            searchResultTag.hasResults = false;
            searchResultTag.update();
        });

        searchResultTag.giphyObservable.on("complete", function(res) {
            searchResultTag.results = res.data;
            searchResultTag.isSearching = false;
            searchResultTag.hasResults = true;
            searchResultTag.update();
        });

});
riot.tag2('search', '<form onsubmit="{search}"> <input ref="search" type="text" placeholder="Search Giphys"> </form>', 'search input::placeholder,[data-is="search"] input::placeholder{ font-weight: 100; font-style: italic; }', '', function(opts) {
        let searchTag = this;

        searchTag.on( "mount", () => searchTag.refs.search.focus() );

        searchTag.search = (e) => {
            e.preventDefault();
            let term = searchTag.refs.search.value;
            searchTag.giphySearch(term);
        }
});
riot.tag2('spinner', '<div class="sk-circle"> <div class="sk-circle1 sk-child"></div> <div class="sk-circle2 sk-child"></div> <div class="sk-circle3 sk-child"></div> <div class="sk-circle4 sk-child"></div> <div class="sk-circle5 sk-child"></div> <div class="sk-circle6 sk-child"></div> <div class="sk-circle7 sk-child"></div> <div class="sk-circle8 sk-child"></div> <div class="sk-circle9 sk-child"></div> <div class="sk-circle10 sk-child"></div> <div class="sk-circle11 sk-child"></div> <div class="sk-circle12 sk-child"></div> </div>', 'spinner .sk-circle,[data-is="spinner"] .sk-circle{ margin: 100px auto; width: 80px; height: 80px; position: relative; } spinner .sk-circle .sk-child,[data-is="spinner"] .sk-circle .sk-child{ width: 100%; height: 100%; position: absolute; left: 0; top: 0; } spinner .sk-circle .sk-child:before,[data-is="spinner"] .sk-circle .sk-child:before{ content: \'\'; display: block; margin: 0 auto; width: 15%; height: 15%; background-color: #AD22CB; border-radius: 100%; -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both; animation: sk-circleBounceDelay 1.2s infinite ease-in-out both; } spinner .sk-circle .sk-circle2,[data-is="spinner"] .sk-circle .sk-circle2{ -webkit-transform: rotate(30deg); -ms-transform: rotate(30deg); transform: rotate(30deg); } spinner .sk-circle .sk-circle3,[data-is="spinner"] .sk-circle .sk-circle3{ -webkit-transform: rotate(60deg); -ms-transform: rotate(60deg); transform: rotate(60deg); } spinner .sk-circle .sk-circle4,[data-is="spinner"] .sk-circle .sk-circle4{ -webkit-transform: rotate(90deg); -ms-transform: rotate(90deg); transform: rotate(90deg); } spinner .sk-circle .sk-circle5,[data-is="spinner"] .sk-circle .sk-circle5{ -webkit-transform: rotate(120deg); -ms-transform: rotate(120deg); transform: rotate(120deg); } spinner .sk-circle .sk-circle6,[data-is="spinner"] .sk-circle .sk-circle6{ -webkit-transform: rotate(150deg); -ms-transform: rotate(150deg); transform: rotate(150deg); } spinner .sk-circle .sk-circle7,[data-is="spinner"] .sk-circle .sk-circle7{ -webkit-transform: rotate(180deg); -ms-transform: rotate(180deg); transform: rotate(180deg); } spinner .sk-circle .sk-circle8,[data-is="spinner"] .sk-circle .sk-circle8{ -webkit-transform: rotate(210deg); -ms-transform: rotate(210deg); transform: rotate(210deg); } spinner .sk-circle .sk-circle9,[data-is="spinner"] .sk-circle .sk-circle9{ -webkit-transform: rotate(240deg); -ms-transform: rotate(240deg); transform: rotate(240deg); } spinner .sk-circle .sk-circle10,[data-is="spinner"] .sk-circle .sk-circle10{ -webkit-transform: rotate(270deg); -ms-transform: rotate(270deg); transform: rotate(270deg); } spinner .sk-circle .sk-circle11,[data-is="spinner"] .sk-circle .sk-circle11{ -webkit-transform: rotate(300deg); -ms-transform: rotate(300deg); transform: rotate(300deg); } spinner .sk-circle .sk-circle12,[data-is="spinner"] .sk-circle .sk-circle12{ -webkit-transform: rotate(330deg); -ms-transform: rotate(330deg); transform: rotate(330deg); } spinner .sk-circle .sk-circle2:before,[data-is="spinner"] .sk-circle .sk-circle2:before{ -webkit-animation-delay: -1.1s; animation-delay: -1.1s; } spinner .sk-circle .sk-circle3:before,[data-is="spinner"] .sk-circle .sk-circle3:before{ -webkit-animation-delay: -1s; animation-delay: -1s; } spinner .sk-circle .sk-circle4:before,[data-is="spinner"] .sk-circle .sk-circle4:before{ -webkit-animation-delay: -0.9s; animation-delay: -0.9s; } spinner .sk-circle .sk-circle5:before,[data-is="spinner"] .sk-circle .sk-circle5:before{ -webkit-animation-delay: -0.8s; animation-delay: -0.8s; } spinner .sk-circle .sk-circle6:before,[data-is="spinner"] .sk-circle .sk-circle6:before{ -webkit-animation-delay: -0.7s; animation-delay: -0.7s; } spinner .sk-circle .sk-circle7:before,[data-is="spinner"] .sk-circle .sk-circle7:before{ -webkit-animation-delay: -0.6s; animation-delay: -0.6s; } spinner .sk-circle .sk-circle8:before,[data-is="spinner"] .sk-circle .sk-circle8:before{ -webkit-animation-delay: -0.5s; animation-delay: -0.5s; } spinner .sk-circle .sk-circle9:before,[data-is="spinner"] .sk-circle .sk-circle9:before{ -webkit-animation-delay: -0.4s; animation-delay: -0.4s; } spinner .sk-circle .sk-circle10:before,[data-is="spinner"] .sk-circle .sk-circle10:before{ -webkit-animation-delay: -0.3s; animation-delay: -0.3s; } spinner .sk-circle .sk-circle11:before,[data-is="spinner"] .sk-circle .sk-circle11:before{ -webkit-animation-delay: -0.2s; animation-delay: -0.2s; } spinner .sk-circle .sk-circle12:before,[data-is="spinner"] .sk-circle .sk-circle12:before{ -webkit-animation-delay: -0.1s; animation-delay: -0.1s; } @-webkit-keyframes sk-circleBounceDelay { 0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 40% { -webkit-transform: scale(1); transform: scale(1); } } @keyframes sk-circleBounceDelay { 0%, 80%, 100% { -webkit-transform: scale(0); transform: scale(0); } 40% { -webkit-transform: scale(1); transform: scale(1); } }', '', function(opts) {
});
riot.tag2('test', '<p>Test tag is working properly!</p>', '', '', function(opts) {
});