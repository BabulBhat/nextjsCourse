import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./components.css";
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}