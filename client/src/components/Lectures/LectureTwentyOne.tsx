import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import GreenBox from "../UI/GreenBox";

const LectureTwentyOne: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(7);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">21. lekce</h1>
        <p>Lidsk&#xE9; vlastnosti</p>
        <Link to="/admin/lectures/20">Предыдущий урок</Link>
        <Link to="/admin/lectures/22">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          Lekce <strong>&#xAB;Lidsk&#xE9; vlastnosti&#xBB;</strong> se bude
          t&#xFD;kat lidsk&#xFD;ch vlastnost&#xED; a povahy.
        </em>
      </p>
      <p>
        <em>
          V lekci najdete r&#x16F;zn&#xE9; aktivity &#x2014; &#x10D;ten&#xED;,
          mluven&#xED;, audia a videa.
        </em>
        <br />
        <em>
          To v&#x161;echno v&#xE1;m pom&#x16F;&#x17E;e rychle zorientovat se v
          t&#xE9;to slovn&#xED; z&#xE1;sob&#x11B;.
        </em>
      </p>
      <p>
        <em>
          Tato lekce nem&#xE1; zvl&#xE1;&#x161;tn&#xED; soubor se slovn&#xED;
          z&#xE1;sobou.
        </em>
        <br />
        <em>
          Va&#x161;&#xED;m &#xFA;kolem bude vytvo&#x159;it vlastn&#xED; ve
          sv&#xE9;m se&#x161;it&#x11B;.
        </em>
      </p>
      <h2 className="bg-warning">LIDSK&#xC9; VLASTNOSTI</h2>

      <p className="text-center">
        Pro procvi&#x10D;ov&#xE1;n&#xED; slovn&#xED; z&#xE1;soby jsme
        p&#x159;ipravili pro V&#xE1;s
        <strong>karti&#x10D;ky na Quizlet:</strong>
      </p>
      <p>
        <a target="blank" href="https://quizlet.com/_cwa4r1?x=1jqt&i=3zq2hw">
          OTEVŘÍT KARTIČKY
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 11
        </strong>
      </p>
      <p>
        <strong>
          Nejd&#x159;&#xED;v za&#x10D;neme zaj&#xED;mavou aktivitou &#x2014;
          testem!
        </strong>
      </p>
      <p>
        <strong>
          1. Bez dlouh&#xE9;ho rozm&#xFD;&#x161;len&#xED; si na obr&#xE1;zku
          vyberte dome&#x10D;ek, kter&#xFD; se v&#xE1;m zal&#xED;b&#xED; jako
          prvn&#xED;.
        </strong>
      </p>
      <p>
        Ve v&#xFD;sledc&#xED;ch najdete odpov&#x11B;&#x10F; jak&#xE1; je
        va&#x161;e povaha.
      </p>
      <p>
        <strong>Test &#xAB;Dome&#x10D;ek a povaha&#xBB;.</strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_21/picture_1.jpg"
          alt="picture_1"
        />
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Výsledky</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong> 1)</strong> Člověk otevřený, přímý a prostý. Je ochoten
              vpustit do svého života každého, ať už z dobroty srdce nebo ze
              soucitu. Má dost energie i síly a přitom je praktický, nevznáší se
              někde v oblacích, ví, co je třeba dělat tady a teď. Proto má každé
              jeho jednání ten správný účin a smysl. Mohl by s úspěchem pomáhat
              lidem bez domova, osamělým seniorům i zatoulaným zvířatům. Protože
              mu nejde o nějakou slávu nebo prospěch.
            </p>

            <p>
              <strong> 2)</strong> Otevřená a upřímná povaha, ochotná každému
              slušnému člověku otevřít srdce a podělit se s ním o své radosti i
              smutky. Sám však lidi aktivně nevyhledává, spíše je k němu
              přitahuje jeho vlídný a přátelský projev. Nepodléhá náladám a
              nepoddává se beznaději. Umí být stejně dobře sám, jako vyjít s
              velkým kolektivem. Má rád zvířata a přírodu a umí se od srdce
              zasmát.
            </p>

            <p>
              <strong> 3)</strong> Člověk spíše uzavřený, trochu ostýchavý,
              avšak srdečný a přátelský. Velmi si cení domácího pohodlí, pečlivě
              se stará o svůj domov. Umí se zasnít a představovat si dálné světy
              a dlouhé cesty. S blízkými lidmi si rád popovídá. Miluje procházky
              v zeleni, rád pěstuje různé rostliny. Je pečlivý a čistotný. Když
              má tu možnost, lidské pozornosti se raději vyhne.
            </p>

            <p>
              <strong> 4)</strong> Družná, srdečná povaha, vždycky ochotná
              poradit i pomoci. Nebojí se žádné práce, poradí si v kanceláři
              stejně jako při štípání dřeva. Dobrý hospodář, dbá na pořádek,
              všechno v domě musí fungovat. Velmi pohostinný. Na všem najde něco
              dobrého, ve všem vidí nějakou krásu.
            </p>

            <p>
              <strong> 5)</strong> Ne s každým se dá do řeči, nedělí se hned o
              své zážitky nebo zkušenosti. Když však pozná člověka blíž, je
              velmi přátelský, štědrý a pohostinný. Má velkou trpělivost a je
              neobyčejně vytrvalý. Miluje přírodu a umí to velmi dobře s
              rostlinami, které mu doslova rostou pod rukama. Jsou pro něj
              živými bytostmi, s nimiž si rád popovídá. Rád čte a má překvapivé
              znalosti ze všech možných oborů lidské činnosti.
            </p>

            <p>
              <strong> 6)</strong> Člověk společenský i poněkud uzavřený. Je
              vtipný a oblíbený, umí pobavit i velkou společnost, všechny dobře
              zná, ale jen málo lidí může říci, že dobře zná jeho. Nepustí si
              hned každého k tělu, není nepřátelský, spíš trochu nedůvěřivý. Kdo
              však má možnost poznat ho blíž, nelituje. Je laskavý, pozorný a
              vnímavý, umí beze slova pomoci, jako by to bylo něco samozřejmého.
              O své pomoci nikdy nemluví a nečeká žádnou protislužbu.
            </p>

            <p>
              <strong> 7)</strong> Skromný a nenáročný člověk, přitom však
              vybavený všemi předpoklady úspěchu. Je vzdělaný, pracovitý a
              vytrvalý. Pokud pro něco zaplane, je nemyslitelné, že by toho
              nedosáhl. Nedá si však nic vnutit, musí se rozhodnout sám. Když už
              se vydá do společnosti, okamžitě přitáhne všechny kolem svou
              schopností bez konce je bavit zábavnými historkami a anekdotami.
              Je rád mezi lidmi a stejně rád je občas sám.
            </p>

            <p>
              <strong> 8)</strong> Otevřený, upřímný typ člověka. Ke každému je
              přátelský a vstřícný, opravdu však důvěřuje jenom těm nejbližším.
              Jeho odstup není povýšeností, je pouze opatrný. Potrpí si na
              domácí pohodlí, ale nenechá se obskakovat, je ochoten sám pro
              zvelebení domu hodně udělat. Ve společnosti je rád středem
              pozornosti, ať už pro svou nepopiratelnou eleganci a dobrý vkus,
              nebo pro zajímavý rozhovor, který umí zapříst snadno a lehce.
            </p>

            <p>
              <strong> 9)</strong> Tento člověk si nepotrpí na velkou
              společnost, raději má blízké přátelské vztahy s pár kamarády,
              kterým důvěřuje a často je zná už od dětství. Neobtěžuje nikoho
              svými problémy, ostýchá se požádat i o pomoc. Sám je přitom velmi
              pozorný k lidem, kteří evidentně pomoc potřebují a neváhá jim ji
              poskytnout. Je velmi štědrý a má soucitné srdce. Miluje zvířata,
              pečlivě se o ně stará a o jejich pohodlí možná dbá více než o to
              svoje.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          A te&#x10F; si zopakujeme a p&#x159;elo&#x17E;&#xED;me tato
          slov&#xED;&#x10D;ka z ru&#x161;tiny do &#x10D;e&#x161;tiny.
          Ur&#x10D;it&#x11B; u&#x17E; n&#x11B;co z toho zn&#xE1;te.
        </strong>
      </p>
      <p>
        <strong>
          2. Zkuste p&#x159;elo&#x17E;it tato slov&#xED;&#x10D;ka z
          ru&#x161;tiny do &#x10D;e&#x161;tiny.
        </strong>
      </p>
      <p>
        <em>
          Tady jsou z&#xE1;kladn&#xED; lidsk&#xE9; vlastnosti (pozitivn&#xED; a
          negativn&#xED;)
        </em>
      </p>
      <p>
        1) &#x425;&#x43E;&#x440;&#x43E;&#x448;&#x438;&#x439; &#x2014;
        &#x41F;&#x43B;&#x43E;&#x445;&#x43E;&#x439;;
        <br />
        2) &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x2014;
        &#x417;&#x43B;&#x43E;&#x439;;
        <br />
        3)
        &#x410;&#x43A;&#x43A;&#x443;&#x440;&#x430;&#x442;&#x43D;&#x44B;&#x439;
        &#x2014;
        &#x41D;&#x435;&#x431;&#x440;&#x435;&#x436;&#x43D;&#x44B;&#x439;;
        <br />
        4) &#x423;&#x43C;&#x43D;&#x44B;&#x439; &#x2014;
        &#x413;&#x43B;&#x443;&#x43F;&#x44B;&#x439;;
        <br />
        5)
        &#x41E;&#x431;&#x44F;&#x437;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
        &#x2014;
        &#x41B;&#x435;&#x433;&#x43A;&#x43E;&#x43C;&#x44B;&#x441;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x439;;
        <br />
        6) &#x412;&#x435;&#x440;&#x43D;&#x44B;&#x439; &#x2014;
        &#x41D;&#x435;&#x432;&#x435;&#x440;&#x43D;&#x44B;&#x439;;
        <br />
        7)
        &#x422;&#x440;&#x443;&#x434;&#x43E;&#x43B;&#x44E;&#x431;&#x438;&#x432;&#x44B;&#x439;
        &#x2014; &#x41B;&#x435;&#x43D;&#x438;&#x432;&#x44B;&#x439;;
        <br />
        8)
        &#x42D;&#x43D;&#x435;&#x440;&#x433;&#x438;&#x447;&#x43D;&#x44B;&#x439;
        &#x2014;
        &#x41F;&#x430;&#x441;&#x441;&#x438;&#x432;&#x43D;&#x44B;&#x439;;
        <br />
        9) &#x421;&#x435;&#x440;&#x434;&#x435;&#x447;&#x43D;&#x44B;&#x439;
        &#x2014;
        &#x420;&#x430;&#x432;&#x43D;&#x43E;&#x434;&#x443;&#x448;&#x43D;&#x44B;&#x439;;
        <br />
        10) &#x41C;&#x44F;&#x433;&#x43A;&#x438;&#x439; &#x2014;
        &#x416;&#x435;&#x441;&#x442;&#x43E;&#x43A;&#x438;&#x439;;
      </p>
      <p>
        11) &#x412;&#x435;&#x436;&#x43B;&#x438;&#x432;&#x44B;&#x439; &#x2014;
        &#x413;&#x440;&#x443;&#x431;&#x44B;&#x439;;
        <br />
        12) &#x412;&#x435;&#x441;&#x451;&#x43B;&#x44B;&#x439; &#x2014;
        &#x421;&#x43A;&#x443;&#x447;&#x43D;&#x44B;&#x439;;
        <br />
        13) &#x429;&#x435;&#x434;&#x440;&#x44B;&#x439; &#x2014;
        &#x416;&#x430;&#x434;&#x43D;&#x44B;&#x439;;
        <br />
        14)
        &#x411;&#x435;&#x441;&#x43A;&#x43E;&#x440;&#x44B;&#x441;&#x442;&#x43D;&#x44B;&#x439;
        &#x2014;
        &#x41A;&#x43E;&#x440;&#x44B;&#x441;&#x442;&#x43D;&#x44B;&#x439;;
        <br />
        15)
        &#x41E;&#x431;&#x449;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
        &#x2014;
        &#x417;&#x430;&#x43C;&#x43A;&#x43D;&#x443;&#x442;&#x44B;&#x439;;
        <br />
        16) &#x421;&#x43C;&#x435;&#x43B;&#x44B;&#x439; &#x2014;
        &#x422;&#x440;&#x443;&#x441;&#x43B;&#x438;&#x432;&#x44B;&#x439;;
        <br />
        17)
        &#x41C;&#x43E;&#x43B;&#x447;&#x430;&#x43B;&#x438;&#x432;&#x44B;&#x439;
        &#x2014;
        &#x411;&#x43E;&#x43B;&#x442;&#x43B;&#x438;&#x432;&#x44B;&#x439;;
        <br />
        18) &#x421;&#x43A;&#x440;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x2014;
        &#x412;&#x44B;&#x441;&#x43E;&#x43A;&#x43E;&#x43C;&#x435;&#x440;&#x43D;&#x44B;&#x439;;
        <br />
        19)
        &#x41E;&#x441;&#x442;&#x43E;&#x440;&#x43E;&#x436;&#x43D;&#x44B;&#x439;
        &#x2014;
        &#x411;&#x435;&#x441;&#x43F;&#x435;&#x447;&#x43D;&#x44B;&#x439;;
        <br />
        20)
        &#x421;&#x43E;&#x43E;&#x431;&#x440;&#x430;&#x437;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
        &#x2014; &#x422;&#x443;&#x43F;&#x43E;&#x439;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic d-flex flex-column">
            <div>
              <p>
                1) Hodný — Špatný; <br />
                2) Hodný — Zlý; <br />
                3) Pečlivý — Nedbalý; <br />
                4) Chytrý — Hloupý; <br />
                5) Ochotný — Lehkovážný; <br />
                6) Věrný — Nevěrný; <br />
                7) Pilný — Líný; <br />
                8) Energický — Pasivní; <br />
                9) Srdečný — Lhostejný; <br />
                10) Jemný — Krutý; <br />
              </p>
            </div>
            <div>
              <p>
                11) Zdvořilý — Hrubý; <br />
                12) Veselý — Nudný; <br />
                13) Štědrý — Lakomý; <br />
                14) Nezištný — Zištný; <br />
                15) Společenský — Uzavřený; <br />
                16) Odvážný — Bojácný; <br />
                17) Mlčenlivý — Upovídaný; <br />
                18) Skromný — Namyšlený; <br />
                19) Opatrný — Bezstarostný; <br />
                20) Vynalézavý — Hloupý. <br />
              </p>
            </div>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          3. Najd&#x11B;te slova s opa&#x10D;n&#xFD;m v&#xFD;znamem.
        </strong>
      </p>
      <p>
        1) Klidn&#xFD;
        <br />
        2) Up&#x159;&#xED;mn&#xFD;
        <br />
        3) &#x10C;estn&#xFD;
        <br />
        4) &#x160;t&#x11B;dr&#xFD;
        <br />
        5) Pozorn&#xFD;
        <br />
        6) Soucitn&#xFD;
      </p>
      <p>
        A) Fale&#x161;n&#xFD;
        <br />
        B) &#x160;kodolib&#xFD;
        <br />
        C) Lakom&#xFD;
        <br />
        D) Nervozn&#xED;
        <br />
        E) Nepoctiv&#xFD;
        <br />
        F) Lhostejn&#xFD;
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Klidný — D) Nervózní <br />
              2) Upřímní — A) Falešný <br />
              3) Čestný — E) Nepoctivý <br />
              4) Štědrý — C) Lakomý <br />
              5) Pozorný — F) Lhostejný <br />
              6) Soucitní — B) Škodolibý <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          4. Dopl&#x148;te do v&#x11B;ty slovo podle smyslu z nab&#xED;dky z
          tabulky.
        </strong>
      </p>
      <p>
        lakom&#xFD;
        <br />
        namy&#x161;len&#xE1;
        <br />
        sn&#xED;lek
        <br />
        piln&#xFD;
        <br />
        moudr&#xFD;
        <br />
        trp&#x11B;livost
        <br />
        sm&#x11B;l&#xFD; / state&#x10D;n&#xFD;
        <br />
        &#x161;t&#x11B;dr&#xFD;
      </p>
      <p>
        up&#x159;&#xED;mn&#xFD;
        <br />
        &#x17E;&#xE1;rliv&#xE1;
        <br />
        nespolehliv&#xFD;
        <br />
        spravedliv&#xFD;
        <br />
        spole&#x10D;ensk&#xE1;
        <br />
        pesimistick&#xFD;
        <br />
        nesm&#x11B;l&#xFD; / plach&#xFD;
      </p>
      <p>
        Princezna, kter&#xE1; se pova&#x17E;uje za
        nejkr&#xE1;sn&#x11B;j&#x161;&#xED; a nejchyt&#x159;ej&#x161;&#xED; na
        sv&#x11B;t&#x11B;, je &#x2026; . Boh&#xE1;&#x10D;, kter&#xFD; se nerad
        d&#x11B;l&#xED; o sv&#x16F;j majetek, je &#x2026; . &#x10C;lov&#x11B;k,
        kter&#xFD; dok&#xE1;&#x17E;e v&#x161;em dob&#x159;e poradit a
        rozum&#xED; mnoha v&#x11B;cem, je &#x2026; . &#x10C;lov&#x11B;k,
        kter&#xFD; um&#xED; &#x10D;ekat a nen&#xED; ze v&#x161;eho hned
        nerv&#xF3;zn&#xED;, m&#xE1; &#x2026; . Mu&#x17E;, kter&#xFD; se obvykle
        ni&#x10D;eho neboj&#xED;, je &#x2026; . Student, kter&#xFD; v&#x11B;nuje
        studiu hodn&#x11B; &#x10D;asu a sna&#x17E;&#xED; se v&#x161;echno
        dob&#x159;e nau&#x10D;it, je &#x2026; . &#x10C;lov&#x11B;k, kter&#xFD;
        nepo&#x10D;&#xED;t&#xE1;, co kdy komu dal, ale d&#xE1;v&#xE1; r&#xE1;d,
        je &#x2026; . Rodi&#x10D;, kter&#xFD; se v&#x161;emi d&#x11B;tmi
        jedn&#xE1; stejn&#x11B; se sna&#x17E;&#xED; b&#xFD;t &#x2026; .
        &#x17D;ena, kter&#xE1; se zlob&#xED;, kdy&#x17E; jde jej&#xED; mu&#x17E;
        s jinou &#x17E;enou t&#x159;eba na ob&#x11B;d, je &#x2026; .
        &#x10C;lov&#x11B;k, kter&#xFD; ne&#x159;e&#x161;&#xED; ani
        v&#xE1;&#x17E;n&#xE9; v&#x11B;ci a na velk&#xE9; probl&#xE9;my
        ka&#x161;le, je &#x2026; . &#x10C;lov&#x11B;k, kter&#xFD; se
        v&#x17E;dycky roz&#x10D;il&#xED; i kv&#x16F;li mali&#x10D;kosti, je
        &#x2026; . &#x10C;lov&#x11B;k, kter&#xFD; m&#xE1; velkou fantazii a
        &#x10D;asto vym&#xFD;&#x161;l&#xED; dobr&#xE9; a zaj&#xED;mav&#xE9;
        v&#x11B;ci, je &#x2026; . &#x17D;ena, kter&#xE1; chod&#xED; &#x10D;asto
        do divadla nebo na koncerty a r&#xE1;da se bav&#xED; s jin&#xFD;mi
        lidmi, je &#x2026; . Mu&#x17E;, kter&#xFD; se boj&#xED; sezn&#xE1;mit s
        &#x17E;enou a je nerv&#xF3;zn&#xED;, kdy&#x17E; a n&#xED; m&#xE1;
        mluvit, je &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              namyšlená, lakomý, moudrý, trpělivost, smělý / statečný, pilný,
              upřímný, štědrý, spravedlivý, žárlivá, nespolehlivý, pesimistický,
              snílek, společenská, nesmělý / plachý.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          5. Jak&#xFD;m slovem pop&#xED;&#x161;ete n&#xE1;sleduj&#xED;c&#xED;ho
          &#x10D;lov&#x11B;ka.
        </strong>
      </p>
      <p>
        A) naivn&#xED;;
        <br />
        B) zv&#x11B;dav&#xFD;;
        <br />
        C) pracovit&#xFD;;
        <br />
        D) c&#xED;lev&#x11B;dom&#xFD; (ambiciozn&#xED;);
        <br />
        E) zdvo&#x159;il&#xFD; (vychovan&#xFD;);
        <br />
        F) l&#xED;n&#xFD;;
        <br />
        G) zapomn&#x11B;tliv&#xFD;.
      </p>
      <p>
        1) &#x10C;lov&#x11B;k, kter&#xFD; v&#x11B;&#x159;&#xED; naprosto
        v&#x161;emu, i kdy&#x17E; je to blbost.
        <br />
        2) &#x10C;lov&#x11B;k, kter&#xFD; nechce nic d&#x11B;lat.
        <br />
        3) &#x10C;lov&#x11B;k, kter&#xFD; si dok&#xE1;&#x17E;e nastavit
        ve&#x161;ker&#xE9; c&#xED;le a dos&#xE1;hnout jich.
        <br />
        4) &#x10C;lov&#x11B;k, kter&#xFD; velmi hodn&#x11B; pracuje.
        <br />
        5) &#x10C;lov&#x11B;k, kter&#xFD; chce v&#x161;echno v&#x11B;d&#x11B;t.
        <br />
        6) &#x10C;lov&#x11B;k, kter&#xFD; v&#x17E;dy popros&#xED; a
        pod&#x11B;kuje.
        <br />
        7) &#x10C;lov&#x11B;k, kter&#xFD; &#x10D;asto zapom&#xED;n&#xE1;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) — A) naivní; <br />
              2) — F) líný; <br />
              3) — D) cílevědomý (ambiciozní); <br />
              4) — C) pracovitý; <br />
              5) — B) zvědavý; <br />
              6) — E) zdvořilý (vychovaný); <br />
              7) — G) zapomnětlivý. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>6.1. P&#x159;e&#x10D;t&#x11B;te si text.</strong>
      </p>
      <p>
        <strong>Text. T&#xE1;ta, m&#xE1;ma, G&#xE1;bina a Pepa.</strong>
      </p>
      <p>
        <strong>T&#xE1;ta:</strong> V&#xED;te, co je nov&#xE9;ho? Ode
        dne&#x161;ka m&#xE1;me v pr&#xE1;ci nov&#xE9;ho &#x161;&#xE9;fa.
        <br />
        <strong>M&#xE1;ma:</strong> No, to jsou v&#x11B;ci! A zn&#xE1;&#x161;
        ho, nebo je to n&#x11B;kdo &#xFA;pln&#x11B; ciz&#xED;?
        <br />
        <strong>T:</strong> P&#x159;e&#x161;el z konkuren&#x10D;n&#xED; firmy,
        j&#xE1; jsem ho p&#x159;edt&#xED;m neznal, ale p&#xE1;r koleg&#x16F; s
        n&#xED;m u&#x17E; kdysi na n&#x11B;&#x10D;em pracovalo.
        <br />
        <strong>G&#xE1;bina:</strong> No, a jak&#xFD; je? U&#x17E; jsi ho
        vid&#x11B;l?
        <br />
        <strong>T:</strong> Jasn&#x11B;, dnes jsme m&#x11B;li celopodnikov&#xE9;
        setk&#xE1;n&#xED;, osobn&#x11B; se n&#xE1;m p&#x159;edstavil. Je docela
        sympatick&#xFD;, i kdy&#x17E; v pr&#xE1;ci bude asi trochu
        p&#x159;&#xED;sn&#x11B;j&#x161;&#xED;, ne&#x17E; byl Tom&#xE1;&#x161;.
        Vypad&#xE1; tak energick&#xFD;, m&#xE1; spoustu n&#xE1;pad&#x16F; a
        chov&#xE1; se ke v&#x161;em slu&#x161;n&#x11B; a zdvo&#x159;ile, je
        galantn&#xED; a byl dnes docela dob&#x159;e oble&#x10D;en&#xFD;.
        <br />
        <strong>G:</strong> J&#xE1; jsem myslela, jak vypad&#xE1;, kolik mu je
        &#x2026; Je &#x17E;enat&#xFD;?
        <br />
        <strong>T:</strong> Tak tohle v&#x161;echno zat&#xED;m nev&#xED;m, ale
        a&#x17E; ho p&#x159;&#xED;&#x161;t&#x11B; uvid&#xED;m, &#x159;eknu mu,
        &#x17E;e moji dceru by to zaj&#xED;malo.
        <br />
        <strong>M:</strong> J&#xE1; teda douf&#xE1;m, &#x17E;e m&#xE1;
        dobr&#xFD; smysl pro humor. Aby to nebylo trapn&#xE9;, a&#x17E; se ho
        bude&#x161; pt&#xE1;t.
        <br />
        <strong>T:</strong> Mysl&#xED;m, &#x17E;e by to mohl vz&#xED;t s
        nadhledem. Sly&#x161;el jsem, &#x17E;e je dost spole&#x10D;ensk&#xFD;,
        komunikativn&#xED; a &#x17E;e m&#xE1; dobr&#xE9; mana&#x17E;ersk&#xE9;
        schopnosti. I proto n&#xE1;m ho tam firma dosadila. U&#x17E; toho asi
        dost za&#x17E;il, tak&#x17E;e touhle ot&#xE1;zkou ho nerozhod&#xED;m.
        <br />
        <strong>Pepa:</strong> J&#xE1; jsem m&#x11B;l r&#xE1;d
        Tom&#xE1;&#x161;e. Ten u&#x17E; tam &#xFA;pln&#x11B; skon&#x10D;il, nebo
        bude d&#x11B;lat n&#x11B;co jin&#xE9;ho?
        <br />
        <strong>T:</strong> Tom&#xE1;&#x161; te&#x10F; bude &#x159;&#xED;dit
        na&#x161;i novou pobo&#x10D;ku v Liberci. Ale u&#x17E; jsme si
        sl&#xED;bili, &#x17E;e se budeme v&#xED;dat.
        <br />
        <strong>P:</strong> Tak to je dob&#x159;e. L&#xED;b&#xED; se mi na
        n&#x11B;m, jak je bezprost&#x159;edn&#xED; a up&#x159;&#xED;mn&#xFD;.
        Takov&#xFD;ch lid&#xED; moc nezn&#xE1;m.
        <br />
        <strong>M:</strong> To je pravda, a je to nav&#xED;c moc
        z&#xE1;bavn&#xFD; spole&#x10D;n&#xED;k. A kolik toho v&#xED;! Tak
        vzd&#x11B;lan&#xE9;ho mana&#x17E;era jsem snad je&#x161;t&#x11B; v
        &#x17E;ivot&#x11B; nevid&#x11B;la. M&#xE1; v&#xFD;born&#xFD;
        kulturn&#xED; p&#x159;ehled.
        <br />
        <strong>T:</strong> Hned, jak s n&#xED;m budu mluvit, mu &#x159;eknu,
        jak jste ho tady chv&#xE1;lili.
        <br />
        <strong>P:</strong> A rovnou ho pozvi na ob&#x11B;d, nebo na v&#xED;kend
        na chatu. A&#x165;&#x2018; p&#x159;ijedou i s d&#x11B;tmi.
        <br />
        <strong>G:</strong> Ale n&#x11B;kdy mi mus&#xED;&#x161; uk&#xE1;zat i
        toho nov&#xE9;ho &#x161;&#xE9;fa, souhlas&#xED;&#x161;?
      </p>
      <p>
        <strong>
          6.2. P&#x159;e&#x10D;t&#x11B;te si text je&#x161;t&#x11B; jednou a
          odpov&#x11B;zte, zda je to pravda nebo ne?
        </strong>
      </p>
      <p>
        1) Tat&#xED;nek popisuje sv&#xE9;ho kolegu.
        <br />
        ANO / NE
      </p>
      <p>
        2) G&#xE1;bina chce v&#x11B;d&#x11B;t, jak vypad&#xE1;.
        <br />
        ANO / NE
      </p>
      <p>
        3) Maminka si o Tom&#xE1;&#x161;ovi mysl&#xED;, &#x17E;e je nudn&#xFD;.
        <br />
        ANO / NE
      </p>
      <p>
        4) B&#xFD;val&#xE9;ho &#x161;&#xE9;fa p&#x159;evedli na jinou
        pobo&#x10D;ku.
        <br />
        ANO / NE
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) NE <br />
              2) NE <br />
              3) NE <br />
              4) ANO <br />
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 6.3 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>6.3. Odpov&#x11B;zte na ot&#xE1;zky k textu.</strong>
      </p>
      <p>
        1) Co chce G&#xE1;bina v&#x11B;d&#x11B;t o tat&#xED;nkovu
        &#x161;&#xE9;fovi?
        <br />
        2) Jak dlouho tat&#xED;nek &#x161;&#xE9;fa zn&#xE1;?
        <br />
        3) Jak&#xFD; &#x161;&#xE9;f asi bude?
        <br />
        4) Jak&#xFD; byl minul&#xFD; &#x161;&#xE9;f?
        <br />
        5) Co by si Pepa a G&#xE1;bina p&#x159;&#xE1;li?
      </p>
      <p>
        <strong>
          7.1. Poslechn&#x11B;te si text o znamen&#xED;ch zv&#x11B;rokruhu a
          dopl&#x148;te vynechan&#xE1; slova.
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_21/Slang+-+Znamen%C3%AD+zv%C4%9Brokruhu.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - Znamen&#xED; zv&#x11B;rokruhu</strong>
        </figcaption>
      </figure>
      <p>
        <strong>Beran</strong>
      </p>
      <p>
        Energi&#x10D;t&#xED; a bojovn&#xED; &#x2014; to jste zkr&#xE1;tka vy!
        Va&#x161;e bojovnost m&#x16F;&#x17E;e m&#xED;t r&#x16F;zn&#xE9; podoby,
        ale kousek v&#xE1;le&#x10D;n&#xED;ka v sob&#x11B; zkr&#xE1;tka
        m&#xE1;te! A ta spousta &#x2026; , kter&#xE1; se ve v&#xE1;s
        ukr&#xFD;v&#xE1;, ta je opravdu &#x2026; a nep&#x159;ekonateln&#xE1;!
        S&#xED;la hv&#x11B;zd, kter&#xE1; v&#xE1;s v &#x17E;ivot&#x11B; vede,
        v&#xE1;m jasn&#x11B; &#x159;&#xED;k&#xE1;, &#x17E;e si pot&#x159;ebujete
        prosadit, a naplnit svoji vlastn&#xED; v&#x16F;li a uv&#xE9;st
        cht&#x11B;n&#xED; do skute&#x10D;n&#xE9;ho &#x17E;ivota!
      </p>
      <p>
        <strong>B&#xFD;k</strong>
      </p>
      <p>
        &#x2026; a vytrvalost &#x2014; p&#x159;esn&#x11B; to je v naprost&#xE9;m
        j&#xE1;dru du&#x161;e ka&#x17E;d&#xE9;ho B&#xFD;ka! Bez toho, abyste
        n&#x11B;co konstruktivn&#xED;ho d&#x11B;lali, pro v&#xE1;s jako kdyby
        &#x17E;ivot ani neexistoval, a dok&#xE1;&#x17E;ete b&#xFD;t n&#x11B;kdy
        po&#x159;&#xE1;dn&#xED; workoholici! Kdy&#x17E; se do n&#x11B;&#x10D;eho
        pust&#xED;te, tak u toho z&#x16F;stanete, a&#x17E; dokud to &#x2026;
        tam, kam je pot&#x159;eba!
      </p>
      <p>
        <strong>Bl&#xED;&#x17E;enci</strong>
      </p>
      <p>
        My&#x161;len&#xED; a &#x2026; ve v&#x161;ech jejich podob&#xE1;ch
        &#x2014; to je j&#xE1;dro &#x17E;ivota Bl&#xED;&#x17E;enc&#x16F;!
        Rozhovory, pozn&#xE1;v&#xE1;n&#xED; lid&#xED;, jejich &#x2026; ,
        p&#x159;em&#xFD;&#x161;len&#xED; nad v&#x11B;cmi, to je zkr&#xE1;tka
        n&#x11B;co, co popisuje va&#x161;i vnit&#x159;n&#xED; podstatu a je to
        va&#x161;&#xED; nejv&#x11B;t&#x161;&#xED; v&#xE1;&#x161;n&#xED;.
        Kdybyste p&#x159;estali p&#x159;em&#xFD;&#x161;let, mluvit s lidmi nebo
        ps&#xE1;t, bylo by to pro v&#xE1;s skoro to sam&#xE9;, jako kdybyste
        p&#x159;estali &#x2026; !
      </p>
      <p>
        <strong>Rak</strong>
      </p>
      <p>
        &#x2026; a vn&#xED;mav&#xED; k emoc&#xED;m &#x2014; p&#x159;esn&#x11B;
        to popisuje Raky ze v&#x161;eho nejv&#xED;c! J&#xE1;dro va&#x161;eho
        sv&#x11B;ta se to&#x10D;&#xED; kolem pocit&#x16F; &#x2014; a&#x165;
        u&#x17E; jsou va&#x161;e vlastn&#xED; &#x2026; nebo lid&#xED; z
        va&#x161;eho okol&#xED;! Sv&#x11B;t zkr&#xE1;tka vn&#xED;m&#xE1;te v
        prvn&#xED; &#x159;ad&#x11B; srdcem, a podle toho taky &#x17E;ijete,
        &#x159;&#xED;d&#xED;te se intuic&#xED; a je pro v&#xE1;s &#x2026;
        v&#x11B;novat se lidem, kter&#xE9; m&#xE1;te r&#xE1;di, a taky
        m&#xED;st&#x16F;m, kter&#xE9; jsou va&#x161;emu srdci bl&#xED;zk&#xE9;.
      </p>
      <p>
        <strong>Lev</strong>
      </p>
      <p>
        Kr&#xE1;lovsk&#xE9; znamen&#xED; Lva m&#xE1; vlastnosti, kter&#xE9; by
        m&#x11B; m&#xED;t ka&#x17E;d&#xFD; &#x2026; vlada&#x159; &#x2014;
        spojuje se ve v&#xE1;s &#x2026; , organiza&#x10D;n&#xED; talent a
        velkorysost. Stejn&#x11B;, jako si ka&#x17E;d&#xFD; v&#x161;imne,
        &#x17E;e r&#xE1;di stoj&#xED;te v &#x10D;ele a ob&#x10D;as zkr&#xE1;tka
        pot&#x159;ebujete zaz&#xE1;&#x159;it, neunikne pozornosti ani va&#x161;e
        &#x2026; a u&#x161;lechtil&#xE9; c&#xED;le.
      </p>
      <p>
        <strong>Panna</strong>
      </p>
      <p>
        Prakti&#x10D;nost a &#x2026; &#x2026; &#x2026; a syst&#xE9;m, to jsou
        nejtypi&#x10D;t&#x11B;j&#x161;&#xED; znaky, podle kter&#xFD;ch
        pozn&#xE1;te Pannu. Va&#x161;e pozornost se soust&#x159;ed&#xED; na
        u&#x17E;ite&#x10D;n&#xE9; a ka&#x17E;dodenn&#xED; v&#x11B;ci a na to,
        jak je co nejl&#xE9;pe ud&#x11B;lat. A proto&#x17E;e m&#xE1;te vrozenou
        touhu po dokonalosti, sna&#x17E;&#xED;te se d&#x11B;lat v&#x11B;ci
        po&#x159;&#xE1;dn&#x11B; a dob&#x159;e si je &#x2026; . Drobnosti
        v&#xE1;m neuniknou.
      </p>
      <p>
        <strong>V&#xE1;hy</strong>
      </p>
      <p>
        &#x2026; a soulad &#x2014; tato slova popisuj&#xED;, co je pro V&#xE1;hy
        v &#x17E;ivot&#x11B; nejd&#x16F;le&#x17E;it&#x11B;j&#x161;&#xED; ze
        v&#x161;eho! Va&#x161;e povaha je m&#xED;rn&#xE1;, vl&#xED;dn&#xE1; a
        &#x2026; . Sna&#x17E;&#xED;te se pochopit lidi kolem sebe,
        p&#x159;em&#xFD;&#x161;l&#xED;te nad t&#xED;m, jak naj&#xED;t
        rovnov&#xE1;hu a kompromisy. Smysl pro kr&#xE1;su a dobr&#xE9; &#x2026;
        vztahy, to v&#x161;echno k v&#xE1;m neodmysliteln&#x11B;
        pat&#x159;&#xED; a m&#xE1;te to zak&#xF3;dovan&#xE9; n&#x11B;kde
        uvnit&#x159; sebe.
      </p>
      <p>
        <strong>&#x160;t&#xED;r</strong>
      </p>
      <p>
        Siln&#xE1; intuice a pevn&#xE1; &#x2026; &#x2014; p&#x159;esn&#x11B;
        tyto vlastnosti jsou hnac&#xED;m motorem va&#x161;&#xED;
        &#x161;t&#xED;&#x159;&#xED; &#x2026; , kter&#xE1; plat&#xED; za
        nejtajemn&#x11B;j&#x161;&#xED; z cel&#xE9;ho zv&#x11B;rokruhu. Je to
        pochopiteln&#xE9;, proto&#x17E;e va&#x161;e hloubka
        vn&#xED;m&#xE1;n&#xED; a pro&#x17E;&#xED;v&#xE1;n&#xED;, ale tak&#xE9;
        vytrvalost a vnit&#x159;n&#xED; s&#xED;la jsou opravdu mocn&#xE9; a
        nezlomn&#xE9;, tak&#x17E;e pro mnoho lid&#xED; &#x2026; ! Pro v&#xE1;s
        jsou v&#x161;ak tyto hlubiny z&#xE1;kladem va&#x161;eho byt&#xED;!
      </p>
      <p>
        <strong>St&#x159;elec</strong>
      </p>
      <p>
        Optimismus a &#x2026; &#x2014; to jsou typick&#xE9; vlastnosti
        p&#x159;&#xED;mo&#x10D;ar&#xE9; povahy St&#x159;elc&#x16F;. Um&#xED;te
        si j&#xED;t za sv&#xFD;mi sny a ide&#xE1;ly, a naopak pram&#xE1;lo
        db&#xE1;te na to, abyste &#x159;&#xED;kali v&#x11B;ci n&#x11B;jak
        taktn&#x11B; a diplomaticky &#x2014; je pro v&#xE1;s toti&#x17E;
        p&#x159;irozen&#xE9; jednat otev&#x159;en&#x11B; a na rovinu!
        Va&#x161;&#xED;m kr&#xE9;dem je svoboda a &#x2026; , a podle toho se
        taky v &#x17E;ivot&#x11B; &#x159;&#xED;d&#xED;te, va&#x161;e priority
        jsou jasn&#xE9; a nekomplikovan&#xE9;!
      </p>
      <p>
        <strong>Kozoroh</strong>
      </p>
      <p>
        C&#xED;lev&#x11B;domost a &#x2026; jsou v j&#xE1;dru povahy
        ka&#x17E;d&#xE9;ho Kozoroha. A&#x165; u&#x17E; p&#x16F;sob&#xED;te
        sebeveseleji a &#x17E;ertujete, kolik chcete, p&#x159;ece jen se ve
        va&#x161;em nitru ukr&#xFD;v&#xE1; n&#x11B;co velmi seri&#xF3;zn&#xED;ho
        a v&#xE1;&#x17E;n&#xE9;ho, tak&#x17E;e neum&#xED;te br&#xE1;t v&#x11B;ci
        jen tak na lehkou &#x2026; . Jste dost uzav&#x159;en&#xE9; povahy a
        hodn&#x11B; v&#x11B;c&#xED; si nech&#xE1;v&#xE1;te pro sebe, tak&#x17E;e
        poznat v&#xE1;s bl&#xED;&#x17E; nen&#xED; pro lidi snadn&#xE9;!
      </p>
      <p>
        <strong>Vodn&#xE1;&#x159;</strong>
      </p>
      <p>
        Idealismus, p&#x159;esn&#x11B; to je
        nejtypi&#x10D;t&#x11B;j&#x161;&#xED; vodn&#xE1;&#x159;sk&#xE1; &#x2026;
        . Va&#x161;e povaha je svobodomysln&#xE1; a tro&#x161;ku &#x2026; ,
        r&#xE1;di d&#x11B;l&#xE1;te v&#x11B;ci spont&#xE1;nn&#x11B;,
        p&#x159;em&#xFD;&#x161;l&#xED;te mimo za&#x17E;it&#xFD;ch zvyklost&#xED;
        a d&#x11B;l&#xE1;te v&#x11B;ci jednodu&#x161;e jinak, ne&#x17E; se
        b&#x11B;&#x17E;n&#x11B; d&#x11B;laj&#xED;. Nen&#xED; to v&#x161;ak jen
        tak pro legraci, ale proto, &#x17E;e zkr&#xE1;tka n&#x11B;kde hluboko
        uvnit&#x159; v&#x11B;&#x159;&#xED;te sv&#xFD;m vlastn&#xED;m
        ide&#xE1;l&#x16F;m a &#x2026; !
      </p>
      <p>
        <strong>Ryby</strong>
      </p>
      <p>
        M&#xED;rnost, vn&#xED;mavost a &#x2026; jsou z&#xE1;kladem ryb&#xED;
        povahy, kter&#xE1; se vyzna&#x10D;uje velkou empatii a jakousi
        zvl&#xE1;&#x161;tn&#xED; nepochopitelnou &#x2026; a
        rozv&#xE1;&#x17E;nost&#xED;. M&#xE1;te v sob&#x11B; n&#x11B;co
        zasn&#x11B;n&#xE9;ho, snad je to va&#x161;e siln&#xE9; spojen&#xED; s
        hlasem intuice, kter&#xE1; k v&#xE1;m promlouv&#xE1;. Pro ostatn&#xED;
        m&#x16F;&#x17E;ete b&#xFD;t z&#xE1;hadou a p&#x16F;sobit jako tich&#xE1;
        voda, ale za t&#xED;m se ukr&#xFD;v&#xE1; &#x2026; vnit&#x159;n&#xED;
        s&#xED;la!
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong> Beran</strong> <br />
              energie, obdivuhodná. <br />
              <strong> Býk</strong> <br />
              Pracovitost, nedotáhnete. <br />
              <strong> Blíženci</strong> <br />
              komunikace, názorů, dýchat. <br />
              <strong> Rak</strong> <br />
              Citliví, emoce, důležité. <br />
              <strong> Lev</strong> <br />
              správný, sebevědomí, štědrost. <br />
              <strong> Panna</strong> <br />
              smysl pro detail, zorganizovat. <br />
              <strong> Váhy</strong> <br />
              Harmonie, klidná, mezilidské. <br />
              <strong> Štír</strong> <br />
              vůle, povahy, nepochopitelné. <br />
              <strong> Střelec</strong> <br />
              upřímnost, pravdivost. <br />
              <strong> Kozoroh</strong> <br />
              odpovědnost, váhu. <br />
              <strong> Vodnář</strong> <br />
              vlastnost, bláznivá, hodnotám. <br />
              <strong> Ryby</strong> <br />
              jemnost, moudrostí, překvapivá. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 7.2 проверит преподаватель."
        text="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          7.2. V jak&#xE9;m znamen&#xED; horoskopu jste se narodili? Jak&#xE9;
          povahov&#xE9; vlastnosti odpov&#xED;daj&#xED; va&#x161;&#xED; povaze,
          kter&#xE9; ne?
        </strong>
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
      <p>
        <strong>
          8. Poslechn&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; p&#xED;sni&#x10D;ku
          a dopl&#x148;te vynechan&#xE1; slova.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=o7auqhgjgig">
          Barbora Pol&#xE1;kov&#xE1; &#x2014; Nafrn&#x11B;n&#xE1;
        </a>
      </p>
      <p>
        Tak u&#x17E; to o n&#xED; te&#x10F; v&#xED;&#x161;, no to se o n&#xED;
        te&#x10F; &#x2026; .<br />
        I on to o n&#xED; prej v&#xED;, dy&#x165; se to &#x2026; u&#x17E;
        v&#xED;.
        <br />
        I tamta t&#xE1;mhle to v&#xED;, no tak to bejt tak mus&#xED;.
        <br />
        Kdy&#x17E; se to prsim t&#x11B; &#x159;&#xED;k&#xE1;, se to prsim
        t&#x11B; v&#xED;.
      </p>
      <p>
        <em>Ref:</em>
        <br />
        Je nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, prej
        blb&#x11B; &#x2026; ,<br />
        je nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, a&#x17E; moc se j&#xED;
        da&#x159;&#xED;.
      </p>
      <p>
        Je nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, &#x2026; ,<br />
        je nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, &#x2026; ,<br />
        je nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1; a &#x2026; ,<br />
        je nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1; a &#x2026; .
      </p>
      <p>
        J&#xE1; u&#x17E; to o tob&#x11B; v&#xED;m, to se te&#x10F; o tob&#x11B;
        &#x159;&#xED;k&#xE1;.
        <br />
        J&#xE1; u&#x17E; to o tob&#x11B; &#x2026; , dy&#x165; se to
        je&#x17E;i&#x161;i v&#xED;.
        <br />
        Ty u&#x17E; to o mn&#x11B; te&#x10F; v&#xED;&#x161;, no tak se zas
        n&#x11B;co &#x159;&#xED;k&#xE1;.
        <br />
        A kdo to prsim t&#x11B; &#x159;&#xED;k&#xE1;, jak to prsim t&#x11B;
        v&#xED;&#x161;?
        <br />
        Ka&#x17E;dej v&#xED; l&#xED;p ne&#x17E; ty, kdo jsi, a co se te&#x10F;
        &#x159;&#xED;k&#xE1;.
        <br />
        V&#x161;ichni v&#xED; l&#xED;p ne&#x17E; j&#xE1;, l&#xED;p ne&#x17E;
        j&#xE1;, &#x2026; &#x2026; j&#xE1;.
        <br />
        V&#x161;ichni v&#xED; o v&#x161;ech v&#xED;c a v&#x161;echno, co se
        te&#x10F; &#x159;&#xED;k&#xE1;.
        <br />
        V&#x161;ichni v&#xED; o v&#x161;ech v&#xED;c, to se tak, prost&#x11B;
        v&#xED;.
      </p>
      <p>
        <em>Ref:</em>
        <br />
        Jsem nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;,
        problematick&#xE1;,
        <br />
        jsem nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;,
        &#x2026;
        <br />
        jsem nafrn&#x11B;n&#xE1;, &#x2026; &#x2026; &#x2026; ,<br />
        jsem nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1; a ironick&#xE1;,
        <br />
        jsem nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, egoistick&#xE1;
        <br />
        jsem nafrn&#x11B;n&#xE1;, nafrn&#x11B;n&#xE1;, problematick&#xE1;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic">
            <p>
              říká, dávno, vaří, problematická, egoistická, hysterická,
              ironická, vím, kdo jsem, egoistická, nafrněná a hysterická.
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 9 проверит преподаватель."
        text="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          9. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video a zkuste si
          ud&#x11B;lat test osobnosti.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=BBdwacnEnkQ">
          Jak&#xFD; jsi? Test osobnosti
        </a>
      </p>
      <GreenBox
        header="Внимание! Задание № 10 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          10. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; situace a osoby a
          &#x159;ekn&#x11B;te podle obr&#xE1;zk&#x16F;, jak na V&#xE1;s tito
          lid&#xE9; c&#xED;t&#xED; / jsou v dan&#xE9; situaci.
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> &#x17D;ena na obr&#xE1;zku je
        na&#x161;tvan&#xE1; a &#x159;ekla bych, &#x17E;e je i
        v&#xFD;bu&#x161;n&#xE1;, jeliko&#x17E; se p&#x159;estala kontrolovat.
        Pravd&#x11B;podobn&#x11B; je tak&#xE9; hork&#xE1; hlava. Je asi ale i
        odv&#xE1;&#x17E;n&#xE1;, pokud si dovolila takto k&#x159;i&#x10D;et na
        kolegu.*
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_21/picture_2.jpg"
          alt="picture_2"
        />
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_21/picture_3.jpg"
          alt="picture_3"
        />
      </p>
      <GreenBox
        header="Внимание! Задание № 11 проверит преподаватель."
        text="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />
      <p>
        <strong>
          11. Ud&#x11B;lejte kr&#xE1;tk&#xFD; test a zjist&#x11B;te kdo jste.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="http://www.podnikanivkostce.cz/Testy/jste-introvert-nebo-extrovert"
        >
          Jste introvert nebo extrovert?
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

export default LectureTwentyOne;
