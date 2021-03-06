import React from 'react';
import {
  HomePageContainer,
} from '../containers';

export default function HomePage() {
  return (
    <div className="wrapper">
      <section className="login-box">
        <div className="login-box-body">
          <h1 className="text-center">
            <HomePageContainer />
          </h1>
        </div>
      </section>
    </div>
  );
}
