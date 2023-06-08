import { useState } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log('Cerrando modal');
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className={'modal'}
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
    >
      <h1>Hola mundo</h1>
      <hr />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis recusandae
        aspernatur deserunt iusto et officiis eius excepturi velit dolore fuga dolorem
        impedit voluptatibus aliquam laudantium, molestias totam, a distinctio, repellat
        ipsa provident.
      </p>
    </ReactModal>
  );
};
