import React from 'react'
function ContactForm() {
        const [formStatus, setFormStatus] = React.useState('Send')
        const onSubmit = (e) => {
          e.preventDefault()
          setFormStatus('Submitting...')
          const { name, email, message } = e.target.elements
          let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
          }
          console.log(conFom)
        }
  return (
      <div className="container mt-5">
      <h2 className="mb-3"><b>Contact Me</b></h2>
        <br />
        <strong>Nama   : Hayatun Nufus</strong>
        <br />
        <br />
        <strong>NIM    : 2110204 </strong>
        <br />
        <br />
        <strong>Email  : nfshaya4@gmail.com</strong>
        <br />
        <br />
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
          {formStatus}  
          </button>
      </form>
    </div>
  )
}
export default ContactForm