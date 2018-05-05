import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adaptor-react-16';
import DotEnv from 'dotenv';

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adaptor: new Adaptor()
});