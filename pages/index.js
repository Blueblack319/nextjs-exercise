import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const indexPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>The Index Page</h1>
      <p>
        Go to{" "}
        <Link href="/auth">
          <a>Authentication</a>
        </Link>
      </p>
      <button onClick={() => router.push("/auth")}>Go to Authentication</button>
    </div>
  );
};

export default indexPage;
