import "./App.css";
import Goodbye from "./components/Goodbye/Goodbye";
import Hello from "./components/Hello/Hello";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <>
      <p>Hello</p>
      <Hello />
      <Goodbye />
      {/* передаём пропс в компонент - как аргумент*/}
      <PersonalGreeting name="Alexej" />
      <PersonalGreeting name="Fred" />
      <ProductCard
        title={"Opaeroo Paarungsspielzeug für Hunde"}
        image={
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT6dCWJhg_NWxlD6zuYn_a0CDMkebqD3IWtGcPHu6ZOhKs5KmI9eb9c6W41D6RlFy1PzLVs8pTI-JJDLThOPMEAbQ99Pg6ve69oNvUt2q6acOtAv5sXHBjIKvCMBLNNfxjN5sNTGIm3NQ&usqp=CAc"
        }
        price={86.99}
      />
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
