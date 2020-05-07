import React from 'react'

const Lang = {
    id: 'en',
    header: {
        navTitle: 'EarSaver',
        navInstructions: 'Instructions',
        navProduce: 'Start making',
        navContact: 'Contact',
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
            emailPlaceholder: 'Your email',
            emailDisclaimer: "We'll never share your email with anyone else.",
            messagePlaceholder: 'Your message..',
            submitButtonTitle: 'Send message'
        }
    },
    error: {
        title: 'Something went wrong',
        buttonTitle: 'Return to the homepage'
    }
}

export default Lang