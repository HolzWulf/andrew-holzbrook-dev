import { Albums } from "./_data/Albums";
import { Comments } from "./_data/Comments";
import { Photos } from "./_data/Photos";
import { Posts } from "./_data/Posts";
import { Todos } from "./_data/Todos";
import { Users } from "./_data/Users";

export default function AllSampleQueries() {
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
