import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@awesome-cordova-plugins/image-picker/ngx';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { ServiceService } from 'src/app/base/service.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.page.html',
  styleUrls: ['./ajouter-annonce.page.scss'],
})
export class AjouterAnnoncePage implements OnInit {

  
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  public info : any = {}

  voitures = [
    {
      nom_voiture : 'Dacia'
    },
    {
      nom_voiture : 'Peogeot'
    },
    {
      nom_voiture : 'Citroen'
    }

  ];
  emplacements = [
    {
      nom_emplacement : 'Antananarivo'
    },
    {
      nom_emplacement : 'Majunga'
    },
    {
      nom_emplacement : 'Tamatave'
    }

  ];
  
  allPhotos: string[] = [];

  constructor(
    private imagePicker: ImagePicker,
    private webview : WebView,
    private apiService : ServiceService
  ){ }
 
  ouvrirGalerie(){
    this.imagePicker.hasReadPermission().then(res=>{

      console.log('permission status = ', res)

      if( res == false){
        this.imagePicker.requestReadPermission().then(res1=>{
          console.log('requested permission status = ',res1);
        })
      }else{
        this.allPhotos = [];
        let options: ImagePickerOptions = {
          maximumImagesCount : 5
        }
        this.imagePicker.getPictures(options).then(result=>{
          console.log('selected photos = ',result);

          if(result!=null){
            for (var i = 0; i < result.length; i++) {
              console.log('each result = ', result[i]);
              let finalVar = this.webview.convertFileSrc(result[i]);
              this.allPhotos.push(finalVar);
              
            }
            console.log('final arr = ',this.allPhotos);
          }else{
            console.log('result is empty');
          }
        })
      }
    })
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  ngOnInit() {
  }

  swiperSlideChanged(e: any) {
    console.log('changed:',e);
  }

  onClick(){
    console.log(this.info);
  }

  async ajouterAnnonce(request : any) {
    await this.apiService.addAnnonce(request)
      .subscribe(res => {
        console.log("ajouter avec succès : ",res);
      }, err => {
        console.log(err);
    });
  }
}
