const GQL_QUERY_FIELD = `
title
slug
author {
  name
  picture {
    url
  }
}
body {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
seoDescription {
  json
}
tags
publishDate
`;