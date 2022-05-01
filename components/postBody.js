import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export default function PostBody({ body }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div>
        {documentToReactComponents(
          body.json
        )}
      </div>
    </div>
  )
}