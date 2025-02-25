import { Posts } from './_data/Posts';
import { Comments } from './_data/Comments';
import { Albums } from './_data/Albums';
import { Photos } from './_data/Photos';
import { Todos } from './_data/Todos';
import { Users } from './_data/Users';

export function AllJsonPlaceholderQueries() {
    return (
        <div>
            <Posts />
            <Comments />
            <Albums />
            <Photos />
            <Todos />
            <Users />
        </div>
    );
}
