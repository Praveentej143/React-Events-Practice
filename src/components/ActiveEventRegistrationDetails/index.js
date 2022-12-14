// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderNoActiveView = () => (
    <p className="no-active-event-description">
      Click on an event, to view its registration details
    </p>
  )

  const registrationClosedView = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="reg-closed-img"
      />
      <h1 className="reg-closed-heading">Registrations Are Closed Now!</h1>
      <p className="reg-closed-desc">Stay tuned. We will reopen!</p>
    </div>
  )

  const renderYetToRegisterView = () => (
    <div className="yet-reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="yet-to-register-desc">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="reg-btn">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="reg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registred-img"
      />
      <h1 className="reg-heading">
        You have already registered for the event{' '}
      </h1>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registrationStatus.registrationsClosed:
        return registrationClosedView()
      case registrationStatus.yetToRegister:
        return renderYetToRegisterView()
      case registrationStatus.registered:
        return renderRegisteredView()

      default:
        return renderNoActiveView()
    }
  }
  return (
    <div className="active-reg-details-container">
      {renderActiveRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
