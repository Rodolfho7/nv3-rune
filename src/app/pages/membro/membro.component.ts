import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player, Skill } from '../../core/interfaces/player';
import { RankService } from '../../services/rank.service';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss']
})
export class MembroComponent implements OnInit {

  membro!: Player;

  skills: Skill[] = [];

  constructor(
    private route: ActivatedRoute,
    private rankService: RankService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if (name) {
        this.loadPlayer(name);
      }
    });
  }

  loadPlayer(name: string): void {
    this.rankService.runeRankUser(name).subscribe((player) => {
      console.log(player);
      this.membro = player;
      // this.skills = player.skills;
      // this.converteSkillsArray(player.skills);
    });
  }

  converteSkillsArray(objeto: any): void {
    for(let item in objeto) {
      const skillItem = {
        ...objeto[item],
        name: item
      };
      this.skills.push(skillItem);
    }
  }
}
