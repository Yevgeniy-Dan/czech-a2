import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { useRegisterMutation } from "../../store/api/auth";
import { setCredentials } from "../../store/auth/authSlice";

const Register: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [register, { isLoading }] = useRegisterMutation();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result: any = await register({ email, password });
      if (result.data) {
        localStorage.setItem("token", result.data.accessToken);
        dispatch(
          setCredentials({
            user: result.data,
            token: result.data.accessToken,
          })
        );
        navigate("/admin");
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log("Register fails: ", error);
    }
  };

  return (
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
  );
};

export default Register;
