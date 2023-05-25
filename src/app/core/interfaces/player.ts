interface Activities {

}

export interface Skill {
  id: number;
  rank: number;
  level: number;
  xp: number;
  name: string;
}

export interface Player {
  // player: {
  //   name: string;
  activities: Activities;
  skills: Skill[];
  // }
}
