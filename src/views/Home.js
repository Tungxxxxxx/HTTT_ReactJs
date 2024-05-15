import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToken } from "../redux/slices/userSlice";
function Home() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  useEffect(() => {
    console.log(username);
  }, [username]);
  const handelLogin = () => {
    try {
      var user = { username: "TUNGPT", password: "Tungha123" };
      console.log(fetchToken(user));
      dispatch(fetchToken(user));
    } catch (error) {
      console.log(error);
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
      <button onClick={handelLogin}>Đăng nhập</button>
      <div>
        <label>{token}</label>
      </div>
    </form>
  );
}

export default Home;
