import React from "react";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";
import GreenBox from "../UI/GreenBox";

const LectureFourteen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(13);
  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">14. lekce</h1>
        <p>Lokál čísla množného. Lokál osobních zájmen</p>
        <Link to="/admin/lectures/13">Предыдущий урок</Link>
        <Link to="/admin/lectures/15">Следующий урок</Link>
      </div>
      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>
      <p>
        <em>
          &#x412; &#x44D;&#x442;&#x43E;&#x439;
          &#x43B;&#x435;&#x43A;&#x446;&#x438;&#x438; &#x43D;&#x430;&#x441;
          &#x436;&#x434;&#x443;&#x442;
          &#x441;&#x43B;&#x435;&#x434;&#x443;&#x44E;&#x449;&#x438;&#x435;
          &#x442;&#x435;&#x43C;&#x44B;:
        </em>
      </p>
      <p>
        <em>
          1)
          <strong>
            &#xAB;Lok&#xE1;l &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho&#xBB;
          </strong>
          (&#x41F;&#x440;&#x435;&#x434;&#x43B;&#x43E;&#x436;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436; &#x432;
          &#x43C;&#x43D;&#x43E;&#x436;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x43C;
          &#x447;&#x438;&#x441;&#x43B;&#x435;;
        </em>
        <br />
        <em>
          2)
          <strong>&#xAB;Lok&#xE1;l osobn&#xED;ch z&#xE1;jmen&#xBB;</strong>
          (&#x41F;&#x440;&#x435;&#x434;&#x43B;&#x43E;&#x436;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;
          &#x43B;&#x438;&#x447;&#x43D;&#x44B;&#x445;
          &#x43C;&#x435;&#x441;&#x442;&#x43E;&#x438;&#x43C;&#x435;&#x43D;&#x438;&#x439;
        </em>
      </p>
      <p>
        <em>
          Lok&#xE1;l &#x43E;&#x442;&#x432;&#x435;&#x447;&#x430;&#x435;&#x442;
          &#x43D;&#x430; &#x432;&#x43E;&#x43F;&#x440;&#x43E;&#x441;&#x44B;
          &#xAB;o kom? o &#x10D;em?&#xBB;.
        </em>
      </p>
      <p>
        <em>
          &#x41A;&#x430;&#x43A; &#x438; &#x432;
          &#x440;&#x443;&#x441;&#x441;&#x43A;&#x43E;&#x43C;
          &#x44F;&#x437;&#x44B;&#x43A;&#x435; &#x43E;&#x43D;
          &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F;
          &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x441;
          &#x43F;&#x440;&#x435;&#x434;&#x43B;&#x43E;&#x433;&#x430;&#x43C;&#x438;.
        </em>
      </p>
      <p>
        <em>
          &#x41F;&#x440;&#x435;&#x434;&#x43B;&#x43E;&#x433;&#x438; &#x432;
          &#x447;&#x435;&#x448;&#x441;&#x43A;&#x43E;&#x43C; &#x2014; po, na, v,
          o, p&#x159;i KOM? &#x10C;EM?
        </em>
      </p>
      <h2>LOK&#xC1;L &#x10C;&#xCD;SLA MNO&#x17D;N&#xC9;HO</h2>
      <p>
        <strong>6. P&#xC1;D (O KOM? O &#x10C;EM?)</strong>
      </p>
      <p className="fw-bold bg-warning">
        <strong>
          &#x421;&#x43A;&#x430;&#x447;&#x430;&#x439;&#x442;&#x435;
          &#x444;&#x430;&#x439;&#x43B; Lok&#xE1;l &#x10D;&#xED;sla
          mno&#x17E;n&#xE9;ho.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_14/Slang+-+Lok%C3%A1l.pdf"
        >
          Slang - Lok&#xE1;l &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho
        </a>
      </p>
      <p className="fw-bold bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Lok&#xE1;l
          &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho.
        </strong>
      </p>
      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/x4hGnRvBKvI"
        title="14  LOKÁL ČÍSLA MNOŽNÉHO"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>
        <strong>Slova z videa</strong>
      </p>
      <p>
        <em>
          Pr&#xE1;vn&#xED;k &#x2014; mluv&#xED;m o pr&#xE1;vn&#xED;c&#xED;ch
        </em>
        <br />
        <em>Vlak &#x2014; mluvili jsme s kamar&#xE1;dem o vlac&#xED;ch</em>
        <br />
        <em>Rybn&#xED;k &#x2014; v rybn&#xED;c&#xED;ch</em>
        <br />
        <em>Z&#xE1;mek &#x2014; v z&#xE1;mc&#xED;ch</em>
        <br />
        <em>Kluk &#x2014; o kluc&#xED;ch</em>
      </p>
      <p>
        <em>&#x10C;ech &#x2014; o &#x10C;e&#x161;&#xED;ch</em>
        <br />
        <em>
          Hoch &#x2014; mluv&#xED;me o t&#x11B;ch vysok&#xFD;ch
          ho&#x161;&#xED;ch
        </em>
        <br />
        <em>Hroch &#x2014; o hro&#x161;&#xED;ch</em>
        <br />
        <em>Hr&#xE1;ch &#x2014; po hra&#x161;&#xED;ch</em>
      </p>
      <p>
        <em>Pstruh &#x2014; pstruz&#xED;ch</em>
        <br />
        <em>B&#x16F;h &#x2014; mluv&#xED;m o boz&#xED;ch</em>
        <br />
        <em>Kolega &#x2014; o kolez&#xED;ch</em>
        <br />
        <em>Tvaroh &#x2014; mluv&#xED;m o tvaroz&#xED;ch</em>
        <br />
        <em>
          P&#x159;&#xED;b&#x11B;h &#x2014; o p&#x159;&#xED;b&#x11B;z&#xED;ch
        </em>
      </p>
      <p>
        <em>Mluvili jsme o r&#x16F;zn&#xFD;ch n&#xE1;m&#x11B;st&#xED;ch</em>
        <br />
        <em>N&#xE1;dra&#x17E;&#xED; &#x2014; n&#xE1;dra&#x17E;&#xED;ch</em>
      </p>
      <p>
        <em>Ok&#xE9;nko &#x2014; v ok&#xE9;nk&#xE1;ch</em>
        <br />
        <em>B&#x159;icho &#x2014; v b&#x159;ich&#xE1;ch</em>
      </p>
      <p>
        <em>
          Mluv&#xED;m o &#x17E;en&#xE1;ch, kamar&#xE1;dk&#xE1;ch,
          u&#x10D;itelk&#xE1;ch, knih&#xE1;ch
        </em>
        <br />
        <em>
          O r&#x16F;&#x17E;&#xED;ch, o prac&#xED;ch, o ulic&#xED;ch, o
          u&#x10D;ebnic&#xED;ch
        </em>
        <br />
        <em>
          O p&#xED;sn&#xED;ch, o tramvaj&#xED;ch, o sk&#x159;&#xED;n&#xED;ch
        </em>
        <br />
        <em>O radostech</em>
        <br />
        <em>V t&#x11B;chto m&#xED;stnostech</em>
        <br />
        <em>V kostech</em>
      </p>
      <p>
        <em>O dobr&#xFD;ch mu&#x17E;&#xED;ch, hradech, &#x17E;en&#xE1;ch</em>
      </p>
      <p>
        <em>Mluv&#xED;m o &#x2026;</em>
        <br />
        <em>Modern&#xED;ch u&#x10D;itel&#xED;ch</em>
        <br />
        <em>Modern&#xED;ch stroj&#xED;ch</em>
        <br />
        <em>Modern&#xED;ch &#x17E;en&#xE1;ch</em>
        <br />
        <em>Modern&#xED;ch m&#x11B;stech</em>
      </p>
      <p>
        <em>
          (Ona) Mluv&#xED;m o <strong>jej&#xED;ch</strong> kamar&#xE1;dech /
          kn&#xED;&#x17E;k&#xE1;ch / oknech
        </em>
        <br />
        <em>
          (Oni) Mluv&#xED;m o <strong>jejich</strong> domech
        </em>
      </p>
      <p>
        <em>Mluv&#xED;m o t&#x11B;ch pl&#xE1;nech / kamar&#xE1;dk&#xE1;ch</em>
      </p>
      <p>
        <em>
          Mluvili jsme o jedn&#x11B;ch pl&#xE1;nech, ale vy&#x161;lo to
          tro&#x161;ku jinak
        </em>
        <br />
        <em>
          Mluvili jsme o dvou, t&#x159;ech, &#x10D;ty&#x159;ech, p&#x11B;ti,
          &#x161;esti, sedmi &#x2026;
        </em>
      </p>
      <p className="fw-bold bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 11
        </strong>
      </p>
      <p>
        <strong>
          1. Utvor&#x30C;te loka&#x301;l &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho.
        </strong>
      </p>
      <p>
        Zlata&#x301; svatba, nejleps&#x30C;i&#x301; kamara&#x301;d, ten
        slavny&#x301; spisovatel, ta hrozna&#x301; nuda, Ondr&#x30C;ej, toto
        c&#x30C;erstve&#x301; ma&#x301;slo, to nove&#x301; obecni&#x301;
        zastupitelstvo, tamta problematicka&#x301; nepovolena&#x301; stavba,
        zdraz&#x30C;eny&#x301; na&#x301;jem, tamta pr&#x30C;i&#x301;ma&#x301;
        platba, to von&#x30C;ave&#x301; my&#x301;dlo, stoleta&#x301;
        li&#x301;pa, nejdel&#x161;&#xED; r&#x30C;eka, ta
        u&#x301;c&#x30C;inna&#x301; le&#x301;c&#x30C;ba, vysoka&#x301; palma,
        drahy&#x301; da&#x301;rek.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div>
            <p className="fst-italic">
              Zlatých svatbách, nejlepších kamarádech, těch slavných
              spisovatelích, těch hrozných nudách, Ondřejích, těchto čerstvých
              máslech, těch nových obecních zastupitelstvech, tamtěch
              problematických nepovolených stavbách, zdražených nájmech, tamtěch
              přímých platbách, těch voňavých mýdlech, stoletých lípách,
              nejdelších řekách, těch účinných léčbách, vysokých palmách,
              drahých dárcích.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          2. Dejte vy&#x301;razy do loka&#x301;lu &#x10D;&#xED;sla
          mno&#x17E;n&#xE9;ho.
        </strong>
      </p>
      <p>
        Toto prvni&#x301; opravene&#x301; patro, tamta zaji&#x301;mava&#x301;
        vy&#x301;stava, ten dlouhy&#x301; monolog, ta prvni&#x301;
        pr&#x30C;i&#x301;lez&#x30C;itost, to kra&#x301;sne&#x301; moderni&#x301;
        hr&#x30C;is&#x30C;te&#x30C;, ten chra&#x301;ne&#x30C;ny&#x301; pstruh,
        tamto hrave&#x301; kot&#x11B;, tenhle zimni&#x301; den, tamta
        cizi&#x301; c&#x30C;tvrt&#x30C;, ta nova&#x301; uc&#x30C;ebnice, ten
        horsky&#x301; potok, tahle daleka&#x301; svatebni&#x301; cesta, to
        stare&#x301; divadlo, tahle zna&#x301;ma&#x301; renesanc&#x30C;ni&#x301;
        b&#xE1;se&#x148;, tenhle mlady&#x301; teolog, ta jina&#x301;
        kolegyne&#x30C;, toto klubove&#x301; kino, ten teply&#x301;
        koz&#x30C;ich, to obsazene&#x301; parkovis&#x30C;te&#x30C;, tamten
        stary&#x301; dobra&#x301;k, tahle cenna&#x301; zkus&#x30C;enost, tento
        novy&#x301; slovni&#x301;k, ta vysoka&#x301; zed&#x30C;, ta mlada&#x301;
        prodavac&#x30C;ka, ten nec&#x30C;ekany&#x301; u&#x301;spe&#x30C;ch.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div>
            <p>
              Těchto prvních opravených patrech, tamtěch zajímavých výstavách,
              těch dlouhých monolozích, těch prvních příležitostech, těch
              krásných moderních hřištích, těch chráněných pstruzích, tamtěch
              hravých koťatech, těchhle zimních dnech, tamtěch cizích čtvrtích,
              těch nových učebnicích, těch horských potocích, těchhle dalekých
              svatebních cestách, těch starých divadlech, těchhle známých
              renesančních básních, těchhle mladých teolozích, těch jiných
              kolegyních, těchto klubových kinech, těch teplých kožiších, těch
              obsazených parkovištích, tamtěch starých dobrácích, těchhle
              cenných zkušenostech, těchto nových slovnících, těch vysokých
              zdech, těch mladých prodavačkách, těch nečekaných úspěších.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          3. Odpov&#x11B;zte na ot&#xE1;zky a slova v z&#xE1;vork&#xE1;ch dejte
          do spr&#xE1;vn&#xFD;ch forem mno&#x17E;n&#xE9;ho &#x10D;&#xED;sla.
        </strong>
      </p>
      <p>
        <em>
          <strong>Vzor:</strong> O &#x10D;em jste mluvili s tchyn&#xED;?
          (hezk&#xE9; m&#x11B;sto) -&gt; Mluvili jsme s tchyn&#xED; o
          hezk&#xFD;ch m&#x11B;stech.
        </em>
      </p>
      <p>
        <strong>V kom jste se zklamali?</strong>
      </p>
      <p>
        (hodn&#xE1; sousedka, p&#x159;&#xED;sn&#xFD; v&#xFD;konn&#xFD;
        &#x159;editel, n&#xE1;&#x161; up&#x159;&#xED;mn&#xFD;
        d&#x11B;de&#x10D;ek, nesnesiteln&#xFD; spolu&#x17E;&#xE1;k, hrozn&#xE1;
        u&#x10D;itelka, &#x161;pan&#x11B;lsk&#xFD; prezident, moje
        &#x161;&#xE9;fov&#xE1;)
      </p>
      <p>
        <strong>
          Po kom/&#x10D;em se st&#xFD;sk&#xE1; Va&#x161;&#xED; tet&#x11B;?
        </strong>
      </p>
      <p>
        (jej&#xED; man&#x17E;el, hlasit&#xE1; hudba, na&#x161;e dcera,
        alkoholick&#xFD; n&#xE1;poj, velk&#xE1; rodina, b&#xE1;je&#x10D;n&#xE9;
        j&#xED;dlo, nemocn&#xE1; sousedka, na&#x161;tvan&#xE1; kolegyn&#x11B;,
        rozbit&#xE9; auto)
      </p>
      <p>
        <strong>
          V &#x10D;em se nikdy nemohl vyznat V&#xE1;&#x161; tat&#xED;nek?
        </strong>
      </p>
      <p>
        (modern&#xED; vybaven&#xED;, levn&#xE9; zbo&#x17E;&#xED;, zdrav&#xE9;
        j&#xED;dlo, drah&#xE9; auto, pracovn&#xED; podm&#xED;nky, obrovsk&#xE1;
        rodina, zapr&#xE1;&#x161;en&#xE9; knihy, d&#x159;ev&#x11B;n&#xFD;
        d&#x16F;m, zna&#x10D;kov&#xE9; oble&#x10D;en&#xED;)
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>Zklamala jsem se v:</strong> hodných sousedkách, přísných
              výkonných ředitelích, našich upřímných dědečcích, nesnesitelných
              spolužácích, hrozných učitelkách, španělských prezidentech, mých
              šéfových.
            </p>

            <p>
              <strong> Mojí tetě se stýská po:</strong> jejích manželích,
              hlasitých hudbách, našich dcerách, alkoholických nápojích, velkých
              rodinách, báječných jídlech, nemocných sousedkách, naštvaných
              kolegyních, rozbitých autech.
            </p>

            <p>
              <strong> Můj tatínek se nikdy nemohl vyznat v: </strong>moderních
              vybaveních, levných zbožích, zdravých jídlech, drahých autech,
              pracovních podmínkách, obrovských rodinách, zaprášených knihách,
              dřevěných domech, značkových oblečeních.
            </p>
          </div>
        </Collapse>
      </div>
      <h2>LOK&#xC1;L OSOBN&#xCD;CH Z&#xC1;JMEN</h2>
      <p className="bg-warning fw-bold">
        <strong>
          Pro pr&#xE1;ci s osobn&#xED;mi z&#xE1;jmeny budete pot&#x159;ebovat
          tabulku &#xAB;Osobn&#xED; z&#xE1;jmena&#xBB;.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_14/Osobn%C3%AD+z%C3%A1jmena.pdf"
        >
          Osobn&#xED; z&#xE1;jmena
        </a>
      </p>
      <p className="bg-warning fw-bold">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Lok&#xE1;l
          osobn&#xED;ch z&#xE1;jmen.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/LrTmmLjDjt4"
        title="14  LOKÁL OSOBNÍCH ZÁJMEN"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>
        <strong>Slova z videa</strong>
      </p>
      <p>
        <strong>
          <em>o, na, v, po, p&#x159;i</em>
        </strong>
      </p>
      <p>
        <strong>
          <em>mn&#x11B;</em>
        </strong>
      </p>
      <p>
        <strong>
          <em>sob&#x11B;</em>
        </strong>
        <br />
        <em>Ta holka mluvila jenom o sob&#x11B;</em>
        <br />
        <em>M&#xE1;m na sob&#x11B; ko&#x161;ili</em>
        <br />
        <em>Co na sob&#x11B; m&#xE1;&#x161;?</em>
      </p>
      <p>
        <strong>
          <em>tob&#x11B;</em>
        </strong>
        <br />
        <em>O kom jste mluvili? &#x2014; o tob&#x11B;.</em>
        <br />
        <em>Na tob&#x11B; sed&#xED; moucha</em>
      </p>
      <p>
        <strong>
          <em>n&#x11B;m</em>
        </strong>
        <br />
        <em>Mluv&#xED;me o n&#x11B;m</em>
        <br />
        <em>Po n&#x11B;m je v&#x17E;dycky nepo&#x159;&#xE1;dek</em>
        <br />
        <em>Moje kolegyn&#x11B; se po n&#x11B;m ptala</em>
      </p>
      <p>
        <strong>
          <em>n&#xED;</em>
        </strong>
        <br />
        <em>Mluv&#xED;me o n&#xED;</em>
      </p>
      <p>
        <strong>
          <em>n&#xE1;s</em>
        </strong>
        <br />
        <em>Mluv&#xED;te o n&#xE1;s?</em>
        <br />
        <em>P&#x159;i n&#xE1;s nesm&#xED;te kou&#x159;it</em>
      </p>
      <p>
        <strong>
          <em>v&#xE1;s</em>
        </strong>
        <br />
        <em>Po v&#xE1;s je v&#x17E;dycky nepo&#x159;&#xE1;dek</em>
        <br />
        <em>Mluvili jsme o v&#xE1;s</em>
        <br />
        <em>Na v&#xE1;s je moucha</em>
      </p>
      <p>
        <strong>
          <em>nich</em>
        </strong>
        <br />
        <em>Policie po nich p&#xE1;trala</em>
      </p>
      <p>
        <strong>
          <em>Cvi&#x10D;en&#xED; k videu</em>
        </strong>
        <br />
        <em>Nev&#xED;m co &#x159;ekne Mirek.</em>
        <br />
        *To z&#xE1;le&#x17E;&#xED; na <strong>n&#x11B;m.*</strong>
      </p>
      <p>
        <em>Hal&#xF3;, Davide! Jsi to ty?</em>
        <br />
        <em>
          P&#xED;&#x161;u o <strong>tob&#x11B;</strong> kr&#xE1;tk&#xFD; text.
        </em>
      </p>
      <p>
        <em>Rodi&#x10D;e m&#xE1;m moc r&#xE1;d.</em>
        <br />
        <em>
          P&#xED;&#x161;u o <strong>nich</strong> &#x10D;asto v knize.
        </em>
      </p>
      <p>
        <em>D&#x11B;ti, kde jste?</em>
        <br />
        *Mluv&#xED;me o <strong>v&#xE1;s.*</strong>
      </p>
      <p>
        <em>
          Moje man&#x17E;elka a j&#xE1; bohu&#x17E;el nem&#x16F;&#x17E;eme
          j&#xED;t na party.
        </em>
        <br />
        <em>
          Nebudete si tam o <strong>n&#xE1;s</strong> pov&#xED;dat?
        </em>
      </p>
      <p>
        <em>O &#x10D;esk&#xE9; literatu&#x159;e nic nev&#xED;m.</em>
        <br />
        <em>
          Mus&#xED;m n&#x11B;co o<strong>n&#xED;</strong>{" "}
          p&#x159;e&#x10D;&#xED;st.
        </em>
      </p>
      <p>
        <strong>
          4. Dopl&#x148;te spr&#xE1;vn&#xE9; formy osobn&#xED;ch z&#xE1;jmen.
        </strong>
      </p>
      <p>
        1) St&#xFD;sk&#xE1; se jim po &#x2026; , &#x2026; , &#x2026; , &#x2026;
        , &#x2026; , &#x2026; (j&#xE1;, ty, on, ona, my, vy, oni).
      </p>
      <p>
        2) Z&#xE1;le&#x17E;&#xED; jim na &#x2026; , &#x2026; , &#x2026; ,
        &#x2026; , &#x2026; , &#x2026; , &#x2026; (j&#xE1;, ty, on, ona, my, vy,
        oni).
      </p>
      <p>
        3) Zklamali se v(e) &#x2026; , &#x2026; , &#x2026; , &#x2026; , &#x2026;
        , &#x2026; , &#x2026; (j&#xE1;, ty, on, ona, my, vy, oni).
      </p>
      <p>
        4) Vyzn&#xE1; se v(e) &#x2026; , &#x2026; , &#x2026; , &#x2026; ,
        &#x2026; , &#x2026; , &#x2026; (j&#xE1;, ty, on, ona, my, vy, oni).
      </p>
      <p>
        5) Nen&#xED; z&#xE1;visl&#xFD; na &#x2026; , &#x2026; , &#x2026; ,
        &#x2026; , &#x2026; , &#x2026; , &#x2026; (j&#xE1;, ty, on, ona, my, vy,
        oni).
      </p>
      <p>
        6) Dozv&#x11B;d&#x11B;li se o &#x2026; , &#x2026; , &#x2026; , &#x2026;
        , &#x2026; , &#x2026; , &#x2026; (j&#xE1;, ty, on, ona, my, vy, oni).
      </p>
      <p>
        7) Zm&#xFD;lili se v(e) &#x2026; , &#x2026; , &#x2026; , &#x2026; ,
        &#x2026; , &#x2026; , &#x2026; (j&#xE1;, ty, on, ona, my, vy, oni).
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div>
            <p className="fst-italic">
              1) mně, tobě, něm, ní, nás, vás, nich; <br /> 2) mně, tobě, něm,
              ní, nás, vás, nich;
              <br /> 3) mně, tobě, něm, ní, nás, vás, nich; <br />
              4) mně, tobě, něm, ní, nás, vás, nich;
              <br /> 5) mně, tobě, něm, ní, nás, vás, nich;
              <br /> 6) mně, tobě, něm, ní, nás, vás, nich.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          5. Do v&#x11B;t dejte spr&#xE1;vn&#xE9; formy osobn&#xED;ch
          z&#xE1;jmen.
        </strong>
      </p>
      <p>
        Vid&#x11B;li ve &#x2026; (j&#xE1;) n&#x11B;co stra&#x161;n&#xE9;ho.
        M&#x16F;j tch&#xE1;n se absolutn&#x11B; nevyzn&#xE1; v &#x2026; (oni).
        Pro&#x10D; nechcete mluvit o &#x2026; (on a oni). V &#x2026; (ona) je
        schovan&#xE1; krabice. Zklamali se v &#x2026; (oni). Necht&#x11B;la jsem
        se nic takov&#xE9;ho dozv&#x11B;d&#x11B;t o &#x2026; (ty). U&#x17E;
        p&#x11B;t let tou&#x17E;&#xED;me po &#x2026; (on a ona).
        St&#xFD;sk&#xE1; se mi po &#x2026; (vy). Bohu&#x17E;el ses zm&#xFD;lil v
        &#x2026; (my). Pro&#x10D; se nem&#x16F;&#x17E;u nikdy vyznat v &#x2026;
        (reflex. z&#xE1;j. -&gt; se).
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div>
            <p className="fst-italic">
              mně, nich, něm a nich, ní, nich, tobě, něm a ní, vás, nás, sobě.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          6. Nahra&#x10F;te n&#xE1;sleduj&#xED;c&#xED; tu&#x10D;n&#x11B;
          zv&#xFD;razn&#x11B;n&#xE1; slova ve v&#x11B;t&#xE1;ch osobn&#xED;m
          z&#xE1;jmenem.
        </strong>
      </p>
      <p>
        <em>
          <strong>Vzor</strong>: Mluvili jsme o m&#xE9;
          <strong>sest&#x159;e.</strong> -&gt; Mluvili jsme o n&#xED;.
        </em>
      </p>
      <p>
        Nechci diskutovat o <strong>pen&#x11B;z&#xED;ch</strong>. Domluvil ses
        na <strong>nov&#xE9;m term&#xED;nu</strong>? Ta sousedka je
        z&#xE1;visl&#xE1; na <strong>drog&#xE1;ch</strong> a
        <strong>sv&#xE9; dce&#x159;i</strong>. Na
        <strong>hlav&#x11B;</strong> m&#x11B;l d&#x11B;ravou &#x10D;epici.
        Va&#x161;e v&#xFD;plata z&#xE1;le&#x17E;&#xED; nejen na
        <strong>pracovn&#xED;ch podm&#xED;nk&#xE1;ch</strong>, ale i na
        <strong>va&#x161;&#xED; pr&#xE1;ci</strong>. Ivana mluvila o
        <strong>nov&#xE9; kav&#xE1;rn&#x11B;</strong>, kter&#xE1; se
        nach&#xE1;z&#xED; na n&#xE1;m&#x11B;st&#xED;. V&#x10D;era dopoledne jsem
        se dozv&#x11B;d&#x11B;la o<strong>na&#x161;em &#x159;editeli</strong>{" "}
        mnoho zaj&#xED;mav&#xFD;ch informac&#xED;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div>
            <p className="fst-italic">
              nich, něm, nich, ní, ní, nich, ní, ní, něm.
            </p>
          </div>
        </Collapse>
      </div>
      <p className="text-danger">
        <strong>
          <em>
            D&#xE1;le pokra&#x10D;uje &#x10D;ten&#xED;, budeme si
            &#x10D;&#xED;st, p&#x159;ekl&#xE1;dat a u&#x10D;it si nov&#xE1;
            slov&#xED;&#x10D;ka.
          </em>
        </strong>
      </p>
      <p className="text-danger">
        <strong>
          <em>
            Tak&#xE9; bych V&#xE1;m cht&#x11B;la p&#x159;ipomenout, &#x17E;e
            m&#xE1;te &#x10D;&#xED;st NAHLAS.
          </em>
        </strong>
      </p>
      <p>
        <strong>
          7. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; diskuzi a
          dejte slova v z&#xE1;vork&#xE1;ch do spr&#xE1;vn&#xE9; formy
          (Lok&#xE1;l &#x10D;&#xED;sla jednotn&#xE9;ho).
        </strong>
      </p>
      <p>
        <strong>Po &#x10D;em se st&#xFD;sk&#xE1; mamink&#xE1;m?</strong>
      </p>
      <p>
        <strong>So&#x148;a (27 let): Dlouh&#xE9; sn&#xED;dan&#x11B;</strong>
        <br />
        Den pro m&#x11B; v&#x17E;dy za&#x10D;&#xED;nal dlouhou
        sn&#xED;dan&#xED;. Na &#x2026; (st&#x16F;l) muselo b&#xFD;t ode
        v&#x161;eho n&#x11B;co a j&#xE1; jsem z toho pomalu uzob&#xE1;vala.
        A&#x165; se d&#x11B;lo cokoli, nikdy jsem se nenechala nik&#xFD;m a
        ni&#x10D;&#xED;m vyru&#x161;it. To ale skon&#x10D;ilo narozen&#xED;m
        Petru&#x161;ky. Vlastn&#x11B; ani ne tak jej&#xED;m narozen&#xED;m, ale
        t&#xED;m, &#x17E;e za&#x10D;ala chodit. Jakmile p&#x159;estala b&#xFD;t
        upoutan&#xE1; na jedno m&#xED;sto, ned&#x11B;l&#xE1;m nic jin&#xE9;ho,
        ne&#x17E; za n&#xED; od bo&#x17E;&#xED;ho r&#xE1;na b&#x11B;h&#xE1;m po
        &#x2026; &#x2026; (cel&#xFD; byt).
      </p>
      <p>
        <strong>Ag&#xE1;ta (30 let): Boj o ovlada&#x10D;</strong>
        <br />
        D&#x159;&#xED;v jsme se s man&#x17E;elem dohadovali, kter&#xFD;
        po&#x159;ad v &#x2026; (televize) budeme sledovat. Od r&#xE1;na do
        ve&#x10D;era je program &#x10D;ist&#x11B; v &#x2026; (re&#x17E;ie)
        na&#x161;ich d&#x11B;t&#xED;, a tak tr&#xE1;v&#xED;me r&#xE1;na s
        Krte&#x10D;kem, odpoledne &#x160;moulov&#xE9; a nave&#x10D;er
        bzu&#x10D;&#xED; V&#x10D;elka M&#xE1;ja a m&#xE1;v&#xE1;
        Ve&#x10D;ern&#xED;&#x10D;ek. Jak j&#xE1; bych se n&#x11B;kdy zmocnila
        ovlada&#x10D;e a pod&#xED;vala se na n&#x11B;jak&#xFD; dokument nebo na
        romantickou komedii! Ve&#x10D;er, kdy&#x17E; kone&#x10D;n&#x11B;
        d&#x11B;ti usnou, u&#x17E; ale nem&#xE1;m s&#xED;lu ani na jedno.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div>
            <p className="fst-italic">
              <strong>Soňa (27 let): </strong> Dlouhé snídaně: stole, celém bytě
            </p>

            <p className="fst-italic">
              <strong>Agáta (30 let):</strong> Boj o ovladač: televizi, režii
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          8. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; &#x10D;l&#xE1;nek a
          dopl&#x148;te vynechan&#xE1; slova.
        </strong>
      </p>

      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_14/O+%C4%8Dem+nemluvit+na+prvn%C3%ADm+rande.mp3"
        ></audio>
        <figcaption>
          <strong>O čem nemluvit na prvním rande</strong>
        </figcaption>
      </figure>

      <p>
        <strong>O &#x10D;em nikdy nemluvit na &#x2026; &#x2026; ?</strong>
      </p>
      <p>
        Nikdy nekomunikujte na prvn&#xED;m rande o &#x2026; &#x2026; &#x2026; .
        Ne, &#x17E;e byste na tyto ot&#xE1;zky nem&#x11B;li v
        p&#x159;&#xED;pad&#x11B; dotazu v&#x16F;bec odpov&#xED;dat. Sna&#x17E;te
        se v&#x161;ak &#x159;&#xED;ci jen to, &#x17E;e minulost u&#x17E;
        &#x159;e&#x161;it nechcete, &#x17E;e se chcete soust&#x159;edit
        p&#x159;edev&#x161;&#xED;m na to, co je te&#x10F; a co bude. &#x2026;
        &#x2026; &#x2026; prozra&#x10F;te o &#x2026; &#x2026; &#x2026; jen
        stru&#x10D;n&#xE9; informace. Nerozeb&#xED;rejte detaily vztahu,
        nest&#x11B;&#x17E;ujte si na b&#xFD;val&#xE9;ho partnera, nevytahujte
        v&#x161;echny k&#x159;ivdy, kter&#xE9; v&#xE1;s b&#x11B;hem &#x17E;ivota
        s n&#xED;m potkaly, neh&#xE1;zejte na n&#x11B;j &#x161;p&#xED;nu.
        Necht&#x11B;jte, aby si v&#xE1;&#x161; nov&#xFD; potenci&#xE1;ln&#xED;
        partner myslel, &#x17E;e m&#xE1;te k opa&#x10D;n&#xE9;mu pohlav&#xED;
        negativn&#xED; vztah nebo naopak, &#x17E;e v&#xE1;&#x161;
        p&#x16F;vodn&#xED; vztah nen&#xED; je&#x161;t&#x11B; zcela
        ukon&#x10D;en, jeliko&#x17E; jste se prozat&#xED;m nedok&#xE1;zali s
        va&#x161;&#xED;m rozchodem sm&#xED;&#x159;it. Pamatujte, &#x17E;e
        a&#x165; u&#x17E; &#x2026; &#x2026; &#x2026; &#x17E;enu nebo mu&#x17E;e,
        ka&#x17E;d&#xFD; chce m&#xED;t pocit, &#x17E;e je t&#xED;m jedin&#xFD;m,
        kdo by mohl ve va&#x161;em &#x17E;ivot&#x11B; nyn&#xED; hr&#xE1;t prim.
      </p>
      <p>
        Krom&#x11B; va&#x161;ich ex partnersk&#xFD;ch vztah&#x16F;
        ne&#x159;e&#x161;te na prvn&#xED;m rande ani va&#x161;i problematickou
        minulost. Na prvn&#xED;m rande nen&#xED; zapot&#x159;eb&#xED; &#x2026;
        &#x2026; &#x2026; tom, &#x17E;e jste vyl&#xE9;&#x10D;en&#xFD; alkoholik,
        nebo &#x17E;e jste se zbavili &#x2026; &#x2026; &#x10D;emkoliv.
        V&#x11B;&#x159;te, &#x17E;e p&#x159;esto&#x17E;e &#x159;eknete, &#x17E;e
        u&#x17E; je tato skute&#x10D;nost d&#xE1;vnou minulost&#xED;,
        doty&#x10D;n&#xFD; si zapamatuje jen ona dv&#x11B; negativn&#xED; slova
        &#x2014; z&#xE1;vislost nebo alkoholismus. Slovo minulost v jeho
        pam&#x11B;ti ur&#x10D;it&#x11B; neutkv&#xED;.
      </p>
      <p>
        Stejn&#x11B; tak zdravotn&#xED; probl&#xE9;my nejsou t&#xED;m
        prav&#xFD;m t&#xE9;matem pro va&#x161;i prvn&#xED; osobn&#xED;
        komunikaci. Samoz&#x159;ejm&#x11B;, &#x17E;e je zapot&#x159;eb&#xED;
        partnerovi &#x159;&#xED;ci, &#x17E;e m&#xE1;te n&#x11B;jak&#xFD;
        zdravotn&#xED; probl&#xE9;m. Dejte tomu rad&#x11B;ji trochu &#x10D;asu.
        Ka&#x17E;d&#xFD; hled&#xE1; zdrav&#xE9;ho partnera a va&#x161;e nemoc
        nebo v&#xE1;&#x161; probl&#xE9;m by mohl va&#x161;i &#x161;anci na
        sezn&#xE1;men&#xED; velmi rychle zni&#x10D;it. Ka&#x17E;d&#xFD; jde
        toti&#x17E; na prvn&#xED; rande s t&#xED;m, &#x17E;e by tento vztah mohl
        kone&#x10D;n&#x11B; vyj&#xED;t a &#x2026; &#x2026; , &#x17E;e si
        m&#xE1;te co &#x159;&#xED;ci, pl&#xE1;nuje i dal&#x161;&#xED;
        setk&#xE1;n&#xED; a k tomu se &#x17E;&#xE1;dn&#xE9; rozbory va&#x161;eho
        zdravotn&#xED;ho stavu nehod&#xED;.
      </p>
      <p>
        Ani rozbor &#x2026; &#x2026; nen&#xED; nejvhodn&#x11B;j&#x161;&#xED;m
        t&#xE9;matem k va&#x161;emu rozhovoru. V&#x11B;t&#x161;ina lid&#xED;
        politice v&#x16F;bec neholduje, zbytek m&#xE1; u politick&#xFD;ch
        konverzac&#xED; tendenci poh&#xE1;dat se. Tomuto t&#xE9;matu se tedy
        rad&#x11B;ji &#x2026; vyhn&#x11B;te.
      </p>
      <p>
        Velkou &#x10D;&#xE1;sti lid&#xED; mohou &#x2026; tak&#xE9; va&#x161;e
        z&#xE1;vazky. A&#x165; u&#x17E; jsou jak&#xE9;koliv, d&#xE1;vkujte je
        partnerovi opatrn&#x11B;. Mohl by se toti&#x17E; ob&#xE1;vat ztr&#xE1;ty
        sv&#xE9; svobody nebo dostat strach, &#x17E;e nebudete m&#xED;t
        d&#xED;ky va&#x161;im z&#xE1;vazk&#x16F;m dostatek &#x10D;asu pro
        tr&#xE1;ven&#xED; spole&#x10D;n&#xFD;ch voln&#xFD;ch chvilek.
        P&#x159;esto&#x17E;e by &#x2026; &#x2026; &#x2026; k n&#x11B;jak&#xE9;mu
        va&#x161;emu spole&#x10D;n&#xE9;mu z&#xE1;vazku tak&#xE9; do&#x161;lo,
        je lep&#x161;&#xED; &#x2026; &#x2026; toto t&#xE9;ma tak&#xE9; velmi
        opatrn&#x11B;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div>
            <p className="fst-italic">
              prvním rande, svých minulých partnerech, Na první schůzce, svých
              ex partnerech, se jedná o, se rozpovídat o, závislosti na, v
              případě, politické situace, obloukem, vyděsit, dříve nebo později,
              jít na
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          9. Dopl&#x148;te vynechan&#xE1; slova, kter&#xE1; usly&#x161;&#xED;te
          v textu.
        </strong>
      </p>

      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_14/V+kav%C3%A1rn%C4%9B.mp3"
        ></audio>
        <figcaption>
          <strong>V kavárně</strong>
        </figcaption>
      </figure>

      <p>
        <strong>
          Dv&#x11B; kamar&#xE1;dky sed&#xED; v kav&#xE1;rn&#x11B;,
          d&#x11B;v&#x10D;ata si vypr&#xE1;v&#x11B;j&#xED; a Na&#x10F;a
          vypr&#xE1;v&#xED; L&#xED;d&#x11B;.
        </strong>
      </p>
      <p>
        &#xAB;Romana m&#xE1; nov&#xFD; byt! Sly&#x161;ela jsi o &#x2026;
        &#x2026; &#x2026; ? V&#x10D;era jsme se o tom nov&#xE9;m byt&#x11B;
        dlouho bavily. Koupila si ten nov&#xFD; byt minul&#xFD; m&#x11B;s&#xED;c
        a hned &#x2026; &#x2026; . St&#x11B;hov&#xE1;n&#xED; ale trvalo
        t&#x159;i dny. Romana mi &#x2026; st&#x11B;hov&#xE1;n&#xED; &#x2026; .
        V&#x161;echno si musela zorganizovat sama. Nejd&#x159;&#xED;v si
        myslela, &#x17E;e j&#xED; pom&#x16F;&#x17E;e kamar&#xE1;d, kter&#xFD;
        m&#xE1; velk&#xE9; auto. Po&#x17E;&#xE1;dala toho kamar&#xE1;da o
        &#x2026; a on souhlasil. Potom j&#xED; kamar&#xE1;d ale &#x159;ekl,
        &#x17E;e nem&#xE1; &#x10D;as. Romana se na toho kamar&#xE1;da
        je&#x161;t&#x11B; dnes trochu &#x2026; .
      </p>
      <p>
        D&#x16F;m, ve kter&#xE9;m m&#xE1; Romana byt, je na hezk&#xE9;m
        m&#xED;st&#x11B;. Bl&#xED;zko domu je supermarket, restaurace i park.
        &#x2026; &#x2026; bude Romana ka&#x17E;d&#xE9; r&#xE1;no b&#x11B;hat.
        Ten d&#x16F;m m&#xE1; jen jednu &#x2026; . P&#x159;ed domem je
        zast&#xE1;vka autobus&#x16F;. Romana sly&#x161;&#xED; autobusy
        ka&#x17E;d&#xFD;ch 15 minut. Nem&#x16F;&#x17E;e si na ty autobusy
        zvyknout.&#xBB;
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div>
            <p className="fst-italic">
              jejím novém bytě, se přestěhovala, o, vyprávěla, pomoc, zlobí, V
              parku, nevýhodu
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
          10. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; p&#xED;se&#x148;
          Karla Gotta a dopl&#x148;te vynechan&#xE1; slova.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=9Ov8qs6YiuA">
          Karel Gott - J&#xE1; tou&#x17E;&#xED;m po &#x17E;ivot&#x11B; (1970)
        </a>
      </p>
      <p>
        U&#x17E; d&#xE1;vno jsem &#x2026; &#x2026;
        <br />
        &#x17E;e d&#xE1;l jsem kdysi m&#xED;&#x159;il,
        <br />
        &#x17E;e nejsem, kde jsem tou&#x17E;il b&#xFD;t
        <br />
        u&#x17E; d&#xE1;vno nem&#xE1;m s&#xED;lu
        <br />
        j&#xED;t hledat &#x2026; &#x2026;
        <br />
        u&#x17E; d&#xE1;vno &#x2026; &#x2026; z&#x16F;st&#xE1;v&#xE1;m
      </p>
      <p>
        j&#xE1; v&#xE1;m, j&#xE1; &#x2026; &#x2026; &#x2026;
        <br />
        tam n&#x11B;kde, a&#x17E; ve Lhot&#x11B; zl&#xE1;man&#xFD;
        <br />
        tam, kde se m&#xE1;lo mluv&#xED;,
        <br />
        tam, kde jsou &#x2026; &#x2026; &#x17E;l&#x16F;vy schovan&#xFD;
        <br />
        j&#xE1; v&#xE1;m, j&#xE1; chci m&#xED;t &#x2026; &#x2026; chrpy
        <br />
        j&#xE1; bez nich &#x2026; trp&#xED;m
        <br />
        v&#xE1;&#x17E;en&#xED;
        <br />
        v&#xED;no a st&#x159;echu z do&#x161;k&#x16F;
        <br />
        v&#xED;c nechci &#x2026; tro&#x161;ku m&#xED;t
      </p>
      <p>
        u&#x17E; d&#xE1;vno jsem se sm&#xED;&#x159;il
        <br />
        &#x17E;e d&#x159;&#xED;v jsem v&#xED;ce h&#xFD;&#x159;il
        <br />
        a v&#x161;emu kolem jsem &#x2026; &#x2026;
        <br />
        u&#x17E; d&#xE1;vno &#x2026; &#x2026;
        <br />
        d&#xE1;l t&#xE1;hnout tuhle k&#xE1;ru
        <br />
        u&#x17E; d&#xE1;vno v kout&#x11B; z&#x16F;st&#xE1;v&#xE1;m
      </p>
      <p>
        j&#xE1; v&#xE1;m, j&#xE1; tou&#x17E;&#xED;m po &#x17E;ivot&#x11B;
        <br />
        tam n&#x11B;kde, tam a&#x17E; ve Lhot&#x11B; &#x2026;
        <br />
        tam, kde se m&#xE1;lo mluv&#xED;,
        <br />
        tam, kde jsou v lese &#x17E;l&#x16F;vy &#x2026;
      </p>
      <p>
        j&#xE1; v&#xE1;m, j&#xE1; chci m&#xED;t v okn&#x11B; chrpy
        <br />
        j&#xE1; bez nich v&#xE1;&#x17E;n&#x11B; trp&#xED;m
        <br />
        v&#xE1;&#x17E;en&#xED;
        <br />
        v&#xED;no a st&#x159;echu z do&#x161;k&#x16F;
        <br />
        v&#xED;c nechci &#x2026; &#x2026; m&#xED;t
      </p>
      <div>
        <button onClick={() => keys.toggleKey(10)}>Klíče</button>
        <Collapse in={keys.getValue(10)} timeout={2000}>
          <div>
            <p className="fst-italic">
              se smířil, zlatou žílu, v koutě, toužím po životě, v lese, v okně,
              vážně, ani, se smál, nemám páru, zlámaný, schovaný, ani trošku
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          11.1. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video a
          vykonejte n&#xE1;sleduj&#xED;c&#xED; &#xFA;koly.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=aEUJFA5wktM">
          TOP 5 Nej&#x161;&#xED;len&#x11B;j&#x161;&#xED; atrakce na
          sv&#x11B;t&#x11B;
        </a>
      </p>
      <p>
        <strong>
          11.2. V jak&#xFD;ch zem&#xED;ch se nach&#xE1;zej&#xED;
          n&#xE1;sleduj&#xED;c&#xED; atrakce.
        </strong>
      </p>
      <p>
        1) Kde m&#xE1; sv&#x16F;j p&#x16F;vod skok voln&#xFD;m p&#xE1;dem bez
        ji&#x161;t&#x11B;n&#xED;?
      </p>
      <p>2) Kde najdeme sklen&#x11B;n&#xE9; mosty a vysok&#xE9; l&#xE1;vky?</p>
      <p>
        3) V jak&#xE9; zemi bychom si mohli vyzkou&#x161;et atrakci s
        n&#xE1;zvem &#xAB;Klec smrti&#xBB;?
      </p>
      <p>
        4) Kde m&#x16F;&#x17E;eme naj&#xED;t nejd&#x11B;siv&#x11B;j&#x161;&#xED;
        d&#x16F;m hr&#x16F;zy?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(11)}>Klíče</button>
        <Collapse in={keys.getValue(11)} timeout={2000}>
          <div>
            <p className="fst-italic">1) V Německu</p>
            <p className="fst-italic">2) V čínských horách</p>
            <p className="fst-italic">3) V Austrálii</p>
            <p className="fst-italic">4) V Kalifornii (v San Diegu)</p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 11.3 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />
      <p>
        <em>
          &#x417;&#x430;&#x43F;&#x438;&#x448;&#x438;&#x442;&#x435;
          &#x430;&#x443;&#x434;&#x438;&#x43E;&#x444;&#x430;&#x439;&#x43B;&#x44B;
          &#x438;
          &#x43E;&#x442;&#x43F;&#x440;&#x430;&#x432;&#x44C;&#x442;&#x435;
          &#x438;&#x445; &#x43D;&#x430;
          &#x43F;&#x440;&#x43E;&#x432;&#x435;&#x440;&#x43A;&#x443; &#x432;
          &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x443; Telegram c
          &#x43F;&#x440;&#x435;&#x43F;&#x43E;&#x434;&#x430;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x435;&#x43C;
          &#x438;&#x43B;&#x438; &#x441;
          &#x43F;&#x43E;&#x442;&#x43E;&#x43A;&#x43E;&#x43C;.
        </em>
      </p>
      <p>
        <strong>
          11.3. Odpov&#x11B;zte na n&#xE1;sleduj&#xED;c&#xED; ot&#xE1;zky podle
          sv&#xE9;ho n&#xE1;zoru.
        </strong>
      </p>
      <p>
        1) Jakou atrakci byste nikdy neodv&#xE1;&#x17E;ili zkusit? Pro&#x10D;?
      </p>
      <p>2) Jak&#xE1; atrakce v&#xE1;s nejv&#xED;ce zaujala? Pro&#x10D;?</p>
      <p>
        3) Co si mysl&#xED;te o atrakci &#xAB;Klec smrti&#xBB;? M&#x16F;&#x17E;e
        to b&#xFD;t zaj&#xED;mav&#xE9; nebo je to zbyte&#x10D;n&#xE9;,
        proto&#x17E;e se m&#x16F;&#x17E;ete d&#xED;vat na krokod&#xFD;ly i
        p&#x159;es sklo, nap&#x159;&#xED;klad v zoo?
      </p>
      <p>
        4) Jak&#xFD; m&#xE1;te n&#xE1;zor na d&#x16F;m hr&#x16F;zy?
        M&#x16F;&#x17E;e to b&#xFD;t podle v&#xE1;s nebezpe&#x10D;n&#xE9;?
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

export default LectureFourteen;
