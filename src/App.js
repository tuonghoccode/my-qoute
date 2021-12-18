import {useState,useEffect} from 'react'
import './style.css';


function App() {
  
  const [data, setData] = useState({
    author:null,
    content:null,
    date:null,
  })
  useEffect(()=>{
    clickHandle();
    console.log('Call here!')
  },[])

  const clickHandle = async () => {
    return await fetch("https://api.quotable.io/random")
    .then(response=> response.json()).then(data => {
      console.log(data)
      setData({
        author: data.author,
        content: data.content,
        date: data.dateModified,
      });
    }).catch(err => alert('Error'));
  }
  

  return (
    <div className="wrapper">
        <div className="quote">
          <div className="author">{data.author}</div>
          <div className="content">
            {data.content}
          </div>
          <div className="date-modify">{data.date}</div>
      </div>
      <button onClick={clickHandle} className="btn-new-quote">Generate new qoute</button>
    </div>
  );
}

export default App;
