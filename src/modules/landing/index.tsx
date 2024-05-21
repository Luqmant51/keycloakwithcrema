'use client';
import React from 'react';
import Header from './Header';
import Content from './Content';
import { useSession } from 'next-auth/react';

const Landing = () => {
  const {data:session} = useSession()
  console.log(session);
  
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/*<Link rel='stylesheet' href='/signin'>*/}
      {/*  Sign In*/}
      {/*</Link>*/}
      <Header />
      <Content />
    </div>
  );
};

export default Landing;
