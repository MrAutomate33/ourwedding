'use strict';

/* ==========================================================================
   Mariëlle & Jeremy — Wedding Website Script
   Multilingual: Nederlands (default) · English · Français
   ========================================================================== */

/* --------------------------------------------------------------------------
   Translations — edit text here per language (nl = default/fallback)
   -------------------------------------------------------------------------- */
const translations = {
  nl: {
    // Navigation
    'nav.home': 'Home', 'nav.story': 'Ons Verhaal', 'nav.journey': 'Onze Reis',
    'nav.proposal': 'Het Aanzoek', 'nav.wedding': 'Trouwdag', 'nav.location': 'Locatie',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Dresscode', 'nav.gifts': 'Cadeaus',
    'nav.gallery': 'Galerij', 'nav.ceremony': 'Ceremoniemeesters', 'nav.faq': 'FAQ',
    'nav.guestbook': 'Gastenboek',
    'nav.glossary': 'Woordenlijst',
    // Hero
    'hero.sub': 'Van Kerlingarfjöll tot voor altijd',
    'hero.date': '15 juli 2027',
    'hero.countdown_prefix': "Aftellen naar het moment dat we 'ja' zeggen.",
    'hero.countdown_today': 'Vandaag is de dag!',
    'hero.days': 'Dagen', 'hero.hours': 'Uren', 'hero.minutes': 'Minuten', 'hero.seconds': 'Seconden',
    'hero.btn_rsvp': 'RSVP', 'hero.btn_day': 'Bekijk de dag',
    // Coordinates
    'coord.label': 'IJsland', 'coord.h2': 'Coördinaten van ons verhaal',
    'coord.location_label': 'Aanzoeklocatie',
    'coord.tagline': 'Waar avontuur voor eeuwig werd.',
    'coord.btn': 'Lees ons verhaal',
    // Our Story
    'story.label': 'Ons Verhaal', 'story.h2': 'Ons Verhaal',
    'story.h3_met': 'Hoe wij elkaar ontmoetten',
    'story.p_met': 'Voeg hier toe hoe Mariëlle en Jeremy elkaar ontmoetten.',
    'story.h3_adventure': 'Avonturen beleven samen',
    'story.p_adventure': 'Voeg hier een favoriete gedeelde herinnering of avontuur toe.',
    'story.h3_chapter': 'Het volgende hoofdstuk',
    'story.p_chapter': 'Voeg hier een korte introductie van het huwelijksfeest toe.',
    // Journey
    'journey.label': 'Onze Reis', 'journey.h2': 'Onze Reis naar Kerlingarfjöll',
    'journey.intro': 'Elk avontuur bracht ons een klein beetje dichter bij deze dag.',
    'journey.item1.title': 'Eerste ontmoeting', 'journey.item2.title': 'Eerste afspraak',
    'journey.item3.title': 'Verliefd worden', 'journey.item4.title': 'Eerste groot avontuur',
    'journey.item5.title': 'Een leven opbouwen samen', 'journey.item6.title': 'IJsland avontuur',
    'journey.item7.title': 'Kerlingarfjöll', 'journey.item7.label': 'Het Aanzoek',
    'journey.item7.text': 'Hoog in de bergen van Kerlingarfjöll, omgeven door IJslands adembenemend landschap, begon ons nieuwe hoofdstuk.',
    'journey.item8.title': 'Verloving', 'journey.item9.title': 'Trouwdag',
    'journey.item9.text': 'We kunnen niet wachten om dit nieuwe hoofdstuk te vieren met onze familie en vrienden.',
    'journey.continues': 'De reis gaat verder\u2026', 'journey.btn': 'Lees het aanzoeksverhaal',
    // Proposal
    'proposal.label': 'Het Aanzoek', 'proposal.h2': 'Het aanzoek bij Kerlingarfjöll',
    'proposal.h3_journey': 'De reis erheen', 'proposal.h3_moment': 'Het moment', 'proposal.h3_answer': 'Het antwoord',
    // Wedding Day
    'wedding.label': 'De Grote Dag', 'wedding.h2': 'De Trouwdag',
    'wedding.date': 'Donderdag, 15 juli 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Aankomst gasten & welkom',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'Huwelijksceremonie',
    'wedding.cake.time': '15:45 - 17:30', 'wedding.cake.desc': 'Toast, taart, gelukwensen & borrel',
    'wedding.drinks.time': '15:45 - 17:30', 'wedding.drinks.desc': 'Borrel',
    'wedding.drinks.note': 'Drankjes zijn beschikbaar vanaf dit moment.',
    'wedding.dinner.time': '17:30 - 20:00', 'wedding.dinner.desc': 'Diner',
    'wedding.speeches.time': 'Tijdens het diner', 'wedding.speeches.desc': 'Toespraken',
    'wedding.party.time': '20:00 - 00:30', 'wedding.party.desc': 'Feest',
    'wedding.note': 'Kinderen, huisdieren en plus-ones zijn niet uitgenodigd. Persoonlijke uitnodigingen bepalen wie welkom is.',
    // Location
    'location.label': 'Locatie', 'location.h2': 'Hier naartoe',
    'location.description': 'Een sfeervol landhuis met klassieke ruimtes en een prachtige parktuin op de Utrechtse Heuvelrug.',
    'location.travel.h': 'Reizen', 'location.travel.text': 'Reis naar station Driebergen-Zeist. Vanaf daar kun je lopen of de bus nemen. Plan vlak voor vertrek je actuele route via 9292.',
    'location.parking.h': 'Parkeren', 'location.parking.text': 'Parkeren kan bij Buitenplaats Sparrendaal.', 'location.parking.link': 'Open parkeerroute',
    'location.accom.h': 'Overnachting', 'location.accom.text': 'Informatie over overnachtingen volgt.',
    'location.taxi.h': 'Taxi & vervoer', 'location.taxi.text': "Informatie over taxi's en vervoer volgt.",
    'location.directions_btn': 'Routebeschrijving openen',
    // RSVP
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Kom je ook?',
    'rsvp.lead': 'We vieren dit het liefst samen met jou. Laat ons weten of je erbij kunt zijn.',
    'rsvp.deadline': 'Reageer voor:', 'rsvp.deadline_date': '[DATUM TOEVOEGEN]', 'rsvp.btn': 'Open RSVP-formulier',
    'rsvp.privacy': 'Je RSVP-gegevens worden uitsluitend gebruikt voor de organisatie van ons huwelijk en relevante communicatie.',
    // Dress Code
    'dresscode.label': 'Wat te dragen', 'dresscode.h2': 'Dresscode',
    'dresscode.theme': 'Formele zomerse chic',
    'dresscode.lead': 'Vier mee in elegante zomerse kleding. Kies iets feestelijks, comfortabel en passend bij de locatie.',
    'dresscode.style.h': 'Stijl', 'dresscode.colours.h': 'Kleuren', 'dresscode.practical.h': 'Praktische opmerkingen',
    // Gifts
    'gifts.label': 'Cadeaus', 'gifts.h2': 'Cadeaus',
    'gifts.lead': 'Jouw aanwezigheid is het mooiste cadeau. Als je toch iets wilt geven, volgt hier binnenkort meer informatie.',
    'gifts.honeymoon.h': 'Bijdrage aan huwelijksreis', 'gifts.wishlist.h': 'Verlanglijst', 'gifts.personal.h': 'Persoonlijk cadeau',
    // Gallery
    'gallery.label': 'Galerij', 'gallery.h2': 'Onze avonturen',
    'gallery.filter.all': 'Alles', 'gallery.filter.iceland': 'IJsland', 'gallery.filter.proposal': 'Aanzoek',
    'gallery.filter.us': 'Wij', 'gallery.filter.friends': 'Familie & vrienden',
    // Ceremony Masters
    'ceremony.label': 'Ceremoniemeesters', 'ceremony.h2': 'Ontmoet onze ceremoniemeesters',
    'ceremony.lead': 'Onze ceremoniemeesters begeleiden de dag en beantwoorden praktische vragen.',
    // FAQ
    'faq.label': 'FAQ', 'faq.h2': 'Veelgestelde vragen',
    'faq.q1': 'Hoe laat moet ik er zijn?',
    'faq.a1': 'Wees er om 14:30 voor ontvangst van gasten, voor aanvang van de ceremonie om 15:00.',
    'faq.q2': 'Wat is de dresscode?', 'faq.a2': 'Formele zomerse chic. Zie het dresscode-gedeelte voor meer informatie.',
    'faq.q3': 'Zijn kinderen welkom?', 'faq.a3': '[KINDERBELEID TOEVOEGEN]',
    'faq.q4': 'Kan ik een partner meebrengen?', 'faq.a4': '[BELEID PLUS ONE TOEVOEGEN]',
    'faq.q5': 'Is er parkeergelegenheid bij de locatie?', 'faq.a5': '[PARKEERINFORMATIE TOEVOEGEN]',
    'faq.q6': 'Wordt er rekening gehouden met dieetwensen?', 'faq.a6': '[DIEETBELEID TOEVOEGEN — verzameld in RSVP-formulier]',
    'faq.q7': 'Hoe is het weer waarschijnlijk?', 'faq.a7': '[WEERSADVIES TOEVOEGEN]',
    'faq.q8': 'Waar kan ik overnachten?', 'faq.a8': '[HOTEL OF OVERNACHTINGSINFORMATIE TOEVOEGEN]',
    'faq.q9': "Mag ik foto's maken tijdens de ceremonie?", 'faq.a9': '[FOTOBELEID TOEVOEGEN]',
    'faq.q10': 'Met wie kan ik contact opnemen bij vragen?', 'faq.a10': '[CONTACTMETHODE TOEVOEGEN]',
    // Guestbook
    'guestbook.label': 'Gastenboek', 'guestbook.h2': 'Laat een berichtje achter',
    'guestbook.lead': 'We zijn van plan om dichter bij de trouwdag een gastenboek toe te voegen.',
    'guestbook.example_label': 'Voorbeeldbericht',
    'guestbook.example_text': '"Wij wensen jullie beiden een leven vol liefde en avontuur \u2014 we kunnen niet wachten om samen te vieren!"',
    'guestbook.placeholder': 'Een gastenboek is hier binnenkort beschikbaar.',
    // Glossary
    'glossary.label': 'De taal van ons verhaal', 'glossary.h2': 'IJslandse Woordenlijst',
    'glossary.intro': 'Een kleine gids voor de IJslandse woorden en plaatsen in ons verhaal.',
    'glossary.k.term': 'Kerlingarfjöll', 'glossary.k.phonetic': 'KER-ling-ar-fyötl',
    'glossary.k.translation': '\u201eDe Heksenbergen\u201c',
    'glossary.k.desc': 'Een vulkanisch hooglandmassief in het midden van IJsland, het decor van ons aanzoek.',
    'glossary.h.term': 'Hveradalir', 'glossary.h.phonetic': 'KVER-a-da-lir',
    'glossary.h.translation': '\u201eVallei van de hete bronnen\u201c',
    'glossary.h.desc': 'Het geothermische hart van Kerlingarfjöll, waar kleurrijke mineraalaarde stoomt naast levendig groen mos.',
    'glossary.a.term': '\u00c1stin finnur s\u00e9r lei\u00f0', 'glossary.a.phonetic': 'OWS-tin FIN-ur sair layth',
    'glossary.a.translation': '\u201eLiefde vindt haar weg\u201c',
    'glossary.a.desc': 'Onze IJslandse bruiloftsquote. De woorden die klinken door elke berg en vallei van ons verhaal.',
    'glossary.au.term': 'Aurora Borealis', 'glossary.au.phonetic': 'Latijn: \u201eNoordelijk dageraad\u201c',
    'glossary.au.translation': 'Het Noorderlicht',
    'glossary.au.desc': 'Het adembenemende lichtspel aan de IJslandse hemel, wiens groentinten ons kleurpalet inspireerden.',
    'glossary.ast.term': '\u00c1st', 'glossary.ast.phonetic': 'owst',
    'glossary.ast.translation': '\u201eLiefde\u201c in het IJslands',
    'glossary.ast.desc': 'Het eenvoudigste woord voor het meest complexe gevoel. De reden voor dit feest.',
    'glossary.nat.term': 'N\u00e1tt\u00fara', 'glossary.nat.phonetic': 'NOW-tu-ra',
    'glossary.nat.translation': '\u201eNatuur\u201c in het IJslands',
    'glossary.nat.desc': "IJslands wilde, ongetemde natuur \u2014 geothermische dalen, vulkanische hoogvlakten, middernachtzon \u2014 vormde ons liefdesverhaal.",
    // Footer
    'footer.thanks': 'Dank je wel dat je dit met ons viert.',
    'footer.nav.home': 'Home', 'footer.nav.rsvp': 'RSVP', 'footer.nav.faq': 'FAQ', 'footer.nav.gallery': 'Galerij',
    'footer.backtop': 'Terug naar boven \u2191',
    'footer.privacy': 'Deze site gebruikt geen analytics of tracking. RSVP-gegevens worden verwerkt via Microsoft Forms.',
    'lang.label': 'Taal',
  },

  en: {
    'nav.home': 'Home', 'nav.story': 'Our Story', 'nav.journey': 'Our Journey',
    'nav.proposal': 'The Proposal', 'nav.wedding': 'Wedding Day', 'nav.location': 'Location',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Dress Code', 'nav.gifts': 'Gifts',
    'nav.gallery': 'Gallery', 'nav.ceremony': 'Ceremony Masters', 'nav.faq': 'FAQ',
    'nav.guestbook': 'Guestbook',
    'nav.glossary': 'Glossary',
    'hero.sub': 'From Kerlingarfj\u00f6ll to Forever',
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
    'story.p_met': 'Add the story of how Mari\u00eblle and Jeremy met here.',
    'story.h3_adventure': 'Finding Adventure Together',
    'story.p_adventure': 'Add a favourite shared memory or adventure here.',
    'story.h3_chapter': 'The Next Chapter',
    'story.p_chapter': 'Add a short introduction to the wedding celebration here.',
    'journey.label': 'Our Journey', 'journey.h2': 'Our Journey to Kerlingarfj\u00f6ll',
    'journey.intro': 'Every adventure brought us a little closer to this day.',
    'journey.item1.title': 'First Meeting', 'journey.item2.title': 'First Date',
    'journey.item3.title': 'Falling in Love', 'journey.item4.title': 'First Big Adventure',
    'journey.item5.title': 'Building a Life Together', 'journey.item6.title': 'Iceland Adventure',
    'journey.item7.title': 'Kerlingarfj\u00f6ll', 'journey.item7.label': 'The Proposal',
    'journey.item7.text': "High in the mountains of Kerlingarfj\u00f6ll, surrounded by Iceland\u2019s breathtaking landscape, our next chapter began.",
    'journey.item8.title': 'Engagement', 'journey.item9.title': 'Wedding Day',
    'journey.item9.text': 'We cannot wait to celebrate this next chapter with our family and friends.',
    'journey.continues': 'The journey continues\u2026', 'journey.btn': 'Read the Proposal Story',
    'proposal.label': 'The Proposal', 'proposal.h2': 'The Proposal at Kerlingarfj\u00f6ll',
    'proposal.h3_journey': 'The Journey There', 'proposal.h3_moment': 'The Moment', 'proposal.h3_answer': 'The Answer',
    'wedding.label': 'The Big Day', 'wedding.h2': 'The Wedding Day',
    'wedding.date': 'Thursday, 15 July 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Guest Arrival & Welcome',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'Wedding Ceremony',
    'wedding.cake.time': '15:45 - 17:30', 'wedding.cake.desc': 'Toast, cake, congratulations & drinks',
    'wedding.drinks.time': '15:45 - 17:30', 'wedding.drinks.desc': 'Beer, wine & soft drinks',
    'wedding.drinks.note': 'Drinks are available from this point onward.',
    'wedding.dinner.time': '17:30 - 20:00', 'wedding.dinner.desc': 'Dinner',
    'wedding.speeches.time': 'During dinner', 'wedding.speeches.desc': 'Speeches',
    'wedding.party.time': '20:00 - 00:30', 'wedding.party.desc': 'Party',
    'wedding.note': 'Children, pets and plus-ones are not invited. Personal invitations determine who is welcome.',
    'location.label': 'Venue', 'location.h2': 'Getting There',
    'location.description': 'An atmospheric country house with classic rooms and a beautiful park garden in the Utrechtse Heuvelrug.',
    'location.travel.h': 'Travel', 'location.travel.text': 'Travel to Driebergen-Zeist station. From there, walk or take a bus. Check the current route via 9292 shortly before you leave.',
    'location.parking.h': 'Parking', 'location.parking.text': 'Parking is available at Buitenplaats Sparrendaal.', 'location.parking.link': 'Open parking route',
    'location.accom.h': 'Accommodation', 'location.accom.text': 'Accommodation information will follow.',
    'location.taxi.h': 'Taxi & Transport', 'location.taxi.text': 'Taxi and transport information will follow.',
    'location.directions_btn': 'Open Directions',
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Will You Join Us?',
    'rsvp.lead': 'We would love to celebrate with you. Please let us know whether you can attend.',
    'rsvp.deadline': 'Please respond before:', 'rsvp.deadline_date': '[DATE TO BE ADDED]', 'rsvp.btn': 'Open RSVP Form',
    'rsvp.privacy': 'Your RSVP details will only be used to organize our wedding and communicate relevant wedding information.',
    'dresscode.label': 'What to Wear', 'dresscode.h2': 'Dress Code',
    'dresscode.theme': 'Formal Summer Chic',
    'dresscode.lead': 'Celebrate with us in elegant summer attire. Choose something festive, comfortable, and suitable for the venue.',
    'dresscode.style.h': 'Style', 'dresscode.colours.h': 'Colours', 'dresscode.practical.h': 'Practical Notes',
    'gifts.label': 'Gifts', 'gifts.h2': 'Gifts',
    'gifts.lead': 'Your presence is the greatest gift. If you would still like to give something, more information will be shared here.',
    'gifts.honeymoon.h': 'Honeymoon Contribution', 'gifts.wishlist.h': 'Wishlist', 'gifts.personal.h': 'Personal Gift',
    'gallery.label': 'Gallery', 'gallery.h2': 'Our Adventures',
    'gallery.filter.all': 'All', 'gallery.filter.iceland': 'Iceland', 'gallery.filter.proposal': 'Proposal',
    'gallery.filter.us': 'Us', 'gallery.filter.friends': 'Friends & Family',
    'ceremony.label': 'Ceremony Masters', 'ceremony.h2': 'Meet Our Ceremony Masters',
    'ceremony.lead': 'Our ceremony masters will help guide the day and answer practical questions.',
    'faq.label': 'FAQ', 'faq.h2': 'Frequently Asked Questions',
    'faq.q1': 'What time should I arrive?',
    'faq.a1': 'Please arrive by 14:30 for guest welcome ahead of the 15:00 ceremony.',
    'faq.q2': 'What is the dress code?', 'faq.a2': 'Formal summer chic. See the Dress Code section above for details.',
    'faq.q3': 'Are children welcome?', 'faq.a3': '[ADD CHILDREN POLICY]',
    'faq.q4': 'Can I bring a plus one?', 'faq.a4': '[ADD PLUS ONE POLICY]',
    'faq.q5': 'Is there parking at the venue?', 'faq.a5': '[ADD PARKING INSTRUCTIONS]',
    'faq.q6': 'Are dietary requirements catered for?', 'faq.a6': '[ADD DIETARY POLICY \u2014 collected in RSVP form]',
    'faq.q7': 'What is the weather likely to be like?', 'faq.a7': '[ADD WEATHER GUIDANCE]',
    'faq.q8': 'Where should I stay?', 'faq.a8': '[ADD HOTEL OR ACCOMMODATION INFORMATION]',
    'faq.q9': 'Can I take photos during the ceremony?', 'faq.a9': '[ADD PHOTO POLICY]',
    'faq.q10': 'Who do I contact with questions?', 'faq.a10': '[ADD CONTACT METHOD]',
    'guestbook.label': 'Guestbook', 'guestbook.h2': 'Leave Us a Message',
    'guestbook.lead': "We're planning to add a guestbook closer to the wedding.",
    'guestbook.example_label': 'Example message',
    'guestbook.example_text': '"Wishing you both a lifetime of love and adventure \u2014 can\'t wait to celebrate with you!"',
    'guestbook.placeholder': 'A guestbook will be available here. Check back soon.',
    'glossary.label': 'The language of our story', 'glossary.h2': 'Iceland Glossary',
    'glossary.intro': 'A small guide to the Icelandic words and places in our story.',
    'glossary.k.term': 'Kerlingarfj\u00f6ll', 'glossary.k.phonetic': 'KER-ling-ar-fy\u00f6tl',
    'glossary.k.translation': '\u201cThe Witch Mountains\u201d',
    'glossary.k.desc': 'A volcanic highland massif in the heart of Iceland, and the setting of our proposal.',
    'glossary.h.term': 'Hveradalir', 'glossary.h.phonetic': 'KVER-a-da-lir',
    'glossary.h.translation': '\u201cValley of Hot Springs\u201d',
    'glossary.h.desc': 'The geothermal heart of Kerlingarfj\u00f6ll, where colourful mineral-stained earth steams beside vivid green moss.',
    'glossary.a.term': '\u00c1stin finnur s\u00e9r lei\u00f0', 'glossary.a.phonetic': 'OWS-tin FIN-ur sair layth',
    'glossary.a.translation': '\u201cLove finds its way\u201d',
    'glossary.a.desc': 'Our Icelandic wedding quote. The words that echo through every mountain and valley of our story.',
    'glossary.au.term': 'Aurora Borealis', 'glossary.au.phonetic': 'Latin: \u201cNorthern Dawn\u201d',
    'glossary.au.translation': 'The Northern Lights',
    'glossary.au.desc': "Iceland\u2019s breathtaking natural light display. The shifting teal of the aurora inspired the colours of our wedding.",
    'glossary.ast.term': '\u00c1st', 'glossary.ast.phonetic': 'owst',
    'glossary.ast.translation': '\u201cLove\u201d in Icelandic',
    'glossary.ast.desc': 'The simplest word for the most complex emotion. The reason for this celebration.',
    'glossary.nat.term': 'N\u00e1tt\u00fara', 'glossary.nat.phonetic': 'NOW-tu-ra',
    'glossary.nat.translation': '\u201cNature\u201d in Icelandic',
    'glossary.nat.desc': "Iceland\u2019s wild, untamed nature \u2014 geothermal valleys, volcanic highlands, midnight sun \u2014 shaped our love story.",
    'footer.thanks': 'Thank you for celebrating with us.',
    'footer.nav.home': 'Home', 'footer.nav.rsvp': 'RSVP', 'footer.nav.faq': 'FAQ', 'footer.nav.gallery': 'Gallery',
    'footer.backtop': 'Back to top \u2191',
    'footer.privacy': 'This site does not use analytics or tracking. RSVP data is processed only via Microsoft Forms.',
    'lang.label': 'Language',
  },

  fr: {
    'nav.home': 'Accueil', 'nav.story': 'Notre Histoire', 'nav.journey': 'Notre Voyage',
    'nav.proposal': 'La Demande', 'nav.wedding': 'Le Mariage', 'nav.location': 'Lieu',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Tenue', 'nav.gifts': 'Cadeaux',
    'nav.gallery': 'Galerie', 'nav.ceremony': 'Ma\u00eetres de C\u00e9r\u00e9monie', 'nav.faq': 'FAQ',
    'nav.guestbook': "Livre d\u2019Or",
    'nav.glossary': 'Glossaire',
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
    'story.p_met': "Ajoutez ici l\u2019histoire de la rencontre de Mari\u00eblle et Jeremy.",
    'story.h3_adventure': "L\u2019aventure ensemble",
    'story.p_adventure': 'Ajoutez ici un souvenir ou une aventure partag\u00e9e.',
    'story.h3_chapter': 'Le prochain chapitre',
    'story.p_chapter': "Ajoutez ici une courte introduction \u00e0 la c\u00e9l\u00e9bration du mariage.",
    'journey.label': 'Notre Voyage', 'journey.h2': 'Notre voyage vers Kerlingarfj\u00f6ll',
    'journey.intro': 'Chaque aventure nous a rapproch\u00e9s un peu plus de ce jour.',
    'journey.item1.title': 'Premi\u00e8re rencontre', 'journey.item2.title': 'Premier rendez-vous',
    'journey.item3.title': 'Tomber amoureux', 'journey.item4.title': 'Premi\u00e8re grande aventure',
    'journey.item5.title': 'Construire une vie ensemble', 'journey.item6.title': 'Aventure en Islande',
    'journey.item7.title': 'Kerlingarfj\u00f6ll', 'journey.item7.label': 'La Demande',
    'journey.item7.text': "Haut dans les montagnes de Kerlingarfj\u00f6ll, entour\u00e9s du paysage \u00e0 couper le souffle de l\u2019Islande, notre prochain chapitre a commenc\u00e9.",
    'journey.item8.title': 'Fian\u00e7ailles', 'journey.item9.title': 'Jour du mariage',
    'journey.item9.text': 'Nous avons h\u00e2te de c\u00e9l\u00e9brer ce prochain chapitre avec notre famille et nos amis.',
    'journey.continues': 'Le voyage continue\u2026', 'journey.btn': "Lire l\u2019histoire de la demande",
    'proposal.label': 'La Demande', 'proposal.h2': 'La demande \u00e0 Kerlingarfj\u00f6ll',
    'proposal.h3_journey': 'Le voyage l\u00e0-bas', 'proposal.h3_moment': 'Le moment', 'proposal.h3_answer': 'La r\u00e9ponse',
    'wedding.label': 'Le Grand Jour', 'wedding.h2': 'Le Mariage',
    'wedding.date': 'Jeudi, 15 juillet 2027',
    'wedding.arr.time': '14:30', 'wedding.arr.desc': 'Accueil des invit\u00e9s',
    'wedding.cer.time': '15:00', 'wedding.cer.desc': 'C\u00e9r\u00e9monie de mariage',
    'wedding.cake.time': 'Apr\u00e8s la c\u00e9r\u00e9monie', 'wedding.cake.desc': "G\u00e2teau, f\u00e9licitations & photos",
    'wedding.drinks.time': 'D\u00e8s le moment du g\u00e2teau', 'wedding.drinks.desc': 'Bi\u00e8re, vin & boissons \u00e0 volont\u00e9',
    'wedding.drinks.note': 'Les boissons sont disponibles \u00e0 partir de ce moment.',
    'wedding.dinner.time': '[HEURE DU D\u00cdNER \u00c0 AJOUTER]', 'wedding.dinner.desc': 'D\u00eener',
    'wedding.speeches.time': '[HEURE DES DISCOURS \u00c0 AJOUTER]', 'wedding.speeches.desc': 'Discours & soir\u00e9e',
    'wedding.party.time': '[HEURE DE LA F\u00caTE \u00c0 AJOUTER]', 'wedding.party.desc': 'F\u00eate',
    'wedding.note': 'Les horaires d\u00e9finitifs seront communiqu\u00e9s plus proche du mariage.',
    'location.label': 'Lieu', 'location.h2': 'Comment venir',
    'location.travel.h': 'Transport', 'location.parking.h': 'Parking',
    'location.accom.h': 'H\u00e9bergement', 'location.taxi.h': 'Taxi & transport',
    'location.directions_btn': "Ouvrir l\u2019itin\u00e9raire",
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Serez-vous des n\u00f4tres\u00a0?',
    'rsvp.lead': 'Nous adorerions c\u00e9l\u00e9brer avec vous. Faites-nous savoir si vous pouvez \u00eatre pr\u00e9sent.',
    'rsvp.deadline': 'Merci de r\u00e9pondre avant le\u00a0:', 'rsvp.btn': 'Ouvrir le formulaire RSVP',
    'rsvp.privacy': 'Vos coordonn\u00e9es RSVP ne seront utilis\u00e9es que pour organiser notre mariage et communiquer les informations pertinentes.',
    'dresscode.label': 'Tenue vestimentaire', 'dresscode.h2': 'Code vestimentaire',
    'dresscode.theme': 'Chic estival formel',
    'dresscode.lead': "C\u00e9l\u00e9brez avec nous en tenue \u00e9l\u00e9gante d\u2019\u00e9t\u00e9. Choisissez quelque chose de festif, confortable et adapt\u00e9 au lieu.",
    'dresscode.style.h': 'Style', 'dresscode.colours.h': 'Couleurs', 'dresscode.practical.h': 'Conseils pratiques',
    'gifts.label': 'Cadeaux', 'gifts.h2': 'Cadeaux',
    'gifts.lead': "Votre pr\u00e9sence est le plus beau des cadeaux. Si vous souhaitez tout de m\u00eame offrir quelque chose, plus d\u2019informations seront partag\u00e9es ici.",
    'gifts.honeymoon.h': 'Contribution au voyage de noces', 'gifts.wishlist.h': 'Liste de souhaits', 'gifts.personal.h': 'Cadeau personnel',
    'gallery.label': 'Galerie', 'gallery.h2': 'Nos aventures',
    'gallery.filter.all': 'Tout', 'gallery.filter.iceland': 'Islande', 'gallery.filter.proposal': 'Demande',
    'gallery.filter.us': 'Nous', 'gallery.filter.friends': 'Famille & amis',
    'ceremony.label': 'Ma\u00eetres de C\u00e9r\u00e9monie', 'ceremony.h2': 'Rencontrez nos ma\u00eetres de c\u00e9r\u00e9monie',
    'ceremony.lead': 'Nos ma\u00eetres de c\u00e9r\u00e9monie guideront la journ\u00e9e et r\u00e9pondront aux questions pratiques.',
    'faq.label': 'FAQ', 'faq.h2': 'Questions fr\u00e9quentes',
    'faq.q1': '\u00c0 quelle heure dois-je arriver\u00a0?',
    'faq.a1': "Veuillez arriver \u00e0 14h30 pour l\u2019accueil des invit\u00e9s, avant la c\u00e9r\u00e9monie \u00e0 15h00.",
    'faq.q2': 'Quel est le code vestimentaire\u00a0?', 'faq.a2': 'Chic estival formel. Consultez la section tenue vestimentaire pour plus de d\u00e9tails.',
    'faq.q3': 'Les enfants sont-ils les bienvenus\u00a0?', 'faq.a3': '[POLITIQUE ENFANTS \u00c0 AJOUTER]',
    'faq.q4': 'Puis-je amener un(e) accompagnateur/trice\u00a0?', 'faq.a4': '[POLITIQUE PLUS ONE \u00c0 AJOUTER]',
    'faq.q5': 'Y a-t-il un parking sur place\u00a0?', 'faq.a5': '[INFORMATIONS DE STATIONNEMENT \u00c0 AJOUTER]',
    'faq.q6': 'Les r\u00e9gimes alimentaires sont-ils pris en compte\u00a0?', 'faq.a6': '[POLITIQUE ALIMENTAIRE \u00c0 AJOUTER]',
    'faq.q7': 'Quel temps fera-t-il probablement\u00a0?', 'faq.a7': '[CONSEILS M\u00c9T\u00c9O \u00c0 AJOUTER]',
    'faq.q8': 'O\u00f9 puis-je s\u00e9journer\u00a0?', 'faq.a8': "[INFORMATIONS D\u2019H\u00c9BERGEMENT \u00c0 AJOUTER]",
    'faq.q9': 'Puis-je prendre des photos pendant la c\u00e9r\u00e9monie\u00a0?', 'faq.a9': '[POLITIQUE PHOTOS \u00c0 AJOUTER]',
    'faq.q10': 'Qui contacter en cas de questions\u00a0?', 'faq.a10': '[M\u00c9THODE DE CONTACT \u00c0 AJOUTER]',
    'guestbook.label': "Livre d\u2019Or", 'guestbook.h2': 'Laissez-nous un message',
    'guestbook.lead': "Nous pr\u00e9voyons d\u2019ajouter un livre d\u2019or plus pr\u00e8s du mariage.",
    'guestbook.example_label': 'Exemple de message',
    'guestbook.example_text': '"Nous vous souhaitons une vie pleine d\u2019amour et d\u2019aventures \u2014 nous avons h\u00e2te de f\u00eater \u00e7a avec vous\u00a0!"',
    'guestbook.placeholder': "Un livre d\u2019or sera disponible ici. Revenez bient\u00f4t.",
    'glossary.label': 'La langue de notre histoire', 'glossary.h2': 'Glossaire islandais',
    'glossary.intro': 'Un petit guide des mots et lieux islandais dans notre histoire.',
    'glossary.k.term': 'Kerlingarfj\u00f6ll', 'glossary.k.phonetic': 'KER-ling-ar-fy\u00f6tl',
    'glossary.k.translation': '\u201cLes montagnes des sorci\u00e8res\u201d',
    'glossary.k.desc': "Un massif volcanique dans les hautes terres d\u2019Islande, d\u00e9cor de notre demande en mariage.",
    'glossary.h.term': 'Hveradalir', 'glossary.h.phonetic': 'KVER-a-da-lir',
    'glossary.h.translation': '\u201cVall\u00e9e des sources chaudes\u201d',
    'glossary.h.desc': "Le c\u0153ur g\u00e9othermique de Kerlingarfj\u00f6ll, o\u00f9 des terres color\u00e9es fument pr\u00e8s de la mousse verte vive.",
    'glossary.a.term': '\u00c1stin finnur s\u00e9r lei\u00f0', 'glossary.a.phonetic': 'OWS-tin FIN-ur sair layth',
    'glossary.a.translation': "\u201cL\u2019amour trouve son chemin\u201d",
    'glossary.a.desc': "Notre citation de mariage islandaise. Les mots qui r\u00e9sonnent \u00e0 travers chaque montagne et vall\u00e9e de notre histoire.",
    'glossary.au.term': 'Aurora Borealis', 'glossary.au.phonetic': 'Latin\u00a0: \u201cAube bor\u00e9ale\u201d',
    'glossary.au.translation': 'Les Aurores Bor\u00e9ales',
    'glossary.au.desc': "Le spectacle lumineux \u00e9poustouflant de l\u2019Islande. Le vert de l\u2019aurore a inspir\u00e9 les couleurs de notre mariage.",
    'glossary.ast.term': '\u00c1st', 'glossary.ast.phonetic': 'owst',
    'glossary.ast.translation': '\u201cAmour\u201d en islandais',
    'glossary.ast.desc': "Le mot le plus simple pour l\u2019\u00e9motion la plus complexe. La raison de cette c\u00e9l\u00e9bration.",
    'glossary.nat.term': 'N\u00e1tt\u00fara', 'glossary.nat.phonetic': 'NOW-tu-ra',
    'glossary.nat.translation': '\u201cNature\u201d en islandais',
    'glossary.nat.desc': "La nature sauvage et indompt\u00e9e de l\u2019Islande \u2014 vall\u00e9es g\u00e9othermiques, hauts plateaux volcaniques, soleil de minuit \u2014 a fa\u00e7onn\u00e9 notre histoire.",
    'location.description': 'Une maison de campagne chaleureuse avec des salles classiques et un magnifique parc dans l\u2019Utrechtse Heuvelrug.',
    'location.travel.text': 'Rendez-vous \u00e0 la gare de Driebergen-Zeist. De l\u00e0, marchez ou prenez le bus. V\u00e9rifiez l\u2019itin\u00e9raire actuel via 9292 avant votre d\u00e9part.',
    'location.parking.text': 'Un parking est disponible \u00e0 Buitenplaats Sparrendaal.',
    'location.parking.link': 'Ouvrir l\u2019itin\u00e9raire du parking',
    'location.accom.text': 'Les informations sur l\u2019h\u00e9bergement suivront.',
    'location.taxi.text': 'Les informations sur les taxis et le transport suivront.',
    'rsvp.deadline_date': '[DATE \u00c0 AJOUTER]',
    'wedding.note': 'Les enfants, les animaux et les accompagnants ne sont pas invit\u00e9s. Les invitations personnelles indiquent qui est invit\u00e9.',
    'footer.thanks': 'Merci de c\u00e9l\u00e9brer avec nous.',
    'footer.nav.home': 'Accueil', 'footer.nav.rsvp': 'RSVP', 'footer.nav.faq': 'FAQ', 'footer.nav.gallery': 'Galerie',
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
  };

  const switchTo = (targetLang) => {
    if (!SUPPORTED.includes(targetLang)) return;
    lang = targetLang;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
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
     Gallery filtering
     ------------------------------------------------------------------ */
  const initGalleryFilter = () => {
    const filterButtons = document.querySelectorAll('.gallery-filters [data-filter]');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length === 0 || galleryItems.length === 0) {
      return;
    }

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        galleryItems.forEach((item) => {
          const category = item.getAttribute('data-category');
          const shouldShow = filter === 'all' || category === filter;
          item.classList.toggle('d-none', !shouldShow);
        });
      });
    });
  };

  /* ------------------------------------------------------------------
     Gallery lightbox modal with prev/next navigation
     ------------------------------------------------------------------ */
  const initGalleryLightbox = () => {
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    const modalEl = document.getElementById('galleryModal');

    if (galleryItems.length === 0 || !modalEl || typeof bootstrap === 'undefined') {
      return;
    }

    const modalImage = document.getElementById('galleryModalImage');
    const modalCaption = document.getElementById('galleryModalCaption');
    const prevBtn = document.getElementById('galleryModalPrev');
    const nextBtn = document.getElementById('galleryModalNext');
    const modalInstance = new bootstrap.Modal(modalEl);

    let currentIndex = 0;

    const getVisibleItems = () => galleryItems.filter(el => !el.classList.contains('d-none'));

    const showItem = (index) => {
      const visible = getVisibleItems();
      if (visible.length === 0) return;
      const total = visible.length;
      currentIndex = ((index % total) + total) % total;
      const item = visible[currentIndex];
      const img = item.querySelector('img');

      if (modalImage && img) {
        modalImage.src = img.getAttribute('src') || '';
        modalImage.alt = img.getAttribute('alt') || '';
      }
      if (modalCaption) {
        const captionEl = item.querySelector('.gallery-caption');
        modalCaption.textContent = captionEl ? captionEl.textContent.trim() : '';
      }
    };

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const visible = getVisibleItems();
        const idx = visible.indexOf(item);
        if (idx >= 0) {
          showItem(idx);
          modalInstance.show();
        }
      });
      item.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const visible = getVisibleItems();
          const idx = visible.indexOf(item);
          if (idx >= 0) {
            showItem(idx);
            modalInstance.show();
          }
        }
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', () => showItem(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => showItem(currentIndex + 1));
    }

    modalEl.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        showItem(currentIndex - 1);
      } else if (event.key === 'ArrowRight') {
        showItem(currentIndex + 1);
      }
    });
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
  initI18n();
  initCountdown();
  initOffcanvasClose();
  initTimelineReveal();
  initGalleryFilter();
  initGalleryLightbox();
  initBackToTop();
  initCopyrightYear();
  initNavbarScrollState();
});
