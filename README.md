# contentful-preview-examples
A public repository showcasing a couple ways to set up a preview environment.

This project is a slight variation of the example Next.js + Contentful app found here: https://github.com/vercel/next.js/tree/canary/examples/cms-contentful

It uses the following technologies:
* Next.js
* Tailwind.css

## Assumptions
1. You have a Contentful account
2. You created an API key for local previews (this project is localhost specific, but it can be hosted as well)
3. You have a content model which contains the following two content types:

### Blog Post
| Field Name  | Type | Ref |
| ------------- | ------------- | ------------- |
| Title  | short text  | |
| Slug  | short text  | |
| Author | reference | Author |
| Excerpt | long text | |
| Body | rich text | |
| Publish Date | date | |

### Author
| Field Name  | Type |
| ------------- | ------------- |
| Name  | short text  |
| Picture  | media  |
| Bio | long text |

## Differences
This project incorporates the use of Storybook as an alternative preview environment. Contentful's Preview URLs do not support resolving reference fields. So, we had to add a little custom spice to the project to pull assets via asset IDs provided through URL tokens. Also, Storybook doesn't support Tailwind.css out of the box, so a custom `main.js` was necessary to add this capability.

For changing Storybook URL args after render, we used the `useArgs` hook. For more information, check out the API documentation: https://storybook.js.org/docs/react/addons/addons-api#useargs

This use can be found in the `authorCard.stories.js` file: https://github.com/andrewrocco/contentful-preview-examples/blob/main/stories/authorCard.stories.js

## Setup
This project runs on `node 16.15.0`. Before pulling any data from Contentful, please create a `.env.local` file based off `.env.sample` and add the following environment variable values:

```
CONTENTFUL_SPACE_ID=space ID
CONTENTFUL_ACCESS_TOKEN=CDA token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=CPA token
CONTENTFUL_PREVIEW_SECRET=any value you want
```

### Preview URLs
For **Author**: `http://localhost:6006/?path=/story/components-author-card--primary&args=name:{entry.fields.name};bio:{entry.fields.bio};imageId:{entry.fields.picture.sys.id}`

For **Blog Post**: `http://localhost:3000/api/preview?secret=<CONTENTFUL_PREVIEW_SECRET>&slug={entry.fields.slug}`

Replace `<CONTENTFUL_PREVIEW_SECRET>` with the secret value from your `.env.local` file.

### Installation
Run `yarn`

### Commands
#### Next.js environment
Run `yarn dev` to run the development environment.

Run `yarn build` to build a production bundle.

Run `yarn start` to serve the production bundle.

#### Storybook environment
Run `yarn storybook` to view the Storybook instance.
