import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";
import ReviewModule from "./components/ReviewModule";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ReviewModule />
      <Footer />
    </div>
  );
}
