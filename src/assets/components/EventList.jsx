import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'

const EventList = () => {
    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const res = await fetch("https://assignment-cloud-eventservice-arh3f9fpgaa8dmfw.swedencentral-01.azurewebsites.net/api/events")

        if (res.ok) {
            const response = await res.json()
            setEvents(response.result)
        }
    }

    useEffect(() => {
        getEvents()
    }, [])

  return (
    <section className='event-page' id="events">
        {events.map(event => (<EventCard key={event.id} item={event}/>))}
    </section>
  )
}

export default EventList