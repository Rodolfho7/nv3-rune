import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';


@Component({
  selector: 'app-editor-habilidades',
  templateUrl: './editor-habilidades.component.html',
  styleUrls: ['./editor-habilidades.component.scss']
})
export class EditorHabilidadesComponent implements OnInit, AfterViewInit {

  editor!: EditorJS;
  skillSelected!: string;
  skillList = ['agility', 'archaeology', 'cooking', 'crafting', 'divination', 'dungeoneering', 'farming', 'firemaking', 'fishing', 'fletching', 'woodcutting'];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.editor = new EditorJS({
      tools: {
        header: Header,
        list: List,
        image: ImageTool
      },
      data: {"time":1637288451228,"blocks":[{"id":"fCYIQNlWfj","type":"header","data":{"text":"titulo agilidade","level":1}},{"id":"pKL0A0xXlD","type":"paragraph","data":{"text":"paragrafo qualquer<br>"}}],"version":"2.22.2"}
    });
  }

  save(): void {
    this.editor.save().then(async (result) => {
      // await this.firestore.collection('habilidades').doc(this.skillSelected).set({
      //   text: JSON.stringify(result).replace('<br>', '')
      // });
      console.log(result);
    });
  }
}
