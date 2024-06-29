import { Employee } from "./Employee";
import { Employer } from "./Employer";
import { PayInfo } from "./PayInfo";
import { TimeOffInfo } from "./TimeOffInfo";

export interface Paystub {
    employee: Employee,
    employer: Employer,
    pay_info: PayInfo,
    time_off_info: TimeOffInfo
}