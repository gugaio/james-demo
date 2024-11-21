import {UserAgent} from './userAgent';

const initial_instruction = "xxxx";
const agents = [new UserAgent()];
const client = new James.ConversationManager(initial_instruction, 'http://localhost:5000', agents);