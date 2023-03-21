import React, { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const importLecture = (lectureId: string) => {
  return lazy(() =>
    import(`../components/Lectures/Lecture_${lectureId}`).catch(
      () => import(`../components/Lectures/NullLecture`)
    )
  );
};

const Lecture: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const { lectureId } = useParams();
  const [lecture, setLecture] = useState<any>(null);

  useEffect(() => {
    const loadLecture = async (id: string) => {
      const Lecture = await importLecture(id);
      setLecture(<Lecture />);
    };

    if (lectureId) {
      loadLecture(lectureId);
    }
  }, [lectureId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <CurrentLecture /> */}
      {lecture}
    </Suspense>
  );
};

export default Lecture;
