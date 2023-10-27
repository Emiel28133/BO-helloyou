const readline = require('readline-sync');

function Start() {
    console.log("het is een lange, moeizame dag geweest, je hebt een glas melk opgewarmd en gaat in bednog een beetje liggen lezen. de zon is al onder en de maan is verscholen achter donkerewolken, waardoor het enige licht in je slaapkamer afkomstig is van de kandelaar naast jehoofdeinde. na een tijdje leg je het boek naast je neer, blaas je de kaars uit en sluit je jeogen, je vaag bewust zijnde van de regen die buiten op je raam klettert. langzaam zak jeweg en val je in een diepe slaap...plots schrik je op van een heftige donderstoot. je weet niet hoe laat het is, maar je ziet nogsteeds geen steek, de regen is nog niet opgehouden - integendeel, het is alleen maar hardergaan regenen - en het is zelfs begonnen te onweren. wanneer een tweede bliksemschicht jeraam oplicht zie je tot je afschuw het groene hoofd van een goblin naar binnen turen.geschokt val je uit je bed en grijp je vergeefs naar het zwaard dat op de gang en dus nietnaast je bed ligt. intussen veegt de goblin de regendruppels van het natte raam en besef jedat hij je heeft gezien. je besluit om...");
    const answer = readline.question("(A)te blijven liggen (B)naar buiten te gaan").toLowerCase();
    
    if (answer === 'a') {
        q14();
    } else if (answer === 'b') {
        q13();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', or 'Quit'.");
        Start();
    }
}

function q1() {
    console.log("je slaat het raampje gauw in en verwijdert zorgvuldig het glas. je onbewust van de in rozegeklede mannen achter je wurm je bovenlijf door het ontstane gat, tot je rond je middeltoch echt klem komt te zitten. beseffend dat je niet verder vooruit zult komen probeer je jeterug te trekken, maar ook dit wilt niet meer gaan. op dat moment grijpen de roze mannenin en trekken ze je hardvochtig terug uit het gat in het raam. met een schreeuw van pijn eneen fikse snee in je zij beland je op de grond, waar je nog net ziet hoe de arm van een van demannen met een zwarte knuppel hard op je slaap neerkomt.wanneer je weer wakker wordt zie je even niets en raak je in paniek bij de gedachte dat jeblind bent, tot je beseft dat er berhaupt niets te zien valt en dat het gewoon te donker isom ook maar iets over je omgeving te kunnen waarnemen. op de vraag van in welkwespennest je nu in hemelsnaam bent beland heb je evenmin een antwoord, wat de situatiealleen maar frustrerender maakt.bij het geluid van knarsende scharnieren word je opeens klaarwakker, en even later komteen van de tegels naast je omhoog. althans, dat neem je maar aan. wie er ookverantwoordelijk is voor de verschuivende tegel, hij of zij heeft geen zichtbare lichtbron bijzich, waardoor het in het vertrek nog steeds gitzwart is. op hetzelfde moment vliegt er eendeur open - zo klinkt het tenminste - en klinken er gehaaste stemmen in de gang. je...");
    const answer = readline.question("(A)Wacht wat er ook door de deur komt niet langer af en duikt op de plek af waarvermoedelijk een gat in de vloer zit.  (B)Besluit de mensen die op je afkomen rustig uit te horen. Ze hebben vast niets dangoeds in de zin.").toLowerCase();
    
    if (answer === 'a') {
        q4();
    } else if (answer === 'b') {
        q4();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q1();
    }
}

function q2() {
    console.log("Het kelderluik in de keukenvloer openend herinner je je dat je helemaal geen kelder hebt. Zonder jezelf af te vragen waarom je dan wel een kelderluik hebt begin je ijverig te graven inde steenkoude grond. Na een onbepaalde tijd, tig kilometer en een torenhoog aantalvloeken in de richting van je afgebroken schop hoor je boven je een tweetal mannelijkestemmen. Je graaft direct een weg naar boven. Wanneer je door de laatste laag grond breekt word je haast verblind door het felle daglicht. De twee mannen, die houthakkers blijken te zijn, staan er enigszins verward bij maarbeginnen al gauw te gniffelen om je half verscheurde nachthemd. Aan je norse blik en degigantische wallen onder je ogen zien ze echter dat je hard aan hulp toe bent. Ze besluitendus om een pauze te nemen en je mee terug te nemen naar hun kamp, waar ze je van eenbad, eten, schone kleren en een warm bed voorzien. De volgende ochtend word je wakker en wil je het kleine huisje verlaten, wanneer blijkt datde deur stevig op slot zit. Er is verder niemand in het huisje en je ziet ook geen sleutel liggen. Je...");
    const answer = readline.question("(A)roept om hulp.  (B)probeert de deur open te breken.  (C)wurmt jezelf door het veel te kleine raampje in een poging buiten te geraken.").toLowerCase();
    
    if (answer === 'a') {
        q18();
    } else if (answer === 'b') {
        q21();
    } else if (answer === 'c') {
        q1();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q2();
    }
}

function q3() {
    console.log("Voordat je ook maar iets kunt doen verschijnt er een derde uri, die de tweede neerslaat. Zonder vertraging duikt er ook een vierde op, die de derde weer neerslaat, en een vijfde, eneen zesde, en zo blijft het even doorgaan. Terwijl de stapel bewusteloze uri's gestaag groeitneemt je verbazing even gestaag af en begin je je af te vragen wat er nu eigenlijk aan dehand is. Je...");
    const answer = readline.question("(A)besluit de volgende Uri die verschijnt zelf neer te slaan en er dan maar het beste van te maken.  (B)wacht nog even af.").toLowerCase();
    
    if (answer === 'a') {
        q11();
    } else if (answer === 'b') {
        q17();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q3();
    }
}

function q4() {
    console.log("Gek genoeg maakte je vorige keuze niets uit. Beide ploegen - want het bleek om tweegroepen te gaan die zich allebei uri's noemen - waren namelijk van plan om jou te redden, maar vanwege een miscommunicatie wisten ze dit niet van elkaar. Via de inderhaastgegraven ondergrondse gang verlaten jullie het voor jou nog steeds onbekende complex, entot je immense vreugde zie je enkele minuten later weer daglicht - en een tiental gezadeldepaarden! Terwijl jullie naar het noorden galopperen word je gauw bijgepraat over de situatie. Hetblijkt dat de groep die de aanslag op koning ulthas wilt plegen beter is geinformeerd dangehoopt en dat ze je daarom hadden onderschept. De wachtposten die zijn overmeesterdtijdens je bevrijding bevestigden het vermoeden dat de aanslag nog eerder zal plaatsvindendan gehoopt, waardoor het hele plan een week wordt vervroegd!");
    const answer = readline.question("(A) Je stemt in met het plan, nog steeds zonder goed te weten wat het eigenlijk inhoudt.  (B) Je begint een beetje moe te worden van alle geheimzinnigheid en eist opheldering voordat je ook nog maar één poot verzet.").toLowerCase();
    
    if (answer === 'a') {
        q10();
    } else if (answer === 'b') {
        q8();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q4();
    }
}

function q5() {
    console.log("Na je zwaard weer opgeraapt te hebben storm je roekeloos achter de goblin aan door deheg heen. Als je een lichtbron had gehad was de roerloze groene gestalte iets verderop jemisschien opgevallen en had je wellicht ook de flikkering van pas geslepen metaal in hetstruikgewas opgemerkt. Wat je daarentegen wel goed merkt is de harde 'twang' van eenafgaande boogpees en de donkere schacht die het volgende ogenblik uit je borstkas steekt.");
    ending1();
}

function q6() {
    console.log("Zonder verder na te denken maak je een flinke sprong in de richting van de onbekende, en jezwaard komt met een vervaarlijke boog recht op zijn hoofd af. Op het laatste moment zet deman echter een stap opzij, en zonder iets om te raken suist je zwaard vruchteloos door delucht. Je had je voorbereid op de treffer en duikelt nu machteloos recht op de grond af. Terwijl je bij ligt te komen van de klap voel je een harde tik op je achterhoofd en verlies jehet bewustzijn. Wanneer je weer wakker wordt zie je even niets en raak je in paniek bij de gedachte dat jeblind bent, tot je beseft dat er uberhaupt niets te zien valt en dat het gewoon te donker isom ook maar iets over je omgeving te kunnen waarnemen. Op de vraag van in welkwespennest je nu in hemelsnaam bent beland heb je evenmin een antwoord, wat de situatiealleen maar frustrerender maakt. Bij het geluid van knarsende scharnieren word je opeens klaarwakker, en even later komteen van de tegels naast je omhoog. Althans, dat neem je maar aan. Wie er ookverantwoordelijk is voor de verschuivende tegel, hij of zij heeft geen zichtbare lichtbron bijzich, waardoor het in het vertrek nog steeds gitzwart is. Op hetzelfde moment vliegt er eendeur open - zo klinkt het tenminste - en klinken er gehaaste stemmen in de gang. Je...");
    const answer = readline.question("(A)wacht wat er ook door de deur komt niet langer af en duikt op de plek af waar vermoedelijk een gat in de vloer zit.  (B)besluit de mensen die op je afkomen rustig uit te horen. Ze hebben vast niets dan goeds in de zin.").toLowerCase();
    
    if (answer === 'a') {
        q4();
    } else if (answer === 'b') {
        q4();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q6();
    }
}

function q7() {
    console.log("Je besluit dat je nachtrust al genoeg is verstoord en dat het allemaal niets met jou te makenheeft. Geeuwend ruim je je zwaard op en ga je weer in je bed liggen, waar je al gauw in slaapvalt. Terwijl je de volgende ochtend naar de bakker loopt om brood te halen hoor je demensen praten over een vreemde dode in het takkenbos. Tevreden dat jij er niet bijbetrokken bent geraakt sluit je dit verhaal weer af.");
    ending2();
}

function q8() {
    console.log("Een van de uri's begint je erop te wijzen dat het je paard is dat poten verzet en dat jij daarniets over te zeggen heeft, maar wanneer je hem met een goed gemikte kaakstoot van zijneigen paard af laat duikelen besluit de rest om maar te luisteren. De overgebleven uri'sleggen je uit dat jij de koning moet vergezellen op zijn dagelijkse jachttocht in het naburigebos om hem voor loerende sluipmoordenaars te beschermen. Of je nu goede of kwade bedoelingen voor de koning hebt, met het plan instemmen is in allegevallen de voor de hand liggende keuze. Zonder goed te weten waarom ga je dus akkoorden ga je verder bij");
    q10();
}

function q9() {
    console.log("Met een machtige worp slinger je de dwergmarmot in je hand met een noodvaart in dealgemene richting van het mogelijke gevaar. Wanneer het pluizige beestje met een zachteboog in het groen landt komt het in een gigantische explosie van licht en geluid tot leven. Jeduikt van je paard af in een wanhopige poging aan het helse tafereel te ontkomen en maaktdaarbij kennis met een strategisch opgesteld en totaal niet onopvallend rotsblok. Een oogdichtknijpend en je bloedende neus negerend draai je je gauw om naar de smeulende restenvan de pluizenbol die je net nog in je handen had en naar een onherkenbare, zwartgeblakerde vlek die vermoedelijk tot voor even kort aan een sluipschuttertoebehoorde. Er is echter een ding dat je aandacht direct trekt. Midden in de gloeiende krater staat dekruisboog namelijk nog steeds fier en ongeschonden overeind. Je kijkt om naar de koning, die bewusteloos onder zijn paard ligt, en naar de twee andere leden van het gezelschap, dietijdens de verwarring blijkbaar tegen elkaar zijn opgereden en even bewusteloos een eindverderop liggen. Je bedenkt je dat, als je nu de koning doodschiet en de schuld legt bij deuri's (de kwaadwillende, uiteraard), niemand aan je woord zal twijfelen en dat je dit dusrisicoloos kan doen. Je staat nu voor de eeuwige tweesplitsing die je zo vaak tegenkomt: dekeuze tussen goed en kwaad. Je...");
    const answer = readline.question("(A)laat de koning leven in naam van het goede.  (B)laat de koning leven in naam van het goede.").toLowerCase();
    
    if (answer === 'a') {
        q20();
    } else if (answer === 'b') {
        q16();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q9();
    }
}

function q10() {
    console.log("Eenmaal aangekomen bij het kasteel van koning ulthas loodsen de uri's je via eenachterpoortje naar de koninklijke vertrekken. Wanneer je voor de koning staat moet je, ongeacht je bedoelingen, toegeven dat je toch echt wel onder de indruk bent. De beste manblijkt een beer van een vent te zijn met een volle, rossige haardos en een snor die evenimposant is als zijn borstkas. Zijn kleren zijn goed onderhouden maar eenvoudig, en deeenvoudige kroon die bovenop zijn hoofd prijkt maakt het totaalplaatje af. Alles bij elkaargenomen komt hij over als een sterke, betrouwbare vorst. De koning groet je joviaal en met een brede lach, en even ben je verbaasd wanneer hij jehand met beide handen grijpt en hem vervolgens flink op en neer schudt. Wanneer jerondkijkt in het vertrek zie je dat het even eenvoudig is aangekleed als de bewoner zelf, metals uitzondering de verscheidene jachttrofeeen die aan de muur pronken. Je oog valt op hetwapenrek waar enkele grote kruisbogen aan hangen, en je vraagt je af hoe iemand het in zijnhoofd zou halen het tegen deze man op te nemen. De volgende dag rijd je samen met de koning en een tweetal vertrouwelingen, op dedagelijkse jachttocht waar de koning zo verzot op is. Je hebt inmiddels van de koning tehoren gekregen - of herhaald gekregen - dat het jouw taak is om sluipmoordenaars uit teschakelen voor ze hem iets aan kunnen doen. Met deze informatie in je achterhoofd ben jesteeds op je hoede en schrik je op bij elke ritselende struik en bij elke omhoog springendegraspol. Met gemengde gevoelens neem je nog eens een kijkje in de zak met explosievedwergmarmotten die de uri's speciaal voor dit soort gelegenheden schijnen te fokken. Jewerpt een blik op de grote kruisboog die aan het zadel van koning ulthas hangt en wenst uitde grond van je hart dat je er ook zo een had meegekregen en dat je het niet moest hebbenvan extreem licht ontvlambare knaagdieren. Naarmate de middag vordert en er nog steeds niets is gebeurd begin je je af te vragen of deinlichtingen wel klopten. Ulthas heeft inmiddels al drie herten en een wild zwijn buitgemaakten maakt zich onderhand klaar om terug te gaan naar het kasteel. Wanneer jullie echter devolgende bocht omgaan bemerk je een metalen flikkering in het struikgewas. Je...");
    const answer = readline.question("(A)neemt geen risico's en werpt direct een dwergmarmot naar de struik.  (B)besluit dat het je aandacht niet waard is - of dat je het helemaal niet erg vindt als de koning sterft - en kijkt opvallend nonchalant strak de andere kant op.").toLowerCase();
    
    if (answer === 'a') {
        q9();
    } else if (answer === 'b') {
        q15();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q10();
    }
}

function q11() {
    console.log("Je besluit dat het grapje lang genoeg heeft geduurd en begint aan je weg omhoog, over destapel uri's heen klimmend in een poging de top te bereiken. Hier en daar glijd je uit overeen uitstekend lichaamsdeel en val je een paar meter naar beneden voor je je weer vast kanklampen aan een arm of been, maar onvermoeibaar zet je door op je tocht naar de top! Na wat een eeuwigheid leek sta je eindelijk bovenop de hoop uri's, maar tot je verbazingstaat er verder niemand. Je bemerkt voor het eerst dat je enkele tientallen meters boven hetbos uitsteekt en dat je vanaf hier je huisje kan zien, dat in lichterlaaie staat. Op dat momentvoel je opeens een hand zich om je been sluiten en word je omver getrokken door een uridie zich bewusteloos veinsde. Na een korte worsteling zweven jullie beide een paar meternaast de stapel, om vervolgens met een noodvaart naar beneden te storten.");
    ending1();
}

function q12() {
    console.log("Zelfverzekerd baan je je een weg over een bospaadje. Je merkt dat er niet lang geleden nogiemand heeft gelopen, en onwillekeurig controleer je nog eens of je zwaard los genoeg inzijn schede zit. Na enige tijd bereik je een open plek, met in het midden de eik. Onder deboom staat een eenzaam personage gehuld in een purperen mantel, zijn gezicht verborgenin de schaduw van een donkergekleurde hoed. Je zet een laatste stap richting de boom enroept vragend: uri? op dat moment komt de gestalte in beweging. Zijn gezicht draait zich naar jou toe, en meteen verrassend diepe stem vraagt hij: heb je de brief bij je? je haalt de brief uit je wambuis en houdt hem voor je uit. De vergulde letters van het woorduri glinsteren in het maanlicht. De vreemde man schijnt eindelijk te ontspannen en zet zijnhoed af, waardoor je zijn gezicht kan zien. Zijn donkerbruine haar is kortgeknipt en een goedonderhouden pieksnor priemt op zijn bovenlip, die tot een glimlach is getrokken. ik zie dathet haakneus is gelukt je mijn bericht te overhandigen. Kom nu gauw hier, de nacht duurtniet lang meer en we hebben een hoop te bespreken. de man, die naar eigen zeggen een uri is, vertelt je dat hij deel uitmaakt van een elitekorpsdat verantwoordelijk is voor de veiligheid van het koningshuis: ulthas' roze informanten. [leden van dit korps zullen de rest van het verhaal overigens gewoon uri/uri's wordengenoemd. ] ze hebben sterke vermoedens dat er binnenkort een aanslag zal wordengepleegd op koning ulthas door de kwaadwillende groep van uitermate roze getinteinfiltranten [die ter algemene verwarring eveneens uri/uri's worden genoemd], maarvanwege enkele incidenten in het verleden zijn alle huidige leden van het korps bij dezegroep bekend en kunnen ze zelf dus niets onderzoeken zonder de aandacht te trekken. Datis waar ze jouw hulp voor nodig hebben. Plots hoor je een harde klap en valt uri voorover in het gras. Achter hem duikt een tweedeman op, op dezelfde manier gekleed als hij, maar dan met zwart haar en een forse knuppel. Je...");
    const answer = readline.question("(A)valt de man aan.  (B)hoort de man uit.").toLowerCase();
    
    if (answer === 'a') {
        q6();
    } else if (answer === 'b') {
        q3();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q12();
    }
}

function q13() {
    console.log("De kandelaar floept op magische wijze weer aan en plots is de kamer weer prettig verlicht. Je trekt snel een leren wambuis over je nachthemd heen en doet een stevige broek aan. Vervolgens grijp je de kandelaar en loop je met stevige passen richting de voordeur. Onderweg raap je nog je zwaard op en klem je dit stevig in je rechterhand vast. Eenmaal bij de voordeur zet je de kandelaar neer en open je voorzichtig de deur op een kier, half verwachtend dat er over enkele ogenblikken een horde goblins naar binnen stormt. Erstaat echter maar een goblin, helemaal verzopen en eerder lachwekkend danangstaanjagend. Snel drukt hij een vochtige brief in je handen, waardoor je je zwaard laatvallen, om vervolgens door een gat in de heg de nacht in te verdwijnen. Je...");
    const answer = readline.question("(A)rent de goblin achterna.  (B)leest de brief.").toLowerCase();
    
    if (answer === 'a') {
        q5();
    } else if (answer === 'b') {
        q19();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q13();
    }
}

function q14() {
    console.log("je kruipt snel weer je bed in, trekt je kussen over je hoofd heen en probeert degebeurtenissen van zo-even te vergeten. het zal maar je verbeelding zijn geweest, vast tewijten aan het overslaan van het middageten de vorige dag. verdere bliksemschichtenblijven uit, en je begint al enigszins te ontspannen, wanneer er twee korte kloppen bij jevoordeur weerklinken. de kloppen blijven maar doorgaan, en je beseft dat je er toch iets aanzult moeten doen. je..");
    const answer = readline.question("(A).doet de deur open. (B)gaat in de kelder schuilen.").toLowerCase();
    
    if (answer === 'a') {
        q13();
    } else if (answer === 'b') {
        q2();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q14();
    }
}

function q15() {
    console.log("Je had beter moeten weten, maar toch negeer je de verdekt opgestelde sluipschutter. Dithad goed kunnen uitpakken, ware het niet dat door een stomtoevallige speling van het lot(en door een iets minder toevallige ingeving van de schrijver) de schutter uit het niets wordtaangevallen door een zwerm muggen. Ongelukkig genoeg gaat zijn kruisboog ook nog eensaf, maar in plaats van het hart van de koning boort de dodelijk bedoelde schicht zich in debips van je paard. Geschrokken holt je rijdier het bos in, jou dwingend je met beide handen vast te klampenaan de zadelknop om niet tegen een uitstekende tak aan te rijden. Daarbij laat jeonwillekeurig de dwergmarmot los, die met een zachte plof in je schoot belandt. Vanwegede traumatiserende opleiding van het beestje is het onder alle omstandigheden bijzondergestrest, maar gelukkig schrikt het zich net niet dood - dit had het namelijk tot ontploffinggebracht. Jammer genoeg besluit het kreng zich daarentegen in je linkerarm vast te bijtenom niet van het op hol geslagen paard te vallen. Jezelf gelukkig prijzend dat je te maken hebt met kleine marmotten en niet met volgroeidebevers begin je het beestje met je vrije hand te meppen om het los te krijgen. Uiteraard kiestje paard juist dit moment om van een egel te schrikken en te steigeren, waardoor jeachterover, hoofd voorop recht in de zak met dwergmarmotten duikelt die achter je zadelhangt. In de daarop volgende verblindende en oorverdovende explosie word je verspreidover het hele bos, daarmee een einde brengend aan je verhaal.");
    ending1();
}

function q16() {
    console.log("Zonder enige aarzeling grijp je de kruisboog, en met een welgemikt schot maak je de koningvoor eeuwig onschadelijk. Vervolgens rijd je in galop terug naar het kasteel en meld je deuri's het gruwelijke nieuws. Zoals je vermoedde twijfelen ze niet aan je verhaal en hebben zenog steeds alle vertrouwen in je eerlijkheid. Zonder de koning om ze te beschermen vormen zijn nog jonge zoontjes geen probleem. Nadat de twee jongens op mysterieuze en beter niet beschreven wijze zijn verdwenen zitardougne met een opvolgingsprobleem. Wanneer jij jezelf naar voren schuift nemen ze jeaanbod graag aan, en zo is je tirannische bewind gevestigd. Jaren later kijk je met een glascognac in je hand uit een van de ramen van je vertrekken naar buiten. Bij het zicht van deimmens veranderde stad en de groepjes uri's die de straten patrouilleren hef je je glasnogmaals naar de hemel, en met een kwaadaardige grijns op je gezicht breng je ulthas eenlaatste groet.");
    ending3();
}

function q17() {
    console.log("De stapel uri's begint astronomische proporties aan te nemen, en met je handen boven jeogen probeer je de bovenkant van de hoop nog te zien. Op dat moment scheidt een stip zichvan de hoop en even later landt er een uri met een misselijkmakende smak naast je op degrond. Dan pas begint het tot je te dagen dat het wellicht geen goed idee om naast de stapelte blijven staan als deze eindelijk instort. Terwijl deze gedachte door je hoofd schietbeginnen er meer uri's uit de stapel te vallen. De onderste uri's begonnen ook weer totbewustzijn te komen en destabiliseren de al vrij instabiele stapel alleen maar meer met hunpogingen weg te komen. Ondanks de wanhopige pogingen van je hersenen om je motorische zenuwen te bereiken ineen poging om weg te rennen blijken je benen niet in staat om je tijdig in veiligheid tebrengen. Je laatste gedachten gaan uit naar je warme bed, terwijl je je afvraagt waarom jetoch niet bent blijven liggen in plaats van bedolven te worden onder een regen van rozegewaden en zwarte hoeden.");
    ending1();
}

function q18() {
    console.log("Je schreeuwt een paar keer flink in de hoop dat iemand het oppikt, maar tot jeverontwaardiging weerklinkt er aan de andere kant van de deur alleen het gemene en totaalniet onderdrukte gegrinnik van iemand die je benarde situatie duidelijk grappig vindt. Omhet allemaal erger te maken heeft de kerel op de een of andere manier de slappe grinnikgekregen, waardoor het nare geluid maar blijft voortzetten. Na ruim een halfuur grinniken klinkt er opeens een flinke 'bonk' en houdt het gegrinnikdirect op. Even later beginnen er flinke klappen op de deur te weerklinken en zie je de eerstebarsten al ontstaan. Na nog een drietal rake stoten vliegen er vier mannen in roze gewadenmet een halve boomstam naar binnen, om met een flinke smak tegen de muur tot stilstandte komen. Je kan je lachen nog net inhouden en stapt op ze af. Voor je ze bereikt rennen erplots nog vijf mannen in roze naar binnen. Een van hen stapt naar voren en gebaart je metde volgende woorden naar buiten: de tijd dringt, dus ik kan je op dit moment helaas nietsmeer vertellen. Weet echter dat we je hulp hard nodig hebben. je besluit niet verder aan te dringen en stapt op het paard dat een van de mannen je buitenaanbiedt. Met de groep galoppeer je vervolgens naar het noorden. Onder het rijden weeteen van de mannen, die zich uri's noemen, je te vertellen dat er een aanslag zal wordengepleegd op koning ulthas, en dat jij het schakelpunt bent in hun plan om deze aanslag teverijdelen.");
    const answer = readline.question("(A) Je stemt in met het plan, nog steeds zonder goed te weten wat het eigenlijk inhoudt.  (B) Je begint een beetje moe te worden van alle geheimzinnigheid en eist opheldering voordat je ook nog maar één poot verzet.").toLowerCase();
    
    if (answer === 'a') {
        q10();
    } else if (answer === 'b') {
        q8();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q18();
    }
}

function q19() {
    console.log("Je besluit verder geen aandacht aan de goblin te besteden, sluit de deur weer en opentvoorzichtig de brief, er goed op lettend dat het vochtige papier niet scheurt. Op het velletjepapier staan slechts enkele woorden: kom zo snel mogelijk. Ik wacht bij de eenzame eik. onderaan staan drie vergulde letters die het woord uri spellen. Je herinnert je dat er in het takkenbos, niet al te ver van je huis, een grote, buur loze eikstaat. Deze zal vast bedoeld worden in het briefje. Maar wie of wat is uri? En wat moet hijvan jou? Je besluit om...");
    const answer = readline.question("(A)deze Uri te ontmoeten.  (B)het briefje te negeren.").toLowerCase();
    
    if (answer === 'a') {
        q12();
    } else if (answer === 'b') {
        q7();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q19();
    }
}

function q20() {
    console.log("Je tilt de bewusteloze ulthas onder zijn paard vandaan en legt hem dwars over het zadel vanje eigen paard, dat tijdens de hele toestand op miraculeuze wijze ongedeerd is gebleven. Met een rustig drafje rijd je terug naar het kasteel, waar je de koning overdraagt aan de uri's(de goede, welteverstaan). Dankzij de goede zorg van de heelmeesters van het kasteel genezen je hoofdwondenvoorspoedig. Als naaste adviseur en vertrouweling van de koning heb je een mooiewoonplaats in het oosten van ardougne gekregen, waar eens in de week de twee zonen vande koning en een jolige groep uri's over de vloer komt voor een gezellig avondje bijpraten -en drinken. Zo af en toe komt koning ulthas zelf ook nog mee. Op zo'n avond, terwijl julliebeiden, onder het genot van een glas koel bier op het balkon van de zonsondergang zitten tegenieten, denk je terug aan de toevallige gebeurtenissen die tot dit alles leidden en ben jeblij dat je de goede keuzes hebt gemaakt.");
    ending4();
}

function q21() {
    console.log("Terwijl je met een flinke aanloop - voor zover dat mogelijk is in het kleine huisje - en jeschouder diep voorover gebogen op de deur af stormt komt het ding plotseling met eengrote, houten grijns tot leven en staar je recht in een gapend gat vol splinterige tanden! Jeprobeert nog af te remmen en om te keren, maar het baat allemaal niet, en even latersluiten de hardeiken kaken zich voorgoed achter je.");
    ending1();
}

/*
function q() {
    console.log("");
    const answer = readline.question("").toLowerCase();
    
    if (answer === 'a') {
        q();
    } else if (answer === 'b') {
        q();
    } else if (answer === 'back') {
        Start();
    } else if (answer === 'quit') {
        quitGame();
    } else {
        console.log("Invalid choice. Please choose 'A', 'B', 'Back', or 'Quit'.");
        q();
    }
}
*/

function ending1() {
    console.log("Doodlopend einde.");
    quitGame();
}

function ending2() {
    console.log("Normaal einde!");
    quitGame();
}

function ending3() {
    console.log("Kwaad einde!");
    console.log(ㅤ);
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠜⣿");
    console.log("⣿⣿⣿⣿⠿⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿");
    console.log("⣿⣿⡏⠁⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣶⣶⣦⣤⡄⠀⠀⠀⠀⢀⣴⣿");
    console.log("⣿⣿⣷⣄⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡧⠇⢀⣤⣶");
    console.log("⣿⣿⣿⣿⣿⣿⣾⣮⣭⣿⡻⣽⣒⠀⣤⣜⣭⠐⢐⣒⠢⢰");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⡟⣾⣿⠂⢈⢿⣷⣞");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣷⣶⣾⡿⠿⣿⠗⠈⢻⣿");
    console.log("⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠋⠉⠑⠀⠀⢘⢻");
    console.log("⣿⣿⣿⣿⣿⣿⣿⡿⠟⢹⣿⣿⡇⢀⣶⣶⠴⠶⠀⠀⢽");
    console.log("⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿⣿⠀⠀⠣⠀⠀⠀⠀⠀⡟⢿⣿");
    console.log("⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠹⣿⣧⣀⠀⠀⠀⠀⡀⣴⠁⢘⡙");
    console.log("⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠗⠂⠄⠀⣴⡟⠀⠀⡃");
    quitGame();
}

function ending4() {
    console.log("Goed einde!");
    quitGame();
}

function quitGame() {
    console.log("Quitting the game.");
    process.exit(0);
}

Start();
