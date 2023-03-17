import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const Lecture_5: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(16);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">5. lekce</h1>
        <p>
          Číslo množné rodu mužského neživotného, rodu ženského a rodu středního
          (Nominativ a Akuzativ)
        </p>
        <Link to="/admin/lectures/4">Предыдущий урок</Link>
        <Link to="/admin/lectures/6">Следующий урок</Link>
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <div className="fst-italic">
          <p className="fw-bold">
            В этой лекции нас ждёт новая тема, упражнения, устная часть, чтение
            и прослушивание.
          </p>

          <p>Как всегда напоминаем, что ВАЖНО всё повторять вслух.</p>

          <p>Разрабатывайте речевой аппарат!</p>
        </div>
        {/* ČÍSLO MNOŽNÉ SECTION */}
        <div>
          <div>
            <h2>ČÍSLO MNOŽNÉ</h2>
            <p>(Nominativ a Akuzativ)</p>
          </div>

          <div>
            <p>
              Сегодня мы с вами разберём тему{" "}
              <span className="fw-bold bg-warning">
                «Множественное число (Nominativ a Akuzativ)»,
              </span>{" "}
              но разберём мы с вами только мужской неодушевлённый, женский род и
              средний род.
            </p>
            <p>
              <i>Мужской одушевлённый будет в другой лекции.</i>
            </p>
          </div>

          <div>
            <p className="fw-bold bg-warning">
              Посмотрите видео от Дарьи с доступным объяснением грамматики.
            </p>
            <p>
              В этом видео вы увидите вводную часть в тему множественного числа,
              зафиксируйте себе в тетрадь.
            </p>
            <p>
              Речь пойдёт о том, что в чешском языке множественное число будет
              одинаковым как в 1 падеже (Nominativ), так и в 4 падеже
              (Akuzativ).
            </p>
            <p className="fst-italic">
              <strong>Например:</strong>
              <br />
              Здесь есть (kdo? co?) жёлтые бананы / большие книги / маленькие
              окна?
              <br />
              Покупаю (koho? co?) жёлтые бананы / большие книги / маленькие
              окна.
            </p>
            <p>Так же как и в русском языке. </p>
            <p>
              Единственное отличие это с цифрами 2; 3 и 4. На русском мы бы
              сказали — 2, 3, 4 жёлтых банана, больших книги, маленьких окна.
            </p>
            <p>Но в чешском это остаётся без изменений. </p>
            <p className="fst-italic">
              <strong>В искажённом переводе на русский бы это звучало:</strong>
              <br />
              Здесь есть (kdo? co?) два, три, четыре жёлтые бананы / большие
              книги / маленькие окна?
              <br />
              Покупаю (koho? co?) два, три, четыре жёлтые бананы/большие
              книги/маленькие окна.
            </p>
            <p>Итак, приступим к видео где все станет на свои места.</p>
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/rKoHGqtJTpw"
              title="5  ČÍSLO MNOŽNÉ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div>
              <p className="fw-bold">Slova v videa</p>
              <div className="fst-italic">
                <p>
                  Číslo množné
                  <br />
                  Mn Ž S <br />
                  1. Nominativ Kdo? Co? = 4. Akuzativ Koho? Co?
                </p>
                <p>
                  Tady jsou dobré mobily = vidím dobré mobily <br />
                  Chytré ženy = chytré ženy
                  <br />
                  Česká auta = česká auta
                </p>
                <p>Mž — zvlášť (отдельно)!</p>
                <p>
                  Tady jsou čeští kluci <br /> Vidím české kluky
                </p>
              </div>
            </div>

            <p>
              <strong>Ну что? Стало понятнее? Супер!</strong>
            </p>
            <p>
              <strong>Тогда перейдём непосредственно к правилу.</strong>
            </p>

            <div>
              <p className="bg-warning fw-bold">
                Скачайте файл Tabulka na pády. Фиксируйте всё в тетрадь или
                распечатайте таблицу и работайте с ней.
              </p>

              <a
                href="https://czecha2bucket.s3.amazonaws.com/lekce_5/Tabulka+na+p%C3%A1dy.pdf"
                target="blank"
              >
                Tabulka na pády
              </a>
            </div>
            <div>
              <p className="bg-warning fw-bold">Посмотрите видео с Дарьей.</p>
              <iframe
                width="949"
                height="534"
                src="https://www.youtube.com/embed/2T2d5Sw5z9g"
                title="5  ČÍSLO MNOŽNÉ2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              <div>
                <p className="fw-bold">Slova v videa.</p>

                <div className="fst-italic">
                  <p>Banán — banány </p>
                  <p>Počítač — počítače </p>
                  <p>Čaj — čaje</p>
                  <p>Žluté banány </p>
                  <p>Hezké počítače </p>
                  <p>Zelené čaje </p>
                  <p>Ty dva banány </p>
                  <p>Ty dva mobily </p>
                  <p className="mb-3">Ty dva počítače</p>
                  <p>Dvě ženy</p>
                  <p>Lampy</p>
                  <p>Knihy</p>
                  <p>Kamarádky</p>
                  <p>Mám dvě práce</p>
                  <p>Mám tři židle</p>
                  <p>Místnosti</p>
                  <p>Kosti</p>
                  <p>Dobré kamarádky </p>
                  <p>Veselé ženy </p>
                  <p>Nudné učitelky </p>
                  <p>Moderní babičky </p>
                  <p>Elegantní kamarádky </p>
                  <p>Ty dvě kamarádky </p>
                  <p className="mb-3">Ty dvě knížky</p>
                  <p>Okno — okna</p>
                  <p>Auto — auta </p>
                  <p>Dobrá města </p>
                  <p>Česká auta </p>
                  <p>Čistá okna </p>
                  <p>Dvě autobusová nádraží </p>
                  <p>Čistá moře </p>
                  <p>Ta dobrá města </p>
                  <p>Ještě DVĚ piva / vína, prosím </p>
                  <p>Tady vidím dvě okna </p>
                  <p>Tam stojí dvě auta </p>
                  <p>Navštívila jsem dvě nová města </p>
                  <p>Prachy — бабки </p>
                  <p>Peníze — деньги </p>
                  <p>Moje banány / mobily / města / kamarádky / auta </p>
                  <p>To jsou tvoje mobily / papíry / kamarádky / okna </p>
                  <p>To jsou naše pomeranče / okna / skříně</p>
                  <p>Dvě čistá okna </p>
                </div>
              </div>
            </div>

            <div>
              <p className="fw-bold bf-warning">
                Выполните задания № 1 — № 11.
              </p>
              {/* Task 1 */}
              <div>
                <p className="fw-bold">
                  1. Výrazy v závorce (скобках) použijte v Akuzativu plurálu
                  (číslo množné).
                </p>

                <ol>
                  <li>Bratr má dvě (velké moderní auto).</li>
                  <li>Nikdy nejím (zelené jablko).</li>
                  <li>V Jihlavě jsou (2 zničené nádraží).</li>
                  <li>Ten starý dům má (rozbité okno).</li>
                  <li>Všechna (velké město) mají letiště.</li>
                  <li>Máte doma (nějaká utěrka).</li>
                  <li>Marie si koupila (jahodová žvýkačka)</li>
                </ol>
                <div>
                  <button onClick={() => keys.toggleKey(1)}>Klíče</button>
                  <Collapse in={keys.getValue(1)} timeout={2000}>
                    <div>
                      <ol className="fst-italic">
                        <li>Velká moderní auta</li>
                        <li>Zelená jablka</li>
                        <li>Dvě zničená nádraží</li>
                        <li>Rozbitá okna</li>
                        <li>Velká města</li>
                        <li>Nějaké utěrky</li>
                        <li>Jahodové žvýkačky</li>
                      </ol>
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* Task 2 */}
              <div>
                <p className="fw-bold">
                  2. Čtěte dopis, který píše Bohouš své kamarádce Katce. Slova v
                  závorkách použijte v plurálu (číslo množné).{" "}
                </p>

                <div>
                  <p>Čauky (Приветики) Katko,</p>
                  <p>
                    jak jde život? Konečně jsme se s Adélou přestěhovali a teď
                    tedy bydlíme v našem malém bytě, který má (3 velký pokoj).
                    Pravdou je, že byt není ještě plně vybavený, ale už jsme si
                    něco stihli pořídit do koupelny.
                  </p>
                  <p>
                    Koupili jsme například (4 modrý ručník, 2 tekuté mýdlo, 2
                    malý kobereček pod noha a kolíček (прищепка) na prádlo).
                    Když už jsme byli v IKEA, tak jsme si vzali i něco do
                    kuchyně. Adéle se moc líbily (černý talíř a skleněná miska,
                    levná sklenička a také dřevěná vařečka) — vždyť víš, jak
                    ráda vaří. Ale určitě ještě toho hodně chybí.
                  </p>
                  <p>
                    Víš, že jsem chtěl začít studovat ještě (nějaký cizí jazyk),
                    ale všechny (jazyková škola) jsou tady drahé a budu s tím
                    muset počkat kvůli stěhování a zařizování našeho bytu.
                  </p>
                  <p>
                    Doufám, že nás navštívíš na Vánoce, určitě se ti tady bude
                    líbit! Měj se hezky a zavolej!
                  </p>
                  <p>Bohouš</p>

                  <div>
                    <button onClick={() => keys.toggleKey(2)}>Klíče</button>
                    <Collapse in={keys.getValue(2)} timeout={2000}>
                      <div className="fst-italic">
                        Tři velké pokoje, čtyři modré ručníky, dvě tekutá mýdla,
                        dva malé koberečky pod nohy a kolíčky na prádlo, černé
                        talíře a skleněné misky, levné skleničky a také dřevěné
                        vařečky, nějaké cizí jazyky, jazykové školy.
                      </div>
                    </Collapse>
                  </div>

                  <p className="fw-bold bg-warning">
                    Просмотрите видео с Дарьей с использованием множественного
                    числа и примерами.
                  </p>

                  <p className="fw-bold">Slova v videa.</p>

                  <div className="fst-italic">
                    <p>Kolik je tady lamp?</p>
                    <p>Jsou tady dvě lampy.</p>
                    <br />
                    <p>Kolik tady máme žen?</p>
                    <p>Máme tady tři ženy.</p>
                    <br />
                    <p>Kolik tady máme bot?</p>
                    <p>Máme tady čtyři boty.</p>
                    <br />
                    <p>Kolik tady máme stolů?</p>
                    <p>Tady máme tři stoly.</p>
                    <br />
                    <p>Jsou tady čtyři květiny?</p>
                    <p>Ne, tady jsou dvě květiny.</p>
                    <br />
                    <p>Kolik mám tady fix?</p>
                    <p>Mám tady čtyři fixy.</p>
                    <br />
                    <p>
                      Co je pro vás hezké, stará evropská města nebo nová
                      moderní města?
                    </p>
                    <p>Pro mě jsou hezká stará evropská města.</p>
                    <br />
                    <p>Jaké čaje pijete?</p>
                    <p>Já obvykle piju různé zelené čaje.</p>
                    <br />
                    <p>Co jezdí v Praze po cestách?</p>
                    <p>
                      V Praze po cestách jezdí tramvaje, autobusy, auta, kola,
                      koloběžky.
                    </p>
                    <br />
                    <p>Jaké jsou v Praze domy?</p>
                    <p>Staré, nové, moderní, vysoké, nízké.</p>
                  </div>
                </div>
              </div>

              {/* Task 3 */}
              <div>
                <p className="fw-bold">3. Doplňte správné formy do textu.</p>
                <p>
                  Lucie je učitelka, moc dobře vaří, ráda dělá … (dobrý dort).
                  Dnes dělá … (3 dort) — … (2 ovocný) a jeden čokoládový,
                  protože ve škole mají velkou party, protože má narozeniny.
                  Kupuje … (žlutý banán) a … (červené jablko). Potřebuje taky …
                  (2 čerstvé máslo), … (2 bílý jogurt) a … (2 drahá čokoláda).
                  Už se těší na skvělé kamarády, studenty a … (hezký dárek).
                </p>

                <div>
                  <button onClick={() => keys.toggleKey(3)}>Klíče</button>
                  <Collapse in={keys.getValue(3)} timeout={2000}>
                    <div className="fst-italic">
                      Dobré dorty, tři dorty, dva ovocné, žluté banány, červená
                      jablka, dvě čerstvá másla, dva bílé jogurty, dvě drahé
                      čokolády, hezké dárky.
                    </div>
                  </Collapse>
                </div>
              </div>
              <div>
                <p className="fw-bold">
                  Как вы заметили очень важна визуальная часть при работе с
                  языком, предлагаем потренировать множественное число со
                  следующим рисунком.
                </p>
                <div
                  style={{
                    backgroundColor: "#aae096",
                  }}
                >
                  <p className="fw-bold">
                    Внимание! Задание № 4 проверит преподаватель.
                  </p>
                  <p>
                    <i>
                      Ответы напишите и отправьте их на проверку в группу
                      Telegram c преподавателем или с потоком.
                    </i>
                  </p>
                </div>
              </div>

              {/* Task 4 */}
              <div>
                <p className="fw-bold">
                  4. Odpovězte na otázky podle obrázku č. 1. Nahrajte to na
                  diktafon.
                </p>
                <figure>
                  <img
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_5/Obr%C3%A1zek+%C4%8D.+1.jpg"
                    alt="Obrázek č. 1"
                    width="100%"
                    height="auto"
                  />
                  <figcaption>
                    <strong>
                      <i>Obrázek č. 1</i>
                    </strong>
                  </figcaption>
                </figure>
                <ol>
                  <li>Kolik laviček vidíte na obrázku?</li>
                  <li>Co je na lavičkách?</li>
                  <li>Jaké panské oblečení najdete na policích?</li>
                  <li>Kolik figurín s oblečením se nachází v obchodě?</li>
                  <li>Na co jsou pověšená barevná trička?</li>
                  <li>Co nosí pánové kolem krku s košilemi?</li>
                  <li>
                    Jaké věci si koupíte v obchodě, pokud budete mít hodně
                    peněz?
                  </li>
                </ol>
              </div>

              <div
                style={{
                  backgroundColor: "#aae096",
                }}
              >
                <p className="fw-bold">
                  Внимание! Задание № 5 проверит преподаватель.
                </p>
                <p>
                  <i>
                    Ответы напишите и отправьте их на проверку в группу Telegram
                    c преподавателем или с потоком.
                  </i>
                </p>
              </div>
              {/* Task 5 */}
              <div>
                <p className="fw-bold">
                  5. Odpovězte na otázky a dejte slova v závorkách do náležitého
                  tvaru v plurálu. Nahrajte to na diktafon.
                </p>
                <div>
                  <p className="fw-bold">1. O koho / co se staráte?</p>
                  <p>
                    (2 nemocná babička, naše pevné zdraví, vaše obrovská
                    zahrádka, zlatá rybka, 2 jejich dcera)
                  </p>
                </div>
                <div>
                  <p className="fw-bold">2. Co kupujete pokaždé v obchodě?</p>
                  <p>
                    (neperlivá voda, tvarohová zmrzlina, hořká čokoláda,
                    pomerančový džus, předražený sýr)
                  </p>
                </div>
                <div>
                  <p className="fw-bold">3. O co se zajímají vaši sousedi?</p>
                  <p>
                    (německá pohádka, ruský film, česká sportovkyně, stará
                    fotografie, světová historie, francouzská sladkost)
                  </p>
                </div>
                <div>
                  <p className="fw-bold">
                    4. Co si dá váš kolega v restauraci?
                  </p>
                  <p>
                    (2 velký řízek, citronová zmrzlina, 3 studené pivo, červené
                    víno, 4 čokoládový bonbon, 3 zeleninový salát)
                  </p>
                </div>
                <div>
                  <p className="fw-bold">5. Co hledá jeho naštvaná tchyně?</p>
                  <p>
                    (jeho pletený svetr, vánoční dárek, barevná pastelka, dětská
                    hračka, porcelánový (фарфоровый) talíř, zaprášená
                    (запылённый) kniha)
                  </p>
                </div>
                <div>
                  <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                  <Collapse in={keys.getValue(4)} timeout={2000}>
                    <div>
                      <ul className="nested">
                        <li>
                          O koho / co se staráte?
                          <ul>
                            <li>
                              O dvě nemocné babičky, o naše pevná zdraví, o vaše
                              obrovské zahrady, o zlaté rybky, o dvě jejich
                              dcery
                            </li>
                          </ul>
                        </li>
                        <li>
                          Co kupujete pokaždé v obchodě?
                          <ul>
                            <li>
                              Neperlivé vody, tvarohové zmrzliny, hořké
                              čokolády, pomerančové džusy, předražené sýry
                            </li>
                          </ul>
                        </li>
                        <li>
                          O co se zajímají vaši sousedi?
                          <ul>
                            <li>
                              Německé pohádky, ruské filmy, české sportovkyně,
                              staré fotografie, světové historie, francouzské
                              sladkosti
                            </li>
                          </ul>
                        </li>
                        <li>
                          Co si dá váš kolega v restauraci?
                          <ul>
                            <li>
                              {" "}
                              Dva velké řízky, citronové zmrzliny, tři studená
                              piva, červená vína, čtyři čokoládové bonbony, tři
                              zeleninové saláty
                            </li>
                          </ul>
                        </li>
                        <li>
                          Co hledá jeho naštvaná tchyně?{" "}
                          <ul>
                            <li>
                              {" "}
                              Jeho pletené svetry, vánoční dárky, barevné
                              pastelky, dětské hračky, porcelánové talíře,
                              zaprášené knihy{" "}
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* Task 6 */}
              <div>
                <p className="fw-bold">
                  6. Doplňte slova ve správné formě množného čísla.
                </p>
                <p>
                  Pane doktore, potřeboval bych … (nějaký lék) proti rýmě a
                  kašli.
                </p>
                <p>Máte … (nějaký vitamín) na posílení imunity?</p>
                <p>
                  Mají tyto léky … (nějaký vedlejší účinek — побочный эффект)?
                </p>
                <p>
                  Chtěl bych raději … (tekutá <i>(жидкая)</i> kapka) než …
                  (hořká <i>(горькая)</i> tableta ).
                </p>
                <p>Můj praktický lékař mi předepsal … (2 dlouhý recept).</p>

                <div>
                  <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                  <Collapse in={keys.getValue(6)} timeout={2000}>
                    <div className="fst-italic">
                      Nějaké léky, nějaké vitamíny, nějaké vedlejší účinky,
                      tekuté kapky, hořké tablety, dva dlouhé recepty.
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* Task 7 */}
              <div>
                <p className="fw-bold">
                  7. Dejte slova v závorkách do správné formě ve množném čísle.
                </p>
                <p>
                  Maminka vaří … (tvarohový knedlík) a … (jahodový sušenka).
                </p>
                <p>Firma koupila … (4 nové firemní auto a kamion).</p>
                <p>Číšník přinesl … (2 banánový nápoj).</p>
                <p>
                  Vedle domu jsme začali pěstovat … (4 rudá růže a 2 vysoký
                  keř).
                </p>
                <p>Na večírku jsme grilovali … (výborný stejk).</p>
                <p>Na zahrádce běhají … (2 pruhovaná kočička).</p>
                <p>
                  K Vánocům jsem koupila pro … (svoje 3 sestra) … (vánoční
                  dárek).
                </p>
                <p>(Náš drahý telefon) … měly … (rozbitý displej).</p>
                <p>
                  Na oslavu narozenin jsem přinesla … (barevný balonek) ve tvaru
                  srdíčka.
                </p>
                <p>Naše sousedka rozbila … (4 — tmavý talíř).</p>
                <p>Vzali jste si s sebou … (ten plastový kufr)?</p>
                <p>Malé dítě dělalo … (svůj první krok).</p>

                <div>
                  <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                  <Collapse in={keys.getValue(7)} timeout={2000}>
                    <div className="fst-italic">
                      Tvarohové knedlíky, jahodové sušenky, čtyři nová firemní
                      auta a kaminony, dva banánové nápoje, čtyři rudé růže a
                      dva vysoké keře, výborné stejky, dvě pruhované kočičky,
                      svoje tři sestry, vánoční dárky, naše drahé telefony,
                      rozbité displeje, barevné balonky, čtyři tmavé talíře, ty
                      plastové kufry, svoje první kroky.
                    </div>
                  </Collapse>
                </div>
              </div>
              {/* Task 8 */}
              <div>
                <p className="fw-bold">
                  8. Přepište nákupní seznam (список продуктов) do množného
                  čísla — použijte i čísla od 2 do 4.
                </p>
                <figure>
                  <img
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_5/Obr%C3%A1zek+%C4%8D.+2.jpg"
                    alt="Obrázek č. 1"
                    width="100%"
                    height="auto"
                  />
                  <figcaption>
                    <strong>
                      <i>Obrázek č. 2</i>
                    </strong>
                  </figcaption>
                </figure>

                <p className="text-uppercase fw-bold">NÁKUPNÍ SEZNAM</p>
                <ul>
                  <li>červená paprika</li>
                  <li>zelené střední jablko</li>
                  <li>banán</li>
                  <li>čokoládová sušenka</li>
                  <li>jahodová žvýkačka</li>
                  <li>celozrnný rohlík</li>
                  <li>zakysaná smetana</li>
                  <li>nový tmavý talíř</li>
                  <li>kuřecí prso</li>
                </ul>
                <div>
                  <button onClick={() => keys.toggleKey(8)}>Klíče</button>
                  <Collapse in={keys.getValue(8)} timeout={2000}>
                    <div className="fst-italic">
                      Červené papriky, zelená střední jablka, banány, čokoládové
                      sušenky, jahodové žvýkačky, celozrnné rohlíky, zakysané
                      smetany, nové tmavé talíře, kuřecí prsa.
                    </div>
                  </Collapse>
                </div>
              </div>
              {/* Task 9.1 */}
              <div>
                <p className="fw-bold">
                  9.1. Přečtěte si texty a doplňte správné formy slov.
                </p>
                <div>
                  <p className="fw-bold">a) Text. Učitel Michal Zídek.</p>
                  <p>
                    Učitel Michal Zídek má ve své sbírce asi tisíc podpisů
                    slavných lidí. «... (tento podpis) jsem začal sbírat, když
                    mi bylo 10 let,» říká Michal. «Mám rád … (divadlo a zajímavý
                    film), a tak jsem nejdřív sbíral jenom … (podpis) slavných
                    herců a hereček, které jsem obdivoval. Když je ale člověk
                    starší, začnou ho zajímat i … (jiná věc), třeba …
                    (nejrůznější kniha, obdivuhodný vynález), politika a
                    filosofie. Proto jsem začal sbírat i podpisy dalších
                    slavných osobností. Když jsem se naučil … (nějaký cizí
                    jazyk), jakou je angličtina, francouzština a němčina, začal
                    jsem psát a posílat … (dlouhý dopis) lidem z celého světa.
                    Tak jsem získal … (cenný autogram) od sira Edmunda
                    Hillaryho, tibetského dalajlámy, Marlene Dietrich nebo
                    Nelsona Mandely. Moje sbírka nemá velkou finanční hodnotu,
                    ale je hezké vědět, že jste svým zájmem udělali někomu
                    radost. Lidé už nebudou, ale podpisy zůstanou a člověk má
                    aspoň … (hezká vzpomínka) na někoho, koho si váží.»
                  </p>
                  <div>
                    <button onClick={() => keys.toggleKey(9)}>Klíče</button>
                    <Collapse in={keys.getValue(9)} timeout={2000}>
                      <div className="fst-italic">
                        Tyto podpisy, divadla a zajímavé filmy, jiné věci,
                        nejrůznější knihy, obdivuhodné vynálezy, nějaké cizí
                        jazyky, dlouhé podpisy, cenné autogramy, hezké
                        vzpomínky.
                      </div>
                    </Collapse>
                  </div>
                </div>

                <div>
                  <p className="fw-bold">b) Text. Bratři Nezkusilovi.</p>
                  <p>
                    Každý, kdo zná bratry Nezkusilovy, zná i jejich kuriózní
                    sbírku. Bratři Adam a Jindřich jsou zkušení doktoři. Adam
                    říká: «Já pracuju jako dětský doktor na poliklinice a
                    Jindřich je specialista na dětské ušní, nosní a krční
                    klinice. Oba sbíráme … (různá zajímavá věc), které si děti
                    strčily do nosu, ucha nebo které vdechly. Člověk by nevěřil,
                    co všechno už máme! … (kousek lega, barevný korálek,
                    knoflík, pecka z pomeranče a mandarinky, kolo z autíček,
                    šicí jehla, špendlík a velký i malý kousek skla).
                    Samozřejmě, že sbírku nemáme doma. Máme ji na klinice, kde
                    pracuje bratr. Je v čekárně před jeho ordinací jako výstraha
                    pro děti a … (jejich maminka).»
                  </p>
                  <div>
                    <button onClick={() => keys.toggleKey(10)}>Klíče</button>
                    <Collapse in={keys.getValue(10)} timeout={2000}>
                      <div className="fst-italic">
                        Různé zajímavé věci, kousky lega, barevné korálky,
                        knoflíky, kola z autíček, šicí jehly, špendlíky, velké a
                        malé kousky skla, jejich maminky.
                      </div>
                    </Collapse>
                  </div>
                </div>

                <div>
                  <p className="fw-bold">c) Text. Důchodkyně Dana Černá.</p>
                  <p>
                    «Celý život jsem byla vášnivá sběratelka,» říká důchodkyně
                    Dana Černá. «Jsem po tatínkovi a po mamince. Všichni u nás v
                    rodině něco sbírali. Tatínek sbíral … (známka a vzácná
                    mince) a maminka milovala … (květina) a sbírala … (malovaný
                    keramický květináč). Já jsem taky pořád něco sbírala — …
                    (stará pohlednice, barevný ubrousek, vlaková jízdenka, malé
                    autíčko i hezký kamínek). Když mi bylo třináct, poslala nám
                    moje sestřenice krásné svatební oznámení. Bylo vtipné a
                    dojemné, a tak jsem si ho nechala na památku. To byl vlastně
                    «základní kámen» mojí sbírky. Dneska mi … (hezké svatební
                    oznámení) posílají všichni známí a příbuzní. Mám jich skoro
                    už pět tisíc. A jaké jsou … (můj nejlepší kousek)? Určitě
                    svatební oznámení mých dětí a moje vlastní. Člověk tomu
                    nechce ani věřit, že jsme s manželem spolu už padesát let!»
                  </p>
                  <div>
                    <button onClick={() => keys.toggleKey(11)}>Klíče</button>
                    <Collapse in={keys.getValue(11)} timeout={2000}>
                      <div className="fst-italic">
                        Známky a vzácné mince, květiny, malované keramické
                        květináče, staré pohlednice, barevné ubrousky, vlakové
                        jízdenky, malá autíčka, hezké kamínky, hezká svatební
                        oznámení, moje nejlepší kousky.
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
                    Внимание! Задание № 9.2 проверит преподаватель.
                  </p>
                  <p>
                    <i>
                      Ответы напишите и отправьте их на проверку в группу
                      Telegram c преподавателем или с потоком.
                    </i>
                  </p>
                </div>

                {/* Task 9.2 */}
                <div>
                  <p className="fw-bold">
                    9.2. Přečtěte si texty ze zadání 9.1 a odpovězte na otázky.
                    Odpovědi nahrajte na diktafon.
                  </p>
                  <ol>
                    <li>Co sbírá Michal?</li>
                    <li>Co sbírají Adam a Jindřich?</li>
                    <li>Co sbírá Dana?</li>
                    <li>Z jakého důvodu to sbírají?</li>
                    <li>Čí sbírka vás nejvíc zaujala a proč?</li>
                    <li>Sbírali jste někdy něco?</li>
                  </ol>
                </div>

                {/* Task 9.3 */}
                <div>
                  <p className="fw-bold">
                    9.3. Podle textu ze zadání 9.1 označte, co je/není pravda
                    (ANO nebo NE).
                  </p>
                  <ol>
                    <li>
                      Michal sbírá jenom podpisy herců.
                      <strong>(ANO / NE)</strong>
                    </li>
                    <li>
                      Michal svou sbírku dobře prodat
                      <strong>(ANO / NE)</strong>
                    </li>
                    <li>
                      Jeho sbírka má velkou finanční hodnotu.
                      <strong>(ANO / NE)</strong>
                    </li>
                    <li>
                      Adam a Jindřich Nezkusilovi sbírají věci, které si jejich
                      děti strčily do nosu.
                      <strong>(ANO / NE)</strong>
                    </li>
                    <li>
                      Adam a Jindřich mají sbírky doma.
                      <strong>(ANO / NE)</strong>
                    </li>
                    <li>
                      Dana Černá sbírá květináče.
                      <strong>(ANO / NE)</strong>
                    </li>
                    <li>
                      Tatínek Dany sbíral známky a mince.
                      <strong>(ANO / NE)</strong>
                    </li>
                    <li>
                      Dana je vdaná už padesát let.
                      <strong>(ANO / NE)</strong>
                    </li>
                  </ol>

                  <div>
                    <button onClick={() => keys.toggleKey(12)}>Klíče</button>
                    <Collapse in={keys.getValue(12)} timeout={2000}>
                      <div>
                        <p>a) NE</p>
                        <p>b) NE</p>
                        <p>c) NE</p>
                        <p>d) NE</p>
                        <p>e) NE</p>
                        <p>f) NE</p>
                        <p>g) ANO</p>
                        <p>h) ANO</p>
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
                    Внимание! Задание № 9.4 проверит преподаватель.
                  </p>
                  <p>
                    <i>
                      Ответы напишите и отправьте их на проверку в группу
                      Telegram c преподавателем или с потоком.
                    </i>
                  </p>
                </div>
                {/* Task 9.4 */}
                <div>
                  <p className="fw-bold">
                    9.4. Odpovězte podle textu ze zadání 9.1. Odpovědi nahrajte
                    na diktafon.
                  </p>
                  <ol>
                    <li>
                      Kdy začal Michal Zídek sbírat podpisy slavných lidí?
                    </li>
                    <li>Co sbírala Dana Černá, když byla malá?</li>
                    <li>Jakou finanční hodnotu má sbírka Michala Zídka?</li>
                    <li>Jaký je nejlepší kousek Dany Černé?</li>
                    <li>
                      Proč sbírají bratři Nezkusilovi věci, které děti vdechly?
                    </li>
                    <li>Kolik podpisů má ve své sbírce Michal?</li>
                    <li>Kde pracují Adam a Jindřich?</li>
                    <li>Jak dlouho žije Dana se svým manželem?</li>
                    <li>
                      Kde mají bratři Nezkusilovi svou sbírku a proč zrovna tam?
                    </li>
                    <li>Co zajímá Michala?</li>
                  </ol>
                </div>

                {/* Task 10.1 */}
                <div>
                  <p className="fw-bold">
                    10.1. Poslechněte si krátký příběh a doplňte vynechaná slova
                    z textu.
                  </p>
                  <figure>
                    <audio
                      controls
                      src="https://czecha2bucket.s3.amazonaws.com/lekce_5/Hodni%CC%81+zlode%CC%8Cji..mp3"
                    ></audio>
                    <figcaption>
                      <strong>audio_2021-12-13_17-16-44</strong>
                    </figcaption>
                  </figure>
                  <p className="fw-bold">Hodní zloději.</p>
                  <p>
                    Odjeli jsme na dovolenou do Itálie — já a můj přítel. Když
                    jsme se v Římě vrátili z prohlídky města, našli jsme svoje
                    auto otevřené. Hned jsme viděli, že nás navštívili zloději.
                    V autě byl velký nepořádek — … byly otevřené a na podlaze
                    ležely … Na podlaze ležela nejen … , ale i … , které jsme si
                    přivezly. Vezli jsme si totiž … , jako jsou … a i ovoce,
                    jako jsou … .
                  </p>
                  <p>
                    Hned jsme začali kontrolovat, jestli nám něco nechybí. Moc
                    dobře nám nebylo! Pryč byly … , a to sice … a … . Naštěstí
                    je našli američtí turisté, kteří měli auto blízko našeho,
                    protože je tam zloději hodili na zem.
                  </p>
                  <p>
                    Italští zloději jsou asi bohatí lidé, … je nezajímaly,
                    všechno prohlédli, ale nic si neodnesli a … jsme nosili s
                    sebou. Naopak, když si prohlíželi naše věci, z kapsy jim
                    vypadli … — sto čtyřicet eur.
                  </p>
                  <p>
                    Šli jsme za ně do restaurace na výbornou večeři, kde jsme
                    potkali ještě … . A ještě jsme si s přítelem mohli koupit …
                    pro … .
                  </p>

                  <div>
                    <button onClick={() => keys.toggleKey(13)}>Klíče</button>
                    <Collapse in={keys.getValue(13)} timeout={2000}>
                      <div className="fst-italic">
                        <p>
                          Naše kufry a tašky, věci, naše barevná trička, tílka,
                          krátké kraťasy, potraviny, nějaké sladkosti,
                          čokoládové sušenky, sladké bonbony a banánové vafle,
                          tři banány, mandarinky, čtyři velké pomeranče a zelená
                          jablka, naše doklady, řidičské průkazy, naše letenky,
                          naše věci, drahé fotoaparáty, bankovky, naše tři staré
                          známé, hezké suvenýry, naše maminky a tatínky.
                        </p>
                      </div>
                    </Collapse>
                  </div>

                  <div>
                    <p className="fw-bold">
                      10.2. Vyplníte test č. 11. Podle příběhu, který jste si
                      poslechli, odpovězte na otázky.
                    </p>
                  </div>
                  <a
                    href="https://7vovmq2cdjr.typeform.com/to/I5HyMvtc"
                    target="blank"
                  >
                    Test 11. Vyberte správnou odpověď
                  </a>
                </div>

                {/* Task 11 */}
                <div>
                  <p className="fw-bold">
                    11. Poslechněte si dialogy a doplňte vynechaná slova.
                  </p>
                  <figure>
                    <audio
                      controls
                      src="https://czecha2bucket.s3.amazonaws.com/lekce_5/Iryna+a+Andrej.mp3"
                    ></audio>
                    <figcaption>
                      <strong>Iryna a Andrej</strong>
                    </figcaption>
                  </figure>
                  <div>
                    <p className="fw-bold">Dialog. Iryna a Andrej.</p>
                    <p>
                      Iryna: Lednice je prázdná! Andreji, je potřeba zajít do
                      obchodu!
                    </p>
                    <p>Andrej: Nechce se mi! Musím si udělat … .</p>
                    <p>
                      I: A večer chceš jíst? Neprotestuj a jdi! Tady jsem ti
                      napsala seznam. Nejprve zajdi do pekárny a kup … chleba. V
                      obchodě, kde se prodávají … a vem … . Také nezapomeň … .
                      Ještě potřebujeme … — to všechno koupíš v drogerii.
                    </p>
                    <p>
                      A: Možná bude lepší zajít rovnou do supermarketu. Za
                      hodinu budu zpátky.
                    </p>
                  </div>
                  <div>
                    <button onClick={() => keys.toggleKey(14)}>Klíče</button>
                    <Collapse in={keys.getValue(14)} timeout={2000}>
                      <div className="fst-italic">
                        <p>
                          Domácí úkoly, dva bochníky, mléčné výrobky, dvě másla
                          a 3 mléčné čokolády, krémové bonbony, 3 toaletní
                          papíry, tekutá mýdla a zubní pasty.
                        </p>
                      </div>
                    </Collapse>
                  </div>

                  <figure>
                    <audio
                      controls
                      src="https://czecha2bucket.s3.amazonaws.com/lekce_5/Cestuj%C3%ADc%C3%AD+a+Pokladn%C3%AD.mp3"
                    ></audio>
                    <figcaption>
                      <strong>Cestující a Pokladní</strong>
                    </figcaption>
                  </figure>
                  <div>
                    <p className="fw-bold">Dialog. Cestující a Pokladní.</p>
                    <p>
                      Cestující: Dobrý den, dejte mi, prosím, … do Bratislavy.
                    </p>
                    <p>Pokladní: Chcete první nebo druhou třídu?</p>
                    <p>
                      C: Druhou třídu. Řekněte mi, jak dlouho jede vlak do
                      Bratislavy?
                    </p>
                    <p>P: … . Máte … ?</p>
                    <p>C: Ano.</p>
                    <p>P: Dobře, … , prosím. Šťastnou cestu!</p>
                  </div>
                  <div>
                    <button onClick={() => keys.toggleKey(15)}>Klíče</button>
                    <Collapse in={keys.getValue(15)} timeout={2000}>
                      <div className="fst-italic">
                        <p>
                          Tři zpáteční lístky, čtyři hodiny, 2 malé kufry, vaše
                          lístky.
                        </p>
                      </div>
                    </Collapse>
                  </div>
                </div>
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

export default Lecture_5;
