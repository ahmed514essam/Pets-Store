import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Pages/Home/Home.jsx";
import DogStore from "./Pages/DogStore/DogStore.jsx";
import CatStore from "./Pages/CatStore/CatStore.jsx";
import CatDryFood from "./Pages/CatDryFood/CatDryFood";
import ErrorPage from "./Error/ErrorPages.jsx";
import CatsLitters from "./Pages/CatsLitters/CatsLitters.jsx";
import AnimalProfile from "./Pages/AnimalProfile/AnimalProfile.jsx";
import CatsProfile from "./Pages/CatsProfile/CatsProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CatSoftFood from "./Pages/CatSoftFood.jsx/CatSoftFood.jsx";
import DogDry from "./Pages/DogDry/DogDry.jsx";
import Cart from "./Pages/Cart/CartItems/Cart.jsx";
import AccountPage from "./Pages/Account/AccountPage.jsx";
import MyAcc from "./Pages/Account/MyAcc/MyAcc.jsx";
import ProfLog from "./Pages/Account/ProfLog/ProfLog.jsx";
import About from "./Pages/About/About.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} errorElement={ErrorPage}>
          <Route path="/" element={<Home />} />
          <Route path="/Dogs" element={<DogStore />} />
          <Route path="/Cats" element={<CatStore />} />
          <Route path="/Cat Dry Food" element={<CatDryFood />} />
          <Route path="/Cats Litters" element={<CatsLitters />} />
          <Route path="//Dog Dry Food" element={<DogDry />} />
          <Route path="/Cats Soft Food" element={<CatSoftFood />} />
          <Route path="/:id" element={<AnimalProfile />} />
          <Route path="/Profile/:id" element={<CatsProfile />} />
          {/* <Route path="/Account" element={<AccountPage/>} /> */}
          {/* <Route path="/My Account" element={<MyAcc/>} /> */}
          <Route path="/your cart" element={<Cart />} />
          <Route path="/Accout" element={<ProfLog />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
