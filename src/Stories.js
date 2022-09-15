import React from "react";
import { useGlobalContext } from "./Context";


    const Stories = () => {
        const { hits,isLoading, removePost} = useGlobalContext();

    if(isLoading) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
    return (
        <>
            <div className="stories_div">
            {hits.map((curPost) => { 
                const { title, author, objectID, url, num_comments } = curPost;
                return (
                // eslint-disable-next-line
                 <div className="card" key={objectID}>
                    <h2>{title}</h2>
                    <p>  
                        By  <span> {author} </span>  | <span>  {num_comments}  </span> Comments
                    </p>
                    <div className="card_button">
                        <a href={url} target='blank'>
                            Read More
                        </a>
                        <a href="###" onClick={() => removePost(objectID)} >Remove</a>
                    </div>
                 </div>
            
                );
            })}
            </div>
        </>
    )
}

export default Stories;