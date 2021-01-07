import React, { ReactElement } from 'react';
import cn from 'classnames';

type PageProps = {
  children: ReactElement
}

const Page = ({ children }: PageProps): ReactElement => {
  return <>
    <div className={cn({
      'page': true
    })}>
      {children}
    </div>
  </>
}

export default Page;
