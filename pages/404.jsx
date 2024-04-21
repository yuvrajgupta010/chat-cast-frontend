import Link from "next/link";

export default function NotFound() {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - The Page can&apos;t be found</h2>
        </div>
        <Link href="/">Go TO Homepage</Link>
      </div>
    </div>
  );
}