//Registration
function signIn(){
let reguser=document.getElementById('reguser').value;
let regemail=document.getElementById('regemail').value;
let regpass=document.getElementById('regpass').value;

  if(!reguser||!regemail||!regpass){
    alert('please fill all field')
    return
  }

  let user={
    reguser,
    regemail,
    regpass
  }

  localStorage.setItem('userRegData',JSON.stringify(user))
  alert('registration successfully !')
  window.location.href='login.html'

}

// login
function login(){
  let lemail=document.getElementById('lemail').value;
  let lpass=document.getElementById('lpass').value;
  let savedUser=JSON.parse(localStorage.getItem('userRegData'))

  if(!savedUser){
    alert('Not user Found please register first')
    return
  }
  
  if(!lemail||!lpass){
    alert('please fill all field')
    return
  }

  if(lemail===savedUser.regemail && lpass===savedUser.regpass){
    localStorage.setItem('isLogin','true')
    window.location.href='index.html'
  }
  else{
    alert('invalid email & password')
  }
}

//page Protect
function checkLogin(){
  let isLogin=localStorage.getItem('isLogin');
  if(!isLogin){
    window.location.href='login.html'
  }
}

//LogOut
function logOut(){
    localStorage.removeItem('isLogin')
    window.location.href='login.html'
}