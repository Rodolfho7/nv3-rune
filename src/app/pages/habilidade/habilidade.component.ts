import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-habilidade',
  templateUrl: './habilidade.component.html',
  styleUrls: ['./habilidade.component.scss']
})
export class HabilidadeComponent implements OnInit {

  @Input() icone = '';
  @Input() titulo = '';

  skill: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.skill = params.get('skill');
    });
  }
}
