import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const LectureTwelve: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(12);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">12. lekce</h1>
        <p> Počasí </p>
        <Link to="/admin/lectures/11">Предыдущий урок</Link>
        <Link to="/admin/lectures/13">Следующий урок</Link>
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <p>
          В этой лекции нас ждёт новая тема <strong>«Počasí»</strong>,
          упражнения, устная часть, чтение и прослушивание.
        </p>
        <p>
          Как всегда напоминаем, что ВАЖНО всё повторять вслух, после того, как
          вы поняли о чём речь.
        </p>
        <p>Разрабатывайте речевой аппарат!</p>
      </div>

      {/* POČASÍ */}
      <div>
        <h2>POČASÍ</h2>
        <div>
          <p className="fw-bold">
            Pro procvičování slovní zásoby jsme připravili pro Vás kartičky na
            Quizlet:
          </p>

          <a href="https://quizlet.com/_cw9xmw?x=1jqt&i=3zq2hw" target="blank">
            OTEVŘÍT KARTIČKY
          </a>
        </div>
        <div>
          <p className="fw-bold bg-warning">
            Скачайте файл Okolní prostředí a počasí - Slovní zásoba.
          </p>
          <a
            href="https://czecha2bucket.s3.amazonaws.com/lekce_12/Slang+-+Okoln%C3%AD+prost%C5%99ed%C3%AD+a+po%C4%8Das%C3%AD.pdf"
            target="blank"
          >
            Slang - Okolní prostředí a počasí{" "}
          </a>
        </div>
        <div>
          <p className="fw-bold bg-warning">
            Послушайте аудиофайлы Počasí - Slovní zásoba.
          </p>

          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_12/1.%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.mp3"
            ></audio>
            <figcaption>
              <strong>1.Природа</strong>
            </figcaption>
          </figure>

          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_12/2.%D0%A4%D0%B0%D1%83%D0%BD%D0%B0.mp3"
            ></audio>
            <figcaption>
              <strong>2.Фауна</strong>
            </figcaption>
          </figure>

          <figure>
            <audio
              controls
              src="https://czecha2bucket.s3.amazonaws.com/lekce_12/3.%D0%9F%D0%BE%D0%B3%D0%BE%D0%B4a.mp3"
            ></audio>
            <figcaption>
              <strong>3.Погодa</strong>
            </figcaption>
          </figure>
        </div>

        <div>
          <p className="fw-bold bg-warning">Выполните задания с № 1 по № 9</p>

          {/* Task 1 */}
          <div>
            <p className="fw-bold">1. Doplňte text podle smyslu.</p>

            <div className="row">
              <div className="col">
                <p>1) únor</p>
                <p>2) březen</p>
                <p>3) leden</p>
                <p>4) roční období</p>
                <p>5) duben</p>
                <p>6) červen</p>
                <p>7) červenec</p>
                <p>8) jaro</p>
                <p>9) léto</p>
              </div>
              <div className="col">
                <p>10) podzim</p>
                <p>11) zima</p>
                <p>12) květen</p>
                <p>13) střídat se</p>
                <p>14) srpen</p>
                <p>15) září</p>
                <p>16) listopad</p>
                <p>17) říjen</p>
                <p>18) prosinec</p>
              </div>
            </div>
            <p>
              Rok má čtyři … … , která … po sobě … . Jsou to: … , … , … , … .
              Jarní měsíce jsou … , … , … . Letní měsíce jsou … , … , … .
              Podzimní měsíce jsou … , … a … . Zimní měsíce jsou … , … , … .
            </p>

            <div>
              <button onClick={() => keys.toggleKey(1)}>Klíče</button>
              <Collapse in={keys.getValue(1)} timeout={2000}>
                <div className="fst-italic">
                  <p>
                    roční období, se, střídají, březen, duben, květen, červen,
                    jaro, léto, podzim, zima, červenec, srpen, září, říjen,
                    listopad, prosinec, leden, únor
                  </p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 2.1 */}
          <div>
            <p className="fw-bold`">
              2.1. Poslechněte si text a doplňte chybějící slova.
            </p>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_12/Ro%C4%8Dn%C3%AD+obdob%C3%AD.mp3"
              ></audio>
              <figcaption>
                <strong>Roční období</strong>
              </figcaption>
            </figure>
            <p className="fw-bold">Roční období</p>
            <p>
              … … začíná být … . … stromy a první jarní květiny. Na zahrádce …
              sazeničky a … … . Slavíme Velikonoce.
            </p>
            <p>
              … … je už teplo, … sluníčko. … a na zahrádce kvetou květiny.
              Koupeme se a … , jezdíme na výlety. Děti mají prázdniny.
            </p>
            <p>
              … … často … a … … , ze stromů … listí. V sadech … ovoce. … … ,
              chodíme do lesa sbírat … a … ovoce v sadech. Dětem začíná škola.
            </p>
            <p>
              … … je chladno, … … a … . Stromy jsou bez listí. Lyžujeme,
              sáňkujeme, … a … … . Slavíme Vánoce.
            </p>

            <div>
              <button onClick={() => keys.toggleKey(2)}>Klíče</button>
              <Collapse in={keys.getValue(2)} timeout={2000}>
                <div className="fst-italic">
                  <p>
                    Na jaře, teplo, Kvetou, sázíme, sejeme semínka, V létě,
                    svítí, Na louce, opalujeme, Na podzim, prší, fouká vítr,
                    opadává, dozrává, Pouštíme draky, houby, sklízíme, V zimě,
                    padá sníh, mrzne, bruslíme, stavíme sněhuláky.
                  </p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 2.2 */}
          <div>
            <p className="fw-bold">
              2.2. Procvičte si ještě jednou předložky, které doplňte do vět.
            </p>
            <div>
              <p>1) … podzim odlétají ptáci. </p>
              <p>2) … létě jezdíme stanovat.</p>
              <p>3) … zimě bobujeme.</p>
              <p>4) … jaře kvetou sněženky.</p>
            </div>
            <div>
              <button onClick={() => keys.toggleKey(3)}>Klíče</button>
              <Collapse in={keys.getValue(3)} timeout={2000}>
                <div className="fst-italic">
                  <p>1) na; 2) v; 3) v; 4) na</p>
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
              Внимание! Задание № 3 проверит преподаватель.
            </p>
            <p>
              <i>
                Ответы напишите от руки, сфотографируйте и отправьте их на
                проверку в группу Telegram c преподавателем или с потоком.
              </i>
            </p>
          </div>
          <p className="text-danger fw-bold">
            <i>Prosím, pište čitelně.</i>
          </p>

          {/* Task 3 */}
          <div>
            <p className="fw-bold">
              3. Pod každý obrázek doplňte slovní spojení z nabídky a pak
              vymyslete s těmito slovy věty.
            </p>
            <p>
              <i>
                <strong>Vzor:</strong> № 20 — foukat (vítr fouká) &#8594; Kdyby
                foukal silný vítr, tak bych si vzala šálu.
              </i>
            </p>
            <div>
              <p className="fw-bold">Nabídka:</p>
              <div className="col">
                <div className="row">
                  <p>1) foukat (vítr fouká)</p>
                  <p>2) svítit (sluníčko svítí)</p>
                  <p>3) pouštět draka</p>
                  <p>4) slavit Velikonoce</p>
                  <p>5) pršet</p>
                  <p>6) sklízet ovoce</p>
                  <p>7) opadávat (listí opadává)</p>
                  <p>8) sázet semínka</p>
                  <p>9) mrznout</p>
                  <p>10) bruslit</p>
                </div>
                <div className="row">
                  <p>11) lyžovat</p>
                  <p>12) sněžit (sníh padá)</p>
                  <p>13) kvést (stromy kvetou)</p>
                  <p>14) sáňkovat</p>
                  <p>15) slavit Vánoce</p>
                  <p>16) koupat se</p>
                  <p>17) sbírat houby</p>
                  <p>18) stavět sněhuláka</p>
                  <p>19) opalovat se</p>
                  <p>20) stanovat</p>
                </div>
              </div>
            </div>

            <img
              src="https://czecha2bucket.s3.amazonaws.com/lekce_12/picture_1.jpg"
              alt="picture_1"
              width="100%"
              height="auto"
            />
          </div>

          {/* Task 4 */}
          <div>
            <p className="fw-bold">
              4. Podívejte se na následující video a do textu doplňte vynechaná
              z úryvků slova.
            </p>

            <div>
              <a
                href="https://www.youtube.com/watch?v=LQFa42gCteY"
                target="blank"
              >
                Předpověď počasí
              </a>
              <p className="fw-bold">(01:03 - 1:15)</p>
              <p>
                «Ta by měla být … , místy pak … . Teploty nám … na třináct až …
                stupňů. Ovšem na … se budou pohybovat okolo patnácti. Vítr pak
                povane … , a to od severozápadu, rychlostí dva až pět metrů za
                vteřinu.»
              </p>
              <p className="fw-bold">(01:31 - 01:38)</p>
              <p>
                «No a tady už máme pohled na … , který nás čeká během zítřejšího
                dne, a to … v šest hodin a jedenáct minut.»
              </p>

              <div>
                <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                <Collapse in={keys.getValue(4)} timeout={2000}>
                  <div className="fst-italic">
                    <p className="fw-bold">(01:03 - 1:15)</p>
                    <p>polojasná, oblačná, klesnou, devět, jihu, mírný.</p>
                    <p className="fw-bold">(01:31 - 01:38)</p>
                    <p>úplněk, konkrétně.</p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>

          {/* Task 5 */}
          <div>
            <p className="fw-bold">
              5. Poslechněte si následující písničku a doplňte vynechaná slova.
            </p>
            <p>
              Abyste trénovali výslovnost a český přízvuk, pokuste si písničku i
              zazpívat.
            </p>
            <div>
              <a
                href="https://www.youtube.com/watch?v=DKTadWhbU7g"
                target="blank"
              >
                Marek Ztracený & Marta Jandova — Počasí
              </a>

              <div>
                <p>My dva jsme zkrátka jako … ,</p>
                <p>chvíli je … a pak náhle se vyčasí.</p>
                <p>My dva jsme zkrátka jako noc a den,</p>
                <p>Bloudíme ve tmě jak hledáme cestu ven.</p>
                <br />
                <p>Čas od času přejde přes oblohu mrak,</p>
                <p>Na chvíli se zatáhne a my dva se hledáme.</p>
                <p>Jako dva … který, spolu žijí,</p>
                <p>Slunce je živí a noc zabíjí.</p>
                <br />
                <p>Tak či tak každá bouřka musí stejně jednou … ,</p>
                <p>A všechno může tak jak bylo zůstat.</p>
                <p>Tak či tak ať to mezi námi hoří nebo … ,</p>
                <p>Nad každým … je modré nebe.</p>
                <br />
                <p>Tak či tak každá bouřka musí stejně jednou ustát,</p>
                <p>A všechno může tak jak bylo zůstat.</p>
                <p>Tak či tak ať to mezi námi … nebo zebe,</p>
                <p>Nad každým mrakem je modré nebe.</p>
                <br />
                <p>My dva jsme zkrátka jako počasí,</p>
                <p>… nevychází ať hlásí co hlásí.</p>
                <p>My dva jsme zkrátka jako … a … ,</p>
                <p>To co zrovna nemáš to vždy nejvíc chceš.</p>
                <br />
                <p>V … teče voda studená,</p>
                <p>jak v našich hlavách a odnáší co nemá.</p>
                <p>Plujeme po moři na jedné lodi,</p>
                <p>Čas od času nás … do vln shodí.</p>
                <br />
                <p>Tak či tak každá bouřka musí stejně jednou ustát,</p>
                <p>A všechno může tak jak bylo … .</p>
                <p>Tak či tak ať to mezi námi hoří nebo zebe,</p>
                <p>Nad každým mrakem je modré … .</p>
                <br />
              </div>

              <div>
                <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                <Collapse in={keys.getValue(5)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      počasí, bouřka, stíny, ustát, zebe, mrakem, hoří,
                      Předpověď, sucho, déšť, potoce, vítr, zůstat, nebe
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>

          {/* Task 6.1 */}
          <div>
            <p className="fw-bold">
              6.1. Podívejte se na jeden díl dětské pohádky Šmoulové a pak
              pracujte s videem.
            </p>
            <a
              href="https://www.youtube.com/watch?v=BWWt8-kEIcs"
              target="blank"
            >
              Stroj na Šmoulení Počasí • Šmoulové
            </a>
          </div>

          {/* Task 6.2 */}
          <div>
            <p className="fw-bold">
              6.2. Doplňte vynechaná slova a seřaďte (расставьте по порядку)
              následující dialogy tak, jak jdou po sobě ve videu.
            </p>
            <div>
              <p className="fw-bold">(01:19 — 01:40)</p>
              <p>a) «U Šmouly! Vždyť prší!»</p>
              <p>b) «Dnes je velký den! … Šmoulí piknik.»</p>
              <p>c) «… , když umyju svůj vozík, začne pršet!»</p>
              <p>d) «Nemám rád … .»</p>
              <p>e) «Neboj, Šmoulinko! Pomůžu ti. Jéééé!»</p>
              <p>f) «No, to ti teda … děkuju, Nešiko!»</p>
              <p>g) «Ohh, a všechno … mi … .»</p>
            </div>

            <div>
              <button onClick={() => keys.toggleKey(6)}>Klíče</button>
              <Collapse in={keys.getValue(6)} timeout={2000}>
                <div className="fst-italic">
                  <p>
                    1) — b) «Dnes je velký den! <strong>Každoroční</strong>{" "}
                    Šmoulí piknik.»
                  </p>
                  <p>2) — a) «U Šmouly! Vždyť prší!»</p>
                  <p>
                    3) — d) «Nemám rád <strong>déšť.</strong>»
                  </p>
                  <p>
                    4) — c) <strong>«Pokaždé,</strong> když umyju svůj vozík —
                    začne pršet!»
                  </p>
                  <p>
                    5) — g) «Ohh, a všechno <strong>prádlo</strong> mi{" "}
                    <strong>zmokne</strong>.»
                  </p>
                  <p>6) — e) «Neboj Šmoulinko! Pomůžu ti. Jéééé!»</p>
                  <p>
                    7) — f) «No, to ti teda <strong>pěkně</strong> děkuju,
                    Nešiko!»
                  </p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 6.3 */}
          <div>
            <p className="fw-bold">
              6.3. Podívejte se na úryvek videa a opravte chyby v následujících
              větách.
            </p>
            <div>
              <p className="fw-bold">(07:07 — 07:29)</p>
              <p>«Ufff, to se ale najednou udělalo takové chladno.»</p>
              <p>
                «Aaah, hrozné počasí, abychom se naložili do potoka. Tak pojďte.
                Schválně, kdo tam bude první!»
              </p>
              <p>«Heej, to jezero je ledové.» «Moje nohy taky!»</p>
              <p>
                «No, podívejte se na to z té lepší stránky — můžeme si
                zasáňkovat!»
              </p>
            </div>

            <div>
              <button onClick={() => keys.toggleKey(7)}>Klíče</button>
              <Collapse in={keys.getValue(7)} timeout={2000}>
                <div className="fst-italic">
                  <p>
                    «Ufff, to se ale najednou udělalo takové{" "}
                    <strong>horko</strong>.»
                  </p>
                  <p>
                    «Aaah, <strong>báječné</strong> počasí, abychom se naložili
                    do <strong>jezera</strong>. Tak pojďme.»
                  </p>
                  <p>
                    «Heej, to jezero je <strong>zamrzlé</strong>!»{" "}
                    <strong>«Můj zadek</strong>
                    taky!»
                  </p>
                  <p>
                    «No, podívejte se na to z té lepší stránky — můžete si
                    <strong>zabruslit!»</strong>
                  </p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 7 */}
          <div>
            <p className="fw-bold">
              7. Podívejte se na následující video a doplňte vynechané části
              textu.
            </p>
            <p>Venda a Fráňa si dělají srandu z pranostik a vymýšlejí si je.</p>
            <a
              href="https://www.youtube.com/watch?v=2m5RcqalDn8"
              target="blank"
            >
              Venda a Fráňa: Pranostiky
            </a>

            <p>«Vopičková běží, tak to asi … .»</p>
            <p>«Ředitel má velký … , v … nebude co jíst.»</p>
            <p>«Když jde Venda ráno … , … už čekají nás.»</p>
            <div>
              <button onClick={() => keys.toggleKey(8)}>Klíče</button>
              <Collapse in={keys.getValue(8)} timeout={2000}>
                <div className="fst-italic">
                  <p>sněží, hlad, jídelně, včas, prázdniny</p>
                </div>
              </Collapse>
            </div>
          </div>

          <div>
            <p className="fw-bold bg-warning">Уточнение от Дарьи.</p>
            <div className="fst-italic">
              <p className="text-danger fw-bold">
                S každým jazykem jsou jistěže spojené nejrůznější pranostiky.
              </p>
              <p className="text-danger fw-bold">
                Pranostiky jsou slovní spojení (předpovědi), týkající se
                určitých dnů či období, hlavně ve vztahu k zemědělství a počasí.
              </p>
              <p className="fw-bold">
                Z nejčastěji používaných českých pranostik, které jsou spojené s
                počasím, jsou, například:
              </p>
              <p>V únoru sníh a led — v létě nanesou včely med.</p>
              <p>Teplý únor — studené jaro, teplé léto.</p>
              <p>Na Nový rok déšť — o Velikonocích sníh.</p>
              <p>Když začátkem ledna krásně, bodou na jaře bouřky časně.</p>
              <p className="fw-bold">
                Pokud vás české pranostiky o počasí zaujali, můžete si je jich
                více přečíst na následující stránce:
              </p>
              <a
                href="https://www.treking.cz/sluzby/pranostiky-pocasi.htm#:~:text=Je%2Dli%20%C3%BAnor%20m%C3%ADrn%C3%BD%2C%20rok,%2D%20studen%C3%A9%20jaro%2C%20tepl%C3%A9%20l%C3%A9to."
                target="blank"
              >
                Pranostiky
              </a>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#aae096",
            }}
          >
            <p className="fw-bold">
              Внимание! Задания № 8.1; № 8.2; № 8.3 выполняются по желанию.
            </p>
          </div>

          <p className="fw-bold text-danger">
            <i>Nezapomeňte si zapnout titulky, pokud je to potřeba.</i>
          </p>
          {/* Task 8.1 */}
          <div>
            <p className="fw-bold">
              8.1. Podívejte se na následující video a odpovězte na otázky.
            </p>
            <div>
              <a
                href="https://www.youtube.com/watch?v=aLYGaGCc9TQ"
                target="blank"
              >
                Meteokuchařka - Duha
              </a>
              <p>1) Kde všude je možné uvidět duhu?</p>
              <p>
                2) Kdy je možné většinou pozorovat duhu v České republice? Proč?
              </p>
            </div>
            <div>
              <button onClick={() => keys.toggleKey(9)}>Klíče</button>
              <Collapse in={keys.getValue(9)} timeout={2000}>
                <div className="fst-italic">
                  <p>
                    1) Například na kapkách rosy nebo ve stříkajících fontánách
                  </p>
                  <p>
                    2) Většinou pozdě odpoledne nebo večer, jelikož slunce svítí
                    už nízko
                  </p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 8.2 */}
          <div>
            <p className="fw-bold">
              8.2. Další zajímavá videa, která by se vám mohla líbit.
            </p>
            <a
              href="https://www.youtube.com/watch?v=LfGw17Soy60"
              target="blank"
            >
              1) Meteokuchařka - Sněhové vločky
            </a>
            <a
              href="https://www.youtube.com/watch?v=9SZkS0vNXeI"
              target="blank"
            >
              2) Meteokuchařka - Nejčastější mýty o počasí
            </a>
            <a
              href="https://www.youtube.com/watch?v=3EmkXf4bG2c"
              target="blank"
            >
              3) Meteokuchařka - Vítr
            </a>
          </div>

          {/* Task 8.3 */}
          <div>
            <p className="fw-bold">8.3. Co si myslíš o tomto videu?</p>
            <a
              href="https://www.youtube.com/watch?v=otHoYjOHSBU"
              target="blank"
            >
              Počasí
            </a>
          </div>

          {/* Task 9.1 */}
          <div>
            <p className="fw-bold">
              9.1. Poslechněte si nahrávku textu a doplňte vynechaná slova.
            </p>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_12/Velkou+%C4%8D%C3%A1st+USA+zasype+sn%C3%ADh.mp3"
              ></audio>
              <figcaption>
                <strong>Velkou část USA zasype sníh</strong>
              </figcaption>
            </figure>

            <p>Velkou část USA zasype sníh, teploty klesnou i pod −20 °C.</p>
            <p>
              … ve střední Evropě zažíváme v posledních dnech … … … , severní
              Ameriku čeká vlna … … počasí, která přinese rekordně … … . Jde o
              zatím nejvýraznější příliv arktického vzduchu této sezóny, který
              pro tamní obyvatele znamená spíše lednové než říjnové teploty.
            </p>
            <p>
              Studené počasí dorazí ve dvou vlnách. Ta první už přišla, za
              studenou frontou včera, respektive v noci … … . Zejména … východně
              od Skalistých hor zažila až 30stupňové … , studený vzduch ale
              zasáhl velkou část amerického středozápadu, Velké pláně a pronikl
              až do Colorada nebo na sever Texasu. Asi nejvýrazněji se ale
              arktický … projevil ve státech Montana a Wyoming. Ve městě Glasgow
              (v Montaně) … dnes ráno teplota až … … °C, což je o 5 stupňů méně
              než dosavadní rekord pro 23. října.
            </p>
            <div>
              <button onClick={() => keys.toggleKey(10)}>Klíče</button>
              <Collapse in={keys.getValue(10)} timeout={2000}>
                <div className="fst-italic">
                  <p>
                    Zatímco, nadprůměrné teplé dny, mimořádně studeného, nízké
                    teploty, na dnešek, oblast, ochlazení, vzduch, klesla, mínus
                    šestnáct
                  </p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 9.2 */}
          <div>
            <p className="fw-bold">
              9.2. Poslechněte si text a doplňte správně slova z nabídky.{" "}
            </p>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_12/Arktida+letos+zamrz%C3%A1+rekordn%C4%9B+pomalu.mp3"
              ></audio>
              <figcaption>
                <strong>Arktida letos zamrzá rekordně pomalu</strong>
              </figcaption>
            </figure>
            <div>
              <p className="fw-bold text-danger">
                <i>Formy slov neměňte.</i>
              </p>

              <p className="fw-bold">Nabídka:</p>

              <div className="row">
                <div className="col">
                  <p>fakt</p>
                  <p>letos</p>
                  <p>oceán</p>
                  <p>led</p>
                  <p>vysoké</p>
                </div>
                <div className="col">
                  <p>drží</p>
                  <p>zamrzání</p>
                  <p>klesaly</p>
                  <p>pokryté</p>
                </div>
              </div>
              <p>
                Arktida letos zamrzá rekordně pomalu, řada míst je stále zcela
                bez ledu.
              </p>
              <p>
                Severní ledový … , resp. Arktida jsou oblastmi, kde má
                klimatická změna poměrně dramatické projevy. Aktuálně se to
                podepisuje na velmi pomalém … mořské vody. Na mnoha místech se
                dokonce i teď na konci října ještě nevytvořil žádný … . Stalo se
                tak poprvé v historii pozorování. Málo mořského ledu bylo v
                Arktidě ale i během uplynulého léta, které se stalo létem s
                druhým nejnižším rozsahem ledu od začátku měření, rekord zatím …
                rok 2012. Jenže během letošního října se právě kvůli pomalému
                tempu zamrzání oceánu dostal rok 2020 aktuálně na první místo s
                minimem ledu. Situace je zarážející zejména s ohledem na … , že
                během října se přitom zvyšuje tempo, kterým led narůstá. To se
                ale … neděje, naopak denní přírůstky po část října spíš … .
              </p>
              <p>
                Důvodem pomalého zaledňování jsou nadprůměrně … povrchové vrstvy
                mořské vody. Hlavně východní polovina Severního ledového oceánu,
                u břehů se Sibiří, má vodu o 2 až 3 °C teplejší, než je obvyklé,
                a to jí brání zamrznout. Asi nejmarkantnější je to u moře
                Laptěvů, které touto dobou bývá z velké části … ledem, letos se
                ale led utvořil zatím jen na několika procentech jeho plochy.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(11)}>Klíče</button>
                <Collapse in={keys.getValue(11)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      oceán, zamrzání, led, drží, fakt, letos, klesaly, vysoké
                      teploty, pokryté
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
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

export default LectureTwelve;
