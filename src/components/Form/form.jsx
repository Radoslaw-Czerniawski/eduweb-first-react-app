import React, { useState } from 'react';
import AppContext from '../../context';
import styles from "./form.module.scss"
import Input from "../Input/Input";
import Button from '../Button/Button';
import Title from '../Title/Title';
import Radio from './FormRadio.jsx';

const types = {
  twitter: "twitter",
  article: "article",
  note: "note",
};

const descriptions ={
  twitter: "favourite Twitter account",
  article: "Article",
  note: "Note",
}

const Form = () => {
  const [state, setState] = useState({
    type: types.twitter,
    title: "",
    link: "",
    image: "",
    description: "",
  })


  return (
    <AppContext.Consumer>
      {(context) => (
          <div className={styles.wrapper}>
            <Title>Add new {descriptions[state.type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={(e) => context.addItem(e, state)}
            >
              <div className={styles.formOptions}>
                <Radio
                  id={types.twitter}
                  checked={state.type === types.twitter}
                  changeFn={() => setState({ ...state, type: types.twitter})}
                >
                  Twitter
                </Radio>
                <Radio
                  id={types.article}
                  checked={state.type === types.article}
                  changeFn={() => setState({ ...state, type: types.article})}
                >
                  Article
                </Radio>
                <Radio id={types.note} checked={state.type === types.note}
                  changeFn={() => setState({ ...state, type: types.note})}> Note </Radio>
              </div>
              <Input
                name="title"
                onChange={(e) => setState({...state, [e.target.name]: e.target.value })}
                label={state.type === types.twitter ? "Twitter Name" : "Title"}
                value={state.title}
              />
              {state.type !== types.note ?
                <Input
                  name="link"
                  onChange={(e) => setState({...state, [e.target.name]: e.target.value })}
                  label={state.type === types.twitter ? "Twitter Link" : "Link"}
                  value={state.link}
                /> : null
              }
              {state.type === types.twitter ?
                <Input
                  name="image"
                  onChange={(e) => setState({...state, [e.target.name]: e.target.value })}
                  label="Image"
                  required={false}
                  value={state.image}
                /> : null
              }
              <Input
                tag="textarea"
                name="description"
                onChange={(e) => setState({...state, [e.target.name]: e.target.value })}
                label="Description"
                value={state.description}
              />
              <Button>add new item</Button>
            </form>
          </div>
      )}
    </AppContext.Consumer>
  );
};

  export default Form;
