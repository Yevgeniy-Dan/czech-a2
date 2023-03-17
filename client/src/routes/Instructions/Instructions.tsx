import React from "react";
import { Link } from "react-router-dom";

const Instructions: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return (
    <div>
      <div>
        <Link to={"/admin"}>
          Ваш эффективный курс чешского языка Slang. 2023
        </Link>
      </div>
      <div>
        <h1>!!ИНСТРУКЦИЯ К УРОКАМ!!</h1>
        <Link to=""> Следующий урок </Link>
      </div>

      <div>
        <section>
          <h2>Добрый день, дорогие друзья!</h2>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/instructions/Author.jpg"
            alt="Author"
          />
          <p>
            <strong>
              <i>Добро пожаловать на вводный урок!</i>
            </strong>
          </p>
          <p>
            Мы собрали тут всю самую важную техническую информацию о том, как
            будет происходить ваше обучение. Пожалуйста, прочитайте эту
            инструкцию внимательно.
          </p>
          <p>
            Я буду вашим проводником в мир чешской грамматики - особенностей и
            нюансов чешского языка и буду вам максимально понятно подавать
            информацию, чтобы она легко запоминалась.
          </p>
          <p>
            В лекциях у вас будут задания с ключами, тесты, диалоги, тексты,
            картинки, записанные голосом темы и материалы из аутентичных
            источников.
          </p>
          <p>
            А те, кто захотят выбрать максимальный пакет, смогут заниматься с
            преподавателем ещё и один на один.
          </p>
          <p>
            Если у вас появятся вопросы или предложения, пишите вашему
            преподавателю, менеджеру школы или тех. поддержке.
          </p>
          <p>
            <strong>
              <i>До встречи на лекциях!</i>
            </strong>
          </p>
          <p>
            <strong>
              <i>Директор школы Дарья Мацак </i>
            </strong>
          </p>
        </section>

        <section>
          <h1>Что необходимо сделать перед началом занятий</h1>
          <div>
            <p>
              1 этап
              <img
                src="https://czecha2bucket.s3.amazonaws.com/instructions/icon_1.png"
                alt=""
                width={20}
                height={20}
              />
            </p>
            <p>Скачайте и распечатайте рабочую тетрадь.</p>
            <div>
              <a
                href="https://czecha2bucket.s3.amazonaws.com/instructions/210x297_Pracovni+sesit+A2.pdf"
                target="blank"
              >
                Скачать рабочую терадь A2
              </a>
            </div>

            <div>
              <a
                href="https://czecha2bucket.s3.amazonaws.com/instructions/%D0%9A%D0%BB%D1%8E%D1%87%D0%B8+%D0%902.pdf"
                target="blank"
              >
                Ключ A2
              </a>
            </div>
          </div>

          <div>
            <p>
              2 этап
              <img
                src="https://czecha2bucket.s3.amazonaws.com/instructions/icon_2.png"
                alt=""
                width={20}
                height={20}
              />
            </p>

            <Link to="windows">Как установить на Windows</Link>
          </div>

          <div>
            <p>
              3 этап
              <img
                src="https://czecha2bucket.s3.amazonaws.com/instructions/icon_3.png"
                alt=""
                width={20}
                height={20}
              />
            </p>

            <p>Установить приложение GetCourse на свой смартфон.</p>

            <Link to="">Как установить приложение</Link>
          </div>
        </section>
      </div>

      <div>
        <p>
          <strong>
            Возникли сложности или вопросы? Звоните! Мы всегда рады помочь!
          </strong>
        </p>
        <p>+420 608 870 909 менеджер Ирина</p>
        <p>+420 608 790 124 менеджер Виктория (говорит на украинском)</p>
        <p>Рабочее время менеджеров с 9:00 до 19:00 по Праге</p>
        <p>
          На этом наш вводный урок окончен. Доступ к лекциям курса откроется вам
          за <strong>5 дней до старта.</strong>
        </p>
        <p>До встречи!</p>
      </div>
    </div>
  );
};

export default Instructions;
