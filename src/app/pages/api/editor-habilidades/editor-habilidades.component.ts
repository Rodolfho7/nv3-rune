import { AfterViewInit, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';


@Component({
  selector: 'app-editor-habilidades',
  templateUrl: './editor-habilidades.component.html',
  styleUrls: ['./editor-habilidades.component.scss']
})
export class EditorHabilidadesComponent implements AfterViewInit {

  editor!: EditorJS;
  skillSelected!: string;
  skillList = [
    'agility',
    'archaeology',
    'construction',
    'cooking',
    'crafting',
    'divination',
    'dungeoneering',
    'farming',
    'firemaking',
    'fishing',
    'fletching',
    'herblore',
    'hunter',
    'invention',
    'mining',
    'runecrafting',
    'slayer',
    'smithing',
    'thieving',
    'woodcutting'
  ];

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  ngAfterViewInit(): void {
    this.editor = new EditorJS({
      tools: {
        header: Header,
        list: List,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile:(file: any) => {
                return this.saveImage(file);
              }
            }
          }
        }
      },
    });
  }

  save(): void {
    this.editor.save().then(async (result) => {
      const data = JSON.stringify(result).replace('<br>', '');
      await this.firestore.collection('habilidades').doc(this.skillSelected).set({
        text: data
      });
    });
  }

  saveImage(file: any) {
    const name = file.name.split('.')[0];
    return this.storage.ref(`${name}-${Date.now()}`).put(file).then((result) => {
      return result.ref.getDownloadURL().then((url) => {
        return {
          success: 1,
          file: {
            url: url
          }
        }
      });
    });
  }

  updateData(): void {
    this.firestore.collection('habilidades').doc(this.skillSelected).get().subscribe((hab) => {
      const rawData = hab.data() as any;
      let data;
      if (rawData) {
        data = JSON.parse(rawData.text);
      } else {
        data = undefined;
      }
      
      this.editor.destroy();
      this.editor = new EditorJS({
        tools: {
          header: Header,
          list: List,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile:(file: any) => {
                  return this.saveImage(file);
                }
              }
            }
          }
        },
        data: data
      });
    });
  }
}
