import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../core/interfaces/player';
import { RankService } from '../../services/rank.service';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.scss']
})
export class MembroComponent {

  membro: Player | undefined = undefined;
  totalXP = 0;
  name: string = '';

  constructor(
    private route: ActivatedRoute,
    private rankService: RankService
  ) {
    this.route.paramMap.subscribe((params: any) => {
      this.name = params.get('name');
      if (this.name) {
        this.loadPlayer(this.name);
      }
    });
  }

  loadPlayer(name: string): void {
    this.rankService.runeRankUser(name).subscribe((player) => {
      this.membro = player;
    });
  }
}
