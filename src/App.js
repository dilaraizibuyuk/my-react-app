import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

let arr = [
  {
    title: "Dağ 1",
    par: "Açıklama 1"
  }, {
    title: "Dağ 2",
    par: "Açıklama 2"
  }, {
    title: "Dağ 3",
    par: "Açıklama 3"
  }, {
    title: "Dağ 4",
    par: "Açıklama 4"
  },
];
const App = () => (
  (<div><h1>Başlık</h1><p>Başlangıç</p>
    <div className='Cards'>
      {arr.map(({ title, par }) =>
        (<Card title={title} par={par} />)

      )}



    </div>
  </div>))


export default App;
