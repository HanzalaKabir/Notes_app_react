import { Header } from "./components/header/header";
import { Sidebar } from "./components/sidebar/sidebar";
import { InputCard } from "./components/InputCard/InputCard";
import { Footer } from "./components/footer/footer";
import { NoteCard } from "./components/NoteCard/NoteCard";
import { useNotes } from "../src/notesContext/notesContext";
import "./home.css";
export function Home() {
  const variableObject = useNotes();
  let { notes, active, setActive } = variableObject;
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <InputCard />
      </div>
      <div className="notesContainer">
        <div className="h3 pinnedNotesHeading">Pinned Notes</div>
        <div className="pinnedNotesContainer NoteCard">
          {notes.length > 0 ? (
            notes.map(function (note) {
              let pinnedValue = note.isPinned;
              let archivedValue = note.isArchived;
              if (pinnedValue && !archivedValue) {
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
        <div className="h3 otherNotesHeading">Other Notes</div>
        <div className="NoteCard otherNotesContainer">
          {notes.length > 0 ? (
            notes.map(function (note) {
              let pinnedValue = note.isPinned;
              let archivedValue = note.isArchived;
              if (!pinnedValue && !archivedValue) {
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
      </div>
      <Footer />
    </>
  );
}
