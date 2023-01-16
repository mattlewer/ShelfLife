import { DatePickerIOSBase } from "react-native"

export const epochToDateString =(epoch: number): string => {
    let date = new Date(0)
    date.setUTCSeconds(epoch);
    return date.toLocaleDateString();
}