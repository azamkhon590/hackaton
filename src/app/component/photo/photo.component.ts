import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent implements OnInit {

  fileToUpload: File | null = null;

  constructor(private httpClient: HttpClient){}
  
  ngOnInit(): void {
    
  }
  handleFileInput(event: any) {
    this.fileToUpload = event.target.files.item(0);
    console.log(this.fileToUpload);
    if (!this.fileToUpload) {
      return;
    }
    this.postFile(this.fileToUpload).subscribe(() => {
      console.log('????');
      return true;
    });
  }

  postFile(fileToUpload: File) {
    const endpoint = 'https://worthy-tick-noticeably.ngrok-free.app/classify';
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post(endpoint, formData, {
      headers: {
        'ngrok-skip-browser-warning': 'true',
      },
    });
  }

}
