import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { mediaDB } from 'src/app/shared/tables/media';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  public media = []

  constructor() {
    this.media = mediaDB.data;
  }

  public settings = {

    columns: {
      img: {
        title: 'Image',
        type: 'html',
      },
      file_name: {
        title: 'File Name'
      },
      url: {
        title: 'Url',
      },
    },
  };


  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  ngOnInit() {
  }

}
