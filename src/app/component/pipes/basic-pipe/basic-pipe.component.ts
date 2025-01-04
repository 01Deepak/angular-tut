import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpparcasePipe } from '../custom-pipe/upper-case/upparcase.pipe';
import { ReversePipe } from '../custom-pipe/reverse/reverse.pipe';
@Component({
  selector: 'app-basic-pipe',
  imports: [CommonModule, UpparcasePipe, ReversePipe],
  templateUrl: './basic-pipe.component.html',
  styleUrl: './basic-pipe.component.scss'
})
export class BasicPipeComponent {
  text: string = 'Hello world';
 today: Date = new Date();
 amount: number = 1000;
}
