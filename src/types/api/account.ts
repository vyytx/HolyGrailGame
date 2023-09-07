import { TUserData } from "#server/db/user.ts";
import { TUserType } from "../db/user.ts";
import { FlowCS, Response, none } from "./api.ts";

export type MSGloginToken = {
	loginToken: string
}

export type MSGUsernamePassword = {
	username: string
	password: string
}

export type ErrorReasonUnauthorized = 'USER_NOT_FOUND_BY_TOKEN';

export type ResponseCheckLogin = Response<{ isValid: boolean }, none>;

export type FlowCheckToken = FlowCS<MSGloginToken, ResponseCheckLogin>;
export type FlowLogin = FlowCS<MSGUsernamePassword, Response<MSGloginToken, 'USER_NOT_FOUND' | 'PASSWORD_INCORRECT'>>;
export type FlowRegister = FlowCS<MSGUsernamePassword, Response<MSGloginToken, 'USER_ALREADY_EXIST' | 'ILLEGAL_USERNAME' | 'ILLEGAL_PASSWORD'>>;
// for safety issue, we omit the access of password
export type FlowFetchUserData = FlowCS<MSGloginToken, Response<Omit<TUserData, 'password'>, ErrorReasonUnauthorized>>;
