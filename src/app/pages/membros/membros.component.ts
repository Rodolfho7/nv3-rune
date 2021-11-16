import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clan } from '../../core/interfaces/clan';
import { ClanService } from '../../services/clan.service';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent implements OnInit {

  members!: Clan;

  constructor(
    private router: Router,
    private clanService: ClanService
  ) { }

  ngOnInit(): void {
    this.clanService.runeClanMembers('nivel 3').subscribe((res) => {
      this.members = res;
    });
  }

  showMember(name: string): void {
    this.router.navigate(['membro', name]);
  }
}
