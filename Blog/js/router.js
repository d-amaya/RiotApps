// Configure router
route.base("/");
route.start(true);

function mount_tag_as_view(tagName, opts) {
    riot.mount("#view", tagName, opts);
}

// Admin
route("/admin", () => mount_tag_as_view("admin"));

// New post
route("/new", () => mount_tag_as_view("editor"));

// Home
route("/", () => mount_tag_as_view("blog-roll"));

// Single Blog Post
route("/*", (path) => mount_tag_as_view("post", {post_url: path}));

// Single Blog Post
route("/edit/*", (path) => mount_tag_as_view("editor", {post_url: path}));
