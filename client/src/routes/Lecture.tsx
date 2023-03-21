import LectureFive from "components/Lectures/LectureFive";
import LectureFour from "components/Lectures/LectureFour";
import LectureSeven from "components/Lectures/LectureSeven";
import LectureSix from "components/Lectures/LectureSix";
import LectureThree from "components/Lectures/LectureThree";
import LectureTwo from "components/Lectures/LectureTwo";
import ErrorPage from "ErrorPage";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LectureOne from "../components/Lectures/LectureOne";

const Lecture: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { lectureId } = useParams();
  const [lecture, setLecture] = useState<any>(null);

  // useEffect(() => {
  //   if (lectureId) {
  //     switch (lectureId) {
  //       case "1":
  //         setLecture(<Lecture_1 />);
  //         break;
  //       case "2":
  //         setLecture(<Lecture_2 />);
  //         break;
  //       case "3":
  //         setLecture(<Lecture_3 />);
  //         break;
  //       case "4":
  //         setLecture(<Lecture_4 />);
  //         break;
  //       case "5":
  //         setLecture(<Lecture_5 />);
  //         break;
  //       case "6":
  //         setLecture(<Lecture_6 />);
  //         break;
  //       case "7":
  //         setLecture(<Lecture_7 />);
  //         break;
  //       default:
  //         setLecture(<ErrorPage />);
  //         break;
  //     }
  //   }
  // }, [lectureId]);

  if (lectureId) {
    switch (lectureId) {
      case "1":
        return <LectureOne />;
      case "2":
        return <LectureTwo />;
      case "3":
        return <LectureThree />;
      case "4":
        return <LectureFour />;
      case "5":
        return <LectureFive />;
      case "6":
        return <LectureSix />;
      case "7":
        return <LectureSeven />;
      default:
        break;
    }
  }

  return <ErrorPage />;
};

export default Lecture;
