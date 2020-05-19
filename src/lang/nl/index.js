import React from 'react'

const Lang = {
    id: 'nl',
    header: {
        navTitle: 'EarSaver',
        navInstructions: 'Instructies',
        navProduce: 'Maak zelf',
        navContact: 'Contact',
        navAbout: 'Over ons',
        navDonate: 'Doneer',
        heroTitle: 'Meer comfort voor zorgmedewerkers',
        heroSubtitle1: 'Het langdurig dragen van een mondkapje geeft ongewenste druk op de oren en kan hoofdpijn veroorzaken. EarSaver is een simpele DIY oplossing voor dit probleem.',
        heroSubtitle2: 'Wij willen ervoor zorgen dat iedere zorgmedewerker een EarSaver heeft.',
        heroSubtitle3: 'Bestel hier jouw EarSaver - het is helemaal gratis!',
        requestButtonTitle: 'Bestel gratis'
    },
    instructions: {
        title: 'Hoe werkt het?',
        steps: [
            {
                title: '1. Maak schoon',
                description: 'Voor en na gebruik kan de EarSaver makkelijk schoongemaakt worden met alcohol.'
            },
            {
                title: '2. Bevestig één kant',
                description: 'Bevestig eerst één van de elastiekjes van het mondkapje aan de EarSaver.'
            },
            {
                title: '3. Plaats achterop hoofd',
                description: 'Plaats de EarSaver achterop je hoofd terwijl je het mondkapje opzet.'
            },
            {
                title: '4. Bevestig de andere kant',
                description: 'Bevestig het andere elastiekje aan de EarSaver.'
            },
            {
                title: '5. Zorg dat het lekker zit',
                description: 'Je kunt aanpassen hoe strak de EarSaver zit.'
            }
        ]
    },
    produce: {
        title: 'Maak zelf EarSavers',
        paragraph1: 'Help je mee? Je kunt zelf ook EarSavers maken!',
        paragraph2: <>Als je een 3D printer tot je beschikking hebt kun je eenvoudig het 3D model printen. <br/>
        Wij zelf gieten EarSavers met een urethaan hars, hiervoor hebben we een instructie video gemaakt.</>,
        paragraph3: <>Wil je zelf ook mallen maken, gieten, of op een andere manier EarSavers produceren? <br/>
        We helpen je graag op weg. Neem contact op via het formulier!</>,
        downloadButtonTitle: 'Download STL bestand'
    },
    contact: {
        title: 'Contact',
        paragraph: <>Zouden jij en je collega's graag een EarSaver willen? Of heb je de EarSaver gebruikt en heb je een idee voor een verbetering?<br/><br/>
        We horen graag van je!<br/><br/>
        Vul hier je email en bericht in en we komen zo snel mogelijk bij je terug.</>,
        form: {
            order: {
                title: 'Bestellen',
                namePlaceholder: 'Jouw naam',
                nameDisclaimer: 'Vul hier je naam in',
                emailPlaceholder: 'Jouw email',
                emailDisclaimer: 'We zullen je email nooit met anderen delen',
                organisationPlaceholder: 'Organisatie',
                organisationHelp: 'Vul hier in voor welke organisatie je werkt',
                quantityHelp: 'Geef hier aan hoeveel EarSavers je nodig hebt',
                messagePlaceholder: 'Jouw bericht..',
                submitButtonTitle: 'Bestel'
            },
            general: {
                title: 'Contact',
                namePlaceholder: 'Jouw naam',
                nameDisclaimer: 'Vul hier je naam in',
                emailPlaceholder: 'Jouw email',
                emailDisclaimer: 'We zullen je email nooit met anderen delen.',
                messagePlaceholder: 'Jouw bericht..',
                submitButtonTitle: 'Stuur bericht'
            }
        }
    },
    about: {
        title: 'Over ons',
        paragraph1: <>Wij zijn een groep vrienden en collega's uit Amsterdam die het belangrijk vinden om iets te kunnen bijdragen in deze crisis. 
        Door het inzetten van eenvoudige, schaalbare productiemethoden hopen we zo veel mogelijk mensen te bereiken - zowel zorgmedewerkers die baat hebben bij een EarSaver als makers die een steentje willen bijdragen.</>,
        donateTitle: 'Doneren',
        paragraph2: <>Wij willen ervoor zorgen dat iedere zorgmedewerker een EarSaver heeft. Om dat te bereiken moeten er EarSavers geproduceerd worden en vervolgens gedistribueerd.
        Wij dragen hier in principe zelf de kosten voor.
        Dat neemt niet weg dat deze kosten snel kunnen oplopen als de vraag zo groot is als wij denken. We zouden enorm geholpen worden door jouw donatie. 
        Met genoeg donaties kunnen we EarSavers blijven maken tot het niet meer nodig is!<br/><br/>
        Het maken van een EarSaver kost ongeveer €0.50. Dat betekent dat een donatie van 5 euro genoeg is om 10 zorgmedewerkers te helpen!</>,
        donateButtonTitle: 'Doneer op GoFundMe',
        donatedParagraph: (num) => (<>Er zijn tot nu toe <span className="h3">{num}</span> EarSavers gedoneerd!</>)
    },
    error: {
        title: 'Er is iets misgegaan',
        buttonTitle: 'Ga terug naar de homepage'
    }
}

export default Lang