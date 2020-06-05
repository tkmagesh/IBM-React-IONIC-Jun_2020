export default function removeClosed(currentBugs : any) {
    const closedBugs = currentBugs.filter((bug:any) => bug.isClosed);
    const action = { type: 'REMOVE_BUGS', payload: closedBugs };
    return action;
}