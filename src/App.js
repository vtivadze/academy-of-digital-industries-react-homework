import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
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
