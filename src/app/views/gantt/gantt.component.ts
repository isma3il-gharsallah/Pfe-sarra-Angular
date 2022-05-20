import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  AfterViewChecked,
  Input,
} from '@angular/core';
import * as Highcharts from 'highcharts/highcharts-gantt';
@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent implements OnInit {
  @ViewChild('divRef', { static: false }) divReference: ElementRef;
  @Input() siries: any = [];
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.createGanttOptionData(this.siries);
  }

  createGanttOptionData(siries) {
    console.log(siries);
    siries.forEach((elem) => {
      elem.point = { events: { click: this.updateSelectedElement } };
    });
    this.highchartclick();
  }

  highchartclick() {
    let day = 1000 * 60 * 60 * 24;

    Highcharts.ganttChart(this.divReference.nativeElement as HTMLElement, {
      chart: {
        renderTo: this.divReference.nativeElement as HTMLElement,
        events: {
          load: function () {
            Highcharts.each(this.series, (elem) => {
              // console.log(elem);
              if (elem.name != 'Navigator 1') {
                // console.log(elem.points)
                elem.points.forEach((taskElem) => {
                  // console.log(taskElem)
                  switch (taskElem.custom.taskStatus) {
                    case 'progress':
                      taskElem.update({ color: '#FFF4D2' });
                      break;
                    case 'completed':
                      taskElem.update({ color: '#EBF7EC' });
                      break;
                    case 'yetToStart':
                      taskElem.update({ color: '#EBF7FE' });
                      break;
                    case 'onHold':
                      taskElem.update({ color: '#FFF0F0' });
                      break;
                  }
                });
              }
            });
            this.xAxis[0].setExtremes();
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      scrollbar: {
        enabled: true,
      },
      navigator: {
        enabled: true,
        series: {
          type: 'gantt',
          pointPadding: 0.25,
        },
        yAxis: {
          min: 0,
          max: 3,
          reversed: true,
        },
      },
      xAxis: [
        {
          tickInterval: day,
          labels: {
            format: '',
          },
        },
      ],

      series: this.siries,
    });
  }

  updateSelectedElement() {
    console.log(this);
  }
}
