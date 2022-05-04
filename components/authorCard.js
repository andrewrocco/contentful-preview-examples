import AuthorImage from "./authorImage";

export default function AuthorCard({name, image, bio}) {
  return (
    <div className="flex mt-8 p-8 space-x-4 border-t-slate-200 border-t-2">
      <AuthorImage url={image.url} altText={image.description} />
      <div>
        <p className="font-bold mb-1">{name}</p>
        <p className="text-sm">{bio}</p>
      </div>
    </div>
  );
}
