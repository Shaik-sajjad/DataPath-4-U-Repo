import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ firstName: '', lastName: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-columns">
        <div className="contact-info-content">
          <h2 className="contact-heading">
            <span className="color_11">Get in Touch</span>
          </h2>
          <p className="contact-phone">
            <span className="color_11">341-314-8473</span>
          </p>
          <p className="contact-email">
            <span className="color_11">
              <a
                href="mailto:Contact@datapath4u.com"
                className="wixui-rich-text__text"
                data-auto-recognition="true"
              >
                Contact@datapath4u.com
              </a>
            </span>
          </p>
          <div className="contact-social-bar">
            <ul className="mpGTIt" aria-label="Social Bar">
              <li className="O6KwRn">
                <a
                  href="https://www.linkedin.com/company/northern-analytics-group/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="oRtuWN"
                  aria-label="LinkedIn"
                  data-testid="linkElement"
                >
                  <img
                    src="images/linkedinnew.PNG"
                    // srcSet="https://tse2.mm.bing.net/th/id/OIP.VzPV7byIXcFJv2MSNfDZPQHaHa?pid=Api&P=0&h=180"
                    alt="LinkedIn"
                    className=""
                  // style={{ objectFit: 'cover' }}
                  // width="25"
                  // height="25"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form-column">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-field first-name">
                <label htmlFor="input_comp-mica55bn" className="wPeA6j">
                  First Name
                </label>
                <div className="pUnTVX">
                  <input
                    name="first-name"
                    id="input_comp-mica55bn"
                    className="KvoMHf has-custom-focus wixui-text-input__input"
                    type="text"
                    placeholder=""
                    maxLength="100"
                    autoComplete="off"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-field comp-mica55db wixui-text-input">
                <label htmlFor="input_comp-mica55db" className="wPeA6j wixui-text-input__label">
                  Last Name
                </label>
                <div className="pUnTVX">
                  <input
                    name="last-name"
                    id="input_comp-mica55db"
                    className="KvoMHf has-custom-focus wixui-text-input__input"
                    type="text"
                    placeholder=""
                    maxLength="100"
                    autoComplete="off"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-field comp-mica55df wixui-text-input">
                <label htmlFor="input_comp-mica55df" className="wPeA6j ">
                  Email
                </label>
                <div className="pUnTVX">
                  <input
                    name="email"
                    id="input_comp-mica55df"
                    className="KvoMHf has-custom-focus"
                    type="email"
                    placeholder=""
                    required
                    pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                    maxLength="250"
                    autoComplete="off"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-field comp-mica55di wixui-text-box">
                <label htmlFor="textarea_comp-mica55di" className="PSkPrR wixui-text-box__label">
                  Message
                </label>
                <textarea
                  id="textarea_comp-mica55di"
                  name="message"
                  className="rEindN has-custom-focus"
                  placeholder=""
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-button-wrapper">
                <button
                  type="submit"
                  aria-disabled="false"
                  aria-label="Send"
                  data-testid="buttonElement"
                  className="uDW_Qe wixui-button"
                >
                  <span className="l7_2fn wixui-button__label">Send</span>
                </button>
              </div>
              {submitted && (
                <div className="success-message">
                  <p className="font_5 wixui-rich-text__text">
                    <span className="wixui-rich-text__text">Thanks for submitting!</span>
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
