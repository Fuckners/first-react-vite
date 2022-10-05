import { useState } from "react";
import { Tweet } from "./components/tweet";
import { TweetProps } from "./utils/Tweet";
import "../public/css/tweet.css";

function App() {

  const [tweets, setTweets] = useState<TweetProps[]>([
    { titulo: "Eleições", conteudo: "Vocês já foram votar?" },

    { titulo: "Bom dia!", conteudo: "Espero que vocês tenham dormido bem, pq eu dormi horrivelmente mal 😥" },

    { titulo: "Galinha", conteudo: "Finalmente encontrei minha galeinha dos ovos de ouro!" },
  ]);

  function addTweet() {

    const titulo = document.getElementById('titulo') as HTMLInputElement;
    const conteudo = document.getElementById('conteudo') as HTMLInputElement;

    const currentTweet :TweetProps = {
      titulo: titulo.value,
      conteudo: conteudo.value
    }

    setTweets([...tweets, currentTweet]);

    titulo.value = '';
    conteudo.value = '';
  }

  return (
  <div>
    <h1>Hello world!</h1>
    <div className="tweets">
      { tweets.map(({ titulo, conteudo, likes } :TweetProps, i) => <Tweet key={i} titulo={titulo} conteudo={conteudo} likes={likes}/>)}
    </div>

    <input type="text" id="titulo" required/> <br/>
    <input type="text" id="conteudo" required/> <br/>
    <button
      style={{ // são duas chaves pq uma é para considerar o que vou escrever como código js e outra para abrir um objeto
        padding: '5px',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '5px'
      }}
      type="submit"
      onClick={addTweet}>
        Tweetar!
    </button>
  </div>
  );
}

export default App
