import React from 'react';
import Modal from './components/Modal';
import Button from './components/Button';
import Items from './components/Items';
import Information from './components/Information';
import { useState } from 'react';

const App = () => {
  // These states are needed for modification!
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [initStat, setInitStat] = useState('');
  const [id, setId] = useState('');

  // These states control 'add' and 'modify' modals
  const [showModal, setShowModal] = useState(false);
  const [showModify, setShowModify] = useState(false);

  const [items, setItems] = useState([
    {
      id: 1,
      text: 'Learn JavaScript closure',
      date: 'tonight',
      status: 'green',
    },
    {
      id: 2,
      text: 'Pay the Internet bill',
      date: 'tomorrow morning',
      status: 'yellow',
    },
    {
      id: 3,
      text: 'Finalize the React assignment',
      date: 'This Friday',
      status: 'red',
    },
  ]);

  //// Modify item (send states to the modal)
  const editItem = (id) => {
    items.forEach((item) => {
      if (item.id === id) {
        setId(item.id);
        setTitle(item.text);
        setDeadline(item.date);
        setInitStat(item.status);
      }
    });
    setShowModify(true);
  };
  ///// and then modify modal (there we submit again)
  const editModal = (editItem) => {
    let newItem = items.map((item) => {
      if (item.id === editItem.id) {
        item.text = editItem.text;
        item.date = editItem.date;
        item.status = editItem.status;
      }
      return item;
    });
    setItems(newItem);
    setShowModify(false);
  };

  //// Add item
  const addItem = (item) => {
    // To keep track on the items I created a random ID (needed for keys!)
    const id = Math.floor(Math.random() * 10000) + 1;
    let newItem = { id, ...item };

    // Eliminate unecessary whitespaces
    newItem.text = newItem.text.trim();

    setItems([...items, newItem]);
    setShowModal(false);
  };

  return (
    <div className="container">
      <Button
        color="#4A86E8"
        text="Add a new todo"
        onClick={() => setShowModal(true)}
      />
      <Items items={items} editItem={editItem} />
      <Information />
      {showModal && (
        <Modal
          onAdd={addItem}
          buttonText="Add"
          onClose={() => {
            setShowModal(false);
          }}
        />
      )}
      {showModify && (
        <Modal
          onAdd={editModal}
          buttonText="Modify"
          onClose={() => {
            setShowModify(false);
          }}
          modify={true}
          id={id}
          title={title}
          deadline={deadline}
          initStat={initStat}
        />
      )}
      {(showModal || showModify) && (
        <div
          className="overlay"
          onClick={() => {
            setShowModal(false);
            setShowModify(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default App;
