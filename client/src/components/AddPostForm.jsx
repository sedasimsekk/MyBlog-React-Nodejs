import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    Button,
    TextField,
    Select,
    Input,
    MenuItem,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import PenIcon from "@material-ui/icons/Create";
import FileBase64 from "react-file-base64";
import {useDispatch} from "react-redux";
import {createPost} from "../actions/postAction";
import { useForm } from "react-hook-form";


const UseStyles=makeStyles((theme)=>({
    paper:{
        padding: theme.spacing(2),
    },
    textField:{
        marginBottom: theme.spacing(2),
    },
}));

const tags =["fun","programming","health","science"];


const AddPostForm = () => {
    const dispatch=useDispatch();
    const { register, handleSubmit } = useForm();
    const [open, setOpen] = useState(false)
    const [file,setFile] = useState(null);
     const handleClose= ()=>{
       setOpen(false)
     };
     const onSubmit=(data) => {
         console.log({...data,file});
         dispatch(createPost({...data,image:file}));
         clearForm();
     }
     const clearForm = () =>{
         setFile(null);
         handleClose();
     };
    const classes=UseStyles();
  return (
      <>
      <Button color="primary" variant="outlined" startIcon={<PenIcon/>} onClick={()=>setOpen(true)} >
                Yeni Yazı
      </Button>
    <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Yeni Yazı Oluştur</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Yeni bir yazı eklemek için aşağıdaki formu doldurun.
            </DialogContentText>
            <div className={classes.root}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}> 
                  <TextField 
                  id="title"
                  label="Başlık"
                  name="title"
                  variant="outlined"
                  {...register("title")}
                  className={classes.textField}
                  size="small"
                  fullWidth
                  />

                 <TextField 
                  id="subtitle"
                  label="Alt Başlık"
                  name="subtitle"
                  variant="outlined"
                  {...register("subtitle")}
                  className={classes.textField}
                  size="small"
                  fullWidth
                  />
                        <Select
                         input={<Input/>}
                         {...register("tag")}
                         className={classes.textField}
                         fullWidth
                         name="tag"
                         defaultValue={tags[0]}
                        >
                            {
                                tags.map((tag,index) =>(
                                    <MenuItem key={index} value={tag}>
                                        {tag}
                                    </MenuItem>
                                ))
                            }

                        </Select>
                
                <TextField 
                  id="content"
                  label="İçerik"
                  name="content"
                  multiline
                  minRows={4}
                  variant="outlined"
                  {...register("content")}
                  className={classes.textField}
                  size="small"
                  fullWidth
                  />
                  <FileBase64 multiple={false} onDone={({base64}) =>setFile(base64)}></FileBase64>

                  <DialogActions>
                    <Button color="inherit" onClick={clearForm}>Vazgeç</Button>
                    <Button type="submit" variant="outlined" color="primary" onClick={handleSubmit(onSubmit)}>Yayınla</Button>
                  </DialogActions>
                </form>
            </div>
        </DialogContent>
       
    </Dialog>
    </>
  )
}

export default AddPostForm;

