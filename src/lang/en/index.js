import React from 'react'

const Lang = {
    id: 'en',
    header: {
        navTitle: 'EarSaver',
        navInstructions: 'Instructions',
        navProduce: 'Start making',
        navContact: 'Contact',
        navAbout: 'About us',
        navDonate: 'Donate',
        heroTitle: 'Increased comfort for healthcare workers',
        heroSubtitle1: 'Wearing a face mask for extended periods of time adds unwanted strain to the ears and can cause headaches. EarSaver is a simple DIY solution to this problem.',
        heroSubtitle2: 'Our aim is to provide every healthcare worker with an EarSaver.',
        heroSubtitle3: 'Request yours here - completely free of charge, no strings attached!',
        requestButtonTitle: 'Request a batch for free'
    },
    instructions: {
        title: 'How To Use',
        steps: [
            {
                title: '1. Clean before and after use',
                description: 'Easily clean the EarSaver using desinfecting alcohol.'
            },
            {
                title: '2. Attach one side',
                description: 'Before putting on your face mask, attach one of the elastic bands to the EarSaver.'
            },
            {
                title: '3. Hold in place',
                description: 'With one elastic band attached, hold the EarSaver in place on the back of your head.'
            },
            {
                title: '4. Attach other side',
                description: 'While holding the EarSaver in place, attach the second elastic band.'
            },
            {
                title: '5. Adjust for comfort',
                description: 'Adjust the tightness and placement of the EarSaver.'
            }            
        ]
    },
    produce: {
        title: 'Make EarSavers',
        paragraph1: 'Wanna help out? You can start making EarSavers yourself!',
        paragraph2: <>If you have access to a 3D printer you can easily print the 3D model. <br/>
        We use a PU resin to cast the EarSavers. We made a video detailing the process.</>,
        paragraph3: <>Would you like to make molds, pour EarSavers or produce them in another way? <br/>
        We'd love to help you get started - get in touch through the form below.</>,
        downloadButtonTitle: 'Download STL file'
    },
    contact: {
        title: 'Get in touch!',
        paragraph: <>Would you like to request a batch of EarSavers for you and your co-workers? Or do you have any feedback you'd like to share with the team?<br/><br/>
        We love to hear from you!<br/><br/>
        Please fill in the form below and we will get back to you as soon as possible.</>,
        form: {
            order: {
                title: 'Request EarSavers',
                namePlaceholder: 'Your name',
                nameDisclaimer: 'Please fill in your name',
                emailPlaceholder: 'Your email',
                emailDisclaimer: "We'll never share your email with anyone else",
                organisationPlaceholder: 'Organisation',
                organisationHelp: 'Please tell use for which organisation you work',
                quantityHelp: 'How many EarSavers would you like? Maximum 10',
                messagePlaceholder: 'Your message..',
                submitButtonTitle: 'Request',
                disabledText: 'We are currently not taking orders due to the overwhelming interest. Please come back later to request your EarSavers. Sorry!'
            },
            general: {
                title: 'Contact us',
                namePlaceholder: 'Your name',
                nameDisclaimer: 'Please fill in your name',
                emailPlaceholder: 'Your email',
                emailDisclaimer: "We'll never share your email with anyone else.",
                messagePlaceholder: 'Your message..',
                submitButtonTitle: 'Send message'
            }
        }
    },
    about: {
        title: 'About us',
        paragraph1: <>We're a group of friends and coworkers based in Amsterdam who feel it's necessary to help out during this crisis.
        Our aim is to use simple, scaleable production methods to maximise our reach - both within the caregivers who need an EarSaver and makers who want to help out as well.</>,
        donateTitle: 'Donate',
        paragraph2: <>Our aim is to provide every healthcare worker with an EarSaver. To achieve this we need to produce and then distribute EarSavers.
        We pay for this ourselves.
        However, these costs can quickly become an issue if demand is as high as we believe it is. Your donation would help us a lot.
        With enough donations we can keep making EarSavers until it is no longer needed!<br/><br/>
        The cost of making an EarSaver is around €0.50. That means that a donation of €5 is enough to make sure 10 healthcare workers get an EarSaver!</>,
        donateButtonTitle: 'Donate at GoFundMe',
        donatedParagraph: (num) => (<>So far <span className="h3">{num}</span> EarSavers have been donated!</>)
    },
    error: {
        title: 'Something went wrong',
        buttonTitle: 'Return to the homepage'
    }
}

export default Lang