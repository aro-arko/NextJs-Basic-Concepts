import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <footer className="bg-gray-600 py-8">This is my stylish footer</footer>
    </div>
  );
};

export default CommonLayout;
