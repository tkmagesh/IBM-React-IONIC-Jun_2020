export default function toggle(bugToToggle : any) {
    const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const action = { type: 'REPLACE_BUG', payload: toggledBug };
    return action;
}