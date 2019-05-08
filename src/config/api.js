import React from 'react'
import { promised } from 'q';



function searchData(e){
    return new Promise((resolve, reject) =>{
        fetch('https://data.police.uk/api/' + e)
        .then(res =>res.json())
        .then(res => 
            {
                // console.log(res)
                resolve(res);
            }).catch(e =>{
                reject({messege: 'no Data found'})
            })
    })

}
function DataFetch(crime , forces){
    return new Promise((resolve, reject)=>{
        fetch(`https://data.police.uk/api/crimes-no-location?category=${crime}&force=${forces}`)
        .then(res => res.json())
        .then(res =>{
            resolve(res);
        }).catch(e => {
            reject({messege: 'no Data Found'})
        })
    })
}
export {searchData , DataFetch}




// if responce successfull resolve;
// if responce reject reject;
