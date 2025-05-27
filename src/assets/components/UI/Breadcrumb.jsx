import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const { pathname } = useLocation()

  const isUUID = (value) =>
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      .test(value)

  const pathnames = pathname
    .split('/')
    .filter((value) => value && !isUUID(value))

  const last = pathnames[pathnames.length - 1] || ''

  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb-trail">
        <li className="crumb-link">
          <Link className="crumb-link" to="/">
            Dashboard
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          return (
            <li key={to}>
              {isLast ? (
                <span>{value.replace(/-/g, ' ')}</span>
              ) : (
              <span>
                  <Link className='crumb-link' to={to}>{value.replace(/-/g, ' ')}</Link>
              </span>
              )}
            </li>
          )
        })}
      </ul>

      {last && <h4 className="breadcrumb-title">{last.replace(/-/g, ' ')}</h4>}
    </nav>
  )
}

export default Breadcrumb