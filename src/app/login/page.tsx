'use client'

import { useState, useEffect } from "react"
import { toast } from 'react-toastify';
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const Login = () => {
  //demo error
  // var a = null
  // console.log(">>>check user: ", a.abc)

  const router = useRouter()


  const [email, setEmail] = useState("eve.holt@reqres.in")
  const [password, setPassword] = useState("123")
  const [isShowPassword, setIsShowPassword] = useState(false)


  // useEffect(() => {
  //   if (account && account.auth === true) {
  //     router.push("/")
  //   }
  // }, [account])

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email or Password is required!")
      return
    }



  }

  const handlePressEnter = (event: any) => {
    console.log(">>> check key down: ", event)
    if (event && event.key === 'Enter') {
      handleLogin()
    }
  }


  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Log in</div>
        <div className="text">Email or Username (eve.holt@reqres.in)</div>
        <input type="text" placeholder="Email or Username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input type={isShowPassword === false ? "password" : "text"} placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handlePressEnter(event)}
          />
          <i
            onClick={() => setIsShowPassword(!isShowPassword)}
            className={isShowPassword === false ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
        </div>
        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}

        >
          {true && <i className="fas fa-sync fa-spin"></i>} &nbsp;
          login</button>
        <div className="back">
          <Link href="/"><i className="fa-solid fa-angles-left"></i> Go back</Link>
        </div>
      </div>
    </>
  )
}

export default Login