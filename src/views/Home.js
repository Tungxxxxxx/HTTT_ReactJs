import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../redux/slices/userSlice";
import axios from "axios";
function Home() {
  console.log("rếtttttttttttttttttttttttt");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const handleLogin = () => {
    var user = {
      message: "https://images.dog.ceo/breeds/hound-english/n02089973_529.jpg",
      status: "success",
    };
    dispatch(fetchToken(user));
  };
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/countries",
    headers: {
      "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const handleCheckApi = () => {
    dispatch(fetchToken());
  };
  const handleOnchangeUsername = (event) => {
    setUser(event.target.value);
  };
  const handleOnchangePassword = (event) => {
    setPass(event.target.value);
  };
  return (
    <div>
      <div>
        <label>Tài khoản</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleOnchangeUsername}
        />
      </div>
      <div>
        <label>Mật khẩu</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleOnchangePassword}
        />
      </div>
      <button onClick={handleCheckApi}>Đăng nhập</button>
      <div>
        <label>{token}</label>
      </div>
    </div>
  );
}

export default Home;
