import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={2389738765}/>);
    expect(wrapper).toMatchSnapshot();
});