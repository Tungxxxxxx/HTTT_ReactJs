import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Login Page";
  }, []);
  const token = useSelector((state) => state.auth.token) || null;
  const isError = useSelector((state) => state.auth.isError) || false;
  console.log(token);
  const handleLogin = () => {
    var user = {
      username: username,
      password: password,
    };
    console.log(user);
    dispatch(fetchToken(user));
    console.log(isError);
    if (isError) {
      alert("Đăng nhập lỗi");
    }
    if (!token) {
      navigate("/");
    }
  };

  const handleOnchangeUsername = (event) => {
    setUser(event.target.value);
  };
  const handleOnchangePassword = (event) => {
    setPass(event.target.value);
  };
  return (
    <form>
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
      <button onClick={handleLogin}>Đăng nhập</button>
      <div>
        <label>{token}</label>
      </div>
    </form>
  );
}

export default Login;
