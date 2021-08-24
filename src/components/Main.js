import React from 'react';
import Filter from '../particles/Filter';
import List from '../particles/List';

class Main extends React.Component {
    render() {
        return(
            <section id="main">
                <Filter/>
                <List/>
            </section>
        )
    }
}

export default Main;