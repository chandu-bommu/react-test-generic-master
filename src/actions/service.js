import { getMessages } from '../data';

export default function getChatLog() {
  return {
    type: 'GET_MESSAGES',
    payload: getMessages()
  };
}