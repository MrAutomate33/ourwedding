'use strict';

/* ==========================================================================
  Mariëlle & Jérémy — Wedding Website Script
   Multilingual: Nederlands (default) · English · Français
   ========================================================================== */

/* --------------------------------------------------------------------------
   Translations — edit text here per language (nl = default/fallback)
   -------------------------------------------------------------------------- */
const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home', 'nav.more': 'Meer', 'nav.story': 'Ons verhaal', 'nav.journey': 'Onze reis',
    'nav.proposal': 'Het aanzoek', 'nav.wedding': 'Trouwdag', 'nav.location': 'Locatie',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Dresscode', 'nav.gifts': 'Cadeaus', 'nav.accommodation': 'Overnachting',
    'nav.ceremony': 'Ceremoniemeesters',
    // Hero
    'hero.sub': 'Van Kerlingarfjöll tot voor altijd',
    'hero.date': '26 mei 2027',
    'hero.countdown_today': 'Vandaag is de dag!',
    'hero.countdown_prefix': 'Aftellen naar het moment dat we ‘ja’ zeggen.',
    'hero.days': 'Dagen', 'hero.hours': 'Uren', 'hero.minutes': 'Minuten', 'hero.seconds': 'Seconden',
    'hero.btn_rsvp': 'RSVP', 'hero.btn_day': 'Bekijk de dag',
    'save_date.more_info': 'Meer informatie volgt.',
    'invite.label': 'Noteer de datum',
    'invite.message': 'Beste {name}, met veel liefde nodigen we je uit om onze trouwdag met ons te vieren. We kijken ernaar uit om samen te proosten, te lachen en herinneringen voor altijd te maken.',
    'journey.label': 'Onze Reis', 'journey.h2': 'Onze Reis naar Kerlingarfjöll',
    'journey.intro': 'Elk avontuur bracht ons een klein beetje dichter bij deze dag.',
    'journey.item1.title': 'Eerste ontmoeting', 'journey.item2.title': 'Eerste afspraak',
    'journey.item3.title': 'Verliefd worden', 'journey.item4.title': 'Eerste groot avontuur',
    'journey.item5.title': 'Een leven opbouwen samen', 'journey.item6.title': 'IJsland avontuur',
    'journey.item7.title': 'Kerlingarfjöll', 'journey.item7.label': 'Het Aanzoek', 'journey.item7.date': '15 september 2025',
    'journey.item7.text': 'Hoog in de bergen van Kerlingarfjöll, omgeven door IJslands adembenemend landschap, begon ons nieuwe hoofdstuk.',
    'journey.item8.title': 'Verloving', 'journey.item9.title': 'Trouwdag',
    'journey.item9.text': 'We kunnen niet wachten om dit nieuwe hoofdstuk te vieren met onze familie en vrienden.',
    'journey.continues': 'De reis gaat verder\u2026', 'journey.btn': 'Lees het aanzoeksverhaal',
    // Proposal
    'coord.label': 'IJsland', 'coord.h2': 'Coördinaten van ons verhaal',
    'coord.location_label': 'Aanzoeklocatie', 'coord.tagline': 'Waar avontuur voor eeuwig werd.',
    'coord.btn': 'Lees ons verhaal',
    'story.label': 'Ons Verhaal', 'story.h2': 'Ons Verhaal',
    'story.h3_met': 'Hoe wij elkaar ontmoetten',
    'story.p_met': 'Voeg hier toe hoe Mariëlle en Jérémy elkaar ontmoetten.',
    'story.h3_adventure': 'Avonturen beleven samen',
    'story.p_adventure': 'Voeg hier een favoriete gedeelde herinnering of avontuur toe.',
    'story.h3_chapter': 'Het volgende hoofdstuk',
    'story.p_chapter': 'Voeg hier een korte introductie van het huwelijksfeest toe.',
    'proposal.label': 'Het Aanzoek', 'proposal.h2': 'Het aanzoek bij Kerlingarfjöll',
    'proposal.h3_journey': 'De reis erheen', 'proposal.h3_moment': 'Het moment', 'proposal.h3_answer': 'Het antwoord',
    'proposal.location_caption': 'Kerlingarfjöll, IJsland · 64°38\'41.8"N 19°17\'14.9"W',
    'wind.label': 'Een beetje IJslandse wind', 'wind.h2': 'Roep de wind op',
    'wind.lead.instruction': 'Blaas in je microfoon en laat de wind opsteken.',
    'wind.lead.challenge': 'Kun jij de windkracht tot het uiterste brengen?',
    'wind.start': 'Gebruik microfoon', 'wind.fallback': 'Houd vast voor wind',
    'wind.status_ready': 'Klaar voor een frisse bries?', 'wind.status_listening': 'We luisteren. Blaas maar!',
    'wind.status_success': 'Windkracht bereikt. Kijk wat er gebeurt!', 'wind.status_unavailable': 'De microfoon is niet beschikbaar. Roep de wind op met de knop.',
    // Wedding Day
    'wedding.label': 'De Grote Dag', 'wedding.h2': 'De Trouwdag',
    'wedding.date': 'Woensdag, 26 mei 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Aankomst gasten & welkom', 'wedding.arr.note': 'Neem rustig de tijd om aan te komen en elkaar te begroeten.',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'Huwelijksceremonie', 'wedding.cer.note': 'Een moment voor ons ja-woord.',
    'wedding.cake.time': '15:45', 'wedding.cake.desc': 'Toast, taart, gelukwensen & borrel', 'wedding.cake.note': 'Vanaf de toast zijn bier, wijn en frisdrank onbeperkt beschikbaar.',
    'wedding.drinks.note': 'Drankjes zijn beschikbaar vanaf dit moment.',
    'wedding.dinner.time': '17:30', 'wedding.dinner.desc': 'Diner', 'wedding.dinner.note': 'Samen aan tafel, met tijd voor goed eten en mooie gesprekken.',
    'wedding.speeches.time': 'Tijdens het diner', 'wedding.speeches.desc': 'Toespraken', 'wedding.speeches.note': 'Een paar woorden uit het hart, tussen de gangen door.',
    'wedding.party.time': '20:00', 'wedding.party.desc': 'Feest', 'wedding.party.note': 'Daarna gaat de muziek aan en vieren we samen tot laat.',
    'wedding.end.time': '00:30', 'wedding.end.desc': 'Einde van de avond', 'wedding.end.note': 'Bedankt dat jullie deze bijzondere dag met ons hebben gevierd.',
    'wedding.end.irish_exit': 'Een Irish exit is helemaal prima: als je naar huis wilt, mag je gerust stilletjes vertrekken zonder iedereen gedag te zeggen. Je hoeft ons niet eerst op te zoeken.',
    'wedding.note': 'We nodigen graag precies de mensen uit die op jullie persoonlijke uitnodiging staan.',
    'wedding.photo_note.ceremony': 'Tijdens de ceremonie hebben we een professionele fotograaf en vragen we jullie om telefoons weg te leggen.',
    'wedding.photo_note.outside': "Buiten de ceremonie zijn jullie vrij om foto\'s en filmpjes te maken. Film je? Houd je telefoon dan horizontaal. En vooral: wees samen met ons in het moment.",
    // Location
    'location.label': 'Locatie', 'location.h2': 'Hier naartoe',
    'location.description': 'Een sfeervol landhuis met klassieke ruimtes en een prachtige parktuin op de Utrechtse Heuvelrug.',
    'location.travel.h': 'Reizen', 'location.travel.text': 'Reis naar station Driebergen-Zeist. Vanaf daar kun je lopen of de bus nemen. Plan vlak voor vertrek je actuele route.',
    'location.parking.h': 'Parkeren', 'location.parking.text': 'De parkeerplaats ligt vlak bij de locatie, net om de hoek. Vanaf daar is er een aparte ingang naar Buitenplaats Sparrendaal.', 'location.parking.link': 'Open parkeerroute',
    'location.accom.h': 'Overnachting', 'location.accom.text': 'Gasten regelen en boeken hun overnachting zelf.', 'location.accom.link': 'Bekijk overnachtingsmogelijkheden',
    'location.taxi.h': 'Taxi & vervoer', 'location.taxi.intro': 'Hieronder vind je een aantal lokale taxi-opties.',
    'accommodation.label': 'Overnachten', 'accommodation.h3': 'Overnachtingsmogelijkheden in de buurt', 'accommodation.lead': 'Gasten regelen en boeken hun eigen overnachting. Hieronder vind je enkele mogelijkheden.', 'accommodation.disclaimer': 'Dit zijn suggesties van de trouwlocatie. Wij hebben geen samenwerking met en geen persoonlijke ervaring met deze accommodaties.',
    'accommodation.driebergen.h': 'Driebergen-Rijsenburg', 'accommodation.horst': 'Hotel in Driebergen-Rijsenburg, met parkeergelegenheid en ontbijtopties.', 'accommodation.bergse': 'Hotel aan de rand van Nationaal Park Utrechtse Heuvelrug met verschillende kamertypes.', 'accommodation.passage': 'Kleinschalige bed & breakfast in Driebergen-Rijsenburg, op loopafstand van Buitenplaats Sparrendaal.',
    'accommodation.horst.one': 'Overnacht na het trouwfeest op Buitenplaats Sparrendaal op Landgoed de Horst te Driebergen. Om in de romantische sfeer te blijven wordt je de volgende ochtend heerlijk wakker tussen de boomtoppen onder het genot van vogelgezang. Je begint de dag goed met een uitgebreid ontbijtbuffet waar je kunt nagenieten van het gezellige feest van de avond ervoor. Kamerprijzen vanaf € 90,- per nacht inclusief ontbijt (exclusief toeristenbelasting).',
    'accommodation.horst.two': 'Landgoed de Horst is gunstig gelegen, met gratis parkeergelegenheid. Mocht je gebruik willen maken van een taxi, dan kan dat uiteraard via de receptie van het landgoed geregeld worden. Verder beschikt het hotel over gratis Wi-fi.',
    'accommodation.bergse.full': 'Midden in Nationaal Park Utrechtse Heuvelrug staat Hotel Bergse Bossen. Centraal gelegen, goed bereikbaar en omringd door prachtige natuur. Je kunt bij Hotel Bergse Bossen overnachten in één van de 65 comfortabele hotelkamers. Alle kamers kijken uit op het omliggende groen en het hele hotel is gelijkvloers. De kamers beschikken over douche en toilet, televisie, radio, telefoon en een kluisje. Kamerprijzen vanaf €50,- per persoon inclusief ontbijt. Je kunt kiezen voor een één- of tweepersoonskamer, maar ze hebben ook een bruidskamer, driepersoonskamers, mindervalidenkamers en hotelbungalows. Voor het boeken van een kamer kun je contact opnemen via banqueting@bergsebossen.nl. Wanneer je bij ons op de trouwlocatie gaat trouwen, kunnen wij een kortingscode aanbieden waarmee jullie en jullie gasten 10% korting krijgen op een hotelovernachting, exclusief citytax. Laat het ons weten wanneer je wilt boeken, dan sturen wij de kortingscode naar je toe.',
    'accommodation.passage.full': 'B&B Passage | 3 kamers | Op loopafstand van Buitenplaats Sparrendaal treft u tevens B&B Passage met 3 kamers.',
    'accommodation.nearby.h': 'In de omgeving', 'accommodation.jans': 'Bed & breakfast in Langbroek, op ongeveer een kwartier rijden van de locatie.', 'accommodation.valk': 'Groter hotel in Veenendaal met kamers en wellness- en fitnessfaciliteiten.', 'accommodation.overberg': 'Viersterrenhotel in Overberg, aan de rand van Nationaal Park Utrechtse Heuvelrug.',
    'accommodation.amerongen.h': 'Amerongen', 'accommodation.gasthuys': 'Bed & breakfast met vier kamers in een gerestaureerde boerderij, inclusief ontbijt.', 'accommodation.buitenlust': 'Restaurant met vijf hotelkamers in Amerongen.', 'accommodation.napoleonschuur': 'Vijf designkamers in een gerestaureerd historisch pand in Amerongen.',
    'accommodation.wijk.h': 'Wijk bij Duurstede', 'accommodation.dijklodges': 'Vijf lodges op een historisch boerderijterrein, op ongeveer tien minuten rijden van de locatie.',
    'accommodation.smallbnb.h': 'Andere kleine B&Bs in Amerongen', 'accommodation.bestegoed': 'Bed & breakfast met een kamer in Amerongen.', 'accommodation.overtuin': 'Bed & breakfast met een kamer in Amerongen. Telefoon: 0343 454 989.', 'accommodation.bb23': 'Bed & breakfast met twee kamers in Amerongen. Telefoon: 0343 451 692.', 'accommodation.back': 'Terug naar site',
    'location.directions_btn': 'Routebeschrijving openen',
    // RSVP
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Kom je ook?',
    'rsvp.lead': 'We kijken ernaar uit om dit samen met jou te vieren! Laat ons weten of je erbij kunt zijn.',
    'rsvp.invitation_note': 'We kunnen alleen de gasten ontvangen die op je uitnodiging staan.',
    'rsvp.deadline': 'Reageer voor:', 'rsvp.deadline_date': '31 maart 2027', 'rsvp.load': 'Toon RSVP-formulier', 'rsvp.btn': 'Open RSVP-formulier',
    'rsvp.privacy': 'Je RSVP-gegevens worden uitsluitend gebruikt voor de organisatie van ons huwelijk en relevante communicatie.',
    // Dress Code
    'dresscode.label': 'Dresscode', 'dresscode.h2': 'Wat te dragen',
    'dresscode.theme': 'Cocktail Attire',
    'dresscode.lead.invitation': 'We vinden het leuk als onze gasten deze bijzondere dag met ons vieren in cocktail attire.',
    'dresscode.lead.description': 'Feestelijk en verzorgd, precies tussen casual en formeel in.',
    'dresscode.style.h': 'Stijl', 'dresscode.style.text': 'Kies een nette midi-, thee- of knielange jurk, een chic pak of een verzorgde jumpsuit.', 'dresscode.colours.h': 'Kleur en materiaal', 'dresscode.colours.text': 'Zomerse kleuren en luchtige stoffen zijn welkom. Nette schoenen en een verzorgde afwerking passen perfect bij de gelegenheid.', 'dresscode.practical.h': 'Praktische opmerkingen',
    'dresscode.guide.link': 'Bekijk de dresscode-gids', 'dresscode.back': 'Terug naar site', 'dresscode.guide.label': 'Dresscode', 'dresscode.guide.title': 'Dresscode', 'dresscode.guide.theme': 'Dresscode: Cocktail Attire', 'dresscode.guide.h1': 'Dresscode: Cocktail Attire', 'dresscode.guide.lead': 'We kijken ernaar uit om samen met jullie te vieren. Hieronder vind je een kleine richtlijn, zodat iedereen zich prettig en passend voelt.', 'dresscode.guide.intro.h': 'Een kleine richtlijn voor onze dag',
    'dresscode.guide.intro.p1': 'Voor de dresscode hebben we gekozen voor cocktail attire. Met deze dresscode zoeken we de mooie balans tussen feestelijk en verzorgd. Een outfit met iets extra’s mag, zolang je je er prettig in voelt.', 'dresscode.guide.intro.p2': 'Zie het als een stijlvolle middenweg: eleganter dan casual, maar niet formeel als black tie.', 'dresscode.guide.intro.p3': 'Kies vooral iets dat bij jou past, waarin je vrij kunt bewegen en de hele dag en avond kunt meevieren.',
    'dresscode.guide.women.h': 'Voor dames', 'dresscode.guide.women.p1': 'Kies voor een feestelijke en elegante outfit. Een cocktailjurk is natuurlijk een uitstekende keuze, maar een stijlvolle jumpsuit of een chic broekpak past net zo goed binnen de dresscode.',
    'dresscode.guide.women.p2': 'Je mag best wat kleur, glans of opvallende accessoires dragen. Het draait om een verzorgde uitstraling die past bij een feestelijke bruiloft.',
    'dresscode.guide.women.short.h': 'Snelle check', 'dresscode.guide.women.short.1': 'Feestelijke jurk, jumpsuit of chic broekpak', 'dresscode.guide.women.short.2': 'Knie-, midi- of vergelijkbare lengte', 'dresscode.guide.women.short.3': 'Elegante schoenen zoals hakken, sandalen of nette ballerina\'s', 'dresscode.guide.women.short.4': 'Mooie accessoires en sieraden',
    'dresscode.guide.men.h': 'Voor heren', 'dresscode.guide.men.p1': 'Een goed passend pak is altijd een veilige keuze. Heb je geen volledig pak, dan kan een nette combinatie van pantalon, overhemd en colbert ook uitstekend werken.',
    'dresscode.guide.men.p2': 'Kleur mag zeker. Een mooi blauw, groen, bruin of ander stijlvol pak past perfect bij deze dresscode.',
    'dresscode.guide.men.short.h': 'Snelle check', 'dresscode.guide.men.short.1': 'Pak of nette pantalon met overhemd', 'dresscode.guide.men.short.2': 'Colbert is sterk aanbevolen', 'dresscode.guide.men.short.3': 'Nette leren schoenen of loafers', 'dresscode.guide.men.short.4': 'Een stropdas, strik of pochet hoeft niet',
    'dresscode.guide.dos.h': 'Praktische do\'s & don\'ts', 'dresscode.guide.dos.women.h': 'Voor vrouwen', 'dresscode.guide.dos.men.h': 'Voor mannen', 'dresscode.guide.dos.do': 'Do\'s', 'dresscode.guide.dos.dont': 'Don\'ts',
    'dresscode.guide.dos.women.do.1': 'Kies een feestelijke, verzorgde outfit', 'dresscode.guide.dos.women.do.2': 'Ga voor een jurk, jumpsuit of net pak', 'dresscode.guide.dos.women.do.3': 'Draag schoenen waarop je de dag volhoudt',
    'dresscode.guide.dos.women.dont.1': 'Vermijd heel casual kleding zoals denim of sportwear', 'dresscode.guide.dos.women.dont.2': 'Laat strandkleding en slippers thuis', 'dresscode.guide.dos.women.dont.3': 'Kies liever niet voor een te formele gala-look',
    'dresscode.guide.dos.men.do.1': 'Kies een pak of nette combinatie', 'dresscode.guide.dos.men.do.2': 'Draag nette schoenen', 'dresscode.guide.dos.men.do.3': 'Voeg gerust een persoonlijk detail toe', 'dresscode.guide.dos.men.do.4': 'Houd het geheel verzorgd en feestelijk',
    'dresscode.guide.dos.men.dont.1': 'Vermijd sneakers, slippers en sportkleding', 'dresscode.guide.dos.men.dont.2': 'Vermijd jeans en polo\'s', 'dresscode.guide.dos.men.dont.3': 'Ga niet voor een te casual look',
    'dresscode.colors.label': 'Kleuradvies', 'dresscode.colors.h': 'Kleuradvies', 'dresscode.colors.intro': 'Deze suggesties gelden voor iedereen, welke outfit je ook kiest.', 'dresscode.colors.approved.h': 'Kleuren die we mooi vinden', 'dresscode.colors.approved.1': 'Poederblauw en zacht hemelsblauw', 'dresscode.colors.approved.2': 'Saliegroen en olijfgroen', 'dresscode.colors.approved.3': 'Blush en vergrijsd roze', 'dresscode.colors.approved.4': 'Lavendel en zacht lila', 'dresscode.colors.approved.5': 'Gedempt geel en warm terracotta', 'dresscode.colors.avoid.h': 'Kleuren die je beter kunt vermijden', 'dresscode.colors.avoid.1': 'Wit en bruidswit', 'dresscode.colors.avoid.2': 'Ivoor, crème en champagne', 'dresscode.colors.avoid.3': 'Bruidsmetallics zoals helder zilver', 'dresscode.colors.avoid.4': 'Neonkleuren die veel aandacht trekken', 'dresscode.colors.avoid.5': 'Felrood en helderrode tinten',
    'dresscode.colors.avoid.6': 'Zwart', 'dresscode.colors.avoid.7': 'Donkerblauw en marineblauw',
    'dresscode.selector.label': 'Bekijk dresscode voor', 'dresscode.selector.her': 'Haar', 'dresscode.selector.him': 'Hem',
    'dresscode.image.women.alt': 'Voorbeeld cocktailoutfit voor dames', 'dresscode.image.women.caption': 'Afbeelding ter inspiratie.', 'dresscode.image.men.alt': 'Voorbeeld cocktailoutfit voor heren', 'dresscode.image.men.caption': 'Afbeelding ter inspiratie.',
    'dresscode.placeholder.women.label': 'Voorbeeldafbeelding dames outfit', 'dresscode.placeholder.men.label': 'Voorbeeldafbeelding heren outfit', 'dresscode.placeholder.dev': 'Placeholder: hier kun je later een eigen afbeelding of component inladen.',
    // Gifts
    'gifts.label': 'Cadeaus', 'gifts.h2': 'Cadeaus',
    'gifts.lead': 'Jouw aanwezigheid is het mooiste cadeau. Als je toch iets wilt geven, lees dan gerust verder.',
    'gifts.honeymoon.h': 'Bijdrage aan huwelijksreis',
    'gifts.honeymoon.text': 'Willen jullie ons iets geven? Een bijdrage aan onze huwelijksreis is van harte welkom en helpt ons om samen nieuwe herinneringen te maken.',
    'gifts.wishlist.h': 'Verlanglijst', 'gifts.wishlist.text': 'Weten jullie iets waarvan jullie zeker weten dat het bij ons past? Dan zijn we natuurlijk blij met een persoonlijk cadeau. Anders is een bijdrage aan onze huwelijksreis altijd een fijne keuze.',
    // Ceremony Masters
    'ceremony.label': 'Ceremoniemeesters', 'ceremony.h2': 'Ontmoet onze ceremoniemeesters',
    'ceremony.lead': 'Onze ceremoniemeesters begeleiden de dag en beantwoorden praktische vragen.',
    'ceremony.contact_note_intro': 'De contactgegevens van Bas en Suzan hebben we met de uitnodiging gedeeld. Heb je ze nog een keer nodig?',
    'ceremony.contact_note_followup': 'Laat het Mariëlle of Jérémy gerust weten, dan delen we ze graag opnieuw.',
    'ceremony.bas.photo': 'Foto van Bas',
    'ceremony.suzan.photo': 'Foto van Suzan',
    // Footer
    'footer.thanks': 'Dank je wel dat je dit met ons viert.',
    'footer.nav.home': 'Home', 'footer.nav.rsvp': 'RSVP',
    'footer.backtop': 'Terug naar boven \u2191',
    'footer.privacy': 'Deze site gebruikt geen analytics of tracking. RSVP-gegevens worden verwerkt via Microsoft Forms.',
    'lang.label': 'Taal',
  },

  en: {
    'nav.home': 'Home', 'nav.more': 'More', 'nav.story': 'Our story', 'nav.journey': 'Our journey',
    'nav.proposal': 'The proposal', 'nav.wedding': 'Wedding day', 'nav.location': 'Location',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Dress code', 'nav.gifts': 'Gifts', 'nav.accommodation': 'Accommodation',
    'nav.ceremony': 'Ceremony masters',
    'invite.label': 'Save the Date',
    'invite.message': 'Dear {name}, with so much love, we invite you to celebrate our wedding day with us. We cannot wait to toast, laugh, and create memories to carry with us forever.',
    'hero.sub': 'From Kerlingarfj\u00f6ll to forever',
    'hero.date': '26 May 2027',
    'hero.countdown_prefix': "Counting down to the moment we say \u2018I do\u2019.",
    'hero.countdown_today': 'Today is the day!',
    'hero.days': 'Days', 'hero.hours': 'Hours', 'hero.minutes': 'Minutes', 'hero.seconds': 'Seconds',
    'hero.btn_rsvp': 'RSVP', 'hero.btn_day': 'View the Day',
    'save_date.more_info': 'More information will follow.',
    'coord.label': 'Iceland', 'coord.h2': 'Coordinates of Our Story',
    'coord.location_label': 'Proposal Location',
    'coord.tagline': 'Where adventure became forever.',
    'coord.btn': 'Read Our Story',
    'story.label': 'Our Story', 'story.h2': 'Our Story',
    'story.h3_met': 'How We Met',
    'story.p_met': 'Add the story of how Mari\u00eblle and J\u00e9r\u00e9my met here.',
    'story.h3_adventure': 'Finding Adventure Together',
    'story.p_adventure': 'Add a favourite shared memory or adventure here.',
    'story.h3_chapter': 'The Next Chapter',
    'story.p_chapter': 'Add a short introduction to the wedding celebration here.',
    'journey.label': 'Our Journey', 'journey.h2': 'Our Journey to Kerlingarfj\u00f6ll',
    'journey.intro': 'Every adventure brought us a little closer to this day.',
    'journey.item1.title': 'First Meeting', 'journey.item2.title': 'First Date',
    'journey.item3.title': 'Falling in Love', 'journey.item4.title': 'First Big Adventure',
    'journey.item5.title': 'Building a Life Together', 'journey.item6.title': 'Iceland Adventure',
    'journey.item7.title': 'Kerlingarfj\u00f6ll', 'journey.item7.label': 'The Proposal', 'journey.item7.date': '15 September 2025',
    'journey.item7.text': "High in the mountains of Kerlingarfj\u00f6ll, surrounded by Iceland\u2019s breathtaking landscape, our next chapter began.",
    'journey.item8.title': 'Engagement', 'journey.item9.title': 'Wedding Day',
    'journey.item9.text': 'We cannot wait to celebrate this next chapter with our family and friends.',
    'journey.continues': 'The journey continues\u2026', 'journey.btn': 'Read the Proposal Story',
    'proposal.label': 'The Proposal', 'proposal.h2': 'The Proposal at Kerlingarfj\u00f6ll',
    'proposal.h3_journey': 'The Journey There', 'proposal.h3_moment': 'The Moment', 'proposal.h3_answer': 'The Answer',
    'proposal.location_caption': 'Kerlingarfjöll, Iceland · 64°38\'41.8"N 19°17\'14.9"W',
    'wind.label': 'A little Icelandic wind', 'wind.h2': 'Call up the wind',
    'wind.lead.instruction': 'Blow into your microphone and make the wind rise.',
    'wind.lead.challenge': 'Can you take the wind strength all the way to the top?',
    'wind.start': 'Use microphone', 'wind.fallback': 'Hold for wind',
    'wind.status_ready': 'Ready for a fresh breeze?', 'wind.status_listening': 'We are listening. Give us your best gust!',
    'wind.status_success': 'Wind strength reached. Look what happens!', 'wind.status_unavailable': 'The microphone is unavailable. Call up the wind with the button.',
    'wedding.label': 'The Big Day', 'wedding.h2': 'The Wedding Day',
    'wedding.date': 'Wednesday, 26 May 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Guest Arrival & Welcome', 'wedding.arr.note': 'Take your time arriving and greeting one another.',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'Wedding Ceremony', 'wedding.cer.note': 'Our moment to say yes.',
    'wedding.cake.time': '15:45', 'wedding.cake.desc': 'Toast, cake, congratulations & drinks', 'wedding.cake.note': 'From the toast onward, beer, wine and soft drinks are unlimited.',
    'wedding.drinks.note': 'Drinks are available from this point onward.',
    'wedding.dinner.time': '17:30', 'wedding.dinner.desc': 'Dinner', 'wedding.dinner.note': 'Time to sit together, enjoy good food and share lovely conversations.',
    'wedding.speeches.time': 'During dinner', 'wedding.speeches.desc': 'Speeches', 'wedding.speeches.note': 'A few words from the heart, shared between courses.',
    'wedding.party.time': '20:00', 'wedding.party.desc': 'Party', 'wedding.party.note': 'Then the music starts and we celebrate together into the night.',
    'wedding.end.time': '00:30', 'wedding.end.desc': 'End of the evening', 'wedding.end.note': 'Thank you for celebrating this special day with us.',
    'wedding.end.irish_exit': 'An Irish exit is welcome: when you’re ready to head home, feel free to slip away quietly without a round of goodbyes. No need to come and find us first.',
    'wedding.note': 'We are inviting exactly the people named on their personal invitation.',
    'wedding.photo_note.ceremony': 'We have a professional photographer during the ceremony, so please put your phones away.',
    'wedding.photo_note.outside': 'Outside the ceremony, feel free to take photos and videos. If you film, please hold your phone horizontally. Above all, be present in the moment with us.',
    'location.label': 'Venue', 'location.h2': 'Getting There',
    'location.description': 'An atmospheric country house with classic rooms and a beautiful park garden in the Utrechtse Heuvelrug.',
    'location.travel.h': 'Travel', 'location.travel.text': 'Travel to Driebergen-Zeist station. From there, walk or take a bus. Check the current route shortly before you leave.',
    'location.parking.h': 'Parking', 'location.parking.text': 'The parking area is close to the venue, just around the corner. From there, a separate entrance leads to Buitenplaats Sparrendaal.', 'location.parking.link': 'Open parking route',
    'location.accom.h': 'Accommodation', 'location.accom.text': 'Guests arrange and book their own accommodation.', 'location.accom.link': 'View accommodation options',
    'location.taxi.h': 'Taxi & Transport', 'location.taxi.intro': 'Here are several local taxi options.',
    'accommodation.label': 'Accommodation', 'accommodation.h3': 'Accommodation options nearby', 'accommodation.lead': 'Guests arrange and book their own accommodation. Here are several options.', 'accommodation.disclaimer': 'These are suggestions from the wedding venue. We are not affiliated with these locations and have no personal experience with them.',
    'accommodation.driebergen.h': 'Driebergen-Rijsenburg', 'accommodation.horst': 'Hotel in Driebergen-Rijsenburg, with parking and breakfast options.', 'accommodation.bergse': 'Hotel on the edge of Utrechtse Heuvelrug National Park with several room types.', 'accommodation.passage': 'Small bed and breakfast in Driebergen-Rijsenburg, within walking distance of Buitenplaats Sparrendaal.',
    'accommodation.horst.one': 'Stay at Landgoed de Horst in Driebergen after the wedding celebration at Buitenplaats Sparrendaal. Wake the next morning among the treetops, with birdsong all around, and start the day with an extensive breakfast buffet. Rates start at EUR 90 per night including breakfast, excluding tourist tax.',
    'accommodation.horst.two': 'Landgoed de Horst is conveniently located and offers free parking. A taxi can be arranged through the hotel reception, and the hotel also provides free Wi-Fi.',
    'accommodation.bergse.full': 'Hotel Bergse Bossen is located in Utrechtse Heuvelrug National Park, with 65 comfortable rooms overlooking the surrounding greenery. The hotel is fully on one level and offers a range of room types, including accessible rooms, family rooms and hotel bungalows. Rates start at EUR 50 per person including breakfast. For bookings, contact banqueting@bergsebossen.nl. A 10% accommodation discount code may be available for wedding guests, excluding city tax; contact us when you would like to book so we can send it to you.',
    'accommodation.passage.full': 'B&B Passage | 3 rooms | B&B Passage is within walking distance of Buitenplaats Sparrendaal and has three rooms.',
    'accommodation.nearby.h': 'In the area', 'accommodation.jans': 'Bed and breakfast in Langbroek, about a 15-minute drive from the venue.', 'accommodation.valk': 'Larger hotel in Veenendaal with rooms, wellness and fitness facilities.', 'accommodation.overberg': 'Four-star hotel in Overberg on the edge of Utrechtse Heuvelrug National Park.',
    'accommodation.amerongen.h': 'Amerongen', 'accommodation.gasthuys': 'Four-room bed and breakfast in a restored farmhouse, with breakfast included.', 'accommodation.buitenlust': 'Restaurant with five hotel rooms in Amerongen.', 'accommodation.napoleonschuur': 'Five design rooms in a restored historic building in Amerongen.',
    'accommodation.wijk.h': 'Wijk bij Duurstede', 'accommodation.dijklodges': 'Five lodges on a historic farm site, approximately a 10-minute drive from the venue.',
    'accommodation.smallbnb.h': 'Other small B&Bs in Amerongen', 'accommodation.bestegoed': 'One-room bed and breakfast in Amerongen.', 'accommodation.overtuin': 'One-room bed and breakfast in Amerongen. Telephone: 0343 454 989.', 'accommodation.bb23': 'Two-room bed and breakfast in Amerongen. Telephone: 0343 451 692.', 'accommodation.back': 'Back to site',
    'location.directions_btn': 'Open Directions',
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Will You Join Us?',
    'rsvp.lead': 'We’re excited to celebrate with you! Please let us know whether you can attend.',
    'rsvp.invitation_note': 'We’re only able to accommodate the guests named on your invitation.',
    'rsvp.deadline': 'Please respond before:', 'rsvp.deadline_date': '31 March 2027', 'rsvp.load': 'Show RSVP Form', 'rsvp.btn': 'Open RSVP Form',
    'rsvp.privacy': 'Your RSVP details will only be used to organize our wedding and communicate relevant wedding information.',
    'dresscode.label': 'Dress Code', 'dresscode.h2': 'What to Wear',
    'dresscode.theme': 'Cocktail Attire',
    'dresscode.lead.invitation': 'We’d love for our guests to embrace the occasion in cocktail attire.',
    'dresscode.lead.description': 'Polished and festive, right between casual and formal.',
    'dresscode.style.h': 'Style', 'dresscode.style.text': 'Choose a polished midi, tea-length or knee-length dress, a chic suit, or a tailored jumpsuit.', 'dresscode.colours.h': 'Colour and fabric', 'dresscode.colours.text': 'Summer colours and lightweight fabrics are welcome. Polished shoes and thoughtful finishing touches are perfect for the occasion.', 'dresscode.practical.h': 'Practical Notes',
    'dresscode.guide.link': 'View the dress code guide', 'dresscode.back': 'Back to site', 'dresscode.guide.label': 'Dress Code', 'dresscode.guide.title': 'Dress Code', 'dresscode.guide.theme': 'Dress code: Cocktail Attire', 'dresscode.guide.h1': 'Dress code: Cocktail Attire', 'dresscode.guide.lead': 'We are so happy to celebrate with you. Here is a small guideline so everyone feels comfortable and in tune with the day.', 'dresscode.guide.intro.h': 'A gentle guideline for our day',
    'dresscode.guide.intro.p1': 'For the dress code, we have chosen cocktail attire. With this dress code, we are looking for a lovely balance between festive and polished. An outfit with a little something extra is welcome, as long as you feel comfortable in it.', 'dresscode.guide.intro.p2': 'Think of it as a stylish middle ground: dressier than casual, but not as formal as black tie.', 'dresscode.guide.intro.p3': 'Choose something that feels like you, lets you move freely, and carries you through the whole day and evening.',
    'dresscode.guide.women.h': 'For women', 'dresscode.guide.women.p1': 'Choose a festive and elegant outfit. A cocktail dress is of course an excellent choice, but a stylish jumpsuit or chic trouser suit fits the dress code just as well.',
    'dresscode.guide.women.p2': 'Feel free to wear some colour, shine, or eye-catching accessories. The aim is a polished look that suits a festive wedding.',
    'dresscode.guide.women.short.h': 'Quick check', 'dresscode.guide.women.short.1': 'Festive dress, jumpsuit, or chic trouser suit', 'dresscode.guide.women.short.2': 'Knee-length, midi, or a similar length', 'dresscode.guide.women.short.3': 'Elegant shoes such as heels, sandals, or neat ballet flats', 'dresscode.guide.women.short.4': 'Beautiful accessories and jewellery',
    'dresscode.guide.men.h': 'For men', 'dresscode.guide.men.p1': 'A well-fitting suit is always a safe choice. If you do not have a full suit, a polished combination of tailored trousers, a shirt, and a blazer works beautifully too.',
    'dresscode.guide.men.p2': 'Colour is very welcome. A stylish suit in blue, green, brown, or another refined shade fits this dress code perfectly.',
    'dresscode.guide.men.short.h': 'Quick check', 'dresscode.guide.men.short.1': 'Suit or tailored trousers with a shirt', 'dresscode.guide.men.short.2': 'A blazer is strongly recommended', 'dresscode.guide.men.short.3': 'Neat leather shoes or loafers', 'dresscode.guide.men.short.4': 'A tie, bow tie, or pocket square is optional',
    'dresscode.guide.dos.h': 'Practical do\'s & don\'ts', 'dresscode.guide.dos.women.h': 'For women', 'dresscode.guide.dos.men.h': 'For men', 'dresscode.guide.dos.do': 'Do\'s', 'dresscode.guide.dos.dont': 'Don\'ts',
    'dresscode.guide.dos.women.do.1': 'Choose a festive, polished outfit', 'dresscode.guide.dos.women.do.2': 'Go for a dress, jumpsuit, or neat suit', 'dresscode.guide.dos.women.do.3': 'Wear shoes you can enjoy the day in',
    'dresscode.guide.dos.women.dont.1': 'Avoid very casual pieces like denim or sportswear', 'dresscode.guide.dos.women.dont.2': 'Leave beachwear and flip-flops at home', 'dresscode.guide.dos.women.dont.3': 'Prefer not to go for a very formal gala look',
    'dresscode.guide.dos.men.do.1': 'Choose a suit or polished combination', 'dresscode.guide.dos.men.do.2': 'Wear neat shoes', 'dresscode.guide.dos.men.do.3': 'Feel free to add a personal detail', 'dresscode.guide.dos.men.do.4': 'Keep the overall look polished and festive',
    'dresscode.guide.dos.men.dont.1': 'Avoid sneakers, flip-flops, and sportswear', 'dresscode.guide.dos.men.dont.2': 'Avoid jeans and polos', 'dresscode.guide.dos.men.dont.3': 'Try not to go too casual',
    'dresscode.colors.label': 'Colour guide', 'dresscode.colors.h': 'Colour guide', 'dresscode.colors.intro': 'These suggestions apply to every guest, whatever you choose to wear.', 'dresscode.colors.approved.h': 'Colours we love', 'dresscode.colors.approved.1': 'Dusty blue and soft sky blue', 'dresscode.colors.approved.2': 'Sage and olive green', 'dresscode.colors.approved.3': 'Blush and dusty rose', 'dresscode.colors.approved.4': 'Lavender and soft lilac', 'dresscode.colors.approved.5': 'Muted yellow and warm terracotta', 'dresscode.colors.avoid.h': 'Colours to leave for the couple', 'dresscode.colors.avoid.1': 'White and bridal white', 'dresscode.colors.avoid.2': 'Ivory, cream, and champagne', 'dresscode.colors.avoid.3': 'Bridal metallics such as bright silver', 'dresscode.colors.avoid.4': 'Neon shades that draw focus', 'dresscode.colors.avoid.5': 'Bright red and vivid crimson',
    'dresscode.colors.avoid.6': 'Black', 'dresscode.colors.avoid.7': 'Dark blue and navy blue',
    'dresscode.selector.label': 'View dress code for', 'dresscode.selector.her': 'Her', 'dresscode.selector.him': 'Him',
    'dresscode.image.women.alt': 'Example cocktail outfit for her', 'dresscode.image.women.caption': 'Image for inspiration.', 'dresscode.image.men.alt': 'Example cocktail outfit for him', 'dresscode.image.men.caption': 'Image for inspiration.',
    'dresscode.placeholder.women.label': 'Example image placeholder: women\'s outfit', 'dresscode.placeholder.men.label': 'Example image placeholder: men\'s outfit', 'dresscode.placeholder.dev': 'Placeholder: you can load your own image or component here later.',
    'gifts.label': 'Gifts', 'gifts.h2': 'Gifts',
    'gifts.lead': 'Your presence is the greatest gift. If you would still like to give something.',
    'gifts.honeymoon.h': 'Honeymoon Contribution',
    'gifts.honeymoon.text': 'If you would like to give us something, a contribution towards our honeymoon would be warmly welcomed and will help us create new memories together.',
    'gifts.wishlist.h': 'Wishlist', 'gifts.wishlist.text': 'If you know of something you are sure would suit us, a personal gift is always lovely. Otherwise, a contribution towards our honeymoon is a wonderful choice.',
    'ceremony.label': 'Ceremony Masters', 'ceremony.h2': 'Meet Our Ceremony Masters',
    'ceremony.lead': 'Our ceremony masters will help guide the day and answer practical questions.',
    'ceremony.contact_note_intro': 'We shared Bas and Suzan’s contact details with the invitation. Need them again?',
    'ceremony.contact_note_followup': 'Just ask Mariëlle or Jérémy and we’ll be happy to share them with you.',
    'ceremony.bas.photo': 'Photo of Bas',
    'ceremony.suzan.photo': 'Photo of Suzan',
    'footer.thanks': 'Thank you for celebrating with us.',
    'footer.nav.home': 'Home', 'footer.nav.rsvp': 'RSVP',
    'footer.backtop': 'Back to top \u2191',
    'footer.privacy': 'This site does not use analytics or tracking. RSVP data is processed only via Microsoft Forms.',
    'lang.label': 'Language',
  },

  fr: {
    'nav.home': 'Accueil', 'nav.more': 'Plus', 'nav.story': 'Notre histoire', 'nav.journey': 'Notre voyage',
    'nav.proposal': 'La demande', 'nav.wedding': 'Le mariage', 'nav.location': 'Lieu',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Tenue', 'nav.gifts': 'Cadeaux', 'nav.accommodation': 'Hébergement',
    'nav.ceremony': 'Ma\u00eetres de C\u00e9r\u00e9monie',
    'invite.label': 'Réservez la date',
    'invite.message': 'Cher/Chère {name}, c’est avec beaucoup d’amour que nous vous invitons à célébrer notre mariage avec nous. Nous avons hâte de trinquer, de rire et de créer ensemble des souvenirs pour toujours.',
    'hero.sub': "De Kerlingarfj\u00f6ll \u00e0 l\u2019\u00e9ternit\u00e9",
    'hero.date': '26 mai 2027',
    'hero.countdown_prefix': "D\u00e9compte jusqu\u2019au moment o\u00f9 nous disons \u2018oui\u2019.",
    'hero.countdown_today': 'C\u2019est le grand jour\u00a0!',
    'hero.days': 'Jours', 'hero.hours': 'Heures', 'hero.minutes': 'Minutes', 'hero.seconds': 'Secondes',
    'hero.btn_rsvp': 'RSVP', 'hero.btn_day': 'Le programme',
    'save_date.more_info': 'Plus d’informations suivront.',
    'coord.label': 'Islande', 'coord.h2': 'Les coordonn\u00e9es de notre histoire',
    'coord.location_label': 'Lieu de la demande',
    'coord.tagline': "L\u00e0 o\u00f9 l\u2019aventure est devenue \u00e9ternelle.",
    'coord.btn': 'Lire notre histoire',
    'story.label': 'Notre Histoire', 'story.h2': 'Notre Histoire',
    'story.h3_met': 'Notre rencontre',
    'story.p_met': "Ajoutez ici l\u2019histoire de la rencontre de Mari\u00eblle et J\u00e9r\u00e9my.",
    'story.h3_adventure': "L\u2019aventure ensemble",
    'story.p_adventure': 'Ajoutez ici un souvenir ou une aventure partag\u00e9e.',
    'story.h3_chapter': 'Le prochain chapitre',
    'story.p_chapter': "Ajoutez ici une courte introduction \u00e0 la c\u00e9l\u00e9bration du mariage.",
    'journey.label': 'Notre Voyage', 'journey.h2': 'Notre voyage vers Kerlingarfj\u00f6ll',
    'journey.intro': 'Chaque aventure nous a rapproch\u00e9s un peu plus de ce jour.',
    'journey.item1.title': 'Premi\u00e8re rencontre', 'journey.item2.title': 'Premier rendez-vous',
    'journey.item3.title': 'Tomber amoureux', 'journey.item4.title': 'Premi\u00e8re grande aventure',
    'journey.item5.title': 'Construire une vie ensemble', 'journey.item6.title': 'Aventure en Islande',
    'journey.item7.title': 'Kerlingarfj\u00f6ll', 'journey.item7.label': 'La Demande', 'journey.item7.date': '15 septembre 2025',
    'journey.item7.text': "Haut dans les montagnes de Kerlingarfj\u00f6ll, entour\u00e9s du paysage \u00e0 couper le souffle de l\u2019Islande, notre prochain chapitre a commenc\u00e9.",
    'journey.item8.title': 'Fian\u00e7ailles', 'journey.item9.title': 'Jour du mariage',
    'journey.item9.text': 'Nous avons h\u00e2te de c\u00e9l\u00e9brer ce prochain chapitre avec notre famille et nos amis.',
    'journey.continues': 'Le voyage continue\u2026', 'journey.btn': "Lire l\u2019histoire de la demande",
    'proposal.label': 'La Demande', 'proposal.h2': 'La demande \u00e0 Kerlingarfj\u00f6ll',
    'proposal.h3_journey': 'Le voyage l\u00e0-bas', 'proposal.h3_moment': 'Le moment', 'proposal.h3_answer': 'La r\u00e9ponse',
    'proposal.location_caption': 'Kerlingarfjöll, Islande · 64°38\'41.8"N 19°17\'14.9"W',
    'wind.label': 'Un peu de vent islandais', 'wind.h2': 'Appelez le vent',
    'wind.lead.instruction': 'Soufflez dans votre microphone et faites monter le vent.',
    'wind.lead.challenge': 'Pouvez-vous pousser la force du vent jusqu’au sommet ?',
    'wind.start': 'Utiliser le microphone', 'wind.fallback': 'Maintenir pour le vent',
    'wind.status_ready': 'Prêt pour une brise fraîche ?', 'wind.status_listening': 'Nous écoutons. Soufflez !',
    'wind.status_success': 'Force du vent atteinte. Regardez ce qui se passe !', 'wind.status_unavailable': 'Le microphone est indisponible. Appelez le vent avec le bouton.',
    'wedding.label': 'Le Grand Jour', 'wedding.h2': 'Le Mariage',
    'wedding.date': 'Mercredi, 26 mai 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Accueil des invit\u00e9s', 'wedding.arr.note': 'Prenez le temps d’arriver tranquillement et de vous saluer.',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'C\u00e9r\u00e9monie de mariage', 'wedding.cer.note': 'Notre moment pour nous dire oui.',
    'wedding.cake.time': '15:45', 'wedding.cake.desc': 'Toast, g\u00e2teau, f\u00e9licitations & boissons', 'wedding.cake.note': 'D\u00e8s le toast, la bi\u00e8re, le vin et les boissons sans alcool sont \u00e0 volont\u00e9.',
    'wedding.dinner.time': '17:30', 'wedding.dinner.desc': 'D\u00eener', 'wedding.dinner.note': 'Un moment autour de la table, avec de bons plats et de belles conversations.',
    'wedding.speeches.time': 'Pendant le d\u00eener', 'wedding.speeches.desc': 'Discours', 'wedding.speeches.note': 'Quelques mots du cœur, entre les plats.',
    'wedding.party.time': '20:00', 'wedding.party.desc': 'F\u00eate', 'wedding.party.note': 'Puis la musique commence et la f\u00eate continue jusque tard dans la nuit.',
    'wedding.end.time': '00:30', 'wedding.end.desc': 'Fin de la soirée', 'wedding.end.note': 'Merci d’avoir célébré cette journée si spéciale avec nous.',
    'wedding.end.irish_exit': 'Un « Irish exit » est tout à fait bienvenu : quand vous souhaitez rentrer, n’hésitez pas à partir discrètement, sans faire la tournée des au revoir. Pas besoin de venir nous chercher avant de partir.',
    'wedding.note': 'Nous invitons exactement les personnes indiquées sur leur invitation personnelle.',
    'wedding.photo_note.ceremony': 'Un photographe professionnel sera pr\u00e9sent pendant la c\u00e9r\u00e9monie\u00a0: merci de ranger vos t\u00e9l\u00e9phones.',
    'wedding.photo_note.outside': 'En dehors de la c\u00e9r\u00e9monie, vous pouvez prendre des photos et des vid\u00e9os. Si vous filmez, tenez votre t\u00e9l\u00e9phone horizontalement. Et surtout, profitez de ce moment avec nous.',
    'location.label': 'Lieu', 'location.h2': 'Comment venir',
    'location.travel.h': 'Transport', 'location.parking.h': 'Parking',
    'location.accom.h': 'H\u00e9bergement', 'location.taxi.h': 'Taxi & transport',
    'location.directions_btn': "Ouvrir l\u2019itin\u00e9raire",
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Serez-vous des n\u00f4tres\u00a0?',
    'rsvp.lead': 'Nous avons hâte de célébrer ce moment avec vous ! Faites-nous savoir si vous serez des nôtres.',
    'rsvp.invitation_note': 'Nous pouvons uniquement accueillir les personnes nommées sur votre invitation.',
    'rsvp.deadline': 'Merci de r\u00e9pondre avant le\u00a0:', 'rsvp.deadline_date': '31 mars 2027', 'rsvp.load': 'Afficher le formulaire RSVP', 'rsvp.btn': 'Ouvrir le formulaire RSVP',
    'rsvp.privacy': 'Vos coordonn\u00e9es RSVP ne seront utilis\u00e9es que pour organiser notre mariage et communiquer les informations pertinentes.',
    'dresscode.label': 'Code vestimentaire', 'dresscode.h2': 'Tenue vestimentaire',
    'dresscode.theme': 'Tenue cocktail',
    'dresscode.lead.invitation': 'Nous serions ravis que nos invités célèbrent cette belle occasion avec nous en tenue cocktail.',
    'dresscode.lead.description': 'Élégante et festive, entre décontracté et formel.',
    'dresscode.style.h': 'Style', 'dresscode.style.text': 'Choisissez une robe midi, longueur thé ou au genou, un costume chic ou une combinaison élégante.', 'dresscode.colours.h': 'Couleur et matière', 'dresscode.colours.text': 'Les couleurs estivales et les matières légères sont les bienvenues. Des chaussures élégantes et une finition soignée conviennent parfaitement.', 'dresscode.practical.h': 'Conseils pratiques',
    'dresscode.guide.link': 'Voir le guide vestimentaire', 'dresscode.back': 'Retour au site', 'dresscode.guide.label': 'Code vestimentaire', 'dresscode.guide.title': 'Code vestimentaire', 'dresscode.guide.theme': 'Code vestimentaire : tenue cocktail', 'dresscode.guide.h1': 'Dress code : Cocktail Attire', 'dresscode.guide.lead': 'Nous sommes ravis de celebrer avec vous. Voici un petit guide pour que chacun se sente a l\'aise et en harmonie avec la journee.', 'dresscode.guide.intro.h': 'Un guide simple pour notre journee',
    'dresscode.guide.intro.p1': 'Pour le code vestimentaire, nous avons choisi la tenue cocktail. Avec ce code vestimentaire, nous cherchons un bel équilibre entre élégance et esprit festif. Une tenue avec un petit quelque chose en plus est la bienvenue, si vous vous y sentez à l’aise.', 'dresscode.guide.intro.p2': 'Pensez à un juste milieu élégant : plus habillé que casual, sans aller jusqu’au black tie.', 'dresscode.guide.intro.p3': 'Choisissez surtout une tenue qui vous ressemble, dans laquelle vous pouvez bouger librement et profiter de toute la journée et de la soirée.',
    'dresscode.guide.women.h': 'Pour les femmes', 'dresscode.guide.women.p1': 'Choisissez une tenue festive et élégante. Une robe cocktail est bien sûr un excellent choix, mais une combinaison élégante ou un chic tailleur pantalon convient tout aussi bien au code vestimentaire.',
    'dresscode.guide.women.p2': 'N’hésitez pas à porter de la couleur, une touche de brillance ou des accessoires qui attirent le regard. L’idée est d’avoir une tenue soignée, à la hauteur d’un mariage festif.',
    'dresscode.guide.women.short.h': 'Vérification rapide', 'dresscode.guide.women.short.1': 'Robe festive, combinaison ou chic tailleur pantalon', 'dresscode.guide.women.short.2': 'Longueur au genou, midi ou similaire', 'dresscode.guide.women.short.3': 'Chaussures élégantes comme des talons, des sandales ou des ballerines soignées', 'dresscode.guide.women.short.4': 'De beaux accessoires et bijoux',
    'dresscode.guide.men.h': 'Pour les hommes', 'dresscode.guide.men.p1': 'Un costume bien coupe est toujours un choix sûr. Si vous n’avez pas de costume complet, une belle combinaison avec pantalon habillé, chemise et veste fonctionne tout aussi bien.',
    'dresscode.guide.men.p2': 'La couleur est la bienvenue. Un costume élégant bleu, vert, marron ou dans une autre teinte raffinée convient parfaitement à ce code vestimentaire.',
    'dresscode.guide.men.short.h': 'Vérification rapide', 'dresscode.guide.men.short.1': 'Costume ou pantalon habillé avec chemise', 'dresscode.guide.men.short.2': 'La veste est vivement recommandée', 'dresscode.guide.men.short.3': 'Chaussures en cuir soignées ou mocassins', 'dresscode.guide.men.short.4': 'Cravate, nœud papillon ou pochette facultatif',
    'dresscode.guide.dos.h': 'Do\'s & don\'ts pratiques', 'dresscode.guide.dos.women.h': 'Pour les femmes', 'dresscode.guide.dos.men.h': 'Pour les hommes', 'dresscode.guide.dos.do': 'Do\'s', 'dresscode.guide.dos.dont': 'Don\'ts',
    'dresscode.guide.dos.women.do.1': 'Choisissez une tenue festive et soignee', 'dresscode.guide.dos.women.do.2': 'Optez pour robe, combinaison ou tailleur', 'dresscode.guide.dos.women.do.3': 'Portez des chaussures confortables pour la journee',
    'dresscode.guide.dos.women.dont.1': 'Evitez les pieces tres casual comme le denim ou le sportswear', 'dresscode.guide.dos.women.dont.2': 'Laissez les tenues de plage et les tongs a la maison', 'dresscode.guide.dos.women.dont.3': 'Evitez un look trop gala ou trop formel',
    'dresscode.guide.dos.men.do.1': 'Choisissez un costume ou une combinaison habillee', 'dresscode.guide.dos.men.do.2': 'Portez des chaussures soignees', 'dresscode.guide.dos.men.do.3': 'Ajoutez volontiers un detail personnel', 'dresscode.guide.dos.men.do.4': 'Gardez un ensemble soigne et festif',
    'dresscode.guide.dos.men.dont.1': 'Evitez baskets, tongs et tenues sportives', 'dresscode.guide.dos.men.dont.2': 'Evitez jeans et polos', 'dresscode.guide.dos.men.dont.3': 'Evitez une tenue trop decontractee',
    'dresscode.colors.label': 'Guide des couleurs', 'dresscode.colors.h': 'Guide des couleurs', 'dresscode.colors.intro': 'Ces suggestions s’appliquent à tous les invités, quelle que soit la tenue choisie.', 'dresscode.colors.approved.h': 'Les couleurs que nous aimons', 'dresscode.colors.approved.1': 'Bleu poudré et bleu ciel doux', 'dresscode.colors.approved.2': 'Vert sauge et vert olive', 'dresscode.colors.approved.3': 'Rose poudré et vieux rose', 'dresscode.colors.approved.4': 'Lavande et lilas doux', 'dresscode.colors.approved.5': 'Jaune doux et terracotta chaleureux', 'dresscode.colors.avoid.h': 'Les couleurs à éviter', 'dresscode.colors.avoid.1': 'Blanc et blanc de mariée', 'dresscode.colors.avoid.2': 'Ivoire, crème et champagne', 'dresscode.colors.avoid.3': 'Les tons métallisés très nuptiaux, comme l’argent vif', 'dresscode.colors.avoid.4': 'Les couleurs fluo qui attirent beaucoup l’attention', 'dresscode.colors.avoid.5': 'Rouge vif et cramoisi éclatant',
    'dresscode.colors.avoid.6': 'Noir', 'dresscode.colors.avoid.7': 'Bleu foncé et bleu marine',
    'dresscode.selector.label': 'Voir la tenue pour', 'dresscode.selector.her': 'Elle', 'dresscode.selector.him': 'Lui',
    'dresscode.image.women.alt': 'Exemple de tenue cocktail pour femme', 'dresscode.image.women.caption': 'Image pour vous inspirer.', 'dresscode.image.men.alt': 'Exemple de tenue cocktail pour homme', 'dresscode.image.men.caption': 'Image pour vous inspirer.',
    'dresscode.placeholder.women.label': 'Emplacement image exemple : tenue femme', 'dresscode.placeholder.men.label': 'Emplacement image exemple : tenue homme', 'dresscode.placeholder.dev': 'Placeholder : vous pourrez charger ici votre propre image ou composant plus tard.',
    'gifts.label': 'Cadeaux', 'gifts.h2': 'Cadeaux',
    'gifts.lead': 'Votre présence est le plus beau des cadeaux. Si vous souhaitez tout de même nous offrir quelque chose.',
    'gifts.honeymoon.h': 'Contribution au voyage de noces',
    'gifts.honeymoon.text': 'Si vous souhaitez nous offrir quelque chose, une contribution pour notre voyage de noces sera chaleureusement accueillie et nous aidera à créer de nouveaux souvenirs ensemble.',
    'gifts.wishlist.h': 'Liste de souhaits', 'gifts.wishlist.text': 'Si vous connaissez quelque chose qui nous correspond vraiment, un cadeau personnel nous fera plaisir. Sinon, une contribution à notre voyage de noces est une très belle idée.',
    'ceremony.label': 'Ma\u00eetres de C\u00e9r\u00e9monie', 'ceremony.h2': 'Rencontrez nos ma\u00eetres de c\u00e9r\u00e9monie',
    'ceremony.lead': 'Nos ma\u00eetres de c\u00e9r\u00e9monie guideront la journ\u00e9e et r\u00e9pondront aux questions pratiques.',
    'ceremony.contact_note_intro': 'Les coordonnées de Bas et Suzan ont été partagées avec l’invitation. Vous en avez à nouveau besoin ?',
    'ceremony.contact_note_followup': 'Demandez simplement à Mariëlle ou à Jérémy, nous vous les redonnerons avec plaisir.',
    'ceremony.bas.photo': 'Photo de Bas',
    'ceremony.suzan.photo': 'Photo de Suzan',
    'location.description': 'Une maison de campagne chaleureuse avec des salles classiques et un magnifique parc dans l\u2019Utrechtse Heuvelrug.',
    'location.travel.text': 'Rendez-vous \u00e0 la gare de Driebergen-Zeist. De l\u00e0, marchez ou prenez le bus. V\u00e9rifiez l\u2019itin\u00e9raire actuel avant votre d\u00e9part.',
    'location.parking.text': 'Le parking se trouve près du lieu, juste au coin de la rue. De là, une entrée séparée mène à Buitenplaats Sparrendaal.',
    'location.parking.link': 'Ouvrir l\u2019itin\u00e9raire du parking',
    'location.accom.text': 'Les invités organisent et réservent eux-mêmes leur hébergement.', 'location.accom.link': 'Voir les possibilités d’hébergement',
    'location.taxi.intro': 'Voici quelques options de taxis locaux.',
    'accommodation.label': 'Hébergement', 'accommodation.h3': 'Possibilités d’hébergement à proximité', 'accommodation.lead': 'Les invités organisent et réservent eux-mêmes leur hébergement. Voici quelques possibilités.', 'accommodation.disclaimer': 'Ces adresses sont des suggestions du lieu du mariage. Nous ne sommes affiliés à aucun de ces établissements et n’avons pas d’expérience personnelle avec eux.',
    'accommodation.driebergen.h': 'Driebergen-Rijsenburg', 'accommodation.horst': 'Hôtel à Driebergen-Rijsenburg, avec parking et possibilités de petit-déjeuner.', 'accommodation.bergse': 'Hôtel à la lisière du parc national Utrechtse Heuvelrug avec plusieurs types de chambres.', 'accommodation.passage': 'Petit bed and breakfast à Driebergen-Rijsenburg, à distance de marche de Buitenplaats Sparrendaal.',
    'accommodation.horst.one': 'Après la fête de mariage à Buitenplaats Sparrendaal, passez la nuit à Landgoed de Horst à Driebergen. Réveillez-vous le lendemain matin parmi les arbres, au chant des oiseaux, puis commencez la journée avec un copieux buffet de petit-déjeuner. Les tarifs commencent à 90 EUR par nuit, petit-déjeuner compris et hors taxe de séjour.',
    'accommodation.horst.two': 'Landgoed de Horst est idéalement situé et dispose d’un parking gratuit. Un taxi peut être organisé par la réception, et l’hôtel propose également le Wi-Fi gratuit.',
    'accommodation.bergse.full': 'L’Hôtel Bergse Bossen se trouve dans le parc national Utrechtse Heuvelrug et propose 65 chambres confortables donnant sur la verdure. L’hôtel est entièrement de plain-pied et offre différents types de chambres, notamment des chambres accessibles, familiales et des bungalows. Les tarifs commencent à 50 EUR par personne, petit-déjeuner compris. Pour réserver, contactez banqueting@bergsebossen.nl. Un code de réduction de 10% peut être disponible pour les invités du mariage, hors taxe de séjour ; contactez-nous lorsque vous souhaitez réserver afin que nous puissions vous l’envoyer.',
    'accommodation.passage.full': 'B&B Passage | 3 chambres | B&B Passage se trouve à distance de marche de Buitenplaats Sparrendaal et propose trois chambres.',
    'accommodation.nearby.h': 'Dans les environs', 'accommodation.jans': 'Bed and breakfast à Langbroek, à environ 15 minutes de route du lieu.', 'accommodation.valk': 'Hôtel plus grand à Veenendaal avec chambres, espace bien-être et salle de fitness.', 'accommodation.overberg': 'Hôtel quatre étoiles à Overberg, à la lisière du parc national Utrechtse Heuvelrug.',
    'accommodation.amerongen.h': 'Amerongen', 'accommodation.gasthuys': 'Bed and breakfast de quatre chambres dans une ferme restaurée, petit-déjeuner compris.', 'accommodation.buitenlust': 'Restaurant avec cinq chambres d’hôtel à Amerongen.', 'accommodation.napoleonschuur': 'Cinq chambres design dans un bâtiment historique restauré à Amerongen.',
    'accommodation.wijk.h': 'Wijk bij Duurstede', 'accommodation.dijklodges': 'Cinq lodges sur un ancien domaine agricole, à environ dix minutes de route du lieu.',
    'accommodation.smallbnb.h': 'Autres petits B&B à Amerongen', 'accommodation.bestegoed': 'Bed and breakfast avec une chambre à Amerongen.', 'accommodation.overtuin': 'Bed and breakfast avec une chambre à Amerongen. Téléphone : 0343 454 989.', 'accommodation.bb23': 'Bed and breakfast avec deux chambres à Amerongen. Téléphone : 0343 451 692.', 'accommodation.back': 'Retour au site',
    'footer.thanks': 'Merci de c\u00e9l\u00e9brer avec nous.',
    'footer.nav.home': 'Accueil', 'footer.nav.rsvp': 'RSVP',
    'footer.backtop': 'Retour en haut \u2191',
    'footer.privacy': "Ce site n\u2019utilise ni analyses ni suivi. Les donn\u00e9es RSVP sont trait\u00e9es uniquement via Microsoft Forms.",
    'lang.label': 'Langue',
  },
};

/* --------------------------------------------------------------------------
   i18n engine
   -------------------------------------------------------------------------- */
let i18nInstance = null;

const initI18n = () => {
  const SUPPORTED = ['nl', 'en', 'fr'];
  const DEFAULT = 'nl';
  const STORAGE_KEY = 'wedding-lang';

  const detect = () => {
    let stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch { /* Storage is optional. */ }
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT;
  };

  let lang = detect();
  const apply = (targetLang) => {
    const dict = { ...translations[DEFAULT], ...translations[targetLang] };

    // Text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (el.closest('[data-fluent-mounted]')) return;
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      if (el.closest('[data-fluent-mounted]')) return;
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute(el.tagName === 'IMG' ? 'alt' : 'aria-label', dict[key]);
    });

    // Update <html lang>
    document.documentElement.lang = targetLang;

  };

  const switchTo = (targetLang) => {
    if (!SUPPORTED.includes(targetLang)) return;
    lang = targetLang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* Storage is optional. */ }
    apply(lang);
    document.dispatchEvent(new CustomEvent('language-changed'));
  };

  apply(lang);

  i18nInstance = {
    get: (key) => translations[lang]?.[key] ?? translations[DEFAULT][key] ?? key,
    currentLang: () => lang,
  };
  window.weddingSite = {
    getLanguage: () => lang,
    setLanguage: switchTo,
    translate: i18nInstance.get,
  };
};

const restoreScrollPosition = (top) => {
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo({ top, left: 0, behavior: 'auto' });
  document.documentElement.style.scrollBehavior = originalScrollBehavior;
};

const initSiteLoader = () => {
  const loader = document.getElementById('site-loader');
  if (!loader) {
    return;
  }

  if (window.__weddingSkipLoader) {
    document.body.classList.add('page-ready');
    document.body.removeAttribute('aria-busy');
    loader.remove();
    restoreScrollPosition(window.__weddingSavedScrollY || 0);
    document.dispatchEvent(new CustomEvent('site-ready'));
    return;
  }

  const finishLoading = () => {
    document.body.classList.add('page-ready');
    loader.classList.add('is-ready');
    document.body.removeAttribute('aria-busy');
    restoreScrollPosition(window.__weddingSavedScrollY || 0);
    document.dispatchEvent(new CustomEvent('site-ready'));
    window.setTimeout(() => loader.remove(), 1000);
  };

  const heroImage = new Image();
  heroImage.src = 'img/hero-kerlingarfjoll-lg.webp';
  const imageReady = heroImage.decode ? heroImage.decode().catch(() => undefined) : Promise.resolve();
  const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
  const minimumDisplayTime = new Promise((resolve) => window.setTimeout(resolve, 2400));
  const hardTimeout = new Promise((resolve) => window.setTimeout(resolve, 4500));

  Promise.race([
    Promise.all([imageReady, fontsReady, minimumDisplayTime]),
    hardTimeout,
  ]).then(finishLoading);
};

const initInitialHashGuard = () => {
  if (!window.location.hash) {
    return;
  }

  window.history.replaceState(null, document.title, `${window.location.pathname}${window.location.search}`);
};

const initScrollPosition = () => {
  const storageKey = window.__weddingScrollKey || `wedding-scroll:${window.location.pathname}`;
  const savedScrollY = Number(sessionStorage.getItem(storageKey)) || 0;
  const restore = () => {
    if (savedScrollY > 0) {
      restoreScrollPosition(savedScrollY);
    }
  };
  const save = () => sessionStorage.setItem(storageKey, String(window.scrollY));

  window.addEventListener('pagehide', save);
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    const link = event.target.closest('a[href]');
    if (!link || link.target === '_blank') {
      return;
    }
    const destination = new URL(link.href, window.location.href);
    if (destination.origin === window.location.origin && destination.pathname !== window.location.pathname) {
      sessionStorage.setItem('wedding-skip-loader', destination.pathname);
    }
  });

  if (document.getElementById('site-loader')) {
    document.addEventListener('site-ready', restore, { once: true });
  } else {
    window.requestAnimationFrame(restore);
  }
};

const initPersonalInvitation = () => {
  const invitation = document.getElementById('personal-invitation');
  const message = document.getElementById('personal-invitation-message');
  const encodedName = new URLSearchParams(window.location.search).get('invite');

  if (!invitation || !message || !encodedName) {
    return;
  }

  let guestName;
  try {
    const base64 = encodedName.replace(/-/g, '+').replace(/_/g, '/');
    const binary = window.atob(base64);
    guestName = new TextDecoder().decode(Uint8Array.from(binary, (character) => character.charCodeAt(0))).trim();
  } catch {
    return;
  }

  if (!guestName || guestName.length > 80 || /[\r\n<>]/.test(guestName)) {
    return;
  }

  const renderMessage = () => {
    const template = i18nInstance.get('invite.message');
    const [beforeName, afterName] = template.split('{name}');
    message.replaceChildren(beforeName, Object.assign(document.createElement('strong'), { textContent: guestName }), afterName || '');
  };

  renderMessage();
  invitation.hidden = false;
  document.addEventListener('language-changed', renderMessage);
};

const isFullyVisible = (element) => {
  const bounds = element.getBoundingClientRect();
  return bounds.top >= 0 && bounds.bottom <= window.innerHeight;
};

const initStoryHearts = () => {
  const imageWrap = document.querySelector('[data-heart-reveal]');
  if (!imageWrap || !('IntersectionObserver' in window)) {
    return;
  }

  const createHearts = () => {
    if (imageWrap.querySelector('.story-heart')) {
      return;
    }

    const heartSettings = [
      { left: 68, delay: 0 },
      { left: 24, delay: 0.8 },
      { left: 84, delay: 1.6 },
      { left: 43, delay: 2.4 },
      { left: 14, delay: 3.2 },
    ];
    heartSettings.forEach(({ left, delay }) => {
      const size = `${(0.85 + Math.random() * 0.7).toFixed(2)}rem`;
      const animationDelay = `${delay}s`;
      const heart = document.createElement('span');
      heart.className = 'story-heart bi bi-heart-fill';
      heart.setAttribute('aria-hidden', 'true');
      heart.style.setProperty('--heart-left', `${left}%`);
      heart.style.setProperty('--heart-size', size);
      heart.style.setProperty('--heart-delay', animationDelay);
      imageWrap.appendChild(heart);
    });
  };

  let wasVisible = false;
  let lastTrigger = -Infinity;
  const updateVisibility = (visible) => {
    if (!document.body.classList.contains('page-ready')) return;
    const entered = visible && !wasVisible;
    wasVisible = visible;
    if (!entered) return;
    const now = window.performance.now();
    if (now - lastTrigger < 5000) return;
    lastTrigger = now;
    createHearts();
    imageWrap.classList.remove('hearts-visible');
    void imageWrap.offsetWidth;
    imageWrap.classList.add('hearts-visible');
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => updateVisibility(entry.isIntersecting && entry.intersectionRatio >= 1));
  }, { rootMargin: '0px', threshold: 1 });
  observer.observe(imageWrap);

  document.addEventListener('site-ready', () => {
    updateVisibility(isFullyVisible(imageWrap));
  }, { once: true });
};

const initTimelineVideo = () => {
  const video = document.querySelector('.timeline-proposal-video');
  if (!video || !('IntersectionObserver' in window)) return;

  let visible = false;
  let visit = 0;
  let startedVisit = 0;
  const startVisit = () => {
    if (!visible || startedVisit === visit || video.readyState < 1) return;
    startedVisit = visit;
    const playingVisit = visit;
    video.muted = true;
    try {
      video.currentTime = 0;
    } catch (error) {
      console.warn('Could not reset the proposal video.', error);
      return;
    }
    video.play().catch((error) => {
      if (error.name === 'AbortError' && (!visible || playingVisit !== visit)) return;
      console.warn('Could not play the proposal video.', error);
    });
  };
  video.addEventListener('loadedmetadata', startVisit);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (visible === entry.isIntersecting) return;
      visible = entry.isIntersecting;
      if (visible) {
        visit += 1;
        startVisit();
      } else {
        video.pause();
      }
    });
  }, { rootMargin: '0px', threshold: 1 });

  observer.observe(video);
};

const initSite = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Countdown to the wedding
     ------------------------------------------------------------------ */
  const initCountdown = () => {
    const weddingDate = new Date('2027-05-26T14:30:00+02:00').getTime();
    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minutesEl = document.getElementById('countdown-minutes');
    const secondsEl = document.getElementById('countdown-seconds');
    const messageEl = document.getElementById('countdown-message');
    const container = document.getElementById('countdown-container');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl || !container) {
      return;
    }

    let intervalId = null;

    const render = (days, hours, minutes, seconds) => {
      daysEl.textContent = String(Math.max(0, days));
      hoursEl.textContent = String(Math.max(0, hours)).padStart(2, '0');
      minutesEl.textContent = String(Math.max(0, minutes)).padStart(2, '0');
      secondsEl.textContent = String(Math.max(0, seconds)).padStart(2, '0');
    };

    const tick = () => {
      const now = Date.now();
      const distance = weddingDate - now;

      if (distance <= 0) {
        render(0, 0, 0, 0);
        if (messageEl) {
          messageEl.textContent = i18nInstance ? i18nInstance.get('hero.countdown_today') : 'Today is the day!';
        }
        if (intervalId !== null) {
          window.clearInterval(intervalId);
          intervalId = null;
        }
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      render(days, hours, minutes, seconds);
    };

    tick();
    intervalId = window.setInterval(tick, 1000);
    document.addEventListener('language-changed', tick);
  };

  /* ------------------------------------------------------------------
     Timeline reveal animation + progress illumination
     ------------------------------------------------------------------ */
  const initTimelineReveal = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const progressEl = document.querySelector('.timeline-progress');
    const timelineEl = document.querySelector('.timeline');

    if (timelineItems.length === 0) {
      return;
    }

    if (prefersReducedMotion) {
      timelineItems.forEach((item) => item.classList.add('is-visible'));
    } else if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        },
        { threshold: 0.2 }
      );
      timelineItems.forEach((item) => observer.observe(item));
    } else {
      timelineItems.forEach((item) => item.classList.add('is-visible'));
    }

    if (progressEl && timelineEl) {
      const updateProgress = () => {
        const rect = timelineEl.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const scrolled = viewportHeight - rect.top;
        const total = rect.height;
        const ratio = Math.min(1, Math.max(0, scrolled / total));
        progressEl.style.height = `${ratio * 100}%`;
      };

      updateProgress();
      window.addEventListener('scroll', updateProgress, { passive: true });
      window.addEventListener('resize', updateProgress);
    }
  };

  /* ------------------------------------------------------------------
     Dynamic copyright year
     ------------------------------------------------------------------ */
  const initCopyrightYear = () => {
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  };

  /* ------------------------------------------------------------------
     Navbar scroll shadow toggle
     ------------------------------------------------------------------ */
  const initNavbarScrollState = () => {
    const navbar = document.querySelector('.navbar-wedding');
    if (!navbar) {
      return;
    }
    const toggleScrolled = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };
    toggleScrolled();
    window.addEventListener('scroll', toggleScrolled, { passive: true });
  };

  /* ------------------------------------------------------------------
     Init all
     ------------------------------------------------------------------ */
  initScrollPosition();
  initSiteLoader();
  initInitialHashGuard();
  initI18n();
  initPersonalInvitation();
  initStoryHearts();
  initTimelineVideo();
  initCountdown();
  initTimelineReveal();
  initCopyrightYear();
  initNavbarScrollState();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite, { once: true });
} else {
  initSite();
}
