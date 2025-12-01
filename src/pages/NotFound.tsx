import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main
      role="main"
      className="w-full min-h-screen flex justify-center items-center "
    >
      <div className="flex flex-col w-1/2 text-center">
        <h1 className="text-7xl">404</h1>
        <p className="text-xl">Page Not Found</p>
        <Link to="/" className="text-lg underline hover:bg-primary">
          Go Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
