import { useState } from "react";
import { TweetProps } from "../utils/Tweet";

interface TweetPropsChild extends TweetProps {
    children? : React.ReactNode
}

export function Tweet( { titulo, conteudo, likes = 0, children } :TweetPropsChild ) {

    const [useLikes, setLikes] = useState(likes)
    
    const adicionaLike = () => setLikes(useLikes +1);

    return (
        <div>
            <h1>{ titulo }</h1>
            <p>{ conteudo }</p>
            <small style={{
                cursor: 'pointer',
                userSelect: 'none'
            }} onClick={adicionaLike} className="likes">{useLikes}</small> {/* aqui da pra usar sistema de emit pra contabilizar os likes talvez? */ }
        </div>
    );
}