import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import * as post from "./testing-blog.mdx";

function postFromModule(mod) {
  console.log(mod);
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  return json(postFromModule(post));
}

export default function Index() {
  const post = useLoaderData();
  console.log(post);

  return <ul>{post.title}</ul>;
}
