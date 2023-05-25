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

  members: Member[] = [];
  carregando = false;
  erro = false;
  errorMessage = '';

  constructor(
    private router: Router,
    private clanService: ClanService
  ) { }

  ngOnInit(): void {
    this.carregando = true;
    this.erro = false;
    this.clanService.runeClanMembers().subscribe((res) => {
      this.members = res
      this.carregando = false;
    }, (err) => {
      this.erro = true;
      this.errorMessage = err.error.erro;
      this.carregando = false;
    });
  }

  showMember(name: string): void {
    this.router.navigate(['membro', name]);
  }
}
