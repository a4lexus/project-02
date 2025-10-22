import { HashRouter, Route, Routes } from "react-router-dom";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import RandomJoke from "./components/RandomJoke/RandomJoke";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import { ROUTES as R } from "./constants/routes";
import Cohort68 from "./pages/Cohort68/Cohort68";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AccountLayout from "./layouts/AccountLayout";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";
import Country from "./components/Country/Country";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={R.GENDER_REVEAL} element={<GenderReveal />} />
            <Route path={R.SPACE_MISSION} element={<SpaceMissionForm />} />
            <Route path={R.RANDOM_JOKE} element={<RandomJoke />} />
            <Route path={R.COHORT_68} element={<Cohort68 />} />
            <Route path={R.ABOUT} element={<About />} />
            <Route path={R.CONTACT} element={<Contact />} />
            <Route path={R.ACCOUNT} element={<AccountLayout />}>
              <Route path={R.SETTINGS} element={<Settings />} />
              <Route path={R.PROFILE} element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/countries/:id/:slug" element={<Country />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
