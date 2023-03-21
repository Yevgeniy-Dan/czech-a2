import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const LectureSeven: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(14);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">7. lekce</h1>
        <p> Stupňování přídavných jmen a příslovcí </p>
        <Link to="/admin/lectures/6">Предыдущий урок</Link>
        {/* <Link to="/admin/lectures/8">Следующий урок</Link> */}
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>

        <div className="fst-italic">
          <p>
            V této lekci se dozvíte všechny potřebné informace o stupňování
            přídavných jmen.
          </p>
          <p>
            Kromě základních pravidel si také řekneme, proč vlastně přídavná
            jména a příslovcí stupňujeme.
          </p>
        </div>

        {/*  STUPŇOVÁNÍ PŘÍDAVNÝCH JMEN A PŘÍSLOVCÍ*/}
        <div>
          <h2>STUPŇOVÁNÍ PŘÍDAVNÝCH JMEN A PŘÍSLOVCÍ</h2>

          {/* STUPŇOVÁNÍ PŘÍDAVNÝCH JMEN */}
          <div>
            <h3>STUPŇOVÁNÍ PŘÍDAVNÝCH JMEN</h3>

            <p>
              Přídavná jména stupňujeme, pokud chceme vyjádřit, že nějaký
              předmět nebo osoba má vlastnost vyjádřenou přídavným jménem ve
              větší míře než jiná osoba nebo jiný předmět.
            </p>

            <p>
              Můžeme říct, že třeba Petr je{" "}
              <span className="text-danger"> vyšší </span>než Pavel nebo že je
              Pavel
              <span className="text-danger"> nižší </span>než Petr. Nebo také
              můžeme říct, že velryba je{" "}
              <span className="text-danger"> větší </span>než dva autobusy,
              zatímco slon je <span className="text-danger">menší </span>než
              autobus. A že <span className="text-danger">největším </span>
              zvířetem je právě velryba.
            </p>

            <img
              src="https://czecha2bucket.s3.amazonaws.com/lekce_7/picture_1.jpg"
              alt="picture_1"
              width="100%"
              height="auto"
            />

            <div>
              <p className="fw-bold bg-warning">Просмотрите видео с Дарьей.</p>

              <iframe
                width="656"
                height="369"
                src="https://www.youtube.com/embed/wBm7AfbcVwo"
                title="7  STUPŇOVÁNÍ PŘÍDAVNÝCH JMEN"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <p className="fw-bold"></p>

              <div className="fst-italic">
                <p className="fw-bold">Trénink:</p>
                <p>Filip měl dobré zaměstnání.</p>
                <p>A teď má lepší.</p>
                <p>Mám malý slovník.</p>
                <p>Ale Tomáš má menší.</p>
                <p>Film Drákula je dlouhý.</p>
                <p>Ale film Amadeus je delší.</p>
                <p>Mám špatnou náladu.</p>
                <p>Ale Mirek má horší.</p>
                <p>Mám velký dům.</p>
                <p>Ale můj bratr má větší.</p>
                <p>Oběd byl dobrý.</p>
                <p>Ale večeře byla lepší.</p>
                <p>Kostel je vysoký.</p>
                <p>Ale věž je vyšší.</p>
                <p>Čaj je dobrý.</p>
                <p>Víno je lepší. </p>
                <p>A pivo je nejlepší.</p>
                <p>V dubnu je den dlouhý.</p>
                <p>V červnu je delší.</p>
                <p>Ale v červenci je nejdelší.</p>
                <p>Škola je vysoká.</p>
                <p>Pošta je výšší.</p>
                <p>Ale divadlo je nejvyšší.</p>
                <p>Jiří má špatnou náladu. </p>
                <p>Tomáš má horší.</p>
                <p>Ale Mirek má nejhorší.</p>
                <p>Barbara má malý byt.</p>
                <p>Lucie má menší.</p>
                <p>A Marie má nejmenší.</p>
                <p>Helena nosí krátké sukně.</p>
                <p>Eva nosí kratší sukně.</p>
                <p>A Klára nosí nejkratší.</p>
                <p>Brno má velké náměstí.</p>
                <p>Jihlava má větší.</p>
                <p>A České Budějovice má největší náměstí.</p>
              </div>
            </div>
            <div>
              <p className="fw-bold bg-warning">Просмотрите видео с Дарьей.</p>

              <iframe
                width="655"
                height="368"
                src="https://www.youtube.com/embed/MLhD9yYEuNE"
                title="7  STUPŇOVÁNÍ PŘÍDAVNÝCH JMEN2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <div>
                <p className="fw-bold">Slova z videa.</p>

                <div className="fst-italic">
                  <p>Chytrý — chytřejší — nejchytřejší</p>
                  <p>Přátelský — přátelštější — nejpřátelštější </p>
                  <p>Sympatický — sympatičtější — nejsympatičtější</p>
                  <p>Superlativ — 3. stupeň</p>
                  <p>Komparativ — 2. stupeň </p>
                  <p>Adjektivum — přídavné jméno </p>
                  <p>Adverbium — příslovce</p>
                  <p>Slabý — slabší — nejslabší</p>
                  <p>Mladý — mladší — nejmladší </p>
                  <p>Tvrdý — tvrdší — nejtvrdší </p>
                  <p>Krátký — kratší — nejkratší </p>
                  <p>Jednoduchý — jednodušší — nejjednodušší</p>
                  <p>Drahý — dražší — nejdražší </p>
                  <p>Blízký — bližší — nejbližší </p>
                  <p>Vysoký — vyšší — nejvyšší </p>
                  <p>Řídký — řidší </p>
                  <p>Nízký — nižší </p>
                  <p>Krátký — kratší</p>
                  <p className="fw-bold">Trénink:</p>
                  <p>Michal je mladý.</p>
                  <p>Ale Honza je mladší.</p>
                  <p>Sára je krásná.</p>
                  <p>Ale Libuše je krásnější.</p>
                  <p>Obraz je dráhy.</p>
                  <p>Socha je dražší. </p>
                  <p>Film je zajímavý. </p>
                  <p>Kniha je zajímavější.</p>
                  <p>Kufr je lehký.</p>
                  <p>Taška je lehčí.</p>
                  <p>Kabát je levný. </p>
                  <p>Tričko je levnější.</p>
                  <p>Vlak je rychlý.</p>
                  <p>Auto je rychlejší.</p>
                  <p>Babička je stará.</p>
                  <p>Ale dědeček je starší.</p>
                  <p>Budapešť je hezká.</p>
                  <p>Ale Vídeň je hezčí.</p>
                  <p>Pošta je nová.</p>
                  <p>Banka je novější.</p>
                  <p>Káva je teplá.</p>
                  <p>Ale čaj je teplejší.</p>
                  <p>Karel Čapek je známý.</p>
                  <p>Ale Václav Havel je známější.</p>
                </div>
              </div>
            </div>

            <p className="fw-bold bg-warning">
              Выполните задания с № 1 по № 16
            </p>
            {/* Task 1 */}
            <div>
              <p className="fw-bold">1. Pracujte podle vzoru.</p>
              <p>
                <i>
                  <strong>Vzor:</strong> Alena je mnohem (hezká) … než Radka.
                  &#8594; Alena je mnohem hezčí než Radka.
                </i>
              </p>
              <p>a) Paní ředitelka je (přátelská) … než naše paní učitelka.</p>
              <p>b) Michal je mnohem (nezodpovědný) … než Honza.</p>
              <p>c) David je (chytrý) … než Eva.</p>
              <p>
                d) Tahle nová prodavačka je (příjemná) … na zákazníky než ta
                bývalá.
              </p>
              <p>e) Klára je (otevřená) … než byla vloni.</p>
              <p>f) Počasí je (dobré) … než ráno.</p>
              <p>g) Soused je (slušný) … než včera.</p>

              <div>
                <button onClick={() => keys.toggleKey(1)}>Klíče</button>
                <Collapse in={keys.getValue(1)} timeout={2000}>
                  <div className="fst-italic">
                    <p>a) přátelštější;</p>
                    <p>b) nezodpovědnější;</p>
                    <p>c) chytřejší;</p>
                    <p>d) příjemnější;</p>
                    <p>e) otevřenější;</p>
                    <p>f) lepší;</p>
                    <p>g) slušnější.</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 2 */}
            <div>
              <p className="fw-bold">2. Utvořte správné formy stupňování.</p>

              <div>
                <p className="fw-bold">
                  a) Lucie je zamilovaná do Honzy. Žije s ním už půl roku a říká
                  Evě, že je čím dál tím …
                </p>

                <p>
                  <i>
                    <strong>Vzor:</strong> Milý &#8594; milejší
                  </i>
                </p>

                <p>
                  Veselý, trpělivý, pracovitý, ohleduplný, tolerantní,
                  zamilovaný, citlivý, optimistický, společenský, přátelský.
                </p>
              </div>

              <div>
                <p className="fw-bold">
                  b) Ach jo! Zato Eva se rozplakala. Teď si Lucii postěžovala, ž
                  e její nový přítel je čím dál tím …
                </p>
                <p>
                  <i>
                    <strong>Vzor:</strong> Netrpělivý &#8594; netrpělivější
                  </i>
                </p>
                <p>
                  Uzavřený, líný, smutný, nudný, bezohledný, nejistý,
                  egoistický, pesimistický, nepřátelský, nespolečenský.
                </p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(2)}>Klíče</button>
                <Collapse in={keys.getValue(2)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      a) Veselejší, trpělivější, pracovitější, ohleduplnější,
                      tolerantnější, zamilovanější, citlivější, optimističtější,
                      společenštější, přátelštější.
                    </p>
                    <p>
                      b) uzavřenější, línější, smutnější, nudnější,
                      bezohlednější, nejistější, egoističtější, pesimističtější,
                      nepřátelštější, nespolečenštější.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 3 */}

            <div>
              <p className="fw-bold">
                3. Slova v závorkách dejte do příslušných forem.
              </p>

              <p>
                <i>
                  <strong>Vzor:</strong> Minulý týden jsme byli na (hezký) …
                  výletě než před měsícem. &#8594; Minulý týden jsme byli na
                  <strong>hezčím</strong> výletě než před měsícem.
                </i>
              </p>

              <p>
                Počasí bylo (jasný) … a (romantický) … než posledně. Na přírodu
                byl (veselý) … pohled. Bylo to také mnohem (lehký) … chodit po
                horách, protože jsme si vybrali (jednoduchý) … terény a vzali
                (dobrý) … boty na turistiku. Minulý výlet byl podstatně
                (náročný) … a (dlouhý) … než tento, protože jsme měli (špatný) …
                boty. Večer jsme také měli podstatně (velký) … hlad. Teď jsme se
                vrátili mnohem (spokojený) … a (odpočinutý) … , než jsme byli na
                začátku. Dneska jsme už také (moudrý) … než předtím, protože si
                na turistiku budeme vybírat (lehký) … trasy a (nízký) … hory.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(3)}>Klíče</button>
                <Collapse in={keys.getValue(3)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      jasnější, romantičtější, veselejší, lehčí, jednodušší,
                      lepší, náročnější, delší, horší, větší, spokojenější,
                      odpočinutější, moudřejší, lehčí, nižší.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>

          {/* STUPŇOVÁNÍ PŘÍSLOVCÍ */}
          <div>
            <h3>STUPŇOVÁNÍ PŘÍSLOVCÍ</h3>

            <div>
              <p>
                <strong>Příslovce</strong> — наречие, отвечает на вопрос КАК?
                Хорошо, плохо, дёшево, приятно и т. д.
              </p>

              <p className="fw-bold">Příklady:</p>
              <p>
                Martin chce žít <span className="text-danger">zdravě</span>.
              </p>
              <p>
                <span className="text-danger">Často </span> se zapovídám.
              </p>
              <p>
                Až dojedeš na křižovatku, jeď{" "}
                <span className="text-danger">rovně</span>.
              </p>
              <p>
                <span className="text-danger">Včera </span> sněžilo.
              </p>
              <p>
                <span className="text-danger">Dlouze </span> se zamyslel.
              </p>
              <p>
                Cyklista zahnul <span className="text-danger">doleva</span>.
              </p>
            </div>

            <div>
              <p className="fw-bold">Druhy příslovce:</p>
              <table>
                <tr>
                  <th>Druh příslovce</th>
                  <th>Ptáme se otázkami</th>
                  <th>Příklady</th>
                </tr>
                <tr>
                  <td>Místa</td>
                  <td>Kde? Odkud? Kudy? Kam?</td>
                  <td>Doma, nahoru, dolů, kam, tudy, tam</td>
                </tr>
                <tr>
                  <td>Času</td>
                  <td>Kdy? Odkdy? Dokdy?</td>
                  <td>Večer, ráno, včera, vloni, stále, občas</td>
                </tr>
                <tr>
                  <td>Způsobu</td>
                  <td>Jak?</td>
                  <td>Vesele, hezky, pomalu, pešky, takto</td>
                </tr>
                <tr>
                  <td>Míry</td>
                  <td>Jakou měrou?</td>
                  <td>Velmi, moc, málo, kolik, zcela, úplně</td>
                </tr>
                <tr>
                  <td>Příčiny</td>
                  <td>Proč?</td>
                  <td>Navzdory, proto, úmyslně</td>
                </tr>
              </table>
            </div>
            <p>
              Příslovce můžeme stupňovat stejně jako přídavná jména. Díky
              stupňování můžeme vyjádřit míru vlastnosti či dané okolnosti apod.
              Tvoříme tradičně tři stupně.
            </p>
            <div>
              <p className="fw-bold bg-warning">Просмотрите видео с Дарьей.</p>

              <iframe
                width="652"
                height="367"
                src="https://www.youtube.com/embed/1sA7JVA0QyI"
                title="7  STUPŇOVÁNÍ PŘÍSLOVCÍ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <div>
                <p className="fw-bold">Slova z videa.</p>

                <div className="fst-italic">
                  <p className="fw-bold">Trénink:</p>
                  <p>Mám mnoho knih.</p>
                  <p>A ty máš míň / méně knih.</p>
                  <p>Mám málo kamarádů.</p>
                  <p>Jirka má míň/ méně kamarádů.</p>
                  <p>Znám Prahu dobře.</p>
                  <p>Ale Filip zná Prahu ještě líp / lépe.</p>
                  <p>Je mi špatně.</p>
                  <p>Pavlovi je hůř.</p>
                  <p>Dneska vstávám brzo.</p>
                  <p>Zítra vstanu dřív/dříve.</p>
                  <p>Chci hodně dárku.</p>
                  <p>Marie chce více dárků.</p>
                  <p>Mám málo peněz.</p>
                  <p>Ty máš míň / méně peněz.</p>
                  <p>A on má nejmíň / nejméně peněz.</p>
                  <p>Manželka se má špatně.</p>
                  <p>Manžel se má hůř.</p>
                  <p>Děti se mají nejhůř. </p>
                  <p>Eva má hodně knih. </p>
                  <p>Marta má více knih.</p>
                  <p>Ale Markéta má nejvíc / nejvíce knih.</p>
                  <p>Bílá sukně vypadá dobře.</p>
                  <p>Hnědá vypadá lépe / líp.</p>
                  <p>Ale černá vypadá nejlíp / nejlépe.</p>
                </div>
              </div>
            </div>

            <div>
              <p className="fw-bold bg-warning">Просмотрите видео с Дарьей.</p>

              <iframe
                width="654"
                height="368"
                src="https://www.youtube.com/embed/-qAPhLDmcxw"
                title="7  STUPŇOVÁNÍ PŘÍSLOVCÍ2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <p className="fw-bold">Slova z videa.</p>
              <div className="fst-italic">
                <p>Hezký VS hezky</p>
                <p>Český VS česky </p>
                <p>Venku je hezky </p>
                <p>Český jazyk </p>
                <p>Český herec </p>
                <p>Český film </p>
                <p>Mluvím česky </p>
                <p>Ruský — rusky </p>
                <p>Ukrajinský — ukrajinsky </p>
                <p>Ukrajinský sportovec </p>
                <p>Mluvím ukrajinsky </p>
                <p>Udělám to ukrajinsky </p>
                <p>Uvařím to ukrajinsky </p>
                <p>To bude rusky </p>
                <p>Hezky česky </p>
                <p>Nakupujte hezky česky! </p>
                <p>Sympatický člověk </p>
                <p>Vypadá sympaticky</p>
                <p className="fw-bold">Trénink:</p>
                <p>V pátek je v kavárně volno.</p>
                <p>Ale ve čtvrtek je volněji.</p>
                <p>Na podzim je chladno.</p>
                <p>Ale v zimě je chladněji. </p>
                <p>V Bulharsku je teplo.</p>
                <p>V Itálii je tepleji.</p>
                <p>Autobus jede rychle.</p>
                <p>Auto jede rychleji.</p>
                <p>Milena se obléká moderně.</p>
                <p>Anna se obléká moderněji.</p>
                <p>Mluvíme hlasitě.</p>
                <p>Kamarádi mluví hlasitěji.</p>
                <p>Cvičím často.</p>
                <p>Moje sestra cvičí častěji.</p>
                <p>Píše zajímavě.</p>
                <p>Ale David píše zajímavěji.</p>
                <p>Nemluvíš přesně.</p>
                <p>Mluv přesněji.</p>
                <p>V restauraci je příjemně.</p>
                <p>Ale doma je příjemněji.</p>
                <p>Kristýna má lepší šaty než Ivana.</p>
                <p>Dneska je venku líp / lépe.</p>
                <p>Karel mluví hůř / hůře než Petr.</p>
                <p>Tady je horší obsluha.</p>
                <p>Ten film je ještě delší.</p>
                <p className="fw-bold">Дополнение:</p>
                <p>Je to jasné? / Je to jasný?</p>
              </div>
            </div>

            {/* Task 4 */}
            <div>
              <p className="fw-bold">
                4. Doplňte do vět náležité tvary komparativu nebo superlativu.
              </p>
              <p>
                Zdá se mi, že mám mnohem (hodně) … práce než dřív. Domluví se
                česky podstatně (dobře) … než on. Vrátili se z dovolené o
                několik dní (brzo) … . Přineste ty materiály (pozdě) … ve středu
                odpoledne! Mimo turistickou sezónu je tam výrazně (levně) … .
                Ten kluk se učí snad čím dál (špatně) … ! Nechcete u nás zůstat
                o chvilku (dlouho) … ? Zvykli si tu (rychle) … ze všech. Ten
                nový učitel vysvětluje gramatiku (srozumitelně) … . Vrací se tam
                stále (často) … .
              </p>

              <div>
                <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                <Collapse in={keys.getValue(4)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      více, lépe, dříve, později, levněji, hůře, déle,
                      nejrychleji, srozumitelněji, častěji.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 5 */}
            <div>
              <p className="fw-bold">
                5. Příslovce dejte na základě kontextu do 2. nebo 3. stupně.
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Je nutno to zkoumat (podrobně) … .
                  &#8594; Je nutno to zkoumat podrobněji.
                </i>
              </p>
              <p>
                1) Je zřejmé, že řadu problémů lze řešit (rychle, levně a
                efektivně) … .
              </p>
              <p>2) Zařízení bude tak (dobře) … využito.</p>
              <p>3) Úkoly je nutno vymezit (konkrétně) … .</p>
              <p>4) Referát musí (úzce) … souviset s hlavním tématem.</p>
              <p>
                5) Rozvoj oboru (výrazně) … brzdí nedostatečné a váznoucí
                sdělování informací.
              </p>
              <p>6) Jeho přednáška byla sestavena (přehledně) … .</p>
              <p>7) (Mnoho) … podniků si to bude muset dobře promyslet.</p>
              <p>8) Tato varianta řešení je relativně (málo) … riskantní.</p>
              <p>
                9) Zavedení tohoto systému většinou trvá (dlouho) … než pět let.
              </p>
              <p>10) (Brzy) … se musí investovat do lidí.</p>
              <p>
                11) Tento systém je schopen (pružně) … zpracovávat potřebná
                statistická data.
              </p>
              <p>12) Úvěr bude muset být splacen (pozdě) … do dvou let.</p>
              <p>13) To je řečeno (zjednodušeně) … .</p>
              <p>
                14) Tyto problémy bude možno (snadno) … vyřešit za 5 až 10 let.
              </p>
              <p>
                15) Firma se chce ještě (hodně) … otevřít potřebám svých
                zákazníků.
              </p>
              <p>16) Bude (dobře) … , když to uděláme sami.</p>
              <div>
                <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                <Collapse in={keys.getValue(5)} timeout={2000}>
                  <div className="fst-italic">
                    <div className="row">
                      <div className="col">
                        <p>1) rychleji, levněji a efektivněji;</p>
                        <p>2) lépe;</p>
                        <p>3) konkrétněji;</p>
                        <p>4) úže;</p>
                        <p>5) výrazněji;</p>
                        <p>6) přehledneji;</p>
                        <p>7) Více;</p>
                        <p>8) méně;</p>
                      </div>
                      <div className="col">
                        <p>9) déle;</p>
                        <p>10) Nejdříve;</p>
                        <p>11) pružněji;</p>
                        <p>12) nejpozději;</p>
                        <p>13) zjednodušeněji;</p>
                        <p>14) snáž (snadněji);</p>
                        <p>15) více;</p>
                        <p>16) lépe.</p>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 6 */}
            <div>
              <p className="fw-bold">
                6. Příslovce dejte na základě kontextu do 2. stupně.
              </p>
              <p>1) Ráno bude chladno.</p>
              <p>2) Mluvte stručně.</p>
              <p>3) Včera přišli pozdě.</p>
              <p>4) Musíte číst hlasitě.</p>
              <p>5) Budu se s ním setkávat často.</p>
              <p>6) Už vypadá klidně.</p>
              <p>7) Musíte mluvit tiše.</p>
              <p>8) Další příklad už vypočítal lehce.</p>
              <p>9) Všichni se tam cítili dobře.</p>
              <p>10) Daleko nebudou moct dojet.</p>
              <p>11) Přistupuje k tomu prakticky.</p>
              <p>12) Udělalo se jí zle.</p>
              <p>13) V zimním semestru studoval pilně.</p>
              <p>14) Měli by si to dobře rozmyslet.</p>
              <p>15) Tento obchod je zařízen moderně.</p>
              <p>16) Neměli byste to už dlouho odkládat.</p>
              <p>17) Prodal to draho.</p>
              <p>18) Sami to dobře vědí.</p>
              <p>19) Dnes je nás tu málo.</p>
              <p>20) Musíte si stoupnout blízko.</p>

              <div>
                <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                <Collapse in={keys.getValue(6)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      1) chladněji; 2) stručněji; 3) později; 4) hlasitěji; 5)
                      častěji; 6) klidněji; 7) tišeji; 8) lehčeji; 9) lépe; 10)
                      Dále; 11) praktičtěji; 12) hůře; 13) pilněji; 14) lépe;
                      15) moderněji; 16) déle; 17) dráž; 18) lépe; 19) míň; 20)
                      blíže.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 7 */}
            <div>
              <p className="fw-bold">
                7. Přídavná jména v závorkách nahraďte příslovci.
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> (hezký) … jsem se prošel.&#8594;{" "}
                  <strong> Hezky</strong>
                  jsem se prošel.
                </i>
              </p>

              <p>1) (určitý) … jsem ho už někde viděl.</p>
              <p>2) (špatný) … jsem si to zapamatoval.</p>
              <p>3) Bude přednášet (anglický) … .</p>
              <p>4) Ten vlak jezdí moc (pomalý) … .</p>
              <p>5) Včera už byla (letní) … oblečena.</p>
              <p>6) Byli překvapeni, jak vypadal (starý) … .</p>
              <p>7) Tvářil se dost (hloupý) … .</p>
              <p>8) Ta tužka píše (červený) … .</p>
              <p>9) Kniha vyšla i (německý) … .</p>
              <p>10) Mluvil příliš (rychlý) … .</p>
              <p>11) Choval se k ní (hrubý) … .</p>
              <p>12) Mluvil tak (tichý) … , že mu nikdo nerozuměl.</p>
              <p>13) Choval se velmi (skromný) … .</p>
              <p>14) Zdálo se mu, že se na něj (milý) … usmála.</p>
              <p>15) Byli (úplný) … spokojeni.</p>
              <p>16) Netvrdí to (bezdůvodný) … .</p>
              <p>17) Netvař se tak (hloupý) … .</p>
              <p>18) Mluvil jen (krátký) … .</p>
              <p>19) Vypadal nějak (divný) … .</p>
              <p>20) To se může (lehký) … stát.</p>
              <div>
                <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                <Collapse in={keys.getValue(7)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      1) Určitě; 2) Špatně; 3) anglicky; 4) pomalu; 5) letně; 6)
                      staře; 7) hloupě; 8) červeně; 9) německy; 10) rychle; 11)
                      hrubě; 12) tiše; 13) skromně; 14) mile; 15) úplně; 16)
                      bezdůvodně; 17) hloupě; 18) krátce; 19) divně; 20) lehce.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 8 */}

            <div>
              <p className="fw-bold">8. Doplňte správné formy do vět.</p>

              <p>
                1) Po vypití bylinkového čaje jsem se cítil ještě (zle, 2) … .
              </p>
              <p>2) Po vystudování se budu mít (dobře, 3) … .</p>
              <p>3) Čekal jsem (dlouho, 2) … , než jsem předpokládal.</p>
              <p>4) Vydělal jsem si (málo, 3) … peněz ze všech.</p>
              <p>5) Princů bylo (mnoho, 2) … , než bylo potřeba.</p>
              <p>6) Přišel jsem (brzy, 2) … , tudíž neočekáván.</p>
              <p>7) Oprava šla (snadno, 2) … , než jsem doufal.</p>
              <p>
                8) Protože jsem malý, šlo mi nošení pytlů (těžce, 2) … než
                vzrostlému kamarádovi.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                <Collapse in={keys.getValue(7)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      1) hůře; 2) nejlépe; 3) déle; 4) nejméně; 5) více; 6)
                      dříve; 7) snadněji; 8) těžčeji.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 9 проверит преподаватель.
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 9 */}
            <div>
              <p className="fw-bold">
                9. Podívejte se na následující obrázky a porovnejte je.
              </p>
              <p>
                <i>
                  <strong>Vzor (obrázek č. 1):</strong> Červené auto je
                  modernější a novější než zelené.
                </i>
              </p>

              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_7/picture_2.jpg"
                alt="picture_2"
                width="100%"
                height="auto"
              />
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 10 проверит преподаватель.
              </p>
              <p>
                <i>
                  Ответы напишите от руки, сфотографируйте и отправьте их на
                  проверку в группу Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 10 */}
            <div>
              <p className="fw-bold">
                10. Podívejte se na další obrazky a porovnejte je. Vymyslete
                alespoň 7 vět.
              </p>

              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_7/picture_3.jpg"
                alt="picture_3"
                width="100%"
                height="auto"
              />
            </div>

            {/* Task 11 */}
            <div>
              <p className="fw-bold">
                11. Poslechněte si následující text a doplňte vynechaná slova.
                Následně odpovězte na otázky podle vlastního názoru.
              </p>

              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_7/Slang+-+D%C3%A1rky+pro+mu%C5%BEe.mp3"
                ></audio>
                <figcaption>
                  <strong>Slang - Dárky pro muže</strong>
                </figcaption>
              </figure>

              <div>
                <p className="fw-bold">
                  Text. Nejlepší tipy na dárky pro muže pro rok 2021.
                </p>
                <p>
                  Najít … dárek pro muže je jeden z … oříšků pro ženy. Známe
                  muže, kteří mají všechno. Také známe ty, kteří nechtějí dostat
                  nic. To je snad ještě … . Jsou i takoví, které potěší skoro
                  cokoliv. Tak co jim koupit? Inspirujte se tipy na dárky, které
                  oceníte, hledáte-li něco zajímavého a lehce … v kategorii
                  dárků pro svého manžela či přítele.
                </p>
              </div>

              <div>
                <p className="fw-bold">Kožená peněženka na míru.</p>
                <p>
                  Darujte muži jeden z … originálů, který mu vydrží dlouhá léta.
                  Překvapte ho peněženkou podle jeho vkusu s monogramem. Do
                  peněženky na přání umí vyrobit i logo, speciální znak nebo
                  erb. Takové … peněženky potěší každého.
                </p>
              </div>
              <div>
                <p className="fw-bold">Opasek s jedinečným zapínáním.</p>
                <p>
                  Originální opasek s zapínáním REDFIR, je … dárek pro muže.
                  Vyberte si barvu opasku a design spony přesně podle vašich
                  preferencí.
                </p>
              </div>
              <div>
                <p className="fw-bold">Stylová vůně do auta.</p>
                <p>
                  Muže potěší designová vůně do auta. Praktický dárek pro
                  každého muže — řidiče. Oblíbená vůně do auta je voňavý panáček
                  z kolekce vůní Mr&Mrs Fragrance od Italského výrobce. Další
                  krásné vůně do auta v minimalistickém designu jsou od italské
                  značky Culti, která patří k … mezi osvěžovači vzduchu.
                </p>
              </div>
              <div>
                <p className="fw-bold">Dokovací stanice.</p>
                <p>
                  Dokovací stanice je super designový doplněk a zároveň jedna z
                  … věcí. Už nikdy nebude přemýšlet, kde si odložil mobil nebo
                  hodinky. Vyberte si nabíjecí stanici, která se bude líbit
                  nejvíce. Už žádné kabely a vždy připravená k použití. … a …
                  než kdy předtím.
                </p>
              </div>
              <div>
                <p className="fw-bold">Otázky:</p>
                <p>1) Jaký dárek pro muže je podle vás nejvhodnější?</p>
                <p>
                  2) Který dárek byste svému manželovi / otci / synovi nikdy
                  nekoupili?
                </p>
                <p>
                  3) Pro koho je podle vás těžší vybrat dárek — pro muže či
                  ženy?
                </p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(8)}>Klíče</button>
                <Collapse in={keys.getValue(8)} timeout={2000}>
                  <div className="fst-italic">
                    <p>nejvhodnější, největších, horší, originálnějšího.</p>

                    <p>
                      <span className="fw-bold">Kožená peněženka na míru </span>{" "}
                      <br />
                      nejjedinečnějších, kvalitnější.{" "}
                    </p>
                    <p>
                      <span className="fw-bold">
                        KOpasek s jedinečným zapínáním
                      </span>{" "}
                      <br />
                      elegantnější.{" "}
                    </p>
                    <p>
                      <span className="fw-bold">Stylová vůně do auta</span>{" "}
                      <br />
                      nejznámějším.{" "}
                    </p>
                    <p>
                      <span className="fw-bold">Dokovací stanice</span> <br />
                      nejpraktičtějších, Stylovější, praktičtější.{" "}
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
            {/* Task 12.1 */}
            <div>
              <p className="fw-bold">
                12.1. Přečtěte si text a následně plňte úkoly.
              </p>
              <p className="fw-bold">
                Text. «NEJ» stavby moderní architektury v České republice.
              </p>

              <div>
                <p className="fw-bold">Nejhezčí.</p>
                <p>
                  Čeští architekti hodnotí budovu Národní technické knihovny
                  jako nejhezčí a zároveň nejvíce funkční. Knihovna stojí od
                  roku 2009 v Praze 6 a je součást technické univerzity (ČVUT).
                  Má šest pater a velký vnitřní prostor, kde jsou vtipné kresby
                  rumunského výtvarníka. Dalšími hezkými moderními stavbami jsou
                  podle architektů Tančící dům a dostavba kláštera Emauzy.
                  Tančící dům je inspirovaný slavným tanečním párem Ginger
                  a Fred. Betonová střecha kláštera Emauzy navazuje tvarem na
                  gotickou architekturu a vytváří ideální spojení starého
                  a nového.
                </p>
              </div>
              <div>
                <p className="fw-bold">Nejprogresivnější.</p>
                <p>
                  Horský hotel a televizní vysílač na vrcholu hory Ještěd
                  nedaleko od Liberce se považuje za nejprogresivnější
                  architekturu. Dokončili ho v roce 1973 a je vysoký 100 metrů.
                  Má jedinečný tvar hyperboloidu a kruhový půdorys. Také vyniká
                  harmonickým spojením s přírodou.
                </p>
              </div>
              <div>
                <p className="fw-bold">Nejošklivější.</p>
                <p>
                  Na stránce VirtualTourist.com byla Žižkovská televizní věž
                  druhá v žebříčku nejošklivějších staveb světa. Jako první se
                  umístilo divadlo v americkém Baltimoru. Žižkovská věž je
                  nejvyšší stavba v Praze, má 206 metrů. Od roku 1992 stojí na
                  Žižkově a v roce 2000 na ni umístili «miminka», sochy Davida
                  Černého. V noci je nasvícena v barvách české vlajky.
                </p>
              </div>
              <div>
                <p className="fw-bold">Nejvyšší.</p>
                <p>
                  Bílo-oranžová AZ Tower je nejvyšší budova v České republice.
                  Jedná se o ekologickou a ekonomicky úspornou budovu, která
                  dominuje jižní části Brna od roku 2013. Měří 111 metrů a má 30
                  pater. Najdeme tam nejen kanceláře a obchodní centrum, ale i
                  byty. Druhý nejvyšší dům City Tower je o pouhé 2 metry nižší a
                  nachází se na pražské Pankráci. V Praze se plánují další
                  mrakodrapy. Problémem ale je, že vysoké domy můžou ničit
                  panorama města, díky kterému je Praha zapsaná na seznamu
                  památek UNESCO.
                </p>
              </div>
            </div>

            {/* Task 12.2 */}
            <div>
              <p className="fw-bold">12.2. Doplňte tabulku podle textu.</p>

              <table>
                <tr>
                  <th>Adjektivum</th>
                  <th>Komparativ</th>
                  <th>Superlativ</th>
                </tr>
                <tr>
                  <td>hezký</td>
                  <td>hezčí</td>
                  <td></td>
                </tr>
                <tr>
                  <td>ošklivý</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>nižší</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>nejvyšší</td>
                </tr>
                <tr>
                  <td></td>
                  <td>progresivnější</td>
                  <td></td>
                </tr>
                <tr>
                  <td>starý</td>
                  <td>starší</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>nejmladší</td>
                </tr>
              </table>
            </div>

            {/* Task 12.3 */}
            <div>
              <p className="fw-bold">12.3. Doplňte věty.</p>
              <p>1) Divadlo v Baltimoru je … než Žižkovská věž.</p>
              <p>2) AZ Tower je o … metry … než City Tower.</p>
              <p>3) City Tower je o … metrů … než Žižkovská věž.</p>
              <p>4) Žižkovská věž je … stavba v Praze.</p>
              <p>5) Národní technická knihovna je … než Žižkovská věž.</p>
              <p>6) Klášter Emauzy je … než jeho střecha.</p>
              <p>7) Tančící dům je … než divadlo v Baltimoru.</p>
              <p>8) Žižkovský vysílač je o … let … než vysílač Ještěd.</p>

              <div>
                <button onClick={() => keys.toggleKey(9)}>Klíče</button>
                <Collapse in={keys.getValue(9)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      1) ošklivější; 2) dva, vyšší; 3) devadesát sedm, nižší; 4)
                      nejvyšší; 5) hezčí; 6) starší; 7) hezčí; 8) devatenáct,
                      mladší.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 13 */}
            <div>
              <p className="fw-bold">
                13. Poslechněte si dialog mezi Tomem a Marinou a doplňte
                vynechaná slova.
              </p>

              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_7/CD2_track_10+by+L%D0%BDda+Hol%D0%B1.mp3"
                ></audio>
                <figcaption>
                  <strong>CD2_track_10 by Lнda Holб</strong>
                </figcaption>
              </figure>

              <p className="fw-bold">Dialog. Tom a Marina.</p>
              <p>
                <strong>Marina:</strong> Ach jo, mám dojem, že jsem zase … !
                Proč … trochu … a … ? Taky bych chtěla mít … oči a … nos.
              </p>
              <p>
                <strong>Tom:</strong> Prosím tě, Marino, … skvěle. Jsi ta … … na
                světě! Ale teď už, prosím tě, pojď!
              </p>

              <div>
                <button onClick={() => keys.toggleKey(10)}>Klíče</button>
                <Collapse in={keys.getValue(10)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      ztloustla, nejsem, štíhlejší, vyšší, větší, menší,
                      vypadáš, nejkrásnější holka.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            <div>
              <p className="fw-bold">
                Так же как и в прошлых лекциях мы подобрали для вас полезные
                ресурсы на просторах YouTube.
              </p>
            </div>

            {/* Task 14 */}
            <div>
              <p className="fw-bold">
                14. Poslechněte si českou písničku a doplňte vynechaná slova.
              </p>
              <a href="https://youtu.be/5TxkeXwAb4Y">Jaroslav Hutka — Náměšť</a>

              <p>
                Krásný je vzduch <br />… je moře <br />
                Co je … <br />
                Usměvavé tváře <br />
                Pevný je stůl <br /> … je hora <br />
                Co je … <br /> Ta člověčí víra <br />
                Pustá je … <br /> I nebeské dálky <br />
                Co je … <br /> Žít život bez lásky <br /> Mocná je zbraň <br />{" "}
                … je právo <br /> Co je … <br /> … slovo <br /> Velká je zem{" "}
                <br /> Šplouchá na ní voda <br /> Co je však … <br /> Ta lidská
                …
              </p>

              <div>
                <button onClick={() => keys.toggleKey(11)}>Klíče</button>
                <Collapse in={keys.getValue(11)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      krásnější, nejkrásnější, pevnější, nejpevnější, poušť,
                      nejpustější, mocnější, nejmocnější, pravdomluvné,
                      největší, svoboda.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 15 */}
            <div>
              <p className="fw-bold">
                15. Podívejte se na následující video o vodopádech a doplňte
                vynechaná slova.{" "}
              </p>

              <a href="https://youtu.be/WB4UFpaGde8">
                TOP 10 NEJKRÁSNĚJŠÍ VODOPÁDY NA SVĚTĚ
              </a>

              <div>
                <p className="fw-bold">(00:00-00:25)</p>
                <p>
                  «Vítejte u dnešního videa. … patří mezi opravdu … přírodní
                  fenomény, kdy padající voda, bouřlivý rachot a nezřídka i
                  oblouk … vám ukáží pravou sílu … . V dnešním videu si
                  procestujeme ty … vodopády na světě. Tak se … usaďte a
                  začínáme … .»
                </p>
              </div>
              <div>
                <p className="fw-bold">(03:25-04:00)</p>
                <p>
                  «Niagarské vodopády jsou nejspíš jedny z … vodopádů … , které
                  každoročně … desítky milionů turistů. Je to souhrnné označení
                  pro celkem tři sousedící vodopády, kterými jsou … Podkova,
                  Americký vodopád a Nevěstin závoj. Ačkoliv jsou vysoké … 51
                  metrů, vychrlí každou minutu … dvakrát … vody než Viktoriiny
                  vodopády v Zimbabwe.»
                </p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(12)}>Klíče</button>
                <Collapse in={keys.getValue(12)} timeout={2000}>
                  <div className="fst-italic">
                    <div>
                      <p className="fw-bold">(00:00-00:25)</p>
                      <p>
                        Vodopády, fascinující, duhy, přírody, nejkrásnější,
                        pohodlně.
                      </p>
                    </div>
                    <div>
                      <p className="fw-bold">(03:25-04:00)</p>
                      <p>
                        nejznámějších, na světě, přilákají, nejznámější,
                        pouhých, dokonce, více.
                      </p>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 16 */}
            <div>
              <p className="fw-bold">
                16. Přečtěte si následující úryvek z jedné z nejznámějších
                pohádek a odpovězte na otázky.
              </p>

              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_7/picture_4.jpg"
                alt="picture_4"
                width="100%"
                height="auto"
              />

              <p className="fw-bold">Otázky</p>
              <p>1) Jaké uši měl vlk v porovnání s babičkou?</p>
              <p>2) Jaké oči měl vlk v porovnání s babičkou?</p>
              <p>3) Jakou pusu měl vlk v porovnání s babičkou?</p>

              <div>
                <button onClick={() => keys.toggleKey(13)}>Klíče</button>
                <Collapse in={keys.getValue(13)} timeout={2000}>
                  <div className="fst-italic">
                    <p>Vlk měl větší uši, oči a pusu než babička.</p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="fw-bold bg-warning">Tip pro cvičení.</p>
          <p className="fw-bold">
            Po rozkliknutí následujících odkazů naleznete online cvičení dané
            gramatiky s automatickou kontrolou:
          </p>

          <a href="https://www.umimecesky.cz/vpisovacka-stupnovani-pridavnych-jmen-1-uroven/641">
            A) Stupňování přídavných jmen (lehké)
          </a>
          <a href="https://www.umimecesky.cz/vpisovacka-stupnovani-pridavnych-jmen/880">
            B) Stupňování přídavných jmen (střední)
          </a>
          <a href="https://www.umimecesky.cz/vpisovacka-stupnovani-prislovci-2-uroven/593">
            C) Stupňování příslovcí (střední)
          </a>
        </div>
      </div>
      <div className="text-center">
        <p className="fw-bold">
          На этом пока всё. Увидимся на следующем уроке!
        </p>
      </div>
    </div>
  );
};

export default LectureSeven;
