import React from 'react'
import '../Styles/Contact.css'

function Contact() {
  const address = <div>
    European Youth Parliament - Georgia <br/>
    Chavchavadze Avenue, 36<br/>
    0179, Tbilisi, Georgia<br/>
  </div>
  const phone = <div>
    Telephone:+995 555 93 76 65 (Mon - Fri: 10 a.m. - 4:30 p.m.)
  </div>
  const email = <div>
    Email:
     <a href = "mailto: info@eyp.org.ge" className='linki'>info@eyp.org.ge
      </a>
  </div>

  const bankAccount = <div>
    Account details: European Youth Parliament - Georgia <br/>
    IBAN: GE79PC0183600100029675 BIC: MIBGGE22
  </div>
  return (
    <div className='contact-main-body'>
      <div className='container'>
        <div className='page-header'>Contact</div>
        <br/>
        {address}
        <br/>
        {phone}
        <br/>
        {email}
        <br/>
        {bankAccount}
        <br/>
        <div>
          Press and Public Relations: Ana Datiashvili (
            <a href = "mailto: a.datiashvili@eyp.org.ge" className='linki'>a.datiashvili@eyp.org.ge</a>
            )
        </div>
      </div>
    </div>
  )
}

export default Contact