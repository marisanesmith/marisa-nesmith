import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core/styles";

// import { CardMedia, Grid, CardActionArea, Card, CardContent, Typography, Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 350,
        marginLeft: "15px",
        marginBottom: "75px"
    },
    images: {
        height: 450,
        width: 400
    },
    button: {
        backgroundColor: "#766c5b",
        color: "white",
        padding: ".5rem",
        borderRadius: "8px"
    }
})

function PortfolioCard(props) {
    const styles = useStyles();
    return (
        // <Grid item>
        //     <Card>
        //         <CardActionArea>
        //             <CardMedia 
        //                 image={props.project.image}
        //                 title={props.project.title}
        //             />
        //             <CardContent>
        //                 <Typography gutterBottom variant="h4" component="h2">
        //                     {props.project.title}
        //                 </Typography>
        //             </CardContent>
        //         </CardActionArea>
        //         <CardActions>
        //             <Button size="small">
        //                 <a href={props.project.live_url}>{props.project.buttonName}</a>
        //             </Button>
        //         </CardActions>
        //     </Card>
        // </Grid>
        <main className={styles.root}>
            <div ClassName="container-fluid p-4">
                <div className="row">
                    <div className="col-sm m-4">
                    <div ClassName="card">
                    <div className={styles.images}>
                        <img className="card-img" src={props.project.image} alt={props.project.title}/>
                    </div>
                    <div className="content">
                        <h5 className="card-title">{props.project.title}</h5>
                        <p className="card-text">{props.project.description}</p>
                        <a href={props.project.live_url} className={styles.button}>{props.project.buttonName}</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default PortfolioCard