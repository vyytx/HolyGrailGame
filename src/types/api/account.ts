import { FlowCS } from "./api.ts";

export type TDashboardData = {

}

export type MSGloginTokenOnly = {
	loginToken: string
}

export type MSGUsernamePassword = {
	username: string
	password: string
}


export type FlowCheckToken = FlowCS<MSGloginTokenOnly, boolean>;
export type FlowLogin = FlowCS<MSGUsernamePassword, MSGloginTokenOnly>;
export type FlowRegister = FlowCS<MSGUsernamePassword, MSGloginTokenOnly>;
export type FlowFetchDashboard = FlowCS<MSGloginTokenOnly, TDashboardData>;