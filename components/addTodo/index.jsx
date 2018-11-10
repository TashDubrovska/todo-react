import React from 'react';

export default class AddTofo extends React.Component {
    render() {
        let input;
        const inputId = 'addTodo-input';

        return (
            <form onSubmit={event => {
                event.preventDefault();

                this.props.onSubmit(input.value.trim());
                input.value = '';
            }}>
                <label htmlFor={inputId}>New task</label>
                <input type='text' id={inputId} ref={node => {input = node}} />
                <button type='submit'>Add</button>
            </form>
        )
    }
};
