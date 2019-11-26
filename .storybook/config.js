import { configure } from '@storybook/react';
import "./App.scss";

configure(require.context('../src/components', true, /\.stories\.js$/), module);
