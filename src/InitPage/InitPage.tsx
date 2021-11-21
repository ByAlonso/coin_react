import { Button, Fade, Grid, Slide } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Component} from 'react';
import '../config/config.css';
import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion"
export default class InitPage extends Component {
    state = {
        in: false
    };
    //Link should be history
    render() {
        setTimeout(() => {
            this.setState({ in: true });
        }, 2000);
        const slideUp = {
            name: 'Slide Up',
            variants: {
                initial: {
                    opacity: 0,
                    top: '100vh',
                    scale: 0.4
                },
                animate: {
                    opacity: 1,
                    top: '0vh',
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    top: '100vh',
                    scale: 0.4
                }
            },
            transition: {
                duration: 0.7
            }
        }
        return (
            <m.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 3.5 }}
            >
                <Grid container className="semiContainer">
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
            </m.div>
        )
    }

}
