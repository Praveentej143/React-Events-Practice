// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsListDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventsListDetails
  const eventImgClassName = isActive ? 'event-image-active' : 'event-image'

  const onClickGetEvent = () => {
    setActiveEventId(id)
  }

  return (
    <>
      <li className="events-container">
        <button className="event-btn" type="button" onClick={onClickGetEvent}>
          <img src={imageUrl} alt="event" className={eventImgClassName} />
        </button>
        <p className="event-heading">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    </>
  )
}

export default EventItem
