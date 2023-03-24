import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const LectureThirteen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(8);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">13. lekce</h1>
        <p> Počasí </p>
        <Link to="/admin/lectures/12">Предыдущий урок</Link>
        <Link to="/admin/lectures/14">Следующий урок</Link>
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <div className="fst-italic">
          <p>В этой лекции нас ждут следующие темы:</p>
          <p>
            1) <strong>«Lokál čísla jednotného»</strong> (Предложный падеж в
            единственном числе);
          </p>
          <p>
            2) <strong>«Slovesné vazby»</strong> (Глагольные связки).
          </p>
          <p>Lokál отвечает на вопросы «o kom? o čem?».</p>
          <p>Как и в русском языке он используется только с предлогами.</p>
          <p>Предлоги в чешском — po, na, v, o, při KOM? ČEM?</p>
        </div>

        {/* LOKÁL ČÍSLA JEDNOTNÉHO  */}
        <div>
          <div>
            <h2>LOKÁL ČÍSLA JEDNOTNÉHO</h2>
            <p>6. pád (O KOM? O ČEM?)</p>
          </div>

          <div>
            <p className="fw-bold bg-warning">
              Просмотрите видео с Дарьей — Lokál čísla jednotného.
            </p>
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/-xnEBJhh_Gg"
              title="13  LOKÁL ČÍSLA JEDNOTNÉHO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div>
              <p className="fw-bold">Slova z videa</p>
              <div className="fst-italic">
                <p>Mluvím o kom? o čem?</p>
                <br />
                <p>O muži</p>
                <p>O prodavači </p>
                <p>O Němci </p>
                <p>O Tomášovi </p>
                <p>O Ondřejovi </p>
                <p>O Alexejovi</p>
                <br />
                <p>O učiteli / majiteli / spisovateli</p>
                <p>O předsedovi / turistovi / kolegovi </p>
                <p>Průvodce — o průvodci</p>
                <br />
                <p>Mluvím o hradu</p>
                <p>Jsme na hradě </p>
                <p>Mluvím o obchodu </p>
                <p>Jsem v obchodě</p>
                <br />
                <p>Krok — o kroku</p>
                <p>Sníh — mluvím o sněhu / leží to na sněhu </p>
                <p>V lese</p>
                <br />
                <p>Pomeranč — v pomeranči</p>
                <p>Počítač — je no na počítači / v počítači</p>
                <br />
                <p>Sedím v autě</p>
                <p>V oku </p>
                <p>Břicho — v břichu (břiše) </p>
                <p>Moře — v moři </p>
                <p>Nebe — v nebi </p>
                <p>Být v sedmém nebi </p>
                <p>V srdci</p>
                <br />
                <p>Dobrý pan — mluvím o dobrém panu</p>
                <p>O dobrém hradu </p>
                <p>O dobrém městu </p>
                <p>Jarní — jarním </p>
                <p>Mluvím o moderním pánovi </p>
                <p>Moderní počítač — o moderním počítači </p>
                <p>O moderním městě(u) / hezkém městě</p>
                <br />
                <p>Mluvím o...</p>
                <p> mém / tvém / svém </p>
                <p>tvém / svém </p>
                <p>našem / vašem</p>
                <br />
                <p>Ten — mluvím o tom</p>
                <p>Jeden — o jednom </p>
                <p>Mluvím o tom městu(ě)</p>
                <p>Mluvím o jednom městu(ě)</p>
                <br />
                <p>Žena — o ženě</p>
                <p>Alena — o Aleně</p>
                <p>Dáša — o Dáše </p>
                <p>Kamarádka — mluvím o kamarádce </p>
                <p>Učitelka — učitelce </p>
                <p>Babička — o babičce </p>
                <p>Sestra — o sestře </p>
                <p>Flóra — o Flóře </p>
                <p>Střecha — jsem na střeše </p>
                <p>Sprcha — jsem ve sprše </p>
                <p>Praha — bydlíme v Praze </p>
                <p>Olga — mluvíme o Olze</p>
                <br />
                <p>Přemýšlím o růži</p>
                <p>Jsem v práci</p>
                <br />
                <p>V písni / v tramvaji / ve skříni</p>
                <p>Radost — v radosti </p>
                <p>Místnost — v místnosti</p>
                <br />
                <p>Mluvím o …</p>
                <p>dobré ženě </p>
                <p>Jarní květině</p>
                <br />
                <p>Mluvím o …</p>
                <p>mojí / tvojí / svojí </p>
                <p>naší / vaší </p>
                <p>její</p>
                <br />
                <p>O té jedné</p>
                <p>Bydlím v té jedné ulici</p>
              </div>
            </div>

            <p className="fw-bold">Tak co? Oprášili* jste si to? Výborně!</p>
            <p>
              <i>*Oprášili — стряхнули пыль</i>
            </p>
            <p className="fw-bold">
              A teď pojďme ještě procvičit opakovanou látku a začneme
              předložkami.
            </p>
          </div>

          <div>
            <p className="fw-bold bg-warning">
              Выполните задания с № 1 по № 4.2.
            </p>

            {/* Task 1 */}
            <div>
              <p className="fw-bold">
                1. Doplňte vhodně tyto předložky s lokálem.
              </p>
              <p className="fw-bold">na, o, při, po, v</p>
              <p>
                Ty věci mám ještě … babičce. Je asi ještě … práci. Rád se toulám
                … starém městě. Vrací se … šesté hodině. … psaní kouří. … létě
                jezdí k moři. Je celá … matce. Je … praxi v zahraniční firmě.
                Potkali se … dlouhé době … služební cestě. … jídle hovořili o
                tom projektu. … víkendu jedou ke známým. Pracuje na tom …
                večerech. … trošce štěstí by se to mohlo podařit. Pohladil ji …
                vlasech. Je to asi … psacím stole. Podívám se na to … přestávce.
              </p>

              <div>
                <button onClick={() => keys.toggleKey(1)}>Klíče</button>
                <Collapse in={keys.getValue(1)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      po, v, po, po, Při, V, po, po/na, po, na, Při, O, po, Při,
                      po, na, o
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 2 */}

            <div>
              <p className="fw-bold">
                2. Dejte následující výrazy do lokálu singuláru a užijte je ve
                větách.
              </p>

              <div>
                <p className="fw-bold">
                  a) podstatná jména Mž, ukazovací zájmena, přídavná jména{" "}
                </p>
                <p>
                  Malý vnuk, tento důležitý partner, tamten problémový nájemník,
                  ten náročný zákazník, tamten statečný voják, tenhle typický
                  Čech, pan inženýr Josef Růžička, vážný zájemce, tamten dobrý
                  holič, dospělý člověk, zkušený řidič.{" "}
                </p>
                <div>
                  <button onClick={() => keys.toggleKey(2)}>Klíče</button>
                  <Collapse in={keys.getValue(2)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        Malém vnukovi / vnuku, tomto důležitém partnerovi /
                        partneru, tamtom problémovém nájemníkovi / nájemníku,
                        tom náročném zákazníkovi / zákazníku, tamtom statečném
                        vojákovi / vojáku, tomhle typickém Čechovi / Čechu, panu
                        inženýrovi Josefu Růžičkovi, vážném zájemci / zájemcovi,
                        tamtom dobrém holiči, dospělém člověku / člověkovi,
                        zkušeném řidiči.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div>
                <p className="fw-bold">
                  b) podstatná jména Mn, ukazovací zájmena, přídavná jména{" "}
                </p>
                <p>
                  Tento státní úřad, cizí jazyk, tamten náročný text, teplý
                  kožich, ten historický film, jemný mech, tento kamenný most,
                  obtížný začátek, ten soukromý zámek, tamten chybný záměr.
                </p>
                <div>
                  <button onClick={() => keys.toggleKey(3)}>Klíče</button>
                  <Collapse in={keys.getValue(3)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        Tomto státním úřadu, cizím jazyce, tamtom náročném
                        textu, teplém kožichu, tom historickém filmu, jemném
                        mechu, tomto kamenném mostě(u), obtížném začátku, tom
                        soukromém zámku, tamtom chybném záměru.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div>
                <p className="fw-bold">
                  c) podstatná jména Ž, ukazovací zájmena, přídavná jména{" "}
                </p>
                <p>
                  Hrubá chyba, tato dlouhá věta, ta rodinná oslava, tahle nadaná
                  studentka, tamta nová zástupkyně, ztracená kniha, špatná
                  paměť, turistická atrakce, tahle rychlá pomoc, druhá manželka,
                  jediná dcera, skvělá zábava, tamta zvířecí stopa, prodejní
                  akce, tamta městská doprava.
                </p>
                <div>
                  <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                  <Collapse in={keys.getValue(4)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        Hrubé chybě, této dlouhé větě, té rodinné oslavě, téhle
                        nadané studentce, tamté nové zástupkyni, ztracené knize,
                        špatné paměti, turistické atrakci, téhle rychlé pomoci,
                        druhé manželce, jediné dceři, skvělé zábavě, tamté
                        zvířecí stopě, prodejní akci, tamté městské dopravě.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div>
                <p className="fw-bold">
                  d) podstatná jména S, ukazovací zájmena, přídavná jména{" "}
                </p>
                <p>
                  Nebezpečné náledí, zaplacené mýtné, tamto umyté nádobí, to
                  darované pero, husté sněžení, toto hlavní sídlo, zlevněné
                  jízdné, tohle neznámé slovíčko, tamto národní jídlo, tamto
                  vysoké školné, to vysoké spropitné, to zajímavé vyprávění,
                  pražské metro.
                </p>
                <div>
                  <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                  <Collapse in={keys.getValue(5)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        Nebezpečném náledí, zaplaceném mýtném, tamtom umytém
                        nádobí, tom darovaném peru, hustém sněžení, tomto
                        hlavním sídle, zlevněném jízdném, tomhle neznámém
                        slovíčku, tamtom národním jídle, tamtom vysokém školném,
                        tom vysokém spropitném, tom zajímavém vyprávění,
                        pražském metru.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>

            {/* Task 3 */}
            <div>
              <p className="fw-bold">
                3. Dejte výrazy v závorce do náležitého tvaru (do Lokálu).
              </p>
              <p>
                Pořád trvá na (ten názor). Domluvili se na roční (vzájemná
                spolupráce). Vážně pochybovala o (ta nabídka). Přemýšlíme o (to
                rozhodnutí). To velmi závisí na (cena ropy). Pracujete na (ten
                překlad)? Pokračuje v (jízda). Snila o (spokojený rodinný
                život). Kdo netouží po (úspěch)? Ten neúspěch spočívá hlavně v
                (jejich neschopnost). To záleží na (pan ředitel). Uvažovala o
                (odchod do důchodu). V tom (rozhodování) byl zcela samostatný.
                Při (hledání práce) byl netrpělivý. Nechtěli být vůbec závislí
                na (cizí pomoc). Byla dobrá zejména v (dějepis a čeština).
              </p>
              <div>
                <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                <Collapse in={keys.getValue(6)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      tom názoru, vzájemné spolupráci, té nabídce, tom
                      rozhodnutí, ceně ropy, tom překladu, jízdě, spokojeném
                      rodinném životě, úspěchu, jejich neschopnosti, panu
                      řediteli / ředitelovi, odchodu do důchodu, rozhodování,
                      hledání práce, cizí pomoci, dějepise a češtině.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>

          {/* SLOVESNÉ VAZBY */}
          <div>
            <h2>SLOVESNÉ VAZBY</h2>
            <div>
              <p className="fw-bold bg-warning">
                Скачайте файл - Přehled slovesných vazeb A2
              </p>

              <a
                href="https://czecha2bucket.s3.amazonaws.com/lekce_13/P%C5%99ehled+slovesn%C3%BDch+vazeb+A2.pdf"
                target="blank"
              >
                Přehled slovesných vazeb A2{" "}
              </a>
            </div>

            <div>
              <p className="fw-bold">
                Pro procvičování slovní zásoby jsme připravili pro Vás kartičky
                na Quizlet:
              </p>
              <p>Slovesné vazby s Lokálem</p>
              <a
                href="https://quizlet.com/_cw9y4e?x=1jqt&i=3zq2hw"
                target="blank"
              >
                OTEVŘÍT KARTIČKY
              </a>
            </div>

            <div>
              <p className="fw-bold bg-warning">
                Просмотрите видео с Дарьей — Lokál (slovesné vazby).
              </p>
              <iframe
                width="949"
                height="534"
                src="https://www.youtube.com/embed/MrrXSAv1Djg"
                title="13  SLOVESNÉ VAZBY"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="fw-bold">Slova z videa</p>
                <br />
                <p className="fw-bold">Domluvit se na …</p>
                <p className="fw-bold">Záležet na …</p>
                <br />
                <p>
                  Můžeme <strong>se domluvit na</strong> termínu / na schůzce
                </p>
                <br />
                <p>
                  <strong>Záleží mi na</strong> mém manželovi / na moji práci /
                  na mé rodině
                </p>
                <br />
                <p>- můžeš pro mě něco udělat?</p>
                <p>
                  - no, to <strong>záleží na</strong> čase / na penězích
                </p>
                <br />
                <p>Dozvídat se / dozvědět se o …</p>
                <p>
                  Můžete se dozvědět o nové knize / nových knihách / veletrhu /
                  veletrzích
                </p>
                <p>Jednat o …</p>
                <p>Můžeme jednat o smlouvě / o podmínkách prodeje</p>
                <br />
                <p>Pochybovat / zapochybovat o …</p>
                <p>Můžeme pochybovat o správnosti </p>
                <p>O tom nepochybuju</p>
                <br />
                <p>Přesvědčovat se/přesvědčit se o …</p>
                <p>Chci se přesvědčit o správnosti</p>
                <br />
                <p>Uvažovat o …</p>
                <p>Budu o tom uvažovat </p>
                <p>Uvažovat o dalším studiu</p>
                <br />
                <p>Dotazovat se / dotázat se po …</p>
                <p>Dotázat se po detailech</p>
                <br />
                <p>Pátrat po někom</p>
                <p>Pátrali po důkazech</p>
                <br />
                <p>Stýskat se po …</p>
                <p>Stýskalo se mi po rodině / pohance</p>
                <br />
                <p>Klamat se / zklamat se v …</p>
                <p>Můžeme se zklamat v příteli / v práci</p>
                <br />
                <p>Mýlit se / zmýlit se v …</p>
                <p>Mýlíš se v tom </p>
                <p>Zmýlila jsem se v příteli / v kamarádovi</p>
                <br />
                <p>Pokračovat v …</p>
                <p>Pokračujeme v práci / ve studiu češtiny</p>
                <br />
                <p>Spočívat v …</p>
                <p>To spočívá v tom že …</p>
                <p>Její chyba spočívá v nedůslednosti</p>
                <br />
                <p>Vyznat se v …</p>
                <p>Já se nevyznám v červeném víně </p>
                <p>Já se v tom nevyznám</p>
              </div>
            </div>

            <div>
              <p className="fw-bold">
                No a teď si všechno ještě jednou zopakujeme. Poslouchejte a
                opakujte vsechno po Darii.
              </p>
              <p className="fw-bold bg-warning">
                Просмотрите видео с Дарьей — Lokál (cvičení).
              </p>
              <iframe
                width="949"
                height="534"
                src="https://www.youtube.com/embed/JrP78c5ViVo"
                title="13  Lokál cvičení"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="fw-bold">Slova z videa</p>
                <br />
                <div className="fst-italic">
                  <p className="fw-bold">Záleží mi na …</p>
                  <p>Dobrý přítel / dobrém příteli / dobrých přátelích</p>
                  <p>Váš klient / vašem klientovi / vašich klientech </p>
                  <p>Dobrý výsledek / dobrém výsledku / dobrých výsledcích </p>
                  <p>
                    Spokojený zákazník / spokojeném zákazníkovi / spokojených
                    zákaznících{" "}
                  </p>
                  <p>
                    Můj spolupracovník / mém spolupracovníkovi / mých
                    spolupracovnících{" "}
                  </p>
                  <p>
                    Náš učitel a učitelka / našem učiteli a učitelce / našich
                    učitelích a učitelkách{" "}
                  </p>
                  <p>Český umělec / českém umělci / českých umělcích </p>
                  <p>
                    Můj student a studentka / mém studentovi a studentce / mých
                    studentech a studentkách
                  </p>
                  <br />
                  <p className="fw-bold">Rádi diskutují o …</p>
                  <p>Český politik / českém politikovi / českých politicích </p>
                  <p>
                    Evropský stát / evropském státě(u) / evropských státech{" "}
                  </p>
                  <p>
                    Jazzový hudebník / jazzovém hudebníkovi / jazzových
                    hudebnících{" "}
                  </p>
                  <p>
                    Malostranský palác / Malostranském paláci / malostranských
                    palácích{" "}
                  </p>
                  <p>
                    Historický styl / historickém stylu / historických stylech{" "}
                  </p>
                  <p>Česky film / českém filmu / českých filmech </p>
                  <p>Moderní stavba / moderní stavbě / moderních stavbách </p>
                  <p>
                    Politická strana / politické straně / politických stranách{" "}
                  </p>
                  <p>
                    Ekologický problém / ekologickém problému / ekologických
                    problémech
                  </p>
                  <br />
                  <p className="fw-bold">Procházíme se v / na / po …</p>
                  <p>
                    Pražská zahrada / po(v) pražské zahradě / pražských
                    zahradách{" "}
                  </p>
                  <p>
                    Malostranská ulička / po malostranské uličce /
                    malostranských uličkách{" "}
                  </p>
                  <p>
                    Zámecký park / po(v) zámeckém parku / zámeckých parcích{" "}
                  </p>
                  <p>Staré město / po starém městě / starých městech </p>
                  <p>Dlouhá pláž / po dlouhé pláži / dlouhých plážích </p>
                  <p>Čistý les / v čistém lese / čistých lesích </p>
                  <p>Široká ulice / po široké ulici / širokých ulicích</p>
                  <br />
                  <p className="fw-bold">Můžeme se koupat v …</p>
                  <p>Horské jezero / horském jezeru / horských jezerech </p>
                  <p>
                    Jihočeský rybník / jihočeském rybníku / jihočeských
                    rybnících{" "}
                  </p>
                  <p>Jižní moře / jižním moři / jižních mořích </p>
                  <p>Plavecký bazén / plaveckém bazénu / plaveckých bazénech</p>
                  <br />
                  <p>O čem obvykle píšou noviny?</p>
                  <p>
                    O politických problémech, o ekonomických informacích a o
                    přírodních zajímavostech.
                  </p>
                  <br />
                  <p>O čem se často Vy bavíte s kamarády?</p>
                  <p>
                    Já se s kamarády bavím o kulturních událostech a taky o
                    různých sportovních soutěžích.
                  </p>
                  <br />
                  <p>O čem jste naposled snili?</p>
                  <p>
                    Já jsem naposled snila o dovolené v Thajsku a taky jsem
                    snila o čistém moři a velké vile.
                  </p>
                  <br />
                  <p>O čem jste si povídali včera ve své rodině?</p>
                  <p>
                    Já jsem si se svou rodinou včera povídala o svoji práci, o
                    svých kamarádech o taky jsme si povídali o našich
                    studentech.
                  </p>
                  <br />
                  <p>Na kom / čem vám záleží?</p>
                  <p>
                    Mně záleží na našich studentech, na moji práci a taky na
                    moji rodině.
                  </p>
                  <br />
                  <p>O čem vám vyprávěla babička?</p>
                  <p>
                    Mě babička vyprávěla o svých sestrách, o různých receptech a
                    taky o lásce.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#aae096",
              }}
            >
              <p className="fw-bold">
                Внимание! Задания № 4.1 и № 4.2 проверит преподаватель.{" "}
              </p>
              <p>
                <i>
                  Запишите аудиофайлы и отправьте их на проверку в группу
                  Telegram c преподавателем или с потоком.
                </i>
              </p>
            </div>

            {/* Task 4.1 */}
            <div>
              <p className="fw-bold">
                4.1. Odpovězte na následující otázky podle obrázku.
              </p>
              <div>
                <p>1) Kde jedou cyklisté na kolech?</p>
                <p>2) Co mají na sobě cyklisté?</p>
                <p>3) Co najdeme uprostřed kruhového objezdu?</p>
                <p>4) Po čem jede vlak?</p>
                <p>5) Jaké dopravní prostředky můžeme vidět na obloze?</p>
                <p>
                  6) Jakými předměty jsou označeny předpisy* pro řidiče aut a
                  motorek?
                </p>
                <p>
                  7) Co se podle Vás stalo řidičce s červeno — černým autem?
                </p>
                <p>
                  8) Co dělá policistka, která stojí před bílým autem zprava?
                </p>
              </div>
              <p>
                <i>
                  *
                  <a href="https://slovnik.seznam.cz/preklad/cesky_rusky/p%C5%99edpisy">
                    Předpisy
                  </a>
                  — нажмите на слово для его перевода.
                </i>
              </p>
            </div>

            {/* Task 4.2 */}
            <div>
              <p className="fw-bold">
                4.2. Následující věty opravte, aby byly správné.
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Policista má bílou uniformu. &#8594;
                  Ne, policista nemá bílou uniformu, ale černou uniformu.
                </i>
              </p>
              <div>
                <p>1) Policista stojí na přechodu pro chodce.</p>
                <p>
                  2) Na pravém chodníku stojí muž a dívá se do vitríny trafiky.
                </p>
                <p>
                  3) Holčička, která se dívá z okna (vpravo), sedí na zábradlí.
                </p>
                <p>4) Postižený muž sedí v elektrickém křesle.</p>
                <p>5) Pes, který vede ženu je přivázaný provazem u semaforu.</p>
              </div>

              <img
                src="https://czecha2bucket.s3.amazonaws.com/lekce_13/picture_1.jpg"
                alt="picture_1"
                width="100%"
                height="auto"
              />
              <div>
                <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                <Collapse in={keys.getValue(7)} timeout={2000}>
                  <div className="fst-italic">
                    <p>nestojí</p>
                    <p>dívá se do vitríny cestovní kanceláře </p>
                    <p>sedí na židli</p>
                    <p>sedí na obyčejném vozíku</p>
                    <p>Pes převádí ženu po přechodu.</p>
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

export default LectureThirteen;
