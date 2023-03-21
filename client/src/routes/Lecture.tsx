import React, { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { matchLectureNames } from "../utils/lectures";

const importLecture = (lectureId: string) => {
  return lazy(() => import(`../components/Lectures/Lecture${lectureId}`));
};

const Lecture: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { lectureId } = useParams();
  const [lecture, setLecture] = useState<any>(null);

  useEffect(() => {
    const loadLecture = async (id: string) => {
      const numId: number = +id;
      const name = matchLectureNames[numId - 1]?.name;
      if (name) {
        const Lecture = await importLecture(name);
        setLecture(<Lecture />);
      } else {
        setLecture(<div>No Such Lecture</div>);
      }
    };

    if (lectureId) {
      loadLecture(lectureId);
    }
  }, [lectureId]);

  return <Suspense fallback={<div>Loading...</div>}>{lecture}</Suspense>;
};

export default Lecture;
