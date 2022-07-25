import type { NextComponentType, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Note from './_note';
import { useEffect, useState } from 'react';
import { fetchNotes } from './api/fetchNotes';
import { NoteType } from './interfaces';


const Album: NextPage = () => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const res = fetchNotes()
    res.then((data) => {
      setNotes(data);
    })
    res.catch((err) => console.log(err))
  }, []);

  return (
    <div className={styles.container}>
      { notes.map((note) => <Note key={note.id} content={note} />) }
    </div>
  )
}

export default Album
