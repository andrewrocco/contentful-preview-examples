import { getAllPostsForHome } from "../lib/api";

import Container from "../components/container";
import Layout from "../components/layout";
import FeaturedPost from "../components/featuredPost";
import Head from 'next/head';

export default function Index({ preview, allPosts }) {
  const featuredPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
    <Layout prevew={preview}>
      <Head>
        <title>This is my blog!</title>
      </Head>
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1>This is a preview app test</h1>
        </section>
        
        {featuredPost && (
          <FeaturedPost
            title={featuredPost.title}
            excerpt={featuredPost.excerpt}
            slug={featuredPost.slug}
          />
        )}
      </Container>
    </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  };
}