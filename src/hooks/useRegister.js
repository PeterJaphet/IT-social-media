// import {useState} from 'react'

// export const useRegister = ()=>{
//     const[error, setError] = useState(null);
//     const[isloading, setIsLoading] = useState(null);

//     const register = async (email, password) =>{
//         setIsLoading(true);
//         setError(null);


//         const response = await fetch('/user/signup/local',{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({email, password})
//         })

//         // const json = await response.json();

//         if(!response.ok){
//             setIsLoading(false);
//             // setError(json.error);
//         }
//         if (response.ok){
//             // save user to a local storage;
//             // localStorage.setItem('user', JSON.stringify(json))
//             setIsLoading(false);
//             // setError(null);
//         }
//     }
// }