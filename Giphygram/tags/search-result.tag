<search-result>

    <spinner if="{isSearching}">Searching ...</spinner>
    <div if="{hasResults}" class="row row-wrap">
        <giphy each="{results}" 
               image_url="{images.preview_gif.url}"
               download="{images.original.url}"></giphy>
    </div>

    <script>
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

    </script>
</search-result>