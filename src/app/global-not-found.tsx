import { Illustration } from "@/components/illustration/illustration";
import { buttonCss, styles } from "@/lib/helpers";
import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main style={styles.page}>
          <style>{buttonCss}</style>
          <Illustration />
          <h1 style={styles.title}>Whoops... Looks like nothing is here!</h1>
          <Link href="/" className="notfound-home">
            Go to home
          </Link>
        </main>
      </body>
    </html>
  );
}
