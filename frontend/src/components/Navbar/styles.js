import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#78d2",
    borderRadius: 3,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    fontSize: "2em",
    fontWeight: 300,
  },
  image: {
    marginLeft: "10px",
    marginTop: "5px",
  },
  myName: {
    height: "60px",
    width: "400px",
  },

  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "700px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
    marginRight: "10px",
  },
  logout: {
    backgroundColor: deepPurple[800],
    marginLeft: "80px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    height: "40px",
    width: "50px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    marginLeft: "25px",
  },
  myRoutes: {
    color: "rgba(8,83,255, 5)",
    fontSize: "2em",
    fontWeight: 300,
    margin: "5px",
    marginRight: "10px",
  },
}));
