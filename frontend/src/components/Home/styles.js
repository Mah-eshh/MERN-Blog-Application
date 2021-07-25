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
    padding: "16px",
    marginLeft: "720px",
    marginBottom: "10px",
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRJxNT3-CaYCZsqzbQsTKmiq2fO55xMUw9w&usqp=CAU)",
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
    fontFamily: "Malgun Gothic",
    fontWeight: 900,
    fontSize: 15,
  },
}));
