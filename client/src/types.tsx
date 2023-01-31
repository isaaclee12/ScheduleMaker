export default interface Shift {
    date: string,
    day_of_week: string,
    end_time: string,
    id: string,
    location: string,
    name: string,
    position: string,
    start_time: string,
    total_hours: number,
}

export type ShiftArray = Shift[];