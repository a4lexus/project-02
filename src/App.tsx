import { HashRouter, Route, Routes } from "react-router-dom";
import GenderReveal from "./components/GenderReveal/GenderReveal";
import RandomJoke from "./components/RandomJoke/RandomJoke";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layouts/MainLayout";
import { ROUTES } from "./constants/routes";
import Cohort68 from "./pages/Cohort68/Cohort68";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.GENDER_REVEAL} element={<GenderReveal />} />
            <Route path={ROUTES.SPACE_MISSION} element={<SpaceMissionForm />} />
            <Route path={ROUTES.RANDOM_JOKE} element={<RandomJoke />} />
            <Route path={ROUTES.COHORT_68} element={<Cohort68 />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>

      {/* <AgeByName />
      <GenderByName />
      <Counter />
      <WeightCalculator />
      <EffectExample /> */}
    </>
  );
}

export default App;

// Создайте компонент Goodbye - который содержит текст
// Goodbye, bye bye!
// Отобразите его на странице

// const user = {
//   name: "Bobby",
// };

// const name = user.name;
// const age = user.age;

// const {name, age} = user;
