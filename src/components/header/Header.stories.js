import React from 'react';
import { Header } from './Header';

export default {
    component: Header,
    title: 'Header',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };

  export const LegalShieldDefault = () => <Header brand='legalshield' />;
  export const LegalShieldSignedIn = () => <Header brand='legalshield' auth='true' />
  export const CommercialShieldDefault = () => <Header brand='commercial' />;
  export const CommercialShieldSignedIn = () => <Header brand='commercial' auth='true' />
  export const IdShieldDefault = () => <Header brand='idshield' />;
  export const IdShieldSignedIn = () => <Header brand='idshield' auth='true' />
