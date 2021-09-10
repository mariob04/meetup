import classes from './MeetupForm.module.css';
import React, { useRef } from 'react';
import Card from '../ui/Card';

function MeetupForm(props) {
   const titleInputRef = useRef();
   const imageInputRef = useRef();
   const addressInputRef = useRef();
   const descInputRef = useRef();

   function submitHandler(event) {
      event.preventDefault();

      const enteredTitle = titleInputRef.current.value;
      const enteredimage = imageInputRef.current.value;
      const enteredAdress = addressInputRef.current.value;
      const enteredDesc = descInputRef.current.value;

      const meetupData = {
         title: enteredTitle,
         image: enteredimage,
         address: enteredAdress,
         description: enteredDesc,
      };
      props.onAddMeetup(meetupData);
   }

   return (
      <Card>
         <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
               <label htmlFor='title'>Meetup Title</label>
               <input type='text' id='title' required ref={titleInputRef} />
            </div>
            <div className={classes.control}>
               <label htmlFor='image'>Meetup Image</label>
               <input type='url' id='image' required ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
               <label htmlFor='address'>Address</label>
               <input type='text' id='address' required ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
               <label htmlFor='description'>Meetup Description</label>
               <textarea type='text' id='description' required rows='5' ref={descInputRef}></textarea>
            </div>
            <div className={classes.actions}>
               <button>Add Meetup</button>
            </div>
         </form>
      </Card>
   )
}

export default MeetupForm
