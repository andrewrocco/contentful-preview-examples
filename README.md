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
This project incorporates the use of Storybook as an alternative preview environment. Contentful's Preview URLs do not support resolving reference fields. So, we had to add a little custom spice to the project to pull assets via asset IDs provided through URL tokens.

## Setup
This project runs on `node 16.15.0`. Before pulling any data from Contentful, please create a `.env` file based off `.env.sample` and add the following environment variable values:

```
CONTENTFUL_SPACE_ID=space ID
CONTENTFUL_ACCESS_TOKEN=CDA token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=CPA token
CONTENTFUL_PREVIEW_SECRET=any value you want
```

### Installation
Run `yarn`

### Commands
#### Next.js environment
Run `yarn dev` to run the development environment.

Run `yarn build` to build a production bundle.

Run `yarn start` to serve the production bundle.

#### Storybook environment
Run `yarn storybook` to view the Storybook instance.
