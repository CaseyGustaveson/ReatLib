import Form from './components/Form/Form'
import Layout from './components/Layout/Layout';
import "./App.css";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const fetchDocument = async () => {
      const response = await fetch('./MockData.json')
      const data = await response.json()
      console.log(data)
    }
    fetchDocument()

  }, [])


  return (
    <Layout>
      <Form />
    </Layout>
  )
}

export default App
