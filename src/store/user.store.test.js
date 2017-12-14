import {createStore} from 'redux';
import expect from 'expect';
import rootReducer from '../reducers';
import {initialState} from '../reducers/initialState';
import * as userActions from '../actions/userActions';


describe('Test users store manipulation ', () => {


    const store = createStore(rootReducer, initialState);
    const user = {
        username: "my_name",
        firstname: "john",
        lastname: "doe",
        password: "johndoe123",
        security_question: "random question",
        answer: "my answer",
        id: 1
    };
    const token = "qws3456tghyGFrtyH7uhji87yujh";

    it('Creates a user', () => {

        const action = userActions.createUserSuccess(user);
        store.dispatch(action);

        const actual = store.getState().user;
        const expected = {
            username: "my_name",
            firstname: "john",
            lastname: "doe",
        };
        expect(actual).toEqual(expected);
    });

    it('sets authentication token', () => {

        const action = userActions.authenticateUserSuccess(token);
        store.dispatch(action);

        const actual = store.getState().user.token;
        const expected = token;
        expect(actual).toEqual(expected);
    });

});
