import React from "react";
import useKeyOpen from "../../hooks/useKeyOpen";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";

const LectureEightteen: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const keys = useKeyOpen(12);

  return (
    <div>
      <Link to="../lectures">Эффективный курс чешского A2+</Link>
      <div>
        <h1 className="text-center">18. lekce</h1>
        <p>
          Dativ (3. p&#xE1;d) &#x10D;&#xED;sla jednotn&#xE9;ho a slovesn&#xE9;
          vazbye
        </p>
        <Link to="/admin/lectures/17">Предыдущий урок</Link>
        <Link to="/admin/lectures/19">Следующий урок</Link>
      </div>

      <h2>
        &#x414;&#x43E;&#x431;&#x440;&#x44B;&#x439; &#x434;&#x435;&#x43D;&#x44C;,
        &#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;&#x435;
        &#x434;&#x440;&#x443;&#x437;&#x44C;&#x44F;!
      </h2>

      <div>
        <p>
          <em>
            Srde&#x10D;n&#x11B; v&#xE1;s v&#xED;t&#xE1;me na nov&#xE9; lekci
            <strong>&#xAB;Dativ&#xBB;</strong> &#x2014;
            &#x434;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
            &#x43F;&#x430;&#x434;&#x435;&#x436;.
          </em>
        </p>
        <p>
          To je <strong>3. p&#xE1;d</strong> a odpov&#xED;d&#xE1; na ot&#xE1;zky
          <strong>KOMU? &#x10C;EMU?</strong>
        </p>
        <p>
          P&#x159;edlo&#x17E;ky, kter&#xE9; budeme pou&#x17E;&#xED;vat s Dativem
          jsou: <strong>k, kv&#x16F;li, d&#xED;ky, proti, naproti</strong>.
        </p>
        <p>V t&#xE9;to lekci se komplexn&#x11B; pod&#xED;v&#xE1;me na:</p>
        <ul>
          <li>
            <strong>Dativ &#x10D;&#xED;sla jednotn&#xE9;ho</strong>
            (&#x434;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;
            &#x43F;&#x430;&#x434;&#x435;&#x436;
            &#x435;&#x434;&#x438;&#x43D;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E;
            &#x447;&#x438;&#x441;&#x43B;&#x430;);
          </li>
          <li>
            <strong>Slovesn&#xE9; vazby s Dativem</strong>
            (&#x433;&#x43B;&#x430;&#x433;&#x43E;&#x43B;&#x44C;&#x43D;&#x44B;&#x435;
            &#x441;&#x432;&#x44F;&#x437;&#x43A;&#x438; &#x441;
            &#x434;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;
            &#x43F;&#x430;&#x434;&#x435;&#x436;&#x43E;&#x43C;).
          </li>
        </ul>
      </div>

      <h2>DATIV &#x10C;&#xCD;SLA JEDNOTN&#xC9;HO</h2>

      <p>
        <strong>(3. P&#xC1;D - KOMU? &#x10C;EMU?)</strong>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Dativ
          &#x10D;&#xED;sla jednotn&#xE9;ho.
        </strong>
      </p>
      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/R1nw_vAenUw"
        title="18  DATIV ČÍSLA JEDNOTNÉHO"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>D&#xE1;m / p&#x16F;jdu</em>
        <br />
        <em>k d&#xED;ky kv&#x16F;li proti naproti</em>
        <br />
        <em>Vol&#xE1;me panu Nov&#xE1;kovi</em>
        <br />
        <em>Zavol&#xE1;me panu Jakubu Nov&#xE1;kovi</em>
        <br />
        <em>Tom&#xE1;&#x161; &#x2014; Tom&#xE1;&#x161;ovi</em>
        <br />
        <em>P&#x16F;jdeme sm&#x11B;rem ke hradu</em>
        <br />
        <em>Vysok&#xFD; chlap &#x2014; zavol&#xE1;me vysok&#xE9;mu chlapovi</em>
        <br />
        <em>Zavol&#xE1;me &#x2026;</em>
        <br />
        <em>kamar&#xE1;dka &#x2014; kamar&#xE1;dce</em>
        <br />
        <em>sestra &#x2014; sest&#x159;e</em>
        <br />
        <em>snacha &#x2014; sna&#x161;e</em>
        <br />
        <em>Praha &#x2014; jedeme sm&#x11B;rem k Praze</em>
        <br />
        <em>Olga &#x2014; Olze</em>
        <br />
        <em>Koup&#xED;m k r&#x16F;&#x17E;i je&#x161;t&#x11B; v&#xED;no</em>
        <br />
        <em>D&#xED;ky na&#x161;i radosti jsme vytvo&#x159;ili tanec</em>
        <br />
        <em>Vysok&#xE1; kamar&#xE1;dka</em>
        <br />
        <em>Zavol&#xE1;me vysok&#xE9; kamar&#xE1;dce</em>
        <br />
        <em>Modern&#xED; babi&#x10D;ka</em>
        <br />
        <em>Zavol&#xE1;me modern&#xED; babi&#x10D;ce</em>
        <br />
        <em>Nap&#xED;&#x161;eme t&#xE9; jedn&#xE9; u&#x10D;itelce</em>
        <br />
        <em>
          <strong>(V&#xDD;JIMKA)</strong> Dcera &#x2014; zavol&#xE1;m
          dce&#x159;i
        </em>
      </p>
      <p>
        <em>Nemohl(a) jsem p&#x159;ijet kv&#x16F;li &#x2026;</em>
        <br />
        <em>pr&#xE1;ce ve &#x161;kole &#x2014; pr&#xE1;ci ve &#x161;kole</em>
        <br />
        <em>
          t&#x11B;&#x17E;k&#xE1; zkou&#x161;ka &#x2014; t&#x11B;&#x17E;k&#xE9;
          zkou&#x161;ce
        </em>
        <br />
        <em>rozbit&#xE9; auto &#x2014; rozbit&#xE9;mu autu</em>
        <br />
        <em>
          nemocn&#xFD; man&#x17E;el &#x2014; nemocn&#xE9;mu man&#x17E;elovi
        </em>
        <br />
        <em>
          de&#x161;tiv&#xE9; po&#x10D;as&#xED; &#x2014; de&#x161;tiv&#xE9;mu
          po&#x10D;as&#xED;
        </em>
        <br />
        <em>Cht&#x11B;la bych to ud&#x11B;lat vzhledem k / ke &#x2026;</em>
        <br />
        <em>
          na&#x161;e p&#x159;&#xE1;telstv&#xED; &#x2014; na&#x161;emu
          p&#x159;&#xE1;telstv&#xED;
        </em>
        <br />
        <em>moje rodina &#x2014; svoj&#xED; rodin&#x11B;</em>
        <br />
        <em>
          n&#xE1;&#x161; dobr&#xFD; zn&#xE1;m&#xFD; &#x2014; na&#x161;emu
          dobr&#xE9;mu zn&#xE1;m&#xE9;mu
        </em>
        <br />
        <em>
          dobr&#xFD; z&#xE1;kazn&#xED;k &#x2014; dobr&#xE9;mu
          z&#xE1;kazn&#xED;kovi
        </em>
        <br />
        <em>Jsem podobn&#xE1; / &#xFD; &#x2026;</em>
        <br />
        <em>matka &#x2014; matce</em>
        <br />
        <em>tat&#xED;nek &#x2014; tat&#xED;nkovi</em>
        <br />
        <em>bratr &#x2014; bratrovi</em>
        <br />
        <em>d&#x11B;de&#x10D;ek &#x2014; d&#x11B;de&#x10D;kovi</em>
        <br />
        <em>sestra &#x2014; sest&#x159;e</em>
        <br />
        <em>str&#xFD;c &#x2014; str&#xFD;covi</em>
        <br />
        <em>teta &#x2014; tet&#x11B;</em>
      </p>
      <p>
        <strong>
          <em>P&#x159;eklady:</em>
        </strong>
        <br />
        <em>Vysv&#x11B;tluju fyziku dobr&#xE9;mu studentovi</em>
        <br />
        <em>P&#xED;&#x161;u e-mail nejlep&#x161;&#xED;mu kamar&#xE1;dovi</em>
        <br />
        <em>Koupil jsem d&#xE1;rek star&#x161;&#xED; sest&#x159;e</em>
        <br />
        <em>Dob&#x159;e rozum&#xED;m &#x10D;esk&#xE9; gramatice</em>
        <br />
        <em>Pod&#x11B;koval jsem star&#xE9;mu majiteli</em>
        <br />
        <em>Zavolali jsme bohat&#xE9;mu podnikateli</em>
        <br />
        <em>Tomu mlad&#xE9;mu mu&#x17E;i se nic nel&#xED;b&#xED;</em>
        <br />
        <em>Vyb&#xED;r&#xE1;m svet&#x159;&#xED;k sv&#xE9;mu pejskovi</em>
        <br />
        <em>D&#xED;ky dobr&#xE9;mu doktorovi jsem zdrav&#xFD;/zdrav&#xE1;</em>
        <br />
        <em>
          Kv&#x16F;li t&#x11B;&#x17E;k&#xE9;mu testu nem&#x16F;&#x17E;u j&#xED;t
          do kina
        </em>
        <br />
        <em>
          Mus&#xED;m j&#xED;t k n&#x11B;jak&#xE9;mu &#x161;ikovn&#xE9;mu
          holi&#x10D;i/kade&#x159;n&#xED;kovi
        </em>
        <br />
        <em>Bydl&#xED;m naproti velk&#xE9;mu parku</em>
      </p>
      <p>
        <strong>
          <em>Ot&#xE1;zky:</em>
        </strong>
        <br />
        <em>Komu pat&#x159;&#xED; ty &#x161;aty?</em>
        <br />
        <em>
          Tyhle &#x161;aty pat&#x159;&#xED; u&#x10D;itelce D&#xE1;&#x161;e
        </em>
        <br />
        <em>Naproti &#x10D;emu bydl&#xED;te?</em>
        <br />
        <em>
          J&#xE1; bydl&#xED;m naproti vysok&#xE9;mu domu a taky naproti parku.
        </em>
        <br />
        <em>&#x10C;emu se obvykle sm&#x11B;jete?</em>
        <br />
        <em>
          J&#xE1; se obvykle sm&#x11B;ju n&#x11B;jak&#xE9; vesel&#xE9; komedii,
          nebo n&#x11B;jak&#xE9;mu zabaven&#xE9;mu vtipu.
        </em>
        <br />
        <em>Nerozum&#xED;te n&#x11B;&#x10D;emu?</em>
        <br />
        <em>
          J&#xE1; nerozum&#xED;m francouz&#x161;tin&#x11B; a
          n&#x11B;m&#x10D;in&#x11B;
        </em>
        <br />
        <em>Komu se vyh&#xFD;b&#xE1;te?</em>
        <br />
        <em>
          J&#xE1; se vyh&#xFD;b&#xE1;m &#x161;patn&#xE9;mu &#x10D;lov&#x11B;ku,
          hloup&#xE9;mu &#x10D;lov&#x11B;ku.
        </em>
        <br />
        <em>Komu chcete pod&#x11B;kovat?</em>
        <br />
        <em>
          Chci pod&#x11B;kovat moji babi&#x10D;ce, m&#xE9;mu
          d&#x11B;de&#x10D;kovi, mamince a man&#x17E;elovi
        </em>
        <br />
        <em>Komu d&#xE1;v&#xE1;te nepot&#x159;ebn&#xE9; v&#x11B;ci?</em>
        <br />
        <em>
          J&#xE1; d&#xE1;v&#xE1;m nepot&#x159;ebn&#xE9; v&#x11B;ci
          kamar&#xE1;dce nebo zn&#xE1;me &#x10C;e&#x161;ce.
        </em>
        <br />
        <em>Komu v&#x17E;dycky pom&#xE1;h&#xE1;te?</em>
        <br />
        <em>
          J&#xE1; obvykle pom&#xE1;h&#xE1;m jedn&#xE9; studentce a jednomu
          podnikateli.
        </em>
      </p>
      <p>
        <strong>
          Mysl&#xED;me si, &#x17E;e to bylo lehk&#xE9;! Poj&#x10F;me
          pokra&#x10D;ovat!
        </strong>
      </p>
      <p className="bg-warning">
        <strong>
          &#x412;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x438;&#x442;&#x435;
          &#x437;&#x430;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x441; &#x2116; 1
          &#x43F;&#x43E; &#x2116; 8.
        </strong>
      </p>
      <p>
        <strong>1. Utvo&#x159;te dativ singul&#xE1;ru.</strong>
      </p>
      <p>
        <strong>A) Podstatn&#xE1; jm&#xE9;na M&#x17E;</strong>
        <br />
        Jde k: p&#x159;&#xED;tel &#x2026; , Luk&#xE1;&#x161; &#x2026; , bratr
        &#x2026; , oprav&#xE1;&#x159; &#x2026; , &#x10D;&#xED;&#x161;n&#xED;k
        &#x2026; , u&#x10D;itel &#x2026; , specialista &#x2026; , profesor
        &#x2026; , advok&#xE1;t &#x2026; , pr&#x16F;vodce &#x2026; , policista
        &#x2026; , l&#xE9;ka&#x159; &#x2026; , David &#x2026; , spr&#xE1;vce
        &#x2026; , mluv&#x10D;&#xED; &#x2026; , str&#xFD;c &#x2026; ,
        zn&#xE1;m&#xFD; &#x2026; , Petr &#x2026; .
      </p>
      <p>
        <strong>B) Podstatn&#xE1; jm&#xE9;na Mn&#x17E;</strong>
        <br />
        Bydl&#xED; naproti: obchod &#x2026; , &#xFA;&#x159;ad &#x2026; , orloj
        &#x2026; , hotel &#x2026; , stadion &#x2026;, parlament &#x2026; ,
        pal&#xE1;c &#x2026; .
      </p>
      <p>
        <strong>C) Podstatn&#xE1; jm&#xE9;na &#x17D;</strong>
        <br />
        Dok&#xE1;zal to d&#xED;ky: p&#x159;&#xED;telkyn&#x11B; &#x2026; , rodina
        &#x2026; , Hana &#x2026; , pomoc &#x2026; , rada &#x2026; , sestra
        &#x2026; , kamar&#xE1;dka &#x2026; , Olga &#x2026; , pr&#xE1;ce &#x2026;
        , Alice &#x2026; , &#x159;editelka &#x2026; , kolegyn&#x11B; &#x2026; ,
        Petra &#x2026; .
      </p>
      <p>
        <strong>D) Podstatn&#xE1; jm&#xE9;na St&#x159;</strong>
        <br />
        Zlob&#xED; se kv&#x16F;li: ubytov&#xE1;n&#xED; &#x2026; , j&#xED;dlo
        &#x2026; , auto &#x2026; , pole &#x2026; , u&#x10D;en&#xED; &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(1)}>Klíče</button>
        <Collapse in={keys.getValue(1)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>A) Podstatná jména Mž</strong>
              <br />
              Jde k: příteli, Lukášovi, bratrovi, opravářovi, číšníkovi,
              učiteli, specialistovi, profesorovi, advokátovi, průvodci,
              policistovi, lékařovi, Davidovi, správci, mluvčímu, strýci,
              známému, Petrovi.
            </p>
            <p>
              <strong>B) Podstatná jména Mnž</strong>
              <br />
              Bydlí naprotí: obchodu, úřadu, orloji, hotelu, stadionu,
              parlamentu, paláci.
            </p>
            <p>
              <strong>C) Podstatná jména Ž</strong>
              <br />
              Dokázal to díky: přítelkyni, rodině, Haně, pomoci, radě, sestře,
              kamarádce, Olze, práci, Alici, ředitelce, kolegyni, Petře.
            </p>
            <p>
              <strong>D) Podstatná jména Stř</strong>
              <br />
              Zlobí se kvůli: ubytování, jídlu, autu, poli, učení.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          2. Dopl&#x148;te vhodn&#x11B; tyto p&#x159;edlo&#x17E;ky s dativem.
        </strong>
      </p>
      <p>
        <strong>P&#x159;edlo&#x17E;ky:</strong> kv&#x16F;li, k, proti,
        d&#xED;ky, naproti, v&#x16F;&#x10D;i
      </p>
      <p>
        Ned&#xE1;te si n&#x11B;co &#x2026; j&#xED;dlu nebo &#x2026; pit&#xED;?
        U&#x17E; zase se poh&#xE1;dali &#x2026; pen&#x11B;z&#x16F;m. Budeme
        protestovat &#x2026; jejich &#xFA;&#x10D;asti. M&#xE1;&#x161; j&#xED;t
        &#x2026;vedouc&#xED;mu. Dok&#xE1;zala to jen &#x2026; poctiv&#xE9;
        p&#x159;&#xED;prav&#x11B;. Zajdu &#x2026; v&#xE1;m z&#xED;tra
        nave&#x10D;er. Nechce&#x161; &#x2026; k&#xE1;v&#x11B; su&#x161;enky?
        &#x2026; panel&#xE1;ku stav&#x11B;j&#xED; novou prodejnu. Vr&#xE1;tili
        se pr&#xFD; a&#x17E; &#x2026; r&#xE1;nu. &#x2026; tanci a poslechu hraje
        skupina Styl. P&#x16F;jde&#x161; na leti&#x161;t&#x11B; &#x2026;
        rodi&#x10D;&#x16F;m? &#x2026; tomu skand&#xE1;lu musel z funkce
        odej&#xED;t. Mysl&#xED;m si, &#x17E;e &#x2026; n&#x11B;mu nem&#xE1;
        &#x17E;&#xE1;dnou &#x161;anci. &#x2026; lo&#x148;sk&#xE9;mu roku
        m&#xE1;me letos lep&#x161;&#xED; v&#xFD;sledky. To je opravdu &#x2026;
        vzteku! Takov&#xFD; postup &#x2026; nim nebyl korektn&#xED;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(2)}>Klíče</button>
        <Collapse in={keys.getValue(2)} timeout={2000}>
          <div className="fst-italic">
            <p>
              k, k, kvůli, proti, k, díky, k, ke, Naproti, k, K, naproti, Kvůli,
              vůči, Díky, ke, vůči.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          3. Dejte n&#xE1;sleduj&#xED;c&#xED; v&#xFD;razy do dativu
          singul&#xE1;ru.
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> pan doktor Sojka -&gt; P&#xED;&#x161;e panu
        doktoru Sojkovi.*
      </p>
      <p>
        <strong>
          A) Podstatn&#xE1; jm&#xE9;na M&#x17E;, ukazovac&#xED; z&#xE1;jmena,
          p&#x159;&#xED;davn&#xE1; jm&#xE9;na
        </strong>
        <br />
        Ten nov&#xFD; starosta &#x2026; , tamten ciz&#xED; &#x10D;lov&#x11B;k
        &#x2026; , pan docent Kafka &#x2026; , ten zn&#xE1;m&#xFD; publicista
        &#x2026; , tento dobr&#xFD; sportovec &#x2026; , tenhle
        p&#x159;&#xED;buzn&#xFD; &#x2026; , tamten dal&#x161;&#xED;
        cestuj&#xED;c&#xED; &#x2026; , nemocn&#xFD; otec &#x2026; ,
        d&#x16F;le&#x17E;it&#xFD; sv&#x11B;dek &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(3)}>Klíče</button>
        <Collapse in={keys.getValue(3)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>
                A) Podstatná jména Mž, ukazovací zájmena, přídavná jména
              </strong>
              <br />
              Tomu novému starostovi, tamtomu cizímu člověkovi, panu docentu
              Kafkovi, tomu známému publicistovi, tomuto dobrému sportovci,
              tomuhle příbuznému, tamtomu dalšímu cestujícímu, nemocnému otci,
              důležitému svědkovi.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          B) Podstatn&#xE1; jm&#xE9;na Mn&#x17E;, ukazovac&#xED; z&#xE1;jmena,
          p&#x159;&#xED;davn&#xE1; jm&#xE9;na
        </strong>
        <br />
        Ten zelen&#xFD; &#x10D;aj &#x2026; , tenhle v&#xE1;&#x17E;n&#xFD;
        probl&#xE9;m &#x2026; , lehk&#xFD; ob&#x11B;d &#x2026; , tamten
        fotbalov&#xFD; m&#xED;&#x10D; &#x2026; , ten ztracen&#xFD;
        kl&#xED;&#x10D; &#x2026; , ciz&#xED; rom&#xE1;n &#x2026; , tento
        drah&#xFD; koberec &#x2026; , abstraktn&#xED; obraz &#x2026; , ten
        smutn&#xFD; konec &#x2026; , tamten odv&#xE1;&#x17E;n&#xFD; pl&#xE1;n
        &#x2026; , tenhle t&#x11B;&#x17E;k&#xFD; &#xFA;kol &#x2026; , ten
        dlouh&#xFD; dopis &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(4)}>Klíče</button>
        <Collapse in={keys.getValue(4)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>
                B) Podstatná jména Mnž, ukazovací zájmena, přídavná jména
              </strong>
              <br />
              Tomu zelenému čaji, tomuhle vážnému problému, lehkému obědu,
              tamtomu fotbalovému míči, tomu ztracenému klíči, cizímu románu,
              tomuto drahému koberci, abstraktnímu obrazu, tomu smutnému konci,
              tamtomu odvážnému plánu, tomuhle těžkému úkolu, tomu dlouhému
              dopisu.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          C) Podstatn&#xE1; jm&#xE9;na &#x17D;, ukazovac&#xED; z&#xE1;jmena,
          p&#x159;&#xED;davn&#xE1; jm&#xE9;na
        </strong>
        <br />
        Ta barokn&#xED; socha &#x2026; , ta historick&#xE1; &#x10D;tvr&#x165;
        &#x2026; , mil&#xE1; babi&#x10D;ka &#x2026; , tamta pracovit&#xE1;
        kolegyn&#x11B; &#x2026; , rozbit&#xE1; st&#x159;echa &#x2026; , tato
        &#x161;irok&#xE1; &#x159;eka &#x2026; , modern&#xED; &#x17E;ena &#x2026;
        , tamta hodn&#xE1; teta &#x2026; , ta horsk&#xE1; chata &#x2026; , tato
        typick&#xE1; restaurace &#x2026; , tamta obrovsk&#xE1; lo&#x10F;
        &#x2026; , tahle studentsk&#xE1; kolej &#x2026; , ta &#x10D;erven&#xE1;
        tramvaj &#x2026; , ta nebezpe&#x10D;n&#xE1; v&#xFD;prava &#x2026; ,
        &#x161;t&#xED;hl&#xE1; &#x17E;irafa &#x2026; , tahle stoln&#xED; lampa
        &#x2026; , arogantn&#xED; d&#xE1;ma &#x2026; , tato zaj&#xED;mav&#xE1;
        v&#xFD;stava &#x2026; , ta pra&#x17E;sk&#xE1; galerie &#x2026; ,
        V&#x11B;ra &#x2026; , dlouh&#xE1; chodba &#x2026; , tamta star&#xE1;
        mapa &#x2026; , ta nejlep&#x161;&#xED; t&#x159;&#xED;da &#x2026; ,
        ob&#x159;adn&#xED; s&#xED;&#x148; &#x2026; , klasick&#xE1; hudba
        &#x2026; , tamta nov&#xE1; koupelna &#x2026; , ta prav&#xE1; noha
        &#x2026; , pracovn&#xED; cesta &#x2026; , tahle elektrick&#xE1; kytara
        &#x2026; , secesn&#xED; Praha &#x2026; , velk&#xE1; radost &#x2026; , ta
        krajina &#x2026; , tato &#xFA;stn&#xED; zkou&#x161;ka &#x2026; , ta
        hlubok&#xE1; j&#xE1;ma &#x2026; , divok&#xE1; p&#x159;&#xED;roda
        &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(5)}>Klíče</button>
        <Collapse in={keys.getValue(5)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>
                C) Podstatná jména Ž, ukazovací zájmena, přídavná jména
              </strong>
              <br />
              Té barokní soše, té historické čtvrti, milé babičce, tamté
              pracovité kolegyni, rozbité střeše, této široké řece, moderní
              ženě, tamté hodné tetě, té horské chatě, této typické restauraci,
              tamté obrovské lodi, téhle studentské koleji, té červené tramvaji,
              té nebezpečné výpravě, štíhlé žirafě, téhle stolní lampě,
              arogantní dámě, této zajímaví výstavě, té pražské galerii, Věře,
              dlouhé chodbě, tamté staré mapě, té nejlepší třídě, obřadní síni,
              klasické hudbě, tamté nové koupelně, té pravé noze, pracovní
              cestě, téhle elektrické kytaře, secesní Praze, velké radosti, té
              krajině, této ústní zkoušce, té hluboké jámě, divoké přírodě.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          D) Podstatn&#xE1; jm&#xE9;na St&#x159;, ukazovac&#xED; z&#xE1;jmena,
          p&#x159;&#xED;davn&#xE1; jm&#xE9;na
        </strong>
        <br />
        Kynut&#xE9; t&#x11B;sto &#x2026; , tamto exotick&#xE9; ovoce &#x2026; ,
        to &#x161;pinav&#xE9; n&#xE1;dob&#xED; &#x2026; , to nemocn&#xE9; srdce
        &#x2026; , tamto odpoledn&#xED; vyu&#x10D;ov&#xE1;n&#xED; &#x2026; , to
        soukrom&#xE9; r&#xE1;dio &#x2026; , to ciz&#xED;
        p&#x159;&#xED;jmen&#xED; &#x2026; , modern&#xED;
        s&#xED;dli&#x161;t&#x11B; &#x2026; , tohle v&#xE1;no&#x10D;n&#xED;
        cukrov&#xED; &#x2026; , &#x10D;ern&#xE9; pero &#x2026; , tamto
        pravdiv&#xE9; p&#x159;&#xED;slov&#xED; &#x2026; , to tajn&#xE9; heslo
        &#x2026; , tohle vysok&#xE9; v&#xFD;kupn&#xE9; &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(6)}>Klíče</button>
        <Collapse in={keys.getValue(6)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>
                D) Podstatná jména Stř, ukazovací zájmena, přídavná jména
              </strong>
              <br />
              Kynutému těstu, tamtomu exotickému ovoci, tomu špinavému nádobí,
              tomu nemocnému srdci, tamtomu odpolednímu vyučování, tomu
              soukromému rádiu, tomu cizímu příjmení, modernímu sídlišti,
              tomuhle vánočnímu cukroví, černému peru, tamtomu pravdivému
              přísloví, tomu tajnému heslu, tomuhle vysokému výkupnému.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          4. Dejte v&#xFD;razy v z&#xE1;vorce do n&#xE1;le&#x17E;it&#xE9;ho
          tvaru.
        </strong>
      </p>
      <p>
        Pro&#x10D; nepom&#x16F;&#x17E;ete (ten mal&#xFD; syn) &#x2026; ?
        Podob&#xE1; se (matka) &#x2026; . Za chv&#xED;li se
        p&#x159;ibl&#xED;&#x17E;&#xED;me ke (st&#xE1;tn&#xED; hranice) &#x2026;
        . (Ta z&#xE1;le&#x17E;itost) &#x2026; v&#x16F;bec nerozum&#xED;. Ten
        pozemek pat&#x159;&#xED; (mlad&#x161;&#xED; bratr) &#x2026; .
        Div&#xED;&#x161; se (to rozhodnut&#xED; ) &#x2026; ?
        P&#x159;izn&#xE1;v&#xE1;m se ke (le&#x17E; ) &#x2026; . Takov&#xE1; akce
        p&#x159;isp&#xED;v&#xE1; ke (vz&#xE1;jemn&#xE9; pozn&#xE1;n&#xED; a
        porozum&#x11B;n&#xED;) &#x2026; . Nev&#x11B;&#x159;&#xED; (ten slib)
        &#x2026; . P&#x159;irovnal ho k (ten obl&#xED;ben&#xFD; herec) &#x2026;
        . Zachoval se k (ta d&#xED;vka) &#x2026; ne&#x10D;estn&#x11B;.
        Blahop&#x159;ejeme ti k (ukon&#x10D;en&#xED; studia) &#x2026; .
        Slou&#x17E;&#xED; to (dobr&#xE1; v&#x11B;c) &#x2026; . Vol&#xE1;
        (obvodn&#xED; l&#xE9;ka&#x159;) &#x2026; . V&#x161;ichni jsou
        lhostejn&#xED; k (ten probl&#xE9;m) &#x2026; . Ta l&#xE1;tka se
        &#x10D;asto vyu&#x17E;&#xED;v&#xE1; k (v&#xFD;roba l&#xE9;k&#x16F; )
        &#x2026; . Ke (ka&#x17E;d&#xFD; z&#xE1;kazn&#xED;k) &#x2026; byla velmi
        mil&#xE1;.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(7)}>Klíče</button>
        <Collapse in={keys.getValue(7)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Tomu malému synovi, matce, státní hranici, té záležitosti,
              mladšímu bratrovi, tomu rozhodnutí, lži, vzájemnému poznání a
              porozumění, tomu slibu, tomu oblíbenému herci, té dívce, ukončení
              studia, dobré věci, obvodnímu lékaři, tomu problému, výrobě léků,
              každému zákazníkovi.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>5. Utvo&#x159;te dativ singul&#xE1;ru.</strong>
      </p>
      <p>
        Tamto &#x161;pinav&#xE9; n&#xE1;stupi&#x161;t&#x11B; &#x2026; , ten
        televizn&#xED; report&#xE9;r &#x2026; , tato hloup&#xE1; pov&#x11B;ra
        &#x2026; , tato zbyte&#x10D;n&#xE1; snaha &#x2026; , tohle letn&#xED;
        po&#x10D;as&#xED; &#x2026; , tenhle &#x10D;esk&#xFD; hokejista &#x2026;
        , tamten vysok&#xFD; kopec &#x2026; , velk&#xE1; radost &#x2026; , ta
        nezn&#xE1;m&#xE1; legenda &#x2026; , neposlu&#x161;n&#xFD; pes &#x2026;
        , toto nov&#xE9; umyvadlo &#x2026; , tento mate&#x159;sk&#xFD; jazyk
        &#x2026; , to luxusn&#xED; zrcadlo &#x2026; ,
        st&#x159;edov&#x11B;k&#xE1; &#x10D;e&#x161;tina &#x2026; , tohle
        &#xFA;stn&#xED; cvi&#x10D;en&#xED; &#x2026; , mil&#xE1; snacha &#x2026;
        , tenhle opraven&#xFD; motor &#x2026; , to rozbit&#xE9; sklo &#x2026; ,
        tamta &#x10D;ist&#xE1; podlaha &#x2026; , ten listnat&#xFD; les &#x2026;
        , tato p&#x16F;vabn&#xE1; hosteska &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(8)}>Klíče</button>
        <Collapse in={keys.getValue(8)} timeout={2000}>
          <div className="fst-italic">
            <p>
              Tamtomu špinavému nástupišti, tomu televiznímu reportérovi, této
              hloupé pověře, této zbytečné snaze, tomuhle letnímu počasí,
              tomuhle českému hokejistovi, tamtomu vysokému kopci, velké
              radosti, té neznámé legendě, neposlušnému psovi, tomu novému
              umyvadlu, tomuto mateřskému jazyku, tomu luxusnímu zrcadlu,
              středověké češtině, tomuhle ústnímu cvičení, milé snaše, tomuhle
              opravenému motoru, tomu rozbitému sklu, tamté čisté podlaze, tomu
              listnatému lesu, této půvabné hostesce.
            </p>
          </div>
        </Collapse>
      </div>
      <h2>SLOVESN&#xC9; VAZBY S DATIVEM</h2>

      <p className="bg-warning">
        **&#x421;&#x43A;&#x430;&#x447;&#x430;&#x439;&#x442;&#x435;
        &#x444;&#x430;&#x439;&#x43B; - P&#x159;ehled slovesn&#xFD;ch vazeb A2
        <br />
        **
      </p>
      <p>
        <a
          target="blank"
          href="https://czecha2bucket.s3.amazonaws.com/lekce_18/P%C5%99ehled+slovesn%C3%BDch+vazeb+A2.pdf"
        >
          P&#x159;ehled slovesn&#xFD;ch vazeb A2
        </a>
      </p>
      <p className="text-center">
        <strong>
          Pro procvi&#x10D;ov&#xE1;n&#xED; slovn&#xED; z&#xE1;soby jsme
          p&#x159;ipravili pro V&#xE1;s karti&#x10D;ky na Quizlet:
        </strong>
      </p>
      <p className="text-center">
        <strong>Slovesn&#xE9; vazby s Dativem</strong>
      </p>
      <p>
        <a href="https://quizlet.com/_cwa2kj?x=1jqt&i=3zq2hw" target="blank">
          OTEVŘÍT KARTIČKY
        </a>
      </p>
      <p className="bg-warning">
        <strong>
          &#x41F;&#x440;&#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438;&#x442;&#x435;
          &#x432;&#x438;&#x434;&#x435;&#x43E; &#x441;
          &#x414;&#x430;&#x440;&#x44C;&#x435;&#x439; &#x2014; Slovesn&#xE9;
          vazby s Dativem.
        </strong>
      </p>

      <iframe
        width="949"
        height="534"
        src="https://www.youtube.com/embed/RdIg-F9aR9Y"
        title="18  SLOVESNÉ VAZBY S DATIVEM"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <p>
        <strong>Slova z videa.</strong>
      </p>
      <p>
        <em>Rozum&#x11B;t / porozum&#x11B;t</em>
        <br />
        <em>D&#x11B;kovat / pod&#x11B;kovat</em>
        <br />
        <em>Gratulovat / pogratulovat</em>
        <br />
        <em>Byt n&#x11B;komu podobn&#xFD; / podobat se</em>
        <br />
        <em>Sm&#xE1;t se</em>
        <br />
        <em>
          D&#x11B;kujeme v&#xE1;m / kamar&#xE1;du / kamar&#xE1;dce / v&#x161;em
          kamar&#xE1;d&#x16F;m
        </em>
        <br />
        <em>Gratulujeme v&#xE1;m k narozenin&#xE1;m</em>
        <br />
        <em>Gratulujeme babi&#x10D;ce k narozenin&#xE1;m</em>
        <br />
        <em>J&#xE1; se podob&#xE1;m mamince, tat&#xED;nkovi</em>
        <br />
        <em>M&#x16F;&#x17E;eme se sm&#xE1;t hezk&#xE9;mu/dobr&#xE9;mu vtipu</em>
        <br />
        <em>Rozum&#xED;m v&#xE1;m</em>
        <br />
        <em>J&#xE1; v&#xE1;m nerozum&#xED;m</em>
        <br />
        <em>J&#xE1; tomu nerozum&#xED;m</em>
        <br />
        <em>&#x10C;emu nerozum&#xED;te?</em>
        <br />
        <em>
          Nerozum&#xED;m &#x10D;esk&#xE9; gramatice / matematice / rusk&#xE9;mu
          jazyku
        </em>
        <br />
        <em>Nasv&#x11B;d&#x10D;ovat</em>
        <br />
        <em>Nasv&#x11B;d&#x10D;uje tomu, &#x17E;e u&#x17E; ode&#x161;el</em>
        <br />
        <em>Pat&#x159;it</em>
        <br />
        <em>Komu to pat&#x159;&#xED;?</em>
        <br />
        <em>Ten kab&#xE1;t pat&#x159;&#xED; tomu kolegovi</em>
        <br />
        <em>Podl&#xE9;hat / podlehnout</em>
        <br />
        <em>Podlehnout zm&#x11B;n&#x11B; / nep&#x159;&#xED;teli</em>
        <br />
        <em>Ubli&#x17E;ovat / ubl&#xED;&#x17E;it</em>
        <br />
        <em>
          N&#x11B;kdo mu&#x17E;e ubl&#xED;&#x17E;it sv&#xFD;m
          rodi&#x10D;&#x16F;m / sv&#xFD;m kamar&#xE1;d&#x16F;m
        </em>
        <br />
        <em>V&#x11B;novat se</em>
        <br />
        <em>Jak dlouho se v&#x11B;nujete &#x10D;e&#x161;tin&#x11B;?</em>
        <br />
        <em>Jak dlouho se v&#x11B;nujete sportu?</em>
        <br />
        <em>Vyh&#xFD;bat se / vyhnout se</em>
        <br />
        <em>Vyhnu se protijedouc&#xED;mu &#x10D;lov&#x11B;ku</em>
        <br />
        <em>Br&#xE1;nit se / ubr&#xE1;nit se proti &#x10D;emu</em>
        <br />
        <em>Bran&#xED;m se proti nemoci</em>
        <br />
        <em>Chr&#xE1;nit se</em>
        <br />
        <em>Chr&#xE1;nit se proti zim&#x11B;</em>
        <br />
        <em>Chr&#xE1;nit se p&#x159;ed zimou (instrument&#xE1;l)</em>
        <br />
        <em>Stav&#x11B;t se / postavit se proti n&#x11B;komu</em>
        <br />
        <em>Postav&#xED;m se proti jej&#xED;mu n&#xE1;zoru</em>
      </p>
      <p>
        <strong>
          6. Slova dejte do spr&#xE1;vn&#xFD;ch forem (dativ &#x10D;&#xED;sla
          jednotn&#xE9;ho nebo mno&#x17E;n&#xE9;ho).
        </strong>
      </p>
      <p>
        <strong>*Vzor:</strong> Komu blahop&#x159;ejete? (Rodi&#x10D;e &#x2014;
        sv&#xE1;tek) -&gt; Blahop&#x159;eju rodi&#x10D;&#x16F;m k sv&#xE1;tku.*
      </p>
      <p>
        <strong>Komu blahop&#x159;ejete?</strong>
        <br />
        Kamar&#xE1;di &#x2014; narozeniny &#x2026; .<br />
        P&#x159;&#xE1;tel&#xE9; &#x2014; V&#xE1;noce &#x2026; .<br />
        Sousedi &#x2014; Nov&#xFD; rok &#x2026; .<br />
        Spolu&#x17E;&#xE1;ci &#x2014; promoce &#x2026; .<br />
        Studenti &#x2014; &#xFA;sp&#x11B;ch &#x2026; .
      </p>
      <p>
        <strong>Komu se vyh&#xFD;b&#xE1;te?</strong>
        <br />
        M&#x16F;j kamar&#xE1;d &#x2026; .<br />
        &#x10C;e&#x161;t&#xED; profeso&#x159;i &#x2026; .<br />
        Zaj&#xED;mav&#xFD; &#x10D;l&#xE1;nek &#x2026; .<br />
        Nov&#xED; l&#xE9;ka&#x159;i &#x2026; .
      </p>
      <p>
        <strong>Komu pom&#xE1;h&#xE1;te?</strong>
        <br />
        N&#xE1;&#x161;i kam&#xE1;radi &#x2026; .<br />
        Star&#xE9; babi&#x10D;ky &#x2026; .<br />
        Nemocn&#xFD; soused &#x2026; .<br />
        Zran&#x11B;n&#xFD; hasi&#x10D; &#x2026; .<br />
        Opu&#x161;ten&#xE9; ko&#x10D;i&#x10D;ky &#x2026; .
      </p>
      <p>
        <strong>&#x10C;emu se v&#x11B;nujete?</strong>
        <br />
        Zaj&#xED;mav&#xE9; v&#xFD;zkumy &#x2026; .<br />
        Rusk&#xE1; literatura a spisovatel&#xE9; &#x2026; .<br />
        Logick&#xE9; v&#x11B;dy &#x2026; .<br />
        V&#xE1;&#x161;niv&#xE1; l&#xE1;sce toho zp&#x11B;v&#xE1;ka &#x2026; .
      </p>
      <div>
        <button onClick={() => keys.toggleKey(9)}>Klíče</button>
        <Collapse in={keys.getValue(9)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>Komu blahopřejete?</strong>
              <br />
              Kamarádům k narozeninám, přátelům k Vánocům, sousedům k Novému
              roku, spolužákům k promoci, studentům k úspěchům.
            </p>
            <p>
              <strong>Komu se vyhýbáte?</strong>
              <br />
              Mému kamarádovi, českým profesorům, zajímavému článku, novým
              lékařům
            </p>
            <p>
              <strong>Komu pomáháte?</strong>
              <br />
              Našim kamarádům, starým babičkám, nemocnému sousedovi, zraněnému
              hasiči, opuštěným kočičkám.
            </p>
            <p>
              <strong>Čemu se věnujete?</strong>
              <br />
              Zajímavým výzkumům, ruské literatuře a spisovatelům, logickým
              vědám, vášnivé lásce toho zpěváka.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>7. Tvo&#x159;te v&#x11B;ty.</strong>
      </p>
      <p>
        1) Matka / &#x10D;&#xED;st / svoje dcery / poh&#xE1;dka / o / Popelka.
        <br />
        2) Pavel / pos&#xED;lat / p&#x159;&#xED;tel / blahop&#x159;&#xE1;n&#xED;
        / k / svatba.
        <br />
        3) U&#x10D;itel / d&#xE1;vat / student / hodn&#x11B; &#xFA;kol&#x16F;.
        <br />
        4) Erik / ps&#xE1;t / maminka / dopisy / o / &#x17E;ivot / v / Praha.
        <br />
        5) Na&#x161;e sousedka / vyh&#xFD;bat se / podez&#x159;el&#xFD;
        &#x10D;lov&#x11B;k.
        <br />
        6) Pro&#x10D; / ta politi&#x10D;ka / podlehnout /
        nevyl&#xE9;&#x10D;iteln&#xE1; nemoc / nikdo / nev&#x11B;d&#x11B;t.
        <br />
        7) &#x10C;esk&#xFD; lid / postavit se / proti / nesnesiteln&#xE1;
        vl&#xE1;da / ten politik.
      </p>
      <div>
        <button onClick={() => keys.toggleKey(10)}>Klíče</button>
        <Collapse in={keys.getValue(10)} timeout={2000}>
          <div className="fst-italic">
            <p>
              1) Matka čte svojí dceři pohádku o Popelce.
              <br />
              2) Pavel posílá příteli blahopřání k svatbě.
              <br />
              3) Učitel dává studentovi hodně úkolů.
              <br />
              4) Erik píše mamince dopisy o životě v Praze.
              <br />
              5) Naše sousedka se vyhýbá podezřelému člověku.
              <br />
              6) Proč ta politička podlehla nevyléčitelné nemoci nikdo neví.
              <br />
              7) Český lid se postavil proti nesnesitelné vládě toho politika.
            </p>
          </div>
        </Collapse>
      </div>
      <p>
        <strong>
          8. Pracujte se slovesn&#xFD;mi vazbami, slova ze z&#xE1;vorky dejte do
          spr&#xE1;vn&#xFD;ch forem.
        </strong>
      </p>
      <p>
        <strong>Komu se podob&#xE1;te?</strong>
        <br />
        (svoje maminka, na&#x161;e star&#xE1; babi&#x10D;ka, moje rodi&#x10D;e,
        hodn&#xFD; d&#x11B;de&#x10D;ek, na&#x161;tvan&#xFD; tat&#xED;nek)
      </p>
      <p>
        <strong>
          Komu pat&#x159;&#xED; ta ztracen&#xE1; pen&#x11B;&#x17E;enka?
        </strong>
        <br />
        (na&#x161;tvan&#xE1; sousedka, nevlastn&#xED; sestra, rozzloben&#xFD;
        str&#xFD;c, na&#x161;e mil&#xE9; tety, ti nejlep&#x161;&#xED;
        p&#x159;&#xE1;tel&#xE9;)
      </p>
      <p>
        <strong>Komu se vyh&#xFD;b&#xE1;te?</strong>
        <br />
        (ten zu&#x159;iv&#xFD; report&#xE9;r, &#x10D;esk&#xFD; policista,
        smrd&#xED;c&#xED; bezdomovci, chyt&#x159;&#xED; dokto&#x159;i,
        usm&#x11B;vav&#xFD; chlapec)
      </p>
      <p>
        <strong>Komu nechcete ubl&#xED;&#x17E;it?</strong>
        <br />
        (ta mali&#x10D;k&#xE1; hol&#x10D;i&#x10D;ka, ten posti&#x17E;en&#xFD;
        hasi&#x10D;, ty opu&#x161;t&#x11B;n&#xE9; ko&#x10D;i&#x10D;ky, moji
        bl&#xED;zc&#xED;, m&#x16F;j milovan&#xFD; man&#x17E;el)
      </p>
      <div>
        <button onClick={() => keys.toggleKey(11)}>Klíče</button>
        <Collapse in={keys.getValue(11)} timeout={2000}>
          <div className="fst-italic">
            <p>
              <strong>Komu se podobáte?</strong>
              <br />
              Svojí mamince, naší staré babičce, mým rodičům, hodnému dědečkovi,
              naštvanému tatínkovi.
            </p>
            <p>
              <strong>Komu patří ta ztracená peněženka?</strong>
              <br />
              Naštvané sousedce, nevlastní sestře, rozzlobenému strýci, našim
              milým tetám, těm nejlepším přátelům.
            </p>
            <p>
              <strong>Komu se vyhýbáte?</strong>
              <br />
              Tomu zuřivému reportérovi, českému policistovi, smrdícím
              bezdomovcům, chytrým doktorům, usměvavému chlapci.
            </p>
            <p>
              <strong>Komu nechcete ublížit?</strong>
              <br />
              Té maličké holčičce, tomu postiženému hasiči, těm opuštěným
              kočičkám, mým blízkým, mému milovanému manželu.
            </p>
          </div>
        </Collapse>
      </div>
      <p className="text-center">
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

export default LectureEightteen;
