import React, { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";

const Lecture: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { lectureId } = useParams();

  const CurrentLecture = lazy(
    () => import(`../components/lectures/Lecture_${lectureId}`)
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CurrentLecture />
    </Suspense>
  );
};

export default Lecture;
