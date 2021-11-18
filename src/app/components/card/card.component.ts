import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  @Input() titulo: string = '';
  @Input() skill: string | null = '';

  skillClasses = {};

  texto = textoExemplo;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.skill) {
      this.skillClasses = {
        'text-green-800': this.skill === 'farming' || this.skill === 'fletching',
        'bg-green-300': this.skill === 'farming' || this.skill === 'fletching',
        'text-gray-800': this.skill === 'mining' || this.skill === 'runecrafting',
        'bg-gray-300': this.skill === 'mining' || this.skill === 'runecrafting',
        'text-blue-800': this.skill === 'fishing' || this.skill === 'divination',
        'bg-blue-300': this.skill === 'fishing' || this.skill === 'divination',
        'text-yellow-900': this.skill === 'woodcutting' || this.skill === 'firemaking',
        'bg-yellow-500': this.skill === 'woodcutting' || this.skill === 'firemaking',
        'text-indigo-800': this.skill === 'agility',
        'bg-indigo-300': this.skill === 'agility',
        'text-yellow-800': this.skill === 'archaeology' || this.skill === 'invention',
        'bg-yellow-400': this.skill === 'archaeology' || this.skill === 'invention',
        'text-yellow-700': this.skill === 'construction' || this.skill === 'crafting' || this.skill === 'dungeoneering',
        'bg-yellow-300': this.skill === 'construction' || this.skill === 'crafting' || this.skill === 'dungeoneering',
        'text-pink-700': this.skill === 'cooking',
        'bg-pink-300': this.skill === 'cooking',
        'text-green-900': this.skill === 'herblore',
        'bg-green-400': this.skill === 'herblore',
        'text-yellow-400': this.skill === 'hunter',
        'bg-yellow-700': this.skill === 'hunter',
        'text-gray-300': this.skill === 'slayer',
        'bg-gray-600': this.skill === 'slayer',
        'text-yellow-300': this.skill === 'smithing',
        'bg-yellow-800': this.skill === 'smithing',
        'text-pink-300': this.skill === 'thieving',
        'bg-pink-800': this.skill === 'thieving'
      }
    }
  }
}

const textoExemplo = {
  "time" : 1637195352569,
  "blocks" : [
      {
          "id" : "HIOdMepuad",
          "type" : "header",
          "data" : {
              "text" : "Arvores",
              "level" : 2
          }
      },
      {
          "id" : "AQlWZ1du2l",
          "type" : "header",
          "data" : {
              "text" : "Árvores normais Nível 1-15",
              "level" : 3
          }
      },
      {
          "id" : "5Tght609tm",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 14k"
          }
      },
      {
          "id" : "Mjyy4Zupa7",
          "type" : "paragraph",
          "data" : {
              "text" : "Local:Varrock, atrás da Guilda dos Cozinheiros."
          }
      },
      {
          "id" : "Jaf4jsKxNh",
          "type" : "header",
          "data" : {
              "text" : "Carvalho Nível 15-30",
              "level" : 3
          }
      },
      {
          "id" : "GZBvZ4URh1",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 19k"
          }
      },
      {
          "id" : "5jE7qkQ5ry",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Varrock, oeste da fornalha. "
          }
      },
      {
          "id" : "jEycA5vkVU",
          "type" : "header",
          "data" : {
              "text" : "Salgueiro Nível 30-35",
              "level" : 3
          }
      },
      {
          "id" : "zUkgaJlLwz",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 27k"
          }
      },
      {
          "id" : "FDyP2llqP4",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Vila Draynor, atrás do banco."
          }
      },
      {
          "id" : "knrMqYiTPB",
          "type" : "header",
          "data" : {
              "text" : "Teca Nível 35-47",
              "level" : 3
          }
      },
      {
          "id" : "z-cIMdXUXx",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 43k"
          }
      },
      {
          "id" : "m3tyOcOd-U",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Tai Bwo Wannai, sul de Uzer"
          }
      },
      {
          "id" : "6qJ_m7koCn",
          "type" : "header",
          "data" : {
              "text" : "Bordo Nível 45-60",
              "level" : 3
          }
      },
      {
          "id" : "GLOnUXt9KA",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 52k"
          }
      },
      {
          "id" : "rN7uz9IGkk",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Aldeia dos Videntes, atrás do banco."
          }
      },
      {
          "id" : "mfCmWcj8mG",
          "type" : "header",
          "data" : {
              "text" : "Teixo Nível 60-68",
              "level" : 3
          }
      },
      {
          "id" : "I9amIEj-Qn",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 55k"
          }
      },
      {
          "id" : "p-kScOD0yj",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Varrock, leste do mercado geral."
          }
      },
      {
          "id" : "PQenrAJB0v",
          "type" : "header",
          "data" : {
              "text" : "Heras Níveis 68-80",
              "level" : 3
          }
      },
      {
          "id" : "mh-DkoAWLW",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 65k (aumenta com o nível)"
          }
      },
      {
          "id" : "8lyR4JY9Sn",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Parede de Faladore, leste da magnetita "
          }
      },
      {
          "id" : "ZdSJD6RAHp",
          "type" : "header",
          "data" : {
              "text" : "Acádias Nível 80-90",
              "level" : 3
          }
      },
      {
          "id" : "p2qGxvpg3v",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 70k (aumenta com o nível) "
          }
      },
      {
          "id" : "zC4232gRrH",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Menaphos, Distrito Imperia"
          }
      },
      {
          "id" : "yytyOHy7bv",
          "type" : "header",
          "data" : {
              "text" : "Bambu Nível 90-94",
              "level" : 3
          }
      },
      {
          "id" : "oA5jo76qNC",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H:85k"
          }
      },
      {
          "id" : "oTC_z21JHb",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Waiko, atrás do tuto de caça."
          }
      },
      {
          "id" : "jv8V1CA8c9",
          "type" : "header",
          "data" : {
              "text" : "Cristal Nível 94-99/120",
              "level" : 3
          }
      },
      {
          "id" : "pzv_4x4pWz",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 120k"
          }
      },
      {
          "id" : "QWUGSEzlhj",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: "
          }
      },
      {
          "id" : "N0Vo5Ijqhy",
          "type" : "paragraph",
          "data" : {
              "text" : "Recomendado: Colar da graça dos elfos ou roupa de sentinela"
          }
      },
      {
          "id" : "nGLcdLQqEc",
          "type" : "header",
          "data" : {
              "text" : "Bambu Dourado Nível 99-99/120",
              "level" : 3
          }
      },
      {
          "id" : "FKLdjEX2f1",
          "type" : "paragraph",
          "data" : {
              "text" : "EXP/H: 185k"
          }
      },
      {
          "id" : "JBD_grehOr",
          "type" : "paragraph",
          "data" : {
              "text" : "Local: Waiko, ilhas inexploradas."
          }
      },
      {
          "id" : "phR6b_VxEf",
          "type" : "header",
          "data" : {
              "text" : "Machados",
              "level" : 2
          }
      },
      {
          "id" : "NhGeOMmBbJ",
          "type" : "list",
          "data" : {
              "style" : "ordered",
              "items" : [
                  "Nível 01-06 Machado de bronze.",
                  "Nível 01-06 Machado de ferro.",
                  "Nível 01-21 Multi-machado anão.",
                  "Nível 06-21 Machado de aço.",
                  "Nível 21-31 Machado de mithril.",
                  "Nível 31-41 Machado de adamantio.",
                  "Nível 41-61 Machado rúnico.",
                  "Nível  61+  Machado dragônico (Aprimorado)."
              ]
          }
      }
  ],
  "version" : "2.22.2"
}