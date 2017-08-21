<editor>

    <input type="text" ref="post_title" value="{post ? post.title: ''}" placeholder="Post Title" class="u-full-width title">
    <div class="row">
        <input class="six columns" type="text" ref="post_author" value="{post ? post.author: ''}" placeholder="Author">
        <input class="six columns" type="text" ref="post_category" value="{post ? post.category: ''}" placeholder="Category">
    </div>
    <textarea ref="post_content" class="u-full-width" placeholder="Post Content">{post ? post.content: ''}</textarea>
    <div class="row">
        <button if="{post}" onclick="{delete_post}">Delete Post</button>
        <input type="button" onclick="{add_post}" 
                class="button button-primary u-pull-right" value="{post ? 'Edit' : 'Publish'}">
    </div>

    <script>

        console.log(this.posts);

        this.add_post = function(e) {
            let new_post = {
                title: this.refs.post_title.value,
                author: this.refs.post_author.value,
                category: this.refs.post_category.value,
                content: this.refs.post_content.value,
                url: this.refs.post_title.value.toLowerCase().split(" ").join("-"),
                excerpt: this.refs.post_content.value.split(/\s+/).slice(0, 30).join(" ")
            };
            
            if (!this.post) {
                this.posts.push(new_post);
            } else {
                this.posts[this.post.index] = new_post;
            }

            this.save();
            route("/");
        }

        this.delete_post = function() {
            var conf = confirm("Are you sure you want to delete this post permanently?");
            if (conf) {
                this.posts.splice(this.post.index, 1);
                this.save();
                route("/");
            }
        }
    </script>

    <style>
        .title {
            height: 75px;
            font-size: 36px;
        }

        textarea {
            height: 200px;
            max-width: 100%;
        }
    </style>

</editor>