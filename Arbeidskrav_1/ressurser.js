const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

const buttons = document.querySelectorAll('.page-button'); //Velger alle elementene med klassen '.page-button', fra index.html. Kilde:https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
    const tabPages = document.querySelectorAll('.tab-page'); //Samme som over, men med '.tab-page'.

    function updateTabContent(index) {//Funksjon for å oppdatere innholdet i tab/fanen basert på hvilken index (hvilken side)
        const pageContent = resources[index]; // Finner elementet direkte ved hjelp av indeksen

        //Setter inn innholdet spesifisert <h2>, <p> osv. fra ressurser og setter det inn i HTML-en.
        tabPages[index].innerHTML = `
            <h2>${pageContent.category}</h2>
            <p>${pageContent.text}</p>
            <ul> <!-- Bruker <ul> for å ha en usortert liste som inneholder lenker for hver kilde fra "sources" -->
                ${pageContent.sources.map(function(source) { //Bruker .map for å lage ny liste med <li>-element for hver "source"
                    return `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`;
                }).join('')} <!-- .join() legger til alle listeverdiene sammen. -->
            </ul>`;
    }

    buttons.forEach(function(button, index) { //For hver knapp //Kilde for "forEach": https://www.w3schools.com/jsref/jsref_forEach.asp
        button.addEventListener('click', function() { //Legger til eventlistener på hver knapp

            tabPages.forEach(function(page) { //For hver side/fane
                page.classList.remove('active'); //Fjern 'active'. Slikt at innholdet ikke vises
            });
            buttons.forEach(function(button) { //For hver knapp
                button.classList.remove('active'); //Fjern 'active'. Slikt at knappen ikke funker eller lyser opp
            });

            tabPages[index].classList.add('active'); //Legger til funksjonen 'active' på siden som blir trykket på
            buttons[index].classList.add('active'); //Legger til funksjonen 'active' på knappen som blir trykket på

            updateTabContent(index); //Oppdater innholdet i fanen/siden
        });
    });


    const htmlTabIndex = resources
        .map(function(resource, position) { //.map går gjennom hvert element i arrayen
            if (resource.category === "HTML") { //Spesifiserer hva .map skal sjekke etter. I dette tilfellet er det objekter med kategori "HTML"
                return position;  //Hvis vi har funnet riktig, returnerer den posisjonen for elementet
            }
        })
        .filter(function(index) { //.filter leter gjennom arrayen som .map har laget
            return index !== undefined;  //Spesifiserer hva .filter skal lete etter. I dette tilfellet leter vi etter "undefined" verdier, verdier som ikke er HTML. De med "undefined" får ikke bli med.
        })[0]; //Henter den første verdien fra listen 

    tabPages[htmlTabIndex].classList.add('active');  //Legger til 'active' til HTML-tabben, slik at siden er aktiv når den lastes inn
    buttons[htmlTabIndex].classList.add('active');  //Legger til 'active' til HTML-knappen, slik at knappen til siden er aktiv når den lastes inn
    updateTabContent(htmlTabIndex);  //Laster inn innholdet til HTML-siden, slik at innholdet vises ved innlasting
