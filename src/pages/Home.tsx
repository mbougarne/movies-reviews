import React, { Component, ReactNode } from 'react';
import Header from '../components/Header';

export default class Home extends Component
{

    render(): ReactNode
    {
        return (
            <div className="HomePage">
                <Header />
            </div>
        )
    }
}