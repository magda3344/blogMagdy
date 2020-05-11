import React, {Component} from 'react';

class FieldValidationResults extends Component {
    render() {
        return (
            <div>
                {this.props.fieldErrorText}
            </div>
        );
    }
}

export default FieldValidationResults;