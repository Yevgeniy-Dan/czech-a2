import React from "react";
import { Link } from "react-router-dom";

const Root: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div>
      <h1>Ваш эффективный курс чешского языка Slang. 2023</h1>

      <div>
        <div>
          {/* <img
            src="https://czecha2bucket.s3.amazonaws.com/common/note.jpg"
            alt="Hvězda češtiny"
          /> */}
          <p>Hvězda češtiny</p>
        </div>
        <a href={`/instructions`}>!!Инструкция к урокам!!</a>
      </div>

      <Link
        style={{
          cursor: "pointer",
        }}
        to={`lectures`}
      >
        <h2>Эффективный курс чешского A2+</h2>
        <p>
          <strong>25 уроков.</strong> Дарья Мацак. Видеолекции и упражнения для
          подготовки к урокам со 100% практикой.
        </p>
      </Link>
    </div>
  );
};

export default Root;