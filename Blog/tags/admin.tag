<admin>

    <table width="100%" class="u-full-width">
        <thead>
            <th>Title</th>
            <th>URL</th>
            <th>Author</th>
            <th>Category</th>
        </thead>
        <tbody>
            <tr each="{posts}">
                <td>{title}</td>
                <td>{url}</td>
                <td>{author}</td>
                <td>{category}</td>
                <td>
                    <a href="/edit/{url}"><i class="fa fa-edit fa-lg"></i></a>
                </td>
                <td>
                    <a href="/{url}"><i class="fa fa-eye fa-lg"></i></a>
                </td>
            </tr>
        </tbody>
    </table>

    <a href="/new" class="button button-primary u-pull-right">Create new post</a>
</admin>