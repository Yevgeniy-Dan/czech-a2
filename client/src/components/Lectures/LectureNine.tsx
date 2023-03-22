import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const LectureNine: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(13);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">9. lekce</h1>
        <p> Práce </p>
        <Link to="/admin/lectures/8">Предыдущий урок</Link>
        <Link to="/admin/lectures/10">Следующий урок</Link>
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <div className="fst-italic">
          <p>
            В этой лекции нас ждёт новая тема <strong>«Práce»</strong>,
            упражнения, устная часть, чтение и прослушивание.
          </p>
          <p>
            Как всегда напоминаем, что ВАЖНО всё повторять вслух, после того как
            вы поняли о чём речь.
          </p>
          <p>Разрабатывайте речевой аппарат!</p>
        </div>

        {/* PRÁCE */}
        <div>
          <h2>PRÁCE</h2>
          <div>
            <p className="fw-bold">
              Pro procvičování slovní zásoby jsme připravili pro Vás kartičky na
              Quizlet:
            </p>
            <a
              href="https://quizlet.com/_cw9u4l?x=1jqt&i=3zq2hw"
              target="blank"
            >
              OTEVŘÍT KARTIČKY
            </a>
          </div>
          <div>
            <p className="fw-bold bg-warning">
              Скачайте файл Práce - Slovní zásoba.
            </p>
            <a
              href="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Pr%C3%A1ce.pdf"
              target="blank"
            >
              Slang - Práce
            </a>
          </div>

          <div>
            <p className="fw-bold bg-warning">
              Прослушайте аудиофайлы Práce - Slovní zásoba.
            </p>

            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+C%CC%8Casta%CC%81+povola%CC%81ni%CC%81+-+1.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Častá povolání - 1</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+C%CC%8Casta%CC%81+povola%CC%81ni%CC%81+-+2.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Častá povolání - 2</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Hleda%CC%81ni%CC%81+pra%CC%81ce.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Hledání práce</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Odme%CC%8Cna+za+pra%CC%81ci.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Odměna za práci</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Osoby+bez+sta%CC%81le%CC%81ho+zame%CC%8Cstna%CC%81ni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Osoby bez stálého zaměstnání</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Podnika%CC%81ni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Podnikání</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Pracovis%CC%8Cte%CC%8C.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Pracoviště</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Pracovni%CC%81+podmi%CC%81nky+-+1.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Pracovní podmínky - 1</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Pracovni%CC%81+podmi%CC%81nky+-+2.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Pracovní podmínky - 2</strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Slang+-+Pracovni%CC%81+vztahy.mp3"
              ></audio>
              <figcaption>
                <strong>Slang - Pracovní vztahy</strong>
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="fw-bold bg-warning">
              Выполните задания с № 1.1 по № 13
            </p>

            {/* Task 1.1 */}
            <div>
              <p className="fw-bold">
                1.1. Doplňte název povolání na obrázku č. 1.
              </p>
              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/picture_1.jpg"
                  alt="Obrázek č. 1"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 1</i>
                  </strong>
                </figcaption>
              </figure>

              <div>
                <button onClick={() => keys.toggleKey(1)}>Klíče</button>
                <Collapse in={keys.getValue(1)} timeout={2000}>
                  <div className="fst-italic">
                    <p>1. Doktor</p>
                    <p>2. Detektiv</p>
                    <p>3. Hasič</p>
                    <p>4. Uklízečka</p>
                    <p>5. Policista</p>
                    <p>6. Spisovatel</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 1.2 */}
            <div>
              <p className="fw-bold">
                1.2. Poslechněte si nahrávku a uhádněte, které povolání bylo
                popisováno v nahrávce.
              </p>
              <p className="text-danger">
                <i>
                  Аудио вы можете скачать себе на телефон, чтобы лучше запомнить
                  слова и выражения.
                </i>
              </p>
              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Uh%C3%A1dni+povol%C3%A1n%C3%AD+-+1.m4a"
                  ></audio>
                  <figcaption>
                    <strong>Uhádni povolání - 1</strong>
                  </figcaption>
                </figure>
                <p>
                  <strong>a)</strong> Je to žena, která pracuje většinou v
                  uzavřených prostorech a při své práci potřebuje nejrůznější
                  pomůcky — jako jsou například rukavice, pytlíky (мешки),
                  utěrky (тряпки) a čistící prostředky (средства). Jejím úkolem
                  je vše dát do pořádku tak, aby se třpytilo (сверкало) a bylo
                  čisté.
                </p>
              </div>

              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Uh%C3%A1dni+povol%C3%A1n%C3%AD+-+2.m4a"
                  ></audio>
                  <figcaption>
                    <strong>Uhádni povolání - 2</strong>
                  </figcaption>
                </figure>
                <p>
                  <strong>b)</strong> Je to muž, který většinu svého volného
                  času tráví tím, že píše nejrůznější příběhy. Ty příběhy potom
                  můžeme číst v knihách. Kdo to je?
                </p>
              </div>

              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Uh%C3%A1dni+povol%C3%A1n%C3%AD+-+3.m4a"
                  ></audio>
                  <figcaption>
                    <strong>Uhádni povolání - 3</strong>
                  </figcaption>
                </figure>
                <p>
                  <strong>c)</strong> Muž, který za každých okolností (при любых
                  обстоятельствах) zjistí (узнает) pravdu pomocí nejrůznějších
                  stop (следов) a odhalí (раскроет) opravdového pachatele
                  (преступника). Ke své práci nepotřebuje žádné superhrdinské
                  schopnosti, ale stačí, když bude přemýšlet.
                </p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(2)}>Klíče</button>
                <Collapse in={keys.getValue(2)} timeout={2000}>
                  <div className="fst-italic">
                    <p>a) Uklízečka</p>
                    <p>b) Spisovatel</p>
                    <p>c) Detektiv</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 2 */}
            <div>
              <p className="fw-bold">
                2. Utvořte z uvedených povolání mužský / ženský rod.
              </p>

              <div className="row">
                <div className="col">
                  <p>1) Číšník — …</p>
                  <p>2) Sekretář — …</p>
                  <p>3) … — Právnička</p>
                  <p>4) … — Kadeřnice</p>
                  <p>5) Policista — …</p>
                  <p>6) … — Úřednice</p>
                  <p>7) … — Novinářka</p>
                  <p>8) … — Řidička</p>
                  <p>9) Informatik — …</p>
                  <p>10) … — Uklízečka</p>
                  <p>11) Manažér — …</p>
                  <p>12) Psycholog — …</p>
                </div>
                <div className="col">
                  <p>13) Prodavač — …</p>
                  <p>14) Asistent — …</p>
                  <p>15) … — Soudkyně</p>
                  <p>16) Učitel — …</p>
                  <p>17) Lékař — …</p>
                  <p>18) … — Podnikatelka</p>
                  <p>19) … — Farmářka</p>
                  <p>20) Politik — …</p>
                  <p>21) Doktor — …</p>
                  <p>22) Ministr — …</p>
                  <p>23) … — Spisovatelka</p>
                  <p>24) Vědec — …</p>
                </div>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(3)}>Klíče</button>
                <Collapse in={keys.getValue(3)} timeout={2000}>
                  <div className="fst-italic row">
                    <div className="col">
                      <p>1) Číšnice</p>
                      <p>2) Sekretářka</p>
                      <p>3) Právník</p>
                      <p>4) Kadeřník</p>
                      <p>5) Policistka</p>
                      <p>6) Úředník</p>
                      <p>7) Novinář</p>
                      <p>8) Řidič</p>
                      <p>9) Informatička</p>
                      <p>10) Uklízeč</p>
                      <p>11) Manažerka</p>
                      <p>12) Psycholožka</p>
                    </div>
                    <div className="col">
                      <p>13) Prodavačka</p>
                      <p>14) Asistentka</p>
                      <p>15) Soudce</p>
                      <p>16) Učitelka</p>
                      <p>17) Lékařka</p>
                      <p>18) Podnikatel</p>
                      <p>19) Farmář</p>
                      <p>20) Politička</p>
                      <p>21) Doktorka</p>
                      <p>22) Ministryně</p>
                      <p>23) Spisovatel</p>
                      <p>24) Vědkyně</p>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 3 */}
            <div>
              <p className="fw-bold">
                3. Vyplníte test č. 12. Když hledáte práci, čtete v inzerátech
                tyto výrazy. Co znamenají.
              </p>
              <a
                href="https://7vovmq2cdjr.typeform.com/to/NcZhz4zB"
                target="blank"
              >
                Test 12. Co znamenají výrazy
              </a>
            </div>

            {/* Task 4 */}
            <div>
              <p className="fw-bold">
                4. Doplňte křížovku s různými profesemi na obrázku č. 2 a
                zjistěte tajenku.
              </p>

              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Obr%C3%A1zek+%C4%8D.+2.jpg"
                  alt="Obrázek č. 2"
                  width="100%"
                  height="auto"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 2</i>
                  </strong>
                </figcaption>
              </figure>

              <div>
                <p>
                  1. Člověk, který má za úkol pomáhat a chránit. Vždy má u sebe
                  pouta a pistoli.
                </p>
                <p>
                  2. Je to člověk, který rozhodne v procesu, když se rozvádíme
                  nebo pokud jsme porušili zákon.
                </p>
                <p>
                  3. Člověk, který se vyzná v zákonech a vždy pomůže správně
                  sepsat smlouvu.
                </p>
                <p>
                  4. Je to člověk, který sbírá informace a pak je zveřejňuje
                  např. v novinách.
                </p>
                <p>
                  5. Pán, který zná všechny nemoci a vždy ví, jaké léky nám má
                  předepsat.
                </p>
                <p>
                  6. Pokud potřebujeme nasbírat zkušenosti, tak pracujeme ve
                  firmě.
                </p>
                <p>7. Je to člověk, který řeší veškeré finance firmy.</p>
                <p>
                  8. Je pracovnice, které mezi úkoly patří úklid a údržba
                  podlahových a skleněných ploch.
                </p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                <Collapse in={keys.getValue(4)} timeout={2000}>
                  <div className="fst-italic">
                    <div className="row">
                      <div className="col">
                        <p>1. Policista</p>
                        <p>2. Soudce</p>
                        <p>3. Právník</p>
                        <p>4. Novinář</p>
                      </div>
                      <div className="col">
                        <p>5. Lékař</p>
                        <p>6. Stážista</p>
                        <p>7. Účetní</p>
                        <p>8. Uklízečka</p>
                      </div>
                    </div>
                    <p>
                      <strong>Tajenka: POVOLÁNÍ</strong>
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 5.1 */}
            <div>
              <p className="fw-bold">
                5.1. Poslouchejte audio a označte, co je a co není pravda.
              </p>
              <p>
                Eliška Kostková hledá novou práci. Mluví o tom, jakou práci by
                chtěla dělat.{" "}
              </p>
              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Eli%C5%A1ka+Kostkov%C3%A1+hled%C3%A1+pr%C3%A1ci.mp3"
                ></audio>
                <figcaption>
                  <strong>Eliška Kostková hledá práci</strong>
                </figcaption>
              </figure>

              <div>
                <p>
                  1. Eliška pracuje v centru Brna. <strong> ANO / NE</strong>
                </p>
                <p>
                  2. Má pracovní dobu od sedmi hodin do pěti.{" "}
                  <strong>ANO / NE</strong>
                </p>
                <p>
                  3. Eliška má dobrý plat. <strong>ANO / NE</strong>
                </p>
                <p>
                  4. Eliška chce pracovat jako manažerka.{" "}
                  <strong>ANO / NE</strong>
                </p>
                <p>
                  5. Eliška chce v nové práci mluvit rusky.{" "}
                  <strong>ANO / NE</strong>
                </p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                <Collapse in={keys.getValue(5)} timeout={2000}>
                  <div className="fst-italic">
                    <p>1. ANO </p>
                    <p>2. NE</p>
                    <p>3. NE</p>
                    <p>4. ANO</p>
                    <p>5. NE</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 5.2 */}
            <div>
              <p className="fw-bold">
                5.2. Poslouchejte ještě jedno audio a označte.
              </p>
              <p>Monika hledá práci.</p>
              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Monika+hled%C3%A1+pr%C3%A1ci+.mp3"
                ></audio>
                <figcaption>
                  <strong>Monika hledá práci by lida hola</strong>
                </figcaption>
              </figure>

              <div>
                <div className="row">
                  <div className="col">
                    <div>
                      <p className="fw-bold">1. Monika hledá:</p>
                      <p>a) partnera;</p>
                      <p>b) byt;</p>
                      <p>c) práci.</p>
                    </div>

                    <div>
                      <p className="fw-bold">
                        2. Monika nepracovala tři roky protože:
                      </p>
                      <p>a) byla nemocná;</p>
                      <p>b) byla na mateřské dovolené;</p>
                      <p>c) protože studovala v cizině.</p>
                    </div>
                    <div>
                      <p className="fw-bold">3. Monika hledá práci jako:</p>
                      <p>a) manažerka;</p>
                      <p>b) učitelka;</p>
                      <p>c) účetní.</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <p className="fw-bold">4. Monika hledá práci:</p>
                      <p>a) na plný úvazek;</p>
                      <p>b) na poloviční úvazek;</p>
                      <p>c) na zkrácený úvazek.</p>
                    </div>
                    <div>
                      <p className="fw-bold">
                        5. Monika chce pracovat šest hodin, protože:
                      </p>
                      <p>a) má malé děti;</p>
                      <p>b) bydlí daleko;</p>
                      <p>c) má kurzy angličtiny.</p>
                    </div>
                    <div>
                      <p className="fw-bold">6. Monika nemá čas, protože:</p>
                      <p>a) jde na pohovor;</p>
                      <p>b) jde na oběd;</p>
                      <p>c) jde podat inzerát.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                  <Collapse in={keys.getValue(6)} timeout={2000}>
                    <div className="fst-italic">
                      <div className="row">
                        <div className="col">
                          <p>1. c) </p>
                          <p>2. b)</p>
                          <p>3. c)</p>
                        </div>
                        <div className="col">
                          <p>4. c)</p>
                          <p>5. a)</p>
                          <p>6. c)</p>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>

            {/* Task 6 */}
            <div>
              <p className="fw-bold">
                6. Doplňte vynechaná slova z nabídky (vizte níže). Pak si
                poslechněte dialog mezi panem Kubátem a panem Fischerem a
                zkontrolujte si své odpovědi.
              </p>
              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Jedn%C3%A1n%C3%AD.+Pan+Kub%C3%A1t+a+pan+Fischer.mp3"
                ></audio>
                <figcaption>
                  <strong>Jednání. Pan Kubát a pan Fischer</strong>
                </figcaption>
              </figure>

              <div>
                <p className="fw-bold">
                  Dialog. Jednání. Pan Kubát a pan Fischer.
                </p>
                <p>
                  Kubát: Vítám Vás u nás v Praze. Jsem Petr Kubát, (1.) … naší
                  firmy.
                </p>
                <p>
                  Fischer: Těší mě. Já jsem John Fischer. Jsem rád, že vás
                  poznávám osobně, zatím jsme spolu mluvili jen (2.) … .
                </p>
                <p>K: Jakou jste měl cestu?</p>
                <p>F: Cesta byla příjemná, i když trvala dlouho.</p>
                <p>K: Posaďte se, prosím. Můžu Vám (3.) … kávu?</p>
                <p>F: Děkuju, rád si vezmu.</p>
                <p>
                  K: A teď k věci. Máme ještě nějaké otázky k návrhu (4.) … .
                </p>
                <p>
                  F: Prosím. Také bychom chtěli s Vámi projednat některé
                  detaily.
                </p>
                <p>K: Jak dlouhou záruční dobu mají vaše výrobky?</p>
                <p>
                  F: Dva roky. (5.) … je můžete přímo u nás nebo u našeho
                  zástupce tady v Praze.
                </p>
                <p>
                  K: Naši zákazníci si stěžují na špatný servis. Opravy trvají
                  dlouho.
                </p>
                <p>
                  F: Situace teď bude lepší. Otevíráme v České republice dva
                  nové servisy a naši technici zajistí rychlou opravu přímo na
                  místě.
                </p>
                <p>
                  K: V tom případě se smlouvou souhlasíme. Ale ještě jednou si
                  ji prostuduju. Sejdeme (6.) … zítra?
                </p>
                <p>
                  F: Ano, podívejte se na naše otázky, tady jsem je pro vás
                  připravil. Budeme o nich jednat zítra.
                </p>
                <p>K: Samozřejmě. Která hodina se Vám zítra hodí?</p>
                <p>
                  F: Přijdu stejně jako dneska, v deset. Kdybych nemohl přijít,
                  zavolám Vám.
                </p>
                <p>K: Chcete, abychom pro Vás poslali do hotelu auto?</p>
                <p>F: Ne, děkuju.</p>
              </div>

              <div>
                <p className="fw-bold">Vynechaná slova z nabídky:</p>
                <div className="row">
                  <div className="col">
                    <div>
                      <p className="fw-bold">1.</p>
                      <p>a) uklízeč;</p>
                      <p>b) obchodní ředitel;</p>
                      <p>c) obchodní vedoucí.</p>
                    </div>
                    <div>
                      <p className="fw-bold">2.</p>
                      <p>a) telefonicky;</p>
                      <p>b) elektronicky;</p>
                      <p>c) mobilnicky.</p>
                    </div>
                    <div>
                      <p className="fw-bold">3.</p>
                      <p>a) nabodnout;</p>
                      <p>b) zamítnout;</p>
                      <p>b) zamítnout;</p>
                    </div>
                  </div>
                  <div className="col">
                    <div>
                      <p className="fw-bold">4.</p>
                      <p>a) omluvy;</p>
                      <p>b) domluvy;</p>
                      <p>c) smlouvy.</p>
                    </div>
                    <div>
                      <p className="fw-bold">5.</p>
                      <p>a) reklamovat;</p>
                      <p>b) deklarovat;</p>
                      <p>c) domlouvat.</p>
                    </div>
                    <div>
                      <p className="fw-bold">6.</p>
                      <p>a) si;</p>
                      <p>b) se;</p>
                      <p>c) -.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                <Collapse in={keys.getValue(7)} timeout={2000}>
                  <div className="fst-italic">
                    <div className="row">
                      <div className="col">
                        <p>1. — b) </p>
                        <p>2. — a)</p>
                        <p>3. — c)</p>
                      </div>
                      <div className="col">
                        <p>4. — c)</p>
                        <p>5. — a)</p>
                        <p>6. — b)</p>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 7.1 */}
            <div>
              <p className="fw-bold">7.1. Přečtěte si texty.</p>
              <div>
                <p className="fw-bold">
                  Anna Matoušková, studentka střední školy.
                </p>
                <p>
                  Když jsem byla úplně malá holka, chtěla jsem být modelkou —
                  hlavně proto, že jsem chtěla mít krásné červené nehty, jak
                  jsem to viděla v jednom časopise. Později jsem změnila názor a
                  chtěla jsem se stát farmářkou. Prosila jsem rodiče o koně,
                  krávu, kozu nebo jenom o docela malé prase — ale protože
                  bydlíme v paneláku, byla jsem nakonec ráda, že jsem dostala
                  aspoň křečka. A tak jsem se nestala farmářkou — a modelkou
                  ještě taky ne. Teď se starám o křečka, studuju na gymnáziu a
                  baví mě literatura a jazyky. Jednou bych se chtěla stát známou
                  spisovatelkou, ale raději už nic neplánuju!
                </p>
              </div>
              <div>
                <p className="fw-bold">Roman Novotný, lékař.</p>
                <p>
                  Proč jsem se stal lékařem? Když o téhle otázce přemýšlím,
                  musím říct, že díky své první lásce ze základní školy. Chtěl
                  jsem poznat rozdíly mezi chlapcem a dívkou, a proto jsem začal
                  číst knihy o lidském těle. Čím víc knih jsem četl, tím víc mě
                  lidský organismus zajímal. A tak se můj koníček stal mým
                  povoláním. Dneska se zabývám dětskou neurologií a můžu říct,
                  že každý lékař zůstává navždycky studentem a pořád objevuje
                  něco nového — a že je to stejné dobrodružství jako tehdy, když
                  jsem chtěl objevit rozdíly mezi klukem a holkou.
                </p>
              </div>
              <div>
                <p className="fw-bold">
                  Stanislav Beneš, historik a politolog.
                </p>
                <p>
                  Když mi bylo asi pět let, měl jsem typický sen každého kluka —
                  chtěl jsem být kosmonautem. Později jsem zjistil, že to asi
                  nebude tak lehké, a proto jsem se rozhodl, že se stanu slavným
                  cestovatelem. Četl jsem knihy českých cestovatelů Hanzelky a
                  Zikmunda, kteří starým autem procestovali celou Afriku a Jižní
                  Ameriku. V té době jsem taky začal sbírat známky. Díky tomu
                  jsem procestoval svět, i když jenom prstem po mapě. Opravdovým
                  cestovatelem jsem se nakonec nestal, vystudoval jsem historii
                  a politologii a zabývám se politickým vývojem v
                  postkomunistických zemích. A známky? Ty sbírám pořád společně
                  se svým malým vnukem, se kterým se přitom naučíme spoustu
                  věcí.
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 7.2 проверит преподаватель.
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 7.2 */}
            <div>
              <p className="fw-bold">
                7.2. Doplňte otázky k textům ze zadání 8.1. Pak na ně odpovězte.
              </p>

              <div>
                <p>1) … se teď stará Anna? </p>
                <p>2) … Annu baví ve škole? </p>
                <p>3) … knihy četl Stanislav Beneš? </p>
                <p>4) … začal Roman Novotný číst knihy o lidském těle?</p>
                <p>5) … sbírá Stanislav Beneš známky?</p>
                <p>6) … sen měl Stanislav Beneš, když byl malý?</p>
                <p>7) … chce Anna být?</p>
              </div>

              <div className="fst-italic">
                <p>a) O koho …</p>
                <p>b) Co …</p>
                <p>c) Jaký …</p>
                <p>d) Jaké …</p>
                <p>e) Proč …</p>
                <p>f) Čím …</p>
                <p>g) S kým …</p>
              </div>
            </div>

            {/* Task 7.3 */}
            <div>
              <p className="fw-bold">
                7.3. Přečtěte si texty ještě jednou a odpovězte na otázky.
              </p>

              <table>
                <tr>
                  <th></th>
                  <th>Čím chtěli být jako malí?</th>
                  <th>Proč?</th>
                  <th>Co dělají teď?</th>
                </tr>
                <tr>
                  <td>
                    <strong>Anna Matoušková</strong>
                  </td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>
                    <strong>Roman Novotný</strong>
                  </td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
                <tr>
                  <td>
                    <strong>Stanislav Beneš</strong>
                  </td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                </tr>
              </table>

              <div>
                <button onClick={() => keys.toggleKey(8)}>Klíče</button>
                <Collapse in={keys.getValue(8)} timeout={2000}>
                  <div className="fst-italic">
                    <table>
                      <tr>
                        <th></th>
                        <th>Čím chtěli být jako malí?</th>
                        <th>Proč?</th>
                        <th>Co dělají teď?</th>
                      </tr>
                      <tr>
                        <td>
                          <strong>Anna Matoušková</strong>
                        </td>
                        <td>Modelkou</td>
                        <td>Chtěla mít krásné červené šaty.</td>
                        <td>Studuje</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Roman Novotný</strong>
                        </td>
                        <td>Doktorem</td>
                        <td>Chtěl poznat rozdíl mezi klukem a holkou.</td>
                        <td>Je doktor</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Stanislav Beneš</strong>
                        </td>
                        <td>Kosmonautem</td>
                        <td>Byl to typický sen každého kluka.</td>
                        <td>Je historik a politolog</td>
                      </tr>
                    </table>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 8.1 */}
            <div>
              <p className="fw-bold">
                8.1. Poslechněte si ještě jeden text a doplňte vynechaná slova.
              </p>

              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/10+d%C5%AFvod%C5%AF%2C+pro%C4%8D+je+rodi%C4%8Dovsk%C3%A1+dovolen%C3%A1+nejt%C4%9B%C5%BE%C5%A1%C3%AD+pr%C3%A1ce+na+sv%C4%9Bt%C4%9B.mp3"
                ></audio>
                <figcaption>
                  <strong>
                    10 důvodů, proč je rodičovská dovolená nejtěžší práce na
                    světě
                  </strong>
                </figcaption>
              </figure>

              <div>
                <p className="fw-bold">
                  Text. 10 důvodů, proč je rodičovská dovolená nejtěžší práce na
                  světě.
                </p>
                <p>
                  <strong>1)</strong> Když pracujete pro tuto … , vaše … … . je
                  nekonečná. Pracujete na denní i noční … a každý den musíte
                  pracovat … . Chcete mít volno o víkendu nebo na Vánoce? Tak na
                  to rychle zapomeňte!
                </p>
                <p>
                  <strong>2)</strong> Vaše firma má jediného … , a to jste vy.
                  Maximálně jednou denně přijde do vaší firmy externista. Ten o
                  vaší práci nic neví, ale pořád vám radí, co by se mělo udělat
                  líp. Externista většinou brzo ráno odejde a přijde až večer.
                </p>
                <p>
                  <strong>3)</strong> Každou minutu děláte něco jiného. Nejdřív
                  jste … úklidu, pak manažer vaření, manažer oblékání, manažer
                  praní, manažer pro komunikaci a motivaci nebo manažer hledání
                  klíčů.
                </p>
                <p>
                  <strong>4)</strong> Jediná firemní zábava je společná
                  procházka nebo nákup. Občas se z nich stanou adrenalinové
                  teambuildingové … , ve kterých musíte trénovat spolupráci v
                  konfliktních situacích.
                </p>
                <p>
                  <strong>5)</strong> Nemůžete … … … , protože už na dovolené
                  jste. Nemůžete dostat … , protože nemůžete být nemocní.
                  Nemůžete odejít z práce o hodinu dřív a nemůžete ani zaspat
                  (to by se vám stejně nepovedlo). Navíc si nemůžete stěžovat,
                  protože nemáte komu.
                </p>
                <p>
                  <strong>6)</strong> Váš … neumí mluvit a když ano, tak ne moc
                  dobře, často křičí, schovává vaše věci a despoticky vám
                  zkracuje … na oběd.
                </p>
                <p>
                  <strong>7)</strong> Vaše zaměstnání může mít negativní vliv na
                  vaši inteligenci a slovní zásobu. Po určité době se nutně
                  objeví určité problémy v … s dospělými.
                </p>
                <p>
                  <strong>8)</strong> Váš … nekoresponduje s vaším … a … . Umíte
                  pracovat s Wordem, Excelem a dalším softwarem? Tak to vám je
                  nanic. Váš zaměstnavatel vám všechny informace píše fixou na
                  zeď nebo na dveře.
                </p>
                <p>
                  <strong>9)</strong> Nemůžete … … . Můžete maximálně umřít, ale
                  ani to si prostě nemůžete dovolit.
                </p>
                <p>
                  <strong>10)</strong> Firma vám neplatí rekreaci, ale to je
                  jedno, protože byste stejně nikam nemohli jet. Nemáte žádné …
                  . Jediný firemní benefit je naděje, že váš zaměstnavatel
                  jednou půjde do školky.
                </p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(9)}>Klíče</button>
                <Collapse in={keys.getValue(9)} timeout={2000}>
                  <div className="fst-italic">
                    <p>1) firmu, pracovní doba, směny, přesčas</p>
                    <p>2) zaměstnance</p>
                    <p>3) manažer</p>
                    <p>4) akce</p>
                    <p>5) si vzít dovolenou, nemocenskou</p>
                    <p>6) zaměstnavatel, pauzy</p>
                    <p>7) komunikaci</p>
                    <p>8) plat, vzděláním, praxí</p>
                    <p>9) dát výpověď</p>
                    <p>10) benefity</p>
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
                Внимание! Задание № 8.2 проверит преподаватель.
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 8.2 */}
            <div>
              <p className="fw-bold">
                8.2. Odpovězte na otázky podle textu ze zadání 8.1.
              </p>
              <p>
                1. Jak často musí zaměstnanec na rodičovské dovolené pracovat
                přesčas?
              </p>
              <p>2. Kolik dalších zaměstnanců má firma, ve které pracuje?</p>
              <p>3. Co v práci dělá?</p>
              <p>4. Jaká je jediná firemní zábava?</p>
              <p>5. Jak často může mít normální nebo nemocenskou dovolenou?</p>
              <p>6. Jak se chová zaměstnavatel?</p>
              <p>7. Na co může mít takové zaměstnání vliv?</p>
              <p>8. Využije zaměstnanec počítačové znalosti?</p>
              <p>9. Může dát výpověď?</p>
              <p>10. Jaké má firemní benefity?</p>
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
                9. Přečtěte si následující inzeráty a odpovězte na otázky.
              </p>
              <div>
                <p className="fw-bold">Inzerát A. </p>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Inzer%C3%A1t+A.+.jpg"
                  alt="Inzerát A"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <p className="fw-bold">Inzerát B. </p>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Inzer%C3%A1t+B.+.jpg"
                  alt="Inzerát B"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <p className="fw-bold">Inzerát C. </p>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Inzer%C3%A1t+C.+.jpg"
                  alt="Inzerát C"
                  width="100%"
                  height="auto"
                />
              </div>

              <div>
                <p className="fw-bold">
                  V jakém inzerátu nebo inzerátech (A, B nebo C) ...
                </p>
                <p>
                  1) … nabízejí možnost pracovat na zkrácený pracovní úvazek?
                </p>
                <p>2) … píšou, že zaměstnanec by měl občas dělat přesčasy?</p>
                <p>
                  3) … nabízejí práci na různých místech v České republice?{" "}
                </p>
                <p>4) … píšou, že je nutné umět cizí jazyk nebo jazyky?</p>
                <p>5) … nabízejí vysoký plat?</p>
                <p>6) … potřebují praxi?</p>
                <p>7) … nabízejí možnost školení?</p>
                <p>8) … nabízejí benefity?</p>
              </div>
            </div>

            {/* Task 10 */}
            <div>
              <p className="fw-bold">
                10. Doplňte vhodná slova do dialogů, které se odehrávají v
                práci.
              </p>
              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_9/David+a+%C5%99editelka+-+1.mp3"
                  ></audio>
                  <figcaption>
                    <strong>Dialog. David a ředitelka - 1.</strong>
                  </figcaption>
                </figure>

                <div>
                  <p>
                    Ředitelka: Davide, prosím Vás, pojďte se podívat. Napsal
                    jste špatně … .
                  </p>
                  <p>David: Jak to? Vyplnil jsem … stejně jako minule.</p>
                  <p>
                    Ř: Ano, ale spletl jste … … , a navíc jste poslal fakturu
                    pozdě. Musíte to přepsat a příště ji musíte poslat dřív. A
                    tady dole jste se dokonce zapomněl … .
                  </p>
                  <p>D: Aha, omlouvám se, přepíšu ji a přinesu ji zítra.</p>
                  <p>
                    Ř: To nejde, udělejte to ještě dneska. Musíme ji … co
                    nejdříve.
                  </p>
                </div>
                <div>
                  <button onClick={() => keys.toggleKey(10)}>Klíče</button>
                  <Collapse in={keys.getValue(10)} timeout={2000}>
                    <div className="fst-italic">
                      <p>Fakturu, formulář, cenu zboží, podepsat, poslat. </p>
                    </div>
                  </Collapse>
                </div>
              </div>
              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_9/David+a+%C5%99editelka+-+2.mp3"
                  ></audio>
                  <figcaption>
                    <strong>Dialog. David a ředitelka - 2.</strong>
                  </figcaption>
                </figure>

                <div>
                  <p>
                    Ředitelka: Davide, prosím Vás, můžete ke mně asi tak za půl
                    hodiny přijít do … ?
                  </p>
                  <p>Ř: … !</p>
                  <p>David: Dobrý den, … ?</p>
                  <p>Ř: Prosím Vás, můžete přijít za chvíli? Mám ještě … . </p>
                  <p>D: Můžu?</p>
                  <p>
                    Ř: Ano, pojďte dál. Četla jsem vaší … analýzu z minulého
                    měsíce, ale chybí tam nějaké informace. Pošlu vám čísla a
                    data a vy tu … napíšete přesněji, ano? Potřebuji ji
                    nejpozději v pondělí.
                  </p>
                </div>
                <div>
                  <button onClick={() => keys.toggleKey(11)}>Klíče</button>
                  <Collapse in={keys.getValue(11)} timeout={2000}>
                    <div className="fst-italic">
                      <p>Fakturu, formulář, cenu zboží, podepsat, poslat. </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>

            <div>
              <p className="fw-bold">
                Так же как и в прошлых лекциях мы подобрали для вас полезные
                ресурсы на просторах YouTube.
              </p>
            </div>

            <div>
              <p className="bg-warning fw-bold">Уточнение от Дарьи</p>
              <p>
                <i>
                  Вы можете уменьшить скорость воспроизведения видео в
                  настройках и лучше понимать слова, если для вас это слишком
                  быстро.
                </i>
              </p>
              <a
                href="https://support.google.com/youtube/answer/7509567?co=GENIE.Platform=Desktop&hl=ru&oco=1"
                target="blank"
              >
                Как это сделать описано здесь.
              </a>
              <p>
                <i>В некоторых видео доступны субтитры на чешском. </i>
              </p>
              <a
                href="https://support.google.com/youtube/answer/100078?co=GENIE.Platform=Desktop&hl=ru"
                target="blank"
              >
                Как их включить описано здесь.
              </a>
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 11 проверит преподаватель.
              </p>
              <p>
                <i>
                  Ответы напишите от руки, сфотографируйте и отправьте их на
                  проверку в группу Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            <div>
              <p className="text-danger fw-bold">
                <i>Prosím, pište čitelně.</i>
              </p>
            </div>
            {/* Task 11 */}

            <div>
              <p className="fw-bold">
                11. Podívejte se na video a odpovězte na otázky, odpovědi
                napište ručně, vyfoťte a odešlete na kontrolu.
              </p>
              <a
                href="https://www.youtube.com/watch?v=5kRGkn21yoY"
                target="blank"
              >
                Video. TOP 10 Nejhorší práce na světě
              </a>
              <div>
                <p>1. Co je náplní práce pracovníka z povolání číslo 10?</p>
                <p>
                  2. Co je podle Vás nejhorší částí práce u povolání číslo 9?
                </p>
                <p>3. Proč musí existovat povolání očichávačů podpaždí?</p>
                <p>4. Jaké požadavky jsou potřeba u povolání číslo 7?</p>
                <p>
                  5. Jaké pomůcky jsou potřeba při vykonávání povolání č. 6?
                </p>
                <p>6. Jaká práce je podle Vás nejhorší?</p>
                <p>7. Proč tu práci nikdy nebudete dělat za žádné peníze?</p>
              </div>
            </div>

            <div>
              <p className="fw-bold bg-warning">Уточнение от Дарьи</p>
              <div className="text-danger fst-italic">
                <p>
                  <strong>Připomínáme:</strong>
                </p>
                <p>
                  <strong>Čím</strong> jste chtěl / a být?
                </p>
                <p>
                  Чехи чаще используют формулировку «чем», а не «кем ты хотела
                  быть».
                </p>
                <p>
                  A zároveň upozorňujeme na správné použití rodu názvu povolání:
                </p>
                <p>
                  Kým jste chtěl(a) být, když jste byl(a) malý(á)?
                  <br />
                  Chtěl jsem být kosmonau<strong>tem.</strong> Chtěla jsem být
                  učitel<strong>kou.</strong>
                </p>
                <p>
                  <strong>7. pád — Instrumentál</strong>
                </p>
                <p>
                  Čím (nebo kým) je tvoje maminka?
                  <br />
                  Moje maminka je účetní.
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 12 проверит преподаватель.
              </p>
              <p>
                <i>
                  Сочинение напишите от руки, сфотографируйте и отправьте его на
                  проверку в группу Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 12 */}
            <div>
              <p className="fw-bold">
                12. Napište slohovou práci (сочинение) na téma «Výhody a
                nevýhody práce z domova».{" "}
              </p>
              <p className="fw-bold text-danger">
                <i>Prosím, pište čitelně. Minimální objem je 75 slov.</i>
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 13 выполняется по желанию.
              </p>
            </div>

            {/* Task 13 */}
            <div>
              <p className="fw-bold">
                13. Zapracujte s obrázky č. 3.1. a 3.2. Pak odpovězte na otázky.
              </p>
              <p>
                <strong>Povolání.</strong>
              </p>
              <p>
                Dnes vzala paní učitelka celou třídu na procházku po ulici v
                blízkosti školy. Společně pozorovali dospělé při jejich práci.
                Dospělí to však nemají vždy jednoduché. Některé věci se jim při
                práci poztrácely.
              </p>

              <p>
                <strong>Otázky: </strong>
              </p>
              <p>1. S jakými povoláními se děti setkaly?</p>
              <p>
                2. Najděte poztracené věci a dokážte správně určit, komu se
                ztratily?
              </p>

              <div>
                <p className="fw-bold">Poztrácené věci:</p>
                <div className="row">
                  <div className="col">
                    <p>1. Sklenice od piva</p>
                    <p>2. Píšťalka</p>
                    <p>3. Štětce</p>
                    <p>4. Kartáč na vlasy</p>
                    <p>5. Mikrofon</p>
                    <p>6. Injekční stříkačka</p>
                    <p>7. Kniha</p>
                  </div>
                  <div className="col">
                    <p>8. Cihla</p>
                    <p>9. Dopis</p>
                    <p>10. Volant</p>
                    <p>11. Štětka</p>
                    <p>12. Ukazovátko</p>
                    <p>13. Rukavice</p>
                    <p>14. Pokladna</p>
                  </div>
                </div>
              </div>

              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Obr%C3%A1zek+%C4%8D.+3.1.jpg"
                  alt="Obrázek č. 3.1"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 3.1</i>
                  </strong>
                </figcaption>
              </figure>

              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_9/Obr%C3%A1zek+%C4%8D.+3.1.jpg"
                  alt="Obrázek č. 3.2"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 3.2</i>
                  </strong>
                </figcaption>
              </figure>

              <div>
                <button onClick={() => keys.toggleKey(12)}>Klíče</button>
                <Collapse in={keys.getValue(12)} timeout={2000}>
                  <div className="fst-italic row">
                    <div className="col">
                      <p>1. Číšník — půllitr (u rozbořené zídky)</p>
                      <p>
                        2. Dopravní policista — píšťalka (v zedníkových neckách)
                      </p>
                      <p>3. Malíř — štětce (má učitelka v kabelce)</p>
                      <p>4. Kadeřník — kartáč na vlasy (u popelnice)</p>
                      <p>5. Zpěvačka — mikrofon (má pes v tlamě)</p>
                      <p>6. Lékař — injekční stříkačka (na zemi u číšníka)</p>
                      <p>7. Spisovatel — kniha (pod lavičkou)</p>
                    </div>
                    <div className="col">
                      <p>8. Zedník — cihla (v květináči)</p>
                      <p>9. Pošťák — dopis (vykukuje z kanálu)</p>
                      <p>10. Řidič — volant (v míchačce na beton)</p>
                      <p>11. Kominík — štětka (pod dodávkou)</p>
                      <p>12. Učitelka — ukazovátko (za komínem)</p>
                      <p>13. Popelář — rukavice (má kočka na ocase)</p>
                      <p>14. Prodavačka — kasa (na střeše ateliéru)</p>
                    </div>
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

export default LectureNine;
