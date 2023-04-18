import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import GreenBox from "../UI/GreenBox";

const LectureTwentyThree: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(10);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">23. lekce</h1>
        <p>
          Instrument&#xE1;l (7. p&#xE1;d) &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho a
          Instrument&#xE1;l osobn&#xED;ch z&#xE1;jmen
        </p>
        <Link to="/admin/lectures/22">Предыдущий урок</Link>
        <Link to="/admin/lectures/24">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <p>
        <em>
          Pokra&#x10D;ujeme s<strong>Instrument&#xE1;lem</strong> d&#xE1;l.
        </em>
      </p>
      <p>
        <em>V t&#xE9;to lekci se komplexn&#x11B; pod&#xED;v&#xE1;me na:</em>
      </p>
      <ul>
        <li>
          <strong>
            *Instrument&#xE1;l &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho
          </strong>
          (&#x442;&#x432;&#x43E;&#x440;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;
          &#x43C;&#x43D;&#x43E;&#x436;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E;
          &#x447;&#x438;&#x441;&#x43B;&#x430;;*
        </li>
        <li>
          <strong>*Instrument&#xE1;l osobn&#xED;ch z&#xE1;jmen</strong>
          (&#x442;&#x432;&#x43E;&#x440;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
          &#x43F;&#x430;&#x434;&#x435;&#x436;
          &#x43B;&#x438;&#x447;&#x43D;&#x44B;&#x445;
          &#x43C;&#x435;&#x441;&#x442;&#x43E;&#x438;&#x43C;&#x435;&#x43D;&#x438;&#x439;).*
        </li>
      </ul>
      <div className="bg-warning">
        <h2>INSTRUMENT&#xC1;L &#x10C;&#xCD;SLA MNO&#x17D;N&#xC9;HO</h2>

        <p>
          <strong>(7. P&#xC1;D - S K&#xDD;M? S &#x10C;&#xCD;M?)</strong>
        </p>
      </div>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Instrument&#xE1;l
          &#x10D;&#xED;sla mno&#x17E;n&#xE9;ho.
        </strong>
      </p>
      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/OLplV2mNdGs"
        title="23  Instrumentál čísla množného"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>P&#x16F;jdu tam s nov&#xFD;mi u&#x10D;iteli.</em>
        <br />
        <em>P&#x16F;jdu tam se star&#xFD;mi kamar&#xE1;dy.</em>
        <br />
        <em>Vyb&#xED;r&#xE1;m mezi dv&#x11B;ma telefony.</em>
        <br />
        <em>Vyb&#xED;r&#xE1;m mezi dv&#x11B;ma pomeran&#x10D;i.</em>
        <br />
        <em>Projedeme r&#x16F;zn&#xFD;mi m&#x11B;sty.</em>
        <br />
        <em>Pojedeme na dovolenou nov&#xFD;mi auty.</em>
        <br />
        <em>Mezi n&#x11B;kolika mo&#x159;i.</em>
        <br />
        <em>Vyb&#xED;rali jsme to mezi n&#x11B;kolika h&#x159;i&#x161;ti.</em>
        <br />
        <em>Mezi n&#xE1;dra&#x17E;&#xED;mi.</em>
        <br />
        <em>P&#x16F;jdu tam s &#x17E;enami.</em>
        <br />
        <em>Bydl&#xED;m mezi dv&#x11B;ma m&#xED;stnostmi.</em>
      </p>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 12
        </strong>
      </p>
      <p>
        <strong>
          1. Dopl&#x148;te spr&#xE1;vn&#xE9; tvary instrument&#xE1;lu
          plur&#xE1;lu.
        </strong>
      </p>
      <p>
        Je to zahrada se ... (vzrostl&#xE9; stromy a ke&#x159;e). Park je za ...
        (ty domy). Dali jsme si zmrzlinov&#xFD; poh&#xE1;r s ... (jahody).
        Mal&#xE1; dcerka si &#x161;la ven hr&#xE1;t s ... (kamar&#xE1;dy).
        P&#x159;ed ... (dovolen&#xE9;) mus&#xED;me je&#x161;t&#x11B;
        vy&#x159;&#xED;dit hodn&#x11B; v&#x11B;c&#xED;. Jsou to lid&#xE9; s ...
        (letit&#xE9; zku&#x161;enosti). Na dvorku b&#x11B;halo n&#x11B;kolik
        slepic s ... (kohouti). Je to kr&#xE1;sn&#xE9;
        p&#x159;&#xED;mo&#x159;sk&#xE9; m&#x11B;sto s ...
        (p&#xED;se&#x10D;n&#xE9; pl&#xE1;&#x17E;e).
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              vzrostlými stromy a keři, těmi domy, jahodami, kamarády,
              dovolenými, letitými zkušenostmi, kohouty, písečnými plážemi.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          2. &#x158;ekn&#x11B;te ve spr&#xE1;vn&#xE9;m tvaru instrument&#xE1;lu.
        </strong>
      </p>
      <p>
        <strong>a) B&#xFD;t slavn&#xFD;:</strong>
        <br />
        dlouh&#xE9; rom&#xE1;ny, sportovn&#xED; v&#xFD;kony, hudebn&#xED;
        skladby, v&#x11B;deck&#xE9; vyn&#xE1;lezy, um&#x11B;leck&#xE1;
        d&#xED;la.
      </p>
      <p>
        <strong>b) B&#xFD;t proslul&#xFD;:</strong>
        <br />
        vysok&#xE9; v&#x11B;&#x17E;e, star&#xE9; domy, &#x10D;ist&#xE9;
        &#x159;eky, n&#xE1;mo&#x159;n&#xED; doprava, b&#xED;l&#xED; jeleni,
        nejstar&#x161;&#xED; metro.
      </p>
      <p>
        <strong>c) B&#xFD;t p&#x159;ekvapen&#xFD;:</strong>
        <br />
        neo&#x10D;ek&#xE1;van&#xE9; zm&#x11B;ny, vysok&#xE9; ceny,
        p&#x159;&#xED;sn&#xE1; pravidla.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong> a) Být slavný:</strong> <br />
              dlouhými romány, sportovními výkony, hudebními skladbami,
              vědeckými vynálezy, uměleckými díly.
            </p>
            <p>
              <strong> b) Být proslulý:</strong> <br />
              vysokými věžemi, starými domy, čistými řekami, námořními
              dopravami, bílými jeleny, nejstaršími metry.
            </p>
            <p>
              <strong> c) Být překvapený:</strong> <br />
              neočekávanými změnami, vysokými cenami, přísnými pravidly.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          3. Dejte do spr&#xE1;vn&#xE9;ho tvaru instrument&#xE1;lu.
        </strong>
      </p>
      <p>
        <strong>a) Pov&#xED;dat si s:</strong>
        <br />
        slavn&#xFD; fotografov&#xE9;, p&#x159;edn&#xED; politici,
        &#x10D;e&#x161;t&#xED; politici, n&#x11B;meck&#xE9; spisovatelky,
        mal&#xE9; d&#x11B;ti.
      </p>
      <p>
        <strong>b) Zab&#xFD;vat se s:</strong>
        <br />
        matematick&#xE9; z&#xE1;kony, ciz&#xED; jazyky, filmov&#xE9; v&#x11B;dy,
        ekonomick&#xE9; teorie.
      </p>
      <p>
        <strong>c) Pracovat s:</strong>
        <br />
        zahradn&#xED;ci, asistenti, po&#x10D;&#xED;ta&#x10D;e,
        slo&#x17E;it&#xE9; programy, chyt&#x159;&#xED; lid&#xE9;, krasavice.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong> a) Povídat si s: </strong> <br />
              slavnými fotografy, předními politiky, německými spisovatelkami,
              malými dětmi.
            </p>
            <p>
              <strong> b) Zabývat se s:</strong> <br />
              matematickým zákony, cizími jazyky, filmovými vědami, ekonomickými
              teoriemi.
            </p>
            <p>
              <strong> c) Pracovat s:</strong> <br />
              zahradníky, asistenty, počítači, složitými programy, chytrými
              lidmi, krasavicemi.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          4. Dejte v&#xFD;razy do instrument&#xE1;lu plur&#xE1;lu.
        </strong>
      </p>
      <p>
        Ta prvn&#xED; dobr&#xE1; studentka &#x2026; , to mal&#xE9;
        sportovn&#xED; letadlo &#x2026; , ta nov&#xE1;
        p&#x159;&#xED;telkyn&#x11B; &#x2026; , ten mil&#xFD; kluk &#x2026; , ta
        star&#x161;&#xED; dcera &#x2026; , to dlouh&#xE9; slovo &#x2026; , ta
        p&#x159;&#xED;sn&#xE1; &#x159;editelka &#x2026; , ta slavnostn&#xED;
        &#x159;e&#x10D; &#x2026; , ten oby&#x10D;ejn&#xFD;
        po&#x10D;&#xED;ta&#x10D; &#x2026; , ta studen&#xE1; noc &#x2026; , to
        historick&#xE9; n&#xE1;m&#x11B;st&#xED; &#x2026; , ta divn&#xE1;
        v&#x11B;c &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Těmi prvními dobrými studentkami, těmi malými sportovními letadly,
              těmi novými přítelkyněmi, těmi milými kluky, těmi staršími
              dcerami, těmi dlouhými slovy, těmi přísnými ředitelkami, těmi
              slavnostními řečmi, těmi obyčejnými počítači, těmi studenými noci,
              těmi historickými náměstími, těmi divnými věcmi.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          5. N&#xE1;sleduj&#xED;c&#xED; slovn&#xED; spojen&#xED; dejte do
          instrument&#xE1;lu plur&#xE1;lu.
        </strong>
      </p>
      <p>
        Ten jin&#xFD; v&#x11B;t&#x161;&#xED; pokoj &#x2026; , to posledn&#xED;
        obsazen&#xE9; parkovi&#x161;t&#x11B; &#x2026; , ten nov&#xFD;
        &#xFA;&#x10D;etn&#xED; &#x2026; , ten star&#xFD; pap&#xED;r &#x2026; ,
        to velk&#xE9; n&#xE1;dra&#x17E;&#xED; &#x2026; , ten mlad&#xFD;
        p&#x159;edseda &#x2026; , ta typick&#xE1; restaurace &#x2026; , to
        hlavn&#xED; m&#x11B;sto &#x2026; , ten &#x161;patn&#xFD;
        &#x159;idi&#x10D; &#x2026; , ten dobr&#xFD; slovn&#xED;k &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Těmi jinými většími pokoji, těmi posledními obsazenými parkovišti,
              těmi novými účetními, těmi starými papíry, těmi velkými nádražími,
              těmi mladými předsedy, těmi typickými restauracemi, těmi hlavními
              městy, těmi špatnými řidiči, těmi dobrými slovníky.
            </p>
          </div>
        </Collapse>
      </div>
      <h2 className="bg-warning">
        INSTRUMENT&#xC1;L OSOBN&#xCD;CH Z&#xC1;JMEN
      </h2>

      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Instrument&#xE1;l
          osobn&#xED;ch z&#xE1;jmen.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/Ti8oClk8NSg"
        title="23  Instrumentál osobních zájmen"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>b&#xFD;t &#x2026;</em>
        <br />
        <em>st&#xE1;t se &#x2026;</em>
        <br />
        <em>zab&#xFD;vat se &#x2026;</em>
        <br />
        <em>s mezi za p&#x159;ed pod nad</em>
        <br />
        <em>Chce&#x161; b&#xFD;t mnou?</em>
        <br />
        <em>P&#x16F;jde&#x161; se mnou?</em>
        <br />
        <em>Chci byt s&#xE1;m sebou</em>
        <br />
        <em>P&#x159;ed sebou jsem m&#x11B;l d&#xED;t&#x11B;</em>
        <br />
        <em>B&#xFD;t tebou koupil bych si nov&#xE9; auto</em>
        <br />
        <em>Nep&#x16F;jdu tam s tebou</em>
        <br />
        <em>
          P&#x159;ed tebou sed&#xED; n&#x11B;jak&#xE1; kr&#xE1;sn&#xE1;
          pan&#xED;
        </em>
        <br />
        <em>Zab&#xFD;v&#xE1;m se j&#xED;m</em>
        <br />
        <em>P&#x16F;jdu tam s n&#xED;m</em>
        <br />
        <em>Zab&#xFD;v&#xE1;m se j&#xED;</em>
        <br />
        <em>P&#x16F;jdu tam s n&#xED;</em>
      </p>
      <p>
        <strong>6. Dopl&#x148;te ve spr&#xE1;vn&#xE9;m tvaru.</strong>
      </p>
      <p>
        <strong>a) Sezn&#xE1;mil se s:</strong>
        <br />
        j&#xE1;, ty, on, ona, my, vy, oni.
      </p>
      <p>
        <strong>b) &#x10C;ekal ve front&#x11B; p&#x159;ed:</strong>
        <br />
        j&#xE1;, ty, on, ona, my, vy, oni.
      </p>
      <p>
        <strong>c) Doktor h&#xFD;bal:</strong>
        <br />
        j&#xE1;, ty, on, ona, my, vy, oni.
      </p>
      <p>
        <strong>d) Bavil se s:</strong>
        <br />
        j&#xE1;, ty, on, ona, my, vy, oni.
      </p>
      <p>
        <strong>e) Schov&#xE1;val se p&#x159;ed:</strong>
        <br />
        j&#xE1;, ty, on, ona, my, vy, oni.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong> a) Seznámil se s: </strong> <br />
              mnou, tebou, ním, ní, námi, vámi, nimi.
            </p>
            <p>
              <strong> b) Čekal ve frontě před:</strong> <br />
              mnou, tebou, ním, ní, námi, vámi, nimi.
            </p>
            <p>
              <strong> c) Doktor hýbal:</strong> <br />
              mnou, tebou, jím, jí, námi, vámi, jimi.
            </p>
            <p>
              <strong> d) Bavil se s:</strong> <br />
              mnou, tebou, ním, ní, námi, vámi, nimi.
            </p>
            <p>
              <strong>e) Schovával se před:</strong> <br />
              mnou, tebou, ním, ní, námi, vámi, nimi.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>7. Dopl&#x148;te spr&#xE1;vn&#xE9; formy z&#xE1;jmen.</strong>
      </p>
      <p>
        &#x160;li za &#x2026; (on). St&#xE1;li ve front&#x11B; p&#x159;ed
        &#x2026; (oni). M&#x16F;&#x17E;ete se &#x2026; (j&#xE1;)
        po&#x10D;&#xED;tat. Nemohli jsme se s &#x2026; (vy) domluvit. Je
        p&#x159;ed &#x2026; (ty) hodn&#x11B; pr&#xE1;ce. Nejsem si s &#x2026;
        (to) jist&#xFD;. Nad &#x2026; (vy) let&#xED; balon. Nechceme se &#x2026;
        (oni) u&#x17E; zab&#xFD;vat. P&#x16F;jdeme tam s &#x2026; (ona).
        P&#x159;ed &#x2026; (my) je je&#x161;t&#x11B; velk&#xFD; kus cesty.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div className="fst-italic">
            <p>ním, nimi, mnou, vámi, tebou, tím, vámi, jimi, ní, námi.</p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          8.1. P&#x159;e&#x10D;t&#x11B;te si n&#xE1;sleduj&#xED;c&#xED; text a
          n&#xE1;sledn&#x11B; s n&#xED;m pracujte.
        </strong>
      </p>
      <p>
        <strong>Pepa:</strong> Mami, tati, pot&#x159;eboval bych se dohodnout na
        l&#xE9;to, kdy kam pojedeme a tak. Abych se mohl domluvit i s
        kamar&#xE1;dy.
      </p>
      <p>
        <strong>T&#xE1;ta:</strong> Dob&#x159;e. U m&#x11B; je to jasn&#xE9;,
        j&#xE1; dostanu dovolenou na za&#x10D;&#xE1;tku &#x10D;ervence. Jestli
        po&#x159;&#xE1;d chcete, m&#x16F;&#x17E;eme jet do
        &#x160;pan&#x11B;lska. Jak jsme se domlouvali u&#x17E; d&#x159;&#xED;v,
        Iet&#x11B;t m&#x16F;&#x17E;eme t&#x159;eba do Barcelony a pak si tam
        pronajmout auto a pod&#xED;vat se n&#x11B;kam do okol&#xED;.
        Kolegov&#xE9; v pr&#xE1;ci &#x159;&#xED;kali, &#x17E;e to v&#x16F;bec
        nevyjde draho. Tak na 14 dn&#xED;, co &#x159;&#xED;k&#xE1;te?
      </p>
      <p>
        <strong>M&#xE1;ma:</strong> J&#xE1; souhlas&#xED;m, ale nejrad&#x11B;ji
        bych str&#xE1;vila celou dobu n&#x11B;kde na pl&#xE1;&#x17E;i, opravdu
        si pot&#x159;ebuju odpo&#x10D;inout. Tak&#x17E;e na n&#x11B;jak&#xE9;
        celodenn&#xED; v&#xFD;lety a b&#x11B;h&#xE1;n&#xED; po m&#x11B;stech
        zapome&#x148;te.
      </p>
      <p>
        <strong>P:</strong> M&#x11B; bude pl&#xE1;&#x17E; bavit tak den, dva.
        Je&#x161;t&#x11B; &#x17E;e je v Barcelon&#x11B; tolik
        zaj&#xED;mav&#xFD;ch m&#xED;st, kam se d&#xE1; vyrazit.
      </p>
      <p>
        <strong>G&#xE1;bina:</strong> J&#xE1; bych t&#x159;eba jela i na
        p&#xE1;r dn&#xED; do Madridu. Sice tam bude v l&#xE9;t&#x11B; horko, ale
        docela r&#xE1;da bych si to m&#x11B;sto prohl&#xE9;dla. &#x10C;as na to
        m&#xED;t budeme, ne? Je to daleko?
      </p>
      <p>
        <strong>T:</strong> No d&#xE1;lka to trochu je, ale pro&#x10D; ne.
        M&#xE1;m v Madridu kamar&#xE1;da, m&#x16F;&#x17E;u ho poprosit, aby
        n&#xE1;m za&#x159;&#xED;dil na t&#x11B;ch p&#xE1;r dn&#xED;
        n&#x11B;jak&#xFD; levn&#xFD; hotel. A v Barcelon&#x11B; si
        se&#x17E;eneme ubytov&#xE1;n&#xED; n&#x11B;kde bl&#xED;zko
        pl&#xE1;&#x17E;e. Hned z&#xED;tra se na to pod&#xED;v&#xE1;m na internet
        a pak zajdu do n&#x11B;jak&#xE9; cestovn&#xED; kancel&#xE1;&#x159;e pro
        materi&#xE1;ly. Vybereme spolu n&#x11B;co, co bude vyhovovat v&#x161;em.
      </p>
      <p>
        <strong>M:</strong> A nezapome&#x148;te, &#x17E;e posledn&#xED;
        t&#xFD;den v srpnu jsme pozvan&#xED; ke strejdovi Honzovi do Humpolce.
        Bratranci u&#x17E; se po v&#xE1;s ptali, kdy&#x17E; jsme se tam s
        t&#xE1;tou p&#x159;ed m&#x11B;s&#xED;cem zastavili.
      </p>
      <p>
        <strong>G:</strong> Jasn&#x11B;, na to se t&#x11B;&#x161;&#xED;m, s nimi
        je v&#x17E;dycky legrace. A hlavn&#x11B; &#x2014; u&#x17E; rok jsme je
        nevid&#x11B;li.
      </p>
      <p>
        <strong>T:</strong> Kam vlastn&#x11B; chcete jet s kamar&#xE1;dy, Pepo?
        A na jak dlouho?
      </p>
      <p>
        <strong>P:</strong> Kluci ze &#x161;koly pl&#xE1;nuj&#xED;, &#x17E;e by
        jeli s jednou takovou ak&#x10D;n&#xED; cestovkou na kolech do
        &#x160;v&#xFD;carska, cht&#x11B;l bych se taky p&#x159;idat.
        Term&#xED;n&#x16F; maj&#xED; v&#xED;c, tak je&#x161;t&#x11B;
        uvid&#xED;me, kdy n&#xE1;m to vyjde. Bylo by to asi na deset dn&#xED;.
        No a nakonec t&#xE1;bor jako brig&#xE1;du, to je jasn&#xE9;.
      </p>
      <p>
        <strong>M:</strong> To budete jezdit n&#x11B;kde v Alp&#xE1;ch, nebo co?
        Hlavn&#x11B; aby to nebylo n&#x11B;jak nebezpe&#x10D;n&#xE9;,
        nezapome&#x148; si za&#x159;&#xED;dit po&#x159;&#xE1;dn&#xE9;
        poji&#x161;t&#x11B;n&#xED;, dob&#x159;e?
      </p>
      <p>
        <strong>P:</strong> Jasn&#x11B; mami, u&#x17E; nejsem mal&#xFD;,
        po&#x10D;&#xED;t&#xE1;m s t&#xED;m. A je to sp&#xED;&#x161; kolem Alp, v
        &#xFA;dol&#xED;ch a tak. Nemus&#xED;&#x161; m&#xED;t strach, jezd&#xED;
        tam u&#x17E; dlouho. Loni s nimi byl Jirka v Belgii a pr&#xFD; to bylo
        perfektn&#xED;.
      </p>
      <p>
        <strong>M:</strong> Dob&#x159;e, dob&#x159;e. J&#xE1; jsem
        je&#x161;t&#x11B; cht&#x11B;la jet s Miladou a d&#x11B;tmi na chatu, ale
        nev&#xED;m, jestli to vyjde. Je&#x161;t&#x11B; mi ne&#x159;ekli, kdy co
        maj&#xED;. P&#x159;&#xED;padn&#x11B; tam m&#x16F;&#x17E;eme s
        tat&#xED;nkem jet sami, vi&#x10F; Hynku?
      </p>
      <p>
        <strong>
          8.2. Odpov&#x11B;zte na tvrzen&#xED;. Je to pravda, nebo le&#x17E;?
        </strong>
      </p>
      <p>
        1) Rodina pojede na dovolenou spole&#x10D;n&#x11B;.
        <br />
        <strong>ANO / NE</strong>
      </p>
      <p>
        2) Ve &#x160;pan&#x11B;lsku se budou hlavn&#x11B; opalovat.
        <br />
        <strong>ANO / NE</strong>
      </p>
      <p>
        3) Na dovolenou pojedou vlastn&#xED;m autem.
        <br />
        <strong>ANO / NE</strong>
      </p>
      <p>
        4) Krom&#x11B; zahrani&#x10D;&#xED; nav&#x161;t&#xED;v&#xED;
        p&#x159;&#xED;buzn&#xE9; v &#x10C;esk&#xE9; republice.
        <br />
        <strong>ANO / NE</strong>
      </p>
      <p>
        5) Pepa se v l&#xE9;t&#x11B; chyst&#xE1; i sportovat.
        <br />
        <strong>ANO / NE</strong>
      </p>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic">
            <p>1) ANO; 2) NE; 3) NE; 4) ANO; 5) ANO.</p>
          </div>
        </Collapse>
      </div>
      <GreenBox
        header="Внимание! Задание № 8.3 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          8.3. Odpov&#x11B;zte na n&#xE1;sleduj&#xED;c&#xED; ot&#xE1;zky.
        </strong>
      </p>
      <p>
        1) Co cht&#x11B;j&#xED; d&#x11B;lat ve &#x160;pan&#x11B;lsku G&#xE1;bina
        s maminkou?
        <br />
        2) Jak bude tat&#xED;nek za&#x159;izovat cestu?
        <br />
        3) Kde a jak budou ve &#x160;pan&#x11B;lsku bydlet?
        <br />
        4) S k&#xFD;m a kam pojede v l&#xE9;t&#x11B; Pepa?
        <br />
        5) Co m&#xE1; v pl&#xE1;nu Milada s rodinou?
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
          9. Zhl&#xE9;dn&#x11B;te n&#xE1;sleduj&#xED;c&#xED; video a
          dopl&#x148;te vynechan&#xE9; fr&#xE1;ze.
        </strong>
      </p>
      <p>
        <a target="blank" href="https://www.youtube.com/watch?v=1uTPMxGxlog">
          Jak za&#x10D;&#xED;t s krasop&#xED;smem
        </a>
      </p>
      <p>
        <strong>(00:00 - 00:44)</strong>
      </p>
      <p>
        &#xAB;Ahoj, j&#xE1; jsem Katka a v&#xED;t&#xE1;m v&#xE1;s u nov&#xE9;ho
        videa. Dneska se s &#x2026; pod&#x11B;l&#xED;m o to, jak
        za&#x10D;&#xED;t s &#x2026; &#x2026; . Ale ne&#x17E; za&#x10D;neme
        ps&#xE1;t, &#x159;ekneme si n&#x11B;co o fix&#xE1;ch a centropenech.
        Kdy&#x17E; budete cht&#xED;t za&#x10D;&#xED;t s &#x2026; , ani&#x17E;
        byste cokoli po&#x159;izovali, m&#x16F;&#x17E;ete pou&#x17E;&#xED;t
        klasick&#xE9; centropeny o r&#x16F;zn&#xFD;ch
        tlou&#x161;&#x165;k&#xE1;ch. &#x2026; &#x2026; je, &#x17E;e se jim
        hodn&#x11B; rychle sep&#xED;&#x161;e hrot. &#x2026;
        kvalitn&#x11B;j&#x161;&#xED; jsou zna&#x10D;ky jako Mangaka nebo Touch.
        Ty maj&#xED; hroty pevn&#xE9;, a i po dlouh&#xE9;m psan&#xED; jsou
        kr&#xE1;sn&#x11B; &#x2026; .&#xBB;
      </p>
      <p>
        <strong>(04:35 - 04:50)</strong>
      </p>
      <p>
        &#xAB;Kdy&#x17E; p&#xED;&#x161;ete &#x2026; , tak tlustou &#x2026;
        dod&#x11B;l&#xE1;v&#xE1;te a&#x17E; nakonec. &#x2026;
        ztlu&#x161;t&#x11B;n&#xED;m jednotliv&#xFD;ch &#x2026; .&#xBB;
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong> (00:00 — 00:44) </strong> <br />
              vámi, okrasným písmem, krasopísnem, Jejich nevýhodou, Podstatně,
              zaoblené.
            </p>
            <p>
              <strong> (04:35 — 04:50)</strong> <br />
              centropeny, linku, Umělým, tahů.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          10. Pod&#xED;vejte se na obr&#xE1;zky a najd&#x11B;te 11
          rozd&#xED;l&#x16F; a nahrajte na z&#xE1;znamn&#xED;k svoje
          odpov&#x11B;di.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_23/picture_1.jpg"
          alt="picture_1"
        />
      </p>
      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_23/Slang+-+Rozd%C3%ADly+-+Karlson.mp3"
        ></audio>
        <figcaption>
          <strong>Poslechn&#x11B;te si nahr&#xE1;vku se vzorem.</strong>
        </figcaption>
      </figure>

      <p>
        <em>Vzor:</em>
      </p>
      <p>Slang - Rozd&#xED;ly - Karlson</p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_23/picture_2.jpg"
          alt="picture_2"
        />
      </p>
      <GreenBox
        header="Внимание! Задание № 11.1 проверит преподаватель."
        text="Запишите аудиофайлы и отправьте их на проверку в группу Telegram c преподавателем или с потоком."
      />

      <p>
        <strong>
          11.1. Pod&#xED;vejte se na obr&#xE1;zky a odpov&#x11B;zte na
          ot&#xE1;zky.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_23/picture_3.jpg"
          alt="picture_3"
        />
      </p>
      <p>
        <strong>Ot&#xE1;zky:</strong>
      </p>
      <p>
        1) &#x10C;&#xED;m je napln&#x11B;n velk&#xFD; samovar na stole?
        <br />
        2) Co vis&#xED; na st&#x11B;n&#x11B; za stolem?
        <br />
        3) &#x10C;&#xED;m m&#xED;ch&#xE1; n&#xE1;poj v &#x161;&#xE1;lku strejda
        Fedor?
        <br />
        4) S jak&#xFD;m vzorem je na stole ubrus?
      </p>
      <p>
        <strong>
          11.2. Tak&#xE9; si m&#x16F;&#x17E;ete zkusit naj&#xED;t 9
          rozd&#xED;l&#x16F;.
        </strong>
      </p>
      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_23/picture_4.jpg"
          alt="picture_4"
        />
      </p>
      <p>
        <strong>
          Poslechn&#x11B;te si nahr&#xE1;vku se spr&#xE1;vn&#xFD;mi
          odpov&#x11B;&#x10F;mi a pod&#xED;vejte se na obr&#xE1;zek dol&#x16F;.
        </strong>
      </p>

      <figure>
        <audio
          controls
          src="https://czecha2bucket.s3.amazonaws.com/lekce_23/Slang+-+Rozd%C3%ADly+-+Prostokva%C5%A1eno.mp3"
        ></audio>
        <figcaption>
          <strong>Slang - Rozd&#xED;ly - Prostokva&#x161;eno</strong>
        </figcaption>
      </figure>

      <p>
        <img
          src="https://czecha2bucket.s3.amazonaws.com/lekce_23/picture_5.jpg"
          alt="picture_5"
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

export default LectureTwentyThree;
