import React from "react";
import "./blogs.css"
import AddPostForm from "../AddPostForm";
import {makeStyles} from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon,
} from "@material-ui/core";





const UseStyles=makeStyles( theme => ({
  root:{
    flexGrow:1,
  },
  menuButton:{
    marginRight:theme.spacing(2),
  },
  title:{
    flexGrow:1,
  },
  container:{
    marginTop:theme.spacing(3),
  },
  buton:{
    left: 100,
  },
}));



function Blogs ()  {

  
  const classes =UseStyles();

  return (
    <div >
     
        <CssBaseline/>
            <Toolbar>
            <h1><span>Bloglarım</span></h1>
            </Toolbar>
            <AddPostForm />
            
    </div>
    
  )
}

export default Blogs;