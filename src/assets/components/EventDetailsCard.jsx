import React from 'react'
import { Link } from 'react-router-dom'

const EventDetailsCard = ({event}) => {
  return (
    <div className='event-details'>
        <header className='event-details__header'>
          <span className="event-details__category">{event.category}</span>
          <span className="event-details__status">Active</span>
          {/* <img src='' alt='' className='event-card__image'></img> */}
        </header>

        <section className='event-details__body'>
          <div className="event-info-group">
            <div className="event-info">
              <h4 className='event-details__title'>{event.title}</h4>
              <span className="event-details__date-time">{event.eventDate}</span>
              <span className='event-details__location'>{event.location}</span>
              <div className="divider mobile-divider"></div>
            </div>
            <Link to={`/events/booking/${event.id}`} className='btn-buy'>
              <i class="fa-duotone fa-solid fa-credit-card-front credit-card"></i>
              <div className="price-group">
                <span className='event-details__price-header'>Price</span>
                <span className="event-details__price">${event.price}</span>
              </div>
            </Link>
          </div>
          <div className="divider"></div>
          <span className='event-details__about-event'>About Event</span>
          <span className='event-details__details'>{event.description}</span>
        </section>
    </div>
  )
}

export default EventDetailsCard