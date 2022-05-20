import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsprojet',
  templateUrl: './detailsprojet.component.html',
  styleUrls: ['./detailsprojet.component.css']
})
export class DetailsprojetComponent implements OnInit {
  siries = [];
  constructor() {}

  ngOnInit() {
     console.log( (new Date('2020/9/10')));
     
    this.siries = [
       
      {
         type: 'gantt',
        states: { hover: { enabled: false } },
        // point: { events: { click: this.updateSelectedElement } },
        data: [
          {
            id: 's2',
            name: 'Picture Verification',
            start: Date.UTC(2020, 9, 10),
            end: Date.UTC(2020, 9, 24),
            custom: {
              taskStatus: 'progress',
              taskLabel: 'Progress',
              taskLabelColor: '#7D6E00',
            },
          },
          {
            id: 'a2',
            name: 'Material verification',
            start: Date.UTC(2020, 9, 20),
            end: Date.UTC(2020, 9, 24),
            custom: {
              taskStatus: 'yetToStart',
              taskLabel: 'Yet to Start',
              taskLabelColor: '#006497',
            },
            // dependency: 's',
            parent: 's2',
          },
          {
            id: 'b2',
            name: 'Start of construction',
            start: Date.UTC(2020, 9, 12),
            end: Date.UTC(2020, 9, 16),
            custom: {
              taskStatus: 'onHold',
              taskLabel: 'On Hold',
              taskLabelColor: '#DF0101',
            },
            parent: 's2',
          },
          {
            id: 'c2',
            name: 'Picture verification before construction',
            start: Date.UTC(2020, 9, 17),
            end: Date.UTC(2020, 9, 21),
            custom: {
              taskStatus: 'completed',
              taskLabel: 'Completed',
              taskLabelColor: '#047205',
            },
            dependency: {
              to: 'b2',
              lineColor: '#047205',
              marker: {
                color: '#047205',
              },
            },
            parent: 's2',
          },
          {
            id: 'd2',
            name: 'Picture verification during construction',
            start: Date.UTC(2020, 9, 14),
            end: Date.UTC(2020, 9, 18),
            custom: {
              taskStatus: 'progress',
              taskLabel: 'Progress',
              taskLabelColor: '#7D6E00',
            },
            dependency: {
              to: 'c2',
              lineColor: '#7D6E00',
              marker: {
                color: '#7D6E00',
              },
            },
            parent: 's2',
          },
          {
            id: 'e2',
            name: 'Picture verification after construction',
            start: Date.UTC(2020, 9, 19),
            end: Date.UTC(2020, 9, 23),
            custom: {
              taskStatus: 'yetToStart',
              taskLabel: 'Yet to Start',
              taskLabelColor: '#006497',
            },
            parent: 's2',
          },
        ],
        dataLabels: [
          {
            enabled: true,
            format:
              '<div style="color:{point.custom.taskLabelColor}">' +
              '<span>{point.custom.taskLabel}</span>' +
              '</div>',
            useHTML: true,
            align: 'center',
          },
        ],
      },
    ];
  }  }