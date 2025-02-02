import React from 'react';

export default function Signup() {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 row justify-content-center'>
            <div className='w-50 pt-4'>
              <h2 className='font-weight-bold'>Sign Up</h2>
              <div className='border p-4 Larger shadow rounded mt-4'>
                <form action='/'>
                  <div className='form-group mb-2'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' id='name' />
                  </div>
                  <div className='form-group mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' id='email' />
                  </div>
                  <div className='form-group mb-2'>
                    <label htmlFor='password'>password</label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                    />
                  </div>

                  <div className='mt-3 w-100'>
                    <button
                      type='submit'
                      className='btn w-100 text-white'
                      style={{ backgroundColor: '#387ed1' }}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
