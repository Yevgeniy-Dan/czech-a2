import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const LectureBonus: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(7);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">Bonus</h1>
        <p>T&#x11B;&#x17E;k&#xE9; vzory</p>

        <Link to="/admin/lectures/24">Предыдущий урок</Link>
      </div>

      <h1>Bonus</h1>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          Ve dne&#x161;n&#xED; lekci v&#xE1;m uk&#xE1;&#x17E;u jak se poprat se
          vzory, kter&#xE9; jsou pro n&#xE1;s t&#x11B;&#x17E;k&#xE9;.
        </em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x421;&#x43A;&#x430;&#x447;&#x430;&#x439;&#x442;&#x435;
          &#x444;&#x430;&#x439;&#x43B;&#x44B; P&#xE1;dy - Jednotn&#xE9;
          &#x10D;&#xED;slo &#x438; P&#xE1;dy - Mno&#x17E;n&#xE9;
          &#x10D;&#xED;slo.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/bonus/P%C3%A1dy+-+jednotn%C3%A9+%C4%8D%C3%ADslo.pdf"
        >
          P&#xE1;dy - jednotn&#xE9; &#x10D;&#xED;slo.pdf
        </a>
        <br />
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/bonus/P%C3%A1dy+-+mno%C5%BEn%C3%A9+%C4%8D%C3%ADslo.pdf"
        >
          P&#xE1;dy - mno&#x17E;n&#xE9; &#x10D;&#xED;slo.pdf
        </a>
      </p>
      <h2 className="bg-warning">T&#x11A;&#x17D;K&#xC9; VZORY</h2>

      <p className="bg-warning">
        <strong>
          &#x421;&#x43A;&#x430;&#x447;&#x430;&#x439;&#x442;&#x435;
          &#x444;&#x430;&#x439;&#x43B; Vzory.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/bonus/Slang+-+T%C4%9B%C5%BEk%C3%A9+vzory.pdf"
        >
          Slang - Vzory
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014;
          T&#x11B;&#x17E;k&#xE9; vzory.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/vIRCGhzcuj4"
        title="Bonus master"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p className="bg-warning">
        <strong>
          St&#xE1;hnete si tabulku na tr&#xE9;nov&#xE1;n&#xED;
          sklo&#x148;ov&#xE1;n&#xED; slov.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/bonus/Slang+-+Sklo%C5%88ov%C3%A1n%C3%AD+slov.pdf"
        >
          Slang - Sklo&#x148;ov&#xE1;n&#xED; slov
        </a>
      </p>
      <p>
        <strong>
          1. Napi&#x161;te, jak&#xE9;ho rodu a podle jak&#xE9;ho vzoru jsou
          n&#xE1;sleduj&#xED;c&#xED;ho slova.
        </strong>
      </p>
      <p>
        <strong>Vzory:</strong>
        P&#xCD;SE&#x147;, KOST, STROJ, P&#xC1;N
      </p>
      <p className="text-danger">
        <em>
          &#x412;&#x43D;&#x438;&#x43C;&#x430;&#x43D;&#x438;&#x435;, &#x443;
          &#x43C;&#x43D;&#x43E;&#x433;&#x438;&#x445;
          &#x433;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x432;
          &#x440;&#x43E;&#x434;
          &#x43E;&#x43A;&#x430;&#x436;&#x435;&#x442;&#x441;&#x44F;
          &#x43D;&#x435;&#x43E;&#x436;&#x438;&#x434;&#x430;&#x43D;&#x43D;&#x44B;&#x43C;!
        </em>
      </p>
      <div className="d-flex flex-column">
        <div>
          <p>
            Pa&#x159;&#xED;&#x17E;
            <br />
            &#x10C;&#xE1;slav
            <br />
            Krom&#x11B;&#x159;&#xED;&#x17E;
            <br />
            Ke&#x159;
            <br />
            Dob&#x159;&#xED;&#x161;
            <br />
            Vla&#x161;im
            <br />
            Reme&#x161;
            <br />
            Jarom&#x11B;&#x159;
            <br />
            P&#x159;&#xED;bram
            <br />
            Budape&#x161;&#x165;
          </p>
        </div>
        <div>
          <p>
            Tule&#x148;
            <br />
            Kancel&#xE1;&#x159;
            <br />
            Sibi&#x159;
            <br />
            Tis&#xED;c
            <br />
            T&#x159;ebo&#x148;
            <br />
            Hlem&#xFD;&#x17E;&#x10F;
            <br />
            N&#x16F;&#x17E;
            <br />
            Lubla&#x148;
            <br />
            T&#x159;eb&#xED;&#x10D;
            <br />
            K&#x16F;&#x148;
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>Ženský rod, vzor píseň: </strong> <br />
              Paříž, Kroměříž, Dobříš, Remeš, Jaroměř, Sibiř, Třeboň, Lublaň,
              Třebíč, kancelář.
            </p>
            <p>
              <strong>Ženský rod, vzor kost:</strong> <br />
              Čáslav, Vlašim, Příbram, Budapešť.
            </p>
            <p>
              <strong>Mužský rod (neživ.), vzor stroj:</strong> <br />
              keř, hlemýžď, nůž, tisíc.
            </p>
            <p>
              <strong>Mužský rod (živ.), vzor pán:</strong> <br />
              tuleň, kůň.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          2. Dejte slova v z&#xE1;vork&#xE1;ch do spr&#xE1;vn&#xE9;ho tvaru.
        </strong>
      </p>
      <p>
        <strong>a) &#x17E;ensk&#xFD; rod, vzor p&#xED;se&#x148;:</strong>
        <br />
        1) Koupila jsem novou p&#x11B;nu do (koupel) &#x2026; .<br />
        2) Princezna vyhl&#xE9;dla z (kamenn&#xE1; v&#x11B;&#x17E;) &#x2026; .
        <br />
        3) Do &#x161;koly jezd&#xED;m (tramvaj) &#x2026; &#x10D;. 5.
        <br />
        4) D&#x11B;de&#x10D;kova zahrada je pln&#xE1; (jablo&#x148; &#x2014;
        pl.) &#x2026; .
      </p>
      <p>
        <strong>b) &#x17E;ensk&#xFD; rod, vzor kost:</strong>
        <br />
        1) Ka&#x17E;d&#xFD; n&#xE1;rod m&#xE1; sv&#xE9; (pov&#x11B;st) &#x2026;
        , kter&#xE9; vysv&#x11B;tluj&#xED; jeho p&#x16F;vod.
        <br />
        2) Petr m&#x11B;l z narozeninov&#xE9; oslavy (velik&#xE1; radost)
        &#x2026; .<br />
        3) Kniha je rozd&#x11B;lena na (3 &#x10D;&#xE1;st) &#x2026; .<br />
        4) Zuzka m&#x11B;la na (starost) &#x2026; prodej l&#xED;stk&#x16F; na
        ples.
      </p>
      <p>
        <strong>c) mu&#x17E;sk&#xFD; rod, vzor stroj:</strong>
        <br />
        1) Babi&#x10D;ka nasb&#xED;rala (b&#xED;l&#xFD; petrkl&#xED;&#x10D;
        &#x2014; pl.) &#x2026; .<br />
        2) D&#x11B;ti si hr&#xE1;ly s (nov&#xFD; m&#xED;&#x10D;) &#x2026; .
        <br />
        3) Nese&#x10F; tak dlouho u (ten po&#x10D;&#xED;ta&#x10D;) &#x2026; .
        <br />
        4) D&#xED;vala se mi zp&#x159;&#xED;ma do (m&#x16F;j obli&#x10D;ej)
        &#x2026; .<br />
        5) Mal&#xED;&#x159; maloval sv&#xE9; obrazy (profesion&#xE1;ln&#xED;
        &#x161;t&#x11B;tec &#x2014; pl.) &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>a) ženský rod, vzor píseň: </strong> <br />
              1) koupele; 2) kamenné věže; 3) tramvají; 4) jabloní.
            </p>
            <p>
              <strong>b) ženský rod, vzor kost:</strong> <br />
              1) pověsti; 2) velikou radost; 3) tři části; 4) starosti.
            </p>
            <p>
              <strong>c) mužský rod, vzor stroj:</strong> <br />
              1) bílé petrklíče; 2) novými míči; 3) toho počítače; 4) mého
              obličeje; 5) profesionálními štětci.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          3. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED;
          slov&#xED;&#x10D;ka, kter&#xE1; jste mohli sly&#x161;et ve filmu Harry
          Potter a ur&#x10D;ete rod.
        </strong>
      </p>
      <p>
        <strong>Rody:</strong> MU&#x17D;SK&#xDD;, &#x17D;ENSK&#xDD;,
        ST&#x158;EDN&#xCD;
      </p>
      <p>
        P&#x159;en&#xE1;&#x161;edlo
        <br />
        J&#xED;zda
        <br />
        Koberec
        <br />
        Mozkomor
        <br />
        H&#xE1;bit
        <br />
        H&#x16F;lka
        <br />
        Jablo&#x148;
        <br />
        Ko&#x161;t&#x11B;
      </p>
      <p>
        Zv&#x11B;rom&#xE1;g
        <br />
        Odr&#xE1;&#x17E;e&#x10D;
        <br />
        Hedvika
        <br />
        Sk&#x159;et
        <br />
        Pl&#xE1;&#x161;&#x165;
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>Mužský rod: </strong> <br />
              koberec, mozkomor, hábit, zvěromág, odrážeč, skřet, plášť.
            </p>
            <p>
              <strong>Ženský rod:</strong> <br />
              jízda, hůlka, jabloň,Hedvika.
            </p>
            <p>
              <strong>Střední rod:</strong> <br />
              přenášedlo, koště.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          4. Slova v z&#xE1;vork&#xE1;ch dejte do spr&#xE1;vn&#xE9;ho tvaru.
        </strong>
      </p>
      <p>
        Sed&#x11B;li jsem pod (star&#xE1; jablo&#x148;) &#x2026; . Pracoval
        dlouho na (po&#x10D;&#xED;ta&#x10D;) &#x2026; . Koupila jsem si
        p&#x11B;nu do (koupel) &#x2026; . Objevila se mi na (obli&#x10D;ej)
        &#x2026; vyr&#xE1;&#x17E;ka. Bez (d&#x159;ev&#x11B;n&#xE1; h&#x16F;l)
        &#x2026; se neobejdeme. Poprv&#xE9; jsem jela (&#x10D;erven&#xE1;
        tramvaj) &#x2026; . Pojedeme do (Pa&#x159;&#xED;&#x17E;) &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              starou jabloní, počítači, koupeli, obličeji, dřevěné hole,
              červenou tramvají, Paříže.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          5. Slova v z&#xE4;vork&#xE1;ch dejte do spr&#xE1;vn&#xE9;ho p&#xE1;du.
        </strong>
      </p>
      <p>
        Ten film byl o (policist&#xE9; a zlod&#x11B;ji) &#x2026; . Kv&#x16F;li
        (nedostatek) &#x2026; sn&#x11B;hu byla uzav&#x159;ena
        v&#x11B;t&#x161;ina sjezdovek. Pro&#x10D; nepom&#x16F;&#x17E;ete (to
        mal&#xE9; d&#xED;t&#x11B;) &#x2026; ? Obchod se n&#xE1;m nepoda&#x159;il
        jen kv&#x16F;li (neschopnost) &#x2026; na&#x161;eho kolegy. V&#x161;e
        z&#xE1;vis&#xED; na (va&#x161;e v&#xFD;sledky) &#x2026; . Nem&#xE1;m
        pochybnosti o (jejich znalosti) &#x2026; . Podob&#xE1; se (matka)
        &#x2026; . Oproti (lo&#x148;sk&#xFD; rok) &#x2026; m&#xE1;me ve
        &#x161;kole lep&#x161;&#xED; zn&#xE1;mky. Sna&#x17E;&#xED; se vyhnout
        (konflikt) &#x2026; . Ten pozemek pat&#x159;&#xED; (mlad&#x161;&#xED;
        bratr) &#x2026; . V&#x161;ichni jsou lhostejn&#xED; k (ten probl&#xE9;m)
        &#x2026; . Ke (ka&#x17E;d&#xFD; jeho z&#xE1;kazn&#xED;k) &#x2026; byla
        velmi mil&#xE1;. S ohledem k (jejich zanepr&#xE1;zdn&#x11B;nost)
        &#x2026; nem&#x16F;&#x17E;eme mnoho &#x10D;ekat. To cvi&#x10D;en&#xED;
        je vhodn&#xE9; k (opakov&#xE1;n&#xED;) &#x2026; . Cestovali jsme po
        (tichomo&#x159;sk&#xE9; ostrovy) &#x2026; . Div&#xED;&#x161; se (to
        rozhodnut&#xED;) &#x2026; ? J&#xE1; jsem podobn&#xFD; (otec) &#x2026; ,
        sestra (matka) &#x2026; . (Ten vtip) &#x2026; se ur&#x10D;it&#x11B;
        zasm&#x11B;j&#xED;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              policistech a zlodějích, nedostatku, tomu malému dítěti,
              neschopnosti, vašich výsledcích, jejich znalosti, matce, loňskému
              roku, konfliktu, mladšímu bratrovi, tomu problému, každému jeho
              zákazníkovi, jejich zaneprázdněnosti, opakování, tichomořských
              ostrovech, tomu rozhodnutí, otci, matce, tomu vtipu.
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
          6. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; video o sv.
          V&#xE1;clavovi a odpov&#x11B;zte na n&#xE1;sleduj&#xED;c&#xED;
          ot&#xE1;zky.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=KpEvNhmciNs">
          D&#x11B;jiny udatn&#xE9;ho &#x10D;esk&#xE9;ho n&#xE1;roda
        </a>
      </p>
      <p>
        1) Jak&#xE1; v&#xED;ra je v t&#xE9; dob&#x11B;
        nejroz&#x161;&#xED;&#x159;en&#x11B;j&#x161;&#xED;?
        <br />
        2) Jak&#xFD; je V&#xE1;clav? Jak&#xE9; skutky kon&#xE1;?
        <br />
        3) Jak se jmenoval V&#xE1;clav&#x16F;v bratr?
        <br />
        4) Co je d&#x16F;vodem toho, &#x17E;e maj&#xED; V&#xE1;clav s bratrem
        &#x161;patn&#xFD; vztah?
        <br />
        5) Co se stalo v roce 935?
        <br />
        6) Jak&#xFD; vztah je mezi V&#xE1;clavem a Ludmilou?
        <br />
        7) Kdo zabil svatou Ludmilu?
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Křesťanství. <br />
              2) Je velmi vzdělaný, pěstoval víno, vykupoval otroky. <br />
              3) Boleslav. <br />
              4) Různé pohledy na zahraniční politiku s Německem. <br />
              5) Boleslav dal zavraždit Václava. <br />
              6) Ludmila je babička Václava. <br />
              7) Její snacha.
            </p>
          </div>
        </Collapse>
      </div>
      <p className="bg-warning">
        <strong>
          &#x414;&#x43E;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;
          &#x432;&#x44B; &#x43C;&#x43E;&#x436;&#x435;&#x442;&#x435;
          &#x43F;&#x43E;&#x442;&#x440;&#x435;&#x43D;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C;
          &#xAB;vzory&#xBB; &#x437;&#x434;&#x435;&#x441;&#x44C;.
        </strong>
      </p>
      <p>
        <a
          target="blank"
          href="https://rysava.websnadno.cz/ceskyjazyk_4.roc/cj4_vzorypodjmen_rodmuzsky1.htm"
        >
          A) Ur&#x10D;ete vzor
        </a>
      </p>
      <p>
        <a
          target="blank"
          href="https://skolakov.eu/cesky-jazyk/4-trida/podstatna-jmena-rodu-muzskeho/koncovky-vzoru/cviceni.htm"
        >
          B) Cvi&#x10D;en&#xED; na vzory mu&#x17E;sk&#xE9;ho rodu
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

export default LectureBonus;
