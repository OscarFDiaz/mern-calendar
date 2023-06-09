import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onDelteEvent, onSetActiveEvent, onUpdateEvent } from '../store';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: Llegar al backen

    // TODO BIEN

    if (calendarEvent._id) {
      //Actualiza
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      console.log('Startsavingevent');
      //Añade
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(onDelteEvent());
  };

  return {
    //* Properties
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    //* Methods
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  };
};
