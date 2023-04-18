import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";
import GreenBox from "../UI/GreenBox";
import { Link } from "react-router-dom";

const LectureFifteen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(13);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">15. lekce</h1>
        <p>Slu&#x17E;by</p>

        <Link to="/admin/lectures/14">Предыдущий урок</Link>
        <Link to="/admin/lectures/16">Следующий урок</Link>
      </div>

      <h2 className="text-center">
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          V t&#xE9;hle lekci se budeme bavit o r&#x16F;zn&#xFD;ch
          slu&#x17E;b&#xE1;ch, kter&#xE9; pou&#x17E;&#xED;v&#xE1;te skoro
          ka&#x17E;d&#xFD; den.
        </em>
      </p>
      <p>
        <em>
          A to je po&#x161;ta, slu&#x17E;by kr&#xE1;sy, opravna obuvi,
          slu&#x17E;ba hodinov&#xE9;ho man&#x17E;ela a banka.
        </em>
      </p>
      <p>
        <em>
          &#x10C;ekaj&#xED; na v&#xE1;s audia, texty, videa, cvi&#x10D;en&#xED;
          a mluven&#xED;.
        </em>
      </p>
      <h2 className="text-center">SLU&#x17D;BY</h2>

      <div className="text-center">
        <p>
          <strong>
            Pro procvi&#x10D;ov&#xE1;n&#xED; slovn&#xED; z&#xE1;soby jsme
            p&#x159;ipravili pro V&#xE1;s karti&#x10D;ky na Quizlet:
          </strong>
        </p>
        <p>
          <a href="https://quizlet.com/_cw9ykx?x=1jqt&i=3zq2hw" target="blank">
            OTEV&#x158;&#xCD;T KARTI&#x10C;KY
          </a>
        </p>
      </div>
      <p className="bg-warning fw-bold">
        <strong>
          St&#xE1;hn&#x11B;te si soubor Slovn&#xED; z&#xE1;soba - Slu&#x17E;by.
        </strong>
      </p>
      <p>
        671.88 &#x41A;&#x411;
        <br />
        <a
          href="https://czecha2bucket.s3.amazonaws.com/lekce_15/Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby.pdf"
          target="blank"
        >
          Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by
        </a>
      </p>
      <p className="bg-warning fw-bold">
        <strong>
          Poslechnete si audia Slovn&#xED; z&#xE1;soba - Slu&#x17E;by.
        </strong>
      </p>
      <div>
        <div>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_15/1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby+-+Pracovis%CC%8Cte%CC%8C.mp3"
            ></audio>
            <figcaption>
              <strong>
                1. Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by -
                Pracovis&#x30C;te&#x30C;
              </strong>
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_15/2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby+-+%C4%8Cinnosti.mp3"
            ></audio>
            <figcaption>
              <strong>
                2. Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by -
                &#x10C;innosti
              </strong>
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_15/3.1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby+-+Pos%CC%8Cta.mp3"
            ></audio>
            <figcaption>
              <strong>
                3.1. Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by -
                Pos&#x30C;ta
              </strong>
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_15/3.2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby+-+Pos%CC%8Cta.mp3"
            ></audio>
            <figcaption>
              <strong>
                3.2. Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by -
                Pos&#x30C;ta
              </strong>
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_15/4.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby+-+Banka.mp3"
            ></audio>
            <figcaption>
              <strong>
                4. Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by - Banka
              </strong>
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_15/5.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby+-+Sme%CC%8Cna%CC%81rna.mp3"
            ></audio>
            <figcaption>
              <strong>
                5. Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by -
                Sme&#x30C;na&#x301;rna
              </strong>
            </figcaption>
          </figure>
        </div>

        <div>
          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_15/6.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Slu%C5%BEby+-+Pojis%CC%8Ct%CC%8Covna.mp3"
            ></audio>
            <figcaption>
              <strong>
                6. Slang - Slovn&#xED; z&#xE1;soba - Slu&#x17E;by -
                Pojis&#x30C;t&#x30C;ovna Sme&#x30C;na&#x301;rna
              </strong>
            </figcaption>
          </figure>
        </div>
      </div>
      <p className="fw-bold bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1.1
          &#x43F;&#x43E; &#x2116; 18
        </strong>
      </p>
      <p>
        <strong>
          1.1. Jak&#xE9; slu&#x17E;by to jsou? Dopl&#x148;te k symbol&#x16F;m.
        </strong>
      </p>
      <div className="d-flex column">
        <div>
          <p>
            A) &#x10C;ist&#xED;rna
            <br />
            B) Kade&#x159;nictv&#xED;
            <br />
            C) O&#x10D;n&#xED; optika
            <br />
            D) Autoservis
            <br />
            E) Opravna obuvi
          </p>
        </div>
        <div>
          <p>
            F) Mas&#xE1;&#x17E;
            <br />
            G) Benz&#xED;nov&#xE1; pumpa
            <br />
            H) Kosmetika
            <br />
            I) Pedik&#xFA;ra
            <br />
            K) &#x160;vadlena
          </p>
        </div>
      </div>

      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_15/picture_1.jpg"
          alt="picture_1"
        />
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic d-flex flex-row">
            <p>
              1) — B) <br />
              2) — C)
              <br />
              3) — D)
              <br />
              4) — A)
              <br />
              5) — I)
              <br />
            </p>
            <p>
              6) — F) <br />
              7) — E) <br />
              8) — H) <br />
              9) — G) <br />
              10) — K) <br />
            </p>
          </div>
        </Collapse>
      </div>

      <GreenBox
        header="Внимание! Задание № 1.2 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          1.2. Odpov&#x11B;zte na n&#xE1;sleduj&#xED;c&#xED; ot&#xE1;zky.
        </strong>
      </p>
      <p>
        1) Jak&#xE9; slu&#x17E;by vyu&#x17E;&#xED;v&#xE1;te
        nej&#x10D;ast&#x11B;ji? Jak &#x10D;asto?
        <br />
        2) Jak&#xE9; slu&#x17E;by naopak nikdy nevyu&#x17E;&#xED;v&#xE1;te?
        Pro&#x10D;?
        <br />
        3) S jakou slu&#x17E;bou jste nebyl(a) spokojen(&#xE1;)?
      </p>
      <h2 className="text-center">PO&#x160;TA</h2>

      <p>
        <strong>
          2. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; obr&#xE1;zky a
          p&#x159;i&#x159;a&#x10F;te spr&#xE1;vn&#xE1; slova podle
          obr&#xE1;zk&#x16F;.
        </strong>
      </p>
      <div className="d-flex column">
        <div>
          <p>
            A) Pohled / pohlednice
            <br />
            B) Ob&#xE1;lka
            <br />
            C) Po&#x161;&#x165;&#xE1;k
            <br />
            D) Po&#x161;ta
            <br />
            E) Adresa
            <br />
          </p>
        </div>
        <div>
          <p>
            F) Schr&#xE1;nka, schr&#xE1;nka na dopisy
            <br />
            G) Bal&#xED;k / bal&#xED;&#x10D;ek
            <br />
            H) Raz&#xED;tko
            <br />
            I) Zn&#xE1;mka (po&#x161;tovn&#xED;)
          </p>
        </div>
      </div>

      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_15/picture_2.jpg"
          alt="picture_2"
        />
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic d-flex flex-row">
            <p>
              1) — E) <br />
              2) — B) <br />
              3) — G) <br />
              4) — D) <br />
              5) — F) <br />
            </p>
            <p>
              6) — A) <br />
              7) — C) <br />
              8) — H) <br />
              9) — I) <br />
            </p>
          </div>
        </Collapse>
      </div>

      <p>
        <strong>
          3. Na obr&#xE1;zku vid&#xED;te slo&#x17E;enku. Zkuste si ji vyplnit.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_15/picture_3.jpg"
          alt="picture_3"
        />
      </p>
      <p>
        <strong>
          Informace, kter&#xE9; budete pot&#x159;ebovat k vypln&#x11B;n&#xED;:
        </strong>
      </p>
      <p>
        <strong>&#x10C;&#xE1;stka:</strong> 1 000 K&#x10D;
        <br />
        <strong>Va&#x161;e &#xFA;daje:</strong> Jan Nov&#xE1;k, Nov&#xE1; Ulice
        1, PS&#x10C; 779 01, Olomouc
        <br />
        <strong>N&#xE1;zev &#xFA;&#x159;adu:</strong> Finan&#x10D;n&#xED;
        &#xFA;&#x159;ad pro Olomouck&#xFD; kraj
        <br />
        <strong>&#x10C;&#xED;slo &#xFA;&#x10D;tu:</strong> 721-47623811
        <br />
        <strong>Variabiln&#xED; symbol:</strong> 7902036151
      </p>

      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_15/picture_4.jpg"
          alt="picture_4"
        />
      </p>
      <p>
        <strong>
          4. Na obr&#xE1;zku vid&#xED;te podac&#xED; l&#xED;stek. Zkuste si ho
          vyplnit.
        </strong>
      </p>
      <p className="bg-wargnin fw-bold">
        <strong>
          &#x423;&#x442;&#x43E;&#x447;&#x43D;&#x435;&#x43D;&#x438;&#x435;
          &#x43E;&#x442; &#x414;&#x430;&#x440;&#x44C;&#x438;.
        </strong>
      </p>
      <p className="text-danger">
        <strong>
          <em>
            Na obr&#xE1;zku m&#xE1;te vzor podac&#xED;ho l&#xED;stku, kter&#xFD;
            mus&#xED;te na po&#x161;t&#x11B; vyplnit, pokud odes&#xED;l&#xE1;te
            dopis / z&#xE1;silku doporu&#x10D;en&#x11B;.
          </em>
        </strong>
      </p>
      <p className="text-danger">
        <strong>
          <em>
            V&#x17E;dy vypl&#x148;ujete pouze &#xFA;daje adres&#xE1;ta a
            odes&#xED;latele. Pod&#xED;vejte se na vzor a zkuste si vyplnit
            sv&#x16F;j podac&#xED; l&#xED;stek z p&#x159;edchoz&#xED;ho
            &#xFA;kolu.
          </em>
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_15/picture_5.png"
          alt="picture_5"
        />
      </p>
      <p>
        <strong>
          Informace, kter&#xE9; budete pot&#x159;ebovat k vypln&#x11B;n&#xED;:
        </strong>
      </p>
      <p>
        <strong>Va&#x161;e jm&#xE9;no a p&#x159;&#xED;jmen&#xED;:</strong>
        Lud&#x11B;k Hamr
        <br />
        <strong>Va&#x161;e adresa:</strong> Dra&#x17E;i&#x10D;ky 33, PS&#x10C;
        391 75, Male&#x161;ice
        <br />
        <strong>V&#xE1;&#x161;e telefonn&#xED; &#x10D;&#xED;slo:</strong> 723
        808 490
        <br />
        <strong>
          Jm&#xE9;no a p&#x159;&#xED;jmen&#xED; p&#x159;&#xED;jemce:
        </strong>
        Milan &#x10C;is&#xE1;r
        <br />
        <strong>Adresa p&#x159;&#xED;jemnce:</strong> Suvorovov&#xE1; 691,
        PS&#x10C; 339 01, Klatovy
      </p>

      <GreenBox
        header="Внимание! Задание № 5 проверит преподаватель."
        text="Ответы напишите от руки, сфотографируйте и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p className="text-danger">
        <em>Pros&#xED;m, pi&#x161;te &#x10D;iteln&#x11B;.</em>
      </p>
      <p>
        <strong>
          5. P&#x159;edstavte si n&#xE1;sleduj&#xED;c&#xED; situaci na
          po&#x161;t&#x11B;. N&#xE1;sleduj&#xED;c&#xED; dialog v
          ru&#x161;tin&#x11B; si zkuste p&#x159;elo&#x17E;it.
        </strong>
      </p>
      <p>
        <strong>
          &#x41F;&#x43E;&#x447;&#x442;&#x43E;&#x432;&#x430;&#x44F;
          &#x441;&#x43B;&#x443;&#x436;&#x430;&#x449;&#x430;&#x44F;:
        </strong>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;!
        &#x412;&#x44B; &#x445;&#x43E;&#x442;&#x438;&#x442;&#x435;
        &#x43E;&#x442;&#x43F;&#x440;&#x430;&#x432;&#x438;&#x442;&#x44C;
        &#x44D;&#x442;&#x43E; &#x43F;&#x438;&#x441;&#x44C;&#x43C;&#x43E; &#x432;
        &#x410;&#x43B;&#x436;&#x438;&#x440;, &#x442;&#x43E;&#x433;&#x434;&#x430;
        &#x412;&#x430;&#x43C;
        &#x43D;&#x435;&#x43E;&#x431;&#x445;&#x43E;&#x434;&#x438;&#x43C;&#x43E;
        &#x43F;&#x440;&#x438;&#x43E;&#x431;&#x440;&#x435;&#x441;&#x442;&#x438;
        &#x438; &#x43D;&#x430;&#x43A;&#x43B;&#x435;&#x438;&#x442;&#x44C;
        &#x432;&#x43E;&#x442; &#x44D;&#x442;&#x438; &#x434;&#x432;&#x435;
        &#x43C;&#x430;&#x440;&#x43A;&#x438;. &#x415;&#x441;&#x43B;&#x438;
        &#x430;&#x434;&#x440;&#x435;&#x441;
        &#x432;&#x435;&#x440;&#x43D;&#x44B;&#x439;, &#x442;&#x43E;
        &#x43F;&#x438;&#x441;&#x44C;&#x43C;&#x43E;
        &#x43C;&#x43E;&#x436;&#x43D;&#x43E;
        &#x43E;&#x442;&#x43F;&#x440;&#x430;&#x432;&#x43B;&#x44F;&#x442;&#x44C;.
        &#x412;&#x44B; &#x445;&#x43E;&#x442;&#x438;&#x442;&#x435;
        &#x43F;&#x43E;&#x441;&#x43B;&#x430;&#x442;&#x44C;
        &#x437;&#x430;&#x43A;&#x430;&#x437;&#x43D;&#x43E;&#x435;
        &#x43F;&#x438;&#x441;&#x44C;&#x43C;&#x43E; &#x441;
        &#x443;&#x432;&#x435;&#x434;&#x43E;&#x43C;&#x43B;&#x435;&#x43D;&#x438;&#x435;&#x43C;
        &#x43E; &#x435;&#x433;&#x43E;
        &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438;?
        <br />
        <strong>&#x413;&#x435;&#x440;&#x434;&#x430;:</strong>
        &#x41F;&#x43E;&#x436;&#x430;&#x43B;&#x443;&#x439;&#x441;&#x442;&#x430;,
        &#x441;
        &#x443;&#x432;&#x435;&#x434;&#x43E;&#x43C;&#x43B;&#x435;&#x43D;&#x438;&#x435;&#x43C;
        &#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438;.
        <br />
        <strong>
          &#x41F;&#x43E;&#x447;&#x442;&#x43E;&#x432;&#x430;&#x44F;
          &#x441;&#x43B;&#x443;&#x436;&#x430;&#x449;&#x430;&#x44F;:
        </strong>
        &#x425;&#x43E;&#x440;&#x43E;&#x448;&#x43E;, &#x441;
        &#x412;&#x430;&#x448;&#x438;&#x43C;
        &#x43F;&#x438;&#x441;&#x44C;&#x43C;&#x43E;&#x43C; &#x432;&#x441;&#x435;
        &#x43F;&#x43E;&#x43D;&#x44F;&#x442;&#x43D;&#x43E;. &#x410;
        &#x447;&#x442;&#x43E; &#x442;&#x430;&#x43C; &#x441;
        &#x43F;&#x43E;&#x441;&#x44B;&#x43B;&#x43A;&#x43E;&#x439;?
        <br />
        <strong>&#x413;&#x435;&#x440;&#x434;&#x430;:</strong>
        &#x41C;&#x43E;&#x44F; &#x43C;&#x430;&#x442;&#x44C;
        &#x43F;&#x440;&#x438;&#x441;&#x43B;&#x430;&#x43B;&#x430;
        &#x43C;&#x43D;&#x435; &#x43F;&#x43E;&#x441;&#x44B;&#x43B;&#x43A;&#x443;
        &#x438;&#x437; &#x410;&#x43B;&#x436;&#x438;&#x440;&#x430;, &#x438;
        &#x44F;
        &#x43F;&#x440;&#x435;&#x434;&#x43F;&#x43E;&#x43B;&#x430;&#x433;&#x430;&#x44E;,
        &#x447;&#x442;&#x43E; &#x432; &#x44D;&#x442;&#x43E;&#x43C;
        &#x441;&#x43B;&#x443;&#x447;&#x430;&#x435;
        &#x434;&#x43E;&#x43B;&#x436;&#x43D;&#x44B; &#x431;&#x44B;&#x442;&#x44C;
        &#x432;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x435;&#x43D;&#x44B;
        &#x43E;&#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x451;&#x43D;&#x43D;&#x44B;&#x435;
        &#x442;&#x430;&#x43C;&#x43E;&#x436;&#x435;&#x43D;&#x43D;&#x44B;&#x435;
        &#x444;&#x43E;&#x440;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x441;&#x442;&#x438;.
        <br />
        <strong>
          &#x41F;&#x43E;&#x447;&#x442;&#x43E;&#x432;&#x430;&#x44F;
          &#x441;&#x43B;&#x443;&#x436;&#x430;&#x449;&#x430;&#x44F;:
        </strong>
        &#x412;&#x441;&#x451; &#x432;&#x435;&#x440;&#x43D;&#x43E;.
        &#x412;&#x44B; &#x434;&#x43E;&#x43B;&#x436;&#x43D;&#x44B;
        &#x435;&#x449;&#x451;
        &#x443;&#x43F;&#x43B;&#x430;&#x442;&#x438;&#x442;&#x44C;
        &#x43F;&#x43E;&#x448;&#x43B;&#x438;&#x43D;&#x443;.
        &#x41E;&#x434;&#x43D;&#x430;&#x43A;&#x43E; &#x43E;&#x43D;&#x430;
        &#x43D;&#x435; &#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x430;&#x44F;.
        <br />
        <strong>&#x413;&#x435;&#x440;&#x434;&#x430;:</strong>
        &#x425;&#x43E;&#x440;&#x43E;&#x448;&#x43E;, &#x44F;
        &#x441;&#x435;&#x439;&#x447;&#x430;&#x441; &#x432;&#x441;&#x435;
        &#x441;&#x434;&#x435;&#x43B;&#x430;&#x44E;. &#x418;
        &#x437;&#x430;&#x442;&#x435;&#x43C; &#x44F; &#x445;&#x43E;&#x447;&#x443;
        &#x435;&#x449;&#x451;
        &#x43E;&#x442;&#x43F;&#x440;&#x430;&#x432;&#x438;&#x442;&#x44C;
        &#x43C;&#x43E;&#x435;&#x439; &#x43C;&#x430;&#x442;&#x435;&#x440;&#x438;
        &#x442;&#x435;&#x43B;&#x435;&#x433;&#x440;&#x430;&#x43C;&#x43C;&#x443;,
        &#x447;&#x442;&#x43E; &#x441; &#x435;&#x451;
        &#x43F;&#x43E;&#x441;&#x44B;&#x43B;&#x43A;&#x43E;&#x439;
        &#x432;&#x441;&#x435; &#x432;
        &#x43F;&#x43E;&#x440;&#x44F;&#x434;&#x43A;&#x435;.
        <br />
        <strong>
          &#x41F;&#x43E;&#x447;&#x442;&#x43E;&#x432;&#x430;&#x44F;
          &#x441;&#x43B;&#x443;&#x436;&#x430;&#x449;&#x430;&#x44F;:
        </strong>
        &#x417;&#x430;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;,
        &#x43F;&#x43E;&#x436;&#x430;&#x43B;&#x443;&#x439;&#x441;&#x442;&#x430;,
        &#x44D;&#x442;&#x43E;&#x442; &#x431;&#x43B;&#x430;&#x43D;&#x43A;,
        &#x432;&#x43F;&#x438;&#x448;&#x438;&#x442;&#x435; &#x438;&#x43C;&#x44F;
        &#x43E;&#x442;&#x43F;&#x440;&#x430;&#x432;&#x438;&#x442;&#x435;&#x43B;&#x44F;,
        &#x435;&#x433;&#x43E; &#x430;&#x434;&#x440;&#x435;&#x441;,
        &#x438;&#x43C;&#x44F;
        &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x442;&#x435;&#x43B;&#x44F;,
        &#x435;&#x433;&#x43E; &#x430;&#x434;&#x440;&#x435;&#x441; &#x438;
        &#x412;&#x430;&#x448; &#x442;&#x435;&#x43A;&#x441;&#x442;. &#x418;
        &#x43D;&#x435; &#x437;&#x430;&#x431;&#x443;&#x434;&#x44C;&#x442;&#x435;
        &#x43F;&#x440;&#x43E; &#x438;&#x43D;&#x434;&#x435;&#x43A;&#x441;&#x44B;!
        <br />
        <strong>&#x413;&#x435;&#x440;&#x434;&#x430;:</strong>
        &#x425;&#x43E;&#x440;&#x43E;&#x448;&#x43E;, &#x44F;
        &#x443;&#x436;&#x435; &#x432;&#x441;&#x435;
        &#x441;&#x434;&#x435;&#x43B;&#x430;&#x43B;&#x430;.
        &#x411;&#x43E;&#x43B;&#x44C;&#x448;&#x43E;&#x435;
        &#x441;&#x43F;&#x430;&#x441;&#x438;&#x431;&#x43E; &#x437;&#x430;
        &#x412;&#x430;&#x448;&#x443; &#x43F;&#x43E;&#x43C;&#x43E;&#x449;&#x44C;
        &#x438; &#x434;&#x43E;
        &#x441;&#x432;&#x438;&#x434;&#x430;&#x43D;&#x438;&#x44F;!
        <br />
        <strong>
          &#x41F;&#x43E;&#x447;&#x442;&#x43E;&#x432;&#x430;&#x44F;
          &#x441;&#x43B;&#x443;&#x436;&#x430;&#x449;&#x430;&#x44F;:
        </strong>
        &#x414;&#x43E; &#x441;&#x432;&#x438;&#x434;&#x430;&#x43D;&#x438;&#x44F;!
      </p>
      <p>
        <strong>
          6. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; &#x10D;l&#xE1;nek a
          dopl&#x148;te vynechan&#xE1; slova.
        </strong>
      </p>
      <div>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_15/Slang-%D0%AF+%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8E+%D0%BF%D0%BE-%D1%87%D0%B5%D1%88%D1%81%D0%BA%D0%B8-%D0%902-11.Lekce-6.mp3"
          ></audio>
          <figcaption>
            <strong>Slang-Я говорю по-чешски-А2-11.Lekce-6</strong>
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>
          Po&#x161;ta chyst&#xE1; p&#x159;esun 250 pobo&#x10D;ek. Jsou
          drah&#xE9; a &#x161;patn&#x11B; dostupn&#xE9;.
        </strong>
      </p>
      <p>
        &#x10C;esk&#xE1; po&#x161;ta chyst&#xE1; krom&#x11B; zm&#x11B;ny
        &#x2026; &#x2026; v bl&#xED;zk&#xE9; dob&#x11B; tak&#xE9;
        dal&#x161;&#xED; novinky: p&#x159;esun 250 &#x2026; , v&#xFD;dej
        po&#x161;tovn&#xED;ch &#x2026; v obchodech a trafik&#xE1;ch a &#x2026;
        &#x2026; . Exkluzivn&#x11B; p&#x159;in&#xE1;&#x161;&#xED;me podrobnosti.
      </p>
      <p>
        &#x10C;esk&#xE1; po&#x161;ta v pond&#x11B;l&#xED; informovala &#x2026;
        &#x2026; pracovn&#xED; doby na zhruba 1 500 pobo&#x10D;k&#xE1;ch.
        Dal&#x161;&#xED; v po&#x159;ad&#xED; je p&#x159;esun zhruba 250 &#x2026;
        . Pl&#xE1;ny v&#xFD;razn&#x11B; zbrzdil covid. Po&#x161;ta si
        ud&#x11B;lala p&#x159;ehled, kter&#xE9; chce p&#x159;est&#x11B;hovat
        &#x2014; bude to pouze v r&#xE1;mci dan&#xE9;ho m&#x11B;sta a mus&#xED;
        p&#x159;itom dodr&#x17E;et normativ &#x10C;esk&#xE9;ho
        telekomunika&#x10D;n&#xED;ho &#xFA;&#x159;adu, aby 95 procent
        ob&#x10D;an&#x16F; m&#x11B;lo k po&#x161;t&#x11B; doch&#xE1;zkovou
        vzd&#xE1;lenost nanejv&#xFD;&#x161; 2,5 kilometru. Nem&#x16F;&#x17E;e
        tedy doch&#xE1;zet nap&#x159;&#xED;klad na periferii m&#x11B;sta.
      </p>
      <p>
        Vych&#xE1;z&#xED; n&#xE1;m p&#x159;esunout 250 pobo&#x10D;ek, kter&#xE9;
        nejsou &#x2026; pro st&#xE1;vaj&#xED;c&#xED; provoz &#x2014;
        nap&#x159;&#xED;klad je tam &#x161;patn&#xE1; &#x2026; &#x2026; pro
        n&#xE1;s i pro z&#xE1;kazn&#xED;ka. T&#x159;eba na
        n&#xE1;m&#x11B;st&#xED;ch, kde by z&#xE1;kazn&#xED;k musel platit
        &#x2026; parkov&#xE1;n&#xED;, kdy&#x17E; jde na po&#x161;tu,&quot;
        &#x159;&#xED;k&#xE1; Miroslav &#x160;t&#x11B;p&#xE1;n, &#x159;editel
        pobo&#x10D;kov&#xE9; s&#xED;t&#x11B;.
      </p>
      <p>
        Dal&#x161;&#xED;m d&#x16F;vodem m&#x16F;&#x17E;e b&#xFD;t, &#x17E;e
        samotn&#xFD; vnit&#x159;ek budovy je pro po&#x161;&#x165;&#xE1;ky
        &#x2026; &#x2026; &#x2014; kdy&#x17E; nesou &#x2026; , kter&#xFD;ch se
        p&#x159;epravuje &#x10D;&#xED;m d&#xE1;l v&#xED;c, zat&#xED;mco &#x2026;
        klesaj&#xED;, musej&#xED; p&#x159;ekonat mno&#x17E;stv&#xED;
        dve&#x159;&#xED; a schod&#x16F;, co&#x17E; manipulaci zdr&#x17E;uje.
        Po&#x161;ty se p&#x159;esouvaj&#xED; do n&#xE1;kupn&#xED;ch center, tam,
        kde je koncentrace lid&#xED;, aby mohli v&#x161;e &#x2026; na jednom
        m&#xED;st&#x11B;.
      </p>
      <p>
        <strong>Pro bal&#xED;k do trafiky.</strong>
      </p>
      <p>
        Po&#x161;ta letos do &#x10D;ervence rozjela s&#xED;&#x165;
        extern&#xED;ch &#x2026; Bal&#xED;kovna Partner, m&#x16F;&#x17E;e
        j&#xED;t o lok&#xE1;ln&#xED; obch&#x16F;dek &#x10D;i trafiku. Se
        zpo&#x17E;d&#x11B;n&#xED;m tak po&#x161;ta n&#xE1;sleduje syst&#xE9;m
        konkuren&#x10D;n&#xED; Z&#xE1;silkovny.
      </p>
      <p>
        &#xAB;Ob&#x10D;an si do toho m&#xED;sta m&#x16F;&#x17E;e objednat a
        n&#xE1;sledn&#x11B; &#x2026; bal&#xED;kovou &#x2026; &#x2014;
        nap&#x159;&#xED;klad na e-shopu. Na podzim jich chceme m&#xED;t
        spu&#x161;t&#x11B;no 1 500, zat&#xED;m jich m&#xE1;me 400,&#xBB;
        vypo&#x10D;&#xED;t&#xE1;v&#xE1; &#x160;t&#x11B;p&#xE1;n. C&#xED;lem
        po&#x161;ty je v jedn&#xE9; Bal&#xED;kovn&#x11B; Partner &#x2026;
        a&#x17E; 20 z&#xE1;silek denn&#x11B;, zat&#xED;m je na polovin&#x11B;.
        E-shopy ale nejprve musej&#xED; z&#xE1;kazn&#xED;k&#x16F;m &#x2026;
        &#x2026; nab&#xED;dnout na sv&#xFD;ch webech p&#x159;i
        objedn&#xE1;v&#xE1;n&#xED; zbo&#x17E;&#xED;.
      </p>

      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              otevírací doby, poboček, balíků, bezpřepážkové pobočky, o změně,
              poboček, nevhodné, dopravní dostupnost, za, překážková dráha,
              balíky, dopisy, vyřídit;
            </p>
            <p>provozoven, vyzvednout, zásilku, vydat, takovou možnost.</p>
          </div>
        </Collapse>
      </div>

      <p>
        <strong>
          7. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; dialog a
          dopl&#x148;te vynechan&#xE1; slova.
        </strong>
      </p>

      <div>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_15/Slang-%D0%AF+%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8E+%D0%BF%D0%BE-%D1%87%D0%B5%D1%88%D1%81%D0%BA%D0%B8-%D0%902-11.Lekce-7.mp3"
          ></audio>
          <figcaption>
            <strong>Slang-Я говорю по-чешски-А2-11.Lekce-7</strong>
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>A:</strong> Dobr&#xFD; den, p&#x159;i&#x161;la mi zde
        v&#xFD;zva, &#x17E;e bych si m&#x11B;la &#x2026; n&#x11B;jak&#xFD;
        &#x2026; a doporu&#x10D;en&#xFD; dopis.
      </p>
      <p>
        <strong>B:</strong> Dobr&#xFD; den, tak mi dejte tu v&#xFD;zvu a
        tak&#xE9; &#x2026; &#x2026; , pros&#xED;m.
      </p>
      <p>
        <strong>A:</strong> Ano, hned. Pros&#xED;m.
      </p>
      <p>
        <strong>B:</strong> Ano, tady m&#xE1;te bal&#xED;&#x10D;ek a dopis.
        Popros&#xED;m V&#xE1;s o &#x2026; , &#x17E;e jste p&#x159;evzala
        &#x2026; a dopis.
      </p>
      <p>
        <strong>A:</strong> Hmm, a &#x159;ekla byste mi pros&#xED;m, kdo je
        &#x2026; tohoto dopisu? V&#x16F;bec netu&#x161;&#xED;m, co by to mohlo
        b&#xFD;t.
      </p>
      <p>
        <strong>B:</strong> Bohu&#x17E;el ne, ale pod&#xED;vejte se na &#x2026;
        , z jedn&#xE9; strany m&#xE1;te &#xFA;daje &#x2026; , a pak
        odes&#xED;latele, tak t&#x159;eba V&#xE1;m to napov&#xED;, od koho by to
        mohlo b&#xFD;t.
      </p>
      <p>
        <strong>A:</strong> Ah d&#x11B;kuji, vid&#xED;m to zde. To bude asi
        n&#x11B;jak&#xE1; &#x2026; nebo tak. D&#x11B;kuji, nashledanou.
      </p>
      <p>
        <strong>B:</strong> Nen&#xED; v&#x16F;bec za&#x10D;, m&#x11B;jte se!
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              vyzvednout, balíček, občanský průkaz, podpis, zásilku, odesílatel,
              obálku, adresáta, pokuta.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          &#x422;&#x430;&#x43A; &#x436;&#x435; &#x43A;&#x430;&#x43A; &#x438;
          &#x432; &#x43F;&#x440;&#x43E;&#x448;&#x43B;&#x44B;&#x445;
          &#x43B;&#x435;&#x43A;&#x446;&#x438;&#x44F;&#x445; &#x43C;&#x44B;
          &#x43F;&#x43E;&#x434;&#x43E;&#x431;&#x440;&#x430;&#x43B;&#x438;
          &#x434;&#x43B;&#x44F; &#x432;&#x430;&#x441;
          &#x43F;&#x43E;&#x43B;&#x435;&#x437;&#x43D;&#x44B;&#x435;
          &#x440;&#x435;&#x441;&#x443;&#x440;&#x441;&#x44B; &#x43D;&#x430;
          &#x43F;&#x440;&#x43E;&#x441;&#x442;&#x43E;&#x440;&#x430;&#x445;
          YouTube.
        </strong>
      </p>
      <p>
        <strong>
          8. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video a
          odpov&#x11B;zte na n&#xE1;sleduj&#xED;c&#xED; ot&#xE1;zky.
        </strong>
      </p>
      <p>
        <a href="https://www.youtube.com/watch?v=Dqr3k2Uq-4E&amp;list=PLaoHoy9D79JpJ3LXd3ZAV_g8rbTXVi0sB">
          Na po&#x161;t&#x11B;
        </a>
      </p>
      <p>
        <strong>Ot&#xE1;zky:</strong>
      </p>
      <p>
        1) Jak&#xE9; &#xFA;daje je pot&#x159;eba uv&#xE9;st v adrese?
        <br />
        2) Co je mo&#x17E;n&#xE9; si koupit na po&#x161;t&#x11B;?
        <br />
        3) Co, pro&#x10D; a komu pos&#xED;l&#xE1; Luk&#xE1;&#x161;?
        <br />
        4) V jak&#xE9; dny se po&#x161;ta nerozn&#xE1;&#x161;&#xED;?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Jméno a příjmení adresáta, ulice, číslo domu, místo zaslání
              zásilky, poštovní směrovací číslo
            </p>
            <p>2) Noviny a časopisy</p>
            <p>3) Lukáš posílá babičce pohled, protože má narozeniny.</p>
            <p>4) O víkendu — v sobotu a neděli.</p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          9. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; p&#xED;sni&#x10D;ku
          a dopl&#x148;te vynechan&#xE1; slova. P&#xED;sni&#x10D;ku si
          nezapome&#x148;te zazp&#xED;vat.
        </strong>
      </p>
      <p>
        <a href="https://www.youtube.com/watch?v=LpIj0TpOi7U">
          P&#xED;sni&#x10D;ka - R&#xE1;d chod&#xED;m na po&#x161;tu -
          Pok&#xE1;&#x10D;
        </a>
      </p>
      <p>
        R&#xE1;d chod&#xED;m &#x2026; &#x2026; ,<br />
        nejsem tam jen do po&#x10D;tu
        <br />
        jsem tam &#x2026; &#x10D;len
        <br />
        &#x2026; , kter&#xE1; tr&#x10D;&#xED; ven
        <br />
        v&#x17E;dy kdy&#x17E; se c&#xED;t&#xED;m s&#xE1;m,
        <br />
        r&#xE1;d na po&#x161;tu zav&#xED;t&#xE1;m
        <br />
        tam je tolik lid&#xED;, &#x17E;e
        <br />
        pohnout se &#x2026; &#x2026;
        <br />
        &#x2026; &#x2026; pan&#xED; v letech m&#xE1; &#x2026; gumov&#xE9;
        <br />
        a ob&#x10D;as tiskne &#x2026; z dob prvn&#xED; v&#xE1;lky
        sv&#x11B;tov&#xE9;
        <br />
        ka&#x17E;d&#xE9;mu kdo sp&#xED;l&#xE1; j&#xED; &#x17E;e zas na
        po&#x161;t&#x11B; pros*al den
        <br />
        nab&#xED;dne &#x2026; &#x2026; a&#x165; uklidn&#xED; se hazardem
        <br />
        R&#xE1;d &#x2026; na po&#x161;tu,
        <br />
        nejsem tam jen do po&#x10D;tu
        <br />
        jsem tam d&#x16F;le&#x17E;it&#xFD; &#x10D;len
        <br />
        fronty kter&#xE1; tr&#x10D;&#xED; ven
        <br />
        v&#x17E;dy kdy&#x17E; se c&#xED;t&#xED;m s&#xE1;m,
        <br />
        &#x2026; &#x2026; &#x2026; zav&#xED;t&#xE1;m
        <br />
        tam je tolik lid&#xED;, &#x17E;e
        <br />
        &#x2026; &#x2026; m&#xE1;m pot&#xED;&#x17E;e
        <br />
        pro&#x10D; je v&#x17E;dy jen jedna z p&#x11B;ti &#x2026; &#x2026;
        <br />
        je z&#xE1;hada co nav&#x17E;dy z&#x16F;stat m&#xE1; &#x2026;
        zast&#x159;en&#xE1;
        <br />
        m&#xE1; nejobl&#xED;ben&#x11B;j&#x161;&#xED; &#x2026; je &#x2026;
        &#x2026; &#x2026;
        <br />
        znamen&#xE1; to toti&#x17E; &#x17E;e zas budu moct j&#xED;t na
        po&#x161;tu
        <br />
        jestli ho v&#x16F;bec doru&#x10D;ej&#xED;
        <br />
        to u&#x17E; je &#x2026; &#x2026;
        <br />
        j&#xE1; r&#xE1;d chod&#xED;m &#x2026; &#x2026;
        <br />
        nejsem tam jen do po&#x10D;tu
        <br />
        jsem tam d&#x16F;le&#x17E;it&#xFD; &#x2026;
        <br />
        fronty kter&#xE1; tr&#x10D;&#xED; ven
        <br />
        v&#x17E;dy kdy&#x17E; tam stepuju
        <br />
        tenhle song si notuju
        <br />
        m&#xE1;m pak hnedka trochu m&#xED;&#x148;
        <br />
        chu&#x165; do mozku si vrazit kl&#xED;n
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic">
            <p>
              na poštu, důležitý, fronty, mám potíže, za přepážkou, razítko,
              tiskárnou, los stírací, chodím, rád na poštu, pohnout se, přepážek
              otevřená, tajemstvím, služba, balíček do ruky, bez záruky, na
              poštu, člen.
            </p>
          </div>
        </Collapse>
      </div>
      <h2 className="mume-header" id="slu%C5%BEby-kr%C3%A1sy">
        SLU&#x17D;BY KR&#xC1;SY
      </h2>

      <GreenBox
        header="Внимание! Задание № 10 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />
      <p>
        <strong>
          10.1. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; cen&#xED;k
          slu&#x17E;eb v salonu kr&#xE1;sy a odpov&#x11B;zte na
          n&#xE1;sleduj&#xED;c&#xED; ot&#xE1;zky.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_15/picture_6.jpg"
          alt="picture_6"
        />
      </p>
      <p>
        <strong>Ot&#xE1;zky:</strong>
        <br />
        1) Podle &#x10D;eho se sestavuje cena slu&#x17E;by?
        <br />
        2) Jak&#xE9; slu&#x17E;by si v&#x11B;t&#x161;inou vyb&#xED;r&#xE1;
        Va&#x161;e maminka?
        <br />
        3) Jakou slu&#x17E;bu byste si vybrali, pokud byste cht&#x11B;li jen
        lehce ost&#x159;&#xED;hat kone&#x10D;ky vlas&#x16F; a ofinu?
        <br />
        4) Jak&#xE9; slu&#x17E;by V&#xE1;m nab&#xED;dne salon, pokud se budete
        chystat na ve&#x10D;&#xED;rek?
      </p>
      <p>
        <strong>
          10.2. V salonu V&#xE1;m budou k dispozici n&#xE1;sleduj&#xED;c&#xED;
          pracovn&#xED;ci, p&#x159;i&#x159;a&#x10F;te k nim jejich pracovn&#xED;
          povinnosti.
        </strong>
      </p>
      <p>
        1) Kade&#x159;n&#xED;k
        <br />
        2) Kosmeti&#x10D;ka
        <br />
        3) Viz&#xE1;&#x17E;ista
        <br />
        4) Stylista
        <br />
        5) Manik&#xE9;rka
        <br />
        6) Pedik&#xE9;rka
      </p>
      <p>
        A) vytvo&#x159;&#xED; pro v&#xE1;s origin&#xE1;ln&#xED; &#xFA;&#x10D;es
        a poskytne rady, jak si s vlasy poradit doma
        <br />
        B) pro zdrav&#xE9; nehty a k&#x16F;&#x17E;i na nohou
        <br />
        C) pro zdrav&#xE9; a p&#x11B;st&#x11B;n&#xE9; ruce a nehty
        <br />
        D) doporu&#x10D;&#xED; spr&#xE1;vn&#xE9; t&#xF3;ny
        l&#xED;&#x10D;en&#xED; a vytvo&#x159;&#xED; v&#xE1;m jednoduch&#xFD;
        postup jak se snadno zkr&#xE1;&#x161;lit ka&#x17E;d&#xFD; den
        <br />
        E) r&#xE1;d porad&#xED;, jak je na tom v&#xE1;&#x161;
        st&#xE1;vaj&#xED;c&#xED; &#x161;atn&#xED;k a co v&#xE1;m
        pom&#x16F;&#x17E;e vylep&#x161;it postavu
        <br />
        F) porad&#xED;, jak zdokonalit va&#x161;e p&#x16F;vaby a jak
        nejl&#xE9;pe pe&#x10D;ovat o va&#x161;i ple&#x165;
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div className="fst-italic d-flex flex-column">
            <p>
              1) — A) <br />
              2) — F) <br />
              3) — D) <br />
            </p>
            <p>
              4) — E) <br />
              5) — C) <br />
              6) — B) <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          &#x422;&#x430;&#x43A; &#x436;&#x435; &#x43A;&#x430;&#x43A; &#x438;
          &#x432; &#x43F;&#x440;&#x43E;&#x448;&#x43B;&#x44B;&#x445;
          &#x43B;&#x435;&#x43A;&#x446;&#x438;&#x44F;&#x445; &#x43C;&#x44B;
          &#x43F;&#x43E;&#x434;&#x43E;&#x431;&#x440;&#x430;&#x43B;&#x438;
          &#x434;&#x43B;&#x44F; &#x432;&#x430;&#x441;
          &#x43F;&#x43E;&#x43B;&#x435;&#x437;&#x43D;&#x44B;&#x435;
          &#x440;&#x435;&#x441;&#x443;&#x440;&#x441;&#x44B; &#x43D;&#x430;
          &#x43F;&#x440;&#x43E;&#x441;&#x442;&#x43E;&#x440;&#x430;&#x445;
          YouTube.
        </strong>
      </p>
      <p>
        <strong>
          11. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video a
          dopl&#x148;te vynechan&#xE1; slova v &#xFA;ryvku.
        </strong>
      </p>
      <p>
        <a href="https://www.youtube.com/watch?v=nhJfJe4aIDo">
          Parodie kade&#x159;nictv&#xED; po karant&#xE9;n&#x11B;
        </a>
      </p>
      <p>
        <strong>(00:00-00:20)</strong>
      </p>
      <p>
        &#xAB;Dobr&#xFD; den, pan&#xED; Nov&#xE1;kov&#xE1;, j&#xE1; V&#xE1;s
        m&#xE1;m objednanou na &#x2026; , &#x17E;e dneska? Tak j&#xE1; V&#xE1;s
        popros&#xED;m se posadit. A mus&#xED;me &#x2026; hlavn&#x11B; rozestup 2
        metry. Tak&#x17E;e j&#xE1; V&#xE1;s dneska budu navigovat, jak to
        &#x2026; m&#xE1;te d&#x11B;lat. Prvn&#xED; &#x2014; V&#xE1;s teda
        popros&#xED;m &#x2026; si sundat.&#xBB;
      </p>
      <p>
        <strong>(01:08-01:59)</strong>
      </p>
      <p>
        &#xAB;Nachystala jsem V&#xE1;m zde &#x2026; , zde &#x2026; a budu
        V&#xE1;m b&#x11B;hem toho &#x159;&#xED;kat, jak to vlastn&#x11B;
        m&#xE1;te d&#x11B;lat. Nastav&#xED;m V&#xE1;m vodu, m&#x11B;la by
        b&#xFD;t nastaven&#xE1; dobr&#xE1; teplota a vy si vemte vlastn&#x11B;
        tu &#x2026; a za&#x10D;n&#x11B;te si pomalu um&#xFD;vat tu hlavu.
        Tro&#x161;ku v&#xED;ce je&#x161;t&#x11B; &#x2026; hlavu. To
        zvl&#xE1;dnete! Tak, jsme u &#x161;amponov&#xE1;n&#xED; a
        po&#x159;&#xE1;dn&#x11B; tu &#x2026; vydrbejte.&#xBB;
      </p>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic">
            <p>
              stříhání, dodržovat, vlastně, gumičku, šampon, kondicionér,
              hadičku, zakloňte, pokožku.
            </p>
          </div>
        </Collapse>
      </div>
      <h2 className="mume-header" id="hodinov%C3%BD-man%C5%BEel">
        HODINOV&#xDD; MAN&#x17D;EL
      </h2>

      <p>
        <strong>
          12.1. &#x10C;t&#x11B;te text o hodinov&#xE9;m man&#x17E;elovi Milani
          Pila&#x159;ovi.
        </strong>
      </p>
      <p>
        <strong>Hodinov&#xFD; man&#x17E;el.</strong>
      </p>
      <p>
        P&#x159;ed rokem si Milan Pila&#x159; p&#x159;e&#x10D;etl v
        novin&#xE1;ch inzer&#xE1;t, kter&#xFD; mu zm&#x11B;nil &#x17E;ivot.
        Vid&#x11B;l tam, &#x17E;e n&#x11B;kdo nab&#xED;z&#xED; pr&#xE1;ci jako
        &#xAB;hodinov&#xFD; man&#x17E;el&#xBB;. Milan u&#x17E;
        v&#x11B;d&#x11B;l, &#x17E;e je to &#x10D;lov&#x11B;k, kter&#xFD;
        d&#x11B;l&#xE1; r&#x16F;zn&#xE9; pr&#xE1;ce a opravy v dom&#x11B;, v
        byt&#x11B; nebo na zahrad&#x11B;. A p&#x159;esn&#x11B; to byl jeho
        nejv&#x11B;t&#x161;&#xED; kon&#xED;&#x10D;ek. Tak se z
        marketingov&#xE9;ho mana&#x17E;era tak&#xE9; stal hodinov&#xFD;
        man&#x17E;el.
      </p>
      <p>
        Jeho kamar&#xE1;di si z n&#x11B;j nejd&#x159;&#xED;v d&#x11B;lali
        legraci. Mysleli si, &#x17E;e hodinov&#xFD; man&#x17E;el je n&#x11B;co
        jako gigolo nebo prostitut. Ob&#x10D;as sly&#x161;el: &#xAB;Hele,
        Milane, u&#x17E; jsme t&#x11B; zase vid&#x11B;li, jak jde&#x161; od
        Mark&#xE9;ty, kdy&#x17E; jej&#xED; Pepa nebyl doma!&#xBB; To ale Milan
        rezolutn&#x11B; odm&#xED;t&#xE1;: &#xAB;M&#xE1;m doma man&#x17E;elku,
        kterou miluju, a nikdy bych j&#xED; nebyl nev&#x11B;rn&#xFD;. Je pravda,
        &#x17E;e mi v&#x11B;t&#x161;inou volaj&#xED; &#x17E;eny, ale jen jednou
        se m&#x11B; n&#x11B;jak&#xE1; pan&#xED; ptala, jestli bych s n&#xED;
        ne&#x161;el na v&#xED;no.&#xBB;
      </p>
      <p>
        Postupn&#x11B; si lid&#xE9; z okol&#xED; zvykli, &#x17E;e Milan um&#xED;
        prost&#x11B; v&#x161;echno: opravit auto, motorku i kolo, postavit
        ze&#x10F;, instalovat topen&#xED;, vym&#x11B;nit z&#xE1;mek, vymalovat
        byt a spoustu dal&#x161;&#xED;ch v&#x11B;c&#xED;. Dokonce se s n&#xED;m
        chod&#xED; radit o komplikovan&#xFD;ch oprav&#xE1;ch. Naopak ho
        tak&#xE9; volaj&#xED;, kdy&#x17E; nemaj&#xED; &#x10D;as posekat
        tr&#xE1;vu na zahrad&#x11B;, vym&#x11B;nit pojistky nebo uklidit ve
        sklep&#x11B; nebo na p&#x16F;d&#x11B;. Milan m&#xE1; po&#x159;&#xE1;d
        dost pr&#xE1;ce. &#xAB;Ostatn&#xED; &#x159;emesln&#xED;ci drobn&#xE9;
        pr&#xE1;ce necht&#x11B;j&#xED; d&#x11B;lat,&#xBB; vysv&#x11B;tluje.
        &#xAB;J&#xE1; ale p&#x159;ijdu co nejd&#x159;&#xED;v a ud&#x11B;l&#xE1;m
        v&#x161;echno, co m&#x16F;&#x17E;u. Pot&#x159;ebn&#xE9; v&#x11B;ci
        koup&#xED;m a p&#x159;ivezu a po pr&#xE1;ci tak&#xE9; v&#x161;echno
        uklid&#xED;m.&#xBB;
      </p>
      <p>
        O pomoc Milana ne&#x17E;&#xE1;daj&#xED; jenom &#x17E;eny, ale tak&#xE9;
        star&#x161;&#xED; lid&#xE9;, r&#x16F;zn&#xE9; firmy a podnikatel&#xE9;.
        A tak&#xE9; skute&#x10D;n&#xED; man&#x17E;el&#xE9;, kte&#x159;&#xED;
        nemaj&#xED; &#x10D;as nebo n&#x11B;co prost&#x11B; neum&#x11B;j&#xED;.
        Za pr&#xE1;ci si Milan &#xFA;&#x10D;tuje 250 korun za hodinu a za
        dopravu 200 korun. A jak&#xE1; byla jeho nejrychlej&#x161;&#xED; akce?
        &#xAB;Jedno star&#xE9; k&#x159;eslo, kter&#xE9; jsem opravil za
        p&#x11B;t minut&#xBB;, vzpom&#xED;n&#xE1; Milan. Naopak
        nejt&#x11B;&#x17E;&#x161;&#xED; pr&#xE1;ce byla oprava vz&#xE1;cn&#xE9;
        star&#xE9; komody, kter&#xE1; trvala skoro t&#xFD;den. Nejv&#xED;c je
        Milan py&#x161;n&#xFD; na dva psac&#xED; stoly, kter&#xE9; si objednal
        jeho kamar&#xE1;d pro man&#x17E;elku a syna.
      </p>
      <p>
        Kdy&#x17E; je Milan hotov&#xFD;, v&#x17E;dycky se pod&#xED;v&#xE1;,
        jestli nen&#xED; pot&#x159;eba je&#x161;t&#x11B; n&#x11B;co ud&#x11B;lat
        nebo opravit n&#x11B;co jin&#xE9;ho. &#xAB;Vzpom&#xED;n&#xE1;m si,
        &#x17E;e jednou jsem dokonce jednomu star&#xE9;mu p&#xE1;novi
        uva&#x159;il ob&#x11B;d,&#xBB; sm&#x11B;je se. Milan ale nen&#xED; jen
        kutil. Mezi dal&#x161;&#xED; v&#x11B;ci, kter&#xE9; ho
        zaj&#xED;maj&#xED;, pat&#x159;&#xED; folkov&#xE1; hudba a
        ryba&#x159;en&#xED;. Ned&#xE1;vno tak&#xE9; koupil dv&#x11B; star&#xE1;
        auta, kter&#xE1; chce postupn&#x11B; opravit. &#xAB;Zkr&#xE1;tka
        pr&#xE1;ce i z&#xE1;jm&#x16F; je hodn&#x11B;, ale &#x10D;asu
        m&#xE1;lo,&#xBB; &#x159;&#xED;k&#xE1; tento &#x161;ikovn&#xFD;
        mlad&#xFD; mu&#x17E;, kter&#xFD; se v &#x17E;ivot&#x11B;
        ur&#x10D;it&#x11B; neztrat&#xED;.
      </p>

      <GreenBox
        header="Внимание! Задание № 12.2 проверит преподаватель."
        text="Ответы напишите от руки, сфотографируйте и прикрепите фото в форме «Задание» в конце лекции."
      />

      <p className="text-danger">
        <em>Pros&#xED;m, pi&#x161;te &#x10D;iteln&#x11B;.</em>
      </p>
      <p>
        <strong>12.2. Odpov&#x11B;zte na ot&#xE1;zky.</strong>
      </p>
      <p>
        1) Co d&#x11B;lal Milan p&#x159;edt&#xED;m? Pro&#x10D; zm&#x11B;nil
        povol&#xE1;n&#xED;?
        <br />
        2) Co si o Milanovi mysleli kamar&#xE1;di?
        <br />
        3) Jakou nejt&#x11B;&#x17E;&#x161;&#xED; pr&#xE1;ci Milan d&#x11B;lal?
        <br />
        4) Kdo Milana &#x10D;asto &#x17E;&#xE1;d&#xE1; o pomoc?
        <br />
        5) Kolik si Milan &#xFA;&#x10D;tuje za pr&#xE1;ci?
        <br />
        6) Jak&#xE9; m&#xE1; dal&#x161;&#xED; z&#xE1;jmy?
      </p>
      <p>
        <strong>
          13. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; telefonn&#xED;
          situaci a se&#x159;a&#x10F;te ho spr&#xE1;vn&#x11B; podle toho, jak
          jste ho sly&#x161;eli.
        </strong>
      </p>

      <div>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_15/Slang-%D0%AF+%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D1%8E+%D0%BF%D0%BE-%D1%87%D0%B5%D1%88%D1%81%D0%BA%D0%B8-%D0%902-11.Lekce-17.mp3"
          ></audio>
          <figcaption>
            <strong>Slang-Я говорю по-чешски-А2-11.Lekce-17</strong>
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Dialog. Reklamace.</strong>
      </p>
      <p>
        <strong>B:</strong> Dobr&#xFD; den, R&#x16F;&#x17E;i&#x10D;kov&#xE1;.
        Cht&#x11B;la bych mluvit s n&#x11B;k&#xFD;m, kdo by mi pomohl s
        reklamac&#xED;, pros&#xED;m.
      </p>
      <p>
        <strong>C:</strong> Neshledanou!
      </p>
      <p>
        <strong>C:</strong> Ok, jsem si jist&#xE1;, &#x17E;e to byla chyba, za
        kterou se velice omlouv&#xE1;me. Za tento omyl V&#xE1;m
        p&#x159;id&#xE1;me je&#x161;t&#x11B; 20 % slevu na dal&#x161;&#xED;
        n&#xE1;kup. Mimo to, p&#x159;ipom&#xED;n&#xE1;m, &#x17E;e na
        n&#xE1;&#x161; n&#xE1;bytek m&#xE1;te 2 roky z&#xE1;ruku.
      </p>
      <p>
        <strong>B:</strong> Objednala jsem si dovoz z Va&#x161;eho obchodu,
        jeliko&#x17E; jsem objedn&#xE1;vala 6 &#x161;ed&#xFD;ch k&#x159;esel.
        Ale nejsem v&#x16F;bec spokojen&#xE1; ani s objedn&#xE1;vkou, ani s
        dovozem.
      </p>
      <p>
        <strong>B:</strong> Up&#x159;ednostn&#xED;m dodej zbyl&#xFD;ch
        k&#x159;esel a vr&#xE1;cen&#xED; poplatku.
      </p>
      <p>
        <strong>B:</strong> Dobr&#xFD; den, m&#xE9; jm&#xE9;no je
        R&#x16F;&#x17E;i&#x10D;kov&#xE1;. Cht&#x11B;la bych se na V&#xE1;s
        obr&#xE1;tit se st&#xED;&#x17E;nost&#xED; na objedn&#xE1;vku, kterou
        jsem obdr&#x17E;ela v&#x10D;era ve&#x10D;er.
      </p>
      <p>
        <strong>A:</strong> Samoz&#x159;ejm&#x11B;, dejte mi minutku,
        p&#x159;epoj&#xED;m V&#xE1;s.
      </p>
      <p>
        <strong>C:</strong> D&#x11B;kuji V&#xE1;m pan&#xED;
        R&#x16F;&#x17E;i&#x10D;kov&#xE1;. Vid&#xED;m v syst&#xE9;mu Va&#x161;i
        objedn&#xE1;vku, a dokonce i platbu. Pravd&#x11B;podobn&#x11B; se
        n&#x11B;kde vyskytla n&#x11B;jak&#xE1; chyba. Velice se omlouv&#xE1;m.
        M&#x11B;li byste z&#xE1;jem o p&#x159;&#xED;padn&#xE9; dod&#xE1;n&#xED;
        je&#x161;t&#x11B; dvou k&#x159;esel a vr&#xE1;cen&#xED; poplatku nebo
        &#x17E;&#xE1;d&#xE1;te o vr&#xE1;cen&#xED; ve&#x161;ker&#xE9; platby?
      </p>
      <p>
        <strong>A:</strong> Dobr&#xFD; den, &#x201C;N&#xE1;bytek do
        vysn&#x11B;n&#xE9;ho bydlen&#xED;&#x201D;, Nov&#xE1;kov&#xE1; u
        telefonu. Jak V&#xE1;m mohu pomoci?
      </p>
      <p>
        <strong>C:</strong> Ano, a v &#x10D;em spo&#x10D;&#xED;v&#xE1;
        probl&#xE9;m?
      </p>
      <p>
        <strong>B:</strong> GK6780. Objednala jsem toti&#x17E; 6 k&#x159;esel,
        av&#x161;ak p&#x159;ivezli jste mi pouze 4. A nav&#xED;c jsem platila
        je&#x161;t&#x11B; dal&#x161;&#xED; poplatky, kter&#xE9; bych platit
        nem&#x11B;la, jeliko&#x17E; celou &#x10D;&#xE1;stku jsem ji&#x17E;
        zaplatila bankovn&#xED;m p&#x159;evodem. Pro potvrzen&#xED; V&#xE1;m
        mohu zaslat v&#xFD;pis z internetov&#xE9;ho bankovnictv&#xED;.
      </p>
      <p>
        <strong>C:</strong> Ano? Dobr&#xFD; den,
        &#x160;ev&#x10D;&#xED;kov&#xE1;. Jak V&#xE1;m mohu pomoci?
      </p>
      <p>
        <strong>B:</strong> Velmi d&#x11B;kuji. T&#x11B;&#x161;&#xED;m se
        u&#x17E; na objedn&#xE1;vku. Nashledanou!
      </p>
      <p>
        <strong>C:</strong> Ahh, to m&#x11B; mrz&#xED;. &#x158;ekla byste mi,
        pros&#xED;m, &#x10D;&#xED;slo objedn&#xE1;vky?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>A:</strong> Dobrý den, «Nábytek do vysněného bydlení»,
              Nováková u telefonu. Jak Vám mohu pomoci?
              <br />
              <strong>B:</strong> Dobrý den, Růžičková. Chtěla bych mluvit s
              někým, kdo by mi pomohl s reklamací, prosím.
              <br />
              <strong>A:</strong> Samozřejmě, dejte mi minutku, přepojím Vás.
              <br />
              <strong>C:</strong> Ano? Dobrý den, Ševčíková. Jak Vám mohu
              pomoci?
              <br />
              <strong>B:</strong> Dobrý den, mé jméno je Růžičková. Chtěla bych
              se na Vás obrátit se stížností na objednávku, kterou jsem obdržela
              včera večer.
              <br />
              <strong>C:</strong> Ano, a v čem spočívá problém?
              <br />
              <strong>B:</strong> Objednala jsem si dovoz z Vašeho obchodu,
              jelikož jsem objednávala 6 šedých křesel. Ale nejsem vůbec
              spokojená ani s objednávkou, ani s dovozem.
              <br />
              <strong>C:</strong> Ahh, to mě mrzí. Řekla byste mi, prosím, číslo
              objednávky?
              <br />
              <strong>B:</strong> GK6780. Objednávala jsem totiž 6 křesel, avšak
              přivezli jste mi pouze 4. A navíc jsem platila ještě další
              poplatky, které bych platit neměla, jelikož celou částku jsem již
              zaplatila bankovním převodem. Pro potvrzení Vám mohu zaslat výpis
              z internetového bankovnictví.
              <br />
              <strong>C:</strong> Děkuji Vám paní Růžičková. Vidím v systému
              Vaši objednávku, a dokonce i platbu. Pravděpodobně se někde
              vyskytla nějaká chyba. Velice se omlouvám. Měli byste zájem o
              případné dodání ještě dvou křesel a vrácení poplatku nebo žádáte o
              vrácení veškeré platby?
              <br />
              <strong>B:</strong> Upřednostním dodej zbylých křesel a vrácení
              poplatku.
              <br />
              <strong>C:</strong> Ok, jsem si jistá, že to byla chyba, za kterou
              se velice omlouváme. Za tento omyl Vám přidáme ještě 20 % slevu na
              další nákup. Mimo to, připomínám, že na náš nábytek máte 2 roky
              záruku.
              <br />
              <strong>B:</strong> Velmi děkuji. Těším se už na objednávku.
              Nashledanou!
              <br />
              <strong>C:</strong> Nashledanou!
            </p>
          </div>
        </Collapse>
      </div>
      <h2 className="mume-header" id="banka">
        BANKA
      </h2>

      <p>
        <strong>
          14.1. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; text.
          P&#x159;elo&#x17E;te zv&#xFD;razn&#x11B;n&#xE1; slova a fr&#xE1;ze.
        </strong>
      </p>
      <p>
        <strong>
          Tato slova m&#x16F;&#x17E;ete sly&#x161;et v bance a jin&#xFD;ch
          finan&#x10D;n&#xED;ch instituc&#xED;ch.
        </strong>
      </p>
      <p>
        <span className="red_span">B&#x11B;&#x17E;n&#xFD; &#xFA;&#x10D;et</span>
        je vlastn&#x11B; takov&#xE1; neviditeln&#xE1;
        <span className="red_span">&#xAB;pen&#x11B;&#x17E;enka&#xBB;</span>, kde
        m&#xE1;me ulo&#x17E;en&#xE9; pen&#xED;ze.
      </p>
      <p>
        &#xDA;&#x10D;et m&#x16F;&#x17E;e m&#xED;t u banky ka&#x17E;d&#xFD;
        &#x10D;lov&#x11B;k a dokonce i d&#xED;t&#x11B;. Existuj&#xED;
        speci&#xE1;ln&#xED; &#xFA;&#x10D;ty pro d&#x11B;ti a studenty,
        kter&#xE9; jim v&#x11B;t&#x161;inou zakl&#xE1;daj&#xED; a spravuj&#xED;
        jejich rodi&#x10D;e.
      </p>
      <p>
        <span className="red_span">Zalo&#x17E;it si &#xFA;&#x10D;et</span>
        je velmi jednoduch&#xE9;. Vyberete si banku, u kter&#xE9; chcete
        m&#xED;t &#xFA;&#x10D;et, a po
        <span className="red_span">seps&#xE1;n&#xED; smlouvy</span>a
        p&#x159;edlo&#x17E;en&#xED;
        <span className="red_span">ob&#x10D;ansk&#xE9;ho pr&#x16F;kazu</span>
        je &#xFA;&#x10D;et z&#x159;&#xED;zen.
      </p>
      <p>
        K &#xFA;&#x10D;tu dostanete platebn&#xED; kartu a jedine&#x10D;n&#xE9;
        <span className="red_span">&#x10D;&#xED;slo &#xFA;&#x10D;tu</span>,
        d&#xED;ky kter&#xE9;mu jej nelze zam&#x11B;nit s jin&#xFD;m.
        &#xDA;&#x10D;et aktivujete pou&#x17E;it&#xED;m platebn&#xED; karty.
      </p>
      <p>&#x10C;&#xED;slo &#xFA;&#x10D;tu vypad&#xE1; takto: 123456789/5500</p>
      <ul>
        <li>&#x10D;&#xED;slo &#xFA;&#x10D;tu (123456789)</li>
        <li>
          k&#xF3;d banky (5500), ka&#x17E;d&#xE1; banka m&#xE1; jin&#xFD;
          k&#xF3;d
        </li>
        <li>
          n&#x11B;kter&#xE9; &#xFA;&#x10D;ty maj&#xED;
          <span className="red_span">p&#x159;ed&#x10D;&#xED;sl&#xED;</span>, to
          je n&#x11B;kolik &#x10D;&#xED;sel s poml&#x10D;kou p&#x159;ed
          &#x10D;&#xED;slem &#xFA;&#x10D;tu (123456-123456789/5500)
        </li>
      </ul>
      <p>Co p&#x159;esn&#x11B; um&#xED; &#xFA;&#x10D;et?</p>
      <ul>
        <li>
          m&#x16F;&#x17E;ete na n&#x11B;j
          <span className="red_span">vkl&#xE1;dat pen&#xED;ze</span>v hotovosti
        </li>
        <li>
          m&#x16F;&#x17E;ete z n&#x11B;j
          <span className="red_span">vyb&#xED;rat pen&#xED;ze</span>v hotovosti
        </li>
        <li>
          ostatn&#xED; n&#xE1;m na n&#x11B;j mohou
          <span className="red_span">pos&#xED;lat platby</span>
        </li>
        <li>
          m&#x16F;&#x17E;ete z n&#x11B;j platit na jin&#xE9; &#xFA;&#x10D;ty
        </li>
        <li>m&#x16F;&#x17E;ete kontrolovat sv&#xE9; pen&#xED;ze</li>
      </ul>
      <p>
        Abyste mohli hospoda&#x159;it se sv&#xFD;mi pen&#x11B;zi na
        &#xFA;&#x10D;t&#x11B;, mus&#xED;te tam n&#x11B;jak&#xE9; m&#xED;t. Na
        bankovn&#xED; &#xFA;&#x10D;ty zas&#xED;l&#xE1; v&#x11B;t&#x161;ina
        zam&#x11B;stnavatel&#x16F; zam&#x11B;stnanc&#x16F;m
        <span className="red_span">v&#xFD;platy</span>a plat&#xED; se z
        n&#x11B;j
        <span className="red_span">bezhotovostn&#x11B;</span>
        v&#x11B;t&#x161;ina plateb, nap&#x159;&#xED;klad n&#xE1;jem,
        elekt&#x159;ina, &#x161;koln&#xED; ob&#x11B;dy a dal&#x161;&#xED;.
      </p>
      <p>
        P&#x159;ehled o tom, kolik a komu jste zaplatili, m&#xE1;te d&#xED;ky
        <span className="red_span">
          v&#xFD;pisu z &#xFA;&#x10D;tu
          <span>
            . Tento v&#xFD;pis zas&#xED;laj&#xED; banky v&#x11B;t&#x161;inou
            ka&#x17E;d&#xFD; m&#x11B;s&#xED;c bu&#x10F; po&#x161;tou nebo
            emailem. M&#x16F;&#x17E;ete si nastavit i
            &#x10D;ast&#x11B;j&#x161;&#xED; zas&#xED;l&#xE1;n&#xED; v&#xFD;pisu.
          </span>
        </span>
      </p>
      <p>
        <strong>
          14.2. Na obr&#xE1;zku vid&#xED;te uk&#xE1;zku z v&#xFD;pisu z
          &#xFA;&#x10D;tu. Odpov&#x11B;zte na n&#xE1;sleduj&#xED;c&#xED;
          ot&#xE1;zky.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_15/picture_7.jpg"
          alt="picture_7"
        />
      </p>
      <p>
        <strong>Ot&#xE1;zky:</strong>
      </p>
      <p>
        1) Kdo je majitelem &#xFA;&#x10D;tu? Jakou barvou jsou
        zn&#xE1;zorn&#x11B;ny p&#x159;&#xED;choz&#xED; platby?
        <br />
        2) Kolik pen&#x11B;z utratil za knihy?
        <br />
        3) Kdy to bylo?
        <br />
        4) V jak&#xE9;m obchod&#x11B; utratil nejm&#xE9;n&#x11B; pen&#x11B;z?
        <br />
        5) Kolik pen&#x11B;z m&#xE1; je&#x161;t&#x11B; na &#xFA;&#x10D;t&#x11B;
        k dispozici?
      </p>
      <GreenBox
        header="Внимание! Задания № 15.1 и № 15.2 выполняются по желанию."
        text=""
      />

      <p>
        <strong>
          15.1. P&#x159;e&#x10D;t&#x11B;te si text a vypl&#x148;te
          n&#xE1;sleduj&#xED;c&#xED; cvi&#x10D;en&#xED;.
        </strong>
      </p>
      <p>
        Na v&#xFD;pisu z &#xFA;&#x10D;tu jsou vid&#x11B;t v&#x161;echny
        platebn&#xED; operace. Pen&#xED;ze, kter&#xE9; n&#xE1;m
        p&#x159;i&#x161;ly, jsou na &#xFA;&#x10D;et p&#x159;ipsan&#xE9;.
        Pen&#xED;ze, kter&#xE9; ode&#x161;ly, jsou z &#xFA;&#x10D;tu
        odepsan&#xE9;.
      </p>
      <p>
        Na v&#xFD;pisu z &#xFA;&#x10D;tu vid&#xED;te i to, kolik pen&#x11B;z
        m&#xE1;te je&#x161;t&#x11B; skute&#x10D;n&#x11B; k dispozici. Tomu se
        &#x159;&#xED;k&#xE1; &#xFA;&#x10D;etn&#xED; z&#x16F;statek.
        &#xDA;&#x10D;etn&#xED; z&#x16F;statek se m&#x16F;&#x17E;e li&#x161;it od
        aktu&#xE1;ln&#xED;ho z&#x16F;statku. Ten b&#xFD;v&#xE1;
        vy&#x161;&#x161;&#xED;, proto&#x17E;e z n&#x11B;j nejsou
        je&#x161;t&#x11B; ode&#x10D;teny v&#x161;echny platby.
        &#x10C;&#xE1;stce, kter&#xE1; &#x10D;ek&#xE1; na ode&#x10D;ten&#xED; z
        &#xFA;&#x10D;tu, se &#x159;&#xED;k&#xE1; blokovan&#xE1;
        &#x10D;&#xE1;stka.
      </p>
      <p>
        Zp&#x16F;sobu placen&#xED; p&#x159;es &#xFA;&#x10D;et se
        &#x159;&#xED;k&#xE1; bezhotovostn&#xED; platba.
      </p>
      <p>
        Bezhotovostn&#x11B; m&#x16F;&#x17E;ete zaplatit p&#x159;&#xED;kazem k
        &#xFA;hrad&#x11B;. Jednodu&#x161;e
        &#xAB;p&#x159;ik&#xE1;&#x17E;ete&#xBB; bance, kolik pen&#x11B;z m&#xE1;
        poslat na kter&#xFD; &#xFA;&#x10D;et. Tento p&#x159;&#xED;kaz k
        &#xFA;hrad&#x11B; m&#x16F;&#x17E;e b&#xFD;t jednor&#xE1;zov&#xFD;,
        zaplat&#xED;te nap&#x159;&#xED;klad elektroniku, nebo trval&#xFD;, kdy
        &#x10D;&#xE1;stka odch&#xE1;z&#xED; ka&#x17E;d&#xFD; m&#x11B;s&#xED;c a
        plat&#xED;te d&#xED;t&#x11B;ti tak nap&#x159;&#xED;klad
        &#x161;koln&#xED; ob&#x11B;dy.
      </p>
      <p>
        <strong>15.2. Spojte spr&#xE1;vn&#x11B;.</strong>
      </p>
      <p>
        1) Odepsan&#xE9; pen&#xED;ze
        <br />
        2) P&#x159;ipsan&#xE9; pen&#xED;ze
        <br />
        3) Jednor&#xE1;zov&#xFD; p&#x159;&#xED;kaz
        <br />
        4) Trval&#xFD; p&#x159;&#xED;kaz A) Jedine&#x10D;n&#xE1; platba
        <br />
        B) Se znam&#xE9;nkem m&#xED;nus
        <br />
        C) Se znam&#xE9;nkem plus
        <br />
        D) Opakovan&#xE1; platba
      </p>
      <div>
        <button onClick={() => keys.toggleKey(10)}>Klíče</button>
        <Collapse in={keys.getValue(10)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) — B)
              <br />
              2) — C)
              <br />
              3) — A)
              <br />
              4) — D)
            </p>
          </div>
        </Collapse>
      </div>
      <h2 className="mume-header" id="poji%C5%A1t%C4%9Bn%C3%AD">
        POJI&#x160;T&#x11A;N&#xCD;
      </h2>

      <p>
        <strong>
          26. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; text.
          P&#x159;elo&#x17E;te zv&#xFD;razn&#x11B;n&#xE1; slova a fr&#xE1;ze.
        </strong>
      </p>
      <p>
        <strong>
          Tato slova m&#x16F;&#x17E;ete sly&#x161;et v bance a jin&#xFD;ch
          finan&#x10D;n&#xED;ch instituc&#xED;ch.
        </strong>
      </p>
      <p>
        <strong>Druhy poji&#x161;t&#x11B;n&#xED;</strong>
        <em>
          (&#x432;&#x438;&#x434;&#x44B;
          &#x441;&#x442;&#x440;&#x430;&#x445;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F;).
        </em>
      </p>
      <p>
        Jak v&#xED;te, pojistit lze osoby i
        <span className="red_span">majetek</span>. Podle toho existuj&#xED;
        r&#x16F;zn&#xE9; druhy
        <span className="red_span">pojistek:</span>
      </p>
      <p>
        <strong>1) &#x17D;ivotn&#xED; poji&#x161;t&#x11B;n&#xED;</strong>
      </p>
      <p>
        Toto poji&#x161;t&#x11B;n&#xED;
        <span className="red_span">se sjedn&#xE1;v&#xE1;</span>
        zejm&#xE9;na kv&#x16F;li zabezpe&#x10D;en&#xED; rodiny.
        M&#x16F;&#x17E;eme se nechat pojistit proti smrti, invalidit&#x11B;,
        <span className="red_span">
          &#xFA;razu s trval&#xFD;mi n&#xE1;sledky
        </span>
        nebo
        <span className="red_span">v&#xE1;&#x17E;n&#xE9; nemoci</span>. V
        p&#x159;&#xED;pad&#x11B;, &#x17E;e se s poji&#x161;t&#x11B;n&#xFD;m
        n&#x11B;co stane, jsou pen&#xED;ze vyplaceny jemu samotn&#xE9;mu nebo
        jeho rodin&#x11B;. Vypl&#xE1;cen&#xED; je bu&#x10F;
        jednor&#xE1;zov&#xE9; &#x2014; rodina nebo poji&#x161;t&#x11B;nec
        obdr&#x17E;&#xED; celkovou &#x10D;&#xE1;stku najednou.
      </p>
      <p>
        <em>
          Pro koho je: pro kohokoliv, poji&#x161;&#x165;ovna nesm&#xED; nikoho
          odm&#xED;tnout.
        </em>
      </p>
      <p>
        <strong>2) &#xDA;razov&#xE9; poji&#x161;t&#x11B;n&#xED;</strong>
      </p>
      <p>
        Osoba je poji&#x161;t&#x11B;n&#xE1; v p&#x159;&#xED;pad&#x11B;
        <span className="red_span">
          &#xFA;razu
          <span>
            , kter&#xFD; nen&#xED; dlouhodob&#xFD;, nap&#x159;&#xED;klad
            zlomenina. Tato pojistka nen&#xED; na nemoci. Po
            dol&#xE9;&#x10D;en&#xED; &#xFA;razu je poji&#x161;t&#x11B;nci
            vyplacena jednor&#xE1;zov&#x11B; ur&#x10D;it&#xE1; &#x10D;&#xE1;stka
            &#x2014; od&#x161;kodn&#xE9;.
          </span>
        </span>
      </p>
      <p>
        <em>
          Pro koho je: pro kohokoliv krom&#x11B; vrcholov&#xFD;ch
          sportovc&#x16F; nebo lid&#xED; s
        </em>
        <span className="red_span">
          nebezpe&#x10D;n&#xFD;m povol&#xE1;n&#xED;m.
        </span>
      </p>
      <p>
        <strong>3) Cestovn&#xED; poji&#x161;t&#x11B;n&#xED;</strong>
      </p>
      <p>
        V&#x17E;dy, kdy&#x17E; cestujete do zahrani&#x10D;&#xED;, m&#x11B;li
        byste b&#xFD;t poji&#x161;t&#x11B;ni, i kdyby va&#x161;e cesta trvala
        jeden jedin&#xFD; den. Cestovn&#xED; poji&#x161;t&#x11B;n&#xED;
        m&#x16F;&#x17E;e zahrnovat poji&#x161;t&#x11B;n&#xED;
        <span className="red_span">zavazadel</span>
        (p&#x159;i ztr&#xE1;t&#x11B; kufru), l&#xE9;&#x10D;ebn&#xFD;ch
        v&#xFD;daj&#x16F; (zaplacen&#xED;
        <span className="red_span">
          o&#x161;et&#x159;en&#xED; p&#x159;i &#xFA;razu
        </span>
        ) nebo odpov&#x11B;dnosti (p&#x159;i zp&#x16F;soben&#xED; &#x161;kody
        n&#x11B;komu jin&#xE9;mu). V zahrani&#x10D;&#xED; se v&#x161;echna
        l&#xE9;ka&#x159;sk&#xE1; p&#xE9;&#x10D;e plat&#xED; a pro cizince je
        velmi drah&#xE1; a n&#xE1;kladn&#xE1;, proto je toto
        poji&#x161;t&#x11B;n&#xED; velmi d&#x16F;le&#x17E;it&#xE9;.
      </p>
      <p>
        <em>
          Pro koho je: pro kohokoliv, kdo i jen na jedin&#xFD; den vycestuje do
          zahrani&#x10D;&#xED;.
        </em>
      </p>
      <p>
        <strong>4) Poji&#x161;t&#x11B;n&#xED; budov/nemovitost&#xED;</strong>
      </p>
      <p>
        Pokud jste vlastn&#xED;kem budovy nebo jin&#xE9;
        <span className="red_span">nemovitosti</span>
        (byt, rodinn&#xFD; d&#x16F;m, chata..), je vhodn&#xE9; m&#xED;t
        sv&#x16F;j majetek poji&#x161;t&#x11B;n&#xFD;. Takov&#xE9;
        poji&#x161;t&#x11B;n&#xED; se vztahuje na
        <span className="red_span">zni&#x10D;en&#xED;</span>
        nebo
        <span className="red_span">po&#x161;kozen&#xED;</span>
        dan&#xE9;ho objektu,
        <span className="red_span">
          kter&#xE9; m&#x16F;&#x17E;e nastat vlivem po&#x17E;&#xE1;ru,
          vich&#x159;ice, povodn&#x11B; nebo vloup&#xE1;n&#xED;
        </span>
        .
      </p>
      <p>
        <em>Pro koho je: pro ka&#x17E;d&#xE9;ho majitele nemovitosti.</em>
      </p>
      <p>
        <strong>5) Poji&#x161;t&#x11B;n&#xED; dom&#xE1;cnosti</strong>
      </p>
      <p>
        Ka&#x17E;d&#xE1; rodina by m&#x11B;la m&#xED;t svou dom&#xE1;cnost
        poji&#x161;t&#x11B;nou. &#x10C;asto se st&#xE1;v&#xE1;, &#x17E;e
        n&#x11B;kdo zapomene zav&#x159;&#xED;t vodovodn&#xED; kohoutek nebo
        vypnout spor&#xE1;k. Z takov&#xE9;
        <span className="red_span">
          nedbalosti
          <span>
            m&#x16F;&#x17E;ou vzniknout velk&#xE9; probl&#xE9;my.
            Poji&#x161;t&#x11B;n&#xED; dom&#xE1;cnosti v&#x161;ak v&#x161;echny
            takov&#xE9; probl&#xE9;my vy&#x159;e&#x161;&#xED;. Vztahuje se na
            zni&#x10D;en&#xED; nebo po&#x161;kozen&#xED;
            za&#x159;&#xED;zen&#xED; v cel&#xE9; dom&#xE1;cnosti, co&#x17E;
            m&#x16F;&#x17E;e b&#xFD;t podlaha, okna, n&#xE1;bytek,
            spot&#x159;ebi&#x10D;e, elektronika, cennosti atd. K
            po&#x161;kozen&#xED; v&#x11B;c&#xED; ale m&#x16F;&#x17E;e doj&#xED;t
            i kv&#x16F;li po&#x17E;&#xE1;ru, bou&#x159;ce, vadn&#xE9;
            elektroinstalaci apod. V poji&#x161;t&#x11B;n&#xED; mohou b&#xFD;t
            zahrnuty i p&#x159;edm&#x11B;ty ve sklep&#x11B; nebo v
            gar&#xE1;&#x17E;i.
          </span>
        </span>
      </p>
      <p>
        <em>Pro koho je: pro ka&#x17E;d&#xE9;ho majitele.</em>
      </p>
      <p>
        <strong>6) Poji&#x161;t&#x11B;n&#xED; motorov&#xFD;ch vozidel</strong>
      </p>
      <p>
        V tomto poji&#x161;t&#x11B;n&#xED; je zahrnuto i povinn&#xE9;
        ru&#x10D;en&#xED;, kter&#xE9; mus&#xED; uzav&#x159;&#xED;t
        ka&#x17E;d&#xFD;, kdo vlastn&#xED;
        <span className="red_span">motorov&#xE9; vozidlo</span>
        (motorku, automobil atd.). Z poji&#x161;t&#x11B;n&#xED; se plat&#xED;
        &#x161;koda zp&#x16F;soben&#xE1; p&#x159;i
        <span className="red_span">nehod&#x11B;</span>
        nebo p&#x159;i jin&#xE9; ud&#xE1;losti, kdy je po&#x161;kozeno vozidlo
        nebo zdrav&#xED; ostatn&#xED;ch &#xFA;&#x10D;astn&#xED;k&#x16F;
        <span className="red_span">provozu</span>.
      </p>
      <p>
        <em>
          Pro koho je: pro ka&#x17E;d&#xE9;ho majitele motorov&#xE9;ho vozidla.
        </em>
      </p>
      <p>
        <strong>
          27. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED;
          &#x10D;ty&#x159;i p&#x159;&#xED;b&#x11B;hy a napi&#x161;te, jak&#xE9;
          poji&#x161;t&#x11B;n&#xED; by m&#x11B;li jeho
          &#xFA;&#x10D;astn&#xED;ci m&#xED;t sjednan&#xE9;.
        </strong>
      </p>
      <p>
        1) Jana se chyst&#xE1; na t&#xFD;denn&#xED; cestu do rakousk&#xFD;ch
        Alp, kde bude s p&#x159;&#xE1;teli ly&#x17E;ovat. V&#x161;ichni jsou
        ubytov&#xE1;ni v malebn&#xE9;m hotelu pobl&#xED;&#x17E; sjezdovek.
        <br />
        2) Davidovi se splnil sen a ke sv&#xFD;m osmn&#xE1;ct&#xFD;m
        narozenin&#xE1;m dostal od rodi&#x10D;&#x16F; nov&#xE9; auto.
        <br />
        3) Nov&#xE1;kovi se p&#x159;est&#x11B;hovali z velkom&#x11B;sta do
        rodinn&#xE9;ho domku se zahradou.
        <br />
        4) Martin&#x11B; a Ji&#x159;&#xED;mu se m&#xE1; za p&#xE1;r
        t&#xFD;dn&#x16F; narodit jejich prvn&#xED; d&#xED;t&#x11B;.
        Ji&#x159;&#xED; &#x10D;asto p&#x159;em&#xFD;&#x161;l&#xED; o tom, jak
        svou rodinu zajistit, kdyby se mu n&#x11B;co stalo.
      </p>
      <p>
        A) Poji&#x161;t&#x11B;n&#xED; budov
        <br />
        B) &#x17D;ivotn&#xED; poji&#x161;t&#x11B;n&#xED;
        <br />
        C) Cestovn&#xED; poji&#x161;t&#x11B;n&#xED;
        <br />
        D) Poji&#x161;t&#x11B;n&#xED; motorov&#xFD;ch vozidel
      </p>
      <div>
        <button onClick={() => keys.toggleKey(11)}>Klíče</button>
        <Collapse in={keys.getValue(11)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) — C) <br />
              2) — D) <br />
              3) — A) <br />
              4) — B) <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          18. K procvi&#x10D;en&#xED; slovn&#xED; z&#xE1;soby ze souboru
          &#xAB;Slu&#x17E;by&#xBB; n&#xE1;sleduj&#xED;c&#xED; v&#x11B;ty v
          ru&#x161;tin&#x11B; p&#x159;elo&#x17E;te do &#x10D;e&#x161;tiny.
        </strong>
      </p>
      <p>
        1) &#x42F; &#x431;&#x44B; &#x445;&#x43E;&#x442;&#x435;&#x43B;&#x430;
        &#x43F;&#x43E;&#x434;&#x441;&#x442;&#x440;&#x438;&#x447;&#x44C;
        &#x43A;&#x43E;&#x43D;&#x447;&#x438;&#x43A;&#x438;
        &#x432;&#x43E;&#x43B;&#x43E;&#x441;.
        <br />
        2) &#x41C;&#x43E;&#x433;&#x43B;&#x438; &#x431;&#x44B; &#x43C;&#x44B;
        &#x43E;&#x434;&#x43E;&#x43B;&#x436;&#x438;&#x442;&#x44C;
        &#x442;&#x432;&#x43E;&#x44E; &#x441;&#x442;&#x430;&#x440;&#x443;&#x44E;
        &#x43C;&#x430;&#x448;&#x438;&#x43D;&#x443;,
        &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x443;&#x44E;
        &#x43D;&#x435;&#x43E;&#x431;&#x445;&#x43E;&#x434;&#x438;&#x43C;&#x43E;
        &#x43F;&#x43E;&#x447;&#x438;&#x441;&#x442;&#x438;&#x442;&#x44C;?
        <br />
        3) &#x412;&#x43E;&#x437;&#x43B;&#x435;
        &#x43C;&#x43E;&#x435;&#x433;&#x43E; &#x43E;&#x444;&#x438;&#x441;&#x430;
        &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x43B;&#x438;
        &#x43D;&#x43E;&#x432;&#x443;&#x44E; &#x43F;&#x43E;&#x447;&#x442;&#x443;?
        <br />
        4) &#x41C;&#x438;&#x43B;&#x430;&#x43D;
        &#x43F;&#x43E;&#x442;&#x435;&#x440;&#x44F;&#x43B;
        &#x43A;&#x430;&#x440;&#x442;&#x43E;&#x447;&#x43A;&#x443; &#x438;
        &#x441;&#x435;&#x439;&#x447;&#x430;&#x441; &#x43E;&#x43D;
        &#x434;&#x43E;&#x43B;&#x436;&#x435;&#x43D;
        &#x43F;&#x43E;&#x437;&#x432;&#x43E;&#x43D;&#x438;&#x442;&#x44C; &#x432;
        &#x431;&#x430;&#x43D;&#x43A; &#x438;
        &#x437;&#x430;&#x431;&#x43B;&#x43E;&#x43A;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C;
        &#x441;&#x432;&#x43E;&#x439; &#x441;&#x447;&#x451;&#x442;.
        <br />
        5) &#x412;&#x44B; &#x437;&#x430;&#x431;&#x44B;&#x43B;&#x438;
        &#x437;&#x430;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x44C;
        &#x431;&#x43B;&#x430;&#x43D;&#x43A; &#x434;&#x43B;&#x44F;
        &#x43F;&#x435;&#x440;&#x435;&#x432;&#x43E;&#x434;&#x430;
        &#x434;&#x435;&#x43D;&#x435;&#x433;.
      </p>
      <p>
        <em>
          Pozn&#xE1;mka: kone&#x10D;ky &#x2014;
          &#x43A;&#x43E;&#x43D;&#x447;&#x438;&#x43A;&#x438;
        </em>
      </p>
      <div>
        <button onClick={() => keys.toggleKey(12)}>Klíče</button>
        <Collapse in={keys.getValue(12)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1. Chtěla bych ostříhat konečky vlasů.
              <br />
              2. Mohli bychom si půjčit tvoje staré auto, které je potřeba
              vyčistit?
              <br />
              3. Vedle mé kanceláře otevřeli novou poštu?
              <br />
              4. Milan ztratil kartu a teď musí zavolat do banky a zablokovat
              účet.
              <br />
              5. Zapomněli jste vyplnit složenku.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          &#x41D;&#x430; &#x44D;&#x442;&#x43E;&#x43C;
          &#x43F;&#x43E;&#x43A;&#x430; &#x432;&#x441;&#x451;.
          &#x423;&#x432;&#x438;&#x434;&#x438;&#x43C;&#x441;&#x44F;
          &#x43D;&#x430;
          &#x441;&#x43B;&#x435;&#x434;&#x443;&#x44E;&#x449;&#x435;&#x43C;
          &#x443;&#x440;&#x43E;&#x43A;&#x435;!
        </strong>
      </p>
    </div>
  );
};

export default LectureFifteen;
