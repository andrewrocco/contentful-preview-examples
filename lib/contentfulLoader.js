export const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 65}&fm=webp`
}
