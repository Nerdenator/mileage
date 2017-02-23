/**
 * Created by aaronmcruer on 2/22/17.
 */

import React from "react";
import {EntryField} from "./EntryField"

export class MileageForm extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <h3>Fuel Amount</h3>
                    <EntryField/>
                    <h3>Price Per Gallon</h3>
                    <EntryField/>
                </div>
                <div className="row">
                    <h3>Vehicle Mileage</h3>
                    <EntryField/>
                </div>
            </div>
        )
    }
}