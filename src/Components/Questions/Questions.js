import React from 'react';

const Questions = () => {
    return (
        <div>
            <h4>Props Vs State</h4>
            <ol>
                <p>Props</p>
                <li>Props are read-only.</li>
                <li>Props are immutable.	State is mutable.</li>
                <li>Props allow you to pass data from one component to other components as an argument.</li>
                <li>Props can be accessed by the child component.</li>
                <li>Props are used to communicate between components.</li>
            </ol>
            <ol>
                <p>State</p>
                <li>State changes can be asynchronous.</li>
                <li>State is mutable.</li>
                <li>State holds information about the components.</li>
                <li>State cannot be accessed by child components.</li>
                <li>States can be used for rendering dynamic changes with the component.</li>
            </ol>
        </div>
    );
};

export default Questions;