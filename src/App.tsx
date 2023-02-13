import { useState } from "react";
import { Player } from "video-react";
import { useQuery, gql } from "@apollo/client";

const muxLink = "https://stream.mux.com";

const GET_LECTURES = gql`
  query GetLecture {
    lectures(filters: { name: { eq: "lecture_1" } }) {
      data {
        id
        attributes {
          name
          video
        }
      }
    }
  }
`;

const GET_VIDEO = gql`
  query {
    muxVideoUploaderMuxAssets {
      data {
        attributes {
          playback_id
          title
        }
      }
    }
  }
`;

export interface Video {
  attributes: {
    playback_id: string;
    title: string;
  };
}

const App = () => {
  const { loading, error, data } = useQuery(GET_LECTURES);
  const {
    loading: videoLoading,
    error: videoError,
    data: videoData,
  } = useQuery(GET_VIDEO);

  const [videoLinks, setVideoLinks] = useState<string[]>([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  if (videoData && data) {
    const links: string[] = [];
    data.lectures.data[0].attributes.video.map((name: string) => {
      const playback_id = videoData.muxVideoUploaderMuxAssets.data.find(
        (v: Video) => v.attributes.title === name
      ).playback_id;

      links.push(`${muxLink}/${playback_id}.m3u8`);
    });

    setVideoLinks(links);
  }

  return (
    <div className="container">
      <div>
        <h1 className="text-center">1. lekce</h1>
        <p> Opakování sloves «být», «mít» a časování sloves </p>
        <a href="next">Следующий урок</a>
      </div>
      <div>
        <h1>Добрый день, дорогие друзья!</h1>
      </div>

      <div>
        <p>А теперь к темам А2</p>
        <p>
          Мы повторим все что связанно с глаголами, научимся будущему времени и
          поймём вид глаголов. Узнаём все слова в теме „Жилье“, о названиях
          комнат, как снимать, где искать и многое другое.
        </p>
        <p>
          Повторим все падежи в единственном числе, научим вас работать с
          удобной таблицей. Выучим все падежи во множественном числе. Плюс вы
          узнаете какие глаголы „хитрые“ и ведут себя не так как в русском,
          украинском, белорусском. Пополним словарный запас на очень важную тему
          „Работа“. Научим вас хитростям в окончаниях, и вы не будете в них
          путаться.
        </p>
        <p>
          Разберём тему „Хобби и свободное время“, что позволит вам поддерживать
          общение, интересоваться и говорить о себе и своей семье.
        </p>
        <p>
          Охватим глобальную тему „Здоровье“. Она будет в конце курса, так как
          предполагает более глубокого знания языка. Поговорим о характере
          человека и научимся правильно обращаться к людям (vokativ).
        </p>
        <p>Вот что нас с вами ждёт на курсе А2.</p>
        <p>
          Команда Slang. переживает и держит пальцы за каждого. Мы будем также
          рады получить обратную связь о нашем курсе.
        </p>
      </div>

      <div>
        <h1>OPAKOVÁNÍ SLOVESA «BÝT»</h1>
        <p>Sloveso "být" переводится как "есть".</p>
        <p>
          В отличии от русского, украинского и белорусского, в чешском языке
          используется более часто. Например, на русском мы говорим: Я Даша.
        </p>
        <p>
          Но в чешском ВСЕГДА должен быть какой-то активный глагол. Например: Я
          есть Даша. Она есть высокая. Лампа есть белая. Они есть из Франции.
        </p>
        <div>
          <p>Посмотрите видео.</p>
          {videoLinks.length !== 0 && (
            <Player playsInline src={`${muxLink}/${videoLinks[0]}`} />
          )}
        </div>
        <div>
          <p>Ниже представлена таблица "Спряжение глагола «být»".</p>
          <p>
            Вы можете её сохранить и распечатать, либо переписать в свою рабочую
            тетрадь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
