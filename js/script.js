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
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Dresscode', 'nav.gifts': 'Cadeaus',
    'nav.gallery': 'Galerij', 'nav.ceremony': 'Ceremoniemeesters',
    // Hero
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
    'wedding.note': 'Kinderen en huisdieren blijven deze dag thuis, zodat iedereen onbezorgd van het feest kan genieten. We nodigen graag precies de mensen uit die op jullie persoonlijke uitnodiging staan.',
    'wedding.photo_note': "Tijdens de ceremonie hebben we een professionele fotograaf en vragen we jullie om telefoons weg te leggen. Buiten de ceremonie zijn jullie vrij om foto\'s en filmpjes te maken. Film je? Houd je telefoon dan horizontaal. En vooral: wees samen met ons in het moment.",
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
    'rsvp.deadline': 'Reageer voor:', 'rsvp.deadline_date': '20 mei 2027', 'rsvp.btn': 'Open RSVP-formulier',
    'rsvp.privacy': 'Je RSVP-gegevens worden uitsluitend gebruikt voor de organisatie van ons huwelijk en relevante communicatie.',
    // Dress Code
    'dresscode.label': 'Wat te dragen', 'dresscode.h2': 'Dresscode',
    'dresscode.theme': 'Formele zomerse chic',
    'dresscode.lead': 'Vier mee in elegante zomerse kleding. Kies iets feestelijks, comfortabel en passend bij de locatie.',
    'dresscode.style.h': 'Stijl', 'dresscode.colours.h': 'Kleuren', 'dresscode.practical.h': 'Praktische opmerkingen',
    // Gifts
    'gifts.label': 'Cadeaus', 'gifts.h2': 'Cadeaus',
    'gifts.lead': 'Jouw aanwezigheid is het mooiste cadeau. Als je toch iets wilt geven, volgt hier binnenkort meer informatie.',
    'gifts.honeymoon.h': 'Bijdrage aan huwelijksreis', 'gifts.honeymoon.text': 'Willen jullie ons iets geven? Een bijdrage aan onze huwelijksreis is van harte welkom en helpt ons om samen nieuwe herinneringen te maken.',
    'gifts.wishlist.h': 'Verlanglijst', 'gifts.wishlist.text': 'Weten jullie iets waarvan jullie zeker weten dat het bij ons past? Dan zijn we natuurlijk blij met een persoonlijk cadeau. Anders is een bijdrage aan onze huwelijksreis altijd een fijne keuze.',
    // Gallery
    'gallery.label': 'Galerij', 'gallery.h2': 'Onze avonturen',
    'gallery.filter.all': 'Alles', 'gallery.filter.iceland': 'IJsland', 'gallery.filter.proposal': 'Aanzoek',
    'gallery.filter.us': 'Wij', 'gallery.filter.friends': 'Familie & vrienden',
    // Ceremony Masters
    'ceremony.label': 'Ceremoniemeesters', 'ceremony.h2': 'Ontmoet onze ceremoniemeesters',
    'ceremony.lead': 'Onze ceremoniemeesters begeleiden de dag en beantwoorden praktische vragen.',
    // Footer
    'footer.thanks': 'Dank je wel dat je dit met ons viert.',
    'footer.nav.home': 'Home', 'footer.nav.rsvp': 'RSVP', 'footer.nav.gallery': 'Galerij',
    'footer.backtop': 'Terug naar boven \u2191',
    'footer.privacy': 'Deze site gebruikt geen analytics of tracking. RSVP-gegevens worden verwerkt via Microsoft Forms.',
    'lang.label': 'Taal',
  },

  en: {
    'nav.home': 'Home', 'nav.more': 'More', 'nav.story': 'Our story', 'nav.journey': 'Our journey',
    'nav.proposal': 'The proposal', 'nav.wedding': 'Wedding day', 'nav.location': 'Location',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Dress code', 'nav.gifts': 'Gifts',
    'nav.gallery': 'Gallery', 'nav.ceremony': 'Ceremony masters',
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
    'wedding.note': 'Children and pets will stay at home so everyone can enjoy the celebration carefree. We are inviting exactly the people named on their personal invitation.',
    'wedding.photo_note': 'We have a professional photographer during the ceremony, so please put your phones away. Outside the ceremony, feel free to take photos and videos. If you film, please hold your phone horizontally. Above all, be present in the moment with us.',
    'location.label': 'Venue', 'location.h2': 'Getting There',
    'location.description': 'An atmospheric country house with classic rooms and a beautiful park garden in the Utrechtse Heuvelrug.',
    'location.travel.h': 'Travel', 'location.travel.text': 'Travel to Driebergen-Zeist station. From there, walk or take a bus. Check the current route via 9292 shortly before you leave.',
    'location.parking.h': 'Parking', 'location.parking.text': 'Parking is available at Buitenplaats Sparrendaal.', 'location.parking.link': 'Open parking route',
    'location.accom.h': 'Accommodation', 'location.accom.text': 'Accommodation information will follow.',
    'location.taxi.h': 'Taxi & Transport', 'location.taxi.text': 'Taxi and transport information will follow.',
    'location.directions_btn': 'Open Directions',
    'rsvp.label': 'RSVP', 'rsvp.h2': 'Will You Join Us?',
    'rsvp.lead': 'We would love to celebrate with you. Please let us know whether you can attend.',
    'rsvp.deadline': 'Please respond before:', 'rsvp.deadline_date': '20 May 2027', 'rsvp.btn': 'Open RSVP Form',
    'rsvp.privacy': 'Your RSVP details will only be used to organize our wedding and communicate relevant wedding information.',
    'dresscode.label': 'What to Wear', 'dresscode.h2': 'Dress Code',
    'dresscode.theme': 'Formal Summer Chic',
    'dresscode.lead': 'Celebrate with us in elegant summer attire. Choose something festive, comfortable, and suitable for the venue.',
    'dresscode.style.h': 'Style', 'dresscode.colours.h': 'Colours', 'dresscode.practical.h': 'Practical Notes',
    'gifts.label': 'Gifts', 'gifts.h2': 'Gifts',
    'gifts.lead': 'Your presence is the greatest gift. If you would still like to give something, more information will be shared here.',
    'gifts.honeymoon.h': 'Honeymoon Contribution', 'gifts.honeymoon.text': 'If you would like to give us something, a contribution towards our honeymoon would be warmly welcomed and will help us create new memories together.',
    'gifts.wishlist.h': 'Wishlist', 'gifts.wishlist.text': 'If you know of something you are sure would suit us, a personal gift is always lovely. Otherwise, a contribution towards our honeymoon is a wonderful choice.',
    'gallery.label': 'Gallery', 'gallery.h2': 'Our Adventures',
    'gallery.filter.all': 'All', 'gallery.filter.iceland': 'Iceland', 'gallery.filter.proposal': 'Proposal',
    'gallery.filter.us': 'Us', 'gallery.filter.friends': 'Friends & Family',
    'ceremony.label': 'Ceremony Masters', 'ceremony.h2': 'Meet Our Ceremony Masters',
    'ceremony.lead': 'Our ceremony masters will help guide the day and answer practical questions.',
    'footer.thanks': 'Thank you for celebrating with us.',
    'footer.nav.home': 'Home', 'footer.nav.rsvp': 'RSVP', 'footer.nav.gallery': 'Gallery',
    'footer.backtop': 'Back to top \u2191',
    'footer.privacy': 'This site does not use analytics or tracking. RSVP data is processed only via Microsoft Forms.',
    'lang.label': 'Language',
  },

  fr: {
    'nav.home': 'Accueil', 'nav.more': 'Plus', 'nav.story': 'Notre histoire', 'nav.journey': 'Notre voyage',
    'nav.proposal': 'La demande', 'nav.wedding': 'Le mariage', 'nav.location': 'Lieu',
    'nav.rsvp': 'RSVP', 'nav.dresscode': 'Tenue', 'nav.gifts': 'Cadeaux',
    'nav.gallery': 'Galerie', 'nav.ceremony': 'Ma\u00eetres de C\u00e9r\u00e9monie',
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
    'wedding.note': 'Nous c\u00e9l\u00e9brons cette journ\u00e9e entre adultes. Les enfants et les animaux resteront \u00e0 la maison afin que chacun puisse profiter pleinement de la f\u00eate. Nous invitons exactement les personnes indiqu\u00e9es sur leur invitation personnelle.',
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
    'gifts.lead': "Votre pr\u00e9sence est le plus beau des cadeaux. Si vous souhaitez tout de m\u00eame offrir quelque chose, plus d\u2019informations seront partag\u00e9es ici.",
    'gifts.honeymoon.h': 'Contribution au voyage de noces', 'gifts.honeymoon.text': 'Si vous souhaitez nous offrir quelque chose, une contribution pour notre voyage de noces sera chaleureusement accueillie et nous aidera à créer de nouveaux souvenirs ensemble.',
    'gifts.wishlist.h': 'Liste de souhaits', 'gifts.wishlist.text': 'Si vous connaissez quelque chose qui nous correspond vraiment, un cadeau personnel nous fera plaisir. Sinon, une contribution à notre voyage de noces est une très belle idée.',
    'gallery.label': 'Galerie', 'gallery.h2': 'Nos aventures',
    'gallery.filter.all': 'Tout', 'gallery.filter.iceland': 'Islande', 'gallery.filter.proposal': 'Demande',
    'gallery.filter.us': 'Nous', 'gallery.filter.friends': 'Famille & amis',
    'ceremony.label': 'Ma\u00eetres de C\u00e9r\u00e9monie', 'ceremony.h2': 'Rencontrez nos ma\u00eetres de c\u00e9r\u00e9monie',
    'ceremony.lead': 'Nos ma\u00eetres de c\u00e9r\u00e9monie guideront la journ\u00e9e et r\u00e9pondront aux questions pratiques.',
    'location.description': 'Une maison de campagne chaleureuse avec des salles classiques et un magnifique parc dans l\u2019Utrechtse Heuvelrug.',
    'location.travel.text': 'Rendez-vous \u00e0 la gare de Driebergen-Zeist. De l\u00e0, marchez ou prenez le bus. V\u00e9rifiez l\u2019itin\u00e9raire actuel via 9292 avant votre d\u00e9part.',
    'location.parking.text': 'Un parking est disponible \u00e0 Buitenplaats Sparrendaal.',
    'location.parking.link': 'Ouvrir l\u2019itin\u00e9raire du parking',
    'location.accom.text': 'Les informations sur l\u2019h\u00e9bergement suivront.',
    'location.taxi.text': 'Les informations sur les taxis et le transport suivront.',
    'rsvp.deadline_date': '[DATE \u00c0 AJOUTER]',
    'wedding.note': 'Les enfants, les animaux et les accompagnants ne sont pas invit\u00e9s. Les invitations personnelles indiquent qui est invit\u00e9.',
    'footer.thanks': 'Merci de c\u00e9l\u00e9brer avec nous.',
    'footer.nav.home': 'Accueil', 'footer.nav.rsvp': 'RSVP', 'footer.nav.gallery': 'Galerie',
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

const initSiteLoader = () => {
  const loader = document.getElementById('site-loader');
  if (!loader) {
    return;
  }

  const finishLoading = () => {
    document.body.classList.add('page-ready');
    document.dispatchEvent(new CustomEvent('site-ready'));
    loader.classList.add('is-ready');
    document.body.removeAttribute('aria-busy');
    const targetId = window.location.hash.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'auto' }));
    }
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
  if (!iframe) {
    return;
  }

  const loadForm = () => {
    if (!iframe.src) {
      iframe.src = iframe.dataset.src;
    }
  };

  if (!('IntersectionObserver' in window)) {
    loadForm();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries.some((entry) => entry.isIntersecting)) {
      loadForm();
      observer.disconnect();
    }
  }, { rootMargin: '300px 0px' });

  observer.observe(iframe);
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
      window.clearInterval(fallbackInterval);
      game.classList.add('is-won');
      status.textContent = text('wind.status_success');
      if (stream) stream.getTracks().forEach((track) => track.stop());
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resetTimeout = window.setTimeout(() => {
        won = false;
        stream = undefined;
        animationFrame = undefined;
        game.classList.remove('is-won', 'is-windy');
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
        const detectedWind = Math.min(100, Math.max(0, (average - 2.2) * 22));
        update(windLevel * 0.2 + detectedWind * 0.8);
        animationFrame = window.requestAnimationFrame(sample);
      };
      sample();
    } catch {
      status.textContent = text('wind.status_unavailable');
    }
  });
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
    if (entries.some((entry) => entry.isIntersecting && document.body.classList.contains('page-ready'))) {
      createHearts();
      imageWrap.classList.add('hearts-visible');
      observer.disconnect();
    }
  }, { threshold: 0.45 });
  observer.observe(imageWrap);

  document.addEventListener('site-ready', () => {
    const bounds = imageWrap.getBoundingClientRect();
    const isVisible = bounds.top < window.innerHeight * 0.55 && bounds.bottom > window.innerHeight * 0.45;
    if (isVisible) {
      createHearts();
      imageWrap.classList.add('hearts-visible');
      observer.disconnect();
    }
  }, { once: true });
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
  initSiteLoader();
  initI18n();
  initPersonalInvitation();
  initWindGame();
  initLazyRsvp();
  initStoryHearts();
  initCountdown();
  initOffcanvasClose();
  initTimelineReveal();
  initGalleryFilter();
  initGalleryLightbox();
  initBackToTop();
  initCopyrightYear();
  initNavbarScrollState();
});
