import axios from "axios";
import React, { useState, useEffect } from "react";


export default function Details(props) {
    const {characterName, close } = props;
    const [details, setDetails] = useState([]);



    useEffect(() => {
        
        axios.get(`https://swapi.dev/api/people/?${characterName}`)
        .then(res => {
            setDetails(res.data);
            console.log(res.data);
        }) .catch(err => console.error(err));
        // return () => {
        //     console.log(`${characterName}`)
        // }
    }, [characterName]);

    return (
            <div className = "container">
                <h2> Details of {characterName} :
                </h2>
            {  details.map((item) => {
                 return ( 
                 <> 
                 <ul> 
                    
                   <p>Gender:{item.gender}</p> 
                   <p>Height:{item.height}</p>
                   <p>Mass:{item.mass}</p>
                   <p>BirthYear:{item.birth_year}</p>
                   <p>Eye Color:{item.eye_color}</p>
                   <p>Hair Color:{item.hair_color}</p>
                   <p>Skin color:{item.skin_color}</p>
                   
                   </ul>
                 </> )
            })
               }
           
           
           <button onClick={close}>Close</button>
        </div>
    );

};










/*


const Details = (props) => {
    const { characterName, close } = props;
    const [details, setDetails] = useState(null);






   useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?${characterName}`)
        .then((res) => {
            setDetails(res.data);
        })
        .catch((error) => {
            debugger;
        });
    }, [characterName]);

    return (

    <div className = "container">
        <>
        <ul>
            <p>Gender:{props.details.gender}</p>
            <p>Height:{props.details.height}</p>
            <p>Mass:{props.details.mass}</p>
            <p>BirthYear:{props.details.birth_year}</p>
            <p>Eye Color:{props.details.eye_color}</p>
            <p>Hair Color:{props.details.hair_color}</p>
            <p>Skin color:{props.details.skin_color}</p>
            </ul>
            </>

            <button onClick= {close}>Close</button>
            
    </div>
    );
};

export default Details;

*/


// return (
//     <div className = "container">
//         <h2> Details of {characterName} :
//         </h2>
//     {  details &&
//          <> 
//          <ul>
//            <p>Name:{details.name}</p>
//            <p>Gender:{details.gender}</p> 
//            <p>Height:{details.height}</p>
//            <p>Mass:{details.mass}</p>
//            <p>BirthYear:{details.birth_year}</p>
//            <p>Eye Color:{details.eye_color}</p>
//            <p>Hair Color:{details.hair_color}</p>
//            <p>Skin color:{details.skin_color}</p>
//            </ul>
//          </> 
//     }
       
       
//        <button onClick={close}>Close</button>
//     </div>
// );

// };





// return (
//     <div className = "container">
//         <h2> Details of {characterName} :
//         </h2>
//     {  details.map((item) => {
//          return (
//          <> 
//          <ul>
//            <p>Gender:{item.gender}</p> 
//            <p>Height:{item.height}</p>
//            <p>Mass:{item.mass}</p>
//            <p>BirthYear:{item.birth_year}</p>
//            <p>Eye Color:{item.eye_color}</p>
//            <p>Hair Color:{item.hair_color}</p>
//            <p>Skin color:{item.skin_color}</p>
           
//            </ul>
//          </> )
//     })
//        }
       
//        <button onClick={close}>Close</button>
//     </div>
// );
