<giphy class="column column-10">
    <a href="{opts.download}" target="_blank" download>
        <img src="{opts.image_url}" alt="Click to download">
    </a>

    <style>
        :scope {
            margin-bottom: 1rem !important;    
        }

        img {
            width: 100px;
            height: 100px;
            object-fit: cover;
        }

        img:hover {
            opacity: 0.75;
        }
    </style>
</giphy>