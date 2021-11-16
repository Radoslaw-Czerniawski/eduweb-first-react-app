import React, { useState } from 'react';
// import { twitterAccounts } from '../../data/twitterAccounts';
import "./index.css";
import AppContext from '../../context';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import TwittersView from '../TwittersView/TwittersView';
import NotesView from '../NotesView/NotesView';
import ArticlesView from '../ArticlesView/ArticlesView';
import Header from "../../components/Header/Header";
import Modal from '../../components/Modal/Modal';

const Root = () => {
    let [isModalOpen, changeModal] = useState(false);
    const [items, expandItems] = useState({
        twitter: [],
        article: [],
        note: [],
    });

    const addItem =  (e, newItem) => {
        e.preventDefault();

        expandItems({
            ...items,
            [newItem.type]: [...items[newItem.type], newItem]
        })

        closeModal();
    }

    const openModal = () => {
       changeModal ( isModalOpen = true);
    };

    const closeModal = () => {
        changeModal ( isModalOpen = false);
    };

    const contextElement = {
        ...items,
        addItem: addItem
    }

    return (
        <BrowserRouter>
            <AppContext.Provider value={contextElement}>
                <Header openModalFn={openModal} />
                <Switch>
                    <Route exact path="/" component={TwittersView} />
                    <Route path="/articles" component={ArticlesView}/>
                    <Route path="/notes" component={NotesView}/>
                </Switch>
                { isModalOpen && <Modal  closeModalFn={closeModal}/> }
            </AppContext.Provider>
        </BrowserRouter>
    );
};

export default Root;
