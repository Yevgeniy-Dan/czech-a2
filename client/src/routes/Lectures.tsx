import React from "react";
import LectureBox from "../components/LectureBox";
import { lectures } from "../utils/lectures";

const Lectures: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div>
      <h1>Эффективный курс чешского A2+</h1>

      <div>
        {lectures.map((l) => (
          <LectureBox
            key={l.id}
            title={`${l.title}`}
            desc={`${l.desc}`}
            to={l.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Lectures;
