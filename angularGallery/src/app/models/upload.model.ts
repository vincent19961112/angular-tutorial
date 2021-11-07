export class Upload {
  $Key: string;
  file: File;
  url: string;
  progress: number;
  name: string;
  createdOn: Date = new Date();
  constructor(file: File){
    this.file = file;
  }
}
