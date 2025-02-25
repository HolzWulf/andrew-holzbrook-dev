import { createResource, Show, For } from 'solid-js';

import { jsonPlaceholderFetch } from '../_util/jsonPlaceholderFetch';

interface Album {
    title: string;
}

function fetchAlbums() {
    return jsonPlaceholderFetch<Album[]>({ path: '/albums' });
};

function createAlbumsResource() {
    return createResource<Album[]>(fetchAlbums);
}

export function Albums() {
    const [albums] = createAlbumsResource();

    return (
        <div>
            <Show when={albums()} fallback={<p>Loading...</p>}>
                <h1>Albums</h1>
                <ul>
                    <For each={albums()}>{(post) => <li>{post.title}</li>}</For>
                </ul>
            </Show>
        </div>
    );
}
