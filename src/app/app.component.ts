import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICoin } from '../interfaces/ICoin';
import { Observable } from 'rxjs/';
import { Renderer2 } from '@angular/core';
import { FormattingService } from '../providers/formatingService';
import { SlideService } from '../providers/SlideManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  wax_info: ICoin = {};
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  API_URL = 'https://api.coinmarketcap.com/v2/ticker/2300/';

  constructor(private http: HttpClient, private renderer: Renderer2,
    private formatingService: FormattingService, public slideService: SlideService) { }

  closeModal() {
    const modal = document.getElementsByClassName('modal');
    this.renderer.addClass(modal[0], 'fade-out');
  }

  ngOnInit() {
    this.http.get<ICoin>(this.API_URL).subscribe(coin => {
      this.wax_info = {
        rank: coin.data.rank,
        market_cap: this.formatingService.formatNumber(coin.data.quotes.USD.market_cap),
        price_usd: coin.data.quotes.USD.price,
        volume_24h: this.formatingService.formatNumber(coin.data.quotes.USD.volume_24h),
        percent_change_24h: coin.data.quotes.USD.percent_change_24h
      };
    });
    // this.slideService.showSlides(1);
    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '110%',
      'z-index': -10,
      'left': 0,
      'right': 0,
      'bottom': '-10%',
    };

    this.myParams = {
      'particles': {
        'number': {
          'value': 100,
          'density': {
            'enable': true,
            'value_area': 800
          }
        },
        'color': {
          'value': '#ffffff'
        },
        'shape': {
          'type': 'circle',
          'stroke': {
            'width': 0,
            'color': '#000000'
          },
          'polygon': {
            'nb_sides': 5
          },
          'image': {
            'src': 'img/github.svg',
            'width': 100,
            'height': 100
          }
        },
        'opacity': {
          'value': 0.5,
          'random': false,
          'anim': {
            'enable': false,
            'speed': 1,
            'opacity_min': 0.1,
            'sync': false
          }
        },
        'size': {
          'value': 3,
          'random': true,
          'anim': {
            'enable': false,
            'speed': 40,
            'size_min': 0.1,
            'sync': false
          }
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#ffffff',
          'opacity': 0.4,
          'width': 1
        },
        'move': {
          'enable': true,
          'speed': 6,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'out',
          'bounce': false,
          'attract': {
            'enable': false,
            'rotateX': 600,
            'rotateY': 1200
          }
        }
      },
      'interactivity': {
        'detect_on': 'canvas',
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'repulse'
          },
          'onclick': {
            'enable': false,
            'mode': 'push'
          },
          'resize': true
        },
        'modes': {
          'grab': {
            'distance': 400,
            'line_linked': {
              'opacity': 1
            }
          },
          'bubble': {
            'distance': 400,
            'size': 40,
            'duration': 2,
            'opacity': 8,
            'speed': 3
          },
          'repulse': {
            'distance': 200,
            'duration': 0.4
          },
          'push': {
            'particles_nb': 4
          },
          'remove': {
            'particles_nb': 2
          }
        }
      },
      'retina_detect': true

    };
  }


}
