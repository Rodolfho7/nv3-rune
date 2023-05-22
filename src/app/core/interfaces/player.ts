interface Activities {

}

export interface Skill {
  id: number;
  rank: number;
  level: number;
  virtualLevel: number;
  xp: number;
}

export interface Skills {
  overall: Skill;
  attack: Skill;
  defence: Skill;
  strength: Skill;
  constitution: Skill;
  ranged: Skill;
  prayer: Skill;
  magic: Skill;
  cooking: Skill;
  woodcutting: Skill;
  fletching: Skill;
  fishing: Skill;
  firemaking: Skill;
  crafting: Skill;
  smithing: Skill;
  mining: Skill;
  herblore: Skill;
  agility: Skill;
  thieving: Skill;
  slayer: Skill;
  farming: Skill;
  runecrafting: Skill;
  hunter: Skill;
  construction: Skill;
  summoning: Skill;
  dungeoneering: Skill;
  divination: Skill;
  invention: Skill;
  archaeology: Skill;
}

export interface Player {
  name: string;
  // activities: Activities;
  skills: Skill[];
}
