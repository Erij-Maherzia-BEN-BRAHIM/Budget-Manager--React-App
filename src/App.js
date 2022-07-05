import './App.css';
import DepensesListe from './components/DepensesListe';
import DepenseForm from './components/DepenseForm';
import Card from './components/Card';


function App() {
 
  return (
    <>
    <Card>
    <DepenseForm></DepenseForm> 
    <DepensesListe></DepensesListe>
</Card>
    </>
  );
}

export default App;
