import React from 'react'

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function DiaryPage() {
  return (
    <>
    <div className='h-svh'>
    <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
    </>
  )
}

export default DiaryPage