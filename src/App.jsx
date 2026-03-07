import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRoutes from "./appRoutes";

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

      <Header />

      <AppRoutes />

      <Footer />

    </div>
  );
}

export default App;