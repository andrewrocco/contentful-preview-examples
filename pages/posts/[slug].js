import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';

import Container from '../../components/container';
import Layout from '../../components/layout';
import DateComponent from '../../components/date';
import PostBody from '../../components/postBody';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';

export default function Post({ post, morePost, preview }) {
  const router = useRouter();

  if(!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <article className="mt-10">
              <Head>
                <title>{post.title} | This is my blog!</title>
              </Head>
              <h1 className="text-3xl mb-3 leading-snug">{post.title}</h1>
              <div className="mb-6 text-lg">
                <DateComponent dateString={post.publishDate} />
              </div>
              <PostBody body={post.body} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}