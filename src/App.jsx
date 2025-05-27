import { Route, Routes } from 'react-router-dom'
import './App.css'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import EventsPage from './assets/pages/UserPages/EventPage'
import PageProvider from './assets/contexts/PageProvider'
import NavbarStatusProvider from './assets/contexts/NavbarStatusProvider'
import DashboardPage from './assets/pages/UserPages/DashboardPage'
import InvoicesPage from './assets/pages/UserPages/InvoicesPage'
import BookingsPage from './assets/pages/UserPages/BookingsPage'
import EventDetailsPage from './assets/pages/UserPages/EventDetailsPage'
import EventBookingPage from './assets/pages/UserPages/EventBookingPage'

function App() {

  return (
    <PageProvider>
      <NavbarStatusProvider>
        <Routes>
          <Route element={<CenterLayout />}>
          </Route>
            <Route element={<PortalLayout />}>
              <Route path='/' element={<DashboardPage />} /> 
              <Route path='/bookings' element={<BookingsPage />} /> 
              <Route path='/invoices' element={<InvoicesPage />} /> 
              <Route path='/events' element={<EventsPage />} /> 
              <Route path='/events/event-details/:id' element={<EventDetailsPage />} />
              <Route path='/events/booking/:id' element={<EventBookingPage />} />
            </Route>
        </Routes>
      </NavbarStatusProvider>
    </PageProvider>
  )
}

export default App
