/** 
 * TaskHTTP Library
 * Library for making HTTP Request
 * @version 2.0.0
 * @author Venu
  
 **/

class TaskHTTP{
  //Make HTTP GET Request
  get(url){
    return new Promise ((resolve,reject)=>{
      fetch(url)
      .then(res => res.json())
      .then (data => resolve(data))
      .catch(err=> reject(err))
    });
  }

  //POST
  post(url,data){
    return new Promise ((resolve,reject)=>{
      fetch(url,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then (data => resolve(data))
      let output ='';
      data.forEach(function(user){
        output +=``;
      })
      document.getElementById('output').innerHTML = output
      .catch (err => reject(err));
    });
  }

  //PUT

  put(url,data){
    return new Promise ((resolve,reject)=>{
      fetch(url,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then (data => resolve(data))
      .catch (err => reject(err));
    });
  }

  //delete
  delete(url,data){
    return new Promise ((resolve,reject)=>{
      fetch(url,{
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        }
      })
      .then(res => res.json())
      .then (() => resolve('Resourse Deleted'))
      .catch (err => reject(err));
    });
  }

}