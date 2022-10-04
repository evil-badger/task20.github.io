import logo from './logo.svg';
import './App.css';
import universe from './universe.jpg';

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

function FunctionalComponent(props){
  return(
    <div style={postStyle}>
        <p style={postStyle.text}>{props.text}</p>
        <img src={props.image} style={postStyle.image}/>
    </div>

  );
}

function App() {
  return (
        <FunctionalComponent 
            text="Доброго времени суток. Это функциональный компонент. А картинка - это случайная галактика красивого цвета." image={universe}>
        </FunctionalComponent>
  );
}

export default App;
