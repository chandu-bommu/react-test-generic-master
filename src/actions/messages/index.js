import { getMessages } from '../../data';

export function getMessageList() {
  return {
    type: 'GET_MESSAGES',
    payload: getMessages()
  };
}