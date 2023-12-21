"use client";
const { default: Link } = require("next/link");
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <div className="logo">
          <h1>Logo</h1>
        </div>

        <div className="link-container">
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/school">
            School page
          </Link>
          <Link className="link" href="/school/teacher">
            Teacher Portal
          </Link>
          <Link className="link" href="/school/student">
            Student Portal
          </Link>

          <button
            style={{ padding: "8px", borderRadius: "10px" }}
            className="border-2 bg-red-500 text-white rounded"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
