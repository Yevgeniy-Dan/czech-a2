import Lecture_1 from "components/Lectures/Lecture_1";
import Lecture_2 from "components/Lectures/Lecture_2";
import Lecture_3 from "components/Lectures/Lecture_3";
import Lecture_4 from "components/Lectures/Lecture_4";
import Lecture_5 from "components/Lectures/Lecture_5";
import Lecture_6 from "components/Lectures/Lecture_6";
import Lecture_7 from "components/Lectures/Lecture_7";
import ErrorPage from "ErrorPage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Lecture: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { lectureId } = useParams();
  const [lecture, setLecture] = useState<any>(null);

  useEffect(() => {
    if (lectureId) {
      switch (lectureId) {
        case "1":
          setLecture(<Lecture_1 />);
          break;
        case "2":
          setLecture(<Lecture_2 />);
          break;
        case "3":
          setLecture(<Lecture_3 />);
          break;
        case "4":
          setLecture(<Lecture_4 />);
          break;
        case "5":
          setLecture(<Lecture_5 />);
          break;
        case "6":
          setLecture(<Lecture_6 />);
          break;
        case "7":
          setLecture(<Lecture_7 />);
          break;
        default:
          setLecture(<ErrorPage />);
          break;
      }
    }
  }, [lectureId]);

  return <>{lecture}</>;
};

export default Lecture;
