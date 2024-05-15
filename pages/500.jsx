import Link from "next/link";

export default function ServerError() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>500 - Something wents wrong on server!</h2>
        </div>
        {/* <Link href="/">Go TO Homepage</Link> */}
      </div>
    </div>
  );
}
