import { ImageService } from './../services/image.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  public imageUrl;


  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('id');
    this.getImagesUrl(key);

  }
  getImagesUrl(key: string){
    this.imageService.getImage(key).then(image => this.imageUrl = image.url);
  }

}
