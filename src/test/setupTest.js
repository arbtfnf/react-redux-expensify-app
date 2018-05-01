import Enzyme from 'enzyme';
import Adaptor from 'enzyme-adaptor-react-16';


Enzyme.configure({
    adaptor: new Adaptor()
});