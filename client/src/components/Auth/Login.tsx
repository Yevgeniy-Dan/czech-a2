import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import apiSlice from "../../store/api/apiSlice";

const Login: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    await dispatch(apiSlice.endpoints.login.initiate(userData));
    navigate("/admin");
  };

  return (
    <div>
      <div>
        <section>
          <form onSubmit={onSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              value={email}
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
