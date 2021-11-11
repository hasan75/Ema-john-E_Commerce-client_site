import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
        <input
          className='shipping-form-input'
          defaultValue={user.displayName}
          {...register('name')}
        />
        <input
          placeholder='Email'
          defaultValue={user.email}
          className='shipping-form-input'
          {...register('email', { required: true })}
        />
        {errors.email && <span className='error'>This field is required</span>}
        <input
          placeholder='Adress'
          className='shipping-form-input'
          defaultValue=''
          {...register('Address')}
        />
        <input
          placeholder='City'
          className='shipping-form-input'
          defaultValue=''
          {...register('City')}
        />
        <input
          placeholder='Phone'
          className='shipping-form-input'
          defaultValue=''
          {...register('Phone')}
        />

        <input className='shipping-form-input' type='submit' />
      </form>
    </div>
  );
};

export default Shipping;
