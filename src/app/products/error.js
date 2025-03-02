"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-4xl text-blue-500 text-center">
        Something went wrong...
      </h1>
      <p className="text-center">{error.message}</p>
      <div className="text-center mt-4">
        <button
          onClick={() => reset()}
          className="btn bg-blue-500 rounded-md px-4 py-2 text-lg font-medium"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
