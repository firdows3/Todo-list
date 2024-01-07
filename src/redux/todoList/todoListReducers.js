
const initialState = {
    titles: []
};

export default function todoListReducer (state = initialState, action){
    switch (action.type) {
        case 'ADD_TODO':
            return{
                ...state,
                titles: [action.payload, ...state.titles]
            };
        
            case 'ADD_TASK':
                const {title, task} = action.payload
                const updatedTitles = state.titles.map(item => item.title === title ? {...item, tasks: [task, ...item.tasks]} : item);
                return {
                    ...state,
                    titles: updatedTitles
                }

        case 'REMOVE_TODO':
            return {
                ...state,
                titles: state.titles.filter(title => title.id != action.payload)
            };

        case 'UPDATE_TODO': 
            const updatedTaskIndex = state.titles.findIndex(title => title.id === action.payload)

            if(updatedTaskIndex !== -1){
                const updatedTasks = [...state.titles];
                updatedTasks[updatedTaskIndex] = action.payload;
                return {
                    ...state,
                    titles: updatedTasks
                }
            }
            return state;
        
            default:
                return state;
    }
}