import Image from 'next/image';
import { contentfulLoader } from '../lib/contentfulLoader';

export default function AuthorImage({ url, altText = "" }) {
  if (url) {
    return <Image className='w-24 h-24 rounded-full' src={url} width={50} height={50} alt={altText} loader={contentfulLoader} />
  }

  return null
}
