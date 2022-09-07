import { useEffect, useState } from "react";
import AdviceNumber from "./AdviceNumber";
import Content from "./Content";
import Button from "./Button";

function App() {
  const API_URL = 'https://api.adviceslip.com/advice'

  const [item, setItem] = useState('');
  const [advice, setAdvice] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setItem(data.slip)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [advice]);


  return (
    <div className="app">
      <AdviceNumber
        item={item}
      />
      <Content
        item={item}
      />
      <Button
        item={item}
        setAdvice={setAdvice}
      />
    </div>
  );
}

export default App;
