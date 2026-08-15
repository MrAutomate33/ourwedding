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
    'hero.date': '15 juli 2027',
    'hero.countdown_prefix': 'Aftellen naar het moment dat we ‘ja’ zeggen.',
    'hero.days': 'Dagen', 'hero.hours': 'Uren', 'hero.minutes': 'Minuten', 'hero.seconds': 'Seconden',
    'hero.btn_rsvp': 'RSVP', 'hero.btn_day': 'Bekijk de dag',
    'invite.label': 'Persoonlijke uitnodiging',
    'invite.message': 'Beste {name}, met veel liefde nodigen we je uit om onze trouwdag met ons te vieren. Van de bergen van Kerlingarfjöll tot dit nieuwe hoofdstuk: jouw aanwezigheid maakt onze dag nog mooier. We kijken ernaar uit om samen te proosten, te lachen en herinneringen voor altijd te maken.',
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
    'wind.lead': 'Blaas in je microfoon en laat de wind opsteken. Kun jij de windkracht tot het uiterste brengen?',
    'wind.start': 'Gebruik microfoon', 'wind.fallback': 'Houd vast voor wind',
    'wind.status_ready': 'Klaar voor een frisse bries?', 'wind.status_listening': 'We luisteren. Blaas maar!',
    'wind.status_success': 'Windkracht bereikt. Kijk wat er gebeurt!', 'wind.status_unavailable': 'De microfoon is niet beschikbaar. Roep de wind op met de knop.',
    // Wedding Day
    'wedding.label': 'De Grote Dag', 'wedding.h2': 'De Trouwdag',
    'wedding.date': 'Donderdag, 15 juli 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Aankomst gasten & welkom', 'wedding.arr.note': 'Neem rustig de tijd om aan te komen en elkaar te begroeten.',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'Huwelijksceremonie', 'wedding.cer.note': 'Een moment voor ons ja-woord.',
    'wedding.cake.time': '15:45', 'wedding.cake.desc': 'Toast, taart, gelukwensen & borrel', 'wedding.cake.note': 'Vanaf de toast zijn bier, wijn en frisdrank onbeperkt beschikbaar.',
    'wedding.drinks.note': 'Drankjes zijn beschikbaar vanaf dit moment.',
    'wedding.dinner.time': '17:30', 'wedding.dinner.desc': 'Diner', 'wedding.dinner.note': 'Samen aan tafel, met tijd voor goed eten en mooie gesprekken.',
    'wedding.speeches.time': 'Tijdens het diner', 'wedding.speeches.desc': 'Toespraken', 'wedding.speeches.note': 'Een paar woorden uit het hart, tussen de gangen door.',
    'wedding.party.time': '20:00', 'wedding.party.desc': 'Feest', 'wedding.party.note': 'Daarna gaat de muziek aan en vieren we samen tot laat.',
    'wedding.end.time': '00:30', 'wedding.end.desc': 'Einde van de avond', 'wedding.end.note': 'Bedankt dat jullie deze bijzondere dag met ons hebben gevierd.',
    'wedding.note': 'We nodigen graag precies de mensen uit die op jullie persoonlijke uitnodiging staan.',
    'wedding.photo_note': "Tijdens de ceremonie hebben we een professionele fotograaf en vragen we jullie om telefoons weg te leggen. Buiten de ceremonie zijn jullie vrij om foto\'s en filmpjes te maken. Film je? Houd je telefoon dan horizontaal. En vooral: wees samen met ons in het moment.",
    // Location
    'location.label': 'Locatie', 'location.h2': 'Hier naartoe',
    'location.description': 'Een sfeervol landhuis met klassieke ruimtes en een prachtige parktuin op de Utrechtse Heuvelrug.',
    'location.travel.h': 'Reizen', 'location.travel.text': 'Reis naar station Driebergen-Zeist. Vanaf daar kun je lopen of de bus nemen. Plan vlak voor vertrek je actuele route via',
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
    'rsvp.lead': 'We vieren dit het liefst samen met jou. Laat ons weten of je erbij kunt zijn.',
    'rsvp.deadline': 'Reageer voor:', 'rsvp.deadline_date': '20 mei 2027', 'rsvp.load': 'Toon RSVP-formulier', 'rsvp.btn': 'Open RSVP-formulier',
    'rsvp.privacy': 'Je RSVP-gegevens worden uitsluitend gebruikt voor de organisatie van ons huwelijk en relevante communicatie.',
    // Dress Code
    'dresscode.label': 'Wat te dragen', 'dresscode.h2': 'Dresscode',
    'dresscode.theme': 'Formele zomerse chic',
    'dresscode.lead': 'Vier mee in elegante zomerse kleding. Kies iets feestelijks, comfortabel en passend bij de locatie.',
    'dresscode.style.h': 'Stijl', 'dresscode.colours.h': 'Kleuren', 'dresscode.practical.h': 'Praktische opmerkingen',
    // Gifts
    'gifts.label': 'Cadeaus', 'gifts.h2': 'Cadeaus',
    'gifts.lead': 'Jouw aanwezigheid is het mooiste cadeau. Als je toch iets wilt geven, lees dan gerust verder.',
    'gifts.honeymoon.h': 'Bijdrage aan huwelijksreis',
    'gifts.honeymoon.text': 'Willen jullie ons iets geven? Een bijdrage aan onze huwelijksreis is van harte welkom en helpt ons om samen nieuwe herinneringen te maken.',
    'gifts.wishlist.h': 'Verlanglijst', 'gifts.wishlist.text': 'Weten jullie iets waarvan jullie zeker weten dat het bij ons past? Dan zijn we natuurlijk blij met een persoonlijk cadeau. Anders is een bijdrage aan onze huwelijksreis altijd een fijne keuze.',
    // Ceremony Masters
    'ceremony.label': 'Ceremoniemeesters', 'ceremony.h2': 'Ontmoet onze ceremoniemeesters',
    'ceremony.lead': 'Onze ceremoniemeesters begeleiden de dag en beantwoorden praktische vragen.',
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
    'invite.label': 'Personal invitation',
    'invite.message': 'Dear {name}, with so much love, we invite you to celebrate our wedding day with us. From the mountains of Kerlingarfjöll to this new chapter, your presence will make our day even more meaningful. We cannot wait to toast, laugh, and create memories to carry with us forever.',
    'hero.sub': 'From Kerlingarfj\u00f6ll to forever',
    'hero.date': '15 July 2027',
    'hero.countdown_prefix': "Counting down to the moment we say \u2018I do\u2019.",
    'hero.countdown_today': 'Today is the day!',
    'hero.days': 'Days', 'hero.hours': 'Hours', 'hero.minutes': 'Minutes', 'hero.seconds': 'Seconds',
    'hero.btn_rsvp': 'RSVP', 'hero.btn_day': 'View the Day',
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
    'wind.lead': 'Blow into your microphone and make the wind rise. Can you take the wind strength all the way to the top?',
    'wind.start': 'Use microphone', 'wind.fallback': 'Hold for wind',
    'wind.status_ready': 'Ready for a fresh breeze?', 'wind.status_listening': 'We are listening. Give us your best gust!',
    'wind.status_success': 'Wind strength reached. Look what happens!', 'wind.status_unavailable': 'The microphone is unavailable. Call up the wind with the button.',
    'wedding.label': 'The Big Day', 'wedding.h2': 'The Wedding Day',
    'wedding.date': 'Thursday, 15 July 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Guest Arrival & Welcome', 'wedding.arr.note': 'Take your time arriving and greeting one another.',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'Wedding Ceremony', 'wedding.cer.note': 'Our moment to say yes.',
    'wedding.cake.time': '15:45', 'wedding.cake.desc': 'Toast, cake, congratulations & drinks', 'wedding.cake.note': 'From the toast onward, beer, wine and soft drinks are unlimited.',
    'wedding.drinks.note': 'Drinks are available from this point onward.',
    'wedding.dinner.time': '17:30', 'wedding.dinner.desc': 'Dinner', 'wedding.dinner.note': 'Time to sit together, enjoy good food and share lovely conversations.',
    'wedding.speeches.time': 'During dinner', 'wedding.speeches.desc': 'Speeches', 'wedding.speeches.note': 'A few words from the heart, shared between courses.',
    'wedding.party.time': '20:00', 'wedding.party.desc': 'Party', 'wedding.party.note': 'Then the music starts and we celebrate together into the night.',
    'wedding.end.time': '00:30', 'wedding.end.desc': 'End of the evening', 'wedding.end.note': 'Thank you for celebrating this special day with us.',
    'wedding.note': 'We are inviting exactly the people named on their personal invitation.',
    'wedding.photo_note': 'We have a professional photographer during the ceremony, so please put your phones away. Outside the ceremony, feel free to take photos and videos. If you film, please hold your phone horizontally. Above all, be present in the moment with us.',
    'location.label': 'Venue', 'location.h2': 'Getting There',
    'location.description': 'An atmospheric country house with classic rooms and a beautiful park garden in the Utrechtse Heuvelrug.',
    'location.travel.h': 'Travel', 'location.travel.text': 'Travel to Driebergen-Zeist station. From there, walk or take a bus. Check the current route shortly before you leave via',
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
    'rsvp.lead': 'We would love to celebrate with you. Please let us know whether you can attend.',
    'rsvp.deadline': 'Please respond before:', 'rsvp.deadline_date': '20 May 2027', 'rsvp.load': 'Show RSVP Form', 'rsvp.btn': 'Open RSVP Form',
    'rsvp.privacy': 'Your RSVP details will only be used to organize our wedding and communicate relevant wedding information.',
    'dresscode.label': 'What to Wear', 'dresscode.h2': 'Dress Code',
    'dresscode.theme': 'Formal Summer Chic',
    'dresscode.lead': 'Celebrate with us in elegant summer attire. Choose something festive, comfortable, and suitable for the venue.',
    'dresscode.style.h': 'Style', 'dresscode.colours.h': 'Colours', 'dresscode.practical.h': 'Practical Notes',
    'gifts.label': 'Gifts', 'gifts.h2': 'Gifts',
    'gifts.lead': 'Your presence is the greatest gift. If you would still like to give something.',
    'gifts.honeymoon.h': 'Honeymoon Contribution',
    'gifts.honeymoon.text': 'If you would like to give us something, a contribution towards our honeymoon would be warmly welcomed and will help us create new memories together.',
    'gifts.wishlist.h': 'Wishlist', 'gifts.wishlist.text': 'If you know of something you are sure would suit us, a personal gift is always lovely. Otherwise, a contribution towards our honeymoon is a wonderful choice.',
    'ceremony.label': 'Ceremony Masters', 'ceremony.h2': 'Meet Our Ceremony Masters',
    'ceremony.lead': 'Our ceremony masters will help guide the day and answer practical questions.',
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
    'invite.label': 'Invitation personnelle',
    'invite.message': 'Cher/Chère {name}, c’est avec beaucoup d’amour que nous vous invitons à célébrer notre mariage avec nous. Des montagnes de Kerlingarfjöll à ce nouveau chapitre, votre présence rendra cette journée encore plus précieuse. Nous avons hâte de trinquer, de rire et de créer ensemble des souvenirs pour toujours.',
    'hero.sub': "De Kerlingarfj\u00f6ll \u00e0 l\u2019\u00e9ternit\u00e9",
    'hero.date': '15 juillet 2027',
    'hero.countdown_prefix': "D\u00e9compte jusqu\u2019au moment o\u00f9 nous disons \u2018oui\u2019.",
    'hero.countdown_today': 'C\u2019est le grand jour\u00a0!',
    'hero.days': 'Jours', 'hero.hours': 'Heures', 'hero.minutes': 'Minutes', 'hero.seconds': 'Secondes',
    'hero.btn_rsvp': 'RSVP', 'hero.btn_day': 'Le programme',
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
    'wind.lead': 'Soufflez dans votre microphone et faites monter le vent. Pouvez-vous pousser la force du vent jusqu’au sommet ?',
    'wind.start': 'Utiliser le microphone', 'wind.fallback': 'Maintenir pour le vent',
    'wind.status_ready': 'Prêt pour une brise fraîche ?', 'wind.status_listening': 'Nous écoutons. Soufflez !',
    'wind.status_success': 'Force du vent atteinte. Regardez ce qui se passe !', 'wind.status_unavailable': 'Le microphone est indisponible. Appelez le vent avec le bouton.',
    'wedding.label': 'Le Grand Jour', 'wedding.h2': 'Le Mariage',
    'wedding.date': 'Jeudi, 15 juillet 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Accueil des invit\u00e9s', 'wedding.arr.note': 'Prenez le temps d’arriver tranquillement et de vous saluer.',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'C\u00e9r\u00e9monie de mariage', 'wedding.cer.note': 'Notre moment pour nous dire oui.',
    'wedding.cake.time': '15:45', 'wedding.cake.desc': 'Toast, g\u00e2teau, f\u00e9licitations & boissons', 'wedding.cake.note': 'D\u00e8s le toast, la bi\u00e8re, le vin et les boissons sans alcool sont \u00e0 volont\u00e9.',
    'wedding.dinner.time': '17:30', 'wedding.dinner.desc': 'D\u00eener', 'wedding.dinner.note': 'Un moment autour de la table, avec de bons plats et de belles conversations.',
    'wedding.speeches.time': 'Pendant le d\u00eener', 'wedding.speeches.desc': 'Discours', 'wedding.speeches.note': 'Quelques mots du cœur, entre les plats.',
    'wedding.party.time': '20:00', 'wedding.party.desc': 'F\u00eate', 'wedding.party.note': 'Puis la musique commence et la f\u00eate continue jusque tard dans la nuit.',
    'wedding.end.time': '00:30', 'wedding.end.desc': 'Fin de la soirée', 'wedding.end.note': 'Merci d’avoir célébré cette journée si spéciale avec nous.',
    'wedding.note': 'Nous invitons exactement les personnes indiquées sur leur invitation personnelle.',
    'wedding.photo_note': 'Un photographe professionnel sera pr\u00e9sent pendant la c\u00e9r\u00e9monie\u00a0: merci de ranger vos t\u00e9l\u00e9phones. En dehors de la c\u00e9r\u00e9monie, vous pouvez prendre des photos et des vid\u00e9os. Si vous filmez, tenez votre t\u00e9l\u00e9phone horizontalement. Et surtout, profitez de ce moment avec nous.',
    'location.label': 'Lieu', 'location.h2': 'Comment venir',
    'location.travel.h': 'Transport', 'location.parking.h': 'Parking',
    'location.accom.h': 'H\u00e9bergement', 'location.taxi.h': 'Taxi & transport',
    'location.directions_btn': "Ouvrir l\u2019itin\u00e9raire",
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Serez-vous des n\u00f4tres\u00a0?',
    'rsvp.lead': 'Nous adorerions c\u00e9l\u00e9brer avec vous. Faites-nous savoir si vous pouvez \u00eatre pr\u00e9sent.',
    'rsvp.deadline': 'Merci de r\u00e9pondre avant le\u00a0:', 'rsvp.deadline_date': '20 mai 2027', 'rsvp.btn': 'Ouvrir le formulaire RSVP',
    'rsvp.privacy': 'Vos coordonn\u00e9es RSVP ne seront utilis\u00e9es que pour organiser notre mariage et communiquer les informations pertinentes.',
    'dresscode.label': 'Tenue vestimentaire', 'dresscode.h2': 'Code vestimentaire',
    'dresscode.theme': 'Chic estival formel',
    'dresscode.lead': "C\u00e9l\u00e9brez avec nous en tenue \u00e9l\u00e9gante d\u2019\u00e9t\u00e9. Choisissez quelque chose de festif, confortable et adapt\u00e9 au lieu.",
    'dresscode.style.h': 'Style', 'dresscode.colours.h': 'Couleurs', 'dresscode.practical.h': 'Conseils pratiques',
    'gifts.label': 'Cadeaux', 'gifts.h2': 'Cadeaux',
    'gifts.lead': 'Votre présence est le plus beau des cadeaux. Si vous souhaitez tout de même nous offrir quelque chose.',
    'gifts.honeymoon.h': 'Contribution au voyage de noces',
    'gifts.honeymoon.text': 'Si vous souhaitez nous offrir quelque chose, une contribution pour notre voyage de noces sera chaleureusement accueillie et nous aidera à créer de nouveaux souvenirs ensemble.',
    'gifts.wishlist.h': 'Liste de souhaits', 'gifts.wishlist.text': 'Si vous connaissez quelque chose qui nous correspond vraiment, un cadeau personnel nous fera plaisir. Sinon, une contribution à notre voyage de noces est une très belle idée.',
    'ceremony.label': 'Ma\u00eetres de C\u00e9r\u00e9monie', 'ceremony.h2': 'Rencontrez nos ma\u00eetres de c\u00e9r\u00e9monie',
    'ceremony.lead': 'Nos ma\u00eetres de c\u00e9r\u00e9monie guideront la journ\u00e9e et r\u00e9pondront aux questions pratiques.',
    'location.description': 'Une maison de campagne chaleureuse avec des salles classiques et un magnifique parc dans l\u2019Utrechtse Heuvelrug.',
    'location.travel.text': 'Rendez-vous \u00e0 la gare de Driebergen-Zeist. De l\u00e0, marchez ou prenez le bus. V\u00e9rifiez l\u2019itin\u00e9raire actuel avant votre d\u00e9part via',
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
    'rsvp.deadline_date': '[DATE \u00c0 AJOUTER]', 'rsvp.load': 'Afficher le formulaire RSVP',
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
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || '').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT;
  };

  let lang = detect();
  const languageLabels = {
    nl: { flagClass: 'flag-nl', short: 'NL', name: 'Nederlands' },
    en: { flagClass: 'flag-us', short: 'EN', name: 'English' },
    fr: { flagClass: 'flag-fr', short: 'FR', name: 'Français' },
  };

  const apply = (targetLang) => {
    const dict = translations[targetLang] || translations[DEFAULT];

    // Text content
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    // Update <html lang>
    document.documentElement.lang = targetLang;

    // Active language button
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === targetLang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-btn') === targetLang ? 'true' : 'false');
    });

    const current = languageLabels[targetLang];
    document.querySelectorAll('.lang-trigger').forEach((trigger) => {
      const flag = trigger.querySelector('.lang-current-flag');
      const label = trigger.querySelector('.lang-current');
      if (flag) {
        flag.classList.remove('flag-nl', 'flag-us', 'flag-fr');
        flag.classList.add(current.flagClass);
      }
      if (label) label.textContent = trigger.closest('.offcanvas-lang-switcher') ? current.name : current.short;
    });
  };

  const switchTo = (targetLang) => {
    if (!SUPPORTED.includes(targetLang)) return;
    lang = targetLang;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
    document.dispatchEvent(new CustomEvent('language-changed'));
  };

  apply(lang);

  document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => switchTo(btn.getAttribute('data-lang-btn')));
  });

  i18nInstance = {
    get: (key) => (translations[lang] || translations[DEFAULT])[key] || key,
    currentLang: () => lang,
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

const initLazyRsvp = () => {
  const iframe = document.querySelector('.rsvp-iframe-container iframe[data-src]');
  const loadButton = document.querySelector('[data-rsvp-load]');
  if (!iframe || !loadButton) {
    return;
  }

  const loadForm = () => {
    if (iframe.getAttribute('src')) return;
    iframe.src = iframe.dataset.src;
    iframe.closest('.rsvp-iframe-container').classList.add('is-loaded');
  };

  loadButton.addEventListener('click', loadForm, { once: true });
};

const initWindGame = () => {
  const game = document.querySelector('[data-wind-game]');
  if (!game) return;

  const startButton = game.querySelector('[data-wind-start]');
  const fallbackButton = game.querySelector('[data-wind-fallback]');
  const meter = game.querySelector('.wind-game__meter');
  const status = game.querySelector('[data-wind-status]');
  let stream;
  let animationFrame;
  let fallbackInterval;
  let resetTimeout;
  let windLevel = 0;
  let won = false;

  const text = (key) => i18nInstance ? i18nInstance.get(key) : key;
  const update = (level) => {
    windLevel = Math.max(0, Math.min(100, level));
    game.style.setProperty('--wind-level', `${windLevel}%`);
    meter.setAttribute('aria-valuenow', String(Math.round(windLevel)));
    game.classList.toggle('is-windy', windLevel > 14);
    if (!won && windLevel >= 65) {
      won = true;
      windLevel = 100;
      game.style.setProperty('--wind-level', '100%');
      meter.setAttribute('aria-valuenow', '100');
      window.clearInterval(fallbackInterval);
      game.classList.add('is-won');
      status.textContent = text('wind.status_success');
      if (stream) stream.getTracks().forEach((track) => track.stop());
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resetTimeout = window.setTimeout(() => {
        won = false;
        stream = undefined;
        animationFrame = undefined;
        game.classList.remove('is-won', 'is-windy', 'is-listening');
        update(0);
        status.textContent = text('wind.status_ready');
        startButton.disabled = false;
      }, 4000);
    }
  };

  const stopFallback = () => {
    window.clearInterval(fallbackInterval);
    fallbackInterval = undefined;
    if (!won) update(0);
  };

  const startFallback = () => {
    if (won) return;
    window.clearInterval(fallbackInterval);
    update(55);
    fallbackInterval = window.setInterval(() => update(85), 100);
  };

  fallbackButton.addEventListener('pointerdown', startFallback);
  fallbackButton.addEventListener('pointerup', stopFallback);
  fallbackButton.addEventListener('pointerleave', stopFallback);
  fallbackButton.addEventListener('pointercancel', stopFallback);
  fallbackButton.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'Enter') startFallback();
  });
  fallbackButton.addEventListener('keyup', stopFallback);
  startButton.addEventListener('click', async () => {
    if (!navigator.mediaDevices?.getUserMedia) {
      status.textContent = text('wind.status_unavailable');
      return;
    }
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      game.classList.add('is-listening');
      status.textContent = text('wind.status_listening');
      startButton.disabled = true;
      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      audioContext.createMediaStreamSource(stream).connect(analyser);
      const samples = new Uint8Array(analyser.fftSize);
      const sample = () => {
        if (won) return;
        analyser.getByteTimeDomainData(samples);
        const average = samples.reduce((sum, value) => sum + Math.abs(value - 128), 0) / samples.length;
        const detectedWind = Math.min(100, Math.max(0, (average - 12) * 7));
        update(windLevel * 0.2 + detectedWind * 0.8);
        animationFrame = window.requestAnimationFrame(sample);
      };
      sample();
    } catch {
      status.textContent = text('wind.status_unavailable');
    }
  });
};

const isFullyVisibleWithBottomMargin = (element, bottomMargin = 96) => {
  const bounds = element.getBoundingClientRect();
  return bounds.top >= 0 && bounds.bottom <= window.innerHeight + bottomMargin;
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
      { left: 68, delay: 0.54 },
      { left: 24, delay: 0.12 },
      { left: 84, delay: 0.82 },
      { left: 43, delay: 0.3 },
      { left: 14, delay: 0.68 },
    ];
    heartSettings.forEach(({ left, delay }) => {
      const size = `${(0.85 + Math.random() * 0.7).toFixed(2)}rem`;
      const animationDelay = `${delay + Math.random() * 0.16}s`;
    const heart = document.createElement('span');
    heart.className = 'story-heart bi bi-heart-fill';
    heart.setAttribute('aria-hidden', 'true');
      heart.style.setProperty('--heart-left', `${left}%`);
    heart.style.setProperty('--heart-size', size);
    heart.style.setProperty('--heart-delay', animationDelay);
    imageWrap.appendChild(heart);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting) && document.body.classList.contains('page-ready')) {
      createHearts();
      imageWrap.classList.add('hearts-visible');
      observer.disconnect();
    }
  }, { rootMargin: '0px 0px 96px', threshold: 1 });
  observer.observe(imageWrap);

  document.addEventListener('site-ready', () => {
    if (isFullyVisibleWithBottomMargin(imageWrap)) {
      createHearts();
      imageWrap.classList.add('hearts-visible');
      observer.disconnect();
    }
  }, { once: true });
};

const initTimelineVideo = () => {
  const video = document.querySelector('.timeline-proposal-video');
  if (!video || !('IntersectionObserver' in window)) return;

  let hasStarted = false;
  let loopTimeout;
  video.addEventListener('ended', () => {
    loopTimeout = window.setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(() => {
        video.controls = false;
      });
    }, 3000);
  });

  const observer = new IntersectionObserver((entries) => {
    if (hasStarted || !entries.some((entry) => entry.isIntersecting)) return;

    video.muted = true;
    video.play().catch(() => {
      video.controls = false;
    });
    hasStarted = true;
    observer.disconnect();
  }, { rootMargin: '0px 0px 96px', threshold: 1 });

  observer.observe(video);
};

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Countdown to the wedding
     ------------------------------------------------------------------ */
  const initCountdown = () => {
    const weddingDate = new Date('2027-07-15T14:30:00+02:00').getTime();
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
  };

  /* ------------------------------------------------------------------
     Close offcanvas menu when a nav link is clicked
     ------------------------------------------------------------------ */
  const initOffcanvasClose = () => {
    const offcanvasEl = document.getElementById('offcanvasNav');
    if (!offcanvasEl || typeof bootstrap === 'undefined') {
      return;
    }

    const navLinks = offcanvasEl.querySelectorAll('a.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        const instance = bootstrap.Offcanvas.getInstance(offcanvasEl) || new bootstrap.Offcanvas(offcanvasEl);
        instance.hide();
      });
    });

    const closeOnHashChange = () => {
      const instance = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (instance && offcanvasEl.classList.contains('show')) {
        instance.hide();
      }
    };
    window.addEventListener('hashchange', closeOnHashChange);
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
     Back-to-top button
     ------------------------------------------------------------------ */
  const initBackToTop = () => {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) {
      return;
    }

    const toggleVisibility = () => {
      backToTopBtn.classList.toggle('is-visible', window.scrollY > 300);
    };

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
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
  initWindGame();
  initLazyRsvp();
  initStoryHearts();
  initTimelineVideo();
  initCountdown();
  initOffcanvasClose();
  initTimelineReveal();
  initBackToTop();
  initCopyrightYear();
  initNavbarScrollState();
});
