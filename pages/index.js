import { getAllPostsForHome } from "../lib/api";

export default function Index({ preview, allPosts }) {
  const featuredPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
    {featuredPost && (
      <h2>{featuredPost.title}</h2>
    )}
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  };
}