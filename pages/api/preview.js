import { getPreviewPostBySlug } from '../../lib/api';

export default async function preview(request, response) {
  const { secret, slug } = request.query;

  if(secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return response.status(401).json({ message: 'Invalid token' });
  }

  // fetch from Contentful to see if the slug exists
  const post = await getPreviewPostBySlug(slug);

  // if the slug doesn't exist, we gotta exit
  if(!post) {
    return response.status(401).json({ message: `The slug: ${slug} doesn't exist` });
  }

  // enable preview mode by setting the cookies
  response.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to request.query.slug as that might lead to open redirect vulnerabilities
  // response.writeHead(307, { Location: `/posts/${post.slug}` })
  const url = `/posts/${post.slug}`;
  response.setHeader('Content-Type', 'text/html');
  response.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>
    </html>`
  );
  response.end();
}