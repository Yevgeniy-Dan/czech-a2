import React from "react";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";

const LectureSixteen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(4);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">16. lekce</h1>
        <p> Vokativ (5. pád)</p>
        <Link to="/admin/lectures/15">Предыдущий урок</Link>
        <Link to="/admin/lectures/17">Следующий урок</Link>
      </div>
      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          &#x412; &#x44D;&#x442;&#x43E;&#x439;
          &#x43B;&#x435;&#x43A;&#x446;&#x438;&#x438; &#x43C;&#x44B;
          &#x438;&#x437;&#x443;&#x447;&#x438;&#x43C; &#x441;
          &#x432;&#x430;&#x43C;&#x438;
          <strong>&#xAB;Vokativ&#xBB;</strong> &#x2014; 5. p&#xE1;d.
        </em>
      </p>
      <p>
        <em>
          &#x42D;&#x442;&#x43E;
          &#x437;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;,
          &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439;
          &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F;
          &#x43F;&#x440;&#x438;
          &#x43E;&#x431;&#x440;&#x430;&#x449;&#x435;&#x43D;&#x438;&#x438;.
        </em>
      </p>
      <p>
        <em>
          &#x418; &#x442;&#x430;&#x43A;,
          &#x43F;&#x440;&#x438;&#x441;&#x442;&#x443;&#x43F;&#x438;&#x43C;!
        </em>
      </p>
      <h2 className="mume-header" id="vokativ">
        VOKATIV
      </h2>

      <p>
        <strong>5. P&#xC1;D</strong>
      </p>
      <p>
        <strong>
          &#x421;&#x43A;&#x430;&#x447;&#x430;&#x439;&#x442;&#x435;
          &#x444;&#x430;&#x439;&#x43B; Vokativ (5. p&#xE1;d).
        </strong>
      </p>
      <p>
        <a href="https://czecha2bucket.s3.amazonaws.com/lekce_16/Slang+-+5.+p%C3%A1d+-+Vokativ.pdf">
          Slang - Vokativ (5. p&#xE1;d)
        </a>
      </p>
      <p>
        <strong>
          &#x415;&#x449;&#x451; &#x43E;&#x434;&#x438;&#x43D;
          &#xAB;&#x434;&#x43E;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;&#xBB;
          &#x43F;&#x430;&#x434;&#x435;&#x436; &#x2014; &#x44D;&#x442;&#x43E; 5.
          p&#xE1;d Vokativ.
        </strong>
      </p>
      <p>
        <strong>
          &#x417;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;,
          &#x43F;&#x43E;-&#x447;&#x435;&#x448;&#x441;&#x43A;&#x438;
          &#x44D;&#x442;&#x43E; P&#xE1;t&#xFD; p&#xE1;d &#x438;&#x43B;&#x438;
          Vokativ.
        </strong>
      </p>
      <p>
        <strong>
          &#x418;&#x43C; &#x43C;&#x44B;
          &#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x435;&#x43C;&#x441;&#x44F;,
          &#x43A;&#x43E;&#x433;&#x434;&#x430; &#x43A;
          &#x43A;&#x43E;&#x43C;&#x443;-&#x442;&#x43E;
          &#x43E;&#x431;&#x440;&#x430;&#x449;&#x430;&#x435;&#x43C;&#x441;&#x44F;
          &#x43F;&#x43E; &#x438;&#x43C;&#x435;&#x43D;&#x438; /
          &#x444;&#x430;&#x43C;&#x438;&#x43B;&#x438;&#x438;
          &#x438;&#x43B;&#x438; &#x43F;&#x43E;
          &#x442;&#x438;&#x442;&#x443;&#x43B;&#x443;.
        </strong>
      </p>
      <p>
        <strong>
          <em>&#x41D;&#x430;&#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;:</em>
        </strong>
        <br />
        <em>
          &#x41D;&#x430; &#x440;&#x443;&#x441;&#x441;&#x43A;&#x43E;&#x43C;
          &#x43C;&#x44B; &#x433;&#x43E;&#x432;&#x43E;&#x440;&#x438;&#x43C;:
          &#xAB;<strong>&#x41C;&#x430;&#x440;&#x442;&#x430;</strong>,
          &#x43A;&#x430;&#x43A; &#x434;&#x435;&#x43B;&#x430;?&#xBB;.
        </em>
        <br />
        <em>
          &#x41D;&#x430; &#x447;&#x435;&#x448;&#x441;&#x43A;&#x43E;&#x43C;:
          &#xAB;<strong>Marto</strong>, jak se m&#xE1;&#x161;?&#xBB;
          &#x418;&#x43C;&#x44F; &#xAB;Marto&#xBB; &#x2014; &#x432;
          &#x437;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C;
          &#x43F;&#x430;&#x434;&#x435;&#x436;&#x435;.
        </em>
      </p>
      <p>
        <em>Pan doktor &#x2014; pane doktore.</em>
        <br />
        <em>Pan&#xED; u&#x10D;itelka &#x2014; pan&#xED; u&#x10D;itelko.</em>
      </p>
      <p>
        <em>Dobr&#xFD; den, pane doktore!</em>
        <br />
        <em>Dobr&#xFD; den, pan&#xED; u&#x10D;itelko!</em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439;.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/yLxBG1PQxpQ"
        title="16  VOKATIV"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 27
        </strong>
      </p>
      <p>
        <strong>
          1. Vytvo&#x159;te vokativ u n&#xE1;sleduj&#xED;c&#xED;ch jmen,
          titul&#x16F; a povol&#xE1;n&#xED;.
        </strong>
      </p>
      <p>
        Pan Mrkvi&#x10D;ka, in&#x17E;en&#xFD;rka Ivana, sle&#x10D;na Milena,
        blbec, investor Marek, Mat&#x11B;j Nov&#xE1;k, pan
        Kr&#xE1;l&#xED;&#x10D;ek, Filip Iv&#xE1;nek, b&#x16F;h, Maxim
        Petr&#x17E;elka, &#x159;editel Svoboda, Tom&#xE1;&#x161; Kupka, Japonec,
        doktorka Irena, Je&#x17E;&#xED;&#x161;, automechanik Dan, Iveta
        Hale&#x161;ov&#xE1;, pan vedouc&#xED;, oprav&#xE1;&#x159; Keller,
        prodava&#x10D;ka Helena, Marjana Nov&#xE1;, sle&#x10D;na Alena,
        Svatopluk Klubko, Ivan Zaj&#xED;c, Milo&#x161; Zem&#xE1;nek, Edvard
        Bene&#x161;, &#x10D;lov&#x11B;k.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Pane Mrkvičko, inženýrko Ivano, slečno Mileno, blbče, investore
              Marku, Matěji Nováku, pane Králíčku, Filipe Ivánku, bože, Maxime
              Petrželko, řediteli Svobodo, Tomáši Kupko, Japonče, doktorko
              Ireno, Ježíši, automechaniku Dane, Iveto Halešová, pane vedoucí,
              opraváři Kellere, prodavačko Heleno, Marjano Nová, slečno Aleno,
              Svatopluku Klubko, Ivane Zajíci, Miloši Zemánku, Edvarde Beneši,
              člověče.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          2. Obra&#x165;te se jm&#xE9;nem ke sv&#xE9;mu
          nejbli&#x17E;&#x161;&#xED;mu okol&#xED;.
        </strong>
      </p>
      <p>
        Jak byste oslovili svou rodinu, kamar&#xE1;dy, kolegy z pr&#xE1;ce,
        dom&#xE1;c&#xED; mazl&#xED;&#x10D;ky a jin&#xE9; &#x10D;esky?
      </p>
      <p className="text-danger">
        <em>Jmenujte alespo&#x148; 15 jmen.</em>
      </p>
      <p>
        <strong>
          3. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; povol&#xE1;n&#xED;
          a jm&#xE9;na a p&#x159;&#xED;jmen&#xED; a vytvo&#x159;te
          spr&#xE1;vn&#x11B; vokativ.
        </strong>
      </p>
      <p>
        In&#x17E;en&#xFD;r Marek, soudkyn&#x11B; Ivana, report&#xE9;r
        Mare&#x161;, inspektor Fousek, prodava&#x10D;ka Iveta, cukr&#xE1;&#x159;
        Petr, Je&#x17E;&#xED;&#x161;, filosof Patrik, sle&#x10D;na L&#xED;za
        Novotn&#xE1;, doktorka Karina, automechanik Mirek, barman Zden&#x11B;k,
        pan Mrkvi&#x10D;ka, Franti&#x161;ek Svoboda, pan&#xED;
        R&#x16F;&#x17E;i&#x10D;kov&#xE1;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Inženýre Marku, soudkyně Ivano, reportére Mareši, inspektore
              Fousku, prodavačko Iveto, cukráři Petře, Ježíši, filosofe Patriku,
              slečno Lízo Novotná, doktorko Karino, automechaniku Mirku, barmane
              Zdeňku, pane Mrkvičko, Františku Svobodo, paní Růžičková.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          4. Pod&#xED;vejte se n&#xE1;sleduj&#xED;c&#xED; video a
          vypi&#x161;t&#x11B; z videa alespo&#x148; 10 r&#x16F;zn&#xFD;ch
          osloven&#xED;.
        </strong>
      </p>
      <p>
        <a href="https://www.youtube.com/watch?v=nNJt3Nqn870&amp;t=29s">
          Etiketa - Oslovov&#xE1;n&#xED;
        </a>
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

export default LectureSixteen;
