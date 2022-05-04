import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import markdownStyles from './markdown-styles.module.css';
import RichTextAsset from './richTextAsset';

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

export default function PostBody({ body }) {
  return (
    <div className={markdownStyles['markdown']}>
      {documentToReactComponents(
        body.json,
        customMarkdownOptions(body)
      )}
    </div>
  )
}
