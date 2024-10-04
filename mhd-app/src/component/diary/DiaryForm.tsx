import React, { useContext } from 'react'
import {EventDateContext} from '../../pages/DiaryPage'

function DiaryForm() {
  const {eventDate, setEventDate} = useContext(EventDateContext)
  return (
    <div>
      {eventDate}
    </div>
  )
}

export default DiaryForm