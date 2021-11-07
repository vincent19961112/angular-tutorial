import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from './../services/image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit , OnChanges{

  images;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(data => {
      this.images = [];
      data.forEach(item => {
        const a = item.payload.toJSON();
        a["$Key"] = item.key;
        this.images.push(a);
      });
   });
  }
  ngOnChanges() {
    this.images = this.imageService.getImages();
  }

}
