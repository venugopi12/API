const  http = new TaskHTTP;

//GET
http.get('https://jsonplaceholder.typicode.com/users')
.then(data=> console.log(data))
.catch(err => console.log(err));

//POST

//create data

const data ={
  name:'John Doe',
  username:'johndoe',
  emailid:'johndoe@gmail.com'
}

//create post
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data=> console.log(data))
// .catch(err => console.log(err));

//PUT

// http.put('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data=> console.log(data))
// .catch(err => console.log(err));

//DELETE

// http.delete('https://jsonplaceholder.typicode.com/users/2',data)
// .then(data=> console.log(data))
// .catch(err => console.log(err));
