import { createResource, Show, For } from 'solid-js';
import { jsonPlaceholderFetch } from '../_util/jsonPlaceholderFetch.tsx';

interface Comment {
    title: string;
}

function fetchComments() {
    return jsonPlaceholderFetch<Comment[]>({ path: '/comments' });
};

function createCommentsResource() {
    return createResource<Comment[]>(fetchComments);
}

export function Comments() {
    const [comments] = createCommentsResource();

    return (
        <div>
            <Show when={comments()} fallback={<p>Loading...</p>}>
                <h1>Comments</h1>
                <ul>
                    <For each={comments()}>{(post) => <li>{post.title}</li>}</For>
                </ul>
            </Show>
        </div>
    );
}
