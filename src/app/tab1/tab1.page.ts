import {
  Component
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public commands: any[] = [
    {
      text: 'Да',
      cmd: 'da',
      color: 'warning'
    },
    {
      text: 'Да ну!',
      cmd: 'danu',
      color: 'secondary'
    },
    {
      text: 'Круто!',
      cmd: 'kruto',
      color: 'success'
    },
    {
      text: 'Угу!',
      cmd: 'ugu',
      color: 'dark'
    },
    {
      text: 'Хорошо!',
      cmd: 'horosho',
      color: 'light'
    },
    {
      text: 'Куда?',
      cmd: 'kuda',
      color: 'success'
    },
    {
      text: 'Нет!',
      cmd: 'net',
      color: 'danger'
    },
    {
      text: 'Ну нет!',
      cmd: 'nunet',
      color: 'primary'
    },
    {
      text: 'Плохо, конечно!',
      cmd: 'plohokonechno',
      color: 'secondary'
    },
    {
      text: 'Пойдем!',
      cmd: 'poidem',
      color: 'dark'
    },
    {
      text: 'Вот как!',
      cmd: 'votkak',
      color: 'medium'
    },
    {
      text: 'Зачем?',
      cmd: 'zachem',
      color: 'tertiary'
    },
    {
      text: 'Ага',
      cmd: 'aga',
      color: 'medium'
    },
    {
      text: 'Ха!',
      cmd: 'ha',
      color: 'primary'
    },
    {
      text: 'Вот что!',
      cmd: 'votchto',
      color: 'secondary'
    },
    {
      text: 'Уходи!',
      cmd: 'uhodi',
      color: 'danger'
    },
    {
      text: 'Садись!',
      cmd: 'sadis',
      color: 'dark'
    },
    {
      text: 'Смирись!',
      cmd: 'smiris',
      color: 'success'
    },
    {
      text: 'Да он козел!',
      cmd: 'daonkozel',
      color: 'tertiary'
    },
    {
      text: 'Да дура она!',
      cmd: 'daduraona',
      color: 'medium'
    },
    {
      text: 'Мимо!',
      cmd: 'mimo',
      color: 'light'
    },
    {
      text: 'Попал!',
      cmd: 'popal',
      color: 'danger'
    },
    {
      text: 'Сейчас!',
      cmd: 'seichas',
      color: 'dark'
    },
    {
      text: 'Подожди!',
      cmd: 'podozhdi',
      color: 'primary'
    },
    {
      text: 'Да ладно!',
      cmd: 'daladno',
      color: 'tertiary'
    },
    {
      text: 'Не спорь!',
      cmd: 'nespor',
      color: 'light'
    },
    {
      text: 'Сложно!',
      cmd: 'slozhno',
      color: 'danger'
    },
    {
      text: 'Забей!',
      cmd: 'zabei',
      color: 'primary'
    },
    {
      text: 'Мда',
      cmd: 'mda',
      color: 'light'
    },
    {
      text: 'Ох как!',
      cmd: 'ohkak',
      color: 'secondary'
    },
    {
      text: 'Когда?',
      cmd: 'kogda',
      color: 'dark'
    },
    {
      text: 'Поехали!',
      cmd: 'poehali',
      color: 'medium'
    },
    {
      text: 'Да пошел ты!',
      cmd: 'daposhelti',
      color: 'danger'
    },
    {
      text: 'Созвонимся!',
      cmd: 'sozvonimsa',
      color: 'primary'
    },
    {
      text: 'Что не так?',
      cmd: 'chtonetak',
      color: 'secondary'
    }
  ];
  public audio: any = new Audio();
  public isPress: any = true;
  public bigButtons: any = '';
  public roundButtons: any = '';
  public listButtons: any = '';

  constructor(private router: Router) {
    this.checkStorage();
  }

  private checkStorage() {
    if (localStorage.getItem('isPress') === null) {
      localStorage.setItem('isPress', '0');
      localStorage.setItem('bigButtons', '1');
      localStorage.setItem('roundButtons', '1');
      localStorage.setItem('listButtons', '0');
    } else {
      this.isPress = localStorage.getItem('isPress') === '0';
      this.bigButtons = localStorage.getItem('bigButtons') === '1' ? 'large' : '';
      this.roundButtons = localStorage.getItem('roundButtons') === '1' ? 'round' : '';
      this.listButtons = localStorage.getItem('listButtons') === '1' ? 'block' : '';
    }
  }

  public playAudio(cmd: string) {
    this.audio.src = `./assets/sounds/${cmd}.mp3`;
    this.audio.load();
    this.audio.play();
  }

  public goToTab2() {
    localStorage.setItem('isPress', '1');
    this.router.navigateByUrl('/tabs/tab2');
  }

  public ionViewWillEnter() {
    this.checkStorage();
  }
}
