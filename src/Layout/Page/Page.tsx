import React, { ReactElement } from 'react';

export const Page = (props: { children: ReactElement }): ReactElement => {
  const { children } = props;

  return <>
    <div className='page'>
      {children}
    </div>
  </>
}
