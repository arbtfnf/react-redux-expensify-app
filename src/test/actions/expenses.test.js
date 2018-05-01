import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('should check for error', () => {
    const errr = removeExpense({id: '5412ab'});

    expect(errr).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '5412ab'
    });
});

test('should check for error', () => {
    const errr1 = editExpense('5412ab',{ note: "SOME_UI"});

    expect(errr1).toEqual({
        type: 'EDIT_EXPENSE',
        id: '5412ab',
        updates: { 
            note: "SOME_UI"
        }

    });
});