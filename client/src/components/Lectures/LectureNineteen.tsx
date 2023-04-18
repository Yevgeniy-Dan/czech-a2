import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";

const LectureNineteen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(15);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">19. lekce</h1>
        <p>
          Dativ (3. p&#xE1;d) &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho a Dativ
          osobn&#xED;ch z&#xE1;jmen
        </p>
        <Link to="/admin/lectures/18">Предыдущий урок</Link>
        <Link to="/admin/lectures/20">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>Pokra&#x10D;ujeme s Dativem d&#xE1;l.</em>
      </p>
      <p>
        <em>V t&#xE9;to lekci se komplexn&#x11B; pod&#xED;v&#xE1;me na:</em>
      </p>
      <ul>
        <li>
          <strong>*Dativ &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho</strong>
          (&#x434;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;
          &#x43C;&#x43D;&#x43E;&#x436;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E;
          &#x447;&#x438;&#x441;&#x43B;&#x430;);*
        </li>
        <li>
          <strong>*Dativ osobn&#xED;ch z&#xE1;jmen</strong>
          (&#x434;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;
          &#x43B;&#x438;&#x447;&#x43D;&#x44B;&#x445;
          &#x43C;&#x435;&#x441;&#x442;&#x43E;&#x438;&#x43C;&#x435;&#x43D;&#x438;&#x439;).*
        </li>
      </ul>
      <h2>DATIV &#x10C;&#xCD;SLA MNO&#x17D;N&#xC9;HO</h2>

      <p>
        <strong>(3. P&#xC1;D &#x2014; KOMU? S &#x10C;EMU?)</strong>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Dativ
          &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/EIGLHkTHSxQ"
        title="19  DATIV ČÍSLA MNOŽNÉHO"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <img
        src="https://czecha2bucket.s3.amazonaws.com/lekce_19/picture_1.jpg"
        alt="picture_1"
      />

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>Zavol&#xE1;m komu / nap&#xED;&#x161;u komu</em>
        <br />
        <em>Pojedeme k &#x2026;</em>
        <br />
        <em>
          zavol&#xE1;m dobr&#xFD;m p&#xE1;n&#x16F;m / u&#x10D;itel&#x16F;m /
          &#x17E;en&#xE1;m / kamar&#xE1;dk&#xE1;m
        </em>
        <br />
        <em>
          Pojedu k dobr&#xFD;m m&#x11B;st&#x16F;m (2. p. pojedu do dobr&#xFD;ch
          m&#x11B;st)
        </em>
        <br />
        <em>
          Zavol&#xE1;me t&#x11B;m kamar&#xE1;d&#x16F;m / kamar&#xE1;dk&#xE1;m /
          d&#x11B;tem
        </em>
        <br />
        <em>
          Zavol&#xE1;m dv&#x11B;ma / t&#x159;em / &#x10D;ty&#x159;em /
          p&#x11B;ti / &#x161;esti kamar&#xE1;dk&#xE1;m
        </em>
      </p>
      <p>
        <strong>
          <em>V&#x11B;&#x159;&#xED;m &#x2026;</em>
        </strong>
        <br />
        <em>
          tv&#xE9;mu kamar&#xE1;dovi &#x2014; tv&#xFD;m kamar&#xE1;d&#x16F;m
        </em>
        <br />
        <em>
          tomu nezn&#xE1;m&#xE9;mu &#x10D;lov&#x11B;ku &#x2014; t&#x11B;m
          nezn&#xE1;m&#xFD;m lidem
        </em>
        <br />
        <em>
          jej&#xED;mu p&#x159;&#xED;teli &#x2014; jej&#xED;m
          p&#x159;&#xE1;tel&#x16F;m
        </em>
        <br />
        <em>
          na&#x161;&#xED; kamar&#xE1;dce &#x2014; na&#x161;im
          kamar&#xE1;dk&#xE1;m
        </em>
        <br />
        <em>
          sympatick&#xE9;mu cizinci &#x2014; sympatick&#xFD;m cizinc&#x16F;m
        </em>
        <br />
        <em>jej&#xED;mu slibu &#x2014; jej&#xED;m slib&#x16F;m</em>
      </p>
      <p>
        <strong>
          <em>Pomohla jsem &#x2026;</em>
        </strong>
        <br />
        <em>star&#xE9;mu &#x10D;lov&#x11B;ku &#x2014; star&#xFD;m lidem</em>
        <br />
        <em>
          americk&#xE9;mu studentovi &#x2014; americk&#xFD;m student&#x16F;m
        </em>
        <br />
        <em>tomu Raku&#x161;anovi &#x2014; t&#x11B;m Raku&#x161;an&#x16F;m</em>
        <br />
        <em>jednomu Italovi &#x2014; dv&#x11B;ma Ital&#x16F;m</em>
        <br />
        <em>
          n&#x11B;meck&#xE9;mu sportovci &#x2014; n&#x11B;meck&#xFD;m
          sportovc&#x16F;m
        </em>
        <br />
        <em>
          t&#xE9; mal&#xE9; holce &#x2014; t&#x11B;m mal&#xFD;m holk&#xE1;m
        </em>
      </p>
      <p>
        <strong>
          <em>Ud&#x11B;lal tu pr&#xE1;ci d&#xED;ky &#x2026;</em>
        </strong>
        <br />
        <em>
          dobr&#xE9;mu materi&#xE1;lu &#x2014; dobr&#xFD;m materi&#xE1;l&#x16F;m
        </em>
        <br />
        <em>
          t&#xE9; dobr&#xE9; knize &#x2014; t&#x11B;m dobr&#xFD;m knih&#xE1;m
        </em>
        <br />
        <em>
          tomu nov&#xE9;mu slovn&#xED;ku &#x2014; t&#x11B;m nov&#xFD;m
          slovn&#xED;k&#x16F;m
        </em>
        <br />
        <em>jej&#xED; rad&#x11B; &#x2014; jej&#xED;m rad&#xE1;m</em>
      </p>
      <p>
        <strong>
          <em>
            Komu se nel&#xED;bila ta hra? Ta hra se nel&#xED;bila &#x2026;
          </em>
        </strong>
        <br />
        <em>
          na&#x161;emu zn&#xE1;m&#xE9;mu &#x2014; na&#x161;im zn&#xE1;m&#xFD;m
        </em>
        <br />
        <em>
          mlad&#x161;&#xED;mu bratrovi &#x2014; mlad&#x161;&#xED;m bratr&#x16F;m
        </em>
        <br />
        <em>
          star&#x161;&#xED;mu bratranci &#x2014; star&#x161;&#xED;m
          bratranc&#x16F;m
        </em>
        <br />
        <em>
          hezk&#xE9; hol&#x10D;i&#x10D;ce &#x2014; hezk&#xFD;m
          hol&#x10D;i&#x10D;k&#xE1;m
        </em>
      </p>
      <p>
        <strong>
          <em>P&#x159;eklady RU-CZ</em>
        </strong>
        <br />
        <em>V&#x11B;&#x159;&#xED;m chytr&#xFD;m politik&#x16F;m</em>
        <br />
        <em>Pomohla jsem nov&#xFD;m kolegyn&#xED;m</em>
        <br />
        <em>
          &#x160;patn&#x11B; rozum&#xED;m t&#x11B;&#x17E;k&#xFD;m jazyk&#x16F;m
        </em>
        <br />
        <em>Z&#xE1;vid&#xED;m popul&#xE1;rn&#xED;m here&#x10D;k&#xE1;m</em>
        <br />
        <em>
          P&#x16F;j&#x10D;ila jsem kn&#xED;&#x17E;ku jej&#xED;m
          sest&#x159;enic&#xED;m
        </em>
        <br />
        <em>Telefonovala jsem sv&#xFD;m kamar&#xE1;dk&#xE1;m</em>
        <br />
        <em>
          Vysv&#x11B;tluji gramatiku nov&#xFD;m student&#x16F;m/studentk&#xE1;m
        </em>
        <br />
        <em>V&#x11B;&#x159;&#xED;m va&#x161;im projekt&#x16F;m</em>
        <br />
        <em>Nerozum&#xED;m jeho ot&#xE1;zk&#xE1;m</em>
        <br />
        <em>M&#xFD;m koleg&#x16F;m letos bude t&#x159;icet</em>
        <br />
        <em>T&#x11B;m lidem bylo horko</em>
      </p>
      <p>
        <strong>
          <em>Ot&#xE1;zky:</em>
        </strong>
        <br />
        <em>Komu obvykle p&#xED;&#x161;ete zpr&#xE1;vy?</em>
        <br />
        <em>
          J&#xE1; obvykle p&#xED;&#x161;u zpr&#xE1;vy u&#x10D;itel&#x16F;m,
          sv&#xFD;m kamar&#xE1;dk&#xE1;m, sv&#xFD;m p&#x159;&#xE1;tel&#x16F;m a
          taky ob&#x10D;as nezn&#xE1;m&#xFD;m lidem.
        </em>
        <br />
        <em>Komu odpov&#xED;d&#xE1;te na ot&#xE1;zky?</em>
        <br />
        <em>
          J&#xE1; odpov&#xED;d&#xE1;m na ot&#xE1;zky potenci&#xE1;ln&#xED;m
          student&#x16F;m, sv&#xFD;m pracovn&#xED;k&#x16F;m,
          kamar&#xE1;d&#x16F;m.
        </em>
        <br />
        <em>Komu mus&#xED;te zatelefonovat?</em>
        <br />
        <em>
          Mus&#xED;m zatelefonovat sv&#xFD;m p&#x159;&#xED;buzn&#xFD;m v Rusku,
          a taky m&#xE1;m zatelefonovat par zn&#xE1;m&#xFD;m lidem.
        </em>
        <br />
        <em>Komu v&#x17E;dycky pom&#xE1;h&#xE1;te?</em>
        <br />
        <em>
          J&#xE1; v&#x17E;dycky pom&#xE1;h&#xE1;m rodi&#x10D;&#x16F;m,
          babi&#x10D;k&#xE1;m na ulici, ko&#x10D;k&#xE1;m a ps&#x16F;m,
          d&#x11B;tem.
        </em>
        <br />
        <em>
          D&#xED;ky &#x10D;emu jste se zlep&#x161;ili &#x10D;e&#x161;tinu?
        </em>
        <br />
        <em>
          J&#xE1; jsem si zlep&#x161;ila &#x10D;e&#x161;tinu d&#xED;ky
          nov&#xFD;m slov&#x16F;m, r&#x16F;zn&#xFD;m text&#x16F;m,
          r&#x16F;zn&#xFD;m vide&#xED;m, rodil&#xFD;m mluv&#x10D;&#xED;m.
        </em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 14
        </strong>
      </p>
      <p>
        <strong>1. Utvo&#x159;te dativ plur&#xE1;lu.</strong>
      </p>
      <p>
        <strong>A) Podstatn&#xE1; jm&#xE9;na M&#x17E;</strong>
        <br />
        Doktor &#x2026; , prodava&#x10D; &#x2026; , &#x159;idi&#x10D; &#x2026; ,
        asistent &#x2026; , holi&#x10D; &#x2026; , vedouc&#xED; &#x2026; ,
        p&#x159;&#xED;buzn&#xFD; &#x2026; , p&#x159;edseda &#x2026; ,
        spr&#xE1;vce &#x2026; , fotbalista &#x2026; , kritik &#x2026; ,
        spisovatel &#x2026; , l&#xE9;ka&#x159; &#x2026; , syn &#x2026; , cizinec
        &#x2026; , kluk &#x2026; .
      </p>
      <p>
        <strong>B) Podstatn&#xE1; jm&#xE9;na Mn&#x17E;</strong>
        <br />
        Rybn&#xED;k &#x2026; , text &#x2026; , m&#xED;&#x10D; &#x2026; ,
        &#x17E;ivot &#x2026; , pokoj &#x2026; , slovn&#xED;k &#x2026; ,
        po&#x10D;&#xED;ta&#x10D; &#x2026; , pal&#xE1;c &#x2026; .
      </p>
      <p>
        <strong>C) Podstatn&#xE1; jm&#xE9;na &#x17D;</strong>
        <br />
        Budova &#x2026; , pr&#xE1;ce &#x2026; , zn&#xE1;m&#xE1; &#x2026; ,
        cestuj&#xED;c&#xED; &#x2026; , p&#x159;&#xED;le&#x17E;itost &#x2026; ,
        ob&#x11B;&#x165; &#x2026; , restaurace &#x2026; , sk&#x159;&#xED;&#x148;
        &#x2026; , starost &#x2026; , &#x17E;ena &#x2026; , bolest &#x2026; ,
        sn&#xED;dan&#x11B; &#x2026; , &#x159;e&#x10D; &#x2026; , kolegyn&#x11B;
        &#x2026; , v&#x11B;&#x17E; &#x2026; , knihovna &#x2026; , recepce
        &#x2026; , le&#x17E; &#x2026; , lo&#x10F; &#x2026; , hra &#x2026; ,
        odpov&#x11B;&#x10F; &#x2026; , &#xFA;&#x10D;etn&#xED; &#x2026; ,
        chu&#x165; &#x2026; , matka &#x2026; , u&#x10D;ebnice &#x2026; , sestra
        &#x2026; .
      </p>
      <p>
        <strong>D) Podstatn&#xE1; jm&#xE9;na St&#x159;</strong>
        <br />
        Zam&#x11B;stn&#xE1;n&#xED; &#x2026; , parkovi&#x161;t&#x11B; &#x2026; ,
        stolet&#xED; &#x2026; , mo&#x159;e &#x2026; , r&#xE1;no &#x2026; ,
        p&#x159;&#xED;slov&#xED; &#x2026; , slovo &#x2026; ,
        vyu&#x10D;ov&#xE1;n&#xED; &#x2026; , k&#x159;eslo &#x2026; ,
        p&#x159;&#xE1;n&#xED; &#x2026; , vysv&#x11B;tlen&#xED; &#x2026; ,
        ministerstvo &#x2026; , leti&#x161;t&#x11B; &#x2026; , mu&#x17E;stvo
        &#x2026; , pozv&#xE1;n&#xED; &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>A) Podstatná jména Mž</strong>
              <br />
              Doktorům, prodavačům, řidičům, asistentům, holičům, vedoucím,
              příbuzným, předsedům, správcům, fotbalistům, kritikům,
              spisovatelům, lékařům, synům, cizincům, klukům.
            </p>
            <p>
              <strong>B) Podstatná jména Mnž</strong>
              <br />
              Rybníkům, textům, míčům, životům, pokojům, slovníkům, počítačům,
              palácům.
            </p>
            <p>
              <strong>C) Podstatná jména Ž</strong>
              <br />
              Budovám, pracím, známým, cestujícím, příležitostem, obětím,
              restauracím, skříním, starostem, ženám, bolestem, snídaním, řečem,
              kolegyním, věžím, knihovnám, recepcím, lžím, lodím, hrám,
              odpovědím, účetním, chutím, matkám, učebnicím, sestrám.
            </p>
            <p>
              <strong>D) Podstatná jména Stř</strong>
              <br />
              Zaměstnáním, parkovištím, stoletím, mořím, ránům, příslovím,
              slovům, vyučováním, křeslům, přáním, vysvětlením, ministerstvům,
              letištím, mužstvům, pozváním.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>2. Dejte v&#xFD;razy do dativu plur&#xE1;lu.</strong>
      </p>
      <p>
        Tento mlad&#xFD; sportovec &#x2026; , to prvn&#xED;
        t&#x11B;&#x17E;k&#xE9; cvi&#x10D;en&#xED; &#x2026; , ta rychl&#xE1;
        doprava &#x2026; , to n&#xE1;rodn&#xED; divadlo &#x2026; , ten
        v&#xFD;znamn&#xFD; &#x10D;esk&#xFD; odborn&#xED;k &#x2026; , ta
        mal&#xE1; zem&#x11B; &#x2026; , ten nudn&#xFD; film &#x2026; , to
        modern&#xED; kino &#x2026; , ten schopn&#xFD; mana&#x17E;er &#x2026; ,
        ta luxusn&#xED; pra&#x17E;sk&#xE1; &#x10D;tvr&#x165; &#x2026; , ten
        pr&#x16F;m&#x11B;rn&#xFD; plat &#x2026; , ta prvn&#xED; cenn&#xE1;
        zku&#x161;enost &#x2026; , to star&#xE9; n&#xE1;dra&#x17E;&#xED;
        &#x2026; , tamta men&#x161;&#xED; &#x10D;&#xE1;st &#x2026; , ten
        zn&#xE1;m&#xFD; rom&#xE1;n &#x2026; , ta mil&#xE1;
        p&#x159;&#xED;telkyn&#x11B; &#x2026; , ta zku&#x161;en&#xE1;
        pr&#xE1;vni&#x10D;ka &#x2026; , ta zahrani&#x10D;n&#xED; kolegyn&#x11B;
        &#x2026;, ta slavn&#xE1; mal&#xED;&#x159;ka &#x2026; , ta
        v&#xFD;znamn&#xE1; poslankyn&#x11B; &#x2026; , ta letn&#xED; noc
        &#x2026; , toto historick&#xE9; n&#xE1;m&#x11B;st&#xED; &#x2026; , tahle
        osobn&#xED; v&#x11B;c &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Těmto mladým sportovcům, těm prvním těžkým cvičením, těm rychlým
              dopravám, těm národním divadlům, těm významným českým odborníkům,
              těm malým zemím, těm nudným filmům, těm moderním kinům, těm
              schopným manažerům, těm luxusním pražským čtvrtím, těm průměrným
              platům, těm prvním cenným zkušenostem, těm starým nádražím, tamtěm
              menším částem, těm známým románům, těm milým přítelkyním, těm
              zkušeným právničkám, těm zahraničním kolegyním, těm slavným
              malířkám, těm významným poslankyním, těm letním nocím, těmto
              historickým náměstím, těmhle osobní věcem
            </p>
          </div>
        </Collapse>
      </div>
      <h2 className="bg-warning">DATIV OSOBN&#xCD;CH Z&#xC1;JMEN</h2>

      <p className="text-danger">
        <em>
          Pro pr&#xE1;ci s osobn&#xED;mi z&#xE1;jmeny budete pot&#x159;ebovat
          tabulku &#x2014; Sklo&#x148;ov&#xE1;n&#xED; osobn&#xED;ch z&#xE1;jmen.
        </em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x421;&#x43A;&#x430;&#x447;&#x430;&#x439;&#x442;&#x435;
          &#x442;&#x430;&#x431;&#x43B;&#x438;&#x446;&#x443; &#x2014;
          Sklo&#x148;ov&#xE1;n&#xED; osobn&#xED;ch z&#xE1;jmen.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_18/P%C5%99ehled+slovesn%C3%BDch+vazeb+A2.pdf"
        >
          Slang - Sklo&#x148;ov&#xE1;n&#xED; osobn&#xED;ch z&#xE1;jmen
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Dativ
          osobn&#xED;ch z&#xE1;jmen.
        </strong>
      </p>
      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/YQs9mWFtbiY"
        title="19  DATIV OSOBNÍCH ZÁJMEN"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <img
        src="https://czecha2bucket.s3.amazonaws.com/lekce_19/picture_2.jpg"
        alt="picture_2"
      />
      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <strong>
          <em>Proti, naproti, kv&#x16F;li, d&#xED;ky, k</em>
        </strong>
        <br />
        <em>On d&#xE1; / zavol&#xE1; / pom&#x16F;&#x17E;e komu &#x10D;emu</em>
        <br />
        <em>L&#xED;b&#xED; se mi / ti</em>
        <br />
        <em>D&#xE1;m si / d&#xE1;m ti</em>
        <br />
        <em>D&#xE1;me mu to?</em>
        <br />
        <em>Zavol&#xE1;me mu?</em>
        <br />
        <em>Zavol&#xE1;me &#x2026;</em>
        <br />
        <em>P&#x16F;jde&#x161; ke mn&#x11B;?</em>
        <br />
        <em>Bydl&#xED; naproti sob&#x11B;.</em>
        <br />
        <em>D&#xED;ky tob&#x11B; jsem ud&#x11B;lala zkou&#x161;ku.</em>
        <br />
        <em>Kv&#x16F;li tob&#x11B; jsem nestihla autobus.</em>
        <br />
        <em>Bydl&#xED;m naproti n&#x11B;mu.</em>
        <br />
        <em>
          D&#xED;ky n&#x11B;mu jsem dob&#x159;e slo&#x17E;ila zkou&#x161;ku.
        </em>
        <br />
        <em>P&#x16F;jdu naproti n&#xED;.</em>
        <br />
        <em>P&#x16F;jdu k n&#xED; na n&#xE1;v&#x161;t&#x11B;vu.</em>
        <br />
        <em>D&#xED;ky n&#xED; jsem ud&#x11B;lala zkou&#x161;ku.</em>
        <br />
        <em>P&#x16F;jdu k v&#xE1;m.</em>
        <br />
        <em>P&#x16F;jde&#x161; k n&#xE1;m.</em>
        <br />
        <em>P&#x16F;jdeme k n&#xED;m.</em>
        <br />
        <em>Mn&#x11B; se nel&#xED;b&#xED; &#x10D;esk&#xE9; filmy.</em>
        <br />
        <em>Mn&#x11B; se tohle nel&#xED;b&#xED;.</em>
        <br />
        <em>Koup&#xED;m si nov&#xFD; po&#x10D;&#xED;ta&#x10D;.</em>
        <br />
        <em>Sob&#x11B; nikdy po&#x10D;&#xED;ta&#x10D; nekoup&#xED;m.</em>
        <br />
        <em>Zavol&#xE1;m ti.</em>
        <br />
        <em>Tob&#x11B; nezavol&#xE1;m.</em>
        <br />
        <em>
          U&#x17E; jsem ti to &#x159;&#xED;kala X U&#x17E; jsem to tob&#x11B;
          &#x159;&#xED;kala.
        </em>
        <br />
        <em>
          U&#x17E; jsem mu napsala X U&#x17E; jsem jemu napsala
          n&#x11B;kolikr&#xE1;t.
        </em>
      </p>
      <p>
        <strong>
          <em>Tr&#xE9;nink p&#x159;eklady:</em>
        </strong>
        <br />
        <em>Uk&#xE1;zal to ka&#x17E;d&#xE9;mu, ale mn&#x11B; ne.</em>
        <br />
        <em>Jemu Petr telefonoval, ale n&#xE1;m ne.</em>
        <br />
        <em>Ten kab&#xE1;t pat&#x159;&#xED; tob&#x11B; nebo jemu?</em>
        <br />
        <em>Pom&#x16F;&#x17E;u j&#xED; a jemu.</em>
        <br />
        <em>Tob&#x11B; nic nedali?</em>
        <br />
        <em>Mn&#x11B; u&#x17E; nev&#x11B;&#x159;&#xED;.</em>
        <br />
        <em>Tob&#x11B; poradil, ale mn&#x11B; ne.</em>
        <br />
        <em>Mn&#x11B; to ne&#x159;&#xED;kej, &#x159;ekni to jemu.</em>
      </p>
      <p>
        <strong>
          3. Osobn&#xED; z&#xE1;jmena dejte do spr&#xE1;vn&#xE9;ho tvaru.
        </strong>
      </p>
      <p>
        1) Rozbilo se &#x2026; (oni) auto.
        <br />
        2) Nepod&#x11B;koval &#x2026; (on).
        <br />
        3) Napsala dopis &#x2026; (ona).
        <br />
        4) D&#xED;ky &#x2026; (on) m&#xE1; hodn&#x11B; pen&#x11B;z.
        <br />
        5) Jde&#x161; k &#x2026; (ty)?
        <br />
        6) Blahop&#x159;&#xE1;la &#x2026; (my) k &#x2026; (on).
        <br />
        7) Kv&#x16F;li &#x2026; (on) nem&#x16F;&#x17E;eme j&#xED;t ven.
        <br />
        8) Chr&#xE1;nila se proti &#x2026; (vy).
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) jim; <br />
              2) mu; <br />
              3) jí; <br />
              4) němu; <br />
              5) tobě; <br />
              6) nám, němu; <br />
              7) němu; <br />
              8) vám.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          4. Tu&#x10D;n&#x11B; zv&#xFD;razn&#x11B;n&#xE1; slova nahra&#x10F;te
          osobn&#xED;mi z&#xE1;jmeny.
        </strong>
      </p>
      <p>
        Koupil kv&#x11B;tiny <strong>mamince</strong>. P&#x16F;jdu dnes k
        <strong>Martinovi</strong>. K <strong>sv&#xE1;tku</strong> jsem dostala
        kr&#xE1;sn&#xE9; d&#xE1;rky. Nepomohli jsme <strong>sousedovi</strong>,
        p&#x159;esto&#x17E;e proti <strong>sousedovi</strong> nic nem&#xE1;me.
        D&#xED;ky <strong>prezidentovi</strong> se poda&#x159;ilo
        uskute&#x10D;nit mnoho reforem. Kv&#x16F;li
        <strong>zp&#x11B;va&#x10D;ce</strong> jsem p&#x159;estala zp&#xED;vat.
        Nechutn&#xE1; <strong>Ivan&#x11B;</strong> pol&#xE9;vka. Naproti
        <strong>bance</strong> je &#x161;kola.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Koupil <strong>jí</strong> květiny. Půjdu dnes k{" "}
              <strong>němu</strong>. K <strong>němu</strong> jsem dostala krásné
              dárky. Nepomohli jsme <strong>mu</strong>, přestože proti{" "}
              <strong>němu</strong> nic nemáme. Díky <strong>němu</strong> se
              podařilo uskutečnit mnoho reforem. Kvůli <strong>ní</strong> jsem
              přestala zpívat. Nechutná <strong>jí</strong> polévka. Naproti{" "}
              <strong>ní</strong>
              je škola.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          5. Dopl&#x148;te osobn&#xED; z&#xE1;jmena ve spr&#xE1;vn&#xE9;
          form&#x11B;.
        </strong>
      </p>
      <p>
        V&#x11B;nuju se &#x2026; (ty a vy). Pro&#x10D; se &#x2026; (my)
        vyh&#xFD;b&#xE1;te? Ta kabelka pat&#x159;&#xED; &#x2026; (oni)? Nikdy
        &#x2026; (vy a ty) nepodlehneme! Nechci &#x2026; (ona a on)
        ubl&#xED;&#x17E;it. Mus&#xED;me se br&#xE1;nit proti &#x2026; (oni).
        D&#x11B;kuj&#xED; &#x2026; (ona). Pro&#x10D; se &#x2026; (on)
        nepodob&#xE1;&#x161;? Nerozum&#xED;m &#x2026; (vy). Gratulujeme &#x2026;
        (oni).
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              tobě a vám, nám, jim, vám a tobě, jí a mu, nim, jí, mu, vám, jim.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          6. Dopl&#x148;te do textu prepozice do, z, d&#xED;ky, kv&#x16F;li, k,
          na, v, po nebo s. Pozor &#x2014; n&#x11B;kde nemus&#xED; b&#xFD;t.
        </strong>
      </p>
      <p>
        <strong>
          Text. &#x160;t&#x11B;st&#xED; v ne&#x161;t&#x11B;st&#xED;.
        </strong>
      </p>
      <p>
        Jarda Smol&#xED;k m&#x11B;l cel&#xFD; &#x17E;ivot
        &#x161;t&#x11B;st&#xED; v ne&#x161;t&#x11B;st&#xED;. Jako
        d&#xED;t&#x11B; byl velmi &#x10D;asto nemocn&#xFD;. 1) &#x2026; alergii
        musel b&#xFD;t &#x10D;asto 2) &#x2026; doma, a proto m&#x11B;l
        probl&#xE9;my 3) &#x2026; &#x161;kole. Pak mu ale jeho rodi&#x10D;e
        na&#x161;li dobr&#xE9;ho doktora, 4) &#x2026; kter&#xE9;mu se uzdravil.
        Jarda dokon&#x10D;il &#x161;kolu a dostal se 5) &#x2026; vysokou
        &#x161;kolu. Kdy&#x17E; cht&#x11B;l Jarda d&#x11B;lat posledn&#xED;
        zkou&#x161;ky, m&#x11B;l zase sm&#x16F;lu, proto&#x17E;e dostal
        t&#x11B;&#x17E;kou ang&#xED;nu. 6) &#x2026; tomu nemohl d&#x11B;lat
        zkou&#x161;ky 7) &#x2026; norm&#xE1;ln&#xED;m term&#xED;nu.
        Na&#x161;t&#x11B;st&#xED;, m&#x11B;l ale v&#xED;c &#x10D;asu 8) &#x2026;
        u&#x10D;en&#xED;, zkou&#x161;ky ud&#x11B;lal pozd&#x11B;ji a &#x161;kolu
        dokon&#x10D;il.
      </p>
      <p>
        9) &#x2026; &#x161;kole m&#x11B;l Jarda &#x161;t&#x11B;st&#xED;,
        proto&#x17E;e si na&#x161;el dobr&#xE9; m&#xED;sto 10) &#x2026;
        men&#x161;&#xED; firm&#x11B;. Firma ale, bohu&#x17E;el, brzy
        zkrachovala. Jarda nem&#x11B;l pr&#xE1;ci, a tak &#x161;el 11) &#x2026;
        &#xFA;&#x159;ad pr&#xE1;ce jako nezam&#x11B;stnan&#xFD;.
        Na&#x161;t&#x11B;st&#xED;, tam potkal svou zn&#xE1;mou Martu a ta mu
        doporu&#x10D;ila v&#xFD;born&#xE9; m&#xED;sto 12) &#x2026; velk&#xE9;
        firm&#x11B;. A Jarda m&#x11B;l &#x161;t&#x11B;st&#xED; i 13) &#x2026;
        l&#xE1;sce &#x2014; Marta se 14) &#x2026; n&#x11B;j zamilovala a brzo
        byla svatba.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic d-flex flex-column">
            <div>
              <p>
                1) Kvůli; <br />
                2) — ; <br />
                3) ve; <br />
                4) díky; <br />
                5) na; <br />
                6) Kvůli; <br />
                7) v; <br />
              </p>
            </div>
            <div>
              <p>
                8) na; <br />
                9) Po; <br />
                10) v; <br />
                11) na; <br />
                12) ve; <br />
                13) v; <br />
                14) do. <br />
              </p>
            </div>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          7. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video a
          dopl&#x148;te vynechan&#xE1; slova z videa.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=4UBwrHIqyVM">
          Z&#xE1;vislost na Internetu
        </a>
      </p>
      <p>
        <strong>(01:10 - 01:30)</strong>
      </p>
      <p>
        &#xAB;&#x2026; jsou v&#x161;ak jednozna&#x10D;n&#xE9;. Internet se pro
        &#x2026; st&#xE1;v&#xE1; doslova st&#x159;edobodem jeho &#x2026; .
        Zanedb&#xE1;v&#xE1; &#x2026; n&#x11B;mu v&#x161;e ostatn&#xED; a
        d&#x11B;n&#xED; na internetu v&#xFD;razn&#x11B; ovliv&#x148;uje jeho
        &#x2026; . P&#x159;edev&#x161;&#xED;m ale &#x2014; tr&#xE1;v&#xED; na
        internetu st&#xE1;le v&#xED;ce &#x10D;asu a pokud nem&#xE1; internet
        &#x2026; &#x2026; , mohou se u n&#x11B;j dokonce objevit i
        abstinen&#x10D;n&#xED; p&#x159;&#xED;znaky.&#xBB;
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div className="fst-italic">
            <p>Příznaky, závislého, života, kvůli, nálady, k dispozici.</p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>8. Ud&#x11B;lejte si test.</strong>
      </p>
      <p>
        <strong>
          1) Jak dlouho denn&#x11B; sed&#xED;te u po&#x10D;&#xED;ta&#x10D;e?
        </strong>
        <br />
        a) Maxim&#xE1;ln&#x11B; hodinu;
        <br />
        b) Dv&#x11B; a&#x17E; p&#x11B;t hodin;
        <br />
        c) V&#xED;c ne&#x17E; p&#x11B;t hodin.
      </p>
      <p>
        <strong>
          2) Jak nej&#x10D;ast&#x11B;ji pou&#x17E;&#xED;v&#xE1;te
          po&#x10D;&#xED;ta&#x10D;?
        </strong>
        <br />
        a) Na pr&#xE1;ci;
        <br />
        b)Na hry a surfov&#xE1;n&#xED; na internetu;
        <br />
        c) Na psan&#xED; e-mail&#x16F; a skypov&#xE1;n&#xED;.
      </p>
      <p>
        <strong>
          3) Co d&#x11B;l&#xE1;te, kdy&#x17E; nejste u
          po&#x10D;&#xED;ta&#x10D;e?
        </strong>
        <br />
        a) &#x10C;tu si nebo se d&#xED;v&#xE1;m na filmy;
        <br />
        b) Sportuju;
        <br />
        c) &#x10C;tu si e-maily na mobilu nebo na tabletu.
      </p>
      <p>
        <strong>4) Jak &#x10D;asto denn&#x11B; kontrolujete e-maily?</strong>
        <br />
        a) V&#xED;c ne&#x17E; dvakr&#xE1;t denn&#x11B;;
        <br />
        b) Jednou a&#x17E; dvakr&#xE1;t denn&#x11B;;
        <br />
        c) M&#xED;&#x148; ne&#x17E; jednou za den.
      </p>
      <p>
        <strong>
          5) Kdy&#x17E; mus&#xED;te vypnout po&#x10D;&#xED;ta&#x10D;, m&#xE1;te
          hor&#x161;&#xED; n&#xE1;ladu?
        </strong>
        <br />
        a) V&#x17E;dycky;
        <br />
        b) Nikdy;
        <br />
        c) Jenom n&#x11B;kdy.
      </p>
      <p>
        <strong>
          6) Jak nej&#x10D;ast&#x11B;ji komunikujete s kamar&#xE1;dy?
        </strong>
        <br />
        a) P&#xED;&#x161;u jim e-maily nebo SMS;
        <br />
        b) Na soci&#xE1;ln&#xED;ch s&#xED;t&#xED;ch (Twitter, Facebook a
        jin&#xE9;);
        <br />
        c) Sejdeme se a pov&#xED;d&#xE1;me si.
      </p>
      <p>
        <strong>7) Jak nakupujete?</strong>
        <br />
        a) V obchodech;
        <br />
        b) Jenom online na internetu;
        <br />
        c) N&#x11B;kdy na internetu, n&#x11B;kdy v obchodech.
      </p>
      <p>
        <strong>8) Co ud&#x11B;l&#xE1;te r&#xE1;no jako prvn&#xED;?</strong>
        <br />
        a) Pod&#xED;v&#xE1;m se na e-maily nebo Facebook;
        <br />
        b) Ud&#x11B;l&#xE1;m si k&#xE1;vu nebo &#x10D;aj;
        <br />
        c) Obl&#xE9;knu se.
      </p>
      <p>
        <strong>
          9) Hr&#xE1;l(a) jste n&#x11B;kdy po&#x10D;&#xED;ta&#x10D;ovou hru
          celou noc?
        </strong>
        <br />
        a) Ano, d&#x11B;l&#xE1;m to &#x10D;asto;
        <br />
        b) Ne, nikdy;
        <br />
        c) Ano, jednou nebo dvakr&#xE1;t.
      </p>
      <p>
        <strong>
          10) Um&#x11B;l(a) byste nepou&#x17E;&#xED;vat po&#x10D;&#xED;ta&#x10D;
          cel&#xFD; v&#xED;kend?
        </strong>
        <br />
        a) Ano, ale jen v&#xFD;jime&#x10D;n&#x11B;;
        <br />
        b) Ne, nikdy;
        <br />
        c) Ano, d&#x11B;l&#xE1;m to &#x10D;asto.
      </p>
      <table>
        <thead>
          <tr>
            <th>Ot&#xE1;zka</th>
            <th>1)</th>
            <th>2)</th>
            <th>3)</th>
            <th>4)</th>
            <th>5)</th>
            <th>6)</th>
            <th>7)</th>
            <th>8)</th>
            <th>9)</th>
            <th>10)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>a)</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
          </tr>
          <tr>
            <td>b)</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>c)</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={() => keys.toggleKey(8)}>V&#xFD;sledky</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>0-6 bodů:</strong> <br />
              Na počítači nejste závislý. Počítač používáte k práci nebo když
              potřebujete nějaké informace. Možná byste se mohl/a víc zajímat o
              nové technologie.
            </p>
            <p>
              <strong>7-14 bodů:</strong> <br />
              Počítač je pro vás důležitý a umíte ho dobře poslouchat. Důležité
              je, že taky umíte počítač vypnout a najít si zábavu «offline».
            </p>
            <p>
              <strong>15-20 bodů:</strong> <br />
              Život bez počítače pro vás neexistuje! Je to váš nejlepší kamarád.
              Zkuste ho někdy vypnout a jít ven nebo mluvit s nějakým živým
              člověkem :-).
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          9. Poslouchejte, co &#x159;&#xED;kaj&#xED; o sv&#xE9;m vztahu k
          internetu Ji&#x159;&#xED;, Milo&#x161;, a Zde&#x148;ka. Pak
          odpov&#x11B;zte na ot&#xE1;zky?
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_19/Slang+-+Vztah+k+internetu.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - Vztah k internetu by Lida Hola</strong>
        </figcaption>
      </figure>
      <p>
        <strong>Ot&#xE1;zky:</strong>
      </p>
      <p>
        1) Kdo je r&#xE1;d, &#x17E;e m&#x16F;&#x17E;e b&#xFD;t d&#xED;ky
        internetu v kontaktu s lidmi?
        <br />
        2) Kdo pou&#x17E;&#xED;v&#xE1; internet p&#x159;i studiu?
        <br />
        3) Kdo se zaj&#xED;m&#xE1; o politiku a &#x10D;te na internetu
        zpr&#xE1;vy?
        <br />
        4) Kdo mysl&#xED;, &#x17E;e nen&#xED; dobr&#xE9; d&#xE1;vat na
        soci&#xE1;ln&#xED; s&#xED;t&#x11B; svoji adresu, fotografie a
        podobn&#xE9; v&#x11B;ci?
        <br />
        5) Kdo plat&#xED; p&#x159;es internet?
        <br />
        6) Kdo r&#xE1;d hraje po&#x10D;&#xED;ta&#x10D;ov&#xE9; hry a
        d&#xED;v&#xE1; se na filmy a seri&#xE1;ly?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Zdeňka; <br />
              2) Jiří; <br />
              3) Miloš;
              <br />
              4) Zdeňka;
              <br />
              5) Miloš;
              <br />
              6) Jiří.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          10. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; dialog a
          odpov&#x11B;zte co rad&#xED; babi&#x10D;ka?
        </strong>
      </p>
      <p>
        Evina maminka pan&#xED; Hanu&#x161;ov&#xE1; telefonuje babi&#x10D;ce,
        pan&#xED; Milad&#x11B; B&#xED;l&#xE9;.
        <br />
        Mluv&#xED; o tom, co koup&#xED; na V&#xE1;noce Ev&#x11B;, Davidovi a
        Alen&#x11B;.
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_19/Slang+-+To+je+hr%C3%BAza.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - To je hr&#xFA;za by Lida Hola</strong>
        </figcaption>
      </figure>

      <p>
        <strong>1) Davidovi m&#x16F;&#x17E;eme koupit</strong>
        <br />
        a) mobil;
        <br />
        b) fle&#x161;ku;
        <br />
        c) tablet.
      </p>
      <p>
        <strong>2) Alen&#x11B; m&#x16F;&#x17E;eme koupit</strong>
        <br />
        a) tablet;
        <br />
        b) &#x10D;te&#x10D;ku;
        <br />
        c) sluch&#xE1;tka.
      </p>
      <p>
        <strong>3) Ev&#x11B; m&#x16F;&#x17E;eme koupit</strong>
        <br />
        a) &#x10D;te&#x10D;ku;
        <br />
        b) mobil;
        <br />
        c) sluch&#xE1;tka.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(10)}>Klíče</button>
        <Collapse in={keys.getValue(10)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) — c) tablet; <br />
              2) — b) čtečku; <br />
              3) — b) mobil. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          11. Dopl&#x148;te text. V&#x161;imn&#x11B;te si ozna&#x10D;en&#xFD;ch
          v&#xFD;raz&#x16F;.
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_19/Slang+-+To+je+hr%C3%BAza.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - To je hr&#xFA;za by Lida Hola</strong>
        </figcaption>
      </figure>

      <p>
        <strong>Pan&#xED; Hanu&#x161;ov&#xE1;:</strong> To je hr&#x16F;za, jak
        ten &#x10D;as let&#xED;! Za t&#x159;i t&#xFD;dny bude
        &#x160;t&#x11B;dr&#xFD; den a my je&#x161;t&#x11B; nem&#xE1;me
        &#x17E;&#xE1;dn&#xE9; d&#xE1;rky. V&#x16F;bec nev&#xED;m, co
        koup&#xED;me t&#x159;eba Davidovi. Babi, nemohla bys mi n&#x11B;co
        poradit?
        <br />
        <strong>Babi&#x10D;ka:</strong> Davidovi? To p&#x159;ece nen&#xED;
        &#x17E;&#xE1;dn&#xFD; probl&#xE9;m. Sly&#x161;ela jsem, jak David
        telefonoval Lucii a &#x159;&#xED;kal j&#xED;, &#x17E;e by cht&#x11B;l 1)
        &#x2026;
        <br />
        <strong>P&#xED; H:</strong> Po&#x10D;kej, kdo je Lucie?
        <br />
        <strong>B:</strong> P&#x159;ece jeho nov&#xE1;
        p&#x159;&#xED;telkyn&#x11B;.
        <br />
        <strong>P&#xED; H:</strong> Aha, ale co koup&#xED;me Alen&#x11B; a
        Ev&#x11B;?
        <br />
        <strong>B:</strong> Tak to taky v&#xED;m. Alena &#x159;&#xED;kala
        Ev&#x11B;, &#x17E;e by cht&#x11B;la 2) &#x2026; a Eva zase
        &#x159;&#xED;kala Luk&#xE1;&#x161;ovi, &#x17E;e by pot&#x159;ebovala
        nov&#xFD; 3) &#x2026; .<br />
        <strong>P&#xED; H:</strong> A kdo je Luk&#xE1;&#x161;?
        <br />
        <strong>B:</strong> To je Evin kade&#x159;n&#xED;k. Ty nic
        nev&#xED;&#x161;.
        <br />
        P&#xED; H&#xE1;: Ale ty v&#xED;&#x161; v&#x161;echno, vi&#x10F;.
        Tak&#x17E;e tablet, &#x10D;te&#x10D;ka a mobil. To jsou ale
        p&#x11B;kn&#x11B; 4) &#x2026; d&#xE1;rky!
        <br />
        <strong>B:</strong> Jo jo, jsou to na&#x161;e 5) &#x2026; d&#x11B;ti.
        Ale neboj se, n&#x11B;co v&#xE1;m na d&#xE1;rky p&#x159;id&#xE1;m. Jdete
        v ned&#x11B;li na ob&#x11B;d k Ev&#x11B; a Petrovi?
        <br />
        <strong>P&#xED; H:</strong> Ur&#x10D;it&#x11B;. Tak se tam uvid&#xED;me,
        &#x17E;e?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(11)}>Klíče</button>
        <Collapse in={keys.getValue(11)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) tablet; <br />
              2) čtečku; <br />
              3) mobil; <br />
              4) drahé; <br />
              5) drahé. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          12. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED;
          p&#xED;sni&#x10D;ku a dopl&#x148;te vynechan&#xE1; slova.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=Fvg6wO8DOJs">
          Z&#xE1;vid&#xED;m &#x2014; P&#xED;sni&#x10D;ka
        </a>
      </p>
      <p>
        Kdybys byl kr&#xE1;lem a mohl mi d&#xE1;t,
        <br />
        jen jakoby darem, svoji zem &#x10D;i st&#xE1;t,
        <br />
        kdy&#x17E; koup&#xED;&#x161; mi z&#xE1;mek a ze zlata &#x161;t&#xED;t
        <br />
        a sb&#xED;rku v&#x161;ech zn&#xE1;mek, j&#xE1; nebudu cht&#xED;t.
        <br />
        V&#x17E;dy&#x165; j&#xE1; chci jen &#x17E;&#xED;t
        <br />
        jak &#x17E;&#xED;t se m&#xE1;, a o nic v&#xED;c,
        <br />
        je to jen m&#xE1; touha &#x161;&#xED;len&#xE1;, a t&#xE9; chci
        &#x159;&#xED;ct:
      </p>
      <p>
        Z&#xE1;vid&#xED;m &#x2026; , vid&#xED;m je t&#xE9;ct,
        <br />
        z&#xE1;vid&#xED;m &#x2026; , c&#xED;t&#xED;m je p&#xE9;ct,
        <br />
        z&#xE1;vid&#xED;m &#x2026; vo&#x148;av&#xFD; d&#xFD;m,
        <br />
        z&#xE1;vid&#xED;m &#x2026; a nepochod&#xED;m,
        <br />
        z&#xE1;vid&#xED;m &#x2026; medov&#xFD; r&#xE1;j,
        <br />
        z&#xE1;vid&#xED;m &#x2026; , &#x17E;e p&#x159;iv&#xE1;d&#xED; m&#xE1;j,
        <br />
        &#x2026; &#x2026; volnost z&#xE1;vid&#xED;m
        <br />
        a to v&#x11B;c je zl&#xE1;,
        <br />
        &#x2026; v s&#xE1;&#x10D;ku l&#xE1;sku z&#xE1;vid&#xED;m
        <br />a to v&#x11B;c je zl&#xE1;, a-a-&#xE1;.
      </p>
      <p>
        Z&#xE1;vid&#xED;m &#x2026; , &#x17E;e mohou v&#xE9;st,
        <br />
        z&#xE1;vid&#xED;m &#x2026; okolo cest,
        <br />
        z&#xE1;vid&#xED;m &#x2026; srpnov&#xFD; &#x17E;&#xE1;r,
        <br />
        z&#xE1;vid&#xED;m &#x2026; potok&#x16F; p&#xE1;r,
        <br />
        z&#xE1;vid&#xED;m &#x2026; st&#x159;&#xED;brn&#xFD; hlas,
        <br />
        z&#xE1;vid&#xED;m &#x2026; prostor a &#x10D;as.
      </p>
      <p>
        Modr&#xE9;mu mr&#xE1;&#x10D;ku volnost z&#xE1;vid&#xED;m
        <br />
        a to v&#x11B;c je zl&#xE1;.
        <br />
        Studentu v s&#xE1;&#x10D;ku l&#xE1;sku z&#xE1;vid&#xED;m
        <br />a to v&#x11B;c je zl&#xE1;, a-a-&#xE1;.
      </p>
      <p>
        Z&#xE1;vid&#xED;m &#x2026; ,<br />
        Z&#xE1;vid&#xED;m jim,
        <br />
        Z&#xE1;vid&#xED;m &#x2026; ,<br />
        Z&#xE1;vid&#xED;m jim,
        <br />
        Z&#xE1;vid&#xED;m &#x2026; ,<br />
        Z&#xE1;vid&#xED;m jim,
        <br />
        Z&#xE1;vid&#xED;m &#x2026; ,<br />
        Z&#xE1;vid&#xED;m jim.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(12)}>Klíče</button>
        <Collapse in={keys.getValue(12)} timeout={2000}>
          <div className="fst-italic">
            <p>
              řekám, chlebům, ohňům, růžím, včelám, dubnu, Modrému mráčku,
              studentu, cestám, stromům, loukám, horám, houslím, mořím, řekám,
              cestám, horám, mořím.
            </p>
          </div>
        </Collapse>
      </div>
      <p className="bg-warning">
        <strong>
          Ud&#x11B;lejte si n&#xE1;sleduj&#xED;c&#xED; cvi&#x10D;en&#xED;, kde
          naleznete celkov&#xE9; zopakov&#xE1;n&#xED; probran&#xE9; l&#xE1;tky.
        </strong>
      </p>
      <p>
        <strong>
          13. Zopakujte si prepozice. Ozna&#x10D;te spr&#xE1;vnou prepozici.
        </strong>
      </p>
      <p>
        1) Pojedeme p&#x159;es / do / sm&#x11B;rem k &#x10C;esk&#xFD;ch
        Bud&#x11B;jovic.
        <br />
        2) Ud&#x11B;lal jsem to kv&#x16F;li / pro / s dobr&#xE9;
        p&#x159;&#xE1;tel&#xE9;.
        <br />
        3) Na v&#xFD;let jsme &#x161;li v&#x161;ichni d&#xED;ky / s /
        krom&#x11B; nejstar&#x161;&#xED;ch kluk&#x16F;.
        <br />
        4) Byl jsem ly&#x17E;ovat v/nedaleko od / u Jizersk&#xFD;ch hor&#xE1;ch.
        <br />
        5) M&#xED;sto / po / d&#xED;ky velk&#xFD;ch diskuz&#xED;ch jsem se
        rozhodl odej&#xED;t.
        <br />
        6) D&#xE1;m knihy a &#x10D;asopisy do / na / k ty nov&#xE9; police.
        <br />
        7) B&#x11B;hem / na / o V&#xE1;noc&#xED;ch jsem byla mezi / s / u
        rodi&#x10D;&#x16F;.
        <br />
        8) Sedneme si pod / vedle / naproti ty vysok&#xE9; stromy?
        <br />
        9) P&#x159;ipravila jsem to b&#x11B;hem / po / p&#x159;i posledn&#xED;ch
        minut.
        <br />
        10) Mus&#xED;te jet a&#x17E; za / kolem / k t&#x11B;m n&#xED;zk&#xFD;m
        dom&#x16F;m.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(13)}>Klíče</button>
        <Collapse in={keys.getValue(13)} timeout={2000}>
          <div className="fst-italic d-flex flex-column">
            <div>
              <p>
                1) do; <br />
                2) pro; <br />
                3) kromě; <br />
                4) v; <br />
                5) po; <br />
              </p>
            </div>
            <div>
              <p>
                6) do; <br />
                7) o, u; <br />
                8) pod; <br />
                9) během; <br />
                10) k <br />
              </p>
            </div>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>14. Opakujte si p&#xE1;dy v plur&#xE1;lu.</strong>
      </p>
      <p>
        1) Zept&#xE1;m se (ta star&#x161;&#xED; kolegyn&#x11B;).
        <br />
        2) (Ta ciz&#xED; studentka) &#x10D;ekaj&#xED; p&#x159;ed &#x161;kolou.
        <br />
        3) Vid&#xED;te (to star&#xE9; auto) p&#x159;ed sv&#xFD;m domem.
        <br />
        4) Bavili jsme se o (ten star&#x161;&#xED; p&#xE1;n).
        <br />
        5) Nerozum&#x11B;la jsem (to nezn&#xE1;m&#xE9; slovo).
        <br />
        6) (Ten zku&#x161;en&#xFD; doktor) n&#xE1;m doporu&#x10D;ili jin&#xFD;
        l&#xE9;k.
        <br />
        7) Star&#xE1;m se o (ten nemocn&#xFD; pacient).
        <br />
        8) Budeme bydlet v dom&#x11B; (m&#x16F;j nejlep&#x161;&#xED;
        kamar&#xE1;d).
        <br />
        9) Na stole jsou jenom (tvoje rozbit&#xE9; pero).
        <br />
        10) Potkal jsem (n&#xE1;&#x161; b&#xFD;val&#xFD; u&#x10D;itel).
      </p>
      <div>
        <button onClick={() => keys.toggleKey(14)}>Klíče</button>
        <Collapse in={keys.getValue(14)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) těch starších kolegyň; <br />
              2) ty cizí studentky; <br />
              3) ta stará auta; <br />
              4) těch starších pánech; <br />
              5) těm neznámým slovům; <br />
              6) ti zkušení doktoři; <br />
              7) ty nemocné pacienty; <br />
              8) mých nejlepších kamarádů; <br />
              9) tvoje rozbitá pera; <br />
              10) naše bývalé učitele. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p className="text-center">
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

export default LectureNineteen;
