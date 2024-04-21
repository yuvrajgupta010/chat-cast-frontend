import Link from "next/link";

export default function ServerError() {
  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>Oops!</h1>
          <h2>500 - Something wents wrong on server!</h2>
        </div>
        {/* <Link href="/">Go TO Homepage</Link> */}
      </div>
    </div>
  );
}
