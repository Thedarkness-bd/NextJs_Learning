const { default: Link } = require("next/link");

const Navbar = () => {
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
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
