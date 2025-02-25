import { createResource, Show, For } from 'solid-js';

import { jsonPlaceholderFetch } from '../_util/jsonPlaceholderFetch';

interface User {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function fetchUsers() {
    return jsonPlaceholderFetch<User[]>({ path: '/users' });
};

function createUsersResource() {
    return createResource<User[]>(fetchUsers);
}

export function Users() {
    const [users] = createUsersResource();

    return (
        <div>
            <Show when={users()} fallback={<p>Loading...</p>}>
                <h1>Users</h1>
                <ul>
                    <For each={users()}>{(user) => (
                        <li>
                            {user.title}
                        </li>
                    )}</For>
                </ul>
            </Show>
        </div>
    );
}
