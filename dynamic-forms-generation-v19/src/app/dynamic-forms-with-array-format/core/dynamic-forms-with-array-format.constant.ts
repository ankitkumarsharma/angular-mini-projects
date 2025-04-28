import { ErrorMessagesModel } from "./dynamic-forms-with-array-format.models";

export const ERROR_MESSAGES: ErrorMessagesModel = {
    name: 'Name is required',
    featureMaxLength: 'Feature length up to 5 chars only',
    featureWithName: 'In Feature, you should use first two letter of your Name',
    category: 'Category is required',
    onlyChars: 'Only Characters [a-z,A-Z] Allowed'
}