import React from "react";
import Sidebar from "./DashboardNav";
import {
  Button,
  Modal,
  TextField,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateCourse = () => {
  const [open, setOpen] = React.useState(false);
  const [courseCategory, setCourseCategory] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event) => {
    setCourseCategory(event.target.value);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", sm: "80%", md: "500px" },
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-gray-800 text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full p-5 ">
        <Box className="flex justify-between items-center">
          <Typography variant="h5" component="h1">
            Welcome Sajal
          </Typography>
          <Button
            variant="contained"
            onClick={handleOpen}
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              backgroundColor: "#111827",
              "&:hover": {
                backgroundColor: "#1e293b",
              },
              textTransform: "none",
            }}
          >
            Create Course
          </Button>
        </Box>

        {/* Create Course Modal */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box sx={modalStyle}>
            <Box
              sx={{
                mb: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "" }}>
                Create New Course
              </Typography>
              <IconButton
                onClick={handleClose}
                size="small"
                sx={{ color: "text.secondary" }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box
              component="form"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                fullWidth
                label="Course Title"
                variant="outlined"
                placeholder="Enter course title"
              />

              <FormControl fullWidth>
                <InputLabel>Select Course Category</InputLabel>
                <Select
                  value={courseCategory}
                  label="Select Course Category"
                  onChange={handleChange}
                  sx={{ borderRadius: 1 }}
                >
                  <MenuItem value="development">Development</MenuItem>
                  <MenuItem value="design">Design</MenuItem>
                  <MenuItem value="business">Business</MenuItem>
                  <MenuItem value="marketing">Marketing</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="₹ Price"
                variant="outlined"
                placeholder="₹ Enter price"
              />

              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#111827",
                    "&:hover": {
                      backgroundColor: "#1e293b",
                    },
                    textTransform: "none",
                  }}
                >
                  Create Course
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    borderColor: "#111827",
                    color: "#111827",
                    "&:hover": {
                      borderColor: "#1e293b",
                      backgroundColor: "transparent",
                    },
                    textTransform: "none",
                  }}
                >
                  Draft
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </main>
    </div>
  );
};

export default CreateCourse;
