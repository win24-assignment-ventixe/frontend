import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EventBookingPage = () => {
  const navigate = useNavigate()
    const {id} = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState({ 
      eventId: id, 
      firstName: '', 
      lastName: '', 
      email: '', 
      streetAddress: '', 
      postalCode: '', 
      city: '',
      ticketQuantity: 1
    })

    useEffect(() => {
      getEvent()
    }, [])

    const getEvent = async () => {
      try {
        const res = await fetch(`https://assignment-cloud-eventservice-arh3f9fpgaa8dmfw.swedencentral-01.azurewebsites.net/api/events/${id}`)
        if (!res.ok) throw new Error("Failed to fetch event.");
        
        const data = await res.json()
        setEvent(data.result)
      } catch (err) {
        console.error(err)
      }
    }

    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()

      try {
        const res = await fetch(`https://assignment-cloud-bookingservice-d5dzffgsdsgsgfhb.swedencentral-01.azurewebsites.net/api/bookings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        if (!res.ok) {
          console.error('Booking failed.')
        } else {
          console.log('Booking succeeded.')
          navigate('/events')
        }
      } catch (err) {
        console.error('Error submitting booking', err)
      }
    }

  return (
    <div className='booking-page'>

      <div className="booking-event-info">
        <h3>Event information</h3>
        <h6>{event.title}</h6>
        <div className="date-location-group">
          <span className='event-details__date-time'>{event.eventDate}</span>
          <span className='event-details__location'>{event.location}</span>
        </div>
        <span className='event-details__details'>{event.description}</span>
      </div>

      <form className='booking-form' onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label className='form-label' htmlFor='firstName'>First Name</label>
          <input className='form-input' id='firstName' name='firstName' type='text' placeholder="Enter first name" value={formData.firstName} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label className='form-label' htmlFor='lastName'>First Name</label>
          <input className='form-input' id='lastName' name='lastName' type='text' placeholder="Enter last name" value={formData.lastName} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label className='form-label' htmlFor='streetAddress'>Street Address</label>
          <input className='form-input' id='streetAddress' name='streetAddress' type='text' placeholder="Enter street addess" value={formData.streetAddress} onChange={handleChange} required/>
        </div>
        <div className="form-flex-group">
          <div className="form-group">
            <label className='form-label' htmlFor='postalCode'>Postal Code</label>
            <input className='form-input' id='postalCode' name='postalCode' type='text' placeholder="Enter postal code" value={formData.postalCode} onChange={handleChange} required/>
          </div>
          <div className="form-group">
            <label className='form-label' htmlFor='city'>City</label>
            <input className='form-input' id='city' name='city' type='text' placeholder="Enter city" value={formData.city} onChange={handleChange} required/>
          </div>
        </div>
        <div className="form-group">
          <label className='form-label' htmlFor='email'>Email</label>
          <input className='form-input' id='email' name='email' type='email' placeholder="Enter email" value={formData.email} onChange={handleChange} required/>
        </div>
        <button type='submit' className='btn btn-submit'>Book now</button>
      </form>
    </div>
  )
}

export default EventBookingPage