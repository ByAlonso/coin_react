import { Button, Fade, Grid, Slide } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Component } from 'react';
import '../config/config.css';
import { Link } from 'react-router-dom';
export default class InitPage extends Component {
    state = {
        in: false
    };
    render() {
        setTimeout(() => {
            this.setState({ in: true });
        }, 2000);
        return (
            <Grid container className="defaultContainer">
                <Fade in={true} timeout={2000} ><p className="introText">Enalyzer ATM</p></Fade >
                <Slide in={this.state.in} direction={"up"} timeout={1500}>
                    <Link to="/trackpad">
                        <Button
                            variant="outlined"
                            className="initButton"
                        ><ArrowForward className="initArrow" />
                        </Button>
                    </Link>
                </Slide>
            </Grid>
        )
    }

}
