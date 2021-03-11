# Assessment Brût Communicatie
In this repo I will be logging my progression for the assessment I need to make. 
This will also work as a platform to show the results of the exercises. 

## 1. Wordpress REST API + Framework
Dit was een onwijs leuke opdracht, dat ten eerste. Het was de eerste keer dat ik met de headless API van Wordpress heb gewerkt. Ik heb wel vaker in `NodeJS` zelf REST API's geschreven om zo kleine servers te draaien. Het was onwijs leerzaam. 

De bestanden van de opdracht zijn te checken in de repo. 
De stappen hiervoor zijn: 
```
git clone khualu/brut_assessment 
cd brut_assessment

npm install

node index.js
```

## 2. CSS + Preprocessor(s)
### Vraag 1
> **Probleemstelling 1:** We zijn bezig met een website, maar de klant weet nog niet specifiek welke kleuren en/of lettertypes deze wilt gaan gebruiken op de site. 

#### Kleuren
In het geval van kleuren zal ik iets kiezen wat het bedrijf al gebruikt. De site moet een gevoel geven die het bedrijf representeert. Dus daar zou mijn eerste gevoel op gaan. Er zijn wel denk ik specifieke kleuren(combinaties) die je beter kan vermijden. Sommige kleuren (specifieke tinten geel) zijn te vel voor een scherm, dat kijkt niet prettig. Lichte kleuren met witte tekst erop is ook iets wat beter vermeden kan worden. 

Vaak maak ik als eerst gebruik van applicaties als [coolors.co](https://coolors.co/). Waarbij rond kan kijken naar kleurenpaletten met 5 kleuren erin. Je hebt ook de mogelijkheid om als kleuren in te stellen en vervolgens zoekt het algeritme passende kleuren om het palet af te maken. 

```scss
/* SCSS HEX */
$black: #000000ff;
$eggshell: #f3efe0ff;
$aquamarine: #7fefbdff;
$satin-sheen-gold: #cba135ff;
$black-2: #000000ff;
```

#### Fonts
Persoonlijk, ben ik erg fan van Google Fonts. Er is telkens meer beschikbaar en de licenties zijn makkelijk. Je kan ze altijd gratis gebruiken in producten, zolang je de fonts zelf niet door verkoopt. Daarnaast geeft het je ook combinaties fonts die prettig leesbaar zijn. Een combinatie die ik zelf heel fijn vind is:
* Playfair Display
* Roboto

```scss 
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap');
```
![](https://raw.githubusercontent.com/khualu/brut_assessment/main/public/images/fonts.PNG)

### Vraag 2
> **Probleemstelling 2:** We gaan op de website een layout gebruiken die variabel is tussen full-width, 2 blokken en 3 blokken. (100%, 50%, 33%). De container is al gemaakt alleen <u>zoeken wij een makkelijke manier om deze blokken toe te kunnen voegen aan verschillende classes</u>. Deze krijgen namelijk op hun buurt weer allemaal aparte styling.

#### Alle wegen leiden naar Rome
Als ik de vraag goed begrijp, dan wordt er bedoeld hoe ik telkens classes toe kan voegen aan hetzelfde blok onder verschillende omstandigheden. Dus als we uitgaan van deze classes die de `container` (`.container`) en `blokken` (`.child`) representeren:


Dan zou je iets kunnen hebben als dit:
```scss
@mixin opmaak-1 {
    // STYLING GOES HERE
}

@mixin opmaak-2 {
    // STYLING GOES HERE
}

// DIT ZOU DAN DE FULL WIDTH LAYOUT ZIJN
.child {
    @include opmaak-1 {
        // EXTRA OPMAAK INDIEN NODIG
    }
}

@media (min-width: $breakpoint) {
    .child {
        @include opmaak-2
    }
}
```

#### Uitleg
Met `@mixin` kan je in `SCSS` classes maken om opmaak toe te voegen aan bestaande classes of elementen. Daarnaast kan je indien van toepassing het toevoegen van deze `@mixin` classes conditional maken. Dus met een breakpoint zoals hier boven, of met `@if (condition)`.

#### Alternatief
Een andere manier om dit te doen is met javascript. Vraagt wel wat meer werk soms, maar is ook mogelijk. En dan met conditions aangeven wanneer de `.child` een nieuwe class toegevoegd krijgt. Dit verder nog steeds in combinatie met `flexbox` op de `.container` en dan verschillende `max-width`.

```javascript
const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const blokken = document.getElementsByClass('child')

if (width > 600) {
    blokken.classList.toggle('2-column')
} else if (width > 1000) {
    blokken.classList.toggle('2-column')
    blokken.classList.toggle('3-column')
}
```

### Vraag 3
> **Probleemstelling 3:** Er is een nieuwsoverzicht gemaakt, de nieuwsitems moeten met z'n 3en naast elkaar gaan staan met evenveel spacing er tussen. Zodra de breedte van het scherm een bepaalde breakpoint bereikt moeten ze netjes onder elkaar komen te staan.

_(Even plagen, maar volgens mij insinueer je dat je desktop first werkt met hoe de vraag gesteld is. Beetje jammer, hahaha.)_

De uitvoering kan je checken door naar `./breakpoints_site` te gaan en dan `breakpoint.html` te runnen met live server in VScode of de code editor die jij gebruikt. De relevante `SCSS` zit hieronder.

```scss
$screen-sm-min: 600px;          /* Small devices (portrait tablets and large phones, 600px and up) */
$screen-med-min: 768px;         /* Medium devices (landscape tablets, 768px and up) */
$screen-lg-min: 992px;          /* Large devices (laptops/desktops, 992px and up) */
$screen-xl-min: 1200px;         /* Extra large devices (large laptops and desktops, 1200px and up) */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Roboto&display=swap');

main {
    border: 2px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    article {
        border: 2px solid rgb(105, 105, 105);
        text-align: center;
        min-width: 90%;
        min-height: 200px;
        margin: 10px;

        h2 {
            font-family: 'Playfair Display';
            font-weight: 700;
        }

        p {
            font-family: 'Roboto';
            margin: 20px;
        }
    }
}

@media (min-width: $screen-sm-min) {
    main {
        article {
            min-width: 35%;
            max-width: 45%;
            min-height: 300px;
        }
    }
}

@media (min-width: $screen-xl-min) {
    main {
        article {
            min-width: 20%;
            max-width: 30%;
            min-height: 300px;
        }
    }
}
```

## Open vraag
> “Ik ben een makelaar en ben opzoek naar een nieuwe website. Mijn woningen staat allemaal op het CMS/CRM van realworks maar ik vind de standaard websites die dit platform aanbiedt te generiek. Ik wil niet via twee platformen mijn site onderhouden, ik hoorde dat WordPress sites tegenwoordig de norm zijn. Kunnen jullie mij hierin iets adviseren / aanbieden?”

_Wat voor advies zou ik geven aan een klant met dit verhaal._

Samenvattend zijn er een aantal belangrijke punten:
* Klant wil een nieuwe site
* Sites van Realworks zijn te generiek voor klant
* Al het onroerend goed van klant staat al online op Realworks CMS/CRM
* Klant wil niet op twee verschillende websites onderhouden
* Klant vraagt naar mogelijkheden met Wordpress

Na een korte zoektocht vond ik dat Realworks een API heeft voor hun CMS/CRM. Dus dit is al goed nieuws. Zo ten zien is er voor elke functionaliteit die Realworks biedt een API gemaakt waarmee data kan worden geëxporteerd en geïmporteerd. 

Mijn advies aan de klant is dat wij een nieuwe website voor hem gaan maken, waarbij we de informatie van zijn Realworks site gaan gebruiken. Daarnaast ook het advies aan de klant om Wordpress te vergeten. 

In dit geval biedt Wordpress niets wat meerwaarde heeft over het CMS van Realworks. Daarnaast heeft de klant alle data al in het Realworks CMS staan. Het zou zonde zijn van geld en tijd voor het project als al deze informatie overgezet moest worden naar een Wordpress site. 

In deze nieuwe site kunnen we alle informatie uit het Realworks CMS trekken en laten zien. Met daarnaast ook de mogelijkheid om van uit de nieuwe site data naar het Realworks CRM te sturen door middel van forms en andere functionaliteiten. Zo heeft de klant aan de voorkant de nieuwe site die wij voor hem gemaakt hebben, met alle benodigde functionaliteiten. Hierdoor heeft hij niet een generieke Realworks site, en behoudt hij wel het gemakt dat alle onderhoud gedaan kan worden in de admin van Realworks. Dus geen onderhoud/beheer van twee verschillende sites. Één systeem voor de backend en data, en één pagina die de klanten zien. 
