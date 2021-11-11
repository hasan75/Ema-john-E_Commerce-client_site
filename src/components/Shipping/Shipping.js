import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb'

const Shipping = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    const savedCart = getStoredCart();
    data.order = savedCart;
    //order
    fetch('http://localhost:5000/orders',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        alert('Order Process Succeed');
        clearTheCart();
        reset();
      }
      //console.log(result)
    })
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
