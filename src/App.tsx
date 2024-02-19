import { Loader } from './components/loader';
import { Layout } from './layout';
import './App.scss';

const App = () => {

  return (
    <>
      <Loader isLoading={true}/>
      <Layout/>
    </>
  )
}

export default App;
