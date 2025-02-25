import { createResource, Show, For } from 'solid-js';

import { jsonPlaceholderFetch } from '../_util/jsonPlaceholderFetch';

interface Todo {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function fetchTodos() {
    return jsonPlaceholderFetch<Todo[]>({ path: '/todos' });
};

function createTodosResource() {
    return createResource<Todo[]>(fetchTodos);
}

export function Todos() {
    const [todos] = createTodosResource();

    return (
        <div>
            <Show when={todos()} fallback={<p>Loading...</p>}>
                <h1>Todos</h1>
                <ul>
                    <For each={todos()}>{(todo) => <li>{todo.title}</li>}</For>
                </ul>
            </Show>
        </div>
    );
}
