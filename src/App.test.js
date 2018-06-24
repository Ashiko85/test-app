import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Components/Header';
import Footer from './Components/Footer';
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    shallow(<App />);
});

it('should render header', () => {
    shallow(<Header />);
});
it('should render footer', () => {
    shallow(<Footer />);
});

it('renders header message', () => {
    const wrapper = shallow(<Header />);
    const welcome = <h1 className="App-title">Header</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders footer message', () => {
    const wrapper = shallow(<Footer />);
    const welcome = <h1 className="App-title">Footer</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//
//
//
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });
