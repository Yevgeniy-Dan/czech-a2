import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import GreenBox from "../UI/GreenBox";

const LectureSeventeen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(12);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">17. lekce</h1>
        <p> Zdravotn&#xED; p&#xE9;&#x10D;e</p>
        <Link to="/admin/lectures/16">Предыдущий урок</Link>
        <Link to="/admin/lectures/18">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          V lekci
          <strong>&#xAB;Zdravotn&#xED; p&#xE9;&#x10D;e&#xBB;</strong>
          samoz&#x159;ejm&#x11B; se budeme bavit o zdravotn&#xED;
          p&#xE9;&#x10D;i, o n&#xE1;zvech a symptomech r&#x16F;zn&#xFD;ch
          nemoc&#xED;.
        </em>
      </p>
      <ul>
        <li>
          <p>
            Jako v&#x17E;dy budeme &#x10D;&#xED;st texty, poslouchat audia,
            d&#xED;vat se na videa, tr&#xE9;novat mluven&#xED; a pracovat s
            obr&#xE1;zky.*
          </p>
          <p>
            <em>Poj&#x10F;me se na ni pod&#xED;vat.</em>
          </p>
        </li>
      </ul>
      <h2>ZDRAVOTN&#xCD; P&#xC9;&#x10C;E</h2>

      <p>
        <strong>
          Pro procvi&#x10D;ov&#xE1;n&#xED; slovn&#xED; z&#xE1;soby jsme
          p&#x159;ipravili pro V&#xE1;s karti&#x10D;ky na Quizlet:
        </strong>
      </p>
      <p>
        <strong>Zdravotn&#xED; p&#xE9;&#x10D;e 1</strong>
      </p>
      <p>
        <a target="blank" href="https://quizlet.com/_cw9zgs?x=1jqt&i=3zq2hw">
          OTEVŘÍT KARTIČKY
        </a>
      </p>
      <p>
        <strong>Zdravotn&#xED; p&#xE9;&#x10D;e 2</strong>
        <br />
        <a target="blank" href="https://quizlet.com/_cw9zh6?x=1jqt&i=3zq2hw">
          OTEVŘÍT KARTIČKY
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          St&#xE1;hn&#x11B;te si soubor Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
          p&#xE9;&#x10D;e.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De.pdf"
        >
          Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED; p&#xE9;&#x10D;e
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          Poslechnete si audia Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
          p&#xE9;&#x10D;e.
        </strong>
      </p>

      <div>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Lidsk%C3%A9+t%C4%9Blo.mp3"
          ></audio>
          <figcaption>
            <strong>
              1. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Lidsk&#xE9; t&#x11B;lo
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Symptomy+nemoci.mp3"
          ></audio>
          <figcaption>
            <strong>
              2. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Symptomy nemoci
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/3.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+U%CC%81raz.mp3"
          ></audio>
          <figcaption>
            <strong>
              3. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - U&#x301;raz
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/4.1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Ur%C4%8Den%C3%AD+diagn%C3%B3zy+nemoci.mp3"
          ></audio>
          <figcaption>
            <strong>
              4.1. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Ur&#x10D;en&#xED; diagn&#xF3;zy nemoci
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/4.2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Ur%C4%8Den%C3%AD+diagn%C3%B3zy+nemoci.mp3"
          ></audio>
          <figcaption>
            <strong>
              4.2. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Ur&#x10D;en&#xED; diagn&#xF3;zy nemoci
            </strong>
          </figcaption>
        </figure>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/5.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+N%C3%A1zvy+nemoc%C3%AD.mp3"
          ></audio>
          <figcaption>
            <strong>
              5. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - N&#xE1;zvy nemoc&#xED;
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/6.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+N%C3%A1zvy+l%C3%A9ka%C5%99sk%C3%A9ho+person%C3%A1lu.mp3"
          ></audio>
          <figcaption>
            <strong>
              6. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - N&#xE1;zvy l&#xE9;ka&#x159;sk&#xE9;ho
              person&#xE1;lu
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/7.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Zdravotnicka%CC%81+pracovis%CC%8Cte%CC%8C.mp3"
          ></audio>
          <figcaption>
            <strong>
              7. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Zdravotnicka&#x301; pracovis&#x30C;te&#x30C;
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/8.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Zubn%C3%AD+l%C3%A9ka%C5%99.mp3"
          ></audio>
          <figcaption>
            <strong>
              8. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Zubn&#xED; l&#xE9;ka&#x159;
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/9.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Gynekolog.mp3"
          ></audio>
          <figcaption>
            <strong>
              9. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Gynekolog
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/10.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+D%C4%9Btsk%C3%BD+l%C3%A9ka%C5%99.mp3"
          ></audio>
          <figcaption>
            <strong>
              10. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - D&#x11B;tsk&#xFD; l&#xE9;ka&#x159;
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/11.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Zdravotnicka%CC%81+dokumentace.mp3"
          ></audio>
          <figcaption>
            <strong>
              11. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Zdravotnicka&#x301; dokumentace
            </strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/12.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Zdravotn%C3%AD+p%C3%A9%C4%8De+-+Nemocensk%C3%A9+poji%C5%A1t%C4%9Bn%C3%AD.mp3"
          ></audio>
          <figcaption>
            <strong>
              12. Slang - Slovn&#xED; z&#xE1;soba - Zdravotn&#xED;
              p&#xE9;&#x10D;e - Nemocensk&#xE9; poji&#x161;t&#x11B;n&#xED;
            </strong>
          </figcaption>
        </figure>
      </div>

      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 14
        </strong>
      </p>
      <p>
        <strong>1. Co to je? Dopl&#x148;te slova.</strong>
      </p>
      <p>
        HLAVA;
        <br />
        KOTN&#xCD;K;
        <br />
        LOKET;
        <br />
        KRK;
        <br />
        PRSTY;
        <br />
        Z&#xC1;P&#x11A;ST&#xCD;;
      </p>
      <p>
        RUKA;
        <br />
        RAMENO;
        <br />
        B&#x158;ICHO;
        <br />
        KOLENO;
        <br />
        STEHNO;
        <br />
        NOHA;
      </p>
      <p>
        L&#xDD;TKO;
        <br />
        OKO;
        <br />
        UCHO;
        <br />
        NOS;
        <br />
        &#xDA;STA.
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_17/picture_1.jpg"
          alt="picture_1"
        />
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              HLAVA; <br />
              UCHO; <br />
              ÚSTA; <br />
              RAMENO; <br />
              BŘICHO; <br />
              PRSTY; <br />
              NOHA; <br />
              LÝTKO; <br />
            </p>
            <p>
              OKO; <br />
              NOS; <br />
              KRK; <br />
              RUKA; <br />
              LOKET; <br />
              ZÁPĚSTÍ; <br />
              STEHNO; <br />
              KOLENO; <br />
              KOTNÍK. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>2. Co je to? Dopl&#x148;te slova.</strong>
      </p>
      <p>
        &#x17D;EBRA;
        <br />
        P&#xC1;NEV;
        <br />
        SRDCE;
        <br />
        PL&#xCD;CE;
      </p>
      <p>
        &#x17D;ALUDEK;
        <br />
        J&#xC1;TRA;
        <br />
        LEDVINY;
        <br />
        ST&#x158;EVO.
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_17/picture_2.jpg"
          alt="picture_2"
        />
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Srdce; <br />
              2) Žebra; <br />
              3) Střevo; <br />
              4) Žaludek; <br />
            </p>
            <p>
              5) Plíce; <br />
              6) Ledviny; <br />
              7) Pánev; <br />
              8) Játra. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 3 проверит преподаватель."
        text="Ответы напишите от руки, сфотографируйте и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p className="text-danger">
        <em>Pros&#xED;m, pi&#x161;te &#x10D;iteln&#x11B;.</em>
      </p>
      <p>
        <strong>
          3. Zopakujte si podmi&#x148;ovac&#xED; zp&#x16F;sob a pora&#x10F;te
          nemocn&#xE9;mu. Pracujte podle vzoru.
        </strong>
      </p>
      <p>
        <em>
          <strong>Vzor:</strong> M&#x11B;l(a) bys&#x2026;
          Mus&#xED;&#x161;&#x2026; Nesm&#xED;&#x161;&#x2026;
        </em>
      </p>
      <p>
        <em>
          Syn m&#xE1; teplotu. -&gt; <strong>M&#x11B;l by</strong> j&#xED;t k
          l&#xE9;ka&#x159;i. <strong>Mus&#xED;</strong> br&#xE1;t l&#xE9;ky.
          <strong>Mus&#xED;</strong> le&#x17E;et v posteli a p&#xED;t tepl&#xFD;
          &#x10D;aj s citronem. <strong>Nesm&#xED;</strong> chodit ven.
        </em>
      </p>
      <p>
        1) P&#x159;&#xED;telkyni bol&#xED; hlava.
        <br />
        2) Sestra zvrac&#xED;.
        <br />
        3) Kolegyn&#x11B; si zvrtla nohu v kotn&#xED;ku.
        <br />
        4) Dcera m&#xE1; siln&#xFD; ka&#x161;el.
        <br />
        5) Bratr m&#xE1; pr&#x16F;jem.
        <br />
        6) Babi&#x10D;ku bol&#xED; z&#xE1;da.
        <br />
        7) Sest&#x159;enici te&#x10D;e krev z nosu.
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/common/note.jpg"
          alt=""
        />
        <strong>
          4. Vypln&#xED;te test &#x10D;. 13. Procvi&#x10D;te si n&#xE1;zvy
          odd&#x11B;len&#xED;. Na kter&#xE9;m odd&#x11B;len&#xED; budou tito
          pacienti l&#xE9;&#x10D;eni? Vyb&#xED;rejte.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://7vovmq2cdjr.typeform.com/to/afe9EhOf">
          Test 13. N&#xE1;zvy odd&#x11B;len&#xED;
        </a>
      </p>
      <p>
        <strong>
          5. P&#x159;e&#x10D;t&#x11B;te si text a &#x159;ekn&#x11B;te, o popis
          kter&#xE9;ho l&#xE9;ka&#x159;e &#x10D;i odd&#x11B;len&#xED; se
          jedn&#xE1;.
        </strong>
      </p>
      <p>
        1) Jedn&#xE1; se zejm&#xE9;na o doktora, kter&#xFD; se zab&#xFD;v&#xE1;
        &#x17E;enami. Kontroluje probl&#xE9;my spojen&#xE9; se
        &#x17E;ensk&#xFD;m zdrav&#xED;m a tak&#xE9; sleduje
        t&#x11B;hotenstv&#xED; &#x17E;eny.
      </p>
      <p>
        2) Toto odd&#x11B;len&#xED; nav&#x161;t&#xED;v&#xED;te v tom
        p&#x159;&#xED;pad&#x11B;, pokud se V&#xE1;m na t&#x11B;le objev&#xED;
        n&#x11B;jak&#xE1; vyr&#xE1;&#x17E;ka nebo budete m&#xED;t jak&#xFD;koli
        jin&#xFD; probl&#xE9;m zejm&#xE9;na s k&#x16F;&#x17E;&#xED;.
      </p>
      <p>
        3) Pokud V&#xE1;s bude bolet zub, budete m&#xED;t z&#xE1;jem o
        rovn&#xE1;tka &#x10D;i jin&#xFD; probl&#xE9;m, tak v tomto
        p&#x159;&#xED;pad&#x11B; se obr&#xE1;t&#xED;te na?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) Gynekolog
              <br />
              2) Kožní oddělení / dermatologie
              <br />
              3) Zubař
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          6. &#x10C;t&#x11B;te a rozhodn&#x11B;te o pravdivosti v&#xFD;roku pod
          textem.
        </strong>
      </p>
      <p>
        <strong>Prvn&#xED; pomoc.</strong>
      </p>
      <p>
        V &#x10C;esk&#xE9; republice je povinnost poskytnout prvn&#xED; pomoc
        d&#xE1;na z&#xE1;konem. Ka&#x17E;d&#xFD; &#x10D;lov&#x11B;k, nejen
        zdravotn&#xED;k &#x10D;i zdravotnice, by m&#x11B;l um&#x11B;t poskytnout
        prvn&#xED; pomoc v situac&#xED;ch, kdy je ohro&#x17E;en &#x17E;ivot
        jin&#xE9; osoby, resp. jej&#xED; zdrav&#xED;.
      </p>
      <p>
        Nejd&#x159;&#xED;ve mus&#xED;me obnovit z&#xE1;kladn&#xED;
        &#x17E;ivotn&#xED; funkce: funkce krevn&#xED;ho ob&#x11B;hu,
        d&#xFD;ch&#xE1;n&#xED; a v&#x11B;dom&#xED; &#x2014; funkce
        centr&#xE1;ln&#xED; nervov&#xE9; soustavy.
      </p>
      <p>
        Co nejrychleji mus&#xED;me p&#x159;ivolat l&#xE9;ka&#x159;e. Do jeho
        p&#x159;&#xED;jezdu udr&#x17E;ujeme z&#xE1;kladn&#xED;
        &#x17E;ivotn&#xED; funkce zran&#x11B;n&#xE9; osoby.
      </p>
      <p>
        1) Ka&#x17E;d&#xFD; &#x10D;lov&#x11B;k mus&#xED; poskytnout prvn&#xED;
        pomoc, kdy&#x17E; je ohro&#x17E;eno zdrav&#xED; nebo &#x17E;ivot
        jin&#xE9; osoby.
        <br />
        ANO / NE
      </p>
      <p>
        2) Do p&#x159;&#xED;jezdu l&#xE9;ka&#x159;e udr&#x17E;ujeme
        z&#xE1;kladn&#xED; &#x17E;ivotn&#xED; funkce zran&#x11B;n&#xE9; osoby.
        <br />
        ANO / NE
      </p>
      <p>
        3) Zran&#x11B;n&#xE9;ho nejl&#xE9;pe sami odvezeme do nemocnice, pokud
        m&#xE1;me tu mo&#x17E;nost, aby jeho &#x17E;ivotn&#xED; funkce zajistili
        dokto&#x159;i, abyste neud&#x11B;lali n&#x11B;co &#x161;patn&#x11B;.
        <br />
        ANO / NE
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) ANO <br />
              2) ANO <br />
              3) NE <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          7. P&#x159;e&#x10D;t&#x11B;te si texty 1) - 4) a pak texty A) - D) a
          &#x159;ekn&#x11B;te, kdo je X.
        </strong>
      </p>
      <p>
        <strong>Jak jim je?</strong>
      </p>
      <p>
        1) Kamil v noci &#x161;patn&#x11B; spal. M&#xE1; teplotu. Bol&#xED; ho
        hlava. M&#xE1; r&#xFD;mu a ka&#x161;el. Je mu &#x161;patn&#x11B;.
        Nem&#x16F;&#x17E;e j&#xED;st. M&#xE1; velkou &#x17E;&#xED;ze&#x148;.
      </p>
      <p>
        2) Barbora vypad&#xE1; &#x161;patn&#x11B;. Bol&#xED; ji &#x17E;aludek.
        M&#xE1; hore&#x10D;ku. Zvrac&#xED; v&#x161;echno j&#xED;dlo. M&#xE1;
        tak&#xE9; pr&#x16F;jem.
      </p>
      <p>
        3) Marta se nec&#xED;t&#xED; dob&#x159;e. U&#x17E; dlouho ji bol&#xED;
        z&#xE1;da. Nem&#x16F;&#x17E;e v noci sp&#xE1;t. A ve dne ji bol&#xED;
        ka&#x17E;d&#xFD; pohyb.
        <br />
        4) Ji&#x159;&#xED; spadl z kola dnes r&#xE1;no na ulici.
        Nem&#x16F;&#x17E;e chodit. Bol&#xED; ho noha. M&#xE1; tak&#xE9;
        zran&#x11B;n&#xED; na ruce.
      </p>
      <p>
        <strong>
          Co &#x159;&#xED;k&#xE1; pan doktor / pan&#xED; doktorka?
        </strong>
      </p>
      <p>
        A) Zran&#x11B;n&#xED; ruky nen&#xED; v&#xE1;&#x17E;n&#xE9;. Ale X si
        zlomil nohu. Mus&#xED; ho poslat na chirurgii. Tam mu daj&#xED; nohu do
        s&#xE1;dry.
      </p>
      <p>
        B) Dostane l&#xE9;ky. Nesm&#xED; sportovat, naopak mus&#xED; hodn&#x11B;
        odpo&#x10D;&#xED;vat. Ka&#x17E;d&#xFD; den mus&#xED; chodit na injekci.
        Ve &#x10D;tvrtek p&#x16F;jde na rentgen.
        <br />
        C) X m&#xE1; ch&#x159;ipku. Mus&#xED; le&#x17E;et v posteli a
        odpo&#x10D;&#xED;vat. L&#xE9;ka&#x159; mu d&#xE1; recept na l&#xE9;ky.
        Mus&#xED; br&#xE1;t l&#xE9;ky t&#x159;ikr&#xE1;t denn&#x11B; po
        j&#xED;dle. Mus&#xED; j&#xED;st tak&#xE9; vitam&#xED;ny a mus&#xED;
        hodn&#x11B; p&#xED;t.
        <br />
        D) Situace je v&#xE1;&#x17E;n&#xE1;. X mus&#xED; rychle na operaci.
        Te&#x10F; dostane injekci a za chv&#xED;li pojede sanitkou do nemocnice.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) — C)
              <br />
              2) — D) <br />
              3) — B) <br />
              4) — A)
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          8.1. P&#x159;e&#x10D;t&#x11B;te si text o konzumaci alkoholu.
        </strong>
      </p>
      <p>
        <strong>Na pit&#xED; jsou klady i z&#xE1;pory.</strong>
      </p>
      <p>
        U&#x17E; moje babi&#x10D;ka &#x159;&#xED;kala, &#x17E;e po pit&#xED; se
        blbne. Alkohol toti&#x17E; v&#xFD;znamn&#x11B; ovliv&#x148;uje mozek.
        Naru&#x161;uje jeho norm&#xE1;ln&#xED; fungov&#xE1;n&#xED; a komunikaci
        se zbytkem t&#x11B;la. P&#x159;i nadm&#x11B;rn&#xE9;m
        p&#x16F;soben&#xED; alkoholu n&#xE1;m to tak
        &#x201E;nemysl&#xED;&#x201C;, reagujeme zpomalen&#x11B;,
        zapom&#xED;n&#xE1;me, ztr&#xE1;c&#xED;me rovnov&#xE1;hu a koordinaci.
        Alkohol m&#xE1; vliv i na sexu&#xE1;ln&#xED; &#x17E;ivot. Chu&#x165;
        roste, ale o v&#xFD;konnosti rad&#x11B;ji poml&#x10D;&#xED;m.
      </p>
      <p>
        Krom&#x11B; toho m&#x16F;&#x17E;e m&#xED;t nadm&#x11B;rn&#xE1; konzumace
        alkoholu za n&#xE1;sledek vznik z&#xE1;vislosti, jatern&#xED; i
        srde&#x10D;n&#xED; onemocn&#x11B;n&#xED;, vznik n&#xE1;dor&#x16F; a
        cukrovky.
      </p>
      <p>
        Naopak um&#xED;rn&#x11B;n&#xE1; konzumace alkoholu, zejm&#xE9;na piva a
        v&#xED;na, podporuje chu&#x165; k j&#xED;dlu, prokazateln&#x11B;
        sni&#x17E;uje riziko infarktu, pom&#xE1;h&#xE1; n&#xE1;m se uvolnit a
        m&#xE1; zklid&#x148;uj&#xED;c&#xED; &#xFA;&#x10D;inky. Krom&#x11B; toho
        pivo i v&#xED;no obsahuj&#xED; mnoho dal&#x161;&#xED;ch zdrav&#xED;
        prosp&#x11B;&#x161;n&#xFD;ch l&#xE1;tek a obecn&#x11B; l&#xE9;ka&#x159;i
        soud&#xED;, &#x17E;e st&#x159;&#xED;dm&#xE9; pit&#xED; je zdrav&#xED;
        prosp&#x11B;&#x161;n&#x11B;j&#x161;&#xED;, ne&#x17E; jeho
        &#xFA;pln&#xE9; vylou&#x10D;en&#xED;.
      </p>
      <p>
        <strong>
          8.2. P&#xED;smenkem P (pravda) ozna&#x10D;te pravdiv&#xE1;
          tvrzen&#xED; a nepravdiv&#xE1; tvrzen&#xED; ozna&#x10D;te
          p&#xED;smenem L (le&#x17E;).
        </strong>
      </p>
      <p>1) Alkohol nejv&#xED;ce ovliv&#x148;uje lidsk&#xFD; mozek.</p>
      <p>
        2) P&#x159;i konzumaci alkoholu &#x10D;lov&#x11B;k reaguje rychleji a
        prud&#x10D;eji.
      </p>
      <p>
        3) P&#x159;i konzumaci alkoholu &#x10D;lov&#x11B;k ztr&#xE1;c&#xED;
        rovnov&#xE1;hu a koordinaci.
        <br />
        4) V&#x161;echen alkohol v p&#x159;im&#x11B;&#x159;en&#xE9;
        m&#xED;&#x159;e podporuje chu&#x165; k j&#xED;dlu.
        <br />
        5) Zejm&#xE9;na pivo a v&#xED;no zvy&#x161;uje riziko infarktu.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) P (pravda);
              <br />
              2) L (lež);
              <br />
              3) P (pravda);
              <br />
              4) L (lež);
              <br />
              5) L (lež).
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          9. P&#x159;e&#x10D;t&#x11B;te si texty a zkuste uh&#xE1;dnout
          kter&#xE1; nemoc je pops&#xE1;na:
        </strong>
      </p>
      <p>
        <strong>P&#x159;epis nahr&#xE1;vek:</strong>
      </p>
      <ol>
        <li>
          <p>
            Jedn&#xE1; se o nemoc, kter&#xE1; je nevyl&#xE9;&#x10D;iteln&#xE1;.
            Je to n&#xE1;dorov&#xE1; nemoc, kter&#xE1; m&#x16F;&#x17E;e
            postihnout velkou &#x10D;&#xE1;st lidsk&#xE9;ho t&#x11B;la, jako
            jsou nap&#x159;&#xED;klad &#x2014; tlust&#xE9; st&#x159;evo, mozek,
            u &#x17E;en zejm&#xE9;na prsa a u ku&#x159;&#xE1;k&#x16F;
            pl&#xED;ce. Toto onemocn&#x11B;n&#xED; se l&#xE9;&#x10D;&#xED;
            zejm&#xE9;na chirurgickou l&#xE9;&#x10D;bou &#x10D;i
            chemoterapi&#xED;.
          </p>
        </li>
        <li>
          <p>
            Je to nemoc, kterou se m&#x16F;&#x17E;e &#x10D;lov&#x11B;k nakazit
            pomoc&#xED; p&#x159;enosu krve, poran&#x11B;n&#xED;m
            k&#x16F;&#x17E;e a hlavn&#x11B; pomoc&#xED; pohlavn&#xED;ho styku.
            Jedn&#xE1; se tak&#xE9; o nevyl&#xE9;&#x10D;itelnou nemoc.
            Jedn&#xED;m z nejzn&#xE1;m&#x11B;j&#x161;&#xED;ch
            naka&#x17E;en&#xFD;ch touto nemoc&#xED; byl nap&#x159;&#xED;klad
            &#x2014; Freddie Mercury.
          </p>
        </li>
        <li>
          <p>
            Je to nemoc, kter&#xE1; &#x10D;lov&#x11B;ka doprov&#xE1;z&#xED; do
            konce &#x17E;ivota. Jedn&#xE1; se o probl&#xE9;m nedostatku
            inzul&#xED;nu a projevuje se zv&#xFD;&#x161;enou hladinou cukru.
            &#x10C;lov&#x11B;k si mus&#xED; neust&#xE1;le d&#xE1;vat pozor na
            potraviny, kter&#xE9; j&#xED;. Nej&#x10D;ast&#x11B;j&#x161;&#xED;
            p&#x159;&#xED;&#x10D;inou t&#xE9;to nemoci je obezita &#x10D;i
            d&#x11B;di&#x10D;nost.
          </p>
        </li>
      </ol>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) Rakovina
              <br />
              2) AIDS
              <br />
              3) Cukrovka
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>10. Poslouchejte dialogy. Dopl&#x148;te text.</strong>
      </p>
      <div>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Zdrav%C3%AD+-+1.mp3"
          ></audio>
          <figcaption>
            <strong>Slang - Zdrav&#xED; - 1 by Lipa Bola</strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Zdrav%C3%AD+-+2.mp3"
          ></audio>
          <figcaption>
            <strong> Slang - Zdrav&#xED; - 2 by Lipa Bola</strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Zdrav%C3%AD+-+3.mp3"
          ></audio>
          <figcaption>
            <strong> Slang - Zdrav&#xED; - 3 by Lipa Bola</strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Zdrav%C3%AD+-+4.mp3"
          ></audio>
          <figcaption>
            <strong> Slang - Zdrav&#xED; - 4 by Lipa Bola</strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Zdrav%C3%AD+-+5.mp3"
          ></audio>
          <figcaption>
            <strong> Slang - Zdrav&#xED; - 5 by Lipa Bola</strong>
          </figcaption>
        </figure>

        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Zdrav%C3%AD+-+6.mp3"
          ></audio>
          <figcaption>
            <strong> Slang - Zdrav&#xED; - 6 by Lipa Bola</strong>
          </figcaption>
        </figure>
        <figure>
          <audio
            controls
            src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+Zdrav%C3%AD+-+7.mp3"
          ></audio>
          <figcaption>
            <strong>Slang - Zdrav&#xED; - 7 by Lipa Bola</strong>
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Dialog 1.</strong>
      </p>
      <p>
        <strong>A:</strong> Pros&#xED;m V&#xE1;s, j&#xE1; bych se cht&#x11B;l
        &#x2026; k panu doktorovi na prohl&#xED;dku.
        <br />
        <strong>B:</strong> Tak mi &#x159;ekn&#x11B;te jm&#xE9;no a datum
        narozen&#xED;.
      </p>
      <p>Dialog 2.</p>
      <p>
        <strong>A:</strong> Pros&#xED;m, dal&#x161;&#xED;!
        <br />
        <strong>B:</strong> Sest&#x159;i&#x10D;ko, syn &#x2026; &#x2026; do
        prstu a hodn&#x11B; to krv&#xE1;c&#xED;.
        <br />
        <strong>A:</strong> Tak honem poj&#x10F;te d&#xE1;l. V&#xED;te, kdy
        naposled dostal injekci proti tetanu?
      </p>
      <p>Dialog 3.</p>
      <p>
        <strong>A:</strong> Tak co pot&#x159;ebujete?
        <br />
        <strong>B:</strong> &#x2026; &#x2026; a &#x2026; &#x2026; &#x2026; do
        hlavy. Pak jsem zvracela a ta hlava m&#x11B; po&#x159;&#xE1;d
        hrozn&#x11B; bol&#xED;.
        <br />
        <strong>A:</strong> Kdy se v&#xE1;m to stalo? To m&#x16F;&#x17E;e
        b&#xFD;t ot&#x159;es mozku. Zavol&#xE1;m sanitku a pojedete do nemocnice
        na vy&#x161;et&#x159;en&#xED;.
      </p>
      <p>Dialog 4.</p>
      <p>
        <strong>A:</strong> Co se v&#xE1;m stalo?
        <br />
        <strong>B:</strong> Pane doktore, p&#x159;edv&#x10D;&#xED;rem jsem si
        d&#x11B;lal k&#xE1;vu a &#x2026; &#x2026; &#x2026; horkou vodou.
        &#x2026; &#x2026; &#x2026; ruku.
        <br />
        <strong>A:</strong> Hm, no m&#xE1;te to hodn&#x11B; sp&#xE1;len&#xE9;.
        M&#x11B;l jste p&#x159;ij&#xED;t hned, jak se v&#xE1;m to stalo.
        D&#xE1;me v&#xE1;m na to mast a obvaz. A mus&#xED;te d&#xE1;vat pozor na
        infekci!
      </p>
      <p>Dialog 5.</p>
      <p>
        <strong>A:</strong> V&#x10D;era &#x2026; na led&#x11B;.
        Stra&#x161;n&#x11B; m&#x11B; bol&#xED; noha. Douf&#xE1;m, pan&#xED;
        doktorko, &#x17E;e jsem &#x2026; &#x2026; &#x2026; .<br />
        <strong>B:</strong> No jo no, m&#x16F;&#x17E;e to b&#xFD;t zlomen&#xE9;.
        Mus&#xED;te na rentgen. Sest&#x159;i&#x10D;ka v&#xE1;s tam odveze.
      </p>
      <p>Dialog 6.</p>
      <p>
        <strong>A:</strong> Co je v&#xE1;m?
        <br />
        <strong>B:</strong> Dneska r&#xE1;no jsem m&#x11B;la teplotu 38,5.
        Bol&#xED; m&#x11B; v krku, je mi &#x161;patn&#x11B; a taky trochu
        &#x2026; .<br />
        <strong>A:</strong> Otev&#x159;ete &#xFA;sta. Hm, to je &#x2026; .
        Mus&#xED;te br&#xE1;t antibiotika, &#x10D;ty&#x159;ikr&#xE1;t za den
        jednu tabletu. Tady m&#xE1;te recept. A&#x17E; to doberete,
        p&#x159;ijdete na kontrolu. Chcete napsat nemocenskou?
      </p>
      <p>Dialog 7.</p>
      <p>
        <strong>A:</strong> Kdo je dal&#x161;&#xED;? Tak poj&#x10F;te do
        ordinace. Jakou m&#xE1;te poji&#x161;&#x165;ovnu? M&#xE1;te
        karti&#x10D;ku?
        <br />
        <strong>B:</strong> Jakou karti&#x10D;ku?
        <br />
        <strong>A:</strong> Kartu zdravotn&#xED;ho &#x2026; . Vy nejste
        poji&#x161;t&#x11B;n&#xFD;?
        <br />
        <strong>B:</strong> Ne, nejsem. Kde si m&#x16F;&#x17E;u
        poji&#x161;t&#x11B;n&#xED; &#x2026; ?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic d-flex flex-row">
            <div>
              <div>
                <p>
                  <strong>Dialog 1.</strong>
                  <p>objednat</p>
                </p>
              </div>
              <div>
                <p>
                  <strong>Dialog 2.</strong>
                  <p>se říznul</p>
                </p>
              </div>
              <div>
                <p>
                  <strong>Dialog 3.</strong>
                  <p>Spadla jsem</p>
                  <p>uhodila jsem se</p>
                </p>
              </div>
              <div>
                <p>
                  <strong>Dialog 4.</strong>
                  <p>polil jsem se</p>
                  <p>Spálil jsem si </p>
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <strong>Dialog 5.</strong>
                  <p>Jsem spadl</p>
                  <p>si to nezlomil </p>
                </p>
              </div>
              <div>
                <p>
                  <strong>Dialog 6.</strong>
                  <p>kašlu</p>
                  <p>angina</p>
                </p>
              </div>
              <div>
                <p>
                  <strong>Dialog 7.</strong>
                  <p>pojištění</p>
                  <p>vyřídit</p>
                </p>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          11.1. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; dialog a
          n&#xE1;sledn&#x11B; pracujte s &#xFA;koly.
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_17/Slang+-+U+l%C3%A9ka%C5%99e.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - U l&#xE9;ka&#x159;e</strong>
        </figcaption>
      </figure>
      <p>
        <strong>Dialog. U l&#xE9;ka&#x159;e.</strong>
      </p>
      <p>
        <strong>Eva:</strong> Dobr&#xFD; den.
        <br />
        <strong>L&#xE9;ka&#x159;:</strong> Dobr&#xFD; den. Tak co v&#xE1;s
        tr&#xE1;p&#xED;?
        <br />
        <strong>E:</strong> Je mi u&#x17E; &#x10D;ty&#x159;i dny
        &#x161;patn&#x11B;, m&#xE1;m stra&#x161;nou r&#xFD;mu a ka&#x161;el.
        Trochu m&#x11B; bol&#xED; v krku, ale hlavn&#x11B; se c&#xED;t&#xED;m
        dost unaven&#xE1;.
        <br />
        <strong>L:</strong> M&#x11B;&#x159;ila jste si teplotu?
        <br />
        <strong>E:</strong> Ano, m&#xE1;m 37,8.
        <br />
        <strong>L:</strong> Pod&#xED;v&#xE1;m se v&#xE1;m do krku a poslechnu si
        v&#xE1;s. Vypad&#xE1; to na klasickou ch&#x159;ipku.
        <br />
        <strong>E:</strong> Hm. Ch&#x159;ipku m&#xE1; te&#x10F;ka skoro
        ka&#x17E;d&#xFD;.
        <br />
        <strong>L:</strong> To je pravda, mohla jste se nakazit kdekoliv.
        <br />
        <strong>E:</strong> J&#xE1; jsem bohu&#x17E;el onemocn&#x11B;la
        vlastn&#xED; hloupost&#xED;. Ned&#xE1;vno jsem byla v Alp&#xE1;ch a
        nem&#x11B;la jsem dost tepl&#xE9; boty. Ur&#x10D;it&#x11B; jsem nastydla
        tam.
        <br />
        <strong>L:</strong> Chybami se &#x10D;lov&#x11B;k u&#x10D;&#xED;.
        P&#x159;&#xED;&#x161;t&#x11B; se dob&#x159;e obl&#xE9;kn&#x11B;te. Tohle
        nebude &#x17E;&#xE1;dn&#xE1; t&#x11B;&#x17E;k&#xE1; nemoc. Brzy budete
        zdrav&#xE1; jako rybi&#x10D;ka.
        <br />
        <strong>E:</strong> J&#xE1; se dneska je&#x161;t&#x11B; pot&#x159;ebuju
        vr&#xE1;tit do pr&#xE1;ce.
        <br />
        <strong>L:</strong> O tom nechci v&#x16F;bec sly&#x161;et. Je&#x17E;kovy
        zraky! &#x17D;ensk&#xE1;, vy t&#xE9;m&#x11B;&#x159; nem&#x16F;&#x17E;ete
        chodit a chcete j&#xED;t pracovat?! Ach jo, to je ale
        t&#x11B;&#x17E;k&#xE1; pr&#xE1;ce!
      </p>
      <p>
        <strong>11.2. Odpov&#x11B;zte na ot&#xE1;zky k dialogu.</strong>
      </p>
      <p>
        1) Jak dlouho se Eva nec&#xED;t&#xED; dob&#x159;e?
        <br />
        2) Jak&#xE9; m&#xE1; Eva pot&#xED;&#x17E;e?
        <br />
        3) M&#xE1; Eva teplotu?
        <br />
        4) Pro&#x10D; se pan doktor rozzlobil?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) Čtyři dny.
              <br />
              2) Má strašnou rýmu, kašel, bolí jí v krku a cítí se unavená.
              <br />
              3) Ano, 37,8.
              <br />
              4) Zlobí se, protože Eva chce jít do práce, přestože je nemocná.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          11.3. P&#x159;e&#x10D;t&#x11B;te si text a ozna&#x10D;te
          p&#xED;smenkem P (pravda) spr&#xE1;vn&#xE1; tvrzen&#xED; a
          p&#xED;smenkem L (le&#x17E;) &#x161;patn&#xE1; tvrzen&#xED;.
        </strong>
      </p>
      <p>
        1) Eva sice nem&#xE1; zv&#xFD;&#x161;enou teplotu, ale c&#xED;t&#xED; se
        velmi unaven&#xE1;.
        <br />
        2) L&#xE9;ka&#x159; si mysl&#xED;, &#x17E;e pacientka asi bude m&#xED;t
        ch&#x159;ipku.
        <br />
        3) Mnoho lid&#xED; je posledn&#xED; dobou nemocn&#xFD;ch, proto si Eva
        mysl&#xED;, &#x17E;e se od nich nakazila.
        <br />
        4) Eva si nevzala s sebou na v&#xFD;let dobr&#xE9; boty, a proto je
        l&#xE9;ka&#x159; rozzloben&#xFD;.
        <br />
        5) Eva je nemocn&#xE1;, ale nechce z&#x16F;stat doma.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(10)}>Klíče</button>
        <Collapse in={keys.getValue(10)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) L (lež);
              <br />
              2) P (pravda);
              <br />
              3) P (pravda);
              <br />
              4) L (lež);
              <br />
              5) P (pravda);
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
        <strong>12. Pod&#xED;vejte se na videa.</strong>
      </p>
      <p>
        1)
        <a
          target="blank"
          href="https://cestina-pro-cizince.cz/trvaly-pobyt/a1/pro-ucitele/vyukova-videa/jak-zavolat-zachranku-a2-2/"
        >
          Krizov&#xE1; situace &#x2013; Jak zavolat z&#xE1;chranku
        </a>
      </p>
      <p>
        2)
        <a target="blank" href="https://www.youtube.com/watch?v=f_nBolmmazE">
          Krizov&#xE1; situace &#x2013; Jak zavolat pomoc
        </a>
      </p>
      <p>
        <strong>
          13.1. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video
          &#x10D;esk&#xE9;ho youtubera a pracujte s &#xFA;koly.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=arkdLZ8VWqE">
          12 v&#x11B;c&#xED;, co d&#x11B;l&#xE1;me v&#x161;ichni a p&#x159;itom
          n&#xE1;m to ni&#x10D;&#xED; zdrav&#xED;
        </a>
      </p>
      <p>
        <strong>13.2. Odpov&#x11B;zte na ot&#xE1;zky podle videa.</strong>
      </p>
      <p>
        1) Jak zkvalitnit sp&#xE1;nek a neb&#xFD;t druh&#xFD; den unaven&#xFD;?
        <br />
        2) Jak si nejbezpe&#x10D;n&#x11B;ji vy&#x10D;istit u&#x161;i?
        <br />
        3) Co zp&#x16F;sobuje nadm&#x11B;rn&#xE1; konzumace d&#x17E;us&#x16F;?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(11)}>Klíče</button>
        <Collapse in={keys.getValue(11)} timeout={2000}>
          <div>
            <p className="fst-italic">
              <strong>Orientační odpovědi: </strong>
              <br />
              1) Hodinu před spaním nepoužívat mobil a hlavně nečíst si v
              posteli. <br />
              2) Nechat, aby se vyčistili sami přirozeně a nebo nejlépe použitím
              ručníku. <br />
              3) Způsobuje zubní kazy, cukrovku a obezitu.
            </p>
          </div>
        </Collapse>
      </div>

      <GreenBox
        header="Внимание! Задание № 14 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          14. Pod&#xED;vejte se na obr&#xE1;zky a &#x159;ekn&#x11B;te, co se
          stalo a jakou pomoc byste nab&#xED;dli &#x10D;lov&#x11B;ku &#x10D;i
          jak byste &#x159;e&#x161;ili situaci na obr&#xE1;zku.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_17/picture_3.jpg"
          alt="picture_3"
        />
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

export default LectureSeventeen;
