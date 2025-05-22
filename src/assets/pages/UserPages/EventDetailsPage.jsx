import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import EventDetailsCard from '../../components/EventDetailsCard'

const EventDetailsPage = () => {
  const {id} = useParams()
  const [event, setEvent] = useState({})

  const getEvent = async () => {
    const res = await fetch(`https://assignment-cloud-eventservice-arh3f9fpgaa8dmfw.swedencentral-01.azurewebsites.net/api/events/${id}`)

    if (res.ok) {
      const response = await res.json()
      setEvent(response.result)
    }
  }

  useEffect(() => {
    getEvent()
  }, [])

  return (
    <EventDetailsCard event={event} />
  )
}

export default EventDetailsPage