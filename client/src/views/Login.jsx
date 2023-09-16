import {useState} from "react";
import {validar} from "../helpers";
import { Link } from "react-router-dom";
import style from "../views/Login.module.css";


function Login({ login }) {
  const initialUserData = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState(initialUserData);

  function inputHandler(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    const validationErrors = validar(userData);
    setErrors(validationErrors);

    if (Object.values(validationErrors).every((error) => error === "")) {
      login(userData);
    }
  }

  return (
  <div className={style.loginBackground}>
    <div className={style.loginContainer}>
    <div className={style.logo}></div>
      <form onSubmit={submitHandler} className={style.loginForm}>
        <div className={style.iconContainer}/>
        <i class="fa-solid fa-user"></i>
        <div className={style.inputContainer}>
          <label>EMAIL</label>
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={inputHandler}
            placeholder="username@email.com"
            />
          <span>{errors.email}</span>
        </div>
        <div className={style.iconContainer}>
        <i class="fa-solid fa-lock"></i>
        </div>
        <div className={style.inputContainer}>
          <label>PASSWORD</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={inputHandler}
            placeholder="Password"
            />
          <span>{errors.password}</span>
        </div>
        <button
          disabled={Object.values(errors).some((error) => error !== "")}
          type="submit"
        >
          SUBMIT
        </button>
      </form>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </div>
    </div>
  );
}

export default Login;

// function Login({login}) {
//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({
//     email: "Email required", //
//     password: "Password required", //
//   });

//   function inputHandler(e) {
//     setUserData({
//       ...userData,
//       [e.target.name]: e.target.value,
//     });

//     setErrors(
//       validar({
//         ...userData,
//         [e.target.name]: e.target.value,
//       })
//     );
//   }

//   function submitHandler(e) {
//     e.preventDefault();

//     login(userData);
//   }

//   function diseableHandler() {
//     let disabled;
//     for (let error in errors) {
//       if (errors[error] === "") disabled = false;
//       else {
//         disabled = true;
//         break;
//       }
//     }

//     return disabled;
//   }

//   return (
//     <div>
//     <div>
//       <span></span>
//       <form onSubmit={submitHandler}>
//         <div>
//           <label>Email</label>
//           <input
//             type="text"
//             name="email"
//             value={userData.email}
//             onChange={inputHandler}
//             placeholder="username@email.com"
//           />
//           <span>{errors.email}</span>
//         </div>
//         <div>
//           <label>PASSWORD</label>
//           <input
//             name="password"
//             type="password"
//             value={userData.password}
//             onChange={inputHandler}
//             placeholder="Password"
//             />
//         </div>
//         {errors.password && <span>{errors.password}</span>}
//         {/* {errors.password || errors.email ? null : (
//           <button type="submit">SUBMIT</button>
//         )} */}
//         <button disabled={diseableHandler()} type="submit">
//           SUBMIT
//         </button>
//       </form>
//     </div>
//     </div>
//   );
// }

// export default Login;
