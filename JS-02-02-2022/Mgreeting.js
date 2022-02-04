class person{
    constructor(nama, kelas, umur, favfandom){
        this.nama=nama;
        this.kelas=kelas;
        this.umur=umur;
        this.favfandom=favfandom;
    }
    greeeting(){
        return("namaku" + this.nama + "kelas" + this.kelas + "umurku" + this.umur + "fav fandom" + this.favfandom);
    }
}
const person1=new person ("salma setia", 11, 17, "BTS");
console.log(person1.greeeting());