import React, { Component } from 'react'
import { Form, Button, FormGroup } from "react-bootstrap";
import "./user.css"

class user extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Amount: 0.0,
            InterestRate: 0.0,
            Period: 0,
            Answers: [0.0, 0.0, 0]

        }
    }

    
    changeHandler = (e) => {
        const { id, value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    }

    finishHandler = async () => {
        console.log('finish');
        const { Amount, InterestRate, Period, Answers } = this.state;
        Answers[0] = Amount;
        Answers[1] = InterestRate;
        Answers[2] = Period;
        this.props.handleAnswer(this.state.Answers);
    }

    render() {
        return (
            /*
            <div>
                <h2>Enter user preferences</h2>
                <form>
                    <p>
                        <label>
                            Employee ID: <input type="text" name="Id" value={this.state.Id} onChange={this.changeHandler}></input>
                        </label>
                    </p>
                </form>
                <button onClick={this.onCreateEmployee}>Create</button>
            </div>
            */
            <div>
                <div className="formContainer">
                    
                    <br/>
                    <Form onSubmit = {this.finishHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Amount:</Form.Label>
                            <Form.Control type="number" step="0.1" placeholder="Enter amount" onChange={this.changeHandler} id="Amount"/>
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3">
                            <Form.Label>Interest Rate:</Form.Label>
                            <Form.Control type="number" step="0.1" placeholder="Enter interest rate" onChange={this.changeHandler} id="InterestRate" />
                        </Form.Group>
                        <br/>
                        <Form.Group className="mb-3">
                            <Form.Label>Payback Period:</Form.Label>
                            <Form.Control type="number" placeholder="Enter payback period" onChange={this.changeHandler} id="Period" />
                        </Form.Group>
                        <br />
                        <Button className="button" type="submit">Submit details</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default user;
