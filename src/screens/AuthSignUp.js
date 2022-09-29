// export const signUp = async body => {
//     var myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');
  
//     var raw = JSON.stringify({
//       name: body.name,
//       email: body.email,
//       password: body.password,
//       age: body.age,
//     });
  
//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };
//     //console.log(`raw is ${raw}`);
  
//    await fetch(
//       'https://api-nodejs-todolist.herokuapp.com/user/register',
//       requestOptions,
//     )
//       .then(response => response.text())
//       .then(result => {console.log(`result is ...${result}`);} )
//       .catch(error => {console.log('error', error);});
//       return true;
      
//   };