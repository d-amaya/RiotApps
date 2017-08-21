<search>
    <form onsubmit="{search}">
        <input ref="search" type="text" placeholder="Search Giphys">
    </form>

    <script>
        let searchTag = this;

        searchTag.on( "mount", () => searchTag.refs.search.focus() );

        searchTag.search = (e) => {
            e.preventDefault();
            let term = searchTag.refs.search.value;
            searchTag.giphySearch(term);
        }
    </script>

    <style>
        input::placeholder {
            font-weight: 100;
            font-style: italic;
        }
    </style>
</search>