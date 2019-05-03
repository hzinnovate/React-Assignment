import React from 'react'



function searchData(e){
    return new Promise((resolve, reject) =>{
        fetch('https://data.police.uk/api/' + e)
        .then(res =>res.json())
        .then(res => 
            {
                console.log(res)
                resolve(res);
            }).catch(e =>{
                reject({messege: 'no Data found'})
            })
    })

}
export {searchData}




// if responce successfull resolve;
// if responce reject reject;
