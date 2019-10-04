import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';

import { Home } from '../home';
import { DogList, DogDetail } from '../dogs';
import { CatList, CatDetail } from '../cats';

export const Body: React.FC = () => {
  return (
    <div className='content'>
      <Switch>
        <Route path='/' exact={true} component={Home} />

        {/* match is greedy here, so we have to put the detail route first */}
        <Route
          path='/dogs/:id'
          render={({ match }: RouteComponentProps<{ id: string }>) => <DogDetail id={match.params.id} />}
        />
        <Route path='/dogs' component={DogList} />

        <Route
          path='/cats/:id'
          render={({ match }: RouteComponentProps<{ id: string }>) => <CatDetail id={match.params.id} />}
        />
        <Route path='/cats' component={CatList} />
      </Switch>
    </div>
  );
};
