import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({item}) => {
  return (
    <Link to={`/events/event-details/${item.id}`}  className='event-card'>
        <header className='event-card__header'>
            <span className="event-card__category">Outdoor & Adventure</span>
            <span className="event-card__status">Active</span>
            {/* <img src='' alt='' className='event-card__image'></img> */}
        </header>
        <section className='event-card__body'>
            <span className="event-card__date-time">{item.eventDate}</span>
            <span className='event-card__title'>{item.title}</span>
            <span className='event-card__location'>{item.location}</span>
        </section>
        <footer className='event-card__footer'>
            <div className="event-card__percent">65%</div>
            <div className="event-card__price">$40</div>
        </footer>
    </Link>
  )
}

export default EventCard