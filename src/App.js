import './App.css';
import universe from './universe.jpg';
import universe2 from './universe2.jpeg';
import Ccomponent from './Ccomponent';

const postStyle={
    image:{
      maxWidth:'640px',
      maxHeight:'360px'
    },
    text:{
      maxWidth:'600px'
    },
    display: 'flex',
    maxWidth:'800px',
    margin:'auto',
    alignItems: 'center',
    flexDirection: 'column',
    border:'solid black 2px'
}

function Fcomponent(props){
  return(
    <div style={postStyle}>
        <p style={postStyle.text}>{props.text}</p>
        <img src={props.image} style={postStyle.image} alt='universe'/>
    </div>

  );
}


function App() {
  return (
    <>
         <Fcomponent
            text="Доброго времени суток. Это функциональный компонент. А картинка - это случайная галактика красивого цвета." image={universe}>
        </Fcomponent>
        <Ccomponent 
          image2={universe2}
          description="Это классовый компонент " 
          path="src/universe2.jpg">
        </Ccomponent>
    </>
     
  );
}



export default App;
