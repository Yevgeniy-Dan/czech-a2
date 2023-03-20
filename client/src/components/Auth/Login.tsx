import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import apiSlice, { useLoginMutation } from "../../store/api/auth";
import { setCredentials } from "../../store/auth/authSlice";

const Login: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result: any = await login({ email, password });
      if (result.data) {
        localStorage.setItem("token", result.data.accessToken);
        dispatch(
          setCredentials({
            user: result.data,
            token: result.data.accessToken,
          })
        );
        navigate("/admin");
      }
    } catch (error) {
      console.log("Login fails: ", error);
    }
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
