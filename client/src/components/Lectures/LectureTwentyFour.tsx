import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import GreenBox from "../UI/GreenBox";

const LectureTwentyFour: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(5);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">24. lekce</h1>
        <p>Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; a &#x17E;ivotopis</p>

        <Link to="/admin/lectures/23">Предыдущий урок</Link>
        <Link to="/admin/lectures/25">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          V&#xED;t&#xE1;me v&#xE1;s na nov&#xE9; lekci
          <strong>
            &#xAB;Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; a &#x17E;ivotopis&#xBB;
          </strong>
          !
        </em>
      </p>
      <h2 className="bg-warning">
        VZD&#x11A;L&#xC1;V&#xC1;N&#xCD; A &#x17D;IVOTOPIS
      </h2>

      <p className="text-center">
        <strong>
          Pro procvi&#x10D;ov&#xE1;n&#xED; slovn&#xED; z&#xE1;soby jsme
          p&#x159;ipravili pro V&#xE1;s karti&#x10D;ky na Quizlet:
        </strong>
      </p>
      <p>
        <a target="blank" href="https://quizlet.com/_cwa7hy?x=1jqt&i=3zq2hw">
          OTEVŘÍT KARTIČKY
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          St&#xE1;hn&#x11B;te si soubor Slovn&#xED; z&#xE1;soba -
          Vzd&#x11B;l&#xE1;v&#xE1;n&#xED;.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_24/Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD.pdf"
        >
          Slang - Slovn&#xED; z&#xE1;soba - Vzd&#x11B;l&#xE1;v&#xE1;n&#xED;
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          Poslechnete si audia Slovn&#xED; z&#xE1;soba &#x2014;
          Vzd&#x11B;l&#xE1;v&#xE1;n&#xED;.
        </strong>
      </p>
      <div>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/1.1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+%C5%A0kolsk%C3%A1+za%C5%99%C3%ADzen%C3%AD.mp3"
          ></audio>
          <figcaption>
            <strong>
              1.1. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - &#x160;kolsk&#xE1;
              za&#x159;&#xED;zen&#xED;
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/1.2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+%C5%A0kolsk%C3%A1+za%C5%99%C3%ADzen%C3%AD.mp3"
          ></audio>
          <figcaption>
            <strong>
              1.2. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - &#x160;kolsk&#xE1;
              za&#x159;&#xED;zen&#xED;
            </strong>
          </figcaption>
        </figure>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+M%C3%ADsta+spojen%C3%A1+se+%C5%A1koln%C3%ADmi+za%C5%99%C3%ADzen%C3%ADmi.mp3"
          ></audio>
          <figcaption>
            <strong>
              2. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - M&#xED;sta spojen&#xE1; se
              &#x161;koln&#xED;mi za&#x159;&#xED;zen&#xED;mi
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/3.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+Vybaveni%CC%81+do+s%CC%8Ckoly.mp3"
          ></audio>
          <figcaption>
            <strong>
              3. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - Vybaveni&#x301; do s&#x30C;koly
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/4.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+Osoby+spojen%C3%A9+se+%C5%A1kolstv%C3%ADm.mp3"
          ></audio>
          <figcaption>
            <strong>
              4. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - Osoby spojen&#xE9; se
              &#x161;kolstv&#xED;m
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/5.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+Vyu%C4%8Dov%C3%A1n%C3%AD.mp3"
          ></audio>
          <figcaption>
            <strong>
              5. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - Vyu&#x10D;ov&#xE1;n&#xED;
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/6.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+%C4%8Cinnosti+konan%C3%A9+ve+%C5%A1kole.mp3"
          ></audio>
          <figcaption>
            <strong>
              6. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - &#x10C;innosti konan&#xE9; ve
              &#x161;kole
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/7.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+N%C4%9Bkter%C3%A9+vyu%C4%8Dovac%C3%AD+p%C5%99edm%C4%9Bty+a+obory.mp3"
          ></audio>
          <figcaption>
            <strong>
              7. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - N&#x11B;kter&#xE9;
              vyu&#x10D;ovac&#xED; p&#x159;edm&#x11B;ty a obory
            </strong>
          </figcaption>
        </figure>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/8.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+Zkou%C5%A1ky+a+testy+ve+%C5%A1kole.mp3"
          ></audio>
          <figcaption>
            <strong>
              8. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - Zkou&#x161;ky a testy ve
              &#x161;kole
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/9.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Vzd%C4%9Bl%C3%A1v%C3%A1n%C3%AD+-+Dosa%C5%BEen%C3%A9+vzd%C4%9Bl%C3%A1n%C3%AD.mp3"
          ></audio>
          <figcaption>
            <strong>
              9. Slang - Slovn&#xED; z&#xE1;soba -
              Vzd&#x11B;l&#xE1;v&#xE1;n&#xED; - Dosa&#x17E;en&#xE9;
              vzd&#x11B;l&#xE1;n&#xED;
            </strong>
          </figcaption>
        </figure>
      </div>

      <p className="ng-warning">
        St&#xE1;hn&#x11B;te si soubor Slovn&#xED; z&#xE1;soba - &#x17D;ivotopis.
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_24/Slang+-+Slovn%C3%AD+z%C3%A1soba+-+%C5%BDivotopis.pdf"
        >
          Slang - Slovn&#xED; z&#xE1;soba - &#x17D;ivotopis
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          Poslechnete si audia Slovn&#xED; z&#xE1;soba &#x2014; &#x17D;ivotopis.
        </strong>
      </p>
      <div>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+%C5%BDivotopis+-+St%C3%A1tn%C3%AD+p%C5%99%C3%ADslu%C5%A1nost+a+n%C3%A1rodnost.mp3"
          ></audio>
          <figcaption>
            <strong>
              1. Slang - Slovn&#xED; z&#xE1;soba - &#x17D;ivotopis -
              St&#xE1;tn&#xED; p&#x159;&#xED;slu&#x161;nost a n&#xE1;rodnost
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+%C5%BDivotopis+-+P%C5%AFvod.mp3"
          ></audio>
          <figcaption>
            <strong>
              2. Slang - Slovn&#xED; z&#xE1;soba - &#x17D;ivotopis - P&#x16F;vod
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/3.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+%C5%BDivotopis+-+N%C3%A1bo%C5%BEenstv%C3%AD.mp3"
          ></audio>
          <figcaption>
            <strong>
              3. Slang - Slovn&#xED; z&#xE1;soba - &#x17D;ivotopis -
              N&#xE1;bo&#x17E;enstv&#xED;
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_24/4.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+%C5%BDivotopis+-+Osobn%C3%AD+doklady.mp3"
          ></audio>
          <figcaption>
            <strong>
              4. Slang - Slovn&#xED; z&#xE1;soba - &#x17D;ivotopis - Osobn&#xED;
              doklady
            </strong>
          </figcaption>
        </figure>
      </div>

      <h2 className="bg-warning">
        VZD&#x11A;L&#xC1;V&#xC1;N&#xCD; V &#x10C;ESK&#xC9; REPUBLICE
      </h2>

      <p>
        &#x412; &#x427;&#x435;&#x445;&#x438;&#x438;
        &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x430;
        &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F;
        &#x43E;&#x442;&#x43B;&#x438;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F;
        &#x43E;&#x442; &#x43D;&#x430;&#x43C;
        &#x43F;&#x440;&#x438;&#x432;&#x44B;&#x447;&#x43D;&#x43E;&#x439;,
        &#x434;&#x430;&#x432;&#x430;&#x439;&#x442;&#x435;
        &#x440;&#x430;&#x437;&#x431;&#x435;&#x440;&#x451;&#x43C;&#x441;&#x44F;.
      </p>
      <p>
        &#x414;&#x43B;&#x44F; &#x412;&#x430;&#x441; &#x43C;&#x44B;
        &#x43F;&#x43E;&#x434;&#x43E;&#x431;&#x440;&#x430;&#x43B;&#x438;
        &#x43F;&#x43E;&#x43D;&#x44F;&#x442;&#x43D;&#x44B;&#x435;
        &#x441;&#x445;&#x435;&#x43C;&#x44B;
        &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F;
        &#x432; &#x427;&#x435;&#x448;&#x441;&#x43A;&#x43E;&#x439;
        &#x420;&#x435;&#x441;&#x43F;&#x443;&#x431;&#x43B;&#x438;&#x43A;&#x435;.
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_24/picture_1.png"
          alt="picture_1"
        />
      </p>
      <p>
        <strong>
          &#x414;&#x43E;&#x448;&#x43A;&#x43E;&#x43B;&#x44C;&#x43D;&#x43E;&#x435;
          &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;
          (Mate&#x159;sk&#xE1; &#x161;kola)
        </strong>
        &#x434;&#x435;&#x442;&#x438; &#x43C;&#x43E;&#x433;&#x443;&#x442;
        &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x441;
        &#x442;&#x440;&#x451;&#x445; &#x43B;&#x435;&#x442; &#x432;
        &#x434;&#x435;&#x442;&#x441;&#x43A;&#x43E;&#x43C;
        &#x441;&#x430;&#x434;&#x443;, &#x43A;&#x430;&#x43A; &#x432;
        &#x447;&#x430;&#x441;&#x442;&#x43D;&#x43E;&#x43C; (&#x438;&#x445;
        &#x43C;&#x435;&#x43D;&#x44C;&#x448;&#x435;), &#x442;&#x430;&#x43A;
        &#x438; &#x432;
        &#x433;&#x43E;&#x441;&#x443;&#x434;&#x430;&#x440;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x43C;.
        &#x420;&#x430;&#x437;&#x43B;&#x438;&#x447;&#x438;&#x435; &#x432;
        &#x444;&#x43E;&#x440;&#x43C;&#x435;
        &#x441;&#x43E;&#x431;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x441;&#x442;&#x438;
        &#x43D;&#x435;
        &#x43F;&#x440;&#x435;&#x434;&#x43F;&#x43E;&#x43B;&#x430;&#x433;&#x430;&#x435;&#x442;
        &#x440;&#x430;&#x437;&#x43B;&#x438;&#x447;&#x438;&#x435; &#x432;
        &#x43A;&#x430;&#x447;&#x435;&#x441;&#x442;&#x432;&#x435;
        &#x443;&#x441;&#x43B;&#x443;&#x433;,
        &#x43F;&#x440;&#x435;&#x434;&#x43E;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x44F;&#x435;&#x43C;&#x44B;&#x445;
        &#x438; &#x442;&#x435;&#x43C;&#x438;, &#x438;
        &#x434;&#x440;&#x443;&#x433;&#x438;&#x43C;&#x438;. &#x418;
        &#x44D;&#x442;&#x43E;
        &#x43E;&#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x44F;&#x435;&#x442;
        &#x43E;&#x431;&#x449;&#x438;&#x439;
        &#x443;&#x440;&#x43E;&#x432;&#x435;&#x43D;&#x44C;
        &#x434;&#x43E;&#x448;&#x43A;&#x43E;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E;
        &#x432;&#x43E;&#x441;&#x43F;&#x438;&#x442;&#x430;&#x43D;&#x438;&#x44F;.
      </p>
      <p>
        <strong>
          &#x428;&#x43A;&#x43E;&#x43B;&#x44C;&#x43D;&#x43E;&#x435;
          &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;
        </strong>
        &#x432; &#x427;&#x435;&#x445;&#x438;&#x438;
        &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; 2
        &#x441;&#x442;&#x443;&#x43F;&#x435;&#x43D;&#x435;&#x439;:
        &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x43E;&#x433;&#x43E;
        (Z&#xE1;kladn&#xED; &#x161;kola) &#x438;
        &#x441;&#x442;&#x430;&#x440;&#x448;&#x435;&#x433;&#x43E;
        (St&#x159;edo&#x161;kolsk&#xE9; vzd&#x11B;l&#xE1;n&#xED;).
        &#x411;&#x430;&#x437;&#x43E;&#x432;&#x43E;&#x435;
        &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;
        &#x440;&#x435;&#x431;&#x451;&#x43D;&#x43E;&#x43A;
        &#x43D;&#x430;&#x447;&#x438;&#x43D;&#x430;&#x435;&#x442;
        &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x442;&#x44C; &#x432; 6
        &#x43B;&#x435;&#x442;, &#x443;&#x447;&#x438;&#x442;&#x441;&#x44F;
        &#x434;&#x43E; 14. &#x42D;&#x442;&#x43E;
        &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;
        &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F;
        &#x43E;&#x431;&#x44F;&#x437;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;,
        &#x438; &#x437;&#x430;&#x43A;&#x43E;&#x43D; &#x43E;
        &#x43D;&#x435;&#x43C;
        &#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443;&#x435;&#x442; &#x432;
        &#x427;&#x435;&#x445;&#x438;&#x438; &#x441; 1949
        &#x433;&#x43E;&#x434;&#x430;.
      </p>
      <p>
        &#x41F;&#x43E;&#x441;&#x43B;&#x435;
        &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F;
        &#x431;&#x430;&#x437;&#x43E;&#x432;&#x43E;&#x433;&#x43E;
        &#x43E;&#x431;&#x44F;&#x437;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E;
        &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F;
        &#x447;&#x435;&#x448;&#x441;&#x43A;&#x438;&#x435;
        &#x448;&#x43A;&#x43E;&#x43B;&#x44C;&#x43D;&#x438;&#x43A;&#x438;
        &#x43C;&#x43E;&#x433;&#x443;&#x442;
        &#x432;&#x44B;&#x431;&#x440;&#x430;&#x442;&#x44C; &#x438;&#x437;
        &#x442;&#x440;&#x451;&#x445;
        &#x432;&#x430;&#x440;&#x438;&#x430;&#x43D;&#x442;&#x43E;&#x432;:
      </p>
      <ul>
        <li>
          <strong>
            &#x441;&#x440;&#x435;&#x434;&#x43D;&#x44F;&#x44F;
            &#x448;&#x43A;&#x43E;&#x43B;&#x430;
          </strong>
          &#x2014; St&#x159;edn&#xED; &#x161;kola, (2
          &#x433;&#x43E;&#x434;&#x430;
          &#x43E;&#x431;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F;,
          &#x430;&#x442;&#x442;&#x435;&#x441;&#x442;&#x430;&#x442;
          &#x437;&#x440;&#x435;&#x43B;&#x43E;&#x441;&#x442;&#x438;
          &#x43D;&#x435;
          &#x432;&#x440;&#x443;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F;);
        </li>
        <li>
          <strong>
            &#x441;&#x440;&#x435;&#x434;&#x43D;&#x435;&#x435;
            &#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x435;
            &#x443;&#x447;&#x438;&#x43B;&#x438;&#x449;&#x435;
          </strong>
          &#x2014; St&#x159;edn&#xED; odborn&#xE9; u&#x10D;ili&#x161;t&#x11B;,
          (SOU), (&#x441;&#x440;&#x43E;&#x43A;
          &#x43E;&#x431;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; 2-3
          &#x433;&#x43E;&#x434;&#x430;,
          &#x443;&#x447;&#x435;&#x43D;&#x438;&#x43A;&#x438;
          &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442;
          &#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x441;&#x442;&#x44C;
          &#x438; &#x43C;&#x43E;&#x433;&#x443;&#x442;
          &#x43D;&#x430;&#x447;&#x430;&#x442;&#x44C;
          &#x442;&#x440;&#x443;&#x434;&#x43E;&#x432;&#x443;&#x44E;
          &#x434;&#x435;&#x44F;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x441;&#x442;&#x44C;);
        </li>
        <li>
          <strong>
            &#x441;&#x440;&#x435;&#x434;&#x43D;&#x435;&#x435;
            &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;
            &#x441;
            &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x435;&#x43C;
            &#x430;&#x442;&#x442;&#x435;&#x441;&#x442;&#x430;&#x442;&#x430;
            &#x437;&#x440;&#x435;&#x43B;&#x43E;&#x441;&#x442;&#x438;,
            &#x43F;&#x43E;-&#x447;&#x435;&#x448;&#x441;&#x43A;&#x438;
            &#xAB;maturita&#xBB;,
          </strong>
          &#x2014; St&#x159;edn&#xED; odborn&#xE1; &#x161;kola (SO&#x160;), (4
          &#x433;&#x43E;&#x434;&#x430; &#x432;
          &#x441;&#x440;&#x435;&#x434;&#x43D;&#x435;&#x439;
          &#x448;&#x43A;&#x43E;&#x43B;&#x435; &#x441;
          &#x43E;&#x431;&#x44F;&#x437;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x439;
          &#x441;&#x434;&#x430;&#x447;&#x435;&#x439;
          &#x432;&#x44B;&#x43F;&#x443;&#x441;&#x43A;&#x43D;&#x44B;&#x445;
          &#x44D;&#x43A;&#x437;&#x430;&#x43C;&#x435;&#x43D;&#x43E;&#x432;,
          &#x434;&#x43B;&#x44F;
          &#x438;&#x43D;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x446;&#x435;&#x432;
          &#x2014; &#x43D;&#x430;
          &#x447;&#x435;&#x448;&#x441;&#x43A;&#x43E;&#x43C;
          &#x44F;&#x437;&#x44B;&#x43A;&#x435;;
          &#x43E;&#x431;&#x44F;&#x437;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x44D;&#x43A;&#x437;&#x430;&#x43C;&#x435;&#x43D; &#x2014;
          &#x447;&#x435;&#x448;&#x441;&#x43A;&#x438;&#x439;
          &#x44F;&#x437;&#x44B;&#x43A; &#x438;
          &#x43B;&#x438;&#x442;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x430;,
          &#x438; &#x434;&#x43E; 4
          &#x44D;&#x43A;&#x437;&#x430;&#x43C;&#x435;&#x43D;&#x43E;&#x432;
          &#x43F;&#x43E; &#x432;&#x44B;&#x431;&#x43E;&#x440;&#x443;).
        </li>
      </ul>
      <p>
        <strong>
          &#x413;&#x438;&#x43C;&#x43D;&#x430;&#x437;&#x438;&#x44F;
        </strong>
        &#x441;&#x447;&#x438;&#x442;&#x430;&#x435;&#x442;&#x441;&#x44F;
        &#x441;&#x430;&#x43C;&#x44B;&#x43C;
        &#x43F;&#x440;&#x435;&#x441;&#x442;&#x438;&#x436;&#x43D;&#x44B;&#x43C;
        &#x432;&#x430;&#x440;&#x438;&#x430;&#x43D;&#x442;&#x43E;&#x43C;
        &#x43F;&#x440;&#x43E;&#x434;&#x43E;&#x43B;&#x436;&#x435;&#x43D;&#x438;&#x44F;
        &#x443;&#x447;&#x451;&#x431;&#x44B; &#x43F;&#x43E;&#x441;&#x43B;&#x435;
        &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; 9
        &#x43A;&#x43B;&#x430;&#x441;&#x441;&#x43E;&#x432;
        &#x431;&#x430;&#x437;&#x43E;&#x432;&#x43E;&#x433;&#x43E;
        &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F;.
        &#x41F;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x438;&#x442;&#x44C;
        &#x442;&#x443;&#x434;&#x430;
        &#x434;&#x43E;&#x432;&#x43E;&#x43B;&#x44C;&#x43D;&#x43E;
        &#x441;&#x43B;&#x43E;&#x436;&#x43D;&#x43E;,
        &#x441;&#x434;&#x435;&#x43B;&#x430;&#x442;&#x44C; &#x44D;&#x442;&#x43E;
        &#x443;&#x434;&#x430;&#x451;&#x442;&#x441;&#x44F;
        &#x43B;&#x438;&#x448;&#x44C; 20%
        &#x443;&#x447;&#x435;&#x43D;&#x438;&#x43A;&#x43E;&#x432;. &#x412;
        &#x440;&#x430;&#x43C;&#x43A;&#x430;&#x445;
        4&#x445;-&#x43B;&#x435;&#x442;&#x43D;&#x435;&#x439;
        &#x43F;&#x440;&#x43E;&#x433;&#x440;&#x430;&#x43C;&#x43C;&#x44B;
        &#x438;&#x434;&#x451;&#x442;
        &#x443;&#x441;&#x438;&#x43B;&#x435;&#x43D;&#x43D;&#x430;&#x44F;
        &#x43F;&#x43E;&#x434;&#x433;&#x43E;&#x442;&#x43E;&#x432;&#x43A;&#x430;
        &#x443;&#x447;&#x430;&#x449;&#x438;&#x445;&#x441;&#x44F; &#x43A;
        &#x43F;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x43B;&#x435;&#x43D;&#x438;&#x44E;
        &#x432; &#x432;&#x44B;&#x441;&#x448;&#x438;&#x435;
        &#x443;&#x447;&#x435;&#x431;&#x43D;&#x44B;&#x435;
        &#x437;&#x430;&#x432;&#x435;&#x434;&#x435;&#x43D;&#x438;&#x44F;
        &#x441;&#x442;&#x440;&#x430;&#x43D;&#x44B;. &#x41F;&#x43E;
        &#x43E;&#x43A;&#x43E;&#x43D;&#x447;&#x430;&#x43D;&#x438;&#x438;
        &#x433;&#x438;&#x43C;&#x43D;&#x430;&#x437;&#x438;&#x438;
        &#x441;&#x442;&#x443;&#x434;&#x435;&#x43D;&#x442;&#x44B;
        &#x441;&#x434;&#x430;&#x44E;&#x442;
        &#x433;&#x43E;&#x441;&#x443;&#x434;&#x430;&#x440;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x439;
        &#x44D;&#x43A;&#x437;&#x430;&#x43C;&#x435;&#x43D; (Maturitu) &#x2014;
        &#x447;&#x435;&#x448;&#x441;&#x43A;&#x438;&#x439;
        &#x44F;&#x437;&#x44B;&#x43A; &#x438;
        &#x43B;&#x438;&#x442;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x443;,
        &#x438;&#x43D;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x43D;&#x44B;&#x439;
        &#x44F;&#x437;&#x44B;&#x43A;.
      </p>
      <p>
        <strong>
          &#x412;&#x44B;&#x441;&#x448;&#x435;&#x435;
          &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;
          (Vysok&#xE1; &#x161;kola)
        </strong>
        &#x432; &#x427;&#x435;&#x445;&#x438;&#x438;
        &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442;
        &#x438;&#x43B;&#x438; &#x432;
        &#x43A;&#x43E;&#x43B;&#x43B;&#x435;&#x434;&#x436;&#x430;&#x445;,
        &#x438;&#x43B;&#x438; &#x432;
        &#x443;&#x43D;&#x438;&#x432;&#x435;&#x440;&#x441;&#x438;&#x442;&#x435;&#x442;&#x430;&#x445;.
        &#x420;&#x430;&#x437;&#x43D;&#x438;&#x446;&#x430; &#x432;
        &#x442;&#x43E;&#x43C;, &#x447;&#x442;&#x43E;
        &#x43A;&#x43E;&#x43B;&#x43B;&#x435;&#x434;&#x436;
        &#x434;&#x430;&#x451;&#x442;
        &#x443;&#x437;&#x43A;&#x43E;&#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x438;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x43D;&#x44B;&#x435;
        &#x437;&#x43D;&#x430;&#x43D;&#x438;&#x44F; &#x438; &#x43D;&#x435;
        &#x43F;&#x440;&#x435;&#x434;&#x43F;&#x43E;&#x43B;&#x430;&#x433;&#x430;&#x435;&#x442;
        &#x43C;&#x430;&#x433;&#x438;&#x441;&#x442;&#x440;&#x430;&#x442;&#x443;&#x440;&#x44B;,
        &#x430;
        &#x443;&#x43D;&#x438;&#x432;&#x435;&#x440;&#x441;&#x438;&#x442;&#x435;&#x442;
        &#x2014; &#x431;&#x43E;&#x43B;&#x435;&#x435;
        &#x448;&#x438;&#x440;&#x43E;&#x43A;&#x438;&#x435;,
        &#x43C;&#x43E;&#x436;&#x43D;&#x43E;
        &#x441;&#x43A;&#x430;&#x437;&#x430;&#x442;&#x44C;,
        &#x430;&#x43A;&#x430;&#x434;&#x435;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435;
        &#x437;&#x43D;&#x430;&#x43D;&#x438;&#x44F; &#x438;
        &#x438;&#x43C;&#x435;&#x435;&#x442;
        &#x43C;&#x430;&#x433;&#x438;&#x441;&#x442;&#x440;&#x430;&#x442;&#x443;&#x440;&#x443;.
      </p>
      <p>
        <a target="blank" href="https://praga-praha.ru/obrazovanie/">
          &#x418;&#x441;&#x442;&#x43E;&#x447;&#x43D;&#x438;&#x43A;
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1.1
          &#x43F;&#x43E; &#x2116; 6
        </strong>
      </p>
      <p>
        <strong>
          1.1. Poslechn&#x11B;te si dialog a se&#x159;a&#x10F;te tyto v&#x11B;ty
          do spr&#xE1;vn&#xE9;ho po&#x159;ad&#xED; a vytvo&#x159;te dialog.
        </strong>
      </p>

      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_24/Slang+-+Dialog+-+Pohovor+-+Firma+KLD.mp3"
        ></audio>
        <figcaption>
          <strong>
            Slang - Dialog - Pohovor - Firma KLD by Computer Press
          </strong>
        </figcaption>
      </figure>

      <p>
        <strong>
          Dialog. Firma KLD hled&#xE1; nov&#xE9;ho pr&#xE1;vn&#xED;ka. Pan&#xED;
          sekret&#xE1;&#x159;ka mluv&#xED; s jedn&#xED;m z uchaze&#x10D;&#x16F;,
          kter&#xFD; &#x10D;ek&#xE1;, a&#x17E; ho pan &#x159;editel
          p&#x159;ijme.
        </strong>
      </p>
      <p>
        1) Ne, d&#x11B;kuji. Mo&#x17E;n&#xE1; trochu miner&#xE1;lky.
        <br />
        2) Va&#x161;e kontaktn&#xED; adresa je N&#xE1;dra&#x17E;n&#xED; ulice 7.
        V jak&#xE9; &#x10D;&#xE1;sti Prahy bydl&#xED;te?
        <br />
        3) Ano, Ale&#x161; Nov&#xE1;k.
        <br />
        4) Telefon i adresa jsou v po&#x159;&#xE1;dku.
        <br />
        5) Tady je ta miner&#xE1;lka. Te&#x10F; si s dovolen&#xED;m zkontroluji
        n&#x11B;kter&#xE9; &#xFA;daje ve va&#x161;em &#x17E;ivotopisu.
        <br />
        6) Posa&#x10F;te se. D&#xE1;te si &#x10D;aj nebo k&#xE1;vu?
        <br />
        7) Vy jste pan Ale&#x161; Nov&#xE1;k, &#x17E;e?
        <br />
        8) Pan &#x159;editel v&#xE1;s za chv&#xED;li p&#x159;ijme.
        <br />
        9) Praha 5.
        <br />
        10) D&#x11B;kuji. To je ode m&#x11B; v&#x161;echno. Zkontrolujte tady
        je&#x161;t&#x11B;, pros&#xED;m, zda jsem si sem na v&#xE1;s napsala
        spr&#xE1;vn&#xE9; telefonn&#xED; &#x10D;&#xED;slo a e-mailovou adresu.
        <br />
        11) Samoz&#x159;ejm&#x11B;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>7), 3), 8), 6), 1), 5), 11), 2), 9), 10), 4).</p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          1.2. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED;
          tvrzen&#xED;.
        </strong>
      </p>
      <p>
        <strong>
          Poslechn&#x11B;te si dialog a pak vypracujte odpov&#x11B;di.
          Ozna&#x10D;te, zda je tvrzen&#xED; pravda (ANO), nebo nen&#xED; pravda
          (NE).
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> V dialogu mluv&#xED; Ale&#x161; Nov&#xE1;k a pan
        &#x159;editel.*
        <br />
        ANO / NE
      </p>
      <p>
        A) Ale&#x161; Nov&#xE1;k si d&#xE1; k&#xE1;vu.
        <br />
        ANO / NE
      </p>
      <p>
        B) A. Nov&#xE1;k b&#x11B;hem studia pracoval jen v &#x10D;esk&#xFD;ch
        firm&#xE1;ch.
        <br />
        ANO / NE
      </p>
      <p>
        C) A. Nov&#xE1;k se domluv&#xED; anglicky a rusky.
        <br />
        ANO / NE
      </p>
      <p>
        D) A. Nov&#xE1;k ovl&#xE1;d&#xE1; v&#xED;ce ne&#x17E; jen jeden
        po&#x10D;&#xED;ta&#x10D;ov&#xFD; program.
        <br />
        ANO / NE
      </p>
      <p>
        E) A. Nov&#xE1;k se na univerzit&#x11B; zaj&#xED;mal o autorsk&#xE9;
        pr&#xE1;vo.
        <br />
        ANO / NE
      </p>
      <p>
        F) Pan &#x159;editel nab&#xED;z&#xED; A. Nov&#xE1;kovi plat 30 000
        &#x10D;ist&#xE9;ho.
        <br />
        ANO / NE
      </p>
      <p>
        G) A. Nov&#xE1;k bude pracovat sedm hodin denn&#x11B;.
        <br />
        ANO / NE
      </p>
      <p>
        H) Pan &#x159;editel d&#xE1; A. Nov&#xE1;kovi smlouvu t&#xFD;den po jeho
        n&#xE1;tupu.
        <br />
        ANO / NE
      </p>
      <p>
        I) A. Nov&#xE1;k se v&#xFD;sledek konkurzu dozv&#xED; 1.12. 2009.
        <br />
        ANO / NE
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic d-flex flex-column">
            <div>
              <p>
                A) ANO; <br />
                B) NE; <br />
                C) ANO; <br />
                D) ANO; <br />
                E) ANO; <br />
              </p>
            </div>
            <div>
              <p>
                F) NE; <br />
                G) NE; <br />
                H) NE; <br />
                I) NE. <br />
              </p>
            </div>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          1.3. Poslechn&#x11B;te si dialog je&#x161;t&#x11B; jednou a pak podle
          informac&#xED; z textu utvo&#x159;te z n&#xE1;sleduj&#xED;c&#xED;ch
          slov v&#x11B;ty.
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> Ale&#x161; Nov&#xE1;k / ovl&#xE1;dat /
        po&#x10D;&#xED;ta&#x10D; / velmi dob&#x159;e. -&gt;
        <strong>
          Ale&#x161; Nov&#xE1;k ovl&#xE1;d&#xE1; po&#x10D;&#xED;ta&#x10D;e velmi
          dob&#x159;e.*
        </strong>
      </p>
      <p>
        1) Ale&#x161; Nov&#xE1;k / pracovat / jako / pr&#xE1;vn&#xED;k / pro /
        n&#x11B;kolik / &#x10D;esk&#xFD; / i / zahrani&#x10D;n&#xED; / firma.
        <br />
        2) Ale&#x161; Nov&#xE1;k / m&#xED;t / r&#x16F;zn&#xFD; / pracovn&#xED; /
        zku&#x161;enost / ze / zahrani&#x10D;&#xED;.
        <br />
        3) Ale&#x161; Nov&#xE1;k / u&#x17E; / na / univerzita / zaj&#xED;mat se
        / autorsk&#xFD; / pr&#xE1;vo.
        <br />
        4) Pan &#x159;editel / moct / Ale&#x161; Nov&#xE1;k / za / t&#x159;i /
        m&#x11B;s&#xED;ce / zv&#xFD;&#x161;it / plat / podle / jeho /
        pracovn&#xED; / v&#xFD;sledek.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Aleš Novák pracoval jako právník pro několik českých i
              zahraničních firem. <br />
              2) Aleš Novák má různé pracovní zkušenosti ze zahraničí. <br />
              3) Aleš Novák se už na univerzitě zajímal o autorské právo. <br />
              4) Pan ředitel může Alešovi Nováku za tři měsíce zvýšit plat podle
              jeho pracovního výsledku. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>Transkript k poslechu.</strong>
      </p>
      <p>
        <strong>
          Interview &#x2014; pohovor. &#x158;editel a Ale&#x161; Nov&#xE1;k.
        </strong>
      </p>
      <p>
        <strong>Ale&#x161; Nov&#xE1;k:</strong> Dobr&#xFD; den, j&#xE1; jsem
        Ale&#x161; Nov&#xE1;k.
        <br />
        <strong>&#x158;editel:</strong> Dobr&#xFD; den, Michal Kr&#xE1;tk&#xFD;.
        Poj&#x10F;te d&#xE1;l, u&#x17E; na v&#xE1;s &#x10D;ek&#xE1;m.
        Posa&#x10F;te se.
        <br />
        <strong>AN:</strong> D&#x11B;kuju.
        <br />
        <strong>&#x158;:</strong> D&#xE1;te si n&#x11B;co k pit&#xED;?
        <br />
        <strong>AN:</strong> K&#xE1;vu, pros&#xED;m.
        <br />
        <strong>&#x158;:</strong> Jarmilo, p&#x159;ineste, pros&#xED;m, jednu
        k&#xE1;vu.
      </p>
      <p>
        <strong>&#x158;:</strong> Tak, j&#xE1; mysl&#xED;m, &#x17E;e bychom
        mohli p&#x159;ej&#xED;t rovnou k v&#x11B;ci. &#x158;ekn&#x11B;te mi
        nejd&#x159;&#xED;v n&#x11B;co o sv&#xE9;m studiu a pak o pracovn&#xED;ch
        zku&#x161;enostech.
        <br />
        <strong>AN:</strong> Ano, promoval jsem na Pr&#xE1;vnick&#xE9;
        fakult&#x11B; Karlovy univerzity a tak&#xE9; na &#x10C;ZU v Praze, to je
        &#x10C;esk&#xE1; zem&#x11B;d&#x11B;lsk&#xE1; univerzita. Ke konci studia
        a po n&#x11B;m jsem pracoval jako pr&#xE1;vn&#xED;k pro n&#x11B;kolik
        &#x10D;esk&#xFD;ch i zahrani&#x10D;n&#xED;ch firem.
        <br />
        <strong>&#x158;:</strong> Hm, to je zaj&#xED;mav&#xE9;. Ve sv&#xE9;m
        &#x17E;ivotopisu p&#xED;&#x161;ete, &#x17E;e jste studoval ve Velk&#xE9;
        Brit&#xE1;nii.
        <br />
        <strong>AN:</strong> V Anglii jsem byl na st&#xE1;&#x17E;i a
        spolupracoval jsem s pr&#xE1;vn&#xED;ky r&#x16F;zn&#xFD;ch
        nadn&#xE1;rodn&#xED;ch firem.
        <br />
        <strong>&#x158;:</strong> Kter&#xE9; jazyky ovl&#xE1;d&#xE1;te? V
        na&#x161;&#xED; firm&#x11B; je pot&#x159;eba angli&#x10D;tina na
        vysok&#xE9; &#xFA;rovni, proto&#x17E;e &#x10D;asto jedn&#xE1;me s
        anglicky mluv&#xED;c&#xED;mi partnery a jedn&#xE1;n&#xED; jsou
        v&#x11B;t&#x161;inou v angli&#x10D;tin&#x11B;.
        <br />
        <strong>AN:</strong> Anglicky dob&#x159;e mluv&#xED;m i p&#xED;&#x161;u:
        jedn&#xE1;n&#xED; v angli&#x10D;tin&#x11B; mi ned&#x11B;laj&#xED;
        probl&#xE9;my. Pak tak&#xE9; mluv&#xED;m rusky.
        <br />
        <strong>&#x158;:</strong> P&#x159;edpokl&#xE1;d&#xE1;m, &#x17E;e
        pr&#xE1;ce s r&#x16F;zn&#xFD;mi po&#x10D;&#xED;ta&#x10D;ov&#xFD;mi
        programy pro v&#xE1;s bude hra&#x10D;kou.
        <br />
        <strong>AN:</strong> Ovl&#xE1;d&#xE1;m MS WINDOWS, MS OFFICE, Internet a
        dal&#x161;&#xED; speci&#xE1;ln&#xED; programy, kter&#xE9;
        uv&#xE1;d&#xED;m ve sv&#xE9;m &#x17E;ivotopisu.
        <br />
        <strong>&#x158;:</strong> Ano. ... &#x10C;&#xED;m mysl&#xED;te, &#x17E;e
        p&#x159;isp&#x11B;jete na&#x161;&#xED; firm&#x11B;?
        <br />
        <strong>AN:</strong> M&#xE1;m r&#x16F;zn&#xE9; zku&#x161;enosti ze
        zahrani&#x10D;&#xED;, kter&#xE9; bych tady mohl vyu&#x17E;&#xED;t.
        <br />
        <strong>&#x158;:</strong> Pro&#x10D; chcete odej&#xED;t z dobr&#xE9;
        firmy, kde v&#xE1;m jist&#x11B; nab&#xED;zej&#xED; dobr&#xE9;
        platov&#xE9; podm&#xED;nky?
        <br />
        <strong>AN:</strong> U&#x17E; na univerzit&#x11B; jsem se zaj&#xED;mal o
        autorsk&#xE1; pr&#xE1;va. P&#x159;edpokl&#xE1;d&#xE1;m, &#x17E;e ve
        va&#x161;&#xED; firm&#x11B; budu m&#xED;t mo&#x17E;nost se v t&#xE9;to
        oblasti rozv&#xED;jet.
        <br />
        <strong>&#x158;:</strong> To nepochybuju. A jak&#xFD; si
        p&#x159;edstavujete plat?
        <br />
        <strong>AN:</strong> 30 000 hrub&#xE9;ho jako n&#xE1;stupn&#xED; plat.
        <br />
        <strong>&#x158;:</strong> M&#x16F;&#x17E;u v&#xE1;m nab&#xED;dnout
        p&#x159;esn&#x11B; 30 000 jako n&#xE1;stupn&#xED; plat, po t&#x159;ech
        m&#x11B;s&#xED;c&#xED;ch jej m&#x16F;&#x17E;eme zv&#xFD;&#x161;it podle
        va&#x161;ich pracovn&#xED;ch v&#xFD;sledk&#x16F;. Pr&#xE9;mie a
        odm&#x11B;ny tak&#xE9; z&#xE1;le&#x17E;&#xED; na tom,jak s v&#xE1;mi
        budeme spokojeni.
        <br />
        <strong>&#x158;:</strong> V p&#x159;&#xED;pad&#x11B;, &#x17E;e se pro
        v&#xE1;s rozhodneme, kdy m&#x16F;&#x17E;ete nastoupit?
        <br />
        <strong>AN:</strong> Za m&#x11B;s&#xED;c po va&#x161;em rozhodnut&#xED;.
        <br />
        <strong>&#x158;:</strong> To znamen&#xE1;, &#x17E;e byste mohl nastoupit
        k 1.12. 2009?
        <br />
        <strong>AN:</strong> Ano, to by mi vyhovovalo.
        <br />
        <strong>&#x158;:</strong> Chcete se na n&#x11B;co zeptat vy?
        <br />
        <strong>AN:</strong> Ano, cht&#x11B;l bych se zeptat, jak by vypadala
        moje pracovn&#xED; doba.
        <br />
        <strong>&#x158;:</strong> Ur&#x10D;it&#x11B; tady nebudete muset
        b&#xFD;t od r&#xE1;na do ve&#x10D;era. T&#xED;m chci &#x159;&#xED;ct,
        &#x17E;e pracovn&#xED; doba z&#xE1;le&#x17E;&#xED;
        p&#x159;edev&#x161;&#xED;m na v&#xE1;s. M&#x11B;l byste tady b&#xFD;t
        denn&#x11B; od 9 do 12 hodin, odpoledn&#xED; pr&#xE1;ce u&#x17E;
        z&#xE1;le&#x17E;&#xED; na va&#x161;em pracovn&#xED;m di&#xE1;&#x159;i.
        D&#x16F;le&#x17E;it&#xE9; je, abyste dob&#x159;e pracoval a
        dodr&#x17E;oval term&#xED;ny. Je&#x161;t&#x11B; n&#x11B;jak&#xE9;
        ot&#xE1;zky?
        <br />
        <strong>AN:</strong> Ano, cht&#x11B;l bych se zeptat na smlouvu.
        <br />
        <strong>&#x158;:</strong> Pokud usp&#x11B;jete, smlouvu s v&#xE1;mi
        sep&#xED;&#x161;eme v den n&#xE1;stupu.
        <br />
        <strong>AN:</strong> Dob&#x159;e.
        <br />
        <strong>&#x158;:</strong> M&#xE1;te je&#x161;t&#x11B; n&#x11B;jak&#xE9;
        ot&#xE1;zky?
        <br />
        <strong>AN:</strong> U&#x17E; ne, to je v&#x161;echno, co jsem
        pot&#x159;eboval v&#x11B;d&#x11B;t.
        <br />
        <strong>&#x158;:</strong> Jsem r&#xE1;d, &#x17E;e jsem v&#xE1;s poznal.
        Ur&#x10D;it&#x11B; se v&#xE1;m do t&#xFD;dne ozveme.
        <br />
        <strong>AN:</strong> D&#x11B;kuju, pot&#x11B;&#x161;en&#xED; je i na
        m&#xE9; stran&#x11B;.
        <br />
        <strong>&#x158;:</strong> Na shledanou.
        <br />
        <strong>AN:</strong> Na shledanou.
      </p>
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

      <GreenBox
        header="Внимание! Задание № 2 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          2. Pod&#xED;vejte na n&#xE1;sleduj&#xED;c&#xED; video a
          &#x159;ekn&#x11B;te, kter&#xE1; z kandid&#xE1;tek je podle v&#xE1;s
          nejvhodn&#x11B;j&#x161;&#xED; pro tuto pracovn&#xED; pozici &#x2014;
          kter&#xE1; naopak nen&#xED; v&#x16F;bec vhodn&#xE1; a pro&#x10D;.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=S4sUMzkqv5M">
          Pracovn&#xED; pohovor - nej&#x10D;ast&#x11B;j&#x161;&#xED; ot&#xE1;zky
          a odpov&#x11B;di
        </a>
      </p>
      <GreenBox
        header="Внимание! Задание № 3 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          3. Pod&#xED;vejte se na video a &#x159;ekn&#x11B;te sv&#xFD;mi slovy,
          jak&#xE9; rady jste si z videa odnesly.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=HAwMypNMHys">
          Jak na pohovor
        </a>
      </p>
      <p>
        <strong>
          4. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video.
          N&#xE1;sledn&#x11B; si p&#x159;e&#x10D;t&#x11B;te text, kde najdete
          shrnut&#xED; informace z videa. Tak&#xE9; se pod&#xED;vejte na vzor
          spr&#xE1;vn&#x11B; vypracovan&#xE9;ho &#x17E;ivotopisu.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=EG18xSfFUoY">
          5 nej&#x10D;ast&#x11B;j&#x161;&#xED;ch chyb v &#x17E;ivotopisu
        </a>
      </p>
      <h2 className="bg-warning">&#x17D;IVOTOPIS</h2>

      <p>
        <strong>Co by m&#x11B;lo b&#xFD;t obsahem &#x17E;ivotopisu.</strong>
      </p>
      <p>
        Jednotliv&#xE9; body uv&#xE1;d&#xED;me podle posloupnosti, jak&#xE1; by
        m&#x11B;la b&#xFD;t zachov&#xE1;na pro p&#x159;ehlednost
        ka&#x17E;d&#xE9;ho &#x17E;ivotopisu.
      </p>
      <ul>
        <li>
          <strong>Osobn&#xED; &#xFA;daje</strong> &#x2014; jm&#xE9;no, adresa,
          ide&#xE1;ln&#x11B; tak&#xE9; datum narozen&#xED;;
        </li>
        <li>
          <strong>Fotka</strong> &#x2014; doporu&#x10D;ujeme d&#xE1;t do
          &#x17E;ivotopisu tak&#xE9; va&#x161;i fotografii, av&#x161;ak
          nevhodnou fotkou si m&#x16F;&#x17E;ete tak&#xE9; hodn&#x11B;
          u&#x161;kodit (doporu&#x10D;ujeme vybrat pasovou fotku, kde v&#xE1;m
          je vid&#x11B;t hlava po ramena, ne selfie fotografie, ani
          vyst&#x159;i&#x17E;en&#xE9; fotografie z rodinn&#xFD;ch &#x10D;i
          skupinov&#xFD;ch fotek);
        </li>
        <li>
          <strong>Vzd&#x11B;l&#xE1;n&#xED;</strong> &#x2014; pi&#x161;te od
          nejnov&#x11B;j&#x161;&#xED;ho po nejstar&#x161;&#xED;,
          z&#xE1;kladn&#xED; &#x161;kolu neuv&#xE1;d&#x11B;jte &#x2014;
          nezapome&#x148;te uv&#xE9;st rok za&#x10D;&#xE1;tku a
          ukon&#x10D;en&#xED;;
        </li>
        <li>
          <strong>Praxe</strong> &#x2014; op&#x11B;t od
          nejnov&#x11B;j&#x161;&#xED; po nejstar&#x161;&#xED;,
          nejnov&#x11B;j&#x161;&#xED; praxi v&#xED;ce rozepi&#x161;te,
          star&#x161;&#xED; zku&#x161;enosti, kter&#xE9; nejsou relevantn&#xED;
          k pr&#xE1;ci, kterou chcete z&#xED;skat, m&#x16F;&#x17E;ete
          zm&#xED;nit pouze p&#xE1;r body &#x2014; op&#x11B;t nezapome&#x148;te
          uv&#xE9;st za&#x10D;&#xE1;tek a konec, ide&#xE1;ln&#x11B; ve
          form&#xE1;tu 04/2010 &#x2014; 05/2016 (je to p&#x159;ehledn&#xE9;);
        </li>
        <li>
          <strong>Doba bez pr&#xE1;ce</strong> &#x2014; nevynech&#xE1;vejte v
          &#x17E;ivotopise &#xFA;daj, &#x17E;e jste byli v ur&#x10D;it&#xE9;
          dob&#x11B; bez pr&#xE1;ce, pokud to bylo del&#x161;&#xED; dobu.
          Sta&#x10D;&#xED; kdy&#x17E; jenom kr&#xE1;tce zm&#xED;n&#xED;te,
          &#x17E;e v dan&#xE9;m obdob&#xED; jste byli uchaze&#x10D;i na &#xDA;P.
          Neuv&#xE1;d&#x11B;la bych asi dobu na &#xDA;P p&#xE1;r t&#xFD;dnu
          &#x10D;i m&#x11B;s&#xED;ce, dvou. Dobu bez pr&#xE1;ce
          uv&#xE1;d&#x11B;jte jako sou&#x10D;&#xE1;st sekce: Praxe &#x10D;i
          Pracovn&#xED; zku&#x161;enosti;
        </li>
        <li>
          <strong>Znalosti ciz&#xED;ch jazyk&#x16F;</strong> &#x2014;
          st&#xE1;v&#xE1; se v dne&#x161;n&#xED; dob&#x11B; jedn&#xED;m z
          nejd&#x16F;le&#x17E;it&#x11B;j&#x161;&#xED;ch &#xFA;daj&#x16F;,
          spr&#xE1;vn&#x11B; ohodno&#x165;te svoje znalosti a napi&#x161;te
          &#xFA;rove&#x148; dle** Evropsk&#xE9;ho referen&#x10D;n&#xED;ho
          r&#xE1;mce;**
        </li>
        <li>
          <strong>Znalosti IT n&#xE1;stroj&#x16F;</strong> &#x2014;
          nepi&#x161;te jenom MS Office, ale napi&#x161;te konkr&#xE9;tn&#x11B;,
          se kter&#xFD;mi programy um&#xED;te pracovat a na jak&#xE9;
          &#xFA;rovni &#x2014; nap&#x159;. MS Office Excel &#x2014;
          &#xFA;rove&#x148; b&#x11B;&#x17E;n&#xE9;ho u&#x17E;ivatele aj.;
        </li>
        <li>
          <strong>&#x160;kolen&#xED;, semin&#xE1;&#x159;e</strong> &#x2014; do
          druh&#xE9; &#x10D;&#xE1;sti &#x17E;ivotopisu napi&#x161;te seznam
          r&#x16F;zn&#xFD;ch d&#x16F;le&#x17E;it&#xFD;ch &#x161;kolen&#xED;,
          semin&#xE1;&#x159;&#x16F;, rekvalifikac&#xED;;
        </li>
        <li>
          <strong>&#x158;idi&#x10D;sk&#xFD; pr&#x16F;kaz</strong> &#x2014;
          napi&#x161;te, zda vlastn&#xED;te &#x158;P a na jak&#xE9; skupiny, zda
          jste aktivn&#xED;m &#x159;idi&#x10D;em;
        </li>
        <li>
          <strong>Dopl&#x148;uj&#xED;c&#xED; &#xFA;daje</strong> &#x2014; na
          z&#xE1;v&#x11B;r m&#x16F;&#x17E;ete napsat tak&#xE9; n&#x11B;co k
          va&#x161;im kon&#xED;&#x10D;k&#x16F;m, vlastnostem a schopnostem.
        </li>
      </ul>
      <p>
        <strong>Rady a tipy:</strong>
      </p>
      <ul>
        <li>
          personalista v&#x11B;nuje va&#x161;emu &#x17E;ivotopisu v
          pr&#x16F;m&#x11B;ru 30 sekund, tak&#x17E;e zde plat&#xED; pravidlo:
          <strong>
            jasn&#x11B;, stru&#x10D;n&#x11B;, v&#xFD;sti&#x17E;n&#x11B;;
          </strong>
        </li>
        <li>
          &#x17E;ivotopis by m&#x11B;l b&#xFD;t dob&#x159;e strukturovan&#xFD;,
          aby se v n&#x11B;m personalistovi dob&#x159;e orientovalo &#x2014;
          slo&#x17E;itosti a dlouh&#xE9; texty nikdo ne&#x10D;te;
        </li>
        <li>
          d&#xE9;lka max. na 2 strany, u absolvent&#x16F; a lid&#xED; s malou
          prax&#xED; posta&#x10D;&#xED; 1 strana;
        </li>
        <li>
          <strong>nel&#x17E;ete, nezveli&#x10D;ujte</strong>! Na to se
          v&#x17E;dy p&#x159;ijde a vy z toho nevyjdete zrovna dob&#x159;e;
        </li>
        <li>
          &#x17E;ivotopis by m&#x11B;l obsahovat aktu&#xE1;ln&#xED; informace,
          pokud jste ned&#xE1;vno zm&#x11B;nili zam&#x11B;stn&#xE1;n&#xED;, kde
          se v&#xE1;m nel&#xED;b&#xED; a hled&#xE1;te novou pr&#xE1;ci &#x2014;
          &#x17E;ivotopis aktualizujte.
        </li>
      </ul>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_24/picture_2.png"
          alt="picture_2"
        />
      </p>
      <p>
        <strong>
          5. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED;
          &#x10D;l&#xE1;nek a pokuste se podle smyslu doplnit
          chyb&#x11B;j&#xED;c&#xED; nadpisy ke ka&#x17E;d&#xE9;mu odstavci.
        </strong>
      </p>
      <p>
        A) Pomalu &#x2014; ale jist&#x11B;.
        <br />
        B) Usm&#xED;vejte se.
        <br />
        C) Zam&#x11B;&#x159;te se na omezen&#xED; slovn&#xED; vaty.
        <br />
        D) Pracujte s pauzami a dechem.
        <br />
        E) Tr&#xE9;nujte p&#x159;esv&#x11B;d&#x10D;iv&#xE9; mluven&#xED;.
        <br />
        F) Sebev&#x11B;dom&#xFD; nerovn&#xE1; se hlasit&#xFD;.
      </p>
      <p>
        P&#x159;i pracovn&#xED;m pohovoru &#x2014; a nejen &#x2014; je velmi
        d&#x16F;le&#x17E;it&#xE9; to, jak mluv&#xED;te. A pokud chcete
        zlep&#x161;it sv&#xE9; mluven&#xED;, mus&#xED;te zn&#xE1;t
        spr&#xE1;vn&#xE9; metody a tak&#xE9; mluven&#xED; &#x10D;asto
        procvi&#x10D;ovat. Poj&#x10F;me se rovnou pod&#xED;vat na 6
        konkr&#xE9;tn&#xED;ch rad, kter&#xE9; v&#xE1;m s t&#xED;m pomohou.
      </p>
      <p>
        1) V nep&#x159;&#xED;jemn&#xFD;ch situac&#xED;ch v&#x11B;t&#x161;ina
        lid&#xED; d&#x11B;l&#xE1; tu chybu, &#x17E;e p&#x159;i mluven&#xED;
        sp&#x11B;ch&#xE1;. P&#x159;edev&#x161;&#xED;m pokud jsou
        nerv&#xF3;zn&#xED; nebo ve stresu. Kdy&#x17E; mluv&#xED;te rychle,
        ztr&#xE1;c&#xED;te kontrolu nad sv&#xFD;m hlasem a &#x10D;asto i nad
        t&#xED;m, co &#x159;&#xED;k&#xE1;te. Zpomalte v ka&#x17E;dodenn&#xED;
        konverzaci a p&#x159;em&#xFD;&#x161;lejte nad rychlost&#xED;, kterou
        komunikujete s p&#x159;&#xE1;teli. P&#x159;i ve&#x159;ejn&#xE9;m projevu
        se pak sna&#x17E;te udr&#x17E;et podobnou rychlost. Nejen&#x17E;e budete
        m&#xED;t v&#xED;ce &#x10D;asu na p&#x159;em&#xFD;&#x161;len&#xED;, ale
        budete p&#x16F;sobit sebev&#x11B;dom&#x11B;ji.
      </p>
      <p>
        2) D&#x11B;l&#xE1;me to v&#x161;ichni. Ka&#x17E;d&#xFD; m&#xE1;me
        n&#x11B;jak&#xE1; sv&#xE1; obl&#xED;ben&#xE1; v&#xFD;pl&#x148;kov&#xE1;
        slova, kter&#xE1; n&#xE1;m pom&#xE1;haj&#xED;, kdy&#x17E;
        p&#x159;em&#xFD;&#x161;l&#xED;me, co &#x159;&#xED;ct. Ale jako pomoc to
        jen vypad&#xE1;. Jestli je ka&#x17E;d&#xE1; va&#x161;e v&#x11B;ta
        dopln&#x11B;n&#xE1; n&#x11B;jak&#xFD;m t&#xED;m &#xAB;mmm&#xBB; nebo
        &#xAB;jakoby&#xBB;, va&#x161;e &#x159;e&#x10D; rozhodn&#x11B; nen&#xED;
        tak p&#x159;esv&#x11B;d&#x10D;iv&#xE1;.
        <br />
        Tr&#xE9;novat m&#x16F;&#x17E;ete nap&#x159;&#xED;klad tak, &#x17E;e se
        budete nahr&#xE1;vat p&#x159;i konverzaci nebo po&#x17E;&#xE1;d&#xE1;te
        p&#x159;&#xE1;tele, a&#x165; v&#xE1;s na takov&#xE1; slova
        upozor&#x148;uj&#xED;. A&#x17E; zjist&#xED;te, jak&#xE1;
        nadbyte&#x10D;n&#xE1; slova pou&#x17E;&#xED;v&#xE1;te, je &#x10D;as
        sna&#x17E;it se je z projevu vymazat. Kdy&#x17E; nebudete
        v&#x11B;d&#x11B;t, co &#x159;&#xED;ct, prost&#x11B; ml&#x10D;te a
        p&#x159;em&#xFD;&#x161;lejte. I schopnost ml&#x10D;et je znakem
        sebev&#x11B;dom&#xED;.
      </p>
      <p>
        3) Kdy&#x17E; mluv&#xED;te, v&#xE1;&#x161; t&#xF3;n hlasu by nem&#x11B;l
        na konci v&#x11B;ty stoupnout, pokud nejde o ot&#xE1;zku. Jedn&#xED;m ze
        zp&#x16F;sob&#x16F;, jak ztratit autoritu, je nejistota v hlase.
        Kdy&#x17E; zved&#xE1;te t&#xF3;n hlasu, signalizuje to, &#x17E;e si
        nejste tak jist&#xED; t&#xED;m, co &#x159;&#xED;k&#xE1;te. Zn&#xED;te
        nesebev&#x11B;dom&#x11B;. Zkuste tr&#xE9;novat p&#x159;esn&#xFD; opak.
        Na konci ka&#x17E;d&#xE9; v&#x11B;ty se sna&#x17E;te, abyste klesli
        hlasem dol&#x16F;. Jak to zn&#xED;? Jak&#xFD; je v tom rozd&#xED;l? A
        kdy&#x17E; budete hlasem m&#xED;rn&#x11B; klesat i p&#x159;i
        ot&#xE1;zk&#xE1;ch, budete je&#x161;t&#x11B;
        p&#x159;esv&#x11B;d&#x10D;iv&#x11B;j&#x161;&#xED;.
      </p>
      <p>
        4) Pauzy p&#x159;id&#xE1;vaj&#xED; projevu na dramati&#x10D;nosti a
        autorit&#x11B;. Kdy&#x17E; si pauzy d&#xE1;te do projevu strategicky,
        pom&#x16F;&#x17E;e v&#xE1;m to d&#xE1;t d&#x16F;raz tam, kde ho
        pot&#x159;ebujete a &#x159;e&#x10D; bude
        zaj&#xED;mav&#x11B;j&#x161;&#xED;. V krat&#x161;&#xED;ch
        v&#x11B;t&#xE1;ch m&#x16F;&#x17E;ete zkusit pauzu vlo&#x17E;it
        doprost&#x159;ed a del&#x161;&#xED; m&#x16F;&#x17E;ete rovnou
        rozd&#x11B;lit. D&#xFD;chejte klidn&#x11B; a pravideln&#x11B;. Pokud
        chcete p&#x16F;sobit sebev&#x11B;dom&#x11B;, d&#xFD;chejte ve
        stejn&#xE9;m rytmu. Nau&#x10D;te se s d&#xFD;ch&#xE1;n&#xED;m pracovat.
      </p>
      <p>
        5) Hlasit&#xE1; mluva se &#x10D;asto zam&#x11B;&#x148;uje se
        sebev&#x11B;dom&#xFD;m projevem. Ale to nen&#xED; &#xFA;pln&#x11B;
        pravda. Je d&#x16F;le&#x17E;it&#xE9; mluvit dostate&#x10D;n&#x11B;
        hlasit&#x11B;, nen&#xED; to tak d&#x16F;le&#x17E;it&#xE9; jako dynamika
        a intonace hlasu.Hlasit&#xFD; projev &#x10D;asto
        p&#x159;ipom&#xED;n&#xE1; k&#x159;ik, kter&#xFD; r&#xE1;d poslouch&#xE1;
        jen m&#xE1;lokdo.
      </p>
      <p>
        6) Kdy&#x17E; mluv&#xED;te k ostatn&#xED;m a vid&#xED;te p&#x159;ed
        sebou jen mo&#x159;e mra&#x10D;&#xED;c&#xED;ch se v&#xFD;raz&#x16F;,
        usm&#x11B;jte se na n&#x11B;. Rychle si v&#x161;imnete, &#x17E;e se
        mnoho lid&#xED; za&#x10D;ne tak&#xE9; usm&#xED;vat. &#xDA;sm&#x11B;vem
        toti&#x17E; demonstrujete sebev&#x11B;dom&#xED; a budete p&#x16F;sobit
        p&#x159;&#xE1;telsky. A takov&#xE9; lidi maj&#xED; ostatn&#xED;
        r&#xE1;di. S &#xFA;sm&#x11B;vem na tv&#xE1;&#x159;i budete m&#xED;t
        v&#x11B;t&#x161;&#xED; &#x161;anci, &#x17E;e v&#xE1;s budou i r&#xE1;di
        poslouchat. &#xDA;sm&#x11B;v v&#xE1;m tak&#xE9; zlep&#x161;&#xED;
        kvalitu va&#x161;eho mluven&#xED;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) — A) Pomalu ale jistě; <br />
              2) — C) Zaměřte se na omezení slovní vaty; <br />
              3) — E) Trénujte přesvědčivé mluvení; <br />
              4) — D) Pracujte s pauzami a dechem; <br />
              5) — F) Sebevědomý nerovná se hlasitý; <br />
              6) — B) Usmívejte se. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 6 проверит преподаватель."
        text="Ответы напишите от руки, сфотографируйте и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          6. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; vzor
          motiva&#x10D;n&#xED;ho dopisu. N&#xE1;sledn&#x11B; zkuste napsat
          sv&#x16F;j vlastn&#xED; motiva&#x10D;n&#xED; dopis.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_24/picture_3.png"
          alt="picture_3"
        />
      </p>
      <p className="bg-warning">
        <strong>Tip na z&#xE1;v&#x11B;r:</strong>
      </p>
      <p>
        <strong>
          Kde se m&#x16F;&#x17E;u dozv&#x11B;d&#x11B;t o voln&#xE9;
          pracovn&#xED; pozici?
        </strong>
      </p>
      <p>
        <strong>Tisk:</strong>
      </p>
      <ul>
        <li>
          noviny (MF Dnes, Hospod&#xE1;&#x159;sk&#xE9; noviny, den&#xED;ky
          zdarma, lok&#xE1;ln&#xED; noviny);
        </li>
        <li>specializovan&#xE9; tiskoviny (Annonce);</li>
        <li>odborn&#xE9; &#x10D;asopisy.</li>
      </ul>
      <p>
        <strong>Internet:</strong>
      </p>
      <p>
        <a target="blank" href="https://www.monster.cz/">
          Monster
        </a>
        <br />
        <a target="blank" href="https://www.jobs.cz/">
          jobs.cz
        </a>
        <br />
        <a target="blank" href="https://cz.indeed.com/">
          indeed
        </a>
        <br />
        <a target="blank" href="https://www.volnamista.cz/">
          Voln&#xE1; m&#xED;sta
        </a>
        <br />
        <a target="blank" href="https://www.prace.cz/">
          prace.cz
        </a>
        <br />
        <a target="blank" href="http://www.joblist.cz/">
          joblist.cz
        </a>
        <br />
        <a target="blank" href="https://www.dobraprace.cz/">
          Dobr&#xE1; Pr&#xE1;ce.cz
        </a>
        <br />
        <a target="blank" href="https://www.spravnykrok.cz/">
          Spr&#xE1;vn&#xFD;krok.cz
        </a>
        <br />
        <a target="blank" href="https://fakturantky.cz/">
          Nab&#xED;dka pr&#xE1;ce - &#xFA;&#x10D;etn&#xED;, fakturantka,
          accountant
        </a>
      </p>
      <p className="text-danger">
        <em>Pozn&#xE1;mka:</em>
        <br />
        <em>
          Na n&#x11B;kter&#xFD;ch z t&#x11B;chto str&#xE1;nek je
          mo&#x17E;n&#xE9; si zalo&#x17E;it &#xAB;agenta&#xBB;, kter&#xFD; bude
          hledat voln&#xE1; m&#xED;sta odpov&#xED;daj&#xED;c&#xED; va&#x161;im
          po&#x17E;adavk&#x16F;m za v&#xE1;s a pos&#xED;lat v&#xE1;m
          pravideln&#x11B; nab&#xED;dky mailem.
        </em>
      </p>
      <p>
        <strong>
          Pod&#xED;vejte se na uveden&#xE9; str&#xE1;nky a zkuste naj&#xED;t
          inzer&#xE1;t, kter&#xFD; by se v&#xE1;m nejv&#xED;ce hodil, pokud
          byste hledali zam&#x11B;stn&#xE1;n&#xED;.
        </strong>
      </p>
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

export default LectureTwentyFour;
