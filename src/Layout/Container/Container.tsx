import React, { ReactElement } from 'react';

export const Container = (props: { children: ReactElement }): ReactElement => {
  const { children } = props;

  return <>
    <div className='container'>
      {children}
    </div>
  </>
}
