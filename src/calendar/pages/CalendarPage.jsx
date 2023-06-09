import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import './CalendarPage.css';

import { getMessagesEs, localizer } from '../../helpers';
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { useState } from 'react';
import { useUiStore, useCalendarStore } from '../../hooks';

export const CalendarPage = () => {
  const { events, setActiveEvent } = useCalendarStore();
  const { openDateModal } = useUiStore();

  const [lastview, setLastview] = useState(localStorage.getItem('lastview') || 'week');

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };
    return {
      style,
    };
  };

  const onDoubleClick = () => {
    openDateModal();
  };

  const onSelect = (event) => {
    setActiveEvent(event);
  };
  const onViewChanged = (event) => {
    localStorage.setItem('lastview', event);
    setLastview(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        defaultView={lastview}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 56px)' }}
        messages={getMessagesEs()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
