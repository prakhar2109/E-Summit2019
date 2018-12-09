import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        width: '90%',
    },
    backButton: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    iconContainer: {
        // backgroundColor: "red",
        // color: "red"
    },
    step: {
        color: "red",
        "&$completed": {
            color: "lightgreen"
        },
        "&$active": {
            color: "pink"
        },
        "&$disabled": {
            color: "blue"
        }
    }
});



function getSteps() {
    return ['ACCOUNT SETUP', 'PROFILE TYPE', 'PERSONAL DETAILS'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return 'ACCOUNT SETUP';
        case 1:
            return 'PROFILE TYPE';
        case 2:
            return 'PERSONAL DETAILS';
        default:
            return 'Uknown stepIndex';
    }
}

class Stepform extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };
    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => {
                        return (
                            <Step classes={{
                                root: classes.step,
                                completed: classes.completed,
                                active: classes.active
                            }} key={label}>
                                <StepLabel classes={{ iconContainer: classes.iconContainer }}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={this.handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={this.handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                </Button>
                                    <Button variant="contained" color="primary" onClick={this.handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div >
        );
    }
}


export default withStyles(styles)(Stepform);
