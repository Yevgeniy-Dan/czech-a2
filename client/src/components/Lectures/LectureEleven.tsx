import React from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import useKeyOpen from "../../hooks/useKeyOpen";

const LectureEleven: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(14);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">11. lekce</h1>
        <p> Genitiv (2. pád) čísla množného a Genitiv osobních zájmen </p>
        <Link to="/admin/lectures/10">Предыдущий урок</Link>
        <Link to="/admin/lectures/12">Следующий урок</Link>
      </div>
      <div>
        <h2>Добрый день, дорогие друзья!</h2>
        <div className="fst-italic">
          <p>Добро пожаловать на новую лекцию!</p>
          <p>
            В этой лекции нас ждут следующие темы:{" "}
            <strong>
              «Genitiv čísla množného (родительный падеж в множественном числе)»
            </strong>{" "}
            и{" "}
            <strong>
              «Genitiv osobních zájmen (родительный падеж личных местоимений)».
            </strong>
          </p>
        </div>

        {/* GENITIV ČÍSLA MNOŽNÉHO */}
        <div>
          <h2>GENITIV ČÍSLA MNOŽNÉHO</h2>
          <div>
            <p className="bg-warning fw-bold">
              Просмотрите видео с Дарьей — Genitiv čísla množného.
            </p>
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/18JKFT-e5dA"
              title="11  GENITIV ČÍSLA MNOŽNÉHO"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <p className="fw-bold">Slova z videa</p>
              <div className="fst-italic">
                <p>Chybělo — не хватало</p>
                <p>Výhradně — исключительно</p>
                <br />
                <p>Je jeden banán.</p>
                <p>Jsou 2; 3; 4 banány.</p>
                <p>Je 5; 6 hodin.</p>
                <p>Je mi 29.</p>
                <p>Bylo mi 28.</p>
                <br />
                <p>Tady vidím …</p>
                <p>Kolik je tady studentů? </p>
                <p>Kolik máš kamarádů?</p>
                <br />
                <p>V České republice je hodně hradů.</p>
                <br />
                <p>Koupím 5 pomerančů (5 — akuzativ, pomerančů — genitiv).</p>
                <p>Koupím kilo pomerančů.</p>
                <br />
                <p>Znám hodně měst.</p>
                <p>V Praze je hodně aut.</p>
                <br />
                <p>Znám 5 moří.</p>
                <br />
                <p>Znám v Praze 5 žen.</p>
                <p>Čtu najednou 5 knih.</p>
                <br />
                <p>Manžel mi koupil 7 růží.</p>
                <br />
                <p>Poslouchám 7 písní.</p>
                <p>Poslouchám 100 000 písní.</p>
                <br />
                <p>Máme ve škole 7 místností.</p>
                <br />
                <p>Učitelka — bez učitelek</p>
                <p>Karta — bez karet </p>
                <p>Kamarádka — bez kamarádek </p>
                <p>Divadlo — bez divadel </p>
                <p>Okno — oken</p>
                <br />
                <p>Hřiště</p>
                <p>Letiště </p>
                <p>Parkoviště </p>
                <p>Znám 5 parkovišť.</p>
                <p>Viděla jsem hodně letišť.</p>
                <p>Mám 5 učebnic.</p>
                <br />
                <p>Ulice — znám 10 ulic.</p>
                <p>Košile — mám 5 košil.</p>
                <br />
                <p>Vysoký pán — znám hodně vysokých pánů.</p>
                <p>Vysoká žena — znám hodně vysokých žen.</p>
                <br />
                <p>Půjdeš tam bez mých kamarádů?</p>
                <p>
                  Nepůjdu tam bez tvých kamarádů / bez mých kamarádek / bez
                  tvých aut.
                </p>
                <p>Bez těch kamarádů / kamarádek / knížek se nemůžu učit.</p>
                <br />
                <p>Budu tady do dvou hodin.</p>
                <p>Jsem dneska od tří (třech) hodin.</p>
                <p>Budu dneska do čtyř, pěti, šesti, sedmi, osmi …</p>
              </div>
            </div>
          </div>

          <div>
            <p className="bg-wargnin fw-bold">
              Выполните задания с № 1 по № 12
            </p>

            {/* Task 1 */}
            <div>
              <p className="fw-bold">1. Dejte výrazy do genitivu plurálu.</p>
              <p>
                Ten výborný programátor … , drahý obraz … , ta dobrá ministryně
                … , ten nový ředitel … , ten špatný cizí klíč … , to zajímavé
                zaměstnání … , ten slavný renesanční palác … , ta půvabná cizí
                slečna … , to veliké letadlo … , ten český hokejista … , to
                rozbité sklo … , ten nadaný zahraniční student … , ten drahý
                nejnovější počítač … , ten výborný domácí koláč … , ten moravský
                bratranec … , ta mladá prodavačka … , ten slavný renesanční
                chrám … , to překrásné letní ráno … , ta výborná herečka.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(1)}>Klíče</button>
                <Collapse in={keys.getValue(1)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      Těch výborných programátorů, drahých obrazů, těch dobrých
                      ministryň, těch nových ředitelů, těch špatných cizích
                      klíčů, těch zajímavých zaměstnání, těch slavných
                      renesančních paláců, těch půvabných cizích slečen, těch
                      velikých letadel, těch českých hokejistů, těch rozbitých
                      skel, těch nadaných zahraničních studentů, těch drahých
                      nejnovějších počítačů, těch výborných domácích koláčů,
                      těch moravských bratranců, těch mladých prodavaček, těch
                      slavných renesančních chrámů, těch překrásných letních
                      rán, těch výborných hereček.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 2 */}
            <div>
              <p className="fw-bold">2. Dejte výrazy do genitivu plurálu.</p>
              <p>
                Tento mladý sportovec … , to první těžké cvičení … , to národní
                divadlo … , ten významný český odborník … , ta malá země … , ten
                nudný film … , to moderní kino … , ten schopný manažer … , ta
                luxusní pražská čtvrť … , ta vysoká zeď … , ten průměrný plat …
                , ta první cenná zkušenost … , to staré nádraží … , tamta menší
                část … , ten známý román … , ta milá přítelkyně … , ta zkušená
                právnička … , ta slavná malířka … , ta významná poslankyně … ,
                ta letní noc … , tahle osobní věc … .
              </p>
              <div>
                <button onClick={() => keys.toggleKey(2)}>Klíče</button>
                <Collapse in={keys.getValue(2)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      Těchto mladých sportovců, těchto prvních těžkých cvičení,
                      těch národních divadel, těch významných českých odborníků,
                      těch malých zemí, těch nudných filmů, těch moderních kin,
                      těch schopných manažerů, těch luxusních pražských čtvrtí,
                      těch vysokých zdí, těch průměrných platů, těch prvních
                      cenných zkušeností, těch starých nádraží, tamtěch menších
                      částí, těch známých románů, těch milých přítelkyň, těch
                      zkušených právniček, těch slavných malířek, těch
                      významných poslankyň, těch letních nocí, těchhle osobních
                      věcí.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            <div>
              <p className="bg-warning fw-bold">
                Просмотрите видео с Дарьей — Genitiv (cvičení).
              </p>
              <iframe
                width="949"
                height="534"
                src="https://www.youtube.com/embed/LzDL-cADBps"
                title="11. Genitiv cvičení"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div>
                <p className="fw-bold">Slova z videa</p>

                <div className="fst-italic">
                  <p>Hnědé boty</p>
                  <p>Já nemám dost hnědých bot.</p>
                  <p>Mini sukně </p>
                  <p>Já mám dost mini sukní.</p>
                  <p>Učebnice češtiny </p>
                  <p>Já mám dost učebnic češtiny.</p>
                  <p>Sklenička a hrníček</p>
                  <p>Já mám dost skleniček hrníčků.</p>
                  <p>Černé tričko </p>
                  <p>Já nemám dost černých triček.</p>
                  <p>Zimní sako </p>
                  <p>Nemám dost zimních sak.</p>
                  <p>Bílá košile </p>
                  <p>Já mám dost bílých košil.</p>
                  <p>Česká kniha a časopis </p>
                  <p>Mám dost českých knih a časopisů.</p>
                  <p>Červená růže </p>
                  <p>Mám dost červených růží.</p>
                  <p>Měkký polštář </p>
                  <p>Nemám dost měkkých polštářů.</p>
                  <p>Dobrá píseň </p>
                  <p>Mám dost dobrých písní.</p>
                  <p>Barevná tužka </p>
                  <p>Mám dost barevných tužek.</p>
                  <p>Výborná zpráva </p>
                  <p>Mám dost výborných zpráv.</p>
                  <p>Jana bydlí u našeho dobrého kamaráda </p>
                  <p>Jana bydlí u našich dobrých kamarádů.</p>
                  <p>Místo mého starého souseda bydlí neznámí lidé</p>
                  <p>Místo mých starých sousedů bydlí neznámí lidé.</p>
                  <p>Investoval hodně peněz do našeho závodního auta </p>
                  <p>Investoval hodně peněz do našich závodních aut.</p>
                  <p>Přišel mi e-mail od vaší anglické kolegyně </p>
                  <p>Přišel mi e-mail od vašich anglických kolegyň</p>
                  <p>Nevěděl jsem, že bydlím vedle tvého bývalého kolegy </p>
                  <p>Nevěděl jsem, že bydlím vedle tvých bývalých kolegů.</p>
                  <p>Rozhodnu se podle svoji vlastní zkušenosti </p>
                  <p>Rozhodnu se podle svých vlastních zkušeností.</p>
                  <p>Během toho volného měsíce mužů udělat hodně věcí</p>
                  <p>Během těch volných měsíců mužů udělat hodně věcí.</p>
                  <br />
                  <p>Kolik kusů žvýkaček je v jednom balení?</p>
                  <p>V jednom balení je 10 kusů žvýkaček.</p>
                  <p>Kolik je zápalek v krabičce? </p>
                  <p>V krabičce je hodně zápalek.</p>
                  <p>Kolik měsíců je v roce? </p>
                  <p>V roce je 12 měsíců.</p>
                  <p>Kolik tady máme židlí? </p>
                  <p>Máme tady 9 židlí.</p>
                  <p>Bez čeho nemůžou žít děti? </p>
                  <p>
                    Podle mého názoru, děti nemůžou žít bez maminek, tatínků,
                    nebo bez rodičů, bez dárků, bez sladkostí, bez kamarádek a
                    bez kamarádů, bez učitelek a učitelů, beze škol a beze
                    školek.
                  </p>
                  <p>Čeho můžeme koupit 10 kusů najednou? </p>
                  <p>Můžeme koupit 10 zápalek, žvýkaček, plátků sýra.</p>
                  <p>Bez čeho nebývají Vánoce? </p>
                  <p>
                    Vánoce nebývají bez dárků, návštěv, příbuzných, bez
                    vánočních stromků, bez svařáků a taky bez vánočních trhů.
                  </p>
                  <p>Kolik je vám let? </p>
                  <p>Je mi 29 let (je mi devět a dvacet).</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GENITIV OSOBNÍCH ZÁJMEN */}
        <div>
          <h2>GENITIV OSOBNÍCH ZÁJMEN</h2>
          <div>
            <p className="bg-warning fw-bold">
              Просмотрите видео с Дарьей — Genitiv osobních zájmen.
            </p>
            <iframe
              width="949"
              height="534"
              src="https://www.youtube.com/embed/Ai2Sec2qq3M"
              title="11  GENITIV OSOBNÍCH ZÁJMEN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div>
              <p className="fw-bold">Slova z videa</p>
              <div className="fst-italic">
                <p>Zeptá se</p>
                <p>Bojí se </p>
                <p>Předložky: bez od u vedle </p>
                <p>Zeptá se mě </p>
                <p>Bojí se mě </p>
                <p>Sedí vedle sebe </p>
                <p>Zeptal se sám sebe </p>
                <p>Bojí se sám sebe </p>
                <p>Sedím vedle tebe </p>
                <p>Tam nepůjdeme bez nich </p>
                <p>Zeptám se Terezy </p>
                <p>Zeptám se jí</p>
                <p>Zeptáte se doktora </p>
                <p>Zeptáte se ho </p>
                <p>Zeptáte se doktorky </p>
                <p>Zeptáte se jí </p>
                <p>Zeptáte se svých kolegů </p>
                <p>Zeptáte se jich </p>
                <p>Zeptáte se prodavačky </p>
                <p>Zeptáte se jí </p>
                <p>Zeptáte se těch lidí </p>
                <p>Zeptáte se jich </p>
                <p>Zeptáte se vedoucího </p>
                <p>Zeptáte se ho </p>
                <p>Jana je u Filipa </p>
                <p>Jana je u něj / něho </p>
                <p>Jana je u rodičů </p>
                <p>Jana je u nich </p>
                <p>Jana je u Evy </p>
                <p>Jana je u ní</p>
                <p>Jana je u svého učitele </p>
                <p>Jana je u nej / něho </p>
                <p>Jana je u své kamarádky </p>
                <p>Jana je u ní </p>
                <p>Ode mě nic nedostaneš </p>
                <p>Je vedle tebe místo? </p>
                <p>Proč se tě neptají </p>
                <p>Budu u něj asi za hodinu </p>
                <p>Nevšiml jsem si ho </p>
                <p>Všichni byli ve škole kromě ní</p>
              </div>
            </div>
          </div>

          <div>
            <p className="fw-bold bg-warning">Продолжим тренировку! </p>

            {/* Task 3 */}
            <div>
              <p className="fw-bold">
                3. Doplňte správné formy osobních zájmen.
              </p>
              <p>
                Osobní zájmeno <strong>«já».</strong>
              </p>
              <p>
                Nemůžu se (on) … dočkat. Budu u (ona) … kolem poledne. Můžete
                tam jít i beze (já) … Nebyl u (ty) … Honza? Bez (oni) … by tu
                nebylo tak veselo. Ani se (vy) … nedotkli! Bez (ty) … nikam
                nepůjdu. Včetně (on) … nás bylo osm. Bez (ona) … to neuděláme.
                (já) … se bát nemusíte. Ptala jsem se (oni) … , ale oni mi
                nakonec neodpověděli. Bála jsem se … (ty), když jsem byla malá.
                Báli jsme se (on) …. (my) … se na nic neptali. (ona) … se
                nedotýkej. Vedle … (ty) leží slovník, můžeš mi ho podat? Bez
                (vy) … jsme to dlouho nemohli udělat. Moc se nám u (vy) …
                líbilo! Nebyla jsem u (on) … , protože jsem neměla čas. Počkají
                na Ivanu u (my) … . Nechceš tam jít zítra místo (já) … ? Od (my)
                … je to asi deset minut pěšky. Radovali se z (ona) … . Vrazil do
                … (ty) omylem. Vrazili jsme do (ona) … , když jsme nesli
                krabice. Nebyla jsem u (on) … , protože jsem neměla čas. Vedle
                (já) … nikdo neseděl. (oni) … se na nic neptali. To je od (vy) …
                milé. Byli u (my) … minulý týden. Děti se (oni) … většinou bojí
                a utíkají před nimi. Dostala jsem od (on) … hezký dárek. (my) …
                se nebojte! Proč se (vy) … bojí všichni děti? Byla u (oni) …
                minulou sobotu.
              </p>
              <div>
                <button onClick={() => keys.toggleKey(3)}>Klíče</button>
                <Collapse in={keys.getValue(3)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      ho, ní, mě, tebe, nich, vás, tebe, něho, ní, mě, jich, tě,
                      ho, nás, jí, tebe, vás, vás, něho, nás, mě, nás, ní, tebe,
                      ní, něho, mě, jich, vás, nás, jich, něho, nás, vás, nich
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 4 */}
            <div>
              <p className="fw-bold">
                4. Odpovězte na otázky s použitím napovězených slov.
              </p>
              <p>
                1) <strong>Čeho se bojíte?</strong> (psi, pavouk — pl. , had —
                pl., válka, hádka, zloději, bouřka, chřipka, nachlazení,
                rakovina, infarkt, ekonomická krize)
              </p>
              <p>
                2) <strong>Čeho jste si všimli v poslední době?</strong>{" "}
                (dopravní značky,prudká změna počasí, zajímavých knih v
                obchodech, zhoršení dopravní situace, změna kurzu, zvyšování
                cen, nové obchody)
              </p>
              <p>
                3) <strong>Čeho byste se chtěli zúčastnit?</strong> (celosvětová
                soutěž, nejrůznější konkurzy, firemní konference, volby, závody)
              </p>
              <p>
                4) <strong>Z čeho byste obviňovali toho muže?</strong> (velká
                bonbónová krádež, lži, ohromné chyby, špatné výsledky, finanční
                situace — pl., zdravotní problémy, rozbité zásuvky)
              </p>
              <p>
                5) <strong>Do čeho se musíte dát v nejbližší době?</strong>{" "}
                (těžká práce, fyzický i psychický pořádek, kupa, hlasitý smích)
              </p>
              <div>
                <button onClick={() => keys.toggleKey(4)}>Klíče</button>
                <Collapse in={keys.getValue(4)} timeout={2000}>
                  <div className="fst-italic">
                    <p className="fw-bold">
                      4. Odpovězte na otázky s použitím napovězených slov.
                    </p>
                    <p>
                      1) <strong>Bojím se:</strong> psů, pavouků, hadů, hádek,
                      válek, zlodějů, bouřek, chřipky, nachlazení, rakoviny,
                      infarktu, ekonomické krize.
                    </p>
                    <p>
                      2) <strong>V poslední době jsem si všimla:</strong>{" "}
                      dopravních značek, prudké změny počasí, zajímavých knihy v
                      obchodech, zhoršení dopravní situace, změny kurzu,
                      zvyšování cen, nových obchodů.
                    </p>
                    <p>
                      3) <strong>Chtěla bych se zúčastnit: </strong> celosvětové
                      soutěže, nejrůznějších konkurzů, firemních konferencí,
                      voleb, závodů.
                    </p>
                    <p>
                      4) <strong>Toho muže bych obviňovala z:</strong> velké
                      bonbónové krádeže, lží, ohromných chyb, špatných výsledků,
                      finančních situací, zdravotních problémů, rozbitých
                      zásuvek.
                    </p>
                    <p>
                      5) <strong>V nejbližší době se musím dát do: </strong>{" "}
                      těžké práce, fyzického a psychického pořádku, kupy,
                      hlasitého smíchu.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 5 */}
            <div>
              <p className="fw-bold">5. Doplňte správně prepozice do vět.</p>

              <div>
                <p>1) Když jsem byla malá, bála jsem se … tmy.</p>
                <p>2) Proč mě obviňuješ … podvádění? Byl jsem ti věrný!</p>
                <p>3) Vůbec jsem si nevšimla … tvého nového účesu.</p>
                <p>
                  4) I když jsem to řekl, hned se dala … pláče jako malá
                  holčička.
                </p>
                <p>
                  5) Chtěli jsme se zúčastnit … televizní soutěže, ale nestihli
                  jsme se přihlásit.
                </p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(5)}>Klíče</button>
                <Collapse in={keys.getValue(5)} timeout={2000}>
                  <div className="fst-italic">
                    <p>1) —</p>
                    <p>2) z</p>
                    <p>3) —</p>
                    <p>4) do</p>
                    <p>5) —</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 6 */}
            <div>
              <p className="fw-bold">6. Přeložte věty do češtiny.</p>

              <div>
                <p>
                  1) Как вы могли не заметить эти два новых журнала возле
                  коробок?
                </p>
                <p>
                  2) Почему ты так боишься этих американских фильмов ужасов*?
                </p>
                <p>
                  3) В новостях сказали, что молодых парней обвинили в пяти
                  воровствах.
                </p>
                <p>4) Мы бы хотели принять участие в трёх смешных рекламах.</p>
              </div>

              <p className="fw-bold text-danger">*фильм ужасов — ten horor</p>

              <div>
                <button onClick={() => keys.toggleKey(6)}>Klíče</button>
                <Collapse in={keys.getValue(6)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      1) Jak jste si mohli nevšimnout těch dvou časopisů vedle
                      krabicí?
                    </p>
                    <p>2) Proč se tak bojíš těch amerických hororů?</p>
                    <p>
                      3) Ve zprávách řekli, že dva mladé kluky obvinili z pěti
                      krádeží.
                    </p>
                    <p>4) Chtěli bychom se zúčastnit tří vtipných reklam.</p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 7 */}
            <div>
              <p className="fw-bold">
                7. Prohlédněte si obrázek č. 3 a doplňte věty podle situace na
                obrázku.
              </p>
              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_11/Obr%C3%A1zek+%C4%8D.+3.jpg"
                  alt="Obrázek č. 3"
                  width="100%"
                  height="auto"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 3</i>
                  </strong>
                </figcaption>
              </figure>

              <p>1) Uprostřed … je fontána.</p>
              <p>2) Blízko … je stadión.</p>
              <p>3) Kolem … jsou lavičky.</p>
              <p>4) Vpravo vedle … je pošta.</p>
              <p>5) Vlevo vedle … je les.</p>
              <p>6) Přes … jsou tři mosty.</p>
              <p>7) Blízko … a blízko … je koupaliště.</p>
              <p>8) Na … je velký bazén.</p>

              <div>
                <button onClick={() => keys.toggleKey(7)}>Klíče</button>
                <Collapse in={keys.getValue(7)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      1) náměstí; 2) kina / parku; 3) fontány; 4) divadla; 5)
                      hospody; 6) řeku; 7) parku, hospody; 8) koupališti.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 8 */}
            <div>
              <p className="fw-bold">
                8. Prohlédněte si obrázek č. 4 a doplňte do vět formy genitivu.
              </p>
              <p>
                <i>
                  <strong>Vzor:</strong> Na stromě je několik … . &#8594; Na
                  stromě je několik <strong>jablek.</strong>
                </i>
              </p>
              <figure>
                <img
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_11/Obr%C3%A1zek+%C4%8D.+4.jpg"
                  alt="Obrázek č. 4"
                  width="100%"
                  height="auto"
                />
                <figcaption>
                  <strong>
                    <i>Obrázek č. 4</i>
                  </strong>
                </figcaption>
              </figure>

              <div>
                <p>
                  1) Na stole je několik plátků … , kus … , konvice … , láhev …
                  a láhev … , tři kousky … , sklenice … a na talířku malý kousek
                  … .
                </p>
                <p>2) Brýle … , která čte, jsou moderní.</p>
                <p>3) Čepice … , který má kočku, je malá.</p>
                <p>4) Okna … , jsou zavřená.</p>
                <p>5) Stránky … , kterou žena čte, jsou hodně velké.</p>
                <p>6) Oči … jsou zavřené.</p>
                <p>7) Listy … , na kterém jsou jablka, jsou zelené.</p>
                <p>8) Světlo … , které právě zapadá, je romantické.</p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(8)}>Klíče</button>
                <Collapse in={keys.getValue(8)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      1) chleba, sýra, čaje / kávy, vody, vína, dortu, džemu,
                      másla; 2) ženy; 3) muže; 4) domu; 5) knihy; 6) kočky; 7)
                      stromu; 8) slunce.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 9 */}
            <div>
              <p className="fw-bold">
                9. Poslechněte si následující dialogy a doplňte vynechaná slova.
              </p>
              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_11/Dialog+1.mp3"
                  ></audio>
                  <figcaption>
                    <strong>Dialog č. 1</strong>
                  </figcaption>
                </figure>

                <div>
                  <p className="fw-bold">Dialog č. 1</p>

                  <p>A: Dobrý den, co to bude?</p>
                  <p>B: Dobrý den, chtěla bych poprosit o šunku z … … .</p>
                  <p>A: A kolik dkg byste potřebovala?</p>
                  <p>B: Dejte mi 10 dkg … … … , prosím.</p>
                  <p>
                    A: Omlouvám se, ale mám jen 5 dkg. Ale místo … … mohu
                    nabídnout šunku z … , … … … … .
                  </p>
                  <p>
                    B: Hmm, tak mi dejte tedy 15 dkg krůtí šunky a ještě také 10
                    dkg balkánského sýra.
                  </p>
                  <p>A: Prosím, zde to máte.</p>
                  <p>
                    B: Děkuji, poraďte mi ještě, prosím, kde najdu oddělení s
                    vynikajícími lahvemi … … … … ?
                  </p>
                  <p>A: Oddělení s vínem se nachází vedle … … … … .</p>
                  <p>B: Děkuji, na shledanou!</p>
                  <p>A: Není zač, mějte se!</p>
                </div>

                <div>
                  <button onClick={() => keys.toggleKey(9)}>Klíče</button>
                  <Collapse in={keys.getValue(9)} timeout={2000}>
                    <div className="fst-italic">
                      <p>A: Dobrý den, co to bude?</p>
                      <p>
                        B: Dobrý den, chtěla bych poprosit o šunku z{" "}
                        <strong>kuřecího masa.</strong>
                      </p>
                      <p>A: A kolik dkg byste potřebovala?</p>
                      <p>
                        B: Dejte mi 10 dkg <strong>té kuřecí šunky,</strong>{" "}
                        prosím.
                      </p>
                      <p>
                        A: Omlouvám se, ale mám jen 5 dkg. Ale místo{" "}
                        <strong>kuřecí šunky</strong>
                        mohu nabídnout šunku z{" "}
                        <strong>hovězího, krůtího nebo vepřového masa.</strong>
                      </p>
                      <p>
                        B: Hmm, tak mi dejte tedy 15 dkg krůtí šunky a ještě
                        také 10 dkg balkánského sýra.
                      </p>
                      <p>A: Prosím, zde to máte.</p>
                      <p>
                        B: Děkuji, poraďte mi ještě, prosím, kde najdu oddělení
                        s vynikajícími lahvemi{" "}
                        <strong>červeného a bílého vína</strong>?
                      </p>
                      <p>
                        A: Oddělení s vínem se nachází vedle{" "}
                        <strong>pečiva a mléčných výrobků.</strong>
                      </p>
                      <p>B: Děkuji, na shledanou!</p>
                      <p>A: Není zač, mějte se!</p>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_11/Dialog+2.mp3"
                  ></audio>
                  <figcaption>
                    <strong>Dialog 2</strong>
                  </figcaption>
                </figure>

                <div>
                  <p className="fw-bold">Dialog č. 2</p>
                  <p>A: Prosím Vás, kudy se jde … … ?</p>
                  <p>
                    B: Tudy ne, to jdete špatně. Musíte jít zpátky a … …
                    doprava. Pak jděte rovně a … … … se raději zeptejte.
                  </p>
                  <p>A: Jak je to daleko?</p>
                  <p>B: Kousek, … … minut.</p>
                </div>

                <div>
                  <button onClick={() => keys.toggleKey(9)}>Klíče</button>
                  <Collapse in={keys.getValue(9)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        A: Prosím Vás, kudy se jde <strong>do lékárny</strong>?
                      </p>
                      <p>
                        B: Tudy ne, to jdete špatně. Musíte jít zpátky a{" "}
                        <strong>u pošty</strong>
                        doprava. Pak jděte rovně a{" "}
                        <strong>na konci parku</strong> se raději zeptejte.
                      </p>
                      <p>A: Jak je to daleko?</p>
                      <p>
                        B: Kousek, <strong>do deseti</strong> minut.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>

              <div>
                <figure>
                  <audio
                    controls
                    src="https://czecha2bucket.s3.amazonaws.com/lekce_11/Dialog+3.mp3"
                  ></audio>
                  <figcaption>
                    <strong>Dialog č. 3</strong>
                  </figcaption>
                </figure>

                <div>
                  <p className="fw-bold">Dialog č. 3</p>
                  <p>A: Ahoj Lenko, dostala jsem … … zprávu. Copak se stalo?</p>
                  <p>
                    B: Ježíš Ivano, strašně jsem se dnes ráno lekla a křičela
                    jsem tak moc, že mě slyšeli všichni sousedi určitě.
                  </p>
                  <p>
                    A: Hah, říkala jsem si, že jsem si všimla … … … , i když
                    bydlím … … 5 km.
                  </p>
                  <p>
                    B: Vůbec to není vtipné! Myslela jsem si, že se nedožiju
                    dnešního večera a umřu! Představ si, že jsem ráno v krabici
                    … … … uviděla dva ohromné pavouky. Vždyť víš, jak se bojím …
                    … … ! Hned jsem začala křičet na celé kolo a utíkala jsem …
                    … … !
                  </p>
                  <p>
                    A: Haha Lenko, vždyť je to jen malý pavouček — nebo dva.
                    Podívej se, jak velká jsi ty. No a vidíš, že jsi přece jen
                    přežila!
                  </p>
                </div>
                <div>
                  <button onClick={() => keys.toggleKey(10)}>Klíče</button>
                  <Collapse in={keys.getValue(10)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        A: Ahoj Lenko, dostala jsem <strong>od tebe</strong>{" "}
                        zprávu. Copak se stalo?
                      </p>
                      <p>
                        B: Ježíš Ivano, strašně jsem se dnes ráno lekla a
                        křičela jsem tak moc, že mě slyšeli všichni sousedi
                        určitě.
                      </p>
                      <p>
                        A: Hah, říkala jsem si, že jsem si všimla{" "}
                        <strong>nějakého hlasitého smíchu</strong>, i když
                        bydlím <strong>od města</strong> 5 km.
                      </p>
                      <p>
                        B: Vůbec to není vtipné! Myslela jsem si, že se nedožiju
                        dnešního večera a umřu! Představ si, že jsem ráno v
                        krabici <strong>od ovesných vloček</strong> uviděla dva
                        ohromné pavouky. Vždyť víš, jak se bojím{" "}
                        <strong>odporných černých pavouků</strong>! Hned jsem
                        začala křičet na celé kolo a utíkala jsem{" "}
                        <strong>ze své kuchyně!</strong>
                      </p>
                      <p>
                        A: Haha Lenko, vždyť je to jen malý pavouček — nebo dva.
                        Podívej se, jak velká jsi ty. No a vidíš, že jsi přece
                        jen přežila!
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>

            <p className="fw-bold">
              Так же как и в прошлых лекциях мы подобрали для вас полезные
              ресурсы на просторах YouTube.
            </p>

            {/* Task 10 */}
            <div>
              <p className="fw-bold">
                10. Podívejte se na video a doplňte vynechaná místa dle videa.
              </p>

              <div>
                <a href="https://www.youtube.com/watch?v=a0uK--UGMhY">
                  Bez Čeho Si Nemůžu Představit Vánoce?
                </a>

                <p className="fw-bold">(00:11 - 00:16)</p>
                <p>
                  «Je jasné, že bez … , bez … a bez … — prostě to nejsou
                  Vánoce.»
                </p>
                <p className="fw-bold">(00:45 - 00:51)</p>
                <p>
                  «Tak chvilku před tím, než jsou Vánoce. A vždycky už mě to pak
                  dostane do … … … .»
                </p>
                <p className="fw-bold">(01:30 - 01:43)</p>
                <p>
                  «Další věc je teda ta, že bez … a … bych si nedokázala
                  představit Vánoce, což je jasné — ale hlavně bez … a … .»
                </p>
                <p className="fw-bold">(01:50 - 02:02)</p>
                <p>
                  «Další věc je ta, že bez … pro ostatní lidi — pro rodinu a tak
                  — tak si ty Vánoce taky nepředstavuju, protože já jsem spíš
                  ten typ … , který ty dárky spíš raději rozdává než dostává.»
                </p>

                <div>
                  <button onClick={() => keys.toggleKey(11)}>Klíče</button>
                  <Collapse in={keys.getValue(11)} timeout={2000}>
                    <div className="fst-italic">
                      <p>
                        <strong>(00:11 - 00:16)</strong> stromečku, svítidel,
                        dárků;
                      </p>
                      <p>
                        <strong>(00:45 - 00:51)</strong> té nálady vánoční;
                      </p>
                      <p>
                        <strong>(01:30 - 01:43)</strong> cukroví, pamlsků,
                        řízků, salátu;
                      </p>
                      <p>
                        <strong>(01:50 - 02:02) </strong> dárků, člověka.
                      </p>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>

            {/* Task 11 */}
            <div>
              <p className="fw-bold">
                11. Poslechněte si následující písničku a doplňte chybějící
                slova.
              </p>

              <div>
                <a href="https://www.youtube.com/watch?v=6z-m-iV_nGk">
                  Petr Skoumal, Jan Vodňanský — Kolik je na světě
                </a>
                <br />
                <p>Kolik je na světě očí,</p>
                <p>kolik je na světě … ,</p>
                <p>kolik se koleček točí,</p>
                <p>kolik je … a dnů?</p>
                <br />
                <p>Kolik je na světě … ?</p>
                <p>kolik je na světě řek?</p>
                <p>Kolik je smutků a hoří? </p>
                <p>kolik je rozlitých … ?</p>
                <br />
                <p>Toho i toho je mnoho,</p>
                <p>… a věcí a … </p>
                <p>Jediné slunce je jedno, </p>
                <p>a to když vyjde, je den.</p>
                <br />
                <p>Kolik je na světě poupat?</p>
                <p>kolik je na světě … ?</p>
                <p>Kolik je jezevčích doupat?</p>
                <p>kolik je jezevců v nich?</p>
                <br />
                <p>Kolik je na světě školek?</p>
                <p>kolik je na světě škol?</p>
                <p>Kolik je kluků a … ?</p>
                <p>Kolik je šlapacích … ?</p>
                <br />
                <p>Toho i toho je mnoho,</p>
                <p>toho i toho je moc.</p>
                <p>Jediné slunce je jedno</p>
                <p>a to když zajde, je noc.</p>
              </div>
              <div>
                <button onClick={() => keys.toggleKey(11)}>Klíče</button>
                <Collapse in={keys.getValue(11)} timeout={2000}>
                  <div className="fst-italic">
                    <p>snů, nocí, moří, mlék, lidí, jmen, knih, holek, kol</p>
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
                Внимание! Задания № 12.1 и 12.2 выполняется по желанию.{" "}
              </p>
            </div>
            {/* Task 12.1 */}
            <div>
              <p className="fw-bold">
                12.1. Podle poslechu doplňte chybějící dílčí části.
              </p>

              <figure>
                <audio
                  controls
                  src="https://czecha2bucket.s3.amazonaws.com/lekce_11/2+orga%CC%81ny%2C+bez+ktery%CC%81ch+mu%CC%8Az%CC%8Ce+c%CC%8Clove%CC%8Ck+z%CC%8Ci%CC%81t.mp3"
                ></audio>
                <figcaption>
                  <strong>2 orgány, bez kterých může člověk žít</strong>
                </figcaption>
              </figure>

              <div>
                <p className="fw-bold">
                  2 orgány, bez kterých může člověk žít.
                </p>
                <p className="fw-bold">Slinivka</p>
                <p>
                  … … … je sice možný, ale skutečně velmi obtížný a
                  problematický. Člověk bez slinivky nebo bez … slinivky se musí
                  … … … , protože … … bez … … … , které se normálně ve slinivce
                  tvoří. Je to hlavně hormon inzulin a trávicí enzymy.
                </p>
                <p className="fw-bold">Štítná žláza</p>
                <p>
                  Pokud se člověk bez štítné žlázy … … … , které nahradí funkci
                  hormonů v ní produkovaných, může vést zcela plnohodnotný život
                  bez … … .
                </p>
              </div>

              <div>
                <button onClick={() => keys.toggleKey(12)}>Klíče</button>
                <Collapse in={keys.getValue(12)} timeout={2000}>
                  <div className="fst-italic">
                    <p>
                      <strong>Slinivka:</strong> život bez slinivky, části,
                      držet přísné diety, se neobejde, těch všech látek;
                    </p>
                    <p>
                      <strong>Štítná žláza:</strong> nevzdá užívání léků,
                      jakýchkoliv omezení.
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* Task 12.2 */}
            <div>
              <p className="fw-bold">
                12.2. Přečtěte si následující text a podle smyslu doplňte slova
                z nabídky, která v textu chybí.
              </p>

              <div>
                <p className="fw-bold">
                  Čeho se opravdu nedotýkat na veřejných toaletách.
                </p>
                <div>
                  <p className="fw-bold">
                    Rukojeť <strong>(1.)</strong> …
                  </p>
                  <p>
                    Vodu zapínáme špinavou rukou, potom se <strong>(2.)</strong>{" "}
                    … dotýkáme čistou umytou rukou. Takže i přesto, že jste si
                    ruce hezky umyli, stejně si bakterie ze{" "}
                    <strong>(3.)</strong> … na rukou odnesete — to nedává příliš
                    smysl, že? Doporučujeme se tedy kohoutku dotýkat loktem
                    anebo kohoutek uzavřít přes papírový ručník.
                  </p>
                </div>
                <div>
                  <p className="fw-bold">Sušiče rukou</p>
                  <p>
                    Nejenže byste se <strong>(4.)</strong> … neměli dotýkat — v
                    ideálním případě byste je neměli ani používat. Podle studie
                    Westminsterské univerzity v Londýně je v teplém vzduchu
                    sušičů sto devadesátkrát více <strong>(5.)</strong> … než na
                    běžných papírových ručnících.
                  </p>
                </div>
                <div>
                  <p className="fw-bold">Podlaha</p>
                  <p>
                    To je asi jasné a běžně se <strong>(6.)</strong> … na
                    veřejné toaletě asi nedotýkáte. Ujistěte se však, že zatímco
                    konáte potřebu, nepokládáte na podlahu ani svůj batoh,
                    tašku, peněženku či jiné předměty, <strong>(7.)</strong> …
                    byste se pak nezbavili opravdu <strong>(8.)</strong> … .
                  </p>
                </div>
                <div>
                  <p className="fw-bold">Splachovadlo</p>
                  <p>
                    První místo, na které lidi po vykonání potřeby, když mají
                    ruce plné bakterií, sáhnou.
                  </p>
                </div>
                <div>
                  <p className="fw-bold">Dávkovač (9.) …</p>
                  <p>
                    Pokud je nutné se <strong>(10.)</strong> … dotknout, abyste
                    dostali dávku mýdla, je dobré si potom ruce opravdu dobře
                    umýt. Mnoho lidí si totiž dává mýdlo na ruce dříve, než si
                    je vůbec opláchne vodou.
                  </p>
                </div>
              </div>

              <table>
                <tr>
                  <td>1.</td>
                  <td>a) kohoutku</td>
                  <td>b) kohoutek</td>
                  <td>c) kouhoutka</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>a) to stejné místo</td>
                  <td>b) toho stejného místa</td>
                  <td>c) těch stejných míst</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>a) záchod</td>
                  <td>b) záchodu</td>
                  <td>c) záchody</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>a) sušičů rukou</td>
                  <td>b) sušiča rukou</td>
                  <td>c) sušiču ruky</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>a) bakterie</td>
                  <td>b) bakterij</td>
                  <td>c) bakterií</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>a) podlahu</td>
                  <td>b) podlahy</td>
                  <td>c) podlahů</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>a) proto</td>
                  <td>b) přestože</td>
                  <td>c) protože</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>a) nechutných bakterií</td>
                  <td>b) nechutné bakterie</td>
                  <td>c) nechutných bakterie</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>a) mýdla</td>
                  <td>b) mýdlu</td>
                  <td>c) mýdlo</td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td>a) jeho</td>
                  <td>b) jemu</td>
                  <td>c) ho</td>
                </tr>
              </table>

              <div>
                <button onClick={() => keys.toggleKey(13)}>Klíče</button>
                <Collapse in={keys.getValue(13)} timeout={2000}>
                  <div className="fst-italic row">
                    <div className="col">
                      <p>1. — a)</p>
                      <p>2. — b)</p>
                      <p>3. — b)</p>
                      <p>4. — a)</p>
                      <p>5. — c)</p>
                    </div>
                    <div className="col">
                      <p>6. — b)</p>
                      <p>7. — c)</p>
                      <p>8. — a)</p>
                      <p>9. — a)</p>
                      <p>10. — c)</p>
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

export default LectureEleven;
