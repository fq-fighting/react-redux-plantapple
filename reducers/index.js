//合并reducers
import { combineReducers } from 'redux'
import Apple from './AppleReducer'

const rootReducer = combineReducers({
    Apple,
})

export default rootReducer