import { queryHeroList } from 'services/api';
export default {
    namespace: 'hero', // 默认与文件名相同
    state: {
        heros: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/hero') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
    effects: {
        *fetch({ type, payload }, { put, call, select }) {
            const herolist = yield call(queryHeroList);
            console.log('fasfsa',herolist)
            yield put({
                type: 'save',
                payload: {
                    heros: herolist
                },
            });
        },
    },
}