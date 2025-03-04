//TODO: Will fix this component later
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../redux/slice/modalSlice';
import { RootState } from '../../redux/store/store';
import React, { ReactNode, useState } from 'react';
import { Dialog } from '../ui/dialog';
import { Button } from '../ui/button';

export const Modal = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

const Open = ({
  children,
  modalName,
  modalProps,
}: {
  children: ReactNode;
  modalName: string;
  modalProps?: any;
}) => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal({ name: modalName, props: modalProps }));
  };

  return React.cloneElement(children as React.ReactElement, {
    onClick: handleOpenModal,
  });
};

const Window = ({ children, name }: { children: ReactNode; name: string }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const { openModal, modalProps } = useSelector(
    (state: RootState) => state.modal
  );

  if (openModal !== name) return null;

  // Handle state for input fields

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone:', phone, 'Password:', password);

    // Example of login logic (replace this with actual authentication):
    if (phone === '1234567890' && password === 'password') {
      alert('Login successful!');
      dispatch(closeModal()); // Close modal after successful login
    } else {
      alert('Invalid phone or password');
    }
  };

  return (
    <Dialog open={openModal === name} onClose={() => dispatch(closeModal())}>
      <div className="modal-content bg-white rounded-lg shadow-lg p-6">
        {/* <button
          onClick={() => dispatch(closeModal())}
          className=" top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          Close
        </button> */}
        <Button variant="ghost" onClick={() => dispatch(closeModal())}></Button>
        <form onSubmit={handleSubmit} className="">
          <div>
            <label htmlFor="phone" className="">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className=""
              placeholder="phone number"
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className=""
              placeholder="password"
            />
          </div>
          <div className="">
            <button
              type="button"
              onClick={() => dispatch(closeModal())}
              className=""
            >
              Cancel
            </button>
            <button type="submit" className="">
              Login
            </button>
          </div>
        </form>
      </div>
    </Dialog>
  );
};

Modal.Open = Open;
Modal.Window = Window;
