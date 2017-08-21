riot.mixin({

    init: function() {

        if (!localStorage.getItem("posts")) {
            localStorage.setItem("posts", "[]");
        }
        this.posts = JSON.parse(localStorage.getItem("posts"));

        // Check behavoiur for a single post
        if (this.opts.post_url) {
            for (var i in this.posts) {
                if (this.posts[i].url === this.opts.post_url) {
                    this.post = this.posts[i];
                    this.post.index = i;
                    break;
                }
            }
        }
    },

    save: function() {
        var post_str = JSON.stringify(this.posts);
        localStorage.setItem("posts", post_str);
    }

});