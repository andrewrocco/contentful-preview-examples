import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Link from 'next/link';

import Container from '../../components/container';
import Layout from '../../components/layout';
import DateComponent from '../../components/date';
import PostBody from '../../components/postBody';
import AuthorCard from '../../components/authorCard';
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
              
              <Link href="/" passHref>
                <a className="text-blue-500">&larr; Back Home</a>
              </Link>
              
              <h1 className="text-3xl mb-3 leading-snug">{post.title}</h1>
              <div className="mb-6 text-lg">
                <DateComponent dateString={post.publishDate} />
              </div>

              <div className="max-w-2xl mx-auto">
                <PostBody body={post.body} />
                
                <AuthorCard
                  image={post.author.picture}
                  name={post.author.name}
                  bio={post.author.bio}
                />
              </div>
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
