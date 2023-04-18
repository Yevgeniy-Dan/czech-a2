import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import GreenBox from "../UI/GreenBox";

const LectureTwenty: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(10);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">20. lekce</h1>
        <p>
          Mu&#x17E;sk&#xFD; rod &#x17E;ivotn&#xFD; &#x10D;&#xED;sla
          mno&#x17E;n&#xE9;ho (Nominativ a Akuzativ)
        </p>
        <Link to="/admin/lectures/19">Предыдущий урок</Link>
        <Link to="/admin/lectures/21">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          Tato lekce je velice d&#x16F;le&#x17E;it&#xE1;. &#x10C;ek&#xE1;
          v&#xE1;s spousta p&#x159;ekvapen&#xED; a ob&#x10D;as i &#x161;oku.
          V&#x11B;&#x159;&#xED;me, &#x17E;e se neleknete a dob&#x159;e se s
          t&#xED;m porad&#xED;te.
        </em>
      </p>
      <p>
        <em>
          &#x421;&#x43E;&#x437;&#x434;&#x430;&#x43D;&#x438;&#x435;
          &#x44D;&#x442;&#x43E;&#x439;
          &#x43B;&#x435;&#x43A;&#x446;&#x438;&#x438;
          &#x431;&#x44B;&#x43B;&#x43E; &#x43E;&#x434;&#x43D;&#x438;&#x43C;
          &#x438;&#x437; &#x441;&#x430;&#x43C;&#x44B;&#x445;
          &#x43C;&#x430;&#x441;&#x448;&#x442;&#x430;&#x431;&#x43D;&#x44B;&#x445;.
          &#x41C;&#x43D;&#x43E;&#x433;&#x43E;
          &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;&#x43E;&#x432;,
          &#x441;&#x43B;&#x43E;&#x436;&#x43D;&#x430;&#x44F;
          &#x442;&#x430;&#x431;&#x43B;&#x438;&#x446;&#x430; &#x438;
          &#x43C;&#x43D;&#x43E;&#x433;&#x43E;
          &#x434;&#x443;&#x431;&#x43B;&#x435;&#x439;.
          &#x412;&#x43E;&#x437;&#x44C;&#x43C;&#x438;&#x442;&#x435;
          &#x438;&#x437; &#x43D;&#x435;&#x451;
          &#x43C;&#x430;&#x43A;&#x441;&#x438;&#x43C;&#x443;&#x43C;!
        </em>
      </p>
      <p>
        <em>Tak jo! Jdeme na v&#x11B;c.</em>
      </p>
      <div className="bg-warning">
        <h2>MU&#x17D;SK&#xDD; &#x17D;IVOTN&#xDD; ROD</h2>

        <p>
          <strong>&#x10C;&#xCD;SLO MNO&#x17D;N&#xC9;</strong>
        </p>
      </div>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Mu&#x17E;sk&#xFD;
          &#x17E;ivotn&#xFD; (&#x10D;&#xED;slo mno&#x17E;n&#xE9;).
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/A0AswtT3O3Q"
        title="20  MUŽSKÝ ŽIVOTNÝ ROD"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_20/picture_1.jpg"
          alt="picture_1"
        />
      </p>
      <p className="bg-warning">
        <strong>! Pozn&#xE1;mka od Darii:</strong>
      </p>
      <p className="text-danger">
        <strong>
          Slova mu&#x17E;sk&#xE9;ho &#x17E;ivotn&#xE9;ho, kter&#xE1;
          kon&#x10D;&#xED; na &#x2013; a:
        </strong>
      </p>
      <p>
        kolega &#x2013; kolegov&#xE9;
        <br />
        starosta &#x2013; starostov&#xE9;
      </p>
      <p className="text-danger">
        <strong>
          Slova mu&#x17E;sk&#xE9;ho &#x17E;ivotn&#xE9;ho, kter&#xE1;
          kon&#x10D;&#xED; na &#x2013; ista:
        </strong>
      </p>
      <p>
        policista &#x2013; policist&#xE9; / i<br />
        fotbalista &#x2013; fotbalist&#xE9; / i
      </p>
      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>Tady pracuj&#xED; (kdo?) mu&#x17E;i.</em>
        <br />
        <em>Tady studuj&#xED; (kdo?) studenti.</em>
        <br />
        <em>Pracovn&#xED;k &#x2014; pracovn&#xED;ci</em>
        <br />
        <em>Z&#xE1;kazn&#xED;k &#x2014; z&#xE1;kazn&#xED;ci</em>
        <br />
        <em>Hoch &#x2014; ho&#x161;i</em>
        <br />
        <em>
          b&#x16F;h &#x2014; bozi (B&#x16F;h s velk&#xFD;m &#xAB;B&#xBB; je
          pouze jeden, tj. nem&#x16F;&#x17E;e b&#xFD;t pl.)
        </em>
        <br />
        <em>(kino, kari&#xE9;ra, Marie, Daria)</em>
        <br />
        <em>Hezky kluk &#x2014; hezc&#xED; kluci / &#x10C;e&#x161;i</em>
        <br />
        <em>Moji kamar&#xE1;di, kte&#x159;&#xED; tady pracovali.</em>
        <br />
        <em>Hluch&#xFD; hoch &#x2014; hlu&#x161;&#xED; ho&#x161;i</em>
        <br />
        <em>Tady plavou draz&#xED; pstruzi.</em>
        <br />
        <em>Anglicky kluk &#x2014; angli&#x10D;t&#xED; kluci</em>
        <br />
        <em>Americk&#xFD; student &#x2014; ameri&#x10D;t&#xED; studenti</em>
        <br />
        <em>
          Sympatick&#xFD; &#x10D;lov&#x11B;k &#x2014; sympati&#x10D;t&#xED;
          lid&#xE9;
        </em>
        <br />
        <em>
          Prakticky l&#xE9;ka&#x159; &#x2014; prakti&#x10D;t&#xED;
          l&#xE9;ka&#x159;i
        </em>
        <br />
        <em>
          Rusky, &#x10D;esky, ma&#x10F;arsk&#xFD;, ukrajinsk&#xFD;,
          b&#x11B;lorusk&#xFD;, obrovsk&#xFD;
        </em>
        <br />
        <em>
          Majitel&#xE9;, spisovatel&#xE9;, skladatel&#xE9;,
          p&#x159;&#xE1;tel&#xE9;
        </em>
        <br />
        <em>Fotograf &#x2014; fotografov&#xE9;</em>
        <br />
        <em>Psycholog &#x2014; psychologov&#xE9;</em>
        <br />
        <em>Turista &#x2014; turistov&#xE9;</em>
        <br />
        <em>Kolega &#x2014; kolegov&#xE9;</em>
        <br />
        <em>Starosta &#x2014; starostov&#xE9;</em>
        <br />
        <em>Policista &#x2014; policist&#xE9; / policisti</em>
        <br />
        <em>Publicista &#x2014; publicist&#xE9; / publicisti</em>
        <br />
        <em>Fotbalista &#x2014; fotbalist&#xE9; / fotbalisti</em>
        <br />
        <em>Pr&#x16F;vodce &#x2014; pr&#x16F;vodcov&#xE9; / pr&#x16F;vodci</em>
        <br />
        <em>P&#xE1;n &#x2014; p&#xE1;nov&#xE9; / p&#xE1;ni</em>
        <br />
        <em>Kamar&#xE1;d &#x2014; kamar&#xE1;di</em>
        <br />
        <em>Student &#x2014; studenti</em>
      </p>
      <p>
        <strong>
          Tak co? jste v po&#x159;&#xE1;dku? m&#x16F;&#x17E;eme
          pokra&#x10D;ovat? Ano!
        </strong>
      </p>
      <p>
        <strong>Te&#x10F; se budeme v&#x11B;novat tr&#xE9;ninku.</strong>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Tr&#xE9;nujeme!
        </strong>
      </p>
      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/wTHw9S3FOkg"
        title="20  Trénujeme!"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <strong>
          <em>Tady jsou &#x2026;</em>
        </strong>
        <br />
        <em>
          ten prvn&#xED; dobr&#xFD; kamar&#xE1;d &#x2014; ti prvn&#xED;
          dob&#x159;&#xED; kamar&#xE1;di
        </em>
        <br />
        <em>
          ten star&#x161;&#xED; bratranec &#x2014; ti star&#x161;&#xED;
          bratranci
        </em>
        <br />
        <em>ten nemocn&#xFD; otec &#x2014; ti nemocn&#xED; otcov&#xE9;</em>
        <br />
        <em>
          ten zku&#x161;en&#xFD; ciz&#xED; pr&#xE1;vn&#xED;k &#x2014; ti
          zku&#x161;en&#xED; ciz&#xED; pr&#xE1;vn&#xED;ci
        </em>
        <br />
        <em>
          ten bohat&#xFD; podnikatel &#x2014; ti bohat&#xED; podnikatel&#xE9;
        </em>
        <br />
        <em>ten modern&#xED; autor &#x2014; ti modern&#xED; auto&#x159;i</em>
        <br />
        <em>
          ten talentovan&#xFD; lingvista &#x2014; ti talentovan&#xED;
          lingvist&#xE9; / lingvisti
        </em>
      </p>
      <p>
        <strong>
          <em>V budov&#x11B; pracuj&#xED; &#x2026;</em>
        </strong>
        <br />
        <em>
          ten &#x10D;esky politik &#x2014; ti &#x10D;e&#x161;t&#xED;
          politici/politikov&#xE9;
        </em>
        <br />
        <em>
          &#x159;eck&#xFD; sportovec &#x2014; &#x159;e&#x10D;t&#xED; sportovci
        </em>
        <br />
        <em>
          &#x161;patn&#xFD; kolega &#x2014; &#x161;patn&#xED; kolegov&#xE9;
        </em>
        <br />
        <em>vysok&#xFD; hoch &#x2014; vysoc&#xED; ho&#x161;i</em>
        <br />
        <em>
          vesel&#xFD; d&#x11B;de&#x10D;ek &#x2014; vesel&#xED;
          d&#x11B;de&#x10D;ci
        </em>
        <br />
        <em>
          hluch&#xFD; zn&#xE1;m&#xFD; &#x2014; hlu&#x161;&#xED; zn&#xE1;m&#xED;
        </em>
        <br />
        <em>
          sympatick&#xFD; spisovatel &#x2014; sympati&#x10D;t&#xED;
          spisovatel&#xE9;
        </em>
        <br />
        <em>m&#x16F;j bratr &#x2014; moji brat&#x159;i</em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 15.
        </strong>
      </p>
      <p>
        <strong>1. Utvo&#x159;te nominativ plur&#xE1;lu.</strong>
      </p>
      <p>
        Kolega &#x2026; , soused &#x2026; , fotbalista &#x2026; , chlapec
        &#x2026; , starosta &#x2026; , man&#x17E;el &#x2026; , pes &#x2026; ,
        student &#x2026; , kr&#xE1;l &#x2026; , odborn&#xED;k &#x2026; ,
        kucha&#x159; &#x2026; , ekonom &#x2026; , um&#x11B;lec &#x2026; ,
        politik &#x2026; , p&#x159;&#xED;tel &#x2026; , sobec &#x2026; , chirurg
        &#x2026; , hr&#xE1;&#x10D; &#x2026; , herec &#x2026; , u&#x10D;itel
        &#x2026; , &#xFA;&#x159;edn&#xED;k &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Kolegové, sousedé / sousedi, fotbalisté / fotbalisti, chlapci,
              starostové, manželové / manželé, psi / psové, studenti, králové,
              odborníci / odborníkové, kuchaři, ekonomové, umělci, politici /
              politikové, přátelé, sobci, chirurgové, hráči, herci, učitelé,
              úředníci.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>2. Utvo&#x159;te nominativ plur&#xE1;lu.</strong>
      </p>
      <p>
        Ind &#x2026; , ob&#x10D;an &#x2026; , astronom &#x2026; ,
        p&#x159;&#xED;tel &#x2026; , otec &#x2026; , hoch &#x2026; , host
        &#x2026; , anarchista &#x2026; , Skot &#x2026; , Fin &#x2026; ,
        &#x17E;&#xE1;k &#x2026; , kamar&#xE1;d &#x2026; , pr&#x16F;vodce
        &#x2026; , u&#x10D;itel &#x2026; , Pol&#xE1;k &#x2026; , starosta
        &#x2026; , bratranec &#x2026; , &#x10C;ech &#x2026; , dobrodruh &#x2026;
        , profesor &#x2026; , sv&#x11B;dek &#x2026; , spisovatel &#x2026; ,
        biolog &#x2026; , prodava&#x10D; &#x2026; , soudce &#x2026; ,
        pr&#x16F;vod&#x10D;&#xED; &#x2026; , zlod&#x11B;j &#x2026; , revizor
        &#x2026; , cizinec &#x2026; , syn &#x2026; , d&#x11B;de&#x10D;ek
        &#x2026; , Ital &#x2026; , Belgi&#x10D;an &#x2026; , odborn&#xED;k
        &#x2026; , &#x161;achista &#x2026; , Arab &#x2026; , &#x10D;lov&#x11B;k
        &#x2026; , p&#x159;edseda &#x2026; , p&#x159;&#xED;jemce &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Indové / Indi, občané / občani, astronomové, přátelé, otcové,
              hoši, hosti(é), anarchisté, Skoti / Skotové, Fini / Finové, žáci,
              kamarádi, průvodci / průvodcové, učitelé, Poláci, starostové,
              bratranci, Češi, dobrodruzi / dobrodruhové, profesoři, svědci /
              svědkové, spisovatelé, biologové, prodavači, soudci / soudcové,
              průvodčí, zloději, revizoři, cizinci, synové, dědečci / dědečkové,
              Italové, Belgičani / Belgičané, odborníci / odborníkové, šachisté,
              Arabové, lidi / lidé, předsedové, příjemci.
            </p>
          </div>
        </Collapse>
      </div>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Mu&#x17E;sk&#xFD;
          &#x17E;ivotn&#xFD; v 4 p&#xE1;d&#x11B;.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/Af8c0dPr-60"
        title="20  Mužský životný v 4 pádě"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>
          Hled&#xE1;m, pot&#x159;ebuju, sly&#x161;&#xED;m, vid&#xED;m (koho?
          co?) ty zn&#xE1;me, ty kamar&#xE1;dy.
        </em>
        <br />
        <em>Dobr&#xE9; kamar&#xE1;dy</em>
        <br />
        <em>Nov&#xE9; zn&#xE1;m&#xE9;/zn&#xE1;m&#xED;</em>
        <br />
        <em>Chytr&#xE9; u&#x10D;itele</em>
        <br />
        <em>Jarn&#xED;, komunikativn&#xED;, inteligentn&#xED;</em>
        <br />
        <em>P&#xE1;ny, kamar&#xE1;dy, studenty</em>
        <br />
        <em>Mu&#x17E;e, prodava&#x10D;e, N&#x11B;mce</em>
        <br />
        <em>U&#x10D;itele, majitele</em>
        <br />
        <em>p&#x159;edsedy</em>
      </p>
      <p>
        <em>&#x10C;ek&#xE1;m na svoje p&#x159;&#xE1;tele / kamar&#xE1;dy</em>
        <br />
        <em>Nevid&#xED;m star&#xE9; cizince</em>
        <br />
        <em>Poslouch&#xE1;m anglick&#xE9; lektory</em>
        <br />
        <em>Mysl&#xED;m na ty hezk&#xE9; kluky</em>
        <br />
        <em>Hled&#xE1;m ty dva zku&#x161;en&#xE9; prodava&#x10D;e</em>
        <br />
        <em>Nezn&#xE1;m &#x17E;&#xE1;dn&#xE9; rakousk&#xE9; herce</em>
        <br />
        <em>Pl&#xE1;nuju poslouchat vesel&#xE9; d&#x11B;de&#x10D;ky</em>
        <br />
        <em>T&#x11B;&#x161;&#xED;me se na &#x10D;&#xED;nsk&#xE9; turisty</em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Mu&#x17E;sk&#xFD;
          &#x17E;ivotn&#xFD; 1. p&#xE1;d vs 4. p&#xE1;d.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/Ko6jM0GrWtI"
        title="20  Mužský životný 1  pád vs 4  pád"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>Tam sed&#xED; &#x2026; VS T&#x11B;&#x161;&#xED;m se na &#x2026;</em>
        <br />
        <em>
          Ten &#x10D;esky prodava&#x10D; &#x2014; &#x10D;e&#x161;t&#xED;
          prodava&#x10D;i &#x2014; &#x10D;esk&#xE9; prodava&#x10D;e
        </em>
        <br />
        <em>
          N&#xE1;&#x161; dobr&#xFD; &#x159;editel &#x2014; na&#x161;i
          dob&#x159;&#xED; &#x159;editel&#xE9; &#x2014; na&#x161;e dobr&#xE9;
          &#x159;editele
        </em>
        <br />
        <em>
          Nov&#xFD; kamar&#xE1;d &#x2014; nov&#xED; kamar&#xE1;di &#x2014;
          nov&#xE9; kamar&#xE1;dy
        </em>
        <br />
        <em>
          Chytr&#xFD; ekolog &#x2014; chyt&#x159;&#xED; ekologov&#xE9; &#x2014;
          chytr&#xE9; ekology
        </em>
        <br />
        <em>
          &#x158;eck&#xFD; politik &#x2014; &#x159;e&#x10D;t&#xED; politici /
          politikov&#xE9; &#x2014; &#x159;eck&#xE9; politiky
        </em>
        <br />
        <em>
          Italsky re&#x17E;is&#xE9;r &#x2014; ital&#x161;t&#xED;
          re&#x17E;is&#xE9;&#x159;i &#x2014; italsk&#xE9; re&#x17E;is&#xE9;ry
        </em>
        <br />
        <em>
          Zn&#xE1;m&#xFD; N&#x11B;mec &#x2014; zn&#xE1;m&#xED; N&#x11B;mci
          &#x2014; zn&#xE1;m&#xE9; N&#x11B;mce
        </em>
        <br />
        <em>
          Anglicky lektor &#x2014; angli&#x10D;t&#xED; lekto&#x159;i &#x2014;
          anglick&#xE9; lektory
        </em>
        <br />
        <em>
          N&#xE1;&#x161; student &#x2014; na&#x161;i studenti &#x2014;
          na&#x161;e studenty
        </em>
        <br />
        <em>
          Mal&#xFD; pstruh &#x2014; (t&#xE1;mhle plavou) mal&#xED; pstruzi
          &#x2014; mal&#xE9; pstruhy
        </em>
      </p>
      <p>
        <strong>
          <em>Ot&#xE1;zky:</em>
        </strong>
        <br />
        <em>Kdo pracuje v obchod&#x11B;?</em>
        <br />
        <em>Prodava&#x10D;i, pokladn&#xED;</em>
        <br />
        <em>Kdo m&#x16F;&#x17E;e pracovat na stavb&#x11B;?</em>
        <br />
        <em>In&#x17E;en&#xFD;&#x159;i, stavebnici, architekti</em>
        <br />
        <em>Kdo pracuje u soudu?</em>
        <br />
        <em>
          Pr&#xE1;vn&#xED;ci, soudci / soudcov&#xE9;, advok&#xE1;ti /
          advok&#xE1;tov&#xE9;
        </em>
        <br />
        <em>Kdo pracuje v restauraci?</em>
        <br />
        <em>&#x10C;&#xED;&#x161;n&#xED;ci, kucha&#x159;i</em>
        <br />
        <em>Kdo m&#x16F;&#x17E;e pracovat v divadle?</em>
        <br />
        <em>Herci, re&#x17E;is&#xE9;&#x159;i</em>
        <br />
        <em>Kdo pracuje v nemocnici?</em>
        <br />
        <em>Dokto&#x159;i, l&#xE9;ka&#x159;i</em>
        <br />
        <em>Kdo pracuje v bance?</em>
        <br />
        <em>Bank&#xE9;&#x159;i</em>
        <br />
        <em>Kdo m&#x16F;&#x17E;e pracovat v baz&#xE9;nu?</em>
        <br />
        <em>Plav&#x10D;&#xED;ci, tren&#xE9;&#x159;i</em>
        <br />
        <em>Kdo pracuje ve &#x161;kole Slang.?</em>
        <br />
        <em>
          Kameramani / kameraman&#xE9;, lekto&#x159;i, u&#x10D;itel&#xE9;,
          mana&#x17E;e&#x159;i, &#x159;editel&#xE9;, technick&#xE1; podpora
        </em>
      </p>
      <p>
        <strong>
          3. Dejte v&#xFD;razy do Nominativu &#x10D;&#xED;sla
          mno&#x17E;n&#xE9;ho.
        </strong>
      </p>
      <p>
        M&#x16F;j bratr &#x2026; , &#x17E;enat&#xFD; kamar&#xE1;d &#x2026; ,
        sympatick&#xFD; Angli&#x10D;an &#x2026; , mil&#xFD; lektor &#x2026; ,
        &#x161;t&#x11B;dr&#xFD; Fin &#x2026; , &#x161;patn&#xFD; turista
        &#x2026; , zl&#xFD; kluk &#x2026; , svobodn&#xFD; kolega &#x2026; ,
        francouzsk&#xFD; profesor &#x2026; , dobr&#xFD; &#x10D;lov&#x11B;k
        &#x2026; , nudn&#xFD; pr&#x16F;vodce &#x2026; , tv&#x16F;j doktor
        &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Moji bratři, ženatí kamarádi, sympatičtí Angličani / Angličané,
              milí lektoři, štědří Finové / Fini, špatní turisté / turisti, zlí
              kluci, svobodní kolegové, francouzští profesoři, dobří lidé /
              lidi, nudní průvodci / průvodcové, tvoji doktoři.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          4. Dopl&#x148;te ve tvaru mno&#x17E;n&#xE9;ho &#x10D;&#xED;sla.
        </strong>
      </p>
      <p>
        1) (inteligentn&#xED; student) &#x2026; jsou radost pro
        (ka&#x17E;d&#xFD; u&#x10D;itel) &#x2026; .<br />
        2) U&#x17E; zn&#xE1;m (nov&#xFD; &#xFA;&#x159;edn&#xED;k) &#x2026; .
        <br />
        3) Z&#xED;tra uvid&#xED;m (ten mlad&#xFD; cizinec) &#x2026; .<br />
        4) (&#x10D;esk&#xFD; houslista) &#x2026; jsou
        (&#xFA;sp&#x11B;&#x161;n&#xFD;) &#x2026; .<br />
        5) (n&#xE1;&#x161; politolog) &#x2026; maj&#xED; (r&#x16F;zn&#xFD;
        n&#xE1;zor) &#x2026; .<br />
        6) &#x10C;ek&#xE1;me na (schopn&#xFD; in&#x17E;en&#xFD;r) &#x2026; .
        <br />
        7) V t&#xE9;to restauraci obsluhuj&#xED; (dobr&#xFD;
        &#x10D;&#xED;&#x161;n&#xED;k) &#x2026; .<br />
        8) Koup&#xED;m (d&#xE1;rek) &#x2026; pro (ka&#x17E;d&#xFD;
        n&#xE1;&#x161; kolega) &#x2026; .<br />
        9) (v&#xE1;&#x161; kamar&#xE1;d) &#x2026; jsou velmi (tich&#xFD;)
        &#x2026; .<br />
        10) Nem&#xE1;m r&#xE1;d (lstiv&#xFD; &#x10D;lov&#x11B;k) &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Inteligentní studenti, všechny učitele. 2) nové úředníky.{" "}
              <br />
              3) ty mladé cizince. <br />
              4) čeští houslisté, úspěšní. <br />
              5) naši politologové, různé názory. <br />
              6) schopné inženýry. <br />
              7) dobří číšnici. <br />
              8) dárky, všechny naše kolegy. <br />
              9) vaši kamarádi, tiší. <br />
              10) lstivé lidi. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          5. Utvo&#x159;te v&#x11B;ty. U&#x17E;&#xED;vejte plur&#xE1;l.
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> chytr&#xFD; &#x2014; student &#x2014; b&#xFD;t
        &#x2014; v &#x2014; knihovna. Chyt&#x159;&#xED; studenti jsou v
        knihovn&#x11B;.*
      </p>
      <p>
        1) In&#x17E;en&#xFD;r &#x2014; studovat &#x2014; vysok&#xE1;
        &#x161;kola.
        <br />
        2) Cizinec &#x2014; m&#xED;t r&#xE1;d &#x2014; pra&#x17E;sk&#xE9;
        pam&#xE1;tky.
        <br />
        3) Pr&#x16F;vodce &#x2014; nem&#xED;t r&#xE1;d &#x2014; jeho &#x2014;
        nov&#xFD; kolega.
        <br />
        4) Profesion&#xE1;ln&#xED; &#x2014; fotograf &#x2014; d&#x11B;lat
        &#x2014; p&#x11B;kn&#xE1; fotka.
        <br />
        5) P&#xE1;n a pan&#xED; &#x2014; chodit &#x2014; na &#x2014;
        proch&#xE1;zky.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Inženýři studují na vysoké škole (vysokou školu). <br />
              2) Cizinci mají rádi pražské památky. <br />
              3) Průvodci / průvodcové nemají rádi jeho nového kolegu. <br />
              4) Profesionální fotografové dělají pěkné fotky. <br />
              5) Pánové a paní chodí na procházky. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 6 проверит преподаватель."
        text="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          6. Dejte v&#xFD;razy do nominativu plur&#xE1;lu a u&#x17E;ijte je ve
          v&#x11B;t&#xE1;ch.
        </strong>
      </p>
      <p>
        Ten prvn&#xED; dobr&#xFD; kamar&#xE1;d &#x2026; , ten star&#x161;&#xED;
        bratranec &#x2026; , ten nemocn&#xFD; otec &#x2026; , tento
        zku&#x161;en&#xFD; ciz&#xED; pr&#xE1;vn&#xED;k &#x2026; , tamten
        bohat&#xFD; podnikatel &#x2026; , tenhle modern&#xED; autor &#x2026; ,
        ten talentovan&#xFD; lingvista &#x2026; .
      </p>
      <p>
        <strong>
          7. Dejte v&#xFD;razy do nominativu a akuzativu &#x10D;&#xED;sla
          mno&#x17E;n&#xE9;ho.
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> ten &#x10D;esk&#xFD; politik &#x2014;
        <strong>Tady jsou</strong> &#x2026; ti &#x10D;e&#x161;t&#xED; politici /
        politikov&#xE9; <strong>Vid&#xED;m</strong> ty &#x10D;esk&#xE9;
        politiky.*
      </p>
      <p>
        Tady jsou &#x2026; Vid&#xED;m &#x2026;
        <br />
        Tady pracuj&#xED; &#x2026; Poslouch&#xE1;m &#x2026;
        <br />
        Tady studuj&#xED; &#x2026; Hled&#xE1;m &#x2026;
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ten talentovan&#xFD; student &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten americk&#xFD; tenista &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten modern&#xED; autor &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten op&#xE1;len&#xFD; Australan &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten rusk&#xFD; dramatik &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten n&#x11B;meck&#xFD; sociolog &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten nezn&#xE1;m&#xFD; d&#xE1;rce -</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten bohat&#xFD; podnikatel &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten ciz&#xED; hr&#xE1;&#x10D; &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten zku&#x161;en&#xFD; &#x159;editel &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten chytr&#xFD; doktor &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten &#x161;pinav&#xFD; opilec &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Ten dlouh&#xFD; had &#x2014;</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong> Nominativ:</strong> <br />
              Ti talentovaní studenti, ti američtí tenisté / tenisti, ti moderní
              autoři, ti opálení Australané / Australáni, Ti ruští dramatici /
              dramatikové, ti němečtí sociologové, ti neznámí dárcové(i), ti
              bohatí podnikatelé, ti cizí hráči, ti zkušení ředitelé, ti chytří
              doktoři, ti špinaví opilci, ti dlouzí hadi.
            </p>
            <p>
              <strong>Akuzativ:</strong> <br />
              Ty talentované studenty, ty americké tenisty, ty moderní autory,
              ty opálené Australany, ty ruské dramatiky, ty německé sociology,
              ty neznámé dárce, ty bohaté podnikatele, ty cizí hráče, ty zkušené
              ředitele, ty chytré doktory, ty špinavé opilce, ty dlouhé hady.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          <img
            src="https://czecha2bucket.s3.amazonaws.com/common/note.jpg"
            alt="note"
          />
          8. Vypln&#xED;te test &#x10D;. 14. Utvo&#x159;te plur&#xE1;l. Vyberte
          v&#x17E;dy jednu spr&#xE1;vnou odpov&#x11B;&#x10F;.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://7vovmq2cdjr.typeform.com/to/YolKT5ku">
          &#x422;&#x435;&#x441;&#x442; 14. Utvo&#x159;te plur&#xE1;l
        </a>
      </p>
      <p>
        <strong>
          9.1. P&#x159;e&#x10D;t&#x11B;te si text a n&#xE1;sledn&#x11B; s
          n&#xED;m pracujte.
        </strong>
      </p>
      <p>
        <strong>Text. T&#xE1;ta, m&#xE1;ma, Pepa a G&#xE1;bina.</strong>
      </p>
      <p>
        <strong>T&#xE1;ta:</strong> Ahoj, rodino, tak co podnikneme o
        v&#xED;kendu? Navrhuju po&#x159;&#xE1;dn&#xFD; v&#xFD;let na kolech,
        venku je kone&#x10D;n&#x11B; hezky.
        <br />
        <strong>M&#xE1;ma:</strong> Ale Hynku, v&#xED;&#x161; p&#x159;ece,
        &#x17E;e m&#xE1;m rozbit&#xE9; kolo? Nikdo mn&#x11B; ho
        je&#x161;t&#x11B; neopravil.
        <br />
        <strong>T:</strong> No jo, ale to nen&#xED; probl&#xE9;m, hned
        z&#xED;tra se do toho d&#xE1;me s Pepou.
        <br />
        <strong>Pepa:</strong> Tati, j&#xE1; m&#xE1;m v sobotu z&#xE1;pas s
        fotbalem, &#x159;&#xED;kal jsem to u&#x17E; p&#x159;ed t&#xFD;dnem.
        <br />
        <strong>G&#xE1;bina:</strong> A mn&#x11B; se nikam nechce, v televizi
        d&#xE1;vaj&#xED; v sobotu odpoledne super film s Nicolasem Cagem.
        <br />
        <strong>M:</strong> G&#xE1;bi, m&#x11B;la bys jet, kdy&#x17E;
        bude&#x161; po&#x159;&#xE1;d jen doma u televize, bude&#x161; za
        chv&#xED;li tlust&#xE1;.
        <br />
        <strong>G:</strong> Kdy&#x17E; mi koup&#xED;te snowboard, pojedu s
        v&#xE1;mi v zim&#x11B; na hory, ale kolo je moc nam&#xE1;hav&#xE9;?
        <br />
        <strong>T:</strong> No tak asi p&#x16F;jdu s kolegy na basket. Pepo,
        chod&#xED;te je&#x161;t&#x11B; se &#x160;t&#x11B;p&#xE1;nem na squash?
        <br />
        <strong>P:</strong> Jo, ale dlouho jsme nebyli. Te&#x10F; v
        l&#xE9;t&#x11B; asi za&#x10D;neme s tenisem, kdy&#x17E; se d&#xE1;
        b&#xFD;t i venku. Jen si budu muset koupit novou raketu.
        <br />
        <strong>G:</strong> Tenis?To bych &#x161;la docela taky. Jana chod&#xED;
        u&#x17E; p&#x16F;l roku a m&#xE1; hrozn&#x11B; sympatick&#xE9;ho
        tren&#xE9;ra.
        <br />
        <strong>P:</strong> Ty a sport? To nemysl&#xED;&#x161;
        v&#xE1;&#x17E;n&#x11B;! Jdi rad&#x161;i s kamar&#xE1;dkami do kina.
        <br />
        <strong>M:</strong> V&#xED;te co? J&#xE1; m&#xE1;m na sobotu ve&#x10D;er
        domluven&#xFD; aerobik s holkami z pr&#xE1;ce, tak&#x17E;e stejn&#x11B;
        nem&#xE1;m moc &#x10D;asu. Ale v ned&#x11B;li bychom si mohli j&#xED;t
        alespo&#x148; zaplavat, Hynku, kdy&#x17E; m&#xE1;me baz&#xE9;n za rohem.
        A v sobotu aspo&#x148; stihne&#x161; ten p&#x159;enos ze
        sv&#x11B;tov&#xE9;ho poh&#xE1;ru v kanoistice, co
        &#x159;&#xED;k&#xE1;&#x161;?
        <br />
        <strong>T:</strong> No vid&#xED;&#x161;, na to jsem skoro
        zapomn&#x11B;l. Tak to jsem r&#xE1;d, &#x17E;e jsme se domluvili.
        <br />
        <strong>G:</strong> Po&#x10D;kejte, a co m&#x16F;j Cage?
      </p>

      <GreenBox
        header="Внимание! Задание № 9.2 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>9.2. Odpov&#x11B;zte na ot&#xE1;zky k textu.</strong>
      </p>
      <p>
        1) Kdo je nejv&#x11B;t&#x161;&#xED; sportovec z rodiny?
        <br />
        2) Co budou d&#xE1;vat v sobotu v televizi?
        <br />
        3) Pro&#x10D; chce chodit G&#xE1;bina na tenis?
        <br />
        4) Jak&#xE9; sportovn&#xED; za&#x159;&#xED;zen&#xED; m&#xE1; rodina
        bl&#xED;zko?
        <br />
        5) O jak&#xFD;ch sportech se v textu mluv&#xED;?
      </p>
      <p>
        <strong>
          11. Pod&#xED;vejte se na n&#xE1;sleduj&#xED;c&#xED; obr&#xE1;zky,
          zopakujte si n&#xE1;zvy sportovc&#x16F; a n&#xE1;sledn&#x11B; je dejte
          do nominativu plur&#xE1;lu.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_20/picture_2.jpg"
          alt="picture_2"
        />
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Plavci; <br />
              2) Běžci; <br />
              3) Hokejisté / hokejisti; <br />
              4) Fotbalisté / fotbalisti; <br />
              5) Biatlonisté / biatlonisti; <br />
              6) Boxeři. <br />
            </p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 12 проверит преподаватель."
        text="Ответы напишите и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          12. Poslechn&#x11B;te si dialog a ozna&#x10D;te, jak&#xE1;
          zv&#xED;&#x159;ata se v jejich dialogu objevuj&#xED;.
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_20/Slang+-+Dialog+Tom+a+Marina.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - Dialog Tom a Marina by Lida Hola</strong>
        </figcaption>
      </figure>
      <p>
        <strong>
          Tom a Marina u&#x17E; spolu chod&#xED; dost dlouho. Svatbu ani
          d&#x11B;ti zat&#xED;m nepl&#xE1;nuj&#xED;, ale cht&#x11B;li by
          m&#xED;t n&#x11B;jak&#xE9; zv&#xED;&#x159;e.
        </strong>
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kr&#xE1;l&#xED;ci</td>
            <td>&#x17D;elvy</td>
            <td>Opice</td>
          </tr>
          <tr>
            <td>Hadi</td>
            <td>Rybi&#x10D;ky</td>
            <td>Prasata</td>
          </tr>
          <tr>
            <td>Pavouci</td>
            <td>Ko&#x10D;ky</td>
            <td>Ku&#x159;ata</td>
          </tr>
          <tr>
            <td>Kr&#xE1;vy</td>
            <td>Papou&#x161;ci</td>
            <td>Mor&#x10D;ata</td>
          </tr>
          <tr>
            <td>Psi</td>
            <td>K&#x159;e&#x10D;ci</td>
            <td>Lvi</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>
          13. Poslouchejte dikt&#xE1;t a zapi&#x161;te podle dikt&#xE1;tu
          n&#xE1;zvy zv&#xED;&#x159;at v mno&#x17E;n&#xE9;m &#x10D;&#xED;sle.
        </strong>
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_20/Slang+-+Dikt%C3%A1t.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - Dikt&#xE1;t by Lida Hola</strong>
        </figcaption>
      </figure>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Had — hadi <br />
              2) Pavouk — pavouci <br />
              3) Králík — králíci <br />
              4) Papoušek — papoušci <br />
              5) Křeček — Křečci
              <br />
              6) Zvíře — zvířata <br />
              7) Prase — prasata <br />
              8) Morče — morčata <br />
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
          15. Zhl&#xE9;dn&#x11B;te n&#xE1;sleduj&#xED;c&#xED; video a podle
          uveden&#xFD;ch zem&#xED;, utvo&#x159;te n&#xE1;zvy obyvatel&#x16F; v
          nominativu plur&#xE1;lu.
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> It&#xE1;lie -&gt; Italov&#xE9;*
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=EOAmlWnpHcY">
          TOP 5 NEJCHYT&#x158;EJ&#x160;&#xCD; N&#xC1;RODY NA SV&#x11A;T&#x11A;
        </a>
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Japonci, Korejci, Číňané / Číňani, Singapurňani / Singapurňané /
              Singapurci.
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

export default LectureTwenty;
