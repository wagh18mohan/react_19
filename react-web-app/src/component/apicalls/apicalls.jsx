import { useEffect, useState } from "react";
import axios from 'axios';

export default function ApiCallDemo(){

//    const [sateliteInfo, setSateliteInfo]  = {"customer_satellites":[{"id":"DLR-TUBSAT","country":"Germany","launch_date":"26-05-1999","mass":"45","launcher":"PSLV-C2"}
//                         ,{"id":"KITSAT-3","country":"REPUBLIC OF KOREA","launch_date":"26-05-1999","mass":"110","launcher":"PSLV-C2"},
//                          {"id":"BIRD","country":"GERMANY","launch_date":"22-10-2001","mass":"92","launcher":"PSLV-C3"},
//                         {"id":"PROBA","country":"BELGIUM","launch_date":"22-10-2001","mass":"94","launcher":"PSLV-C3"}
//                         ]
//                     };


                          // static data
                    // const [sateliteInfo, setSateliteInfo]  = useState( [
                    // {"id":"DLR-TUBSAT","country":"Germany","launch_date":"26-05-1999","mass":"45","launcher":"PSLV-C2"}
                    // ,{"id":"KITSAT-3","country":"REPUBLIC OF KOREA","launch_date":"26-05-1999","mass":"110","launcher":"PSLV-C2"},
                    //  {"id":"BIRD","country":"GERMANY","launch_date":"22-10-2001","mass":"92","launcher":"PSLV-C3"},
                    // {"id":"PROBA","country":"BELGIUM","launch_date":"22-10-2001","mass":"94","launcher":"PSLV-C3"}
                    // ]);

                    const [sateliteInfo, setSateliteInfo]  = useState([]);
                    const [mastersateliteInfo, setMasterSateliteInfo]  = useState([]);
                     const [isSorted, setIsSorted]  = useState(false);


                   
                    useEffect(() => {
                    //     fetch('https://isro.vercel.app/api/customer_satellites')
                    //     .then(res => { return res.json()}).then((result) => {
                    //       console.log(result);

                      // });
                            
                      axios.get('https://isro.vercel.app/api/customer_satellites').then((response) =>{
                          
                    //   console.log( response);
                      // here dont need to say converting the object into json that will automatically take care by 
                      // your axios.
                       
                      var filteredList = [];

                          response.data.customer_satellites.forEach((item) =>{
                               item.mass = (item.mass== '')? 0 : parseInt(item.mass);
                               filteredList.push(item);
                          });

                          setSateliteInfo(filteredList);  //this come for sorting mass
                          setMasterSateliteInfo(filteredList);
                    //   setSateliteInfo(response.data.customer_satellites);  //this line give data.
                    //   setMasterSateliteInfo(response.data.customer_satellites);
                      }).catch((err)=> {
                        console.log(err);
                      })
                     }, []);
                      
                    //or

                    // useEffect(() => {
                    //     fetch('https://isro.vercel.app/api/customer_satellites')
                    //       .then(response => response.json()) // return the parsed JSON
                    //       .then(result => {
                    //         console.log('result:', result); // log the actual data
                    //       })
                    //       .catch(error => {
                    //         console.error('Error fetching data:', error);
                    //       });
                    //   }, []);
                      

                    //https://isro.vercel.app/api/customer_satellites
             
                    function handleCountryChange(event){
                        var userSelection = event.target.value;
                        userSelection = userSelection.toLowerCase();
                        console.log(userSelection);
                        console.log(sateliteInfo);

                        var filterList = mastersateliteInfo.filter((item) => {

                             var str = item.country.substr(0,userSelection.length);

                            // if(item.country.substr(0,userSelection.length) == userSelection){
                                if(str.toLowerCase() == userSelection){
                               
                                return true;
                            }
                        });
                        console.log('filterList');
                        console.log(sateliteInfo);
                        setSateliteInfo(filterList);

                    }

                    function handlMassClick(){
                    setIsSorted(!isSorted);
                    var sortedList = sateliteInfo.sort((a,b) => {
                        if(isSorted){
                        if(a.mass > b.mass){
                            return -1;
                        }
                    }else{
                        if(a.mass < b.mass){
                            return -1;
                        
                    }
                    }
                    });
                    console.log(sortedList);
                    setSateliteInfo(sortedList);
                    }

    return(

    <>
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Id</th>
                <th>country <br/>
                    <input type="text" onChange={handleCountryChange}/>
                </th>
                <th>Launch Date</th>
                <th onClick={handlMassClick}>Mass</th>
                <th>Launcher</th>
           </tr>
        </thead>
        <tbody>
            {
                sateliteInfo.map((satelite, index)=>(
                    <tr key={index}>
                        <td>{satelite.id}</td>
                        <td>{satelite.country}</td>
                        <td>{satelite.launch_date}</td>
                        <td>{satelite.mass}</td>
                        <td>{satelite.launcher}</td>
                         </tr>
                ))
            }
        </tbody>
        {
            (sateliteInfo.length  == 0)&&
            <tbody>
                <tr>
                    <td colSpan={6}>No data found</td>
                </tr>
            </tbody>
        }
    </table>
    </>
    )
}