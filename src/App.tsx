import CustomCard from "./components/CustomCard";
import CustomTable from "./components/CustomTable";
import CustomList from "./components/CustomList";
import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <h1>Minha Página de Exemplo</h1>
      <CustomCard />
      <CustomTable />
      <CustomList />
    </div>
  );
};

export default App;
