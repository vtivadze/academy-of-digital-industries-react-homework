import { Header, Main, Footer, Sidebar } from "./components/layout";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
