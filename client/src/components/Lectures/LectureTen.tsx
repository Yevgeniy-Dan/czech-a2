import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const LectureTen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(8);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">10. lekce</h1>
        <p> Genitiv (2. pád) čísla jednotného a slovesné vazby </p>
        <Link to="/admin/lectures/9">Предыдущий урок</Link>
        <Link to="/admin/lectures/11">Следующий урок</Link>
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <div className="fst-italic">
          <p>Добро пожаловать на новую лекцию!</p>
          <p>
            В этой лекции нас ждут следующие темы:{" "}
            <strong>
              {" "}
              «Genitiv čísla jednotného (родительный падеж в единственном
              числе)»
            </strong>{" "}
            и <strong>«Slovesné vazby (глагольные связки)».</strong>
          </p>
        </div>

        {/* GENITIV ČÍSLA JEDNOTNÉHO */}
        <div>
          <h2>GENITIV ČÍSLA JEDNOTNÉHO</h2>

          <div>
            <p className="bg-warning fw-bold">
              Просмотрите видео с Дарьей — Genitiv čísla jednotného.
            </p>

            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/fGj_O8HA4ZM"
              title="10  GENITIV ČÍSLA JEDNOTNÉHO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div>
              <p className="fw-bold">Slova z videa</p>
              <div className="fst-italic">
                <p>Kamarád — bez kamaráda</p>
                <p>Student — bez studenta </p>
                <p>Pan Novák — bez pana Nováka </p>
                <p>Tomáš — bez Tomáše </p>
                <p>Ondřej — bez Ondřeje </p>
                <p>Němec — bez Němce </p>
                <p>Ředitel — bez ředitele </p>
                <p>Majitel — bez majitele </p>
                <p>Spisovatel — bez spisovatele </p>
                <p>Turista — bez turisty </p>
                <p>Kolega — bez kolegy </p>
                <p>Honza — bez Honzy </p>
                <p>Bez toho muže nepůjdeme </p>
                <p>Bez kamaráda nepojedeme </p>
                <p>Sešit — bez sešitu </p>
                <p>Strop — bez stropu </p>
                <p>Pomeranč — bez pomeranče </p>
                <p>Sýr — bez sýra </p>
                <p>Chléb — bez chleba </p>
                <p>Kostel — bez kostela (jdu do kostela) </p>
                <p>Večer — do večera </p>
                <p>Les — jdu do lesa </p>
                <p>Čtvrtek — budu tady do čtvrtka </p>
                <p>Bez velkého sešitu </p>
                <p>Bez cizího pomeranče </p>
                <p>Auto — bez auta </p>
                <p>Okno — bez okna</p>
                <p>Nebe — bez nebe </p>
                <p>Srdce — bez srdce </p>
                <p>Pole — bez pole </p>
                <p>Kamarádka — bez kamarádky </p>
                <p>Kniha — bez knihy </p>
                <p>Židle — posadím se do židle </p>
                <p>Práce — jdu do práce </p>
                <p>Skříň — bez skříně</p>
                <br />
                <p>ď ť ň + e =&#62; dě tě ně</p>
                <p>Не может быть </p>
                <p>ďe ťe ňe</p>
                <br />
                <p>Tramvaj — nastoupím do tramvaje</p>
                <p>Kost — bez kosti </p>
                <p>Nová práce — jdu do nové práce</p>
                <br />
                <p>
                  <strong>Bez</strong>
                </p>
                <p>Bez kamaráda tam nepůjdu </p>
                <p>Během </p>
                <p>Během týdne jsem pracovala z domu </p>
                <p>Blízko</p>
                <p>Bydlím blízko hezkého parku </p>
                <p>Vedle</p>
                <p>Bydlím vedle lékárny</p>
                <br />
                <p>
                  <strong>Do</strong>
                </p>
                <p>Nechci do školy </p>
                <p>Kolem</p>
                <p>Přijedu kolem druhé hodiny </p>
                <p>Kromě</p>
                <p>Přišli všichni kromě Petra </p>
                <p>Místo</p>
                <p>Dám do kafe sladidlo místo cukru</p>
                <br />
                <p>
                  <strong>Od</strong>
                </p>
                <p>Jedu od doktora </p>
                <p>Okolo</p>
                <p>Stojím okolo divadla </p>
                <p>Podél</p>
                <p>Běhám ráno podél řeky </p>
                <p>Podle</p>
                <p>Podle mého názoru</p>
                <br />
                <p>
                  <strong>U</strong>
                </p>
                <p>Parkoviště je hned u vchodu </p>
                <p>Uprostřed </p>
                <p>Uprostřed velkého náměstí je pomník </p>
                <p>Včetně</p>
                <p>Zaplatím účet včetně vody</p>
                <br />
                <p>
                  <strong>Z</strong>
                </p>
                <p>
                  Já pocházím z Ruska, někdo pochází z Ukrajiny nebo z
                  Běloruska, z Kazachstánu atd.
                </p>
              </div>

              <p className="fw-bold">Освежили немного в памяти? Отлично!</p>
            </div>
          </div>

          <p className="fw-bold">
            Рассмотрим ещё дополнительно примеры, усаживайтесь поудобнее будем
            тренировать родительный падеж!
          </p>
        </div>

        {/* SLOVESNÉ VAZBY */}
        <div>
          <h2>SLOVESNÉ VAZBY</h2>

          <div>
            <p className="bg-warning fw-bold">
              Скачайте файл - Přehled slovesných vazeb A2
            </p>
            <a
              href="https://czecha2bucket.s3.amazonaws.com/lekce_10/P%C5%99ehled+slovesn%C3%BDch+vazeb+A2.pdf"
              target="blank"
            >
              Přehled slovesných vazeb A2
            </a>
          </div>

          <div>
            <p className="fw-bold">
              Pro procvičování slovní zásoby jsme připravili pro Vás kartičky na
              Quizlet:
            </p>

            <p className="fw-bold">Slovesné vazby s Genitivem</p>
            <a
              href="https://quizlet.com/_cw9wt5?x=1jqt&i=3zq2hw"
              target="blank"
            >
              OTEVŘÍT KARTIČKY
            </a>
          </div>

          <div>
            <p className="bg-warning fw-bold">
              Просмотрите видео с Дарьей — Slovesné vazby.
            </p>
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/_88P18D0LIE"
              title="10  SLOVESNÉ VAZBY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>

            <div>
              <p className="fw-bold">Slova z videa</p>

              <div className="fst-italic">
                <p>Bát se — Bojím se</p>
                <p>Bojím se černé kočky / zlé učitelky / staré babičky</p>
                <br />
                <p>Účastnit se/zúčastnit se</p>
                <p>Účastním se tenisového turnaje / fotbalového zápasu</p>
                <br />
                <p>Všímat si / všimnout si</p>
                <p>Všímám si každého psa venku </p>
                <p>Všímám si každé kočky venku</p>
                <p>Nevšimla jsem si nového účesu kamarádky</p>
                <br />
                <p>Dávat se / dát se</p>
                <p>Dát se do práce</p>
              </div>
            </div>
            <div>
              <p className="fw-bold">
                А теперь закрепим материал упражнениями.
              </p>
              <p className="text-danger">
                <strong>Напоминаем:</strong>
                <br />
                Singulár — číslo jednotné <br />
                Plurál — číslo množné
              </p>
            </div>

            <div>
              <p className="bg-warning fw-bold">
                Выполните задания с № 1 по № 5.
              </p>

              {/* Task 1 */}
              <div>
                <p className="fw-bold">
                  1. Utvořte Genitiv singuláru. Dejte slova do správných forem.
                </p>

                <div>
                  <p className="fw-bold">Jdu od:</p>
                  <p>
                    syn … , kamarád … , soused … , doktor … , Honza … ,
                    bratranec … , dědeček … , Pavel … , holič … , ředitel … ,
                    kolega … , starosta … , otec … , prodavač … , Milan … .
                  </p>
                </div>

                <div>
                  <p className="fw-bold">Je to u:</p>
                  <p>
                    park … , les … , kostel … , rybník … , pokoj … , obchod … ,
                    hotel … , most … , zámek … , stroj … , úřad … , břeh … , míč
                    … , vchod … , stůl … , počítač … .
                  </p>
                </div>
                <div>
                  <p className="fw-bold">Jde tam bez:</p>
                  <p>
                    sestra … , Lucie … , kolegyně … , sestřenice … , matka … ,
                    kamarádka … , Alena … , přítelkyně … , ředitelka … ,
                    manažerka … .
                  </p>
                </div>
                <div>
                  <p className="fw-bold">Je to vedle:</p>
                  <p>
                    restaurace … , věž … , pošta … , škola … , košile … , zeď …
                    , skříň … , kancelář … , loď … .
                  </p>
                </div>
                <div>
                  <p className="fw-bold">Jde z:</p>
                  <p>
                    knihkupectví … , parkoviště … , auto … , náměstí … , pole …
                    , kino … , nádraží … , letadlo … , hřiště … , divadlo … ,
                    koupaliště … .
                  </p>
                </div>
                <div>
                  <button onClick={() => keys.toggleKey(1)}>Klíče</button>
                  <Collapse in={keys.getValue(1)} timeout={2000}>
                    <div className="fst-italic">
                      <div>
                        <p className="fw-bold">Jdu od:</p>
                        <p>
                          syna, kamaráda, souseda, doktora, Honzy, bratrance,
                          dědečka, Pavla, holiče, ředitele, kolegy, starosty,
                          otce, prodavače, Milana.
                        </p>
                      </div>
                      <div>
                        <p className="fw-bold">Je to u:</p>
                        <p>
                          parku, lesa, kostela, rybníku, pokoje, obchodu,
                          hotelu, mostu, zámku, stroje, úřadu, břehu, míče,
                          vchodu, stolu, počítače.
                        </p>
                      </div>
                      <div>
                        <p className="fw-bold">Jde tam bez:</p>
                        <p>
                          sestry, Lucie, kolegyně, sestřenice, matky, kamarádky,
                          Aleny, přítelkyně, ředitelky, manažerky.
                        </p>
                      </div>
                      <div>
                        <p className="fw-bold">Je to vedle:</p>
                        <p>
                          restaurace, věže, pošty, školy, košile, zdi, skříně,
                          kanceláře, lodi.
                        </p>
                      </div>
                      <div>
                        <p className="fw-bold">Jde z:</p>
                        <p>
                          knihkupectví, parkoviště, auta, náměstí, pole, kina,
                          nádraží, letadla, hřiště, divadla, koupaliště.
                        </p>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* Task 2 */}
              <div>
                <p className="fw-bold">2. Dejte slova do správných forem.</p>
                <div>
                  <p className="fw-bold">
                    a) podstatná jména Ma, ukazovací zájmena, přídavná jména;
                  </p>
                  <p>
                    Ten cizinec … , nový student … , tamten starý předseda … ,
                    ten zahraniční tenista … , tenhle dobrý soudce … , ten
                    zkušený hajný … , tamten ochotný číšník … , cizí chlapec … ,
                    tento strýc … , jiný průvodčí … .
                  </p>
                  <div>
                    <button onClick={() => keys.toggleKey(2)}>Klíče</button>
                    <Collapse in={keys.getValue(2)} timeout={2000}>
                      <div className="fst-italic">
                        <p>
                          Toho cizince, nového studenta, tamtoho starého
                          předsedy, toho zahraničního tenisty, tohohle dobrého
                          soudce, toho zkušeného hajného, tamtoho ochotného
                          číšníka, cizího chlapce, tohoto strýce, jiného
                          průvodčího.
                        </p>
                      </div>
                    </Collapse>
                  </div>
                </div>

                <div>
                  <p className="fw-bold">
                    b) podstatná jména Mi, ukazovací zájmena, přídavná jména;
                  </p>
                  <p>
                    Tento krásný hrad … , teplý čaj … , ten zajímavý román … ,
                    milý dárek … , tenhle exotický ostrov … , ten jarní měsíc …
                    , tamten náhradní klíč … , tento malý národ … , ten studený
                    potok … , tenhle francouzský sýr … , druhý týden … , třetí
                    rok … .
                  </p>
                  <div>
                    <button onClick={() => keys.toggleKey(3)}>Klíče</button>
                    <Collapse in={keys.getValue(3)} timeout={2000}>
                      <div className="fst-italic">
                        <p>
                          Tohoto krásného hradu, teplého čaje, toho zajímavého
                          románu, milého dárku, tohohle exotického ostrovu, toho
                          jarního měsíce, tamtoho náhradního klíče, tohoto
                          malého národa, toho studeného potoku, tohohle
                          francouzského sýra, druhého týdne, třetího roku.
                        </p>
                      </div>
                    </Collapse>
                  </div>
                </div>

                <div>
                  <p className="fw-bold">
                    c) podstatná jména F, ukazovací zájmena, přídavná jména;
                  </p>
                  <p>
                    Tato banka … , tamta luxusní ulice … , tahle vysoká škola …
                    , známá galerie … , ta rychlá pomoc … , slavná spisovatelka
                    … , ta babička … , ta moderní dívka … , tahle nová garáž … ,
                    tamta národní píseň … , ta zvláštní věc … , tahle studená
                    noc … , ta soukromá televize … , ta zodpovědná ředitelka … ,
                    ta vynikající lékařka … , ta významná manažerka … .
                  </p>
                  <div>
                    <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                    <Collapse in={keys.getValue(4)} timeout={2000}>
                      <div className="fst-italic">
                        <p>
                          Této banky, tamté luxusní ulice, téhle vysoké školy,
                          známé galerie, té rychlé pomoci, slavné spisovatelky,
                          té babičky, té moderní dívky, téhle nové garáže, tamté
                          národní písně, té zvláštní věci, téhle studené noci,
                          té soukromé televize, té zodpovědné ředitelky, té
                          vynikající lékařky, té významné manažerky.
                        </p>
                      </div>
                    </Collapse>
                  </div>
                </div>

                <div>
                  <p className="fw-bold">
                    d) podstatná jména N, ukazovací zájmena, přídavná jména;
                  </p>
                  <p>
                    Tohle mezinárodní letiště … , tamto neznámé slovo … , tohle
                    přízemí … , to teplé moře … , to závodní kolo … , nové
                    středisko … , to české přísloví … , toto lehké cvičení … .
                  </p>
                  <div>
                    <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                    <Collapse in={keys.getValue(5)} timeout={2000}>
                      <div className="fst-italic">
                        <p>
                          Tohohle mezinárodního letiště, tamtoho neznámého
                          slova, tohohle přízemí, toho teplého moře, toho
                          závodního kola, nového střediska, toho českého
                          přísloví, tohoto lehkého cvičení.
                        </p>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>

              {/* Task 3 */}
              <div>
                <p className="fw-bold">
                  3. Doplňte ze závorek kolik čeho (může být jak číslo množné
                  tak i jednotné)?
                </p>

                <div>
                  <p>1) 2 lžičky (káva) … ;</p>
                  <p>2) hrnek (mléko) … ;</p>
                  <p>3) kilo (cukr) … ;</p>
                  <p>4) 30 dkg (dekagram) (sýr) … ;</p>
                  <p>5) půl kila (cibule) … ;</p>
                  <p>6) litr (voda) … .</p>
                </div>
                <div>
                  <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                  <Collapse in={keys.getValue(6)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        1) kávy; 2) mléka; 3) cukru; 4) sýra; 5) cibule; 6)
                        vody.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>

              {/* Task 4 */}
              <div>
                <p className="fw-bold">
                  4. Doplňte, jaké ingredience budete potřebovat na přípravu
                  jahodových knedlíků.
                </p>

                <div>
                  <p className="fw-bold">Ingredience:</p>
                  <p>1) 250 g (tvaroh) … ;</p>
                  <p>2) 40 g (máslo) … ;</p>
                  <p>3) 250 g (mouka) … ;</p>
                  <p>4) 2 vajíčka, trochu (sůl) … ;</p>
                  <p>5) 150 g (jahody) … .</p>
                </div>

                <div>
                  <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                  <Collapse in={keys.getValue(7)} timeout={2000}>
                    <div className="fst-italic">
                      <p>1) tvarohu; 2) másla; 3) mouky; 4) soli; 5) jahod.</p>
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
                  Внимание! Задание № 5 проверит преподаватель.{" "}
                </p>
                <p>
                  <i>
                    Ответы напишите от руки, сфотографируйте и отправьте их на
                    проверку в группу Telegram c преподавателем или с потоком.
                  </i>
                </p>
              </div>

              {/* Task 5 */}
              <div>
                <p className="fw-bold">
                  5. Podívejte se na obrázek č. 1 a napište, kolik a čeho je
                  potřeba koupit.
                </p>
                <p className="text-danger fw-bold">
                  <i>Prosím, pište čitelně.</i>
                </p>
                <figure>
                  <img
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_10/picture_1.jpg"
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

export default LectureTen;
