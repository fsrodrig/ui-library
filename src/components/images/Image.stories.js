import React from 'react';
import { Image } from './Image';

export default {
    component: Image,
    title: 'Image',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };

export const logoData = {
  img: 'legalshield-logo.svg'
}

export const Default = () => <Image { ...logoData } />;
export const AvatarPlaceholder = () => <Image img='avatar-placeholder.svg' />;
export const Bell = () => <Image img='bell.svg' />;
export const CommercialShieldLogo = () => <Image img='commercial-logo.svg' />;
export const Help = () => <Image img='help.svg' />;
export const IdShieldLogo = () => <Image img='idshield-logo.svg' />;
export const LegalShieldLogo = () => <Image img='legalshield-logo.svg' />;
export const Menu = () => <Image img='menu.svg' />;
