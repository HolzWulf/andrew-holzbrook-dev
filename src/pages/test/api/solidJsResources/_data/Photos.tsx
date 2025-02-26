import { createResource, Show, For } from "solid-js";

import { jsonPlaceholderFetch } from "../_util/jsonPlaceholderFetch";

interface Photo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function fetchPhotos() {
  return jsonPlaceholderFetch<Photo[]>({ path: "/photos" });
}

function createPhotosResource() {
  return createResource<Photo[]>(fetchPhotos);
}

export function Photos() {
  const [photos] = createPhotosResource();

  return (
    <div>
      <Show when={photos()} fallback={<p>Loading...</p>}>
        <h1>Photos</h1>
        <ul>
          <For each={photos()}>{(photo) => <li>{photo.title}</li>}</For>
        </ul>
      </Show>
    </div>
  );
}
