import Alert from "./previewAlert";

export default function Layout({ preview, children }) {
  return (
    <>
      {preview && <Alert preview={preview} />}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}