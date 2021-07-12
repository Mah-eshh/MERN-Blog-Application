import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 5,
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
    backgroundColor: "#98AFC7",
  },
  pagination: {
    borderRadius: 5,
    marginTop: "1rem",
    padding: "16px",
    backgroundColor: "#F08080",
    color: "#00BFFF",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
    backgroundColor: "#4E5180",
  },
  inputBar: {
    backgroundColor: "#F08080",
  },
  searchMemo: {
    backgroundColor: "#40E0D0",
  },

  searchTag: {
    backgroundColor: "#77BFC7",
  },

  searchButton: {
    backgroundColor: "#157DEC",
  },
}));
