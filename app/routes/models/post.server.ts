// type Post = {
//   slug: string;
//   title: string;
// };

// export async function getPosts(): Promise<Array<Post>> {
//   return [
//     {
//       slug: "my-first-post",
//       title: "My First Post",
//     },
//     {
//       slug: "90s-mixtape",
//       title: "A Mixtape I Made Just For You",
//     },
//   ];
// }

import { prisma } from "~/db.server";

export async function getPosts() {
  return prisma.post.findMany();
}
