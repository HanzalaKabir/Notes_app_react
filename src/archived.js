import "./archived.css";
import { Header } from "./components/header/header";
import "../src/components/sidebar/sidebar";
import { Sidebar } from "../src/components/sidebar/sidebar";
import { Footer } from "./components/footer/footer";
import { NoteCard } from "./components/NoteCard/NoteCard";
import { useNotes } from "../src/notesContext/notesContext";
export function Archived() {
  const variableObject = useNotes();
  let { notes } = variableObject;
  return (
    <>
      <Header />
      <Sidebar />
      <div className="h3 pinnedNotesHeading">Archived Notes</div>
      <div className="NoteCard">
        {notes.length > 0 ? (
          notes.map(function (note) {
            let archivedValue = note.isArchived;
            if (archivedValue) {
              return (
                <NoteCard
                  title={note.title}
                  note={note.note}
                  key={note.id}
                  id={note.id}
                  isPinned={note.isPinned}
                  isArchived={note.isArchived}
                />
              );
            }
          })
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
}
