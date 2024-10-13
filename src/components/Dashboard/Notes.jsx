import React, { useEffect, useState } from "react";
import {
  InputBase,
  IconButton,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Box,
  Modal,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { Plus, Trash } from "lucide-react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Notes = ({ data }) => {
  const [notes, setNotes] = useState(data || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", date: "", detail: "" });

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleAddNote = async () => {
    try {
      const formattedDate = new Date(newNote.date).toISOString();
      const noteToSend = { ...newNote, date: formattedDate };

      const response = await axios.post(
        // "https://bms-server-git-main-jaffarsonjs-projects.vercel.app/api/dashboard-data/add-note",
        "http://localhost:5001/api/dashboard-data/add-note",
        noteToSend
      );

      if (response.data) {
        setNotes((prevNotes) => [...prevNotes, response.data.data]);
        setNewNote({ title: "", date: "", detail: "" });
        setOpenModal(false);
      } else {
        console.error("No data returned from API.");
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        // `https://bms-server-git-main-jaffarsonjs-projects.vercel.app/api/dashboard-data?noteId=${id}`,
        `http://localhost:5001/api/dashboard-data?noteId=${id}`
      );
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.detail.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setNotes(data);
  }, [data]);

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "29rem",
          overflow: "scroll",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: 1,
            borderColor: "divider",
            paddingBottom: 2,
          }}
        >
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              paddingRight: 1,
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon className="text-[#6d8dff]" />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search notes"
              inputProps={{ "aria-label": "Search notes" }}
              value={searchQuery}
              onChange={handleSearch}
            />
          </Box>
          <IconButton
            sx={{ p: "10px" }}
            aria-label="add"
            onClick={handleModalOpen}
          >
            <Plus className="text-[#6d8dff]" />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, overflowY: "auto", mt: 2 }}>
          <List>
            <List>
              {filteredNotes.length > 0 ? (
                filteredNotes.map((note) => (
                  <ListItem key={note._id}>
                    <ListItemText
                      primary={`${note.title} - ${new Date(
                        note.date
                      ).toLocaleDateString()}`}
                      secondary={note.detail}
                    />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDelete(note._id)}
                    >
                      <Trash className="hover:text-red-400" />
                    </IconButton>
                  </ListItem>
                ))
              ) : (
                <Typography variant="body2" color="textSecondary">
                  No notes found.
                </Typography>
              )}
            </List>
          </List>
        </Box>
      </CardContent>

      <Modal open={openModal} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            boxShadow: 24,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" component="h2">
            Add New Note
          </Typography>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          />
          <TextField
            label="Date"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true }}
            value={newNote.date}
            onChange={(e) => setNewNote({ ...newNote, date: e.target.value })}
          />
          <TextField
            label="Detail"
            fullWidth
            margin="normal"
            value={newNote.detail}
            onChange={(e) => setNewNote({ ...newNote, detail: e.target.value })}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            fullWidth
            onClick={handleAddNote}
          >
            Add Note
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};

export default Notes;
