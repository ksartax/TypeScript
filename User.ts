class User
{

  private imie: string;
  private id: number;

  constructor(id: number, imie: string){
    this.imie = imie;
    this.id = id;
  }

  getImie(){
    return this.imie;
  }

  getId(){
    return this.id;
  }

  setImie(imie: string){
    this.imie = imie;
    return imie;
  }

  setId(id: number){
    this.id = id;
  }

}
