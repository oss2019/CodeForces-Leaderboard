import axios from 'axios';

import { baseUrl } from './Shared';

export const getLeaderboardData = () => axios.get(`${baseUrl}/leaderboard/rankings`);
export const signup = (data: any) => axios.post(`${baseUrl}/club/member/new/member`, data);
