import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const Lecture_6: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(13);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">6. lekce</h1>
        <p>Bydlení</p>
        <Link to="/admin/lectures/5">Предыдущий урок</Link>
        <Link to="/admin/lectures/7">Следующий урок</Link>
      </div>

      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <div className="fst-italic">
          <p className="fw-bold">
            Тема лекции этой недели «Bydlení», что означает жилье.
          </p>

          <p>
            С этим словарным запасом мы сталкиваемся регулярно, так как мы
            снимаем квартиры, решаем бытовые вопросы и организуем свой «уголок».
          </p>

          <p>
            Лекция содержит файл со словарным запасом, к нему записаны аудио с
            переводом и произношением от носителя языка.
          </p>
          <p>
            Для развития навыка понимания в лекции есть аудио, тексты и
            интересные задания.
          </p>
          <p>
            Для лучшей интеграции в Чехии мы добавили аутентичные ресурсы (видео
            и ссылки), чтобы у вас было представление о том, как это выглядит в
            реальности.
          </p>
          <p className="fw-bold">Наслаждайтесь чешским языком!</p>
        </div>

        {/* BYDLENÍ  SECTION */}
        <div>
          <p className="fw-bold">
            Pro procvičování slovní zásoby jsme připravili pro Vás kartičky na
            Quizlet:
          </p>
          <a
            href="https://quizlet.com/778527231/bydleni-flash-cards/?funnelUUID=c3540891-40c7-4c32-8123-d821d85b5130"
            target="blank"
          >
            OTEVŘÍT KARTIČKY
          </a>

          <p className="fw-bold">
            Скачайте файлы Slovní zásoba — Bydlení и Užitečné obrázky — Bydlení.
          </p>

          <div>
            <p className="fw-bold">
              Послушайте аудиофайлы Slovní zásoba — Bydlení.
            </p>

            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+Typy+bydleni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>
                  1. Slang - Slovní zásoba - Bydlení - Typy bydlení
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+Zpu%CC%8Asoby+bydleni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>
                  2. Slang - Slovní zásoba - Bydlení - Způsoby bydlení
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/3.1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+C%CC%8Ca%CC%81sti+bytu+a+domu.mp3"
              ></audio>
              <figcaption>
                <strong>
                  3.1. Slang - Slovní zásoba - Bydlení - Části bytu a domu
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/3.2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+C%CC%8Ca%CC%81sti+bytu+a+domu.mp3"
              ></audio>
              <figcaption>
                <strong>
                  3.2. Slang - Slovní zásoba - Bydlení - Části bytu a domu
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/4.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+Zar%CC%8Ci%CC%81zeni%CC%81+bytu-na%CC%81bytek.mp3"
              ></audio>
              <figcaption>
                <strong>
                  4. Slang - Slovní zásoba - Bydlení - Zařízení bytu-nábytek
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/5.1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+Doma%CC%81ci%CC%81+spotr%CC%8Cebic%CC%8Ce+a+vybaveni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>
                  5.1. Slang - Slovní zásoba - Bydlení - Domácí spotřebiče a
                  vybavení
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/5.2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+Doma%CC%81ci%CC%81+spotr%CC%8Cebic%CC%8Ce+a+vybaveni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>
                  5.2. Slang - Slovní zásoba - Bydlení - Domácí spotřebiče a
                  vybavení
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/6.1.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+Na%CC%81klady+na+bydleni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>
                  6.1. Slang - Slovní zásoba - Bydlení - Náklady na bydlení
                </strong>
              </figcaption>
            </figure>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/6.2.+Slang+-+Slovn%C3%AD+z%C3%A1soba+-+Bydlen%C3%AD+-+Na%CC%81klady+na+bydleni%CC%81.mp3"
              ></audio>
              <figcaption>
                <strong>
                  6.2. Slang - Slovní zásoba - Bydlení - Náklady na bydlení
                </strong>
              </figcaption>
            </figure>
          </div>

          <div>
            <p className="fw-bold">
              Одна из лучших практик языка — это диалоги.
            </p>
            <p className="fw-bold">
              Приступим к чтению, а потом к прослушиванию.
            </p>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+1.jpg"
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
            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+2.jpg"
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
          </div>

          <div>
            <p className="fw-bold">
              В следующих упражнениях мы будем использовать падежи, здесь вы
              можете скачать таблицы, в которых было все, что мы изучили вместе.
            </p>
            <p className="fw-bold">
              Используйте их для закрепления грамматики.
            </p>
            <p className="fw-bold bg-warning">
              Скачайте файл Pády - Číslo jednotné.
            </p>
            <a
              href="https://czecha2bucket.s3.amazonaws.com/lekce_6/P%C3%A1dy+-+%C4%8C%C3%ADslo+jednotn%C3%A9.pdf"
              target="blank"
            >
              Pády - Číslo jednotné
            </a>
          </div>

          <p className="fw-bold bg-warning">Выполните задания с №1.1. по №14</p>
          {/* Task 1.1 */}
          <div>
            <p className="fw-bold">
              1.1. Přečtěte si dialog č. 1, pak udělejte úkol č. 1.2. V tomto
              cvičení zopakujeme pády v jednotném čísle. Dole najdete potřebné
              tabulky.{" "}
            </p>
            <p>
              <i>
                1.1. Прочитайте диалог №1, потом выполните задание №1.2. В этом
                упражнении мы потренируем падежи в единственном числе. Внизу вы
                найдёте таблицы с правилами.
              </i>
            </p>
            <p className="fw-bold">Dialog č. 1. Halyna a Olga.</p>
            <p>Halyna: Jé, ahoj Olgo, to jsem ráda, že tě vidím! Jak se máš?</p>
            <p>
              Olga: Ahoj, Halyno. Mám se skvěle. Už čtyři měsíce bydlíme s
              Jurijem v novém bytě.
            </p>
            <p>H: A jaký je ten váš byt?</p>
            <p>
              O: Je moc hezký. Je velký a pohodlný. Musíš nás přijít navštívit.
            </p>
            <p>
              H: Přijdu ráda. Ale máš teď hodně práce, když musíš uklízet velký
              byt.
            </p>
            <p>
              O: To mi nevadí. Uklízím ráda. Velký úklid dělám jenom jednou
              týdně. Vysávám, utírám prach, taky peru a žehlím. Zametám každý
              den.
            </p>
            <p>H: Pomáhá ti Jurij?</p>
            <p>
              O: To víš, že ano. Myje nádobí, to mě nebaví. A umyl také okno,
              když jsem teď těhotná. A co vaše děťátko? Jsi v pořádku? Jak se
              cítíš?
            </p>
            <p>
              H: Cítím se dobře. A děťátko se narodí za měsíc. Všechno jsme už
              připravili. A kdy k nám přijdeš na návštěvu?
            </p>
            <p>O: Můžu přijít zítra odpoledne. Hodí se vám to?</p>
            <p>H: Určitě. Už se těším.</p>
          </div>

          {/* Task 1.2 */}
          <div>
            <p className="fw-bold">1.2. Odpovězte na otázky.</p>
            <p>
              <i>1.2. Ответьте на вопросы.</i>
            </p>
            <ol>
              <li>Jak dlouho bydlí Olga v novém bytě?</li>
              <li>S kým bydlí Olga?</li>
              <li>Kam přijde Halyna?</li>
              <li>Jak často dělá velký úklid?</li>
              <li>Co Olga dělá, když je velký úklid?</li>
              <li>Co dělá každý den?</li>
              <li>Co myje Jurij a co umyl Jurij ?</li>
              <li>Kdy se narodí dítě?</li>
              <li>Co bude Halyna dělat zítra odpoledne?</li>
              <li>Těší se Olga?</li>
            </ol>
            <div>
              <button onClick={() => keys.toggleKey(1)}>Klíče</button>
              <Collapse in={keys.getValue(1)} timeout={2000}>
                <div className="fst-italic">
                  <div className="row">
                    <div className="col">
                      <p>1. Bydlí tam čtyři měsíce.</p>
                      <p>2. Bydlí s Jurijem.</p>
                      <p>3. Halyna přijde na návštěvu.</p>
                      <p>4. Olga dělá velký úklid jednou týdně.</p>
                      <p>5. Vysává, utírá prach, pere a žehlí. </p>
                    </div>
                    <div className="col">
                      <p>6. Každý den zametá.</p>
                      <p>7. Jurij myje nádobí a umyl okno.</p>
                      <p>8. Dítě se narodí za měsíc.</p>
                      <p>9. Zítra odpoledne půjde navštívit Olgu a Jurije.</p>
                      <p>10. Ano, těší se.</p>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 2 */}
          <div>
            <p className="fw-bold">
              2. Doplňujte správné tvary podstatných jmen. V tomto cvičení
              zopakujeme pády v jednotném čísle. Používejte tabulku s pády.
            </p>
            <p>
              <i>
                2. Дополните правильную форму существительных. В этом упражнении
                мы потренируем падежи в единственном числе. Используйте таблицу
                с падежами.
              </i>
            </p>
            <ol>
              <li>Nechceme bydlet v domě bez ... (výtah).</li>
              <li>Nikdy nepiju kávu bez ... (cukr).</li>
              <li>Přišel na návštěvu bez ... (syn) a ... (dcera). </li>
              <li>Ten dům je velký, ale bez ... (zahrada).</li>
              <li>Cestovat bez ... (auto) je těžké.</li>
              <li>Dcera byla nemocná, ale dneska už je bez ... (teplota).</li>
              <li>Vadí mi pokoj bez ... (koupelna).</li>
              <li>Nechutná mu omáčka bez ... (maso).</li>
              <li>Ten nájem je bez ... (inkaso).</li>
            </ol>
            <div>
              <button onClick={() => keys.toggleKey(2)}>Klíče</button>
              <Collapse in={keys.getValue(2)} timeout={2000}>
                <div className="fst-italic">
                  <div className="row">
                    <div className="col">
                      <p>1. výtahu</p>
                      <p>2. cukru</p>
                      <p>3. syna a dcery</p>
                      <p>4. zahrady</p>
                      <p>5. auta</p>
                    </div>
                    <div className="col">
                      <p>6. teploty</p>
                      <p>7. koupelny</p>
                      <p>8. masa</p>
                      <p>9. inkasa</p>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 3.1 */}
          <div>
            <p className="fw-bold">
              3.1. Poslechněte si dialog č. 2, pak udělejte úkoly č. 3.2.; 3.3.
              a 3.4.
            </p>
            <p>
              <i>
                3.1. Послушайте диалог №2 и потом выполните задания №3.2.; №3.3.
                и №3.4.
              </i>
            </p>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Bydlen%C3%AD.+Dialog+1.+Lucie+a+Petra.mp3"
              ></audio>
              <figcaption>
                <strong>Bydlení. Dialog 1. Lucie a Petra</strong>
              </figcaption>
            </figure>
            <p className="fw-bold">Dialog č. 2. Lucie a Petra.</p>
            <div>
              <p>Lucie: Petro, mám výbornou zprávu.</p>
              <p>Petra: Co se stalo?</p>
              <p>L: Norbert našel v novinách inzerát na krásný byt.</p>
              <p>P: Kde je ten byt a jak je velký?</p>
              <p>L: Je to za Prahou. Víš, kde jsou Roztoky?</p>
              <p>P: Ten byt je v Roztokách? Cože? Vy nebudete v Praze?</p>
              <p>
                L: Hele, velkých měst mám dost. Tady je u domu velká zahrada a
                vedle domu park.
              </p>
              <p>P: Dobře, dobře. Kolik je tam pokojů?</p>
              <p>
                L: Jsou tam tři pokoje a kuchyň. V pokojích nic není, ty jsou
                úplně prázdné, v kuchyni je bílá kuchyňská linka s myčkou.
              </p>
              <p>P: Kdy jste ten byt viděli?</p>
              <p>
                L: Norbert ten inzerát četl ve středu, hned poprosil o schůzku a
                včera jsme se tam byli podívat.
              </p>
              <p>P: Výborně. A jaké jsou ty pokoje?</p>
              <p>
                L: Je tam velký světlý obývák, malá ložnice a malý dětský pokoj.
              </p>
              <p>
                P: Prosím? Dětský pokoj? Já jsem asi špatně slyšela? Ty jsi
                těhotná?
              </p>
              <p>
                L: Ne, zatím ne, ale jednou chci mít dítě. Tak zpátky k bytu,
                jo?
              </p>
              <p>P: Jasně. A v koupelně je vana, nebo jen sprcha?</p>
              <p>
                L: Vana. Jo, ještě něco, v tom bytě jsou dva záchody. Jeden
                záchod je v koupelně a druhý je naproti kuchyni. Petro, my ten
                byt strašně chceme.
              </p>
              <p>P: Bojím se zeptat, kolik stojí.</p>
              <p>L: No, nejlevnější není.</p>
              <p>P: Jasně.</p>
              <p>L: O jiných bytech ale nepřemýšlíme.</p>
              <p>
                P: Hm. To je skvělé, Lucko. Budete mít svůj byt. Tak to je fajn.
                Norbert je šikovný, že ho našel. To jsou zprávy. Nevěděla jsem,
                že hledáte nový byt.{" "}
              </p>
              <p>L: Nehledáme, ale tenhle byt našel nás.</p>
            </div>
          </div>

          {/* Task 3.2 */}
          <div>
            <p className="fw-bold">3.2. Odpovězte na otázky k dialogu č. 2.</p>
            <p>
              <i>3.2. Ответьте на вопросы к диалогу №2.</i>
            </p>
            <ol>
              <li>Co je u Lucie nového?</li>
              <li>Jak je velký ten byt?</li>
              <li>Kdy našel Norbert inzerát?</li>
              <li>Co je v koupelně? Napište dvě věci.</li>
              <li>Proč je Norbert šikovný?</li>
            </ol>
            <div>
              <button onClick={() => keys.toggleKey(3)}>Klíče</button>
              <Collapse in={keys.getValue(3)} timeout={2000}>
                <div className="fst-italic">
                  <p>1. Norbert našel nový byt.</p>
                  <p>2. Tři pokoje a kuchyň.</p>
                  <p>3. Ve středu.</p>
                  <p>4. Vana a záchod.</p>
                  <p>5. Našel inzerát na krásný byt.</p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 3.3 */}
          <div>
            <p className="fw-bold">3.3. Pracujte podle vzoru. Co je správně?</p>
            <p>
              <i>3.3. Работайте по образцу. Что верно?</i>
            </p>
            <p>
              <strong>Vzor 1:</strong>V dialogu nemluví Madla.{" "}
              <strong>(Ano)</strong>
            </p>{" "}
            <p>
              <strong>Vzor 2:</strong> V dialogu mluví Petra.{" "}
              <strong>(Ano)</strong>
            </p>
            <ol>
              <li>Ivana se zajímá o byty v Praze. </li>
              <li>Norbert zavolal na inzerát. </li>
              <li>Kolem domu je také příroda.</li>
              <li>V kuchyni chybí myčka. </li>
              <li>Byt Lucie viděla ve středu. </li>
              <li>Obývák a ložnice jsou malé. </li>
              <li>Lucie chce koupit byt, protože je těhotná. </li>
              <li>Ten byt je drahý. </li>
              <li>Lucie nechce hledat jiné byty.</li>
            </ol>
            <div>
              <button onClick={() => keys.toggleKey(4)}>Klíče</button>
              <Collapse in={keys.getValue(4)} timeout={2000}>
                <div className="fst-italic">
                  <div className="row">
                    <div className="col">
                      <p>
                        1. Ivana se zajímá o byty v Praze. <strong>(Ne)</strong>
                      </p>
                      <p>
                        2. Norbert zavolal na inzerát. <strong>(Ano)</strong>
                      </p>
                      <p>
                        3. Kolem domu je také příroda. <strong>(Ano)</strong>
                      </p>
                      <p>
                        4. V kuchyni chybí myčka. <strong>(Ne)</strong>
                      </p>
                      <p>
                        5. Byt Lucie viděla ve středu. <strong>(Ne)</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p>
                        6. Obývák a ložnice jsou malé. <strong>(Ne)</strong>
                      </p>
                      <p>7. Lucie chce koupit byt, protože je těhotná. (Ne)</p>
                      <p>
                        8. Ten byt je drahý. <strong>(Ano)</strong>
                      </p>
                      <p>
                        9. Lucie nechce hledat jiné byty. <strong>(Ano)</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 3.4 */}
          <div>
            <p className="fw-bold">
              3.4. Přečtěte si dialog č. 2 ještě jednou. Řekněte, jaký je ten
              byt.
            </p>
            <p>
              <i>
                3.4. Прочитайте диалог №2 ещё раз. Скажите, какая это квартира.
              </i>
            </p>

            <div>
              <p className="fw-bold">a) Odpovězte.</p>
              <p>
                <i>a) Ответьте.</i>
              </p>

              <ol>
                <li>Kde je park?</li>
                <li>
                  Co je v kuchyni? <i> Napište 2 věci.</i>
                </li>
                <li>Co za pokoje je v bytě? Napište všechny pokoje.</li>
                <li>Co není v koupelně?</li>
                <li>Co je naproti kuchyni?</li>
              </ol>

              <div>
                <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                <Collapse in={keys.getValue(5)} timeout={2000}>
                  <div className="fst-italic">
                    <p>1. Vedle domu.</p>
                    <p>2. Kuchyňská linka a myčka.</p>
                    <p>3. Obývák, ložnice a dětský pokoj.</p>
                    <p>4. Sprcha.</p>
                    <p>5. Druhý záchod.</p>
                  </div>
                </Collapse>
              </div>
            </div>

            <div>
              <p className="fw-bold">
                b) Pracujte podle vzoru. Doplňte jedno slovo.
              </p>
              <p>
                <i>b) Работайте по образцу. Дополните одно слово.</i>
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Ten byt je <strong>krásný.</strong>
                </i>
              </p>
              <p>
                <i>
                  nejlevnější, bílá, prázdné, světlý, šikovný, malá, krásný,
                  dětský
                </i>
              </p>
              <p>1. Pokoje jsou ... .</p>
              <p>2. Kuchyňská linka je ... .</p>
              <p>3. Obývák je ... .</p>
              <p>4. V bytě je také ... pokoj.</p>
              <p>5. Ložnice je ... .</p>
              <p>6. Ten byt není ... .</p>
              <p>7. Norbert je ... .</p>
              <div>
                <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                <Collapse in={keys.getValue(6)} timeout={2000}>
                  <div className="fst-italic">
                    <div className="row">
                      <div className="col">
                        <p>1. prázdné</p>
                        <p>2. bílá</p>
                        <p>3. světlý</p>
                        <p>4. dětský</p>
                      </div>
                      <div className="col">
                        <p>5. malá</p>
                        <p>6. nejlevnější</p>
                        <p>7. šikovný</p>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>

          {/* Task 4 */}
          <div>
            <p className="fw-bold">
              4. Petr a Eva hledají nějaký byt nebo dům. Poslechněte si dialog
              č. 3, kde chce bydlet Eva a kde chce bydlet Petr.
            </p>
            <p>
              <i>
                4. Пётр и Ева ищет какую-то квартиру или дом. Послушайте диалог
                №3, где хочет жить Пётр, а где хочет жить Ева.
              </i>
            </p>

            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/CD1_track_66+by+L%D0%BDda+Hol%D0%B1.mp3"
              ></audio>
              <figcaption>
                <strong>CD1_track_66 by Lнda Holб</strong>
              </figcaption>
            </figure>

            <p>1. Kdo chce bydlet na vesnici? Proč?</p>
            <p>2. Kdo chce bydlet ve městě. Proč?</p>

            <div>
              <button onClick={() => keys.toggleKey(7)}>Klíče</button>
              <Collapse in={keys.getValue(7)} timeout={2000}>
                <div className="fst-italic">
                  <p>1. Petr, protože je tam ticho a nejsou tam lidé.</p>
                  <p>2. Eva, protože je všechno blízko.</p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 5 */}
          <div>
            <p className="fw-bold">
              5. Přečtěte si dialog č. 4 a odpovězte na otázky.
            </p>
            <p>
              <i>5. Прочитайте диалог №4 и ответьте на вопросы.</i>
            </p>
            <p className="fw-bold">Dialog č. 4. Paní Hanušová a paní Veselá.</p>

            <div>
              <p>
                Paní Hanušová: Dobrý den, paní Veselá. Nejdete na metro? Můžeme
                jít spolu.{" "}
              </p>
              <p>Paní Veselá: Já nemůžu, čekám na syna. Ale jak se máte? </p>
              <p>
                Pí H: No špatně, paní Veselá. Máme starosti. Potřebujeme byt pro
                dceru, ale pořád nic nemáme.{" "}
              </p>
              <p>Pí V: A dívali jste se na internet? </p>
              <p>Pí H: No samozřejmě. </p>
              <p>Pí V: A jak velký byt hledáte?</p>
              <p>Pí H: Minimálně 3+kk nebo 3+1.</p>
              <p>Pí V: A dcera si chce ten byt pronajmout, nebo koupit? </p>
              <p>Pí H: Koupit na hypotéku. </p>
              <p>
                Pí V: No, můj syn prodává byt. Má pěkný 3+1. Je tam velká
                kuchyň, obývák, ložnice, dětský pokoj a balkon.{" "}
              </p>
              <p>Pí H: No ne, to je náhoda! A kolik ten byt stojí? </p>
              <p>Pí V: Přesně nevím. Myslím, že syn říkal asi 3 miliony.</p>
            </div>

            <div>
              <p className="fw-bold">Otázky:</p>
              <p>1. Jaký problém má paní Hanušová? </p>
              <p>2. Hledala už paní Hanušová byt pro dceru na internetu?</p>
              <p>3. Kdo prodává byt? Paní Veselá, nebo její syn? </p>
              <p>4. Jak je ten byt velký? </p>
              <p>5. Ví paní Veselá, kolik byt stojí?</p>
            </div>
            <div>
              <button onClick={() => keys.toggleKey(8)}>Klíče</button>
              <Collapse in={keys.getValue(8)} timeout={2000}>
                <div className="fst-italic">
                  <p>1. Potřebuje byt pro dceru.</p>
                  <p>2. Ano</p>
                  <p>3. Syn prodává byt.</p>
                  <p>4. 3+1</p>
                  <p>5. Asi 3 miliony.</p>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 6.1 */}
          <div>
            <p className="fw-bold">
              6.1. Eva a Petr našli byt, který chtějí koupit. Eva mluví se
              sestrou Alenou. Poslechněte si dialog č. 5. Jaký je ten byt?
            </p>
            <p>
              <i>
                6.1. Ева и Пётр нашли квартиру, которую они хотят купить. Ева
                разговаривает с сестрой Алёной. Послушайте диалог №5. Какая это
                квартира?
              </i>
            </p>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/CD1_track_69+by+L%D0%BDda+Hol%D0%B1.mp3"
              ></audio>
              <figcaption>
                <strong>CD1_track_69 by Lнda Holб</strong>
              </figcaption>
            </figure>
          </div>

          {/* Task 6.2 */}
          <div>
            <div>
              <p className="fw-bold">
                6.2. Poslechněte si dialog č. 5 ještě jednou a vyplníte test č.
                10.
              </p>
            </div>
            <p>
              <i>
                6.2. Послушайте ещё раз диалог №5 и пройдите тест №10. Выберите
                правильный ответ.
              </i>
            </p>
            <a
              href="https://7vovmq2cdjr.typeform.com/to/YL06mJ8q"
              target="blank"
            >
              Test 10. Vyberte správnou odpověď
            </a>
          </div>

          {/* Task 7.1 */}
          <div>
            <p className="fw-bold">
              7.1. Poslechněte si dialog č. 6 a doplňte ho.
            </p>
            <p>
              <i>7.1. Послушайте диалог №6 и дополните его.</i>
            </p>
            <figure>
              <audio
                controls
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Dialog+%C4%8D.+6.+Petr+a+Eva..mp3"
              ></audio>
              <figcaption>
                <strong>CD1_track_70 by Lнda Holб</strong>
              </figcaption>
            </figure>

            <div>
              <p className="fw-bold">Dialog č. 6. Petr a Eva.</p>
              <p>
                Petr: Teda my jsme měli štěstí, viď, Evo. Byty jsou dneska
                drahé, ale my jsme sehnali levný.{" "}
              </p>
              <p>Eva: A velký! </p>
              <p>
                P: To je fajn, že v kuchyni už máme sporák, ... a kuchyňskou
                linku.{" "}
              </p>
              <p>
                E: A taky už máme nějaký nábytek. Postel a ... dáme do ložnice,
                ... do kuchyně a ... do obýváku. A co ještě potřebujeme?{" "}
              </p>
              <p>P: Já jsem vždycky chtěl mít v obýváku krásné velké ... .</p>
              <p>E: A co já? Já chci taky ... .</p>
              <p>
                P: Tak dobře, koupíme dvě krásná velká křesla. Ale potřebujeme
                aspoň dvě ... do kuchyně.{" "}
              </p>
              <p>E: Včera jsem viděla moc hezké ... a byly docela levné.</p>
              <p>
                P: Hm, ale nesmíme zapomenout, že máme taky dvě koupelny. A
                hlavně dva dětské pokoje.{" "}
              </p>
              <p>E: No, ty zatím můžeme nechat prázdné.</p>
              <p>P: Ne můžeme, ale ... ! Už nemáme ... .</p>
            </div>

            <div>
              <button onClick={() => keys.toggleKey(9)}>Klíče</button>
              <Collapse in={keys.getValue(9)} timeout={2000}>
                <div>
                  Ledničku, skříň, stůl, sedačku, křeslo, křeslo, židle, židle,
                  musíme, peníze.
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
              Внимание! Задание № 7.2 проверит преподаватель.
            </p>
            <p>
              <i>
                Запишите аудиофайлы и отправьте их на проверку в группу Telegram
                c преподавателем или с потоком.
              </i>
            </p>
          </div>

          {/* Task 7.2 */}
          <div>
            <p className="fw-bold">
              7.2. Zaznamenejte na audio vaše odpovědi na otázky k dialogu č. 6.
            </p>
            <p>
              <i>
                7.2. Запишите аудио с вашими ответами на вопросы к диалогу №6.
              </i>
            </p>
            <p className="fw-bold">Otázky:</p>
            <p>1. Proč měli Eva a Petr štěstí? </p>
            <p>2. Jaký nábytek dají do ložnice? </p>
            <p>3. Co dají do kuchyně a do obýváku? </p>
            <p>4. Co chtěl vždycky mít v obýváku Petr? </p>
            <p>5. Chce Eva taky mít křeslo? </p>
            <p>6. Co chtějí koupit do kuchyně? </p>
            <p>7. Jaké židle viděla Eva včera? Byly levné? </p>
            <p>8. Proč musí Eva a Petr nechat něco prázdné?</p>
          </div>

          {/* Task 8 */}
          <div>
            <p className="fw-bold">8. Rozluštěte křížovku a napište tajenku.</p>
            <p>
              <i>8. Разгадайте кроссворд и запишите три скрытых слова.</i>
            </p>
            <p>1. Pokoj, který je venku.</p>
            <p>2. Věc, kde se myjí ruce.</p>
            <p></p>
            <p>3. Jsou na ni obrázky, hodiny, okna, poličky.</p>
            <p>4. Vedle nich je zvonek. Jdeme do domu nebo z domu.</p>
            <p>5. Je na něm kniha, hrnek, lampa.</p>
            <p>6. Je v koupelně, na umyvadle nebo u umyvadla.</p>
            <p>7. Je v koupelně s umyvadlem a sprchou. Myjeme se v ni.</p>
            <p>
              8. Je v koupelně, je na chodbě, někdy je také ve skříni. Vidíme
              obraz.
            </p>
            <p>9. Je na ni polštář a spíme na ni.</p>
            <p>10. Stojí na stole, je u postele. Světlo.</p>
            <p>11. Můžeme ho otevřít a zavřít. Je skleněné.</p>
            <p>12. Je malý a je vedle dveří. Zvuk, alarm.</p>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+5.jpg"
                alt="Obrázek č. 5"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 5</i>
                </strong>
              </figcaption>
            </figure>
            <p className="fw-bold">Tajenka: … , … a … .</p>
            <div>
              <button onClick={() => keys.toggleKey(10)}>Klíče</button>
              <Collapse in={keys.getValue(10)} timeout={2000}>
                <div className="row fst-italic">
                  <div className="col">
                    <p>1. Balkon</p>
                    <p>2. Umyvadlo</p>
                    <p>3. Stěna</p>
                    <p> 4. Dveře</p>
                    <p> 5. Stůl</p>
                    <p> 6. Mýdlo</p>
                  </div>
                  <div className="col">
                    <p>7. Vana</p>
                    <p>8. Zrcadlo</p>
                    <p>9. Postel</p>
                    <p>10. Lampa</p>
                    <p>11. Okno</p>
                    <p>12. Zvonek</p>
                  </div>

                  <p>
                    <strong>Tajenka:</strong>byt, dům a domov
                  </p>
                </div>
              </Collapse>
            </div>
          </div>

          <div>
            <p className="fw-bold bg-warning">Интересное уточнение от Дарьи.</p>

            <div className="text-danger fst-italic">
              <p>
                <strong>Pozor!</strong> <br /> Чехи различают 2 понятия «дом».
              </p>
              <p>
                <strong>Dům</strong> — место проживания «физическое».
              </p>
              <p>
                <strong>Domov </strong>— используется в контексте «родного
                дома», например место, где мы родились или жили с родителями.
              </p>
              <p>
                Сейчас, например, живя в Чехии я могу сказать, что Россия этой
                мой «domov».
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
                Запишите аудиофайлы и отправьте их на проверку в группу Telegram
                c преподавателем или с потоком.
              </i>
            </p>
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
                Запишите аудиофайлы и отправьте их на проверку в группу Telegram
                c преподавателем или с потоком.
              </i>
            </p>
          </div>

          {/* Task 9 */}
          <div>
            <p className="fw-bold">
              9. Popište obrázek ústně a zaznamenejte to na diktafon.
            </p>
            <div>
              <p className="fw-bold">
                a) Na obrázku s nultým patrem si nezapomeňte zmínit barvy
                předmětů;
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> V pokoji je bílá lednička.
                </i>
              </p>
            </div>

            <div>
              <p className="fw-bold">
                b) Na obrázku s prvním patrem popište co nejvíc detailů;
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Na skříňce vedle gauče stojí rostlina s
                  žlutou květinou.
                </i>
              </p>
            </div>
            <div>
              <p className="fw-bold">
                c) Na obrázku s druhým patrem nezapomeňte zmínit místo, kde se
                nachází předmět.
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Postel stojí uprostřed vedle stěny.
                </i>
              </p>
            </div>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+6.jpg"
                alt="Obrázek č. 6"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 6</i>
                </strong>
              </figcaption>
            </figure>
          </div>

          {/* Task 10.1 */}
          <div>
            <p className="fw-bold">
              10.1. Přečtěte si inzeráty (объявления) a udělejte poté
              následující zadání.
            </p>
            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+7.jpg"
                alt="Obrázek č. 7"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 7</i>
                </strong>
              </figcaption>
            </figure>
          </div>

          {/* Task 10.2 */}
          <div>
            <p className="fw-bold">
              10.2. Vyberte odpověď ANO nebo NE podle toho, co je uvedeno v
              inzerátech.
            </p>
            <p>1. Pan Rubáš si chce koupit byt. </p>
            <p>2. Byt paní Pokorné je v prvním patře. </p>
            <p>3. Rodinný dům stojí 2 500 000,- Kč. </p>
            <p>4. U rodinného domku Dvořákových není garáž. </p>
            <p>5. Pan Rubáš chce bydlet v Brně. </p>
            <p>6. Za domem paní Pokorné je velké parkoviště. </p>
            <p>7. Dům Dvořákových je vedle školy. </p>
            <p>8. Za domem Dvořákových je hlavní silnice. </p>
            <p>
              9. V bytě paní Pokorné je kuchyň, koupelna s toaletou a další 3
              pokoje
            </p>
            <div>
              <button onClick={() => keys.toggleKey(11)}>Klíče</button>
              <Collapse in={keys.getValue(11)} timeout={2000}>
                <div className="row fst-italic">
                  <div className="col">
                    <p>
                      1. Pan Rubáš si chce koupit byt. <strong>(Ano)</strong>
                    </p>
                    <p>
                      2. Byt paní Pokorné je v prvním patře.{" "}
                      <strong>(Ano)</strong>
                    </p>
                    <p>
                      3. Rodinný dům stojí 2 500 000 Kč. <strong>(Ano)</strong>
                    </p>
                    <p>
                      4. U rodinného domku Dvořákových není garáž.{" "}
                      <strong>(Ne)</strong>
                    </p>
                    <p>
                      {" "}
                      5. Pan Rubáš chce bydlet v Brně. <strong>(Ano)</strong>
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      6. Za domem paní Pokorné je velké parkoviště.{" "}
                      <strong>(Ne)</strong>
                    </p>
                    <p>
                      7. Dům Dvořákových je vedle školy. <strong>(Ne)</strong>
                    </p>
                    <p>
                      8. Za domem Dvořákových je hlavní silnice.{" "}
                      <strong>(Ne)</strong>
                    </p>
                    <p>
                      9. V bytě paní Pokorné je kuchyň, koupelna s toaletou a
                      další 3 pokoje. <strong>(Ano)</strong>
                    </p>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>

          {/* Task 10.3 */}
          <div>
            <p className="fw-bold">
              10.3. Napište, komu mají zatelefonovat tito lidé. Opírejte se na
              informaci v inzerátech.
            </p>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+8.jpg"
                alt="Obrázek č. 8"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 8</i>
                </strong>
              </figcaption>
            </figure>

            <div>
              <button onClick={() => keys.toggleKey(12)}>Klíče</button>
              <Collapse in={keys.getValue(12)} timeout={2000}>
                <div className="fst-italic">
                  <p>1. Panu Dvořákovi</p>
                  <p>2. Panu Dvořákovi</p>
                  <p>3. Panu Rubašovi</p>
                  <p>4. Paní Pokorné</p>
                  <p>5. Paní Pokorné</p>
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
              Внимание! Задание №11 выполняется по желанию.{" "}
            </p>
          </div>

          {/* Task 11 */}
          <div>
            <p className="fw-bold">11. Najděte na obrázku slova ze seznamu.</p>
            <p>
              MIKROVLNKA, KNIHOVNA, LOŽNICE, LEDNICE, KUCHYNĚ, SPRCHA, OBÝVÁK,
              KŘESLO, ZÁCHOD, TALÍŘ
            </p>
            <p className="fw-bold bg-warning">Stáhněte si orázek č. 9.</p>
            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+9.jpg"
                alt="Obrázek č. 9"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 9</i>
                </strong>
              </figcaption>
            </figure>
          </div>

          {/* Task 12 */}
          <div>
            <p className="fw-bold">
              12. Najděte na obrázku slova, která jsou spojená s tématem
              «Bydlení», označte je, vypište, vyfoťte svoji práci a pošlete ji
              na kontrolu učiteli.
            </p>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+10.jpg"
                alt="Obrázek č. 10"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 10</i>
                </strong>
              </figcaption>
            </figure>
          </div>

          {/* Task 13 */}
          <div>
            <p className="fw-bold">
              13. Přečtěte si text a vypište neznámá slova.
            </p>
            <p>
              Lidé mají svůj vlastní dům nebo bydlí v několika poschoďových
              domech. To jsou panelákové nebo cihlové domy, které stojí jeden
              vedle druhého a tvoří sídliště. Na našem sídlišti jsou samé
              paneláky. Uvnitř domů jsou chodby, ze kterých je vchod do bytů.
              Byty mají ústřední topení. Dole v přízemí je výtah. Byt má různý
              počet pokojů. Tři plus jedna znamená, že byt má jednu kuchyni a
              tři pokoje. Zpravidla je to obývací pokoj (obývák), ložnice a
              dětský pokoj. Malý byt je garsoniéra (garsonka). Má jednu místnost
              a příslušenství. Vchod do bytu je obvykle přes předsíň. Bydlím v
              paneláku, má deset poschodí. V předsíni je věšák a zrcadlo. V
              obývacím pokoji je moderní nábytek, televize a video, počítač.
              Skoro celý den tam svítí slunce. Máme dvě velká okna a jeden
              balkon. Na okně jsou dva květináče. V ložnici stojí postel. Na
              posteli je prostěradlo, polštář a přikrývka. Vedle je noční
              stolek. Na stolku je malá lampička. Prádelník stojí v rohu
              místnosti. V dětském pokoji máme postel a poličky na hračky.
              Kuchyň není velká, ale je praktická a útulná. Tam je sporák na
              plyn, lednička a mraznička (mrazák), automatická myčka, kulatý
              stůl a židle. V kuchyňské sektorové skříňce je nádobí. V koupelně
              je u nás umývadlo a vana, sprcha tam není. Na poličce leží mýdlo,
              kartáček na zuby, zubní pasta. Vedle visí ručník. Je tu také
              pračka. Každá žena moc potřebuje pračku, protože často pere
              prádlo.{" "}
            </p>
          </div>
        </div>

        {/* Полезная информация при поиске жилья SECTION*/}
        <div>
          <h2>Полезная информация при поиске жилья</h2>

          <p>
            <i>
              Здесь представлены значения специализированных слов с которыми вы
              можете столкнуться на рынке недвижимости в Чехии.
            </i>
          </p>

          <div>
            <h3 className="fw-bold bg-warning">Типы недвижимости</h3>
            <p className="fw-bold">1+kk</p>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+11.jpg"
                alt="Obrázek č. 11"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 11</i>
                </strong>
              </figcaption>
            </figure>

            <p className="fw-bold">2+kk</p>
            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Obr%C3%A1zek+%C4%8D.+12.jpg"
                alt="Obrázek č. 12"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Obrázek č. 12</i>
                </strong>
              </figcaption>
            </figure>

            <p>
              <strong>1+kk или 1+1</strong> — типичное чешское обозначение
              количества комнат в квартире.
            </p>
            <p>
              <strong>1+kk</strong>означает, что в квартире 1 комната,
              соединённая с кухней.
            </p>
            <p>
              <strong>1+1</strong> означает, что в однокомнатной квартире
              отдельная кухня.
            </p>
            <p>
              <strong>2+kk</strong> означает, что в квартире 2 комнаты, одна из
              которых соединена с кухней, и т. д.
            </p>
          </div>

          <div>
            <h3 className="fw-bold bg-warning">Объекты недвижимости</h3>
            <p>
              <strong>Byt </strong> — квартира
            </p>
            <p>
              <strong>Chalupa </strong> — небольшой дом в сельской местности с
              полем или огородом.
            </p>
            <p>
              <strong>Chata </strong> — дача. Хатой чехи чаще всего называют
              дома для летнего отдыха.
            </p>
            <p>
              <strong>Dřevostavba </strong> — деревянное строение
            </p>
            <p>
              <strong>Garsoniéra </strong> — это квартиры типа гарсонки, т.е.
              1+kk.
            </p>
            <p>
              <strong>Patrový dům </strong> — дом с несколькими этажами
            </p>
            <p>
              <strong>Přízemní dům </strong> — одноэтажный дом
            </p>
            <p>
              <strong>Rodinný dům </strong> — семейный дом
            </p>
            <p>
              <strong>Samostatný dům </strong> — отдельно стоящий дом
            </p>
            <p>
              <strong>V bloku / řadový dům </strong> — дословно переводится как
              рядный дом, но мы же понимаем такой тип недвижимости под термином
              таунхаус
            </p>
            <p>
              <strong>Vila </strong> — вилла, элитный отдельно стоящий жилой дом
              на несколько семей с двумя этажами и садом.
            </p>
            <p>
              <strong>Vlastnictví </strong> — форма собственности недвижимости.
              <strong>Osobní</strong> — частная собственность,{" "}
              <strong>Družstevní</strong> — кооперативная собственность,{" "}
              <strong>Státní</strong>— государственная собственность.
            </p>
          </div>

          <div>
            <h3 className="fw-bold bg-warning">
              Состояние объекта недвижимости
            </h3>
            <div>
              <p>
                <strong>Stav objektu </strong> — состояние объекта
              </p>
              <p>
                <strong>Velmi dobrý </strong> — очень хорошее
              </p>
              <p>
                <strong>Dobrý </strong> — хорошее
              </p>
              <p>
                <strong>Špatný </strong> — ужасное, это значит что квартира
                находится в очень плачевном состоянии. Правда, иногда находятся
                убитые квартиры, находящиеся в хорошем прочном доме, но зато у
                них есть потенциал, и если у вас есть деньги, руки и силы, то
                после ремонта такой объект может хорошо вырасти в цене.
              </p>
              <p>
                <strong>Ve výstavbě </strong> — на этапе строительства. В
                настоящее время стоимость квартир в Чехии в строящемся доме не
                отличается от стоимости квартир в уже построенном.
              </p>
              <p>
                <strong>Developerské projekty </strong> — ом ещё не построен, вы
                на бумаге видите только проект.
              </p>
              <p>
                <strong>Novostavba </strong> — новостройка. У нас есть большой
                пост о новостройках «Новостройки в Праге», где вы можете
                посмотреть, как выглядят типичные новые дома в столице Чехии.
              </p>
              <p>
                <strong>K demolici </strong> — под снос
              </p>
              <p>
                <strong>Před rekonstrukcí </strong> — дом перед капитальным
                ремонтом. Это значит, что как только капитальный ремонт
                закончится, стоимость объекта вырастет.
              </p>
              <p>
                <strong>Po rekonstrukci</strong> — дом после капитального
                ремонта. Это значит, что квартира находится в старом доме, но
                уже проведён капитальный ремонт: заменена система отопления,
                трубы водоснабжения, электрика, отремонтирована кровля и фасад.
              </p>
            </div>
          </div>

          <div>
            <h3 className="fw-bold bg-warning">
              Оснащение и описание объекта недвижимости
            </h3>

            <div>
              <p>
                <strong>Balkón, Terasa, Lodžie </strong> — балкон, терраса,
                лоджия. Кстати, площадь всех этих террас входит в общую площадь
                квартиры, и стоимость квадратного метра этих балконов будет
                такой же, как и стоимость жилой площади.
              </p>
              <p>
                <strong>Bazén </strong> — наличие бассейна. Кстати, в
                многоквартирных новостройках тоже стали делать бассейны.
              </p>
              <p>
                <strong>Na klíč </strong> — строящийся дом «под Klíče».
              </p>
              <p>
                <strong>Parkování или Garáž </strong> — наличие парковки или
                гаража.
              </p>
              <p>
                <strong>Poplatky </strong> — коммунальные платежи. Обычно в этом
                пункте указываются все статьи расходов на коммуналку:
                обслуживание жилья, электричество, вода, газ, отопление и
                прочее.
              </p>

              <p>
                <strong>Výtah </strong> — наличие в доме лифта. Особенно важно
                наличие и размер лифта для пожилых людей и для семей с детьми. В
                новых домах в Чехии всегда устанавливается лифт такого размера,
                чтобы можно было зайти туда с детской коляской; лифт всегда
                спускается на все этажи подземного паркинга.
              </p>
              <p>
                <strong>Sklep </strong> — склад, обычно склад располагается на
                этаже с паркингом.
              </p>
              <p>
                <strong>Bezbariérový </strong> — безбарьерный, это значит что в
                дом, например, можно легко попасть с коляской
              </p>
              <p>
                <strong>Užitná plocha </strong> — полезная площадь
              </p>
              <p>
                <strong>Cena </strong> — цена объекта. Это значит, что цена
                скорее всего не конечная, и может быть подписано следующее:
                <strong>Poznámka k ceně</strong> — примечание к цене; bez DPH
                (без НДС), т. е. НДС в размере 21% нужно приплюсовать к цене;
                <strong>Bez provize</strong> — цена указана без учёта оплаты
                риелтора.
              </p>
              <p>
                <strong>Celková cena </strong> — конечная цена. Тут же может
                быть написано следующее: <strong>Včetně provize </strong> —
                включая оплату услуг риелтора;{" "}
                <strong>Včetně právního servisu</strong> — включая услуги
                юриста.
              </p>
              <p>
                <strong>RK (Realitní kancelář) </strong> — агентство
                недвижимости
              </p>
              <p>
                <strong>Topení </strong> — тип отопления, например,
                <strong>Ústřední dálkové</strong> — центральное отопление
              </p>
              <p>
                <strong>Odpad </strong> — одосток, например,{" "}
                <strong>Veřejná kanalizace</strong>— центральная канализация
              </p>
              <p>
                <strong>Umístění objektu </strong> — расположение объекта,
                например, <strong>Klidná část</strong> — тихое место;
              </p>
              <p>
                <strong>Doprava </strong> — транспортная доступность, обычно в
                этом поле пишут наличие поблизости того или иного транспорта:
                <strong>Silnice</strong> — трасса, <strong>MHD</strong> —
                общественный транспорт, <strong>Autobus</strong> — автобусная
                остановка
              </p>
              <p>
                <strong>Energetická náročnost budovy </strong> — класс
                энергоэффективности здания. Например,{" "}
                <strong>Třída C — Úsporná</strong> — экономичное;{" "}
                <strong>Třída G — Mimořádně nehospodárná</strong> —
                неэкономичное. Самый экономичный вариант с обозначением A: чем
                выше класс энергоэффективности, тем меньше составляют
                коммунальные платежи. Для сравнения, у квартиры с классом A
                могут быть счета ниже на 1 000 евро в год, чем у квартиры с
                классом G.
              </p>
              <p>
                <strong>Nízkoenergetický </strong> — дом с низким потреблением
                энергии. Обычно стоимость таких домов выше, т. к. при постройке
                применяется повышенная термоизоляция для устранения мостиков
                холода, устанавливаются хорошие окна, из которых не дует, а
                также продумывается и устанавливается правильная система
                отопления и вентиляции. Если думаете, что это всё шутки, то
                ничего подобного: чехи спустя рукава относятся к щелям, в домах
                и квартирах часто можно встретить неотрегулированные окна, а про
                наличие мостиков холода и говорить нечего.
              </p>
              <p>
                <strong>Podlaží </strong>или <strong> Patro </strong> — этаж.
                Например, если указано следующее:{" "}
                <strong>2. podlaží z celkem 5 včetně 1 podzemního</strong> — 2
                этаж из 5 этажей, вKlíčeая один подземный. Обычно в подземных
                этажах располагается парковка. Количество этажей с парковкой 1 -
                3 в зависимости от высота здания.
              </p>
              <p>
                <strong>Voda </strong> — тип водоснабжения, например,{" "}
                <strong>Dálkový vodovod</strong> — центральное водоснабжение
              </p>
              <p>
                <strong>Prodej </strong> — продажа
              </p>
            </div>
          </div>
        </div>

        {/* Pro ty nejzvědavější SECTION*/}
        <div>
          <div>
            <h2>Pro ty nejzvědavější</h2>
            <p className="fw-bold">Для самых любопытных</p>
          </div>

          <div>
            <p>
              <i>
                Здесь мы для вас подготовили примеры настоящих объявлений,
                посмотрите, всё ли вам понятно?
              </i>
            </p>

            <p className="fw-bold">Jak vypadá opravdový inzerát? </p>
            <p>Как выглядит настоящее объявление?</p>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Jak+vypad%C3%A1+opravdov%C3%BD+inzer%C3%A1t_1.jpg"
                alt="Zdroj: Sreality.cz"
                width="100%"
                height="auto"
              />
            </figure>

            <figure>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_6/Jak+vypad%C3%A1+opravdov%C3%BD+inzer%C3%A1t_2.jpg"
                alt="Zdroj: Sreality.cz"
                width="100%"
                height="auto"
              />
              <figcaption>
                <strong>
                  <i>Zdroj: Sreality.cz</i>
                </strong>
              </figcaption>
            </figure>
          </div>

          <div
            style={{
              backgroundColor: "#aae096",
            }}
          >
            <p className="fw-bold">
              Внимание! Задание № 14 проверит преподаватель.
            </p>
            <p>
              <i>
                Ответы напишите от руки, сфотографируйте и отправьте их на
                проверку в группу Telegram c преподавателем или с потоком.
              </i>
            </p>
          </div>
          {/* Task 14 */}
          <div>
            <p className="fw-bold">
              14. Jaký byste si vybrali byt na pronájem a proč? Napište o tom
              pár vět.{" "}
            </p>
          </div>

          <div>
            <p className="fw-bold bg-warning">
              Kde můžete najít inzeráty na pronájem nebo na prodej bytu:
            </p>

            <p>
              <a href="https://www.sreality.cz/" target="blank">
                Sreality.cz
              </a>{" "}
              — один из самых популярных. Он доступен в русскоязычной версии и
              располагает удобной системой поиска. Из относительных минусов —
              большинство предложений на нем публикуют риелторы, поэтому
              арендаторам нужно быть готовым к дополнительным расходам.
            </p>
            <p>
              <a href="https://www.reality.cz/" target="blank">
                Reality.cz
              </a>{" "}
              — ещё один портал с большой базой и похожим функционалом, но
              существующий только в чешской версии.
            </p>
            <p>
              <a href="https://www.bezrealitky.cz/" target="blank">
                Bezrealitky.cz
              </a>{" "}
              — ресурс для поиска жилья напрямую, без посредников.
            </p>

            <p>
              <i>
                <strong>Zdroj:</strong>{" "}
                <a
                  href="https://420on.cz/realty/realty_market/57331-arenda-kvartir-v-chehii-dlya-chaynikov"
                  target="blank"
                >
                  420on.cz
                </a>
              </i>
            </p>
          </div>

          <div className="fw-bold">
            <p className="bg-warning">
              Chtěli byste si něco poslechnout o bytech v ČR?
            </p>
            <p>Máme pro vás pár inspirací.</p>
            <p>
              a){" "}
              <a
                href="https://www.youtube.com/watch?v=B_f5W67WgRA&feature=youtu.be"
                target="blank"
              >
                3 tipy, když dnes hledáte byt
              </a>
            </p>
            <p>
              b){" "}
              <a
                href="https://www.youtube.com/watch?v=Q_T_u2kGAuI&feature=youtu.be"
                target="blank"
              >
                Jak postupovat při koupi bytu?
              </a>
            </p>
            <p>
              c){" "}
              <a
                href="https://www.youtube.com/watch?v=u59BFrv0SSA&feature=youtu.be"
                target="blank"
              >
                Pronájem bytu Praha - Jihlavská
              </a>
            </p>
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

export default Lecture_6;
