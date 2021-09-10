import React from 'react'
import { useHistory } from 'react-router-dom';
import MeetupForm from '../components/meetups/MeetupForm'

function NewMeetup() {

   const history = useHistory();

   function addMeetupHandler(meetupData) {
      fetch(
         'https://react-meetup-7d20c-default-rtdb.firebaseio.com/meetups.json', 
         {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
               'Content-Type' : 'application/json'
            }
         }
      ).then(() => {
         history.replace('/');
      })
   }

   return (
      <section>
         <h1>Add new Meetup</h1>
         <MeetupForm onAddMeetup={addMeetupHandler}/>
      </section>
   )
}

export default NewMeetup
