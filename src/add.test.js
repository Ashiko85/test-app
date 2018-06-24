import add from './add';
import {configure} from "enzyme/build/index";
import Adapter from "enzyme-adapter-react-16/build/index";
configure({ adapter: new Adapter() });

test('adds 2 + 7 to equal 9', () => {
    expect(add(2,7)).toBe(9);
});

test('should return error if params are strings', () => {
    expect(add('a', 'b')).toBe('error');
});

test('should return error if only one params', () => {
    expect(add(1)).toBe('error');
});

test('should return error if params not exist', () => {
    expect(add()).toBe('error');
});
