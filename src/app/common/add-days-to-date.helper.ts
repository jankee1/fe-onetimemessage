export function addDaysToDate(from: Date, daysToAdd: number): string {
    const current = from;
    const newDate = new Date(current.getFullYear(), current.getMonth(), current.getDate() + daysToAdd, current.getHours(), current.getMinutes());
    return newDate.toISOString().split('.')[0].replace(':00','');
}