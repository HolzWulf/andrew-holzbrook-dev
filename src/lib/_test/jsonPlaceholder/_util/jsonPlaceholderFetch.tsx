import { Posts } from '../_data/Posts';
import { Comments } from '../_data/Comments';

interface JsonPlaceholderFetchProps {
    path: string;
}

export async function jsonPlaceholderFetch<T>({ path }: JsonPlaceholderFetchProps) {
    const host = 'https://jsonplaceholder.typicode.com';
    const res = await fetch(host + path);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json() as Promise<T>;
}
