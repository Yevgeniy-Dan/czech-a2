import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const LectureEight: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(8);
  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">8. lekce</h1>
        <p> Kondicionál (Podmiňovací způsob – bych, kdybych, abych) </p>
        <Link to="/admin/lectures/7">Предыдущий урок</Link>
        <Link to="/admin/lectures/9">Следующий урок</Link>
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <div className="fst-italic">
          <p>
            В этой лекции мы изучим{" "}
            <strong>«Kondicionál» («Cослагательное наклонение»).</strong>
          </p>
          <p>
            Его мы применяем, когда говорим «я БЫ хотела на море», «могли БЫ вы
            мне помочь» и т. д.
          </p>
          <p>
            Но кроме этого мы используем такие речевые обороты как «ЕСЛИ БЫ ты
            знал заранее...» или «нам сказали, ЧТОБЫ мы ПРИНЕСЛИ».
          </p>
          <p>
            Как вы заметили в русском языке нет разницы, какое это число и лицо.
          </p>
          <p>
            Я бы, ты бы, он бы, мы бы... все одинаково, но в чешском разница
            есть!
          </p>
          <p>Этим-то мы и займёмся на этой лекции.</p>
        </div>

        {/* KONDICIONÁL */}
        <div>
          <h2>KONDICIONÁL</h2>
          <div>
            <p className="bg-warning fw-bold">Просмотрите видео с Дарьей.</p>

            <p className="text-danger fst-italic">
              Всё фиксируйте в тетрадь и повторяйте вслух.
            </p>

            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/fODlBRmTeB4"
              title="8  KONDICIONÁL"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div>
              <p className="fw-bold">Slova z videa</p>
              <div className="fst-italic">
                <p>Kdybych něco koupil dřív, mohl bych ušetřit peníze.</p>
                <p>Maminka mi řekla, abych koupil mléko.</p>
                <br />
                <p>Koupil bys něco?</p>
                <p>Chci, abys koupil mléko.</p>
                <br />
                <p>Koupil by Petr nové auto?</p>
                <p>Kdyby Petr koupil nové auto, byl by šťastný.</p>
                <p>Chci ho poprosit, aby koupil mléko.</p>
                <br />
                <p>Koupili bychom nový dům?</p>
                <p>Kdybychom koupili nový dům...</p>
                <p>Chci, abychom koupili nový dům.</p>
                <br />
                <p>Koupili byste nový dům?</p>
                <p>Co by bylo, kdybyste koupili nový dům? </p>
                <p>Maminka potřebuje, abyste koupili nový dům.</p>
                <br />
                <p>Kamarádi by koupili nový dům?</p>
                <p>
                  Kdyby kamarádi koupili nový dům, chodili bychom k nim na
                  návštěvu každý den.
                </p>
                <p>Chtěli bychom, aby naši kamarádi koupili dům.</p>
                <br />
                <p>
                  Podíval <strong> by ses </strong>na nový film?
                </p>
                <p>
                  Postěžoval <strong> by sis?</strong>
                </p>
                <br />
                <p>Podíval bych se...</p>
                <p>Podívali bychom se...</p>
                <br />
                <p>Šel jsem do obchodu, abych si něco koupil.</p>
                <br />
                <p>Mohli byste přijít později?</p>
                <br />
                <p>Mohla byste něco pro mě udělat?</p>
                <p>Mohla byste něco ukázat? </p>
                <p>Mohla byste přinést sůl?</p>
                <br />
                <p>Mohl byste přinést sůl?</p>
              </div>
            </div>
          </div>

          <div>
            <p className="bg-warning fw-bold">
              Выполните задания с № 1 по № 13
            </p>
            {/* Task 1 */}
            <div>
              <p className="fw-bold">
                1. Přečtěte si text a zvýrazněná slova dejte do podmiňovacího
                způsobu.
              </p>
              <p className="fw-bold">Dejte si pozor na pozice «bych».</p>
              <p className="fw-bold">
                <i> Vzor:</i>
              </p>
              <p>
                <i>
                  <strong>Mám</strong> velkou vilu v Praze 6, velkou zahradu a
                  bazén &#8594; <strong>Měl bych</strong> velkou vilu v Praze 6,
                  velkou zahradu a bazén.
                </i>
              </p>
              <p className="fw-bold">
                Text. Tom a výhra v loterii. Kdybych vyhrál v loterii, můj život
                by byl úplně jiný.
              </p>
              <p>
                <strong> Mám</strong> velkou vilu v Praze 6, velkou zahradu a
                bazén. Samozřejmě <strong> mám</strong> taky luxusní auto a
                řidiče. <strong> Nepracuju</strong> a celý den{" "}
                <strong> odpočívám</strong>, jenom dvakrát za týden{" "}
                <strong>hraju </strong> squash a každý den ráno{" "}
                <strong>plavu</strong> v bazénu. Už sám{" "}
                <strong> nevařím</strong>, protože <strong>mám</strong> kuchaře,
                který mi <strong>vaří</strong> nejlepší a nejdražší speciality.
                Určitě sám <strong>neuklízím, mám</strong> na to firmu.{" "}
                <strong>Nakupuju</strong>
                jenom v luxusních obchodech. Hodně <strong>cestuju</strong>. V
                létě <strong>jedu</strong> na Havaj, kde <strong>mám</strong>{" "}
                luxusní dům. <strong>Mám</strong> tam taky jachtu.{" "}
                <strong>Nejsem</strong> ale egoista, <strong>dávám</strong>{" "}
                peníze na charitu. A pořád <strong>studuju</strong> češtinu,
                protože je to zajímavý jazyk.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(1)}>Klíče</button>
                <Collapse in={keys.getValue(1)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      <strong>Měl bych</strong> velkou vilu v Praze 6, velkou
                      zahradu a bazén. Samozřejmě <strong>bych měl </strong>taky
                      luxusní auto a řidiče. <strong> Nepracoval bych</strong> a
                      celý den <strong> bych odpočíval</strong>, jenom dvakrát
                      za týden <strong> bych hrál</strong> squash a každý den
                      ráno <strong>bych plaval</strong> v bazénu. Už{" "}
                      <strong>bych</strong> sám <strong>nevařil</strong>,
                      protože bych <strong>měl</strong> kuchaře, který by mi
                      vařil nejlepší a nejdražší speciality. Určitě{" "}
                      <strong>bych</strong> sám{" "}
                      <strong>neuklízel, měl bych</strong> na to firmu.
                      <strong>Nakupoval bych</strong> jenom v luxusních
                      obchodech. Hodně <strong>bych cestoval</strong>. V létě
                      <strong>bych jel</strong> na Havaj, kde{" "}
                      <strong>bych měl</strong> luxusní dům.{" "}
                      <strong>Měl bych</strong> taky jachtu.{" "}
                      <strong>Nebyl bych </strong> ale egoista,{" "}
                      <strong>dával bych</strong>
                      peníze na charitu. A pořád <strong>
                        bych studoval
                      </strong>{" "}
                      češtinu, proto je to zajímavý jazyk.
                    </p>
                  </div>
                </Collapse>
              </div>

              <div>
                <p className="bg-warning fw-bold">Уточнение от Дарьи.</p>
                <p className="text-danger">
                  <i>
                    <strong>Musel by změnit</strong> — был бы «обязан» изменить.
                  </i>
                </p>
                <p className="text-danger">
                  <i>
                    <strong>Měl by změnit</strong> — ему бы следовало изменить.
                  </i>
                </p>
              </div>

              <div>
                <p className="fw-bold">
                  Pamatujete si, jak Tom plánoval, co bude dělat, až vyhraje v
                  loterii?{" "}
                </p>
                <p className="fw-bold">Co by podle vás měl nebo neměl dělat?</p>

                <p>Měl by / Neměl by úplně změnit život?</p>
                <p>Měl by / Neměl by žít stejně jako dřív?</p>
                <p>Měl by / Neměl by přestat pracovat?</p>
                <p>Měl by / Neměl by přestat studovat češtinu?</p>
                <p>Měl by / Neměl by začít pít alkohol?</p>
                <p>Měl by / Neměl by moc utrácet?</p>
                <p>
                  Měl by / Neměl by být egoista a nedávat peníze na charitu?
                </p>
                <p>Měl by / Neměl by nakupovat jenom v luxusních obchodech?</p>
                <p>Měl by / Neměl by mít luxusní auto a řidiče?</p>
                <p>
                  Měl by / Neměl by mít kuchaře a jíst jenom nejlepší a
                  nejdražší speciality?
                </p>
                <p>Měl by / Neměl by hodně cestovat?</p>
                <p>Měl by / Neměl by často jezdit na Havaj?</p>
                <p>
                  Měl by / Neměl by pořád studovat češtinu, protože to je
                  zajímavý jazyk?
                </p>
              </div>

              <div>
                <p className="fw-bold">
                  А теперь добавим ещё практики для закрепления!
                </p>
                <p className="fw-bold bg-warning">
                  Просмотрите видео с Дарьей.
                </p>
                <p className="text-danger">
                  Всё фиксируйте в тетрадь и повторяйте вслух.
                </p>

                <iframe
                  width="949"
                  height="534"
                  src="https://www.youtube.com/embed/Od9KeH8WRyU"
                  title="8  KONDICIONÁL 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>

                <div>
                  <p className="fw-bold">Slova z videa</p>
                  <div className="fst-italic">
                    <p>Kdyby zítra pršelo, zůstali bychom doma.</p>
                    <p>
                      Kdybych byla prezidentkou, starala bych se o důchodce
                      (пенсионеры){" "}
                    </p>
                    <p>Kdyby kamarádka byla nemocná, poprosila by o pomoc </p>
                    <p>
                      Kdybychom přišli do práce pozdě, dostali bychom pokutu
                      (штраф){" "}
                    </p>
                    <p>Kdyby rodiče odjeli na dovolenou, byl bys šťastný? </p>
                    <p>Kdybyste vyhrál milion, co byste dělal? </p>
                    <p>
                      Kdyby hodně sněžilo (шёл снег), jel bych lyžovat (кататься
                      на лыжах).
                    </p>
                    <p>
                      Kdyby venku bylo špatné počasí, učili bychom se celý
                      víkend.
                    </p>
                    <p>
                      Kdyby mě vyhodili (выкинуть) z práce, hledala bych novou
                      práci.
                    </p>
                    <p>
                      Kdyby byla taková možnost (возможность), letěl bys do
                      vesmíru (космос)?
                    </p>
                    <p>Kdybyste měla čas, studovala byste další jazyk? </p>
                    <p>Kdybys neměl zlomenou nohu, hrál bys fotbal.</p>
                    <p>Kdyby nepršelo, šli bychom na procházku.</p>
                    <p>Kdyby nezavolala, měl bych špatnou náladu.</p>
                    <br />
                    <p>Mohl bys poprosit, aby nám pomohli.</p>
                    <br />
                    <p>Proč se učíte česky?</p>
                    <p>
                      Učím se česky, abych rozuměla Čechům / abych našla dobrou
                      práci.
                    </p>
                    <br />
                    <p>Proč jedeš do Řecka (Греция)?</p>
                    <p>
                      Jedu do Řecka abych uviděla moře / abych se opalovala
                      (загорать).
                    </p>
                    <br />
                    <p>Proč vaši kamarádi jedí zeleninu a ovoce?</p>
                    <p>Moji kamarádi jedí zeleninu a ovoce, aby byli zdraví.</p>
                    <br />
                    <p>Proč jedete do Alp?</p>
                    <p>Jedeme do Alp, abychom lyžovali.</p>
                    <br />
                    <p>Proč rodiče spěchají domů?</p>
                    <p>
                      Rodiče spěchají domů, aby co nejdřív uviděli svoje děti.
                    </p>
                    <br />
                    <p>Proč sis vzal prášek?</p>
                    <p>Vzal jsem si prášek, aby mě nebolela hlava.</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="fw-bold">Продолжим тренировку! </p>
                <p className="fw-bold">
                  <span className="bg-warning">«Kondicionál»</span> отличная
                  тема для прокачки фантазии и более глубокого погружения в
                  язык!
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 2 проверит преподаватель.
              </p>
              <p>
                <i>
                  Ответы напишите от руки, сфотографируйте и отправьте их на
                  проверку в группу Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            <p className="text-danger">Prosím, pište čitelně.</p>

            {/* Task 2 */}
            <div>
              <p className="fw-bold">
                2. Ke každé větě vymyslete začátek nebo konec tak, aby věta byla
                logická.
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Upekla bych dort, … . &#8594; Upekla
                  bych dort, <strong>kdybych měla narozeniny.</strong>
                </i>
              </p>

              <p>1) … , nepřišel bys pozdě. </p>
              <p>2) Šel bych s nimi, … . </p>
              <p>3) … , pomohli by nám. </p>
              <p>4) Omluvil by se, … .</p>
              <p>5) … , nebyl by na vysokou školu přijat.</p>
              <p>6) … , šli bychom se koupat.</p>
              <p>7) Museli byste se smát, … .</p>
              <p>8) … , určitě by zhubla.</p>
              <p>9) … , nebyl bys tak unavený.</p>
              <p>10) Koupili by si nové auto, … .</p>
              <p>11) … , nebyl bys tak často nemocný. </p>
              <p>12) Vlak by nám neujel, … .</p>
              <p>13) Jela by v létě k moři, … .</p>
              <p>14) … , musel bys jít k lékaři.</p>
              <p>15) … , mohli byste nás navštívit.</p>
              <p>16) … , nebyla by tu taková zima.</p>
              <p>17) … , jel by na chatu.</p>
              <p>18) … , nebolela by tě dneska hlava. </p>
              <p>19) Oblékl bych si nový oblek, … .</p>
              <p>20) … , nemusel bych chodit na večeři do restaurace.</p>
              <p>21) … , dostal bych se bez problémů na VŠE.</p>
              <p>22) Uviděl bych ji včas, … .</p>
              <p>23) … , šel bych mu otevřít.</p>
              <p>24) … , koupil bych ti květiny.</p>
              <p>25) Nekouřil bych tady, … .</p>
            </div>

            {/* Task 3 */}
            <div>
              <p className="fw-bold">
                3. Spojte věty pomocí «aby» ve správné formě.
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Nepeču sladké dorty. Nechci být tlustá.
                  &#8594; Nepeču sladké dorty,{" "}
                  <strong>abych nebyla tlustá.</strong>
                </i>
              </p>
              <p>1) Jím hodně vitamínů. Chci být zdravý.</p>
              <p>2) Přijďte včas. Naobědváte se v klidu.</p>
              <p>3) Probuď se brzy ráno. Nebudeš muset tolik spěchat.</p>
              <p>4) Koupíme lístky do první řady. Budeme dobře vidět.</p>
              <p>5) Dej jim plán cesty. Jinak zabloudí.</p>
              <p>6) Všechno si raději píše. Zapomněl by to.</p>
              <p>7) Vezměte si raději taxi. Budete tam dřív.</p>
              <p>8) Přesvědčoval mě. Půjdu s ním.</p>
              <p>9) Čistěte si pravidelně zuby. Nebudou se Vám kazit.</p>
              <p>10) Chodím na večeře do menzy. Nemusím sám vařit.</p>
              <div>
                <button onClick={() => keys.toggleKey(2)}>Klíče</button>
                <Collapse in={keys.getValue(2)} timeout={2000}>
                  <div className="fst-italic">
                    <p>1) Jím hodně vitamínů, abych byl zdravý.</p>
                    <p>2) Přijďte včas, abyste se naobědvali v klidu.</p>
                    <p>3) Probuď se brzy ráno, abys nemusel tolik spěchat.</p>
                    <p>
                      4) Koupíme lístky do první řady, abychom dobře viděli.
                    </p>
                    <p>5) Dej jim plán cesty, aby nezabloudili.</p>
                    <p>6) Všechno si raději píše, aby to nezapomněl.</p>
                    <p>7) Vezměte si raději taxi, abyste tam byli dřív.</p>
                    <p>8) Přesvědčoval mě, abych šla s ním.</p>
                    <p>9) Čistěte si pravidelně zuby, aby se Vám nekazili.</p>
                    <p>
                      10) Chodím na večeře do menzy, abych nemusel sám vařit.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 4 */}
            <div>
              <p className="fw-bold">4. Požádejte Ivana.</p>
              <p>
                <i>
                  <strong>Vzor:</strong> Ať si zahraje s vámi šachy &#8594;
                  Ivane, zahrál by sis se mnou šachy?
                </i>
              </p>
              <p>
                Ať se posadí, pověsí si kabát na věšák, seznámí se s vaší
                sestrou, odpoví na otázku, vrátí se co nejdříve, nezapomene
                zalít květiny, nechodí večer přes park, přestane si stěžovat,
                vezme si ještě kousek dortu, neposlouchá za dveřmi, nemluví tak
                nahlas.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(3)}>Klíče</button>
                <Collapse in={keys.getValue(3)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      Ivane, <br />
                      posadil by ses, pověsil by sis kabát na věšák, seznámil by
                      ses s mojí sestrou, odpověděl bys na otázku, vrátil by ses
                      co nejdříve, nezapomněl bys zalít květiny, nechodil bys
                      večer přes park, přestal by sis stěžovat, vzal by sis
                      ještě kousek dortu, neposlouchal bys za dveřmi, nemluvil
                      bys tak nahlas?
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
                Внимание! Задание № 5 проверит преподаватель.
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 5 */}
            <div>
              <p className="fw-bold">
                5. Vytvořte dle obrázků jednu souvislou větu.
              </p>
              <p className="fw-bold">
                Nezapomeňte použít slova odpovídající na otázky «kdy» a «kde».{" "}
              </p>
              <p className="fw-bold">
                Dále řekněte, co byste doporučili dělat v dané situaci.{" "}
              </p>
              <p>
                <i>
                  <strong>Poznámka:</strong> používejte osoby já, ty, my, vy.
                </i>
              </p>
              <p>
                <i>
                  <strong>Příklad v ruštině:</strong>
                  <br />
                  Если бы я себе заказала (objednat si) суп в китайском
                  ресторане напротив дома (čínská restaurace naproti domu) в
                  прошлом месяце (minulý měsíc) и я бы увидела в супе плавающую
                  муху (uvidět plavající mouchu), я бы жаловалась (stěžovat si).
                </i>
              </p>
              <p>
                <i>
                  <strong>Ответьте на вопрос:</strong>
                  <br />
                  Что бы сделал официант в этой ситуации?
                  <br />— Он бы мог принести мне новый суп или вернуть деньги.
                </i>
              </p>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_8/picture_1.jpg"
                alt="picture_1"
                width="100%"
                height="auto"
              />
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_8/picture_2.jpg"
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
                Внимание! Задание № 6 проверит преподаватель.
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 6 */}
            <div>
              <p className="fw-bold">6. Odpovězte na následující otázky.</p>

              <p>1) Co byste dělal(a), kdybyste ztratil(a) peněženku?</p>
              <p>
                2) Co byste koupil(a) k narozeninám svým nejbližším, kdyby měl
                někdo z nich zítra narozeniny?
              </p>
              <p>3) Co byste připravili z čokolády?</p>
              <p>4) Čeho byste se chtěli zbavit?</p>
              <p>5) Čeho / koho byste se chtěli přestat bát?</p>
              <p>6) Kam byste jeli, kdybyste měli pár týdnů dovolené?</p>
              <p>7) Co byste poradili sami sobě pět let zpátky?</p>
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 7 проверит преподаватель.
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 7 */}
            <div>
              <p className="fw-bold">
                7. Podívejte se na obrázky a řekněte, proč byste to nedělal(a)?
              </p>
              <p className="fw-bold">
                Vymlouvejte se (výmluva — отговорка, vymlouvat se — придумывать
                отговорки, «отмазываться»).
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong>
                  <br />
                  1) Plavala bych každý týden v bazénu, kdybych se nebála vody.
                </i>
              </p>
              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_8/picture_3.jpg"
                alt="picture_3"
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
                Внимание! Задание № 8 проверит преподаватель.
              </p>
              <p>
                <i>
                  Ответы напишите от руки, сфотографируйте и отправьте их на
                  проверку в группу Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 8 */}
            <div>
              <p className="fw-bold">
                8. Doporučte svému kamarádovi / své kamarádce, co by měl(a)
                dělat, pokud má následující problémy.{" "}
              </p>
              <p className="fw-bold">Zároveň použijte slova z nabídky.</p>
              <p className="fw-bold">
                <i>Prosím, pište čitelně.</i>
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> <br /> Zhubnout &#8594; Měla bys
                  zhubnout, aby ses cítila lépe.
                </i>
              </p>

              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_8/picture_4.jpg"
                alt="picture_4"
                width="100%"
                height="auto"
              />
            </div>

            <div>
              <p className="fw-bold">
                Так же как и в прошлых лекциях мы подобрали для вас полезные
                ресурсы на просторах YouTube.
              </p>
            </div>
            {/* Task 9.1 */}
            <div>
              <p className="fw-bold">
                9.1. Podívejte se na video českého youtubera a pracujte s
                cvičeními 9.2; 9.3.
              </p>
              <p>
                <i>
                  <strong>Poznámka:</strong> Pokud je video příliš rychlé,
                  můžete si snížit rychlost.
                </i>
              </p>
              <a
                href="https://www.youtube.com/watch?v=dliTAPZDwTI"
                target="blank"
              >
                20 věcí co byste si nekoupili
              </a>
            </div>

            {/* Task 9.2 */}
            <div>
              <p className="fw-bold">
                9.2. Doplňte vynechaná slova do následujícího úryvku (0:00 —
                0:35).
              </p>
              <p>
                «Určitě jste zaregistrovali to, že někdo v Eurojackpotu vyhrál
                dvě a půl miliardy korun. A bylo to náhodou v Pardubickém kraji.
                Možná jsem to byl já...
              </p>
              <p>Nebyl...</p>
              <p>
                Moje … je totiž jako cibule — když ji otevřete, tak se Vám chce
                ... . Slyšeli jste to? Bankovky necinkají...
              </p>
              <p>
                Barák, auto nebo jachtu, to si dokáže koupit{" "}
                <strong>každej*</strong> boháč. My buďme trošku kreativnější.
                Takže se podíváme na 20 zvláštních věcí, co by se za tohle ...
                dali pořídit.»
              </p>
              <p>
                <i>
                  <strong>*Poznámka:</strong> V tomto případě se jedná o
                  hovorovou češtinu. Dle spisovné češtiny &#8594;{" "}
                  <strong>každý</strong> boháč.
                </i>
              </p>
              <div>
                <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                <Collapse in={keys.getValue(4)} timeout={2000}>
                  <div className="fst-italic">
                    <p>Peněženka, brečet, vlastně.</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 9.3 */}
            <div>
              <p className="fw-bold">
                9.3. Doplňte vynechaná slova do následujícího úryvku (1:49 —
                2:03).
              </p>
              <p>
                «V Dubai, v nejluxusnějším hotelu na světě, … … … ten největší a
                nejlepší apartmán, … … v něm mohli bydlet 18,5 roku. … i s
                takovým ohromným množstvím jmění … … … ani mezi TOP 40
                nejbohatších Čechů.»
              </p>
              <div>
                <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                <Collapse in={keys.getValue(5)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      Kdybyste si pronajmuli, tak byste, bohužel, byste se
                      nedostali.
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
                Внимание! Задания № 10.1 и 10.2 выполняются по желанию, но их
                проверит преподаватель.
              </p>
            </div>

            {/* Task 10.1 */}
            <div>
              <p className="fw-bold">
                10.1. Podívejte se na video a pracujte s následujícími
                cvičeními.
              </p>
              <p>
                <i>
                  <strong>Poznámka:</strong> Pokud je video příliš rychlé,
                  můžete si snížit rychlost.
                </i>
              </p>
              <a
                href="https://www.youtube.com/watch?v=cDii1rHAsxI&t=37s"
                target="blank"
              >
                10 věcí, které byste neměli dělat v zahraničí.
              </a>
            </div>

            {/* Task 10.2 */}
            <div>
              <p className="fw-bold">
                10.2. Odpovězte na následující otázky podle videa, které jste
                zhlédli.
              </p>
              <p>1) Co byste neměli dělat v Japonsku?</p>
              <p>2) Co by si o Vás Japonci mysleli a jak by reagovali?</p>
              <p>
                3) Kolik procent je běžná částka spropistného (dýška) v Čechách?
              </p>
              <p>4) Jaké zákazy byste měli dodržovat v Singapuru?</p>
              <p>
                5) Která z uvedených pravidel či zákazů byste zavedli v Čechách
                nebo ve své zemi a proč?
              </p>
              <p>
                6) Co byste neměli dělat na veřejnosti v Indii, dokonce i když
                jste manželé?
              </p>
              <p>
                7) Jaké tresty by Vám hrozili, pokud byste toto pravidlo
                porušili?
              </p>
              <p>8) Co byste měli udělat v Turecku při nakupování?</p>
              <p>
                9) O čem by s Vámi nemluvili Britové, protože je to pro ně velmi
                soukromá záležitost?
              </p>
              <p>
                10) Jak byste se (ne)měli chovat na návštěvě v Číně u hostitele
                doma?
              </p>
            </div>

            <div>
              <p className="fw-bold">
                Здесь мы для вас подготовили подборку интересных цитат, в них вы
                можете заметить использование{" "}
                <span className="bg-warning">«Kondicionálu»</span> и задуматься
                о смысле этих цитат и жизни :-)
              </p>
            </div>

            {/* Task 11 */}
            <div>
              <p className="fw-bold">
                11. Poslechněte si následující nahrávku s nejrůznějšími citáty.
                V těchto citátech následně doplňte vynechaná slova.
              </p>
              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_8/Cit%C3%A1ty.mp3"
                ></audio>
                <figcaption>
                  <strong>Citáty</strong>
                </figcaption>
              </figure>
              <div>
                <p className="fw-bold">Citáty</p>
                <p>1) « … … … … , kým bych byl?»</p>
                <p>2) «Co byste dělali, … … … ?»</p>
                <p className="fw-bold">
                  <i>Sheryl Sandberg, provozní ředitelka Facebooku</i>
                </p>
                <br />
                <p>
                  3) «Dokážete si představit, co … udělali, … … , že vás nikdo
                  nebude soudit?»
                </p>
                <p>
                  4) «Stačí chvíle k tomu, … … … . Někdy však nestačí celý
                  život, … … .»
                </p>
                <p>
                  5) «Největším komunikačním problémem je, že neposloucháme, … …
                  . Posloucháme, … … .»{" "}
                </p>
                <p className="fw-bold">
                  <i>Ralph Smart, psycholog a spisovatel</i>
                </p>
                <br />
                <p>
                  6) « … … … … … . Dobrá nálada sice vaše problémy nevyřeší, ale
                  naštve tolik lidí kolem, že stojí za to si ji užít.»
                </p>
                <p className="fw-bold">
                  <i>Jan Werich, český spisovatel</i>
                </p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                <Collapse in={keys.getValue(6)} timeout={2000}>
                  <div className="fst-italic">
                    <p>1) Kdybych nebyl sám sebou.</p>
                    <p>2) Kdybyste neměli strach.</p>
                    <p>3) Byste, kdybyste věděli.</p>
                    <p>4) Abychom se zamilovali, abychom zapomněli.</p>
                    <p>5) Abychom rozuměli, abychom odpověděli.</p>
                    <p>6) Měli byste mít dobrou náladu.</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 12 */}
            <div>
              <p className="fw-bold">
                12. Poslechněte si audio nahrávku textu a doplňte vynechaná
                slova.
              </p>
              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_8/6+fakt%C5%AF%2C+jak+by+vypadal+sv%C4%9Bt%2C+kdyby+nebylo+sklo.mp3"
                ></audio>
                <figcaption>
                  <strong>
                    6 faktů, jak by vypadal svět, kdyby nebylo sklo.
                  </strong>
                </figcaption>
              </figure>

              <div>
                <p className="fw-bold">
                  6 faktů, jak by vypadal svět, kdyby nebylo sklo.
                </p>
                <p>
                  Chápete, že bez skla by náš svět byl jedním slovem katastrofa?
                  Proto vám přinášíme přehled těch nejzásadnějších důsledků
                  toho, že by nebylo sklo. Abyste si uměli lépe představit, jak
                  důležitou roli vlastně v našem životě sklo hraje a proč je
                  dobré ho třídit a recyklovat.
                </p>
                <p>
                  1) Bez optiky ve foťácích … nemohli dělat selfíčka a fotit
                  kočičky, čímž by zmizel obsah půlky internetu. To nechce
                  nikdo!
                </p>
                <p>
                  2) … … v bunkrech bez oken nebo koukali přes igelit. Nebo
                  naopak, … … … pořád na nohy jako na větrné hůrce a lidi by
                  vypadávali z mrakodrapů.
                </p>
                <p>
                  3) Nešťastní akvaristi … … své miláčky … jen shůry, což sice
                  funguje u rejnoků a mant obrovských, ale u rybiček placatých
                  na výšku ani náhodou.
                </p>
                <p>
                  4) Všichni dnešní architekti a umývači oken … … … … a na
                  úřadech práce by se dělaly dlouhé … na rekvalifikace. Úředníci
                  by neměli skleněné přepážky!
                </p>
                <p>
                  5) Asi znáte pohádku o Krátkém, Širokém a Bystrozrakém.
                  Problém by měli všichni, kdo bystrý zrak postrádají. Zrakově
                  znevýhodnění jedinci by … museli … … jiné smysly a najít jinou
                  alternativu, jak vidět. … ani … by totiž neexistovaly.
                </p>
                <p>
                  6) Budiž světlo — to by platilo, ale pouze, pokud by se slunci
                  zlíbilo. … , zářivky, světla na autech, … , … , elektronické
                  informační tabule (na silnici, v nádražních halách nebo na
                  letištích) — ani to by nebylo a … … chaos.
                </p>
                <div>
                  <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                  <Collapse in={keys.getValue(7)} timeout={2000}>
                    <div className="fst-italic">
                      <p>1) Bychom.</p>
                      <p>2) Bydleli bychom, táhlo by nám.</p>
                      <p>3) By mohli, pozorovat.</p>
                      <p>4) By přišli o práci, fronty.</p>
                      <p>5) Se, spoléhat na, brýle, čočky.</p>
                      <p>6) Žárovky, blinkry, semafory, nastal by.</p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задание № 13 проверит преподаватель.
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 13 */}
            <div>
              <p className="fw-bold">
                13. Poslechněte si a řekněte, co byste v dané situaci udělali?
              </p>
              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_8/Situace.mp3"
                ></audio>
                <figcaption>
                  <strong>Situace</strong>
                </figcaption>
              </figure>

              <div>
                <p className="fw-bold">Situace č. 1.</p>
                <p>
                  Představte si, že byste běžel(a) na tramvaj, kterou byste
                  nestíhal(a). A omylem byste vrazil(a) do malého kluka, který
                  by spadl a odřel si nohu. Co byste v této situaci udělali?
                </p>
              </div>
              <div>
                <p className="fw-bold">Situace č. 2.</p>
                <p>
                  Představte si, že byste byl(a) na přechodě pro chodce a vedle
                  Vás by stál nevidomý (člověk, který nevidí) člověk, který
                  neví, jestli svítí červená nebo zelená. Jak byste mu nabídli
                  svou pomoc?
                </p>
              </div>
              <div>
                <p className="fw-bold">Situace č. 3.</p>
                <p>
                  Představte si, že byste jeli v metru a uviděli byste, jak
                  nějaký mladý muž chce vytáhnout peněženku z kabelky nějaké
                  paní. Jak byste upozornili na jeho chování?
                </p>
              </div>
              <div>
                <p className="fw-bold">Situace č. 4.</p>
                <p>
                  Představte si, že byste byli na ulici blízko nějaké školy a
                  všimli byste si, že nějaké děti šikanují (издеваться, šikana —
                  дедовщина) drobnou holčičku. Jak byste jí pomohli?
                </p>
              </div>
              <div>
                <p className="fw-bold">Situace č. 5.</p>
                <p>
                  Představte si, že byste byli v restauraci a váš kamarád, se
                  kterým byste přišli na večeři by se začal dusit kouskem
                  nějakého jídla? Co byste v této situaci dělali?
                </p>
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

export default LectureEight;
