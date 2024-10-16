import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      Application globale
      <Outlet />
    </div>
  );
};

export default App;