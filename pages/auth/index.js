import React from "react";
import User from "../../components/User";
import Link from "next/link";

const indexAuthPage = () => {
  return (
    <div>
      <h1>The Authentication Page</h1>
      <User name="Crazybirdz" age={22} />
      <p>
        Go to{" "}
        <Link href="/">
          <a>Main</a>
        </Link>
      </p>
    </div>
  );
};

export default indexAuthPage;
