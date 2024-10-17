import { Outlet } from "react-router-dom";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;