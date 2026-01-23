// export function TaskReducer(tasks, action) {
//   switch (action.type) {
//     case 'added': {
//         return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ]
//     }
//     case 'changed':{
//        return tasks.map((t) => {
//               if (t.id === action.task.id) {
//                   return action.task;
//               } else {
//                   return t;
//               }
//           })
//     }
//     case 'deleted':{
//        return tasks.filter((t) => t.id !== action.id);
//     }
//     default: throw Error('azione non trovata');
//   }
// }

//immer Version
export function TaskReducer(draft, action) {
  switch (action.type) {
    case 'added': {
        draft.push({
          id: action.id,
          text: action.text,
          done: false,
        });
        break;
    }
    case 'changed':{
        const index = draft.findIndex(t=>t.id===action.task.id);
        draft[index] = action.task;
        break;
    }
    case 'deleted':{
       return draft.filter((t) => t.id !== action.id);
    }
    default: throw Error('azione non trovata');
  }
}