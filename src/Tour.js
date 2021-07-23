import React, { useState } from 'react';
import Tours from './Tours';
//{readMore?info:`${info.subString(0,200)}` we have the stateValue i.e. readMore so since the default is false what we are doing is that we are asking if readMore is true by using ReadMore?,if it is true then we are going to use full info by using info: if not then display the info but only for 200 words by using `${info.subString(0,200)}...`

const Tour = ({id,image,info,price,name,removeTour}) => {
  const [readMore ,setReadMore] = useState(false); //for hiding the info to make the card short and sweet
  return (
  <article className="single-tour">
    <img src={image} alt={name}/>
     <footer>
       <div className="tour-info">
         <h4>
           {name}
         </h4>
         <h4 className="tour-price">
             {price}
         </h4>
         <p>{readMore?info:`${info.substring(0,200)}...`
         }
         <button onClick={() => setReadMore(!readMore)}>
           {readMore ? 'show less': 'Read More'}
         </button>
         </p>
         <button className="delete-btn" onClick={() =>removeTour(id)}>not interested</button>
       </div>
     </footer>
    </article>

    )  };

export default Tour;

//{readMore ? 'show Less': 'Read More'} it tells react that if readmore is true by using readMore ?
//then display show Less else if it's false display Read more by 'show less': 'Read More'