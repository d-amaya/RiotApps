<post>
    <div class="post">
        <h3 class="post_title">
            <a href="/{url}"> {post.title} </a>
        </h3>
        <div class="meta">
            <small>by</small> <span>{post.author}</span>
            <small>, posted in</small> <span>{post.category}</span>
        </div>
        <p>{opts.is_excerpt ? post.excerpt : post.content}</p>
        <hr if="{opts.is_excerpt}">
    </div>

    <style>
        .post_title {
            margin: 0;
        }

        .post_title a {
            color: #222;
            text-decoration: none;
            font-weight: 100;
        }

        .post {
            margin-bottom: 15px;
        }

        .meta {
            margin-bottom: 15px;
            font-style: italic;
            color: #999;
        }

        .meta span {
            font-weight: 500;
        }
    </style>
</post>