import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClanService } from '../../services/clan.service';
import { Member } from 'src/app/core/interfaces/clan';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.scss']
})
export class MembrosComponent implements OnInit {

  members!: Member[];

  constructor(
    private router: Router,
    private clanService: ClanService
  ) { }

  ngOnInit(): void {
    this.clanService.runeClanMembers().subscribe((res) => {
      this.members = res;
    });
  }

  showMember(name: string): void {
    this.router.navigate(['membro', name]);
  }
}
