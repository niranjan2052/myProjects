import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import './App.css'

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title:'',
        content:''
    });

        const InputEvent = (event) =>{

            // const value = event.target.value;
            // const name = event.target.name;

            const {value,name} = event.target;

            setNote((prevData) => {
                return {
                    ...prevData,
                    [name]:value,
                };
            });
        }

        const addEvent = () => {
            props.passNote(note);
            setNote({
                title:'',
                content:''
            })
        };

        const expandIt = () => {
            setExpand(true);
        }

        const backToNormal = () => {
            setExpand(false);
        }

    return(
        <>
            <div className="main_note">
                <form action="">
                {expand?      
                <input 
                    type="text" 
                    name="title"
                    value= {note.title}  
                    onChange={InputEvent} 
                    placeholder="Title" 
                    autoComplete='off' />:null}

                <textarea 
                    rows='' 
                    column='' 
                    name="content"
                    value= {note.content}  
                    onChange={InputEvent} 
                    placeholder="Write a note...."
                    onClick={expandIt}
                    onDoubleClick = {backToNormal}
                    />

                    {expand ?
                    <Button onClick={addEvent}>
                        <AddIcon className='plus_sign' />
                    </Button> : null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;