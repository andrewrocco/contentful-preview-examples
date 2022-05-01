import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 65}&fm=webp`
}

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return <Image src={asset.url} width={asset.width} height={asset.height} alt={asset.description} loader={contentfulLoader} />
  }

  return null
}