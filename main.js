//lamanimation dang nhap
let loginbuttonheader = document.querySelector('.buttonlogin')
let formlogin = document.querySelector('.loginctn')
loginbuttonheader.addEventListener('click',()=>{
        formlogin.style.display = `flex`
        
})
// dang nhap
let loginbutton = formlogin.querySelector(".validate")
let loginApi ='https://api.storerestapi.com/auth/login?fbclid=IwAR2b4WK7rBn5oYLrqz6w5CCF4uc9lwezrhtLns2eiv7Uf8xnY8aJy5E-ETQ'
let email = document.getElementById('lg1')
let password = document.getElementById('lg2')
loginbutton.addEventListener("click",()=>{
fetch(loginApi, {
    method: "POST",
    body: JSON.stringify({
      email: email.value.trim(),
      password: password.value.trim(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      if (res.status == 200) {
        console.log(res)
        localStorage.access_token = res.data.access_token;
        alert("Đăng nhập thành công");
        check()
        console.log(res);
        render();
      }
      else
        alert("Đăng nhập thất bại");
        let title = formlogin.querySelector('.title')
        title.innerHTML = 'LOGIN'
    })
    .catch((err) => {
      alert("Đăng nhập thất bại");
      console.log(err);
    })
})
//kiem tra trang thai da dang nhap hay chua
check()
function render(){
    let title = formlogin.querySelector('.title')
    title.innerHTML = 'LOGGED IN'
}
function check()
{
  if(localStorage.access_token != null)
  {
    let title = formlogin.querySelector('.title')
    let button = formlogin.querySelectorAll('.none')
    button[0].style.display = `none`
    button[1].style.display = `none`
    formlogin.querySelector('.logout').style.display = 'block'
    let input=  formlogin.querySelectorAll('.input')
    input[0].style.display = `none`
    input[1].style.display = `none`
    title.innerHTML = 'LOGGED IN'
  }
}
//su kien logout                                                                                                                        v
formlogin.querySelector('.logout').addEventListener('click',()=>{
      
      let input =  formlogin.querySelectorAll('.input')
      let button =formlogin.querySelectorAll('.none')
      localStorage.removeItem('access_token')
      button[0].style.display = `block`
      button[1].style.display = `block`
      formlogin.querySelector('.logout').style.display = 'none'
      let title = formlogin.querySelector('.title')
      title.innerHTML = 'LOGIN'
      alert("Đăng xuất thành công")
      input[0].style.display = `block`
      input[1].style.display = `block`
})
//dang ky

let rgt  =  document.querySelector('.registerctn')
const  rgtapi = 'https://api.storerestapi.com/auth/register?fbclid=IwAR1luqz6JZZ__n83weK2tqN-4ec4rHz7QVrsRNsj4uKfrJaOi0FqegnKm0Y'
let datargt = document.querySelectorAll('.rgt')
//setevent cho nut dangky khi d ang o dang nhap
formlogin.querySelector('.register').addEventListener('click',()=>{
      formlogin.style.display =  'none'
      rgt.style.display =`flex`
})
//setevent  cho nut dang ky luc dang ky tai khoan
rgt.querySelector('.buttoni').addEventListener('click',()=>{
    fetch(rgtapi,{
      method: "POST",
         body: JSON.stringify({
      name: datargt[0].value.trim(), 
      email: datargt[1].value.trim(),
      number: datargt[2].value.trim(),
      password: datargt[3].value.trim(),
      password_repeat: datargt[3].value.trim(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then((reponse)=> reponse.json() )
    .then((res)=>{
      console.log(res.status)
      if (res.status == 200) {
        alert("Đăng ky thành công");
        rgt.style.display =`none`
        formlogin.style.display =`flex`
        // vi bi loi nen de 2 cai nay vao  finally
      }
      else
        alert("Đăng ký thất bại");
    })
    .catch((err) => {
      alert("Đăng  ký  thất bại");
      console.log(err);
    })
    .finally(() => {
      rgt.style.display =`none`
      formlogin.style.display =`flex`
    });
    })

