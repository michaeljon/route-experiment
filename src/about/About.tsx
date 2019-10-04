import React from 'react';

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

export const About: React.FC<{
  aboutVisible: boolean;
  setAboutVisible: (value: React.SetStateAction<boolean>) => void;
}> = props => {
  return (
    <Modal show={props.aboutVisible} centered={true} scrollable={false} animation={false}>
      <ModalHeader>
        <ModalTitle>Pet shop...</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div>All the pets for all the people</div>
      </ModalBody>
      <ModalFooter>
        <div className='pull-right'>
          <button className='btn btn-primary' type='button' onClick={() => props.setAboutVisible(false)}>
            Ok
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};
