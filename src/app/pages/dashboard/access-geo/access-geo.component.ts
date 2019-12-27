import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-access-geo',
  templateUrl: './access-geo.component.html',
  styleUrls: ['./access-geo.component.css']
})
export class AccessGeoComponent implements AfterViewInit {


  constructor(private ref: ElementRef) {
  }

  ngAfterViewInit(): void {
    const html = this.ref.nativeElement as HTMLElement;
    const element = document.createElement('script');
    element.id = 'clustrmaps';
    element.type = 'text/javascript';
    element.src = '//cdn.clustrmaps.com/map_v2.js?d=gqBX0NCZ-bHPpFMW_0e6Yy-FapJ0v9V1jVB6HKf1Weo&cl=ffffff&w=a&t=tt';
    html.querySelector('#c4').appendChild(element);
  }
}
