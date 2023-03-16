import React from "react";
import { Link } from "react-router-dom";

const LectureBox: React.FC<
  React.PropsWithChildren<{ title: string; desc: string; to: number }>
> = ({ title, desc, to }) => {
  return (
    <Link className="card m-4 p-4" to={`${to}`}>
      <div className="d-flex justify-content-start">
        <div className="mx-3">
          {/* <img src="" alt="" /> */}
          <p>Hvězda češtiny A2</p>
        </div>
        <div className="ms-3">
          <p>{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default LectureBox;
