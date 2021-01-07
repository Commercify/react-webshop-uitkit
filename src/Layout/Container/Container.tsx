import React, { ReactElement } from 'react';

type ContainerProps = {
  children: ReactElement
}

const Container = ({ children }: ContainerProps): ReactElement => {
  return <>
    <div className='container'>
      {children}
    </div>
  </>
}

export default Container;
