<blog-roll>
    <div if="{posts.length === 0}">
        You do not have any post. <br> 
        <a href="/new" class="button button-primary"> Create your first post</a>
    </div>
    <post each="{posts}" post_url="{url}" is_excerpt="true"></post>
</blog-roll>