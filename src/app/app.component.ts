import { Component } from '@angular/core';
import { IChartistSettingsType} from 'ngx-chartist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-chartist usage example';
  chartOpts: IChartistSettingsType;
  constructor() {
    this.chartOpts = {
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
      },
      options: {
        chartPadding: { right: 40 },
        fullWidth: true
      }
    };
  }
}
