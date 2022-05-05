import Container from "./container";
import Link from "next/link";

export default function Alert({ preview }) {
  return (
    <div className="border-b bg-red-500 border-red-500 text-white">
      <Container>
        <div className="py-2 text-center text-sm">
        {preview && (
            <>
              This is page is a preview.{' '}
              <Link
                href="/api/exit-preview"
                passHref
              >
                <a className="underline">Click here</a>
              </Link>{' '}
              to exit preview mode.
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
