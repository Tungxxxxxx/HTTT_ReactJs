import { useState } from "react";
function Home() {
  const [username, setUser] = useState();
  const [password, setPass] = useState();
  const handleOnchangeUsername = (event) => {
    console.log(username);
    setUser(event.target.value);
  };
  const handleOnchangePassword = (event) => {
    console.log(password);
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
          onChange={(event) => handleOnchangeUsername(event)}
        />
      </div>
      <div>
        <label>Mật khẩu</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => handleOnchangePassword(event)}
        />
      </div>
      <button>Đăng nhập</button>
    </form>
  );
}

export default Home;
