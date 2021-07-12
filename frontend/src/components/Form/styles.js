import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#D3D3D3",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },

  blogForm: {
    backgroundColor: "#77BFC7",
  },
  titleInput: {
    backgroundColor: "#D3D3D3",
  },
  msgInput: {
    backgroundColor: "#728FCE",
  },
  fileInput: {
    backgroundColor: "#C6AEC7",
  },

  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: "#2B65EC",
  },
  buttonClear: {
    backgroundColor: "#FF1493",
  },
}));
