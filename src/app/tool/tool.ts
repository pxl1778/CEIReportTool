import { Component, ViewChild, ElementRef } from '@angular/core';
import { TinyEditor } from '../tools/tiny-editor';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'tool',
  templateUrl: './tool.html',
  styleUrls: ['./tool.css']
})
export class Tool {
  @ViewChild('imgList') list:ElementRef;
  year = 2017;
  type = "Quarter";
  center = "HIV/HCV Center";
  quarterNumber = "1";
  content = "<p><strong>A. Summary</strong></p><p>&nbsp;</p><p><strong>B. Center highlight</strong></p><p>&nbsp;</p><p><strong>C. Challenges or Barriers</strong></p><p>&nbsp;</p><p><strong>D. Action plan moving forward</strong></p><p>&nbsp;</p><p><strong>E. Budget info</strong>";
  urlPaths = [];
  showTool = true;

  public constructor(private router: Router, private sanitizer:DomSanitizer){}

  ngOnInit(){
    let d = new Date();
    this.year = d.getFullYear();
  }

  editorChange(e){
    this.content = e;
  }

  removeURL(index){
    this.urlPaths.splice(index, 1);
  }

  addURL(){
    this.urlPaths.push({"urlPath": "", "description":""});
  }

  toggleView(){
    if(this.type != "Quarter"){
      this.quarterNumber = "";
    }
    this.showTool = !this.showTool;
  }

  getURL(i){
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlPaths[i].urlPath);
  }
}
