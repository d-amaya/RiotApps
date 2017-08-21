riot.mixin({
    _key: "fc943ec818a24ed1936fdf5bdaa0c3e6",
    endpoint: "http://api.giphy.com/v1/gifs/search",

    giphyObservable: riot.observable(),

    giphySearch: function(term) {
        this.giphyObservable.trigger("start");

        let query = `${this.endpoint}?api_key=${this._key}&q=${term}`
        let xhr = new XMLHttpRequest();

        xhr.open("GET", query);
        xhr.onload = () => {
             let response = (xhr.status === 200) ? JSON.parse(xhr.responseText) : null;
             this.giphyObservable.trigger("complete", response);
        }
        xhr.send();
    }
});