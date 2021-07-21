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
    borderRadius: 50,
    marginTop: "1rem",
    padding: "16px",
    backgroundColor: "#18C",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
    // backgroundColor: "#372580",
  },
  inputBar: {
    backgroundColor: "#F08080",
  },
  searchMemo: {
    backgroundColor: "#D3D3D3",
  },

  searchTag: {
    backgroundColor: "#D3D3D3",
  },

  searchButton: {
    backgroundColor: "#157DEC",
  },
}));
