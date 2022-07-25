import axios from "axios";
import { NoteType } from "../interfaces";

export async function fetchNotes(): Promise<NoteType[]> {
  let response = await axios(
    `http://localhost:4000/notes`
  );
  let data = await response.data;
  return data;
}
