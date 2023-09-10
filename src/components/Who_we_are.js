import React from 'react';
import "../Styles/About.css"
import AboutEYPBanner from '../assets/logos/partner_logos/AboutEYPBanner.jpg'

var data = {
    "about": {
        "cards": [
            {
                "about-network": "The European Youth Parliament has been working all around Europe for more than 35 years now. ",
            },
            {
                "about-eypge": "The European Youth Parliament Georgia (EYP GE) is a local branch of the EYP international network that has existed since 2008. EYP GE has hosted more than 60 sessions in various central and remote regions of Georgia and has reached up to 4500 participants in total",
            },
            {
                "our-values": "The core values of EYP Georgia are active citizenship and civic education through cooperation"
            }
        ]
    },
    "about-ge": {
        "cards": [
            {
                "about-eypge": "ევროპის ახალგაზრდული პარლამენტი - საქართველო (ე.ა.პ, საქართველო) არის ევროპის ახალგაზრდული პარლამენტთა ქსელის ქართული ფილიალი, რომელიც ფუნქციონირებს 2008 წლიდან. არსებობის განმავლობაში, ეაპ საქართველომ უმასპინძლა 60ზე მეტ სესიას როგორც საქართველოს დიდ ქალაქებში, ასევე რეგიონებში. სესიებმა შეკრიბა 4500ზე მეტი ახალგაზრდა 30ზე მეტი ქვეყნიდან.",
            },
            {
                "our-values": "ეაპ საქართველოს მთავარი მიზნებია აქტიური მოქალაქეობისა და მაღალი მოქალაქეობრივი პასუხისმგებლობის მქონე საზოგადოების ჩამოყალიბება გუდნური მუშაობის მეშვეობით"
            }
        ]
    }
}
data = [
    {
        "about-network": "The European Youth Parliament has been working all around Europe for more than 35 years now. ",
    },
    {
        "about-eypge": "The European Youth Parliament Georgia (EYP GE) is a local branch of the EYP international network that has existed since 2008. EYP GE has hosted more than 60 sessions in various central and remote regions of Georgia and has reached up to 4500 participants in total",
    },
    {
        "our-values": "The core values of EYP Georgia are active citizenship and civic education through cooperation"
    }
]
function about_card(card_info) {
    return (
        <div className='card' >
            <div className='aboutInfo'>
                <div className='newsHeader'>The International Network</div>
                <div className='newsInfo'>
                    <div className='newsText'> {card_info}</div>
                </div>
            </div>
             <img src='AboutEYPBanner' alt='about' className='AboutImage'></img>
         </div >
     )
}

function Who_we_are() {
    return (
        <div className='container'>
            <img src={AboutEYPBanner} alt='EYP Banner' className='AboutEYPBanner' key="0"></img>
            <h1 key={1}>
                EYP Georgia is an organisation!
            </h1>
            {
                cards()
            }
            {
                cards()
            }
            {
                cards()

            }
            <div className='card'>
                <div className='aboutInfo'>
                    <div className='newsHeader'>The International Network</div>
                    <div className='newsInfo'>
                        <div className='newsText'> The European Youth Parliament Georgia (EYP GE) is a local branch of the EYP international network that has existed since 2008. EYP GE has hosted more than 60 sessions in various central and remote regions of Georgia and has reached up to 4500 participants in total. </div>
                   </div>
                </div>
                <img src='AboutEYPBanner' alt='about' className='AboutImage'></img>
            </div>
        </div>
    )
    // Hi, I'm Nia, a 19 year-old Comp Science student at BME. I'm from Tbilisi, Georgia. I love puzzles, logic problems, mind games or games in general. I work as a project management intern, so hit me up to discuss agile workflow <3 8499203655

}

function cards() {
    for (const card in data) {
        about_card(card.va)
    }
    // Object.data
}
export default Who_we_are;