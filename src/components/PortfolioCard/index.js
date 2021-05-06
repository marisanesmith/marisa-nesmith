import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from "@material-ui/core/styles";

import { Grid, CardActionArea, Card, CardContent, Typography, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 350,
        marginLeft: "15px",
        marginBottom: "75px",
        padding: "10px",
        backgroundColor: "#efe9db",
    },
    images: {
        height: 200,
        width: 330,
        margin: "center",
    },
    button: {
        backgroundColor: "#766c5b",
        color: "white",
        '&:hover': {
            backgroundColor: "#bbad94",
            color: "white",
            textDecoration: "none"
        },
        padding: ".8rem",
        borderRadius: "8px",
        textAlign: "center",
        margin: "auto",
        marginBottom: "25px"
    },
    typography: {
        marginBottom: "20px",
        
    }
})

function PortfolioCard(props) {
    const styles = useStyles();
    return (
        <Grid item>
            <Card className={styles.root}>
                <CardActionArea>
                <div className={styles.images}>
                    <img className="card-img" src={props.project.image} alt={props.project.title}/>
                </div>
                    <CardContent>
                        <Typography className={styles.typography} variant="h4" component="h2">
                            {props.project.title}
                        </Typography>
                        <p className="card-text">{props.project.description}</p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <a href={props.project.live_url} className={styles.button}>{props.project.buttonName}</a>
                </CardActions>
            </Card>
        </Grid>

        // <main className={styles.root}>
        //     <div ClassName="container-fluid p-4">
        //         <div className="row">
        //             <div className="col-sm m-4">
        //             <div ClassName="card">
        //             <div className={styles.images}>
        //                 <img className="card-img" src={props.project.image} alt={props.project.title}/>
        //             </div>
        //             <div className="content">
        //                 <h5 className="card-title">{props.project.title}</h5>
        //                 <p className="card-text">{props.project.description}</p>
        //                 <a href={props.project.live_url} className={styles.button}>{props.project.buttonName}</a>
        //             </div>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>

    )
}

export default PortfolioCard