import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='answer'>
            <h3>Props Vs State</h3>
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
            <div className='article'>
                <h3>How Does React Work?</h3>
                <article>React is a JavaScript library that specializes in helping developers build user interfaces, or UIs. In terms of websites and web applications, UIs are the collection of on-screen menus, search bars, buttons, and anything else someone interacts with to USE a website or app. React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</article>
            </div>
        </div>
    );
};

export default Questions;