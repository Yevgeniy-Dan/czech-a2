import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import GreenBox from "../UI/GreenBox";

const LectureTwentyTwo: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(10);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">22. lekce</h1>
        <p>
          Instrument&#xE1;l (7. p&#xE1;d) &#x10D;&#xED;sla jednotn&#xE9;ho a
          slovesn&#xE9; vazby
        </p>
        <Link to="/admin/lectures/21">Предыдущий урок</Link>
        <Link to="/admin/lectures/23">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          Srde&#x10D;n&#x11B; v&#xE1;s v&#xED;t&#xE1;me na nov&#xE9; lekci
          <strong>&#xAB;Instrument&#xE1;l&#xBB;</strong> &#x2014;
          &#x442;&#x432;&#x43E;&#x440;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;.
        </em>
      </p>
      <p>
        <em>
          To je <strong>7. p&#xE1;d</strong> a odpov&#xED;d&#xE1; na ot&#xE1;zky{" "}
          <strong>S K&#xDD;M? S &#x10C;&#xCD;M?</strong>
        </em>
      </p>
      <p>
        *P&#x159;edlo&#x17E;ky, kter&#xE9; budeme pou&#x17E;&#xED;vat s
        Instrument&#xE1;lem jsou:
        <strong>s, mezi, nad, pod, p&#x159;ed, za.*</strong>
      </p>
      <p>
        <em>V t&#xE9;to lekci se komplexn&#x11B; pod&#xED;v&#xE1;me na:</em>
      </p>
      <ul>
        <li>
          <strong>*Instrument&#xE1;l &#x10D;&#xED;sla jednotn&#xE9;ho</strong>
          (&#x442;&#x432;&#x43E;&#x440;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;
          &#x435;&#x434;&#x438;&#x43D;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E;
          &#x447;&#x438;&#x441;&#x43B;&#x430;);*
        </li>
        <li>
          <strong>*Slovesn&#xE9; vazby s Instrument&#xE1;lem</strong>
          (&#x433;&#x43B;&#x430;&#x433;&#x43E;&#x43B;&#x44C;&#x43D;&#x44B;&#x435;
          &#x441;&#x432;&#x44F;&#x437;&#x43A;&#x438; &#x441;
          &#x442;&#x432;&#x43E;&#x440;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;
          &#x43F;&#x430;&#x434;&#x435;&#x436;&#x43E;&#x43C;).*
        </li>
      </ul>
      <div className="bg-warning">
        <h2>INSTRUMENT&#xC1;L &#x10C;&#xCD;SLA JEDNOTN&#xC9;HO</h2>

        <p>
          <strong>(7. P&#xC1;D - S K&#xDD;M? S &#x10C;&#xCD;M?)</strong>
        </p>
      </div>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Instrument&#xE1;l
          &#x10D;&#xED;sla jednotn&#xE9;ho.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/G5zTerVcfZw"
        title="22   Instrumentál čísla jednotného"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <strong>
          <em>Pou&#x17E;it&#xED;:</em>
        </strong>
        <br />
        <em>Prost&#x159;edek &#x2014; jedu tramvaj&#xED;, autobusem</em>
        <br />
        <em>
          N&#xE1;stroj &#x2014; j&#xED;te vidli&#x10D;kou, kuli&#x10D;kou,
          za&#x161;roubovat &#x161;roubov&#xE1;kem
        </em>
        <br />
        <em>Pohyb &#x2014; pohybovat rukou, nohou, rukama, nohama</em>
        <br />
        <em>M&#xED;sto &#x2014; p&#x16F;jdu parkem</em>
        <br />
        <em>
          D&#x16F;vod &#x2014; um&#xED;rat hlady, um&#xED;rat strachy,
          um&#xED;rat &#x17E;&#xED;zn&#xED;
        </em>
      </p>
      <p>
        <strong>
          <em>Opakov&#xE1;n&#xED;:</em>
        </strong>
        <br />
        <em>S panem, kamar&#xE1;dem, pr&#xE1;vn&#xED;kem</em>
        <br />
        <em>S mu&#x17E;em, prodava&#x10D;em, N&#x11B;mcem</em>
        <br />
        <em>S majitelem, spisovatelem, u&#x10D;itelem</em>
        <br />
        <em>S p&#x159;edsedou, turistou, kolegou</em>
        <br />
        <em>Se soudcem, s pr&#x16F;vodcem</em>
        <br />
        <em>Hrad &#x2014; hradem</em>
        <br />
        <em>Se&#x161;it &#x2014; se&#x161;item</em>
        <br />
        <em>Mobil &#x2014; mobilem</em>
        <br />
        <em>Strop &#x2014; stropem</em>
        <br />
        <em>Strom &#x2014; stromem</em>
        <br />
        <em>Stroj &#x2014; se strojem</em>
        <br />
        <em>Pomeran&#x10D; &#x2014; pomeran&#x10D;em</em>
        <br />
        <em>Po&#x10D;&#xED;ta&#x10D; &#x2014; po&#x10D;&#xED;ta&#x10D;em</em>
        <br />
        <em>D&#xE9;&#x161;&#x165; &#x2014; de&#x161;t&#x11B;m</em>
        <br />
        <em>M&#x11B;sto &#x2014; pojedu m&#x11B;stem</em>
        <br />
        <em>Auto &#x2014; autem</em>
        <br />
        <em>Okno &#x2014; p&#x159;ed oknem</em>
        <br />
        <em>Mo&#x159;e &#x2014; mo&#x159;em</em>
        <br />
        <em>
          N&#xE1;m&#x11B;st&#xED; &#x2014; p&#x159;ed n&#xE1;m&#x11B;st&#xED;m
        </em>
        <br />
        <em>
          Komunikativn&#xED;, inteligentn&#xED; &#x2014; komunikativn&#xED;m,
          inteligentn&#xED;m
        </em>
        <br />
        <em>
          P&#x16F;jdu tam s &#x17E;enou, kamar&#xE1;dkou, u&#x10D;itelkou,
          kn&#xED;&#x17E;kou
        </em>
        <br />
        <em>P&#x16F;jdu s dobrou &#x17E;enou</em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Statika
          (Instrument&#xE1;l) a Dynamika (Akuzativ).
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/PbThs-qYH24"
        title="22  Statika Instrumentál a Dynamika Akuzativ"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <strong>
          <em>Instrument&#xE1;l vs Akuzativ:</em>
        </strong>
        <br />
        <em>Zaparkuju auto mezi co?</em>
        <br />
        <em>D&#xE1;m k&#x159;eslo mezi okno a pohovku / gau&#x10D;</em>
      </p>
      <p>
        <strong>
          Mysl&#xED;me si, &#x17E;e to bylo lehk&#xE9;! Poj&#x10F;me
          pokra&#x10D;ovat!
        </strong>
      </p>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 10
        </strong>
      </p>
      <p>
        <strong>
          1. Dejte na&#x301;sleduji&#x301;ci&#x301; vy&#x301;razy do
          instrumenta&#x301;lu singula&#x301;ru.
        </strong>
      </p>
      <p>
        <strong>
          a) Podstatna&#x301; jme&#x301;na Ma, ukazovaci&#x301; za&#x301;jmena,
          pr&#x30C;i&#x301;davna&#x301; jme&#x301;na
        </strong>
        <br />
        Ten synovec &#x2026; , tamten vy&#x301;borny&#x301;
        tlumoc&#x30C;ni&#x301;k &#x2026; , novy&#x301; kolega &#x2026; , tento
        s&#x30C;achista &#x2026; , tento vrchni&#x301; &#x2026; , ten
        obha&#x301;jce &#x2026; , tenhle nadany&#x301; student &#x2026; ,
        pracovity&#x301; c&#x30C;love&#x30C;k &#x2026; , ten stary&#x301;
        vra&#x301;tny&#x301; &#x2026; .
      </p>
      <p>
        <strong>
          b) Podstatna&#x301; jme&#x301;na Mi, ukazovaci&#x301; za&#x301;jmena,
          pr&#x30C;i&#x301;davna&#x301; jme&#x301;na
        </strong>
        <br />
        Tento kra&#x301;sny&#x301; renesanc&#x30C;ni&#x301; pala&#x301;c
        &#x2026; , tamten cizi&#x301; autobus &#x2026; , ten
        mezina&#x301;rodni&#x301; rychli&#x301;k &#x2026; , zna&#x301;my&#x301;
        orloj &#x2026; , tento novy&#x301; slovni&#x301;k &#x2026; , ten
        na&#x301;roc&#x30C;ny&#x301; text &#x2026; , tenhle ovocny&#x301;
        c&#x30C;aj &#x2026; .
      </p>
      <p>
        <strong>
          c) Podstatna&#x301; jme&#x301;na F, ukazovaci&#x301; za&#x301;jmena,
          pr&#x30C;i&#x301;davna&#x301; jme&#x301;na
        </strong>
        <br />
        Tato moderni&#x301; s&#x30C;kolni&#x301; knihovna &#x2026; , tamta
        slavnostni&#x301; r&#x30C;ec&#x30C; &#x2026; , bohata&#x301;
        sni&#x301;dane&#x30C; &#x2026; , tahle nova&#x301;
        skr&#x30C;i&#x301;n&#x30C; &#x2026; , s&#x30C;iroka&#x301; ulice
        &#x2026; , tato nebezpec&#x30C;na&#x301; nakaz&#x30C;liva&#x301; nemoc
        &#x2026; , tahle dlouholeta&#x301; kolegyne&#x30C; &#x2026; , tamta
        nezna&#x301;ma&#x301; di&#x301;vka &#x2026; , draha&#x301; televize
        &#x2026; , mila&#x301; servi&#x301;rka &#x2026; .
      </p>
      <p>
        <strong>
          d) Podstatna&#x301; jme&#x301;na N, ukazovaci&#x301; za&#x301;jmena,
          pr&#x30C;i&#x301;davna&#x301; jme&#x301;na
        </strong>
        <br />
        Tamto malovane&#x301; vejce &#x2026; , tohle hezke&#x301;
        povi&#x301;da&#x301;ni&#x301; &#x2026; , toto jarni&#x301;
        des&#x30C;tive&#x301; ra&#x301;no &#x2026; , to letni&#x301;
        romanticke&#x301; pobr&#x30C;ez&#x30C;i&#x301; &#x2026; , tohle
        c&#x30C;ervencove&#x301; slunce &#x2026; , pravdive&#x301;
        pr&#x30C;i&#x301;slovi&#x301; &#x2026; , tamto
        dr&#x30C;eve&#x30C;ne&#x301; za&#x301;bradli&#x301; &#x2026; , tohle
        hezke&#x301; cizi&#x301; jme&#x301;no &#x2026; ,
        pr&#x30C;i&#x301;jemne&#x301; odpoledne &#x2026; , tamto jine&#x301;
        poschodi&#x301; &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <div>
              <p>
                <strong>
                  a) Podstatná jména Ma, ukazovací zájmena, přídavná jména
                </strong>{" "}
                <br />
                Tímto synovcem, tamtím výborným tlumočníkem, novým kolegou,
                tímto šachistou, tímto vrchním, tímto obhájcem, tímhle nadaným
                studentem, pracovitým člověkem, tímto starým vrátným.
              </p>
              <p>
                <strong>
                  b) Podstatná jména Mi, ukazovací zájmena, přídavná jména
                </strong>{" "}
                <br />
                Tímto krásným renesančním palácem, tamtím cizím autobusem, tím
                mezinárodním rychlíkem, známým orlojem, tímto novým slovníkem,
                tím náročným textem, tímhle ovocným čajem.
              </p>
              <p>
                <strong>
                  c) Podstatná jména F, ukazovací zájmena, přídavná jména
                </strong>{" "}
                <br />
                Touto moderní školní knihovnou, tamtou slavnostní řečí, bohatou
                snídaní, touhle novou skříní, širokou ulicí, touto nebezpečnou
                nakažlivou nemocí, touhle dlouholetou kolegyní, tamtou neznámou
                dívkou, drahou televizí, milou servírkou.
              </p>
              <p>
                <strong>
                  d) Podstatná jména N, ukazovací zájmena, přídavná jména
                </strong>{" "}
                <br />
                Tamtím malovaným vejcem, tímhle hezkým povídáním, tímto jarním
                deštivým ránem, tím letním romantickým pobřeží, tímhle
                červencovým sluncem, pravdivým příslovím, tamtím dřevěným
                zábradlím, tímhle hezkým cizím jménem, příjemným odpolednem,
                tamtím jiným poschodím.
              </p>
            </div>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          2. Dejte vy&#x301;razy v za&#x301;vorce do
          na&#x301;lez&#x30C;ite&#x301;ho tvaru.
        </strong>
      </p>
      <p className="text-danger">
        <em>Dejte pozor na p&#xE1;dy!</em>
      </p>
      <p>
        Byli uz&#x30C; (to dlouhe&#x301; c&#x30C;eka&#x301;ni&#x301;) &#x2026;
        otra&#x301;veni&#x301;. Nemu&#x30A;z&#x30C;e hy&#x301;bat (leva&#x301;
        ruka) &#x2026; . Jsem velmi zklamany&#x301; (jejich reakce) &#x2026; .
        Jsme velmi spokojeni&#x301; s (to rychle obc&#x30C;erstveni&#x301;)
        &#x2026; . Je nutne&#x301; s&#x30C;etr&#x30C;it (papi&#x301;r) &#x2026;
        . Otoc&#x30C; (ten c&#x30C;erveny&#x301; kohoutek) &#x2026; .
        Zkra&#x301;tili si cestu (les) &#x2026; . Je nads&#x30C;ena&#x301; (ta
        la&#x301;kava&#x301; nabi&#x301;dka) &#x2026; . Di&#x301;te&#x30C;
        uz&#x30C; ume&#x30C;lo ji&#x301;st (vidlic&#x30C;ka a nu&#x30A;z&#x30C;)
        &#x2026; . Souhlasi&#x301;s&#x30C; s (takovy&#x301; postup) &#x2026; ?
        Vs&#x30C;echny chyby opravila (tamto c&#x30C;ervene&#x301; pero)
        &#x2026; . Zaby&#x301;vaji&#x301; se (ta problematika) &#x2026;
        uz&#x30C; dels&#x30C;i&#x301; dobu. Je zna&#x301;my&#x301;
        (vy&#x301;str&#x30C;edni&#x301; chova&#x301;ni&#x301;) &#x2026; .
        Hrozili jim (pe&#x30C;st) &#x2026; ! To souvisi&#x301; s (ta nemoc)
        &#x2026; . Tr&#x30C;a&#x301;sl se (strach) &#x2026; . Plakali (radost a
        dojeti&#x301;) &#x2026; . Pr&#x30C;ijeli sem za (za&#x301;bava) &#x2026;
        . Poc&#x30C;i&#x301;ta&#x301;s&#x30C; s (ten
        zi&#x301;tr&#x30C;ejs&#x30C;i&#x301; obe&#x30C;d) &#x2026; ? Jedli a
        pili s (velka&#x301; chut&#x30C;) &#x2026; . Vyr&#x30C;es&#x30C;ili to
        (jiny&#x301; zpu&#x30A;sob) &#x2026; . Stal se (novy&#x301;
        vedouci&#x301;) &#x2026; odde&#x30C;leni&#x301;.
        R&#x30C;i&#x301;di&#x301; se (instinkt) &#x2026; . Byli
        pr&#x30C;ekvapeni&#x301; (dobra&#x301; u&#x301;roven&#x30C;) &#x2026;
        jejich znalosti c&#x30C;es&#x30C;tiny. Jen mlc&#x30C;ky poky&#x301;val
        (hlava) &#x2026; . Jsou si jisti (vi&#x301;te&#x30C;zstvi&#x301;)
        &#x2026; . Kr&#x30C;ic&#x30C;ela (bolest) &#x2026; . Jel
        pr&#x30C;i&#x301;lis&#x30C; (velka&#x301; rychlost) &#x2026; . Psal
        (obyc&#x30C;ejna&#x301; tuz&#x30C;ka) &#x2026; . Ma&#x301;vali
        (c&#x30C;eska&#x301; sta&#x301;tni&#x301; vlajka) &#x2026; .
        Vs&#x30C;ichni padali (vyc&#x30C;erpa&#x301;ni&#x301; a u&#x301;nava)
        &#x2026; . Ta cesta vede (kra&#x301;sna&#x301; krajina) &#x2026; . Do
        pra&#x301;ce jela (auto) &#x2026; . Ma&#x301; auto s
        (r&#x30C;idic&#x30C;ka) &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              tím dlouhým čekáním, levou rukou, jejich reakcí, tím rychlým
              občerstvením, papírem, tím červeným kohoutkem, lesem, tou lákavou
              nabídkou, vidličkou a nožem, takovým postupem, tamtím červeným
              perem, tou problematikou, výstředním chováním, pěstí, tou nemocí,
              strachem, radostí a dojetím, zábavou, tím zítřejším obědem, velkou
              chutí, jiným způsobem, novým vedoucím, instinktem, dobrou úrovní,
              hlavou, vítězstvím, bolestí, velkou rychlostí, obyčejnou tužkou,
              českou státní vlajkou, vyčerpáním a únavou, krásnou krajinou,
              autem řidičkou.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          3. Dejte v&#xFD;razy v z&#xE1;vorce do n&#xE1;le&#x17E;it&#xE9;ho
          tvaru.
        </strong>
      </p>
      <p className="text-danger">
        <em>Procvi&#x10D;te si v&#x161;echny p&#xE1;dy.</em>
      </p>
      <p>
        Otev&#x159;eli (ten n&#xE1;hradn&#xED; kl&#xED;&#x10D;) &#x2026; .
        R&#xE1;da pracovala v (naprost&#xE9; ticho) &#x2026; .
        St&#x11B;&#x17E;oval si na velk&#xE9; bolesti v (b&#x159;icho) &#x2026;
        . Vl&#xE1;da sl&#xED;bila &#xFA;&#x10D;inn&#xFD; boj proti
        (hospod&#xE1;&#x159;sk&#xE1; kriminalita) &#x2026; .
        N&#xE1;v&#x161;t&#x11B;vn&#xED;ci vyjeli (tamten v&#xFD;tah) &#x2026;
        a&#x17E; do (posledn&#xED; patro) &#x2026; . Pr&#xFD; to dostal od
        (n&#x11B;jak&#xFD; zn&#xE1;m&#xFD;) &#x2026; . Ode&#x161;el rad&#x11B;ji
        za (lep&#x161;&#xED; pr&#xE1;ce) &#x2026; jinam. Ran&#x11B;n&#xFD; byl
        cel&#xFD; od (krev) &#x2026; . Pom&#xE1;hala jim v&#xED;ra v (B&#x16F;h)
        &#x2026; . V&#x17E;dycky je lep&#x161;&#xED; domluvit se po (dobr&#xE9;)
        &#x2026; . Pokra&#x10D;ovali v (cesta k &#x159;ece) &#x2026; . Oba
        t&#xFD;my bojovaly o (veden&#xED; v tabulce) &#x2026; . Mus&#xED;m
        je&#x161;t&#x11B; zavolat (L&#xE1;&#x10F;a) &#x2026; . S (ta nov&#xE1;
        &#xFA;&#x10D;etn&#xED;) &#x2026; si v&#x16F;bec nerozum&#x11B;li.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              tím náhradním klíčem, naprostém tichu, břiše, hospodářské
              kriminalitě, tamtím výtahem, posledního patra, nějakého známého,
              lepší prací, krve, Boha, dobrém, cestě k řece, vedení v tabulce,
              Láďovi, tou novou účetní.
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
          4. Poslouchejte p&#xED;sni&#x10D;ku a dopl&#x148;te, co
          sly&#x161;&#xED;te.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=kySUNtmv_v4">
          D&#xED;vka s vlasem medov&#xFD;m
        </a>
      </p>
      <p>
        Chci vypr&#xE1;v&#x11B;t V&#xE1;m p&#x159;&#xED;b&#x11B;h o jedn&#xE9;
        d&#xED;vce s &#x2026; &#x2026; ,<br />
        ale jak to bylo tenkr&#xE1;t v noci to se &#x2026; nikdy nedov&#xED;m.
      </p>
      <p>
        J&#xE1; v&#xED;m jen &#x17E;e jsem &#x2026; a &#x159;ek si tenkr&#xE1;t
        tak si cestu zkra&#x165;,
        <br />
        spodem kolem &#x2026; kde cestu k&#x159;&#xED;&#x17E;&#xED;
        &#x17E;elezni&#x10D;n&#xED; tra&#x165;.
      </p>
      <p>
        Tam v z&#xE1;&#x159;i &#x2026; &#x2026; vid&#xED;m d&#xED;vku u
        p&#x159;ejezdu st&#xE1;t,
        <br />
        asi n&#x11B;co se j&#xED; p&#x159;ihodilo, je to v jej&#xED;m
        obli&#x10D;eji zn&#xE1;t.
      </p>
      <p>
        U&#x17E; dlouho tady &#x10D;ek&#xE1;m a je&#x161;t&#x11B; nikdo mi
        nezastavil,
        <br />
        tak odvezte m&#x11B; pros&#xED;m dom&#x16F;, je to odtud &#x2026;
        p&#x11B;t mil.
      </p>
      <p>
        Tv&#xE1;&#x159; m&#xE1; b&#xED;lou jako sn&#xED;h a pa&#x17E;e jako
        mramor &#x161;edav&#xFD;,
        <br />
        pro&#x10D; st&#xE1;la tam &#x2026; &#x2026; tak sama v &#x10D;ern&#xE9;
        noci, kdopak v&#xED;.
      </p>
      <p>
        Tam p&#x159;ed &#x2026; &#x2026; zastavte, j&#xE1; za t&#xE1;tou
        te&#x10F; dom&#x16F; mus&#xED;m j&#xED;t,
        <br />
        tak &#x2026; &#x2026; , zastav&#xED;m, a &#x10D;ek&#xE1;m a&#x17E;
        j&#xED; p&#x159;ijdou otev&#x159;&#xED;t.
      </p>
      <p>
        Z chodby v no&#x10D;n&#xED;m &#x161;eru vrh&#xE1; lampa na silnici
        z&#xE1;&#x159;,
        <br />
        pane j&#xE1; V&#xE1;m vezu dceru, pro&#x10D; m&#xE1;te tedy &#x2026;
        tv&#xE1;&#x159;.
      </p>
      <p>
        Po d&#xED;vce pohled st&#xE1;&#x10D;&#xED;m a &#x2026; kolem
        rozhl&#xED;&#x17E;&#xED;m se tmou,
        <br />
        vedle mn&#x11B; je m&#xED;sto pr&#xE1;zdn&#xE9;, stejn&#x11B; jako cesta
        p&#x159;ede &#x2026; .
      </p>
      <p>
        Ten mu&#x17E; se nejd&#x159;&#xED;v &#x2026; , z&#x159;ejm&#x11B; tomu
        co se dov&#xED;d&#xE1;,
        <br />a z bl&#xED;zka na mn&#x11B; civ&#xED;, kdy&#x17E; tich&#xFD;m
        hlasem ke mn&#x11B; pov&#xED;d&#xE1;.
      </p>
      <p>
        J&#xE1; nev&#xED;m mil&#xFD; pane, zda je to m&#xFD;lka nebo &#x2026;
        &#x2026; ,<br />
        tak nastartujte ten sv&#x16F;j bour&#xE1;k, zmizte odtud, a&#x165;
        V&#xE1;s vezme &#x10D;ert.
      </p>
      <p>
        &#x2026; moje dcera zabila se, tak se rad&#x161;i ztra&#x165;,
        <br />
        p&#x11B;t mil odtud u jezera kde cestu k&#x159;&#xED;&#x17E;&#xED;
        &#x17E;elezni&#x10D;n&#xED; tra&#x165;.
      </p>
      <p>
        J&#xE1; dodnes tudy jezd&#xED;m a hled&#xE1;m d&#xED;vku s &#x2026;
        &#x2026; ,<br />
        ale jak to bylo on&#xE9; noci to se snad u&#x17E; nikdy nedov&#xED;m,
        <br />
        ale jak to bylo on&#xE9; noci to se snad u&#x17E; nikdy nedov&#xED;m.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              vlasem medovým, přesně, spěchal, jezera, bílých světel, necelých,
              na kolejích, tím domem, zmáčknu klakson, zamračenou, marně, mnou,
              diví, krutý žert, Předevčírem, vlasem medovým.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          5.1. Poslechn&#x11B;te si dialog a dopl&#x148;te v&#x11B;ty.
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_22/Slang+-+St%C4%9Bhov%C3%A1n%C3%AD.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - St&#x11B;hov&#xE1;n&#xED; by Lida Hola</strong>
        </figcaption>
      </figure>

      <p>
        <strong>
          Dialog. Petr a Eva koupili star&#x161;&#xED; d&#x16F;m se zahradou a
          st&#x11B;huj&#xED; se.
        </strong>
      </p>
      <p>
        <strong>Petr:</strong> Evo, Evo! Pros&#xED;m t&#x11B;, poj&#x10F; sem.
        <br />
        <strong>Eva:</strong> U&#x17E; jsem tady. Promi&#x148;, nesly&#x161;ela
        jsem t&#x11B;, mluvila jsem s &#x2026; a s &#x2026; . Co se d&#x11B;je?
        <br />
        <strong>P:</strong> To st&#x11B;hov&#xE1;n&#xED; je stra&#x161;n&#xE9;,
        v&#x161;ude je zmatek, nem&#x16F;&#x17E;u nic naj&#xED;t. Za chv&#xED;li
        mus&#xED;m odej&#xED;t a nem&#xE1;m &#x2026; od auta. Nev&#xED;&#x161;,
        kde m&#x16F;&#x17E;e b&#xFD;t?
        <br />
        <strong>E:</strong> Nen&#xED; pod &#x2026; ?<br />
        <strong>P:</strong> Ne, tam jsem se d&#xED;val.
        <br />
        <strong>E:</strong> A co pod &#x2026; ?<br />
        <strong>P:</strong> Ale ne, tam jsem se taky d&#xED;val, dokonce
        u&#x17E; &#x2026; .<br />
        <strong>E:</strong> Aha, u&#x17E; ho vid&#xED;m. Tamhle je.
        <br />
        <strong>P:</strong> Kde?
        <br />
        <strong>E:</strong> P&#x159;ece tamhle v t&#xE9; krabici p&#x159;ed
        &#x2026; . Mezi &#x2026; a &#x2026; .<br />
        <strong>P:</strong> Aha, d&#xED;ky. Jak to, &#x17E;e jsem ho
        nevid&#x11B;l?
        <br />
        <strong>E:</strong> Proto&#x17E;e nem&#xE1;&#x161; ty nov&#xE9; &#x2026;
        .<br />
        <strong>P:</strong> No jo, to je fakt. Ale kde jsou? Nejsou pod &#x2026;
        . Nebo za &#x2026; . Hur&#xE1;, u&#x17E; je m&#xE1;m! Byly tady na zemi
        pod &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              tatínkem, maminkou, klíč, stolem, postelí, dvakrát, knihovnou,
              skříní, počítačem, brýle, gaučem, křeslem, židlí.
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 5.2 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          5.2. Poslouchejte dialog je&#x161;t&#x11B; jednou a odpov&#x11B;zte na
          ot&#xE1;zky.
        </strong>
      </p>
      <p>
        1) Pro&#x10D; Petr mysl&#xED;, &#x17E;e je st&#x11B;hov&#xE1;n&#xED;
        stra&#x161;n&#xE9;?
        <br />
        2) Co Petr hled&#xE1; nejd&#x159;&#xED;v?
        <br />
        3) Co hled&#xE1; potom?
      </p>
      <ol start={6}>
        <li>
          Slova v z&#xE1;vork&#xE1;ch dejte do spr&#xE1;vn&#xE9; formy podle.
        </li>
      </ol>
      <p>
        1) Dejme ten st&#x16F;l mezi &#x2026; a &#x2026; (gau&#x10D; a
        k&#x159;eslo).
        <br />
        2) Ten st&#x16F;l stoj&#xED; mezi &#x2026; a &#x2026; (gau&#x10D; a
        k&#x159;eslo).
      </p>
      <p>
        3) Ty n&#xE1;u&#x161;nice se zakut&#xE1;lely pod &#x2026; (postel).
        <br />
        4) Ty n&#xE1;u&#x161;nice se v&#xE1;l&#xED; pod &#x2026; (postel).
      </p>
      <p>
        5) Kv&#x11B;tiny posad&#xED;me za &#x2026; (n&#xE1;&#x161;
        d&#x159;ev&#x11B;n&#xFD; d&#x16F;m).
        <br />
        6) Kr&#xE1;sn&#xE9; kv&#x11B;tiny najde&#x161; na zahrad&#x11B; za
        &#x2026; (n&#xE1;&#x161; d&#x159;ev&#x11B;n&#xFD; d&#x16F;m).
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) gauč a křeslo; <br />
              2) gaučem a křeslem. <br />
            </p>
            <p>
              3) postel; <br />
              4) postelí. <br />
            </p>
            <p>
              5) náš dřevěný dům; <br />
              6) naším dřevěným domem. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 7 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          7. Pod&#xED;vejte se na obr&#xE1;zek a odpov&#x11B;zte na ot&#xE1;zky.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_22/picture_1.jpg"
          alt="picture_1"
        />
      </p>
      <p>
        <strong>Ot&#xE1;zky:</strong>
        <br />
        1) Co le&#x17E;&#xED; na stole?
        <br />
        2) Co polo&#x17E;ili ve veterin&#xE1;rn&#xED; klinice na st&#x16F;l?
        <br />
        3) Kde je &#x17E;elva?
        <br />
        4) Kam zavezla &#x17E;elva?
        <br />
        5) Mezi jak&#xFD;mi v&#x11B;cmi/lidmi najdeme klec a papou&#x161;ka?
        <br />
        6) Kam si sedla pan&#xED; s klec&#xED; a papou&#x161;kem?
        <br />
        7) Kde stoj&#xED; pan doktor?*
        <br />
        8) Co je mezi ordinac&#xED; a &#x10D;ek&#xE1;rnou?
      </p>
      <p className="text-danger">
        *
        <em>
          Pozn&#xE1;mka &#x2014; pou&#x17E;ijte p&#x159;edlo&#x17E;ku
          &#xAB;mezi&#xBB;
        </em>
      </p>
      <p>
        <strong>
          8. Poslechn&#x11B;te si dialog a vyberte spr&#xE1;vnou variantu.
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_22/Slang+-+Kam+co+d%C3%A1me_.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - Kam co d&#xE1;me_ by Lida Hola</strong>
        </figcaption>
      </figure>
      <p>
        <strong>
          Dialog. Evu bol&#xED; z&#xE1;da, a tak Petr mus&#xED; za&#x159;izovat
          d&#x16F;m s&#xE1;m. Rad&#xED; se s Evou.
        </strong>
      </p>
      <p>
        <strong>Petr:</strong> Evo, kam d&#xE1;me tu kytku?
        <br />
        <strong>Eva:</strong> Asi tady mezi k&#x159;eslo a komodu / mezi
        k&#x159;eslem a komodou, ne?
        <br />
        <strong>P:</strong> Tak jo. Kytka bude mezi k&#x159;eslo a komodu / mezi
        k&#x159;eslem a komodou.
        <br />
        <strong>P:</strong> A co tahle krabice?
        <br />
        <strong>E:</strong> A j&#xE9;, zapomn&#x11B;la jsem, co je uvnit&#x159;.
        Dej ji pros&#xED;m zat&#xED;m pod postel / pod postel&#xED;.
        <br />
        <strong>P:</strong> &#x160;up! A krabice u&#x17E; je pod postel / pod
        postel&#xED;.
        <br />
        <strong>P:</strong> A kam d&#xE1;me ty hodiny?
        <br />
        <strong>E:</strong> Mysl&#xED;m, &#x17E;e je m&#x16F;&#x17E;ete d&#xE1;t
        nad psac&#xED; st&#x16F;l / nad psac&#xED;m stolem.
        <br />
        <strong>P:</strong> Tak dob&#x159;e, hodiny budou nad psac&#xED;
        st&#x16F;l / nad psac&#xED;m stolem.
        <br />
        <strong>P:</strong> Hmm, ale kam d&#xE1;me tuhle stoli&#x10D;ku?
        <br />
        <strong>E:</strong> Do koupelny p&#x159;ed vanu / p&#x159;ed vanou.
        <br />
        <strong>P:</strong> Dob&#x159;e, stoli&#x10D;ka bude p&#x159;ed vanu /
        p&#x159;ed vanou.
        <br />
        <strong>P:</strong> A co tenhle obraz?
        <br />
        <strong>E:</strong> Je&#x161;t&#x11B; nev&#xED;m. Dej ho zat&#xED;m za
        sk&#x159;&#xED;&#x148; / za sk&#x159;&#xED;n&#xED;.
        <br />
        <strong>P:</strong> Co&#x17E;e? Ten obraz je tak hezk&#xFD; a m&#xE1;
        b&#xFD;t za sk&#x159;&#xED;&#x148; / za sk&#x159;&#xED;n&#xED;? To ne,
        mus&#xED;me naj&#xED;t n&#x11B;jak&#xE9; lep&#x161;&#xED; m&#xED;sto. Co
        kdybysme ho dali tady nad gau&#x10D; / nad gau&#x10D;em?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>E:</strong> … mezi křeslo a komodu, … ? <br />
              <strong>P:</strong> … mezi křeslem a komodou. <br />
              <strong>E:</strong> … pod postel. <br />
              <strong>P:</strong> … pod postelí. <br />
              <strong>E:</strong> … nad psací stůl. <br />
              <strong>P:</strong> … nad psacím stolem. <br />
              <strong>E:</strong> … před vanu. <br />
              <strong>P:</strong> … před vanou. <br />
              <strong>E:</strong> … za skříň. <br />
              <strong>P:</strong> … za skříní? … nad gauč? <br />
            </p>
          </div>
        </Collapse>
      </div>
      <h2 className="bg-warning">SLOVESN&#xC9; VAZBY S INSTRUMENT&#xC1;LEM</h2>

      <p className="bg-warning">
        <strong>
          &#x421;&#x43A;&#x430;&#x447;&#x430;&#x439;&#x442;&#x435;
          &#x444;&#x430;&#x439;&#x43B; - P&#x159;ehled slovesn&#xFD;ch vazeb A2
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_22/P%C5%99ehled+slovesn%C3%BDch+vazeb+A2.pdf"
        >
          P&#x159;ehled slovesn&#xFD;ch vazeb A2
        </a>
      </p>
      <p className="text-center">
        <strong>
          Pro procvi&#x10D;ov&#xE1;n&#xED; slovn&#xED; z&#xE1;soby jsme
          p&#x159;ipravili pro V&#xE1;s karti&#x10D;ky na Quizlet:
        </strong>
      </p>
      <p className="text-center">
        <strong>Slovesn&#xE9; vazby s Instrument&#xE1;lem</strong>
      </p>
      <p>
        <a target="blank" href="https://quizlet.com/_cwa5kp?x=1jqt&i=3zq2hw">
          OTEVŘÍT KARTIČKY
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Slovesne vazby s
          Instrument&#xE1;lem.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/Fc5rbEyr9iU"
        title="22  SLOVESNÉ VAZBY S INSTRUMENTÁLEM"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>H&#xE1;zet / hodit</em>
        <br />
        <em>Hodit m&#xED;&#x10D;em</em>
        <br />
        <em>H&#xFD;bat / pohnout</em>
        <br />
        <em>H&#xFD;bat n&#xE1;bytkem / &#x17E;idl&#xED;</em>
        <br />
        <em>Pl&#xFD;tvat</em>
        <br />
        <em>Pl&#xFD;tvat pen&#x11B;zi</em>
        <br />
        <em>&#x160;et&#x159;it / u&#x161;et&#x159;&#xED;m</em>
        <br />
        <em>&#x160;et&#x159;&#xED;m vodou</em>
        <br />
        <em>Trp&#x11B;t</em>
        <br />
        <em>Trp&#x11B;t zimou / hladem</em>
        <br />
        <em>Zab&#xFD;vat se</em>
        <br />
        <em>Zab&#xFD;v&#xE1;m se &#x10D;e&#x161;tinou / badmintonem</em>
        <br />
        <em>Tr&#xE1;pit se nad</em>
        <br />
        <em>Tr&#xE1;p&#xED;te se nad dom&#xE1;c&#xED;m &#xFA;kolem</em>
        <br />
        <em>Br&#xE1;nit se / ubr&#xE1;nit se p&#x159;ed</em>
        <br />
        <em>Br&#xE1;nit se p&#x159;ed nebezpe&#x10D;&#xED;m</em>
        <br />
        <em>Chr&#xE1;nit / zachr&#xE1;nit p&#x159;ed</em>
        <br />
        <em>
          M&#x16F;&#x17E;eme n&#x11B;koho zachr&#xE1;nit p&#x159;ed smrt&#xED;
        </em>
        <br />
        <em>Schov&#xE1;vat / schovat p&#x159;ed</em>
        <br />
        <em>Schovat hra&#x10D;ky / sladkosti p&#x159;ed d&#x11B;tmi</em>
        <br />
        <em>Tajit / zatajit p&#x159;ed</em>
        <br />
        <em>Zatajit n&#x11B;co p&#x159;ed rodi&#x10D;i</em>
        <br />
        <em>Zataj&#xED;m to p&#x159;ed man&#x17E;elem</em>
        <br />
        <em>Ut&#xED;kat p&#x159;ed</em>
        <br />
        <em>Ut&#xED;k&#xE1;m p&#x159;ed de&#x161;t&#x11B;m</em>
        <br />
        <em>Varovat p&#x159;ed</em>
        <br />
        <em>Varuju studenta p&#x159;ed nebezpe&#x10D;&#xED;m</em>
      </p>
      <p>
        <strong>
          9. Vlo&#x17E;te do v&#x11B;t vynechanou p&#x159;edlo&#x17E;ku, pokud
          je to pot&#x159;eba.
        </strong>
      </p>
      <p>
        1) Maminka schovala &#x2026; dcerou sladkosti.
        <br />
        2) Kdy&#x17E; mi to &#x159;ekla, musela jsem &#x2026; n&#xED;
        souc&#xED;tit.
        <br />
        3) &#x160;koda, &#x17E;e po&#x159;&#xE1;d pl&#xFD;tv&#xE1; &#x2026;
        pen&#x11B;zi. P&#x159;i takov&#xE9;m stylu &#x17E;ivota nikdy nic nebude
        m&#xED;t.
        <br />
        4) Kdy&#x17E; byla na&#x161;tvan&#xFD;, za&#x10D;ala po sv&#xE9;m
        man&#x17E;elovi h&#xE1;zet &#x2026; v&#x11B;cmi.
        <br />
        5) Sousedka uc&#xED;tila z&#xE1;pach kou&#x159;e, a proto varovala
        &#x2026; po&#x17E;&#xE1;rem cel&#xFD; bar&#xE1;k.
        <br />
        6) V&#x17E;dy je hrozn&#xE9; vid&#x11B;t, jak se va&#x161;e d&#x11B;ti
        tr&#xE1;p&#xED; &#x2026; n&#x11B;jak&#xFD;mi &#x17E;ivotn&#xED;mi
        probl&#xE9;my.
        <br />
        7) Mysl&#xED;m si, &#x17E;e by lid&#xE9; m&#x11B;li &#x161;et&#x159;it
        &#x2026; vodou.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic">
            <p>1) před; 2) s; 3) — ; 4) — ; 5) před; 6) nad; 7) — .</p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          10. Pod&#xED;vejte se na v&#x11B;ty a vyberte spr&#xE1;vnou formu.
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> D&#x11B;de&#x10D;ek hodil
        <strong>
          star&#xFD;m m&#xED;&#x10D;em / star&#xE9;ho m&#xED;&#x10D;e.
        </strong>
        -&gt; <strong>star&#xFD;m m&#xED;&#x10D;em.*</strong>
      </p>
      <p>
        1) Je mi l&#xED;to, &#x17E;e jsem svoje probl&#xE9;my zatajila
        p&#x159;ed svoje maminka / svoj&#xED; maminkou.
        <br />
        2) Varovala jsem svoje studenty p&#x159;ed t&#x11B;&#x17E;k&#xFD;mi
        ot&#xE1;zkami / t&#x11B;&#x17E;k&#xFD;ch ot&#xE1;zek v testu.
        <br />
        3) Kdybychom byli bezcitn&#xED;, nemohli bychom souc&#xED;tit s jejich
        dcerami / jejich dcer&#xE1;m.
        <br />
        4) Darwin se zab&#xFD;val teorie evoluce / teori&#xED; evoluce
        &#x10D;lov&#x11B;ka.
        <br />
        5) Mnoho rodin v Africe trp&#xED; siln&#xE9;mu hladu / siln&#xFD;m
        hladem.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) … svojí maminkou. <br />
              2) … těžkými otázkami … . <br />
              3) … jejich dcerami. <br />
              4) … teorií evoluce … . <br />
              5) … silným hladem. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Instrument&#xE1;l
          &#x2014; Cvi&#x10D;en&#xED;.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/tSkLePwHnto"
        title="22  Instrumentál — Cvičení"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>Chci se zab&#xFD;vat &#x2026;</em>
        <br />
        <em>
          Ciz&#xED; jazyk &#x2014; ciz&#xED;m jazykem &#x2014; ciz&#xED;mi
          jazyky
        </em>
        <br />
        <em>Architektura &#x2014; architekturou &#x2014; architekturami</em>
        <br />
        <em>
          Evropsk&#xE1; literatura &#x2014; evropskou literaturou &#x2014;
          evropsk&#xFD;mi literaturami
        </em>
        <br />
        <em>
          Zimn&#xED; sport &#x2014; zimn&#xED;m sportem &#x2014; zimn&#xED;mi
          sporty
        </em>
        <br />
        <em>Nejsem spokojen&#xE1;(&#xFD;) s / se &#x2026;</em>
        <br />
        <em>
          &#x10C;esk&#xE9; j&#xED;dlo &#x2014; &#x10D;esk&#xFD;m j&#xED;dlem
          &#x2014; &#x10D;esk&#xFD;mi j&#xED;dly
        </em>
        <br />
        <em>
          Pomal&#xE9; auto &#x2014; pomal&#xFD;m autem &#x2014; pomal&#xFD;mi
          auty
        </em>
        <br />
        <em>
          Vysok&#xE1; cena &#x2014; vysokou cenou &#x2014; vysok&#xFD;mi cenami
        </em>
        <br />
        <em>
          Mal&#xFD; pokoj &#x2014; mal&#xFD;m pokojem &#x2014; mal&#xFD;mi
          pokoji
        </em>
        <br />
        <em>
          Dr&#xE1;ha restaurace &#x2014; drahou restaurac&#xED; &#x2014;
          drah&#xFD;mi restauracemi
        </em>
        <br />
        <em>
          Povrchn&#xED; lektor &#x2014; povrchn&#xED;m lektorem &#x2014;
          povrchn&#xED;mi lektory
        </em>
        <br />
        <em>
          L&#xED;n&#xFD; &#xFA;&#x159;edn&#xED;k &#x2014; l&#xED;n&#xFD;m
          &#xFA;&#x159;edn&#xED;kem &#x2014; l&#xED;n&#xFD;mi
          &#xFA;&#x159;edn&#xED;ky
        </em>
        <br />
        <em>
          Nep&#x159;&#xED;jemn&#xFD; policista &#x2014;
          nep&#x159;&#xED;jemn&#xFD;m policistou &#x2014;
          nep&#x159;&#xED;jemn&#xFD;mi policisty
        </em>
        <br />
        <em>R&#xE1;d jezd&#xED;m...</em>
        <br />
        <em>
          Klimatizovan&#xFD; autobus &#x2014; klimatizovan&#xFD;m autobusem
          &#x2014; klimatizovan&#xFD;mi autobusy
        </em>
        <br />
        <em>
          Rychl&#xE9; auto &#x2014; rychl&#xFD;m autem &#x2014; rychl&#xFD;mi
          auty
        </em>
        <br />
        <em>
          Pohodln&#xFD; vlak &#x2014; pohodln&#xFD;m vlakem &#x2014;
          pohodln&#xFD;mi vlaky
        </em>
        <br />
        <em>
          Nov&#xE1; tramvaj &#x2014; novou tramvaj&#xED; &#x2014; nov&#xFD;mi
          tramvajemi
        </em>
      </p>
      <p>
        <strong>
          <em>Ot&#xE1;zky:</em>
        </strong>
      </p>
      <p>
        <em>S k&#xFD;m jste se naposled se&#x161;li?</em>
        <br />
        <em>
          J&#xE1; jsem se naposled se&#x161;la s dobr&#xFD;mi /
          nejlep&#x161;&#xED;mi kamar&#xE1;dy.
        </em>
        <br />
        <em>S k&#xFD;m jste v&#x10D;era mluvili?</em>
        <br />
        <em>
          J&#xE1; jsem v&#x10D;era mluvila s rodi&#x10D;i, se studenty a se
          studentkami.
        </em>
        <br />
        <em>
          &#x10C;&#xED;m se te&#x10F; moment&#xE1;ln&#x11B; zab&#xFD;v&#xE1;te?
        </em>
        <br />
        <em>
          J&#xE1; se te&#x10F; zab&#xFD;v&#xE1;m nat&#xE1;&#x10D;en&#xED;m
          r&#x16F;zn&#xFD;ch lekc&#xED;.
        </em>
        <br />
        <em>S k&#xFD;m jste se setkaly minul&#xFD; m&#x11B;s&#xED;c?</em>
        <br />
        <em>J&#xE1; jsem se setkala se spoustou lid&#xED;.</em>
        <br />
        <em>S k&#xFD;m pojedete na dovolenou?</em>
        <br />
        <em>J&#xE1; pojedu na dovolenou s p&#x159;&#xE1;teli a rodinou.</em>
        <br />
        <em>S &#x10D;&#xED;m nejste spokojen&#xED;?</em>
        <br />
        <em>J&#xE1; nejsem spokojena s nedochviln&#xFD;mi lidmi.</em>
        <br />
        <em>S k&#xFD;m byste se cht&#x11B;li sezn&#xE1;mit?</em>
        <br />
        <em>
          J&#xE1; bych se cht&#x11B;la sezn&#xE1;mit s popul&#xE1;rn&#xED;mi
          herci a zp&#x11B;v&#xE1;ky.
        </em>
        <br />
        <em>S &#x10D;&#xED;m ud&#x11B;l&#xE1;te sal&#xE1;t?</em>
        <br />
        <em>
          J&#xE1; si ud&#x11B;l&#xE1;m sal&#xE1;t s okurkami, s topinkami, s
          krevetami, s raj&#x10D;aty.
        </em>
        <br />
        <em>S k&#xFD;m jste byly naposled na v&#xFD;let&#x11B;?</em>
        <br />
        <em>
          J&#xE1; jsem naposled byla na v&#xFD;let&#x11B; se
          zaj&#xED;mav&#xFD;mi lidmi.
        </em>
        <br />
        <em>S k&#xFD;m si dob&#x159;e rozum&#xED;te?</em>
        <br />
        <em>
          J&#xE1; si dob&#x159;e rozum&#xED;m se sv&#xFD;mi pracovn&#xED;ky a
          taky se sv&#xFD;mi kamar&#xE1;dkami.
        </em>
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

export default LectureTwentyTwo;
