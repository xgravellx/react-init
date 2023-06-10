import { createSelector } from 'reselect';
import { IStore } from "../store/IStore";

const selectAuth = (state: IStore) => state.auth;

const AuthSelector = createSelector(
    [selectAuth],
    (auth) => auth.authInfo,
);

export { AuthSelector };
