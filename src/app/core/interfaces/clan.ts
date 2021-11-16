type Members = {
  name: string;
  rank: string;
  experience: number;
  kills: number;
}

export interface Clan {
  members: Members[]
}
