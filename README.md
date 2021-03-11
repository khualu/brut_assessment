# Assessment Brût Communicatie
In this repo I will be logging my progression for the assessment I need to make. 
This will also work as a platform to show the results of the exercises. 

## Interesting endpoint parameters
```

```

## 1. Wordpress REST API + Framework


## 2. CSS + Preprocessor(s)
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
Persoonlijk, ben ik erg fan van Google Fonts. Er is telkens meer beschikbaar en de licenties zijn makkelijk. Je kan ze altijd gratis gebruiken in producten, zolang je de fonts zelf niet door verkoopt. Daarnaast geeft het je ook combinaties fonts die prettig leesbaar zijn. Een combinatie die ik zelf heel fijn vind zijn:
* Playfair Display
* Roboto

```css 
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap');
```


> **Probleemstelling 2:** We gaan op de website een layout gebruiken die variabel is tussen full-width, 2 blokken en 3 blokken. (100%, 50%, 33%). De container is al gemaakt alleen zoeken wij een makkelijke manier om deze blokken toe te kunnen voegen aan verschillende classes. Deze krijgen namelijk op hun buurt weer allemaal aparte styling.

> **Probleemstelling 3:** Er is een nieuwsoverzicht gemaakt, de nieuwsitems moeten met z'n 3en naast elkaar gaan staan met evenveel spacing er tussen. Zodra de breedte van het scherm een bepaalde breakpoint bereikt moeten ze netjes onder elkaar komen te staan.