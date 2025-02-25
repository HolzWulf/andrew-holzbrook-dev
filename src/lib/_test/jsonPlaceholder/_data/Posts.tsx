import { createResource, Show, For } from 'solid-js';
import { jsonPlaceholderFetch } from '../_util/jsonPlaceholderFetch';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function fetchPosts() {
    return jsonPlaceholderFetch<Post[]>({ path: '/posts' });
};

function createPostsResource() {
    return createResource<Post[]>(fetchPosts);
}

export function Posts() {
    const [posts] = createPostsResource();

    return (
        <div>
            <Show when={posts()} fallback={<p>Loading...</p>}>
                <h1>Posts</h1>
                <ul>
                    <For each={posts()}>{(post) => <li>{post.title}</li>}</For>
                </ul>
            </Show>
        </div>
    );
}
