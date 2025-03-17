import Header from "./components/Header"
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes/AppRoutes";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
